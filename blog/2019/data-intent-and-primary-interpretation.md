---
title: "Data: Intent and Primary Interpretation"
description: "Take a JPEG image file and a CSV file. Which of these two is data? Is one of them more obviously data than the other? I think the key difference is the intent behind the data and its primary interpretation."
date: 2019-09-26 19:56:31
tags: data
featuredImage: https://media.eagereyes.org/wp-content/uploads/2019/09/data-rows.jpg
outline: false
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2019/09/data-rows.jpg" width="660" height="495" /></p>

# Data: Intent and Primary Interpretation

Take a JPEG image file and a CSV file. Which of these two is data? Is one of them more obviously data than the other? I think the key difference is the intent behind the data and its primary interpretation.

The way we experience different files is governed by the tools we use. Every file browser and operating system these days displays an image as a thumbnail, so we know immediately what it is (and what it’s of). That can make it difficult to appreciate how much goes into transforming the data encoded in the JPEG format into pixels you can see.

The same is true for the CSV, though it’s the other way around. CSV is a text format, which makes it easy to read for humans. Any text editor can show you the characters that make up the numbers. It takes more work to turn this into a representation that can be used by programs, though, because they need to parse all those strings of numbers back into useable binary representations. 

Both are data in the end, of course, since anything a computer can store is data by definition. That doesn’t even just include files you think of as data but also programs, the low-level structure of the storage medium itself, etc.

What does distinguish data files from others is the intent with which they were created. They have file extensions, file format markers, and metadata that tells the system that they are specific kinds of files and – more importantly – that there is a specific way of interpreting them. Not the only way, but a clearly meaningful way.

Images, videos, etc., are created with a primary interpretation in mind. For an image, it is to be rendered onto the screen (and maybe manipulated in a photo editor), for a video it is to be played (or edited, in a specific editor), a 3D design to be rendered in 3D and perhaps sliced for a 3D printer, a sound file to be played through speakers, etc.

Data files are different because they record data without a specific intent. There is nothing that makes one CSV file work better as a bar chart and another better as a line chart. One data file isn’t better aggregated by year while another needs to be filtered to a particular region first and then summed up across vendors.

The data that is of interest for data analysis and visualization is different from images because it does not have a primary interpretation. A database table can contain many different kinds of data in each of its columns, describing anything. Business transactions, counts of salmon at different observation points over time, vote counts, etc.

Since there is no primary interpretation, choices have to be made. A program can analyze the data and make suggestions, but ultimately the user needs to figure out what way of dealing with the data is the most useful. Perhaps it’s a scatterplot or a bar chart. Perhaps a script that processes the data into some other form, sends out alerts, creates a website. Perhaps it’s just a table listing the numbers in all the rows and columns (assuming that is a reasonable assumption about the file’s structure), but even that is a choice.

This is part of what makes data so interesting, though: there are many possible interpretations of the same data; sometimes finding a good one is obvious and easy, often it is hard and requires trying out many different approaches.

Of course images, videos, etc. are data too. Of course it can be a good idea to try out interpretations other than the obvious ones, and of course that can be interesting or lead to new insights – or it can be a novelty without much value.

But the image already has an intent and a primary interpretation associated with it that works for the vast majority of people. The data file does not. That I think is the key difference between the two.


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://playswithdata.wordpress.com" rel="nofollow noopener" target="_blank">playswithdata</a> says…
>	Great post Robert.  It does seem that providing an image is about bringing some kind of meaning to the data.  Ideally you can interpret how it's being framed and have access to the underlying data as well so you can decide if there's more to be discovered. 
>	~ P.W.D.

Monika Wahi says…
>	This is a very thought provoking point! I will agree with one caveat: Survey data. I collect a lot of survey data. Survey data is, "Some assembly required". I just recorded a course for LinkedIn Learning that will be called, "Data Curation Foundations". In one chapter, I explain all the survey metadata and curation one has to make when developing surveys so one interprets the data correctly - because there is only ONE interpretation of those data, which is the answers to the survey. Think of how an AI algorithm looks at a new, training set of images. That is how we look at survey data. But for both, there is only really one human interpretation. That's the only caveat I could think of. Good argument!!!

Cédric Lombion says…
>	Interesting, but I feel that this raises more questions.
>	
>	What about geographic data? There is a primary intent which is to produce a geographical representation, whether before or after analysis.
>	
>	I think the distinction between data and data file is also key. A data file, as in the digital container for your data (xls, csv, json, sqlite), does not denote a primary intent (at the exception of geographic data?). But the data itself can absolutely denote a primary intent, which is generally related to the way the data creator expected the data users to engage with it. 
>	
>	When we reshape data to facilitate a specific analysis, it's because the formatting of the data was initially aimed at a different kind of analysis.
>	
>	I think it is also worth being very careful about the idea of data not having a primary intent, if only because it reinforces the problematic tendency of many data practitioners not to question the setting (intent, methodology, bias) in which the data was created. See this book for an interesting deep dive into the topic: https://mitpress.mit.edu/books/all-data-are-local

</aside>

