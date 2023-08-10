---
title: "Pushing Data over Email"
description: "Email is still a useful transport mechanism for data (like Google Analytics, etc.), despite ftp, web services, etc. Some websites offer email for cheap, while other access can cost a lot of money. Email is also a push service, meaning you do not have to ask periodically if new data has arrived - if you do it right. Of course, that service is rather useless without an automated way to get that data into a database. Here is an introduction to the&nbsp;procmail program and the&nbsp;ancient art of the Unix mail filter."
date: 2008-11-19 22:11:18
tags: data
featuredImage: https://media.eagereyes.org/media/2008/emailDog_small.jpg
---

<p align="center"><img src="https://media.eagereyes.org/media/2008/emailDog_small.jpg" alt="email dog" width="400" height="245" border="0" /></p>

# Pushing Data over Email

Email is still a useful transport mechanism for data (like Google Analytics, etc.), despite ftp, web services, etc. Some websites offer email for cheap, while other access can cost a lot of money. Email is also a push service, meaning you do not have to ask periodically if new data has arrived - if you do it right. Of course, that service is rather useless without an automated way to get that data into a database. Here is an introduction to the procmail program and the ancient art of the Unix mail filter.

## Pushing Email

But first a bit of email theory: When you send an email, your mail program contacts the mail server of the recipient (or an intermediary mail server, which then does the same), and tells it the sender, recipient, content, etc. of the email. The email is thus 'pushed' to the recipient's mail server, a process that typically takes a few seconds (depending on the size of the email).

This is similar to the way a letter or parcel is sent. The letter is transported to the recipient's mailbox and left there. Just like we have to check the mailbox periodically to see if new mail has arrived, most people's email programs ask their mail server if there is new email every few minutes. This part is usually referred to as 'pull,' because it requires the recipient to periodically check and retrieve the message.

But what if we were to live right next to the mailbox? Or if we could ask the friendly postman to knock on our door when we get a letter? That's the way things work when you have an account directly on the server that also acts as your mail server: a new email appears in your mailbox the moment it is delivered. Not only is the email 'pushed' to the user, the mail server can also check if the user has left any instructions what to do when a new email arrives, like filing it depending on the sender and subject, running it through a spam filter, etc.

## Email Filters

The mechanism for filtering email is known as the `.forward` file. This file lives in the user's home directory and is called a "dot file" (because it starts with a period, it is not normally shown when listing the directory). As its name suggests, it can contain one or more addresses that each email to that user is to be forwarded to – this is how simple distribution lists and functional email roles (like support, office, abuse) used to be handled. In addition, the syntax also allows the specification of a program to hand the email over to.

There are several programs for this purpose (like the aptly-named `vacation` program), the best-known of which is `procmail`. Procmail uses a further dot file, `.procmailrc`, to specify conditions and actions to be performed when an email matches those conditions. This is a lot more flexible than a simple forward list, and provides actions such as moving an email to a particular folder, discarding it, or handing it over to yet another program.


## The Setup
What I will describe in the following is a particular setup that I use for collecting data sent through email. To use this, you will have to have access to a Unix/Linux host, shell access (it's possible to do these things without shell access, but difficult to debug when things don't work), and some familiarity with the Unix command line. If you are running your own server, you have to have a mail transfer agent set up and accepting email.

I get the data emailed to a Gmail account, which stores it as a backup and forwards it to my actual data collection account. This is important because it means that I don't have to go to great lengths to check for errors (i can always re-forward my backup), and it also hides my data collection email address.

When an email is received by the data collector that matches the criteria (i.e., coming from a particular address and correct subject), it is run through a filter that extracts any attachments and stores them in a particular directory, and is then discarded. Of course, the same mechanism could also be used to do things like run a <a href="http://flowingdata.com/2008/11/05/how-to-make-your-own-twitter-bot-python-implementation/">Twitter bot</a>.

Other scripts are run in a cron job to pick up the files and push them into a database or do other things with them. The reason for this is that I want to do as little as possible in the actual mail filter, to reduce complexity and sources for errors.

## Procmail

Like many Unix programs, <a href="http://www.procmail.org/">procmail</a> has been around for many, many years (the first version was released in December 1990). Its age does not take away from its functionality, but it does explain the cryptic definition file syntax. Documentation is also largely cryptic; there is a <a href="http://www.ii.com/internet/robots/procmail/qs/">very readable introduction</a>, but it's also rather long to cover all the program's options.

The first step in using procmail is to actually have it run for every email. The way this is done is with the following line in your `.forward` file:

>	`>|/usr/bin/procmail`

Make sure the path for procmail is correct, but other than that, this is very simple. Now that procmail is being run on every email the user receives, we have to write the rules for it. This is what such a rule (stored in `.procmailrc`) looks like:

```
`:0
* ^Subject: (Fwd: )?Analytics eagereyes.org
| bin/extractAttachments.py /tmp/data/www
```

The first line starts the rule and allows a number of flags (like c for making a copy of the mail, so it can be processed by further rules even if this one matches). The second line contains a condition, which is a <a href="http://en.wikipedia.org/wiki/Regular_expression">regular expression</a>. Any header field can be used here, and several conditions can be put on separate lines, which all have to be met for the rule to become active. The last line specifies the action, which in this case is to run a program. As the use of the pipe character (<span style="font-family: terminal, monaco;">|</span>) suggests, the program will receive the email through its standard input stream (stdin).

Any program can be run in a procmail rule, just like it were run from the shell. Commands can also be passed, like in this case the directory for storing the data – which might be different for different data sources.

Testing the procmail rule can be done by running procmail and passing it an email through stdin. Here I am using the mbox file created by the ancient <span style="font-family: terminal, monaco;">mail</span> program. More user-friendly ones (like <span style="font-family: terminal, monaco;">pine</span>) are usually available, and can also export emails.

> `procmail < mbox`

If the rule works and the script does its thing correctly, the attachment will now be a file in the right directory. The next step is to send a new email with attachment to the address and see if things work. If they do, the email will not show up in the inbox, only the attachment will appear in the directory (procmail is only run automatically on new emails).

## The Attachment Extractor Script

The script below is a very simple Python program that extracts any attachments from an email and stores them in a directory. It makes good use of the excellent libraries that are included in Python, but performs no error checking whatsoever. If the email is not well-formed, or the attachment is not base64-encoded (which is very unusual in this day and age, however), it will silently fail. Despite that, it works well for its purpose, and lets me collect data that would otherwise require a lot of manual effort.

```python
#! /usr/bin/python

""" Extract attachments from emails and store them as files.
    Command-line argument: target directory
    Stdin: email text (e.g., through procmail)

    This script performs no error checking and assumes that anything with
    a filename will be base64-encoded. This is really only meant to collect
    data that is emailed automatically. Test well and use at your own risk.
"""

import sys
import email.parser
import base64

BASEDIR = sys.argv[1] + '/'

parser = email.parser.Parser()
mail = parser.parse(sys.stdin)
if mail.is_multipart():
	for m in mail.get_payload():
		if (m.get_filename() != None):
			file = open(BASEDIR + m.get_filename(), 'w')
			file.write(base64.b64decode(m.get_payload()))
			file.close()
```

_Posted by <a href="/about">Robert Kosara</a> on November 19, 2008_
