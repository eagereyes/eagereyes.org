---
title: "Row-Level Thinking vs. Cube Thinking"
description: "Our mental model of a dataset changes the way we ask questions. One aspect of that is the shape of the data (long or wide); an equally important issue is whether we think of the data as a collection of rows of numbers that we can aggregate bottom-up, or as a complete dataset that we can slice top-down to ask questions."
date: 2016-05-22 19:19:12
tags: data, attention
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/05/rubik_cube.png
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/05/rubik_cube.png" width="413" height="425" /></p>

# Row-Level Thinking vs. Cube Thinking

Our mental model of a dataset changes the way we ask questions. One aspect of that is <a href="https://eagereyes.org/basics/spreadsheet-thinking-vs-database-thinking">the shape of the data (long or wide)</a>; an equally important issue is whether we think of the data as a collection of rows of numbers that we can aggregate bottom-up, or as a complete dataset that we can slice top-down to ask questions.

## Where It All Starts: Rows

Of course all data is row-level. The numbers have to come from somewhere, they're listed, one by one, in a table or a database somewhere. In a spreadsheet, you can see them each individually.

This model makes sense when you've laboriously collected each individual data point, or you need to carefully look at them each individually for some reason. Perhaps there's a rich history or other complex data attached that can't easily be compared across the items in your dataset.

But most questions you want to ask of even moderately large datasets involve many data points that need to be grouped in different ways.

## The Way You Slice It: Data Cubes

Rather than the bottom-up perspective of rows, data cubes are about thinking from the top down. The dataset as a whole is the thing you're dealing with, and you don't care about the individual rows. Asking questions means breaking the data up in many different ways. This becomes more natural as the dataset gets larger and more complex.

One of the best illustrations of a data cube I know is from the paper <a href="http://graphics.stanford.edu/papers/pan_zoom/"><em>Multiscale Visualization Using Data Cubes</em></a> by Chris Stolte, Diane Tang, and Pat Hanrahan.

<p align="center"><img class="aligncenter size-medium wp-image-9291" src="https://eagereyes.org/wp-content/uploads/2016/05/slicing-cubes.png" alt="slicing-cubes" width="660" height="534" /></p>

Read from top left to bottom right, it basically describes how fine-grained data turns into a cube. Read backwards, it shows how the cube containing all the data in one value is broken down: first by time, then by product, then by location.

How you do you ask questions of such a dataset? You specify how you want it broken down and how to aggregate the measures. Perhaps you have a dataset of incomes for many different job titles, ages, genders, education levels, etc. Ask about the average income for men vs. women, and the database will happily answer this for you. To do so, it splits the dataset along the gender dimension, which leaves many records in each of the two groups. It then calculates the averages for each gender across all of those.

This way, you can quickly ask many different questions: what's the average by education level? How about gender <em>and</em> education level? What about age? Etc. You can also of course change the aggregation, so instead of the average perhaps you want to consider the median, or the minimum and maximum in each slice. It's all just a matter of asking the question.

## The Relation to Spreadsheets vs. Databases

Spreadsheets are based on rows. That's what you see. Any calculation you do is based on those, so you work bottom-up. Slicing the data in a spreadsheet is difficult at best.

Databases can show you the rows, but they have the tools to slice the data built in. SQL's <em>group by</em> statement creates slices through the data, and the aggregations you specify in a query (avg, min, max, etc.) are applied to all the rows that fall into the groups you specify.

Sure, you <em>could</em> look at the rows in a database just like in a spreadsheet. But that's not what databases are good at. Just like in <a href="https://eagereyes.org/basics/spreadsheet-thinking-vs-database-thinking">my previous piece on spreadsheets vs. databases</a>, I'm glossing over a lot nuances and special cases here. But the big-picture ways of thinking are the point here, and understanding them and their differences can help clear up many common misconceptions and frustrations.

<hr />

<a href="https://commons.wikimedia.org/wiki/File:Rubik%27s_cube.svg">Teaser image</a> by <a title="User:Booyabazooka" href="https://commons.wikimedia.org/wiki/User:Booyabazooka">Booyabazooka</a>, used under Creative Commons.


_Posted by <a href="/about">Robert Kosara</a> on May 22, 2016_


