---
title: "qnch - A Data Description Language for Tabular Data"
description: "A lot of data is tabular in nature, and is efficiently encoded in text files. While such files are easy to produce and read, they bring with them several challenges when used in visualization tools and other programs that have to understand some of the data's properties. Examples include categorical data, special values in numerical columns (which are common in Census data), and information about the data like its producer. Here is a proposal for a simple data description format that provides that missing information. I call it qnch."
date: 2009-08-11 08:55:10
tags: 
featuredImage: https://media.eagereyes.org/media/2009/qnch-logo-color.png
---

<p align="center"><img src="https://media.eagereyes.org/media/2009/qnch-logo-color.png" border="0" alt="qnch" width="558" height="240" /></p>

# qnch - A Data Description Language for Tabular Data

A lot of data is tabular in nature, and is efficiently encoded in text files. While such files are easy to produce and read, they bring with them several challenges when used in visualization tools and other programs that have to understand some of the data's properties. Examples include categorical data, special values in numerical columns (which are common in Census data), and information about the data like its producer. Here is a proposal for a simple data description format that provides that missing information. I call it qnch.

## Goals

The goal of this language is to provide all the necessary information that is commonly needed when parsing a data file and trying to find more information about it. The goal is not to cover every use case that could possibly exist, nor to create elaborate taxonomies of data types. There are other efforts for that, and I have no desire to compete with them. qnch is meant to be simple, readable, easy to implement and use, yet versatile and useful.

Information about data files is usually given in accompanying text or PDF files, in a way that cannot be parsed automatically. This makes the processing of the data for visualization and other purposes much more of a challenge than necessary.

While it may make sense to figure out a way to include all the additional information in the actual data file, it's not realistic to expect all data producers to switch to such a format, or all data processing and visualization programs to be able to read it. A separate file does not require the original data to be altered at all, and can be produced either by the data source directly or by a third party. I can even imagine setting up a registry that you can give the URL of a data file and that points to where you can find a third-party qnch file.

qnch is written using a structured format called <a href="http://yaml.org/">YAML</a>. This was chosen on purpose to make the file human-readable (and also -writable) without all the clutter and complexity of XML. An equivalent XML implementation would consist mostly of markup without any benefits. YAML is a very clean format that is very similar in design to JSON (and is, in fact, a true superset of JSON), and thus includes useful semantic features like lists and key-value pairs.

Below is a discussion of the different features and some examples that show the usage in actual qnch syntax. This is not a complete specification, but it contains enough information to get the discussion going about additional features and other ideas.

## Basic information for the Parser, Format

The parser needs to know a few things about the file to parse it. In addition to the encoding, the type is specified here. For delimited files, most of the information for the parser is specified at the beginning of the file. Character numbers for fixed-column formats are given as part of the dimension definitions.

<ul>
<li><p><em>encoding</em> (optional). What encoding is used for the data file? This is important for textual data and perhaps categories, since numbers are rather immune to encoding changes. The default is utf-8, which conveniently includes ASCII as a subset. Other ISO encodings can be specified here, as well. Others, such as non-Unicode Asian encodings, or exotic encodings like EBCDIC are explicitly not supported. Unicode is simply the way to go.</p></li>
<li><p><em>type</em> (mandatory). This can be <code>delimited</code> or <code>fixed</code>. Delimited means that there is a delimiter character that separates the fields on each line. Fixed means that the values are located at specific character indices on each line. There are two shortcuts here, csv and tsv. These specify a delimiter of a comma and tab, respectively.</p></li>
<li><p><em>delimiter</em> (optional). Given for delimited files, this is the character that separates values on each line. If not given for type fixed, defaults to a comma. Any character can be used here.</p></li>
<li><p><em>quotation-character</em> (optional). For delimited files, this is used to enclose fields whose values contain the delimiter character. This defaults to double quotes.</p></li>
<li><p><em>headers</em> (optional). For a delimited file, is there a header line? Value can be <code>true</code> or <code>false</code>, default is <code>true</code>. If <code>false</code>, the sequence in which dimensions are specified is considered the sequence of dimensions on each line.</p></li>
<li><p><em>strict</em> (optional). Whether the parser should throw errors when an unspecified value is encountered. The default is <code>false</code>. If set to <code>true</code>, this will throw errors when there are columns that were not defined, categories that were not specified, or when a numerical value is outside the range specified by the minimum and maximum fields below.</p></li>
</ul>

## Data Meta-Data

This is the place for human-readable information about the dataset. The list below is what seems to be useful for most cases, but there is clearly room for more. The source field therefore can contain additional pieces of information that are not specified here, but that will be shown to the user if present in a qnch file.

<ul>
<li><em>name</em> (optional). The name of the dataset. If not provided, the name of the data file is used.</li>
<li><em>description</em> (optional). A longer description of the dataset.</li>
<li><em>date</em> (optional). The date of the data set, if applicable. This field can contain any level of precision, from only a year down to a time stamp that is precise to the second.</li>
<li><em>source</em> (optional). Information about the data source. This field has a number of named sub-fields, specified below. <br>
<ul>
<li><em>organization</em> (optional). The name of the publisher of the data set.</li>
<li><em>organization-url</em> (optional). A URL identifying the publisher.</li>
<li><em>contact</em> (optional). The name and email address of a person you can talk to about the data.</li>
<li><em>info-url</em> (optional). A URL pointing to the page where the dataset can be found.</li>
<li><em>data-url</em> (optional). A URL pointing to the canonical location of the data file itself.</li>
<li><em>citation</em> (optional). How to cite this dataset in a publication.</li>
<li>Sub-fields that are not named above are acceptable, but the program may not be able to do more with them than display them in a list.</li>
</ul></li>
<li><em>row-pattern</em> (optional). A regular expression that is matched against each line before it is broken up into fields to decide whether to consider it or not. This is useful for U.S. Census data where housing and person records are mixed in the same file. In this case, you need to specify a separate qnch file for each type of record in the dataset.</li>
<li><em>dimensions</em> (optional). The list of columns, or data dimensions, in the file using the format described below. This list can be left out if all that is desired is the metadata for the entire file.</li>
</ul>

Using the U.S. Census Public-Use Microdata Sample (PUMS) as an example, here is what the complete header of a qnch file could look like that applies to the household records (indicated by the letter "H" at the start of the row):

<pre><code>name: U.S. Census 2000, Households
type: fixed
source:
    organization: Census Bureau
    organization-url: http://census.gov/
    info-url: http://www.census.gov/main/www/pums.html
    downloaded: 2009-08-10
row-pattern: ^H
strict: true
</code></pre>

## Columns/Dimensions

Each column has data associated with it that depends on its type and on the type of file. The first list are items that both numerical and categorical columns share. Columns can be specified in any order for delimited files with header and for fixed column files; they need to be specified in the order they appear in for delimited files without header.

<ul>
<li><em>name</em> (mandatory). This is the name of the dimension. If no id is given, this also serves as the id that is used in delimited files with header lines to find the right column. This is usually a more human-readable version of the id.</li>
<li><em>id</em> (optional). Used to find the column in delimited files with header.</li>
<li><em>description</em> (optional). An additional, longer description of the dimension.</li>
<li><em>variable-name</em> (optional). This is mostly inspired by the U.S. Census data: provide an additional name that is used as a variable name to hold the value, like in a statistical package.</li>
<li><em>type</em> (optional). The type of data in this column: <code>numerical</code>, <code>categorical</code>, <code>text</code>. The default is <code>numerical</code>. Numerical and categorical are specified further below, but text is simply treated as strings that can only be shown as textual information. That means, no further processing is performed, and no aggregates are created. This is useful for place names, product descriptions, and other text that is never used for actual analysis.</li>
<li><em>characters</em> (mandatory for fixed column format). The range of characters that contains the data for this data dimension. Both ends are inclusive and must be specified (even if the field is only one character long), counting starts at 1. For a value that starts in the fifth column and whose field is four characters long, this would be: 5-8</li>
<li><em>categories</em> (optional). For a categorical dimensions, this field contains a list of category definitions as described below.</li>
</ul>

Numerical columns have the following additional fields that can be specified.

<ul>
<li><em>minimum</em>, <em>maximum</em> (optional). These can be used to scale charts or to show to the user before the actual data is loaded in. The parser must not rely on these values, though, and will accept values outside this range unless strict is set to true.</li>
<li><em>special-values</em> (optional). Define strings that are treated as special values in this numerical dimension. The values are specified like categories below. Values are matched as strings before the field is parsed as a number, so special values do not have to be (but can be) valid numbers. This is important to be able to differentiate between 0, 00, 000, 0-0, and other values that can be found in Census data.</li>
<li><em>precision</em> (optional). The smallest difference that the acquisition method used can resolve. If not given, this is assumed to be the smallest difference a standard float can encode. If specified, it can be used to show the granularity of the data in a visualization.</li>
<li><em>unit</em> (optional). The unit this number is measured in, the default is no unit. Programs can, but do not have to, offer to convert numbers between units. Given the vast number of units out there, we would need to severely limit the allowed units to make this a requirement, though.</li>
</ul>

Again using the U.S. Census, here is a column definition for a simple numerical column:

<pre><code>- name: Housing unit weight
    variable-name: HWEIGHT
    characters: 102-105
    minimum: 0
    maximum: 1975
</code></pre>

Almost all numerical columns have special values. Here is the number of bedrooms:

<pre><code>- name: Number of Bedrooms
    variable-name: BEDRMS
    type: numerical
    characters: 124-124
    special-values:
        &lt;blank&gt;: Not in universe
        0: No bedrooms
        5: 5 or more bedrooms
</code></pre>

Categories are specified as a list of key-value pairs, with the key being the name found in the file, and the value being the human-readable description. This is the same for special values in numerical dimensions. There is one special value, <code>&lt;blank&gt;</code>, that describes an empty field. Such fields can exist in both delimited and fixed formats, and usually mean "missing" or "not in universe".

Here is a definition for the categorical heating fuel field in the Census data:

<pre><code>- name: Heating Fuel
    variable-name: FUEL
    type: categorical
    characters: 132-132
    categories:
        &lt;blank&gt;: Not in universe/unknown
        1: Gas from pipes
        2: Gas from tank, bottles, LP
        3: Electricity
        4: Fuel oil, kerosene, etc.
        5: Coal or coke
        6: Wood
        7: Solar energy
        8: Other fuel
        9: No fuel used
</code></pre>

## Matching Data and Meta-Data

Matching a CSV or other data file with its qnch file is problematic, because they may have come from different sources, file names can change, and the data file does not contain any meta data to match against (like its canonical URL). The obvious convention is to name the qnch file the same as the data file, but with the extension .qnch. When opening a data file, the parser will look for that file by replacing the extension (or adding it, when the data file has no extension).

A similar convention is to look for underscore characters in the data filename and remove the last part the file name consisting of that underscore and the rest before replacing the extension. This would shorten the file named Households<em>NC.txt to Households.txt, which would then match Households.qnch. This is only done when no Households</em>NC.qnch file is found.

If none of these conventions turn up a qnch file, the program should ask the user to pick one, or otherwise offer to import the data based on best guesses.

## Status

I will incorporate a qnch parser into the next version of <a href="http://eagereyes.org/parallel-sets">Parallel Sets</a>. Eventually, I will separate the parser and the Data Wizard out of the ParSets program and make it a separate project. qnch files for all datasets available for download through Parallel Sets will also be made available. I hope that based on my implementation and the description here, others will contribute qnch files, parsers, and producers.

So now it's your turn! Let me know what you think, what's missing, etc.!


_Posted by <a href="/about">Robert Kosara</a> on August 11, 2009_


<aside class="comments">

---
## Comments

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	<p>How about using the same yaml format as the infochimps team? e.g.&nbsp;<a href="http://blog.infochimps.org/2008/09/10/whats-next-infinite-monkeywrench-starting-to-take-form/ " target="_blank">http://blog.infochimps.org/2008/09/10/whats-next-infinite-monkeywrench-starting-to-take-form/</a> and&nbsp;<a href="http://wiki.github.com/infochimps/imw" target="_blank">http://wiki.github.com/infochimps/imw</a></p>

Robert Kosara says…
>	<p>I'm not seeing any documentation what that format actually looks like, though.</p>

Xiaoyu Wang says…
>	<p>Very interesting. I wonder how much does one need to convert traditional csv file or other tabular formats into the YAML format? Will there be any automated converter?&nbsp;</p>
>	<p>I would have concerns that if there is no such easy conversion. Personally, lots of good approaches will not be adopted:</p>
>	<p><span style="white-space: pre;"> </span>A. if it is not backward compatible</p>
>	<p><span style="white-space: pre;"> </span>B. if it requests too much effort to be backward compatible.&nbsp;</p>
>	<p>&nbsp;</p>
>	<p>However, I do see this format useful in my current project. I would like to discuss further with you later this year, sir. :)&nbsp;</p>
>	<p>&nbsp;</p>

Robert Kosara says…
>	<p>It's for describing data properties, not for data storage. But yes, you'll very likely see some of it when we continue our project. ;)</p>

Mario Drobics says…
>	<p>To me the approach seems very useful and I very much appreciate your initiative. What may help to start using such a data description file would be a tool, which extractes as much of this information from the original data set as possible (e.g. categorical, numerical, max/min, etc.). This will not always be correct, but will provide a basis for further manual adjustments.</p>

Robert Kosara says…
>	<p>The Data Wizard in the Parallel Sets program already does most of that, actually. It's just not exposed right now for purposes other than importing data into the database to visualize. You should try it out ;)</p>

<a href="http://business.swivel.com" rel="nofollow noopener" target="_blank">Gerad Suyderhoud</a> says…
>	<p>Definitely a nice stake in the ground. &nbsp;I see several things missing from a quick glance.</p>
>	<p><ol>
>	<li>escape-character - if you have a quotation character, you need some way to escape it so that you can include your quotation character in a string. &nbsp;Typical, C-style is with a backslash '\'. &nbsp;However CSV tends to double the quotes "" (so it's more than a character, it's a method).</li>
>	<li>source - many data sets are combined from multiple sources</li>
>	<li>columns / dimensions - what about dates? In addition, you probably want to specify a date format is 1/2/03 January 2 or February 1? &nbsp;It depends.</li>
>	</ol>
>	<div>As an aside, I'd stick with columns as a name rather than dimensions. &nbsp;My understanding of a dimension is that it's a column that you would possibly aggregate or filter by: &nbsp;a subset of the columns. &nbsp;Plus everybody knows what a column is. &nbsp;Most people are confused by the term dimensions.</div>
>	</p>

</aside>

