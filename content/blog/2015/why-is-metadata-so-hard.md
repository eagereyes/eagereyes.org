# Why Is Metadata So Hard?

The U.S. Department of Education just released <a href="https://collegescorecard.ed.gov/data/">an amazing dataset about the costs of going to college, earnings potential, etc</a>. They're doing so many things right, it's really great. But what is still lacking is the metadata, making analysis harder than it needs to be.

I haven't even looked through all the data, but it looks very promising. There are 18 years of data, and there is a lot of it, broken down by major, etc. There are already <a href="http://www.washingtonpost.com/blogs/wonkblog/wp/2015/09/14/this-chart-shows-why-parents-push-their-kids-so-hard-to-get-into-ivy-league-schools/">first news stories based on it</a>, and I'm sure this will be a great resource going forward (in particular if they update it regularly).

It therefore bothers me even more that they still don't get the metadata right. There is of course a PDF with all the values used to encode states, etc., as well as a CSV file with all the same data. Unfortunately, that CSV is one enormous spreadsheet containing all the fields, which is impossible to parse automatically.

There is also a YAML file that got me excited at first. It describes all the variables and even contains examples (does anybody know what the format is? Is this some sort of standard?). Looks great at first, until you find this:

<pre>school.zip:
  source: ZIP
  type: integer
  description: ZIP code</pre>

Sure, ZIP codes are technically integers. But that is much less interesting than knowing that they are ZIP codes. That lets a program do much more with them than plotting them as simple numbers. The same is true for the state FIPS codes, state abbreviations, latitude and longitude, etc. Knowing that WA isn't just a string but encodes a state lets a program do so many more useful things!

The same is true for booleans. Sure they're numbers, but they mean different things.

<pre>school.minority_serving.historically_black:
  source: HBCU
  type: integer
  description: Flag for Historically Black College and University</pre>

And then there's this:

<pre>school.degrees_awarded.predominant:
  source: PREDDEG
  type: integer
  description: |-
    Predominant degree awarded
    0    Not classified
    1    Predominantly certificate-degree granting
    2    Predominantly associate's-degree granting
    3    Predominantly bachelor's-degree granting
    4    Entirely graduate-degree granting</pre>

Here's a data dictionary, but it's useless! I can read it, but no machine will be able to use this to show me meaningful labels instead of numbers. It's really painful to see that somebody was clearly trying to do something useful, but yet mostly fell short.

One huge issue of course is that there are no good standards for metadata. We're still largely at the mercy of PDF files and unformatted spreadsheets. There is <a href="http://json-stat.org">JSON-stat</a>, but it doesn't appear to be widely supported.

At least for the problem of numbers that encode categories, there is a simple solution: don't use them. There's no reason values have to be numbers. Just put the strings in there. It's not hard, and it makes for useable labels, filters, etc. Any visualization or analysis tool worth its salt will encode the strings as numbers anyway and then be just as efficient. That doesn't solve the problem of recognizing ZIP codes and similar meaningful numbers, but it's a step.

It's really painful to see this issue crop up time and again, in particular when there was clearly a strong effort to do things well. Metadata continues to be a big hurdle making important data so much harder to dig into and understand.
