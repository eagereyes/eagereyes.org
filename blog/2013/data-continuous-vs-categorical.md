---
title: "Data: Continuous vs. Categorical"
description: "Data comes in a number of different types, which determine what kinds of mapping can be used for them. The most basic distinction is that between continuous (or quantitative) and categorical data, which has a profound impact on the types of visualizations that can be used."
date: 2013-04-17 22:03:03
tags: attention
featuredImage: https://media.eagereyes.org/wp-content/uploads/2013/04/bars-multiple.png
---

# Data: Continuous vs. Categorical

Data comes in a number of different types, which determine what kinds of mapping can be used for them. The most basic distinction is that between continuous (or quantitative) and categorical data, which has a profound impact on the types of visualizations that can be used.

The main distinction is quite simple, but it has a lot of important consequences. Quantitative data is data where the values can change continuously, and you cannot count the number of different values. Examples include weight, price, profits, counts, etc. Basically, anything you can measure or count is quantitative.

Categorical data, in contrast, is for those aspects of your data where you make a distinction between different groups, and where you typically can list a small number of categories. This includes product type, gender, age group, etc.

Both quantitative and categorical data have some finer distinctions, but I will ignore those for this posting. What is more important, is: why do those make a difference for visualization?

## Quantitative Data: Values

Most data sets contain both types of data. It’s actually quite difficult to visualize data that is purely quantitative or purely categorical (<a title="Parallel Coordinates" href="http://eagereyes.org/techniques/parallel-coordinates">parallel coordinates</a> are a good way to show the former, <a title="Parallel Sets" href="http://eagereyes.org/parallel-sets">parallel sets</a> for the latter).

Let’s take the example of a hypothetical coffee chain and look at their profits. A simple bar chart can show this data broken down by product type.

<p align="center"><img class="aligncenter size-full wp-image-2317" alt="Simple bars" src="https://media.eagereyes.org/wp-content/uploads/2013/04/bars-simple.png" width="600" height="160" /></p>

As simple as this chart is, some decisions had to be made how to show the data. The quantitative <em>Profit</em> variable is shown well by position or length. The categorical <em>Product Type</em> naturally divides the data into individual items, hence the bars.

What if we picked a different variable for the second axis, one that is continuous? This changes the type of chart we want to a line chart.

<p align="center"><img class="aligncenter size-full wp-image-2319" alt="Single line" src="https://media.eagereyes.org/wp-content/uploads/2013/04/line-single.png" width="600" height="400" /></p>

Profit is now on the vertical axis, but it is still a continuous variable. We might treat time as categorical, which would give us another bar chart, perhaps with one bar per month (or whatever granularity we want). But I decided to treat time as continuous here, which results in a line chart. Time is a special case that can be either type, depending on the way you want to look at the data. To focus on individual months, treat time as discrete and use bars. To look at trends and the rate of change (and thus, the space in between the data points), use continuous time.

Line and bar charts can appear to be interchangeable, but they are usually not. The encoding is subtly different (length for the bars, position for the line), and there is a clear implication in the line that there is a continuum between the points. Using a line chart for the product type chart above would not make sense, since there is nothing in between <em>Espresso</em> and <em>Herbal Tea</em>. Even if we only have one data point for each month, though, time is still continuous, so we can treat it as such if we want.

## Categorical Data: Breaking Things Down

We often want to see more than two data attributes at the same time. Categorical axes can be used to break data down further. Each category is subdivided by the categories of the additional dimensions. Adding two categorical dimensions, <em>Market</em> and <em>Year</em> to the initial chart gives us a lot more bars. 

<p align="center"><img class="aligncenter size-full wp-image-2316" alt="More bars" src="https://media.eagereyes.org/wp-content/uploads/2013/04/bars-multiple.png" width="600" height="375" /></p>

Here, time is now categorical, which means we get separate bars for each year. We've also broken out the different regions to get individual bars for every combination of market, product type, and year. There are other ways to show the same data: we could stack the bars for the different product groups, for example. Which dimensions are nested, and in what order, is also important. We could decide that we want to see each product type broken down by market instead, rather than the other way around, or maybe break each year down into markets, and look at the products across those combinations.

Which is the right configuration depends on the question you want to ask. But the type of visualization has not changed, we are still looking at bars. Adding categorical dimensions to a visualization usually divides the visualization up rather than changing the type.

The same thing can be done for our line chart. Let's break that one down by product type.

<p align="center"><img class="aligncenter size-full wp-image-2318" alt="Multiple lines" src="https://media.eagereyes.org/wp-content/uploads/2013/04/line-multiple.png" width="600" height="400" /></p>

The axis mappings have not changed, they are still (continuous) time and profit. But adding the product type subdivides the total into four separate lines. We can now see how each of them have done over time, which ones are flat, which increasing, etc.

Adding color is not strictly necessary here, but it makes following the lines and identifying them much easier. Color works great for categories, at least as long as the number is reasonably small.

## More Encodings

These examples are very straight-forward. Simple charts tend to work well for a small number of data dimensions. More unusual encodings should only be used when more variables are needed. As an example, let's look at sales compared to profits in a scatterplot.

<p align="center"><img class="aligncenter size-full wp-image-2321" alt="Scatterplot" src="https://media.eagereyes.org/wp-content/uploads/2013/04/scatter2.png" width="600" height="600" /></p>

The scatterplot shows two numerical values using position along each axis. I've added two categorical ones: color and shape. This shows me that the <em>West</em> market had the highest sales in all but the <em>Coffee</em> category (look at the locations of the X marks compared to the other shapes of the same color), though not always the highest profits.

Like color, shape works well for a small number of categories, because we can really only tell a very limited number of them apart (10 is roughly the maximum for both).

If we wanted to add another quantitative dimension, we might use size, though that would start to overload the chart. It is usually a better idea to keep the number of visual variables (like color, shape, size, orientation, etc.) small, as they interact and become difficult to read. It is often more effective to create several different charts or rethink the question to make sure all these dimensions are really needed at the same time.

Data types play an important role in visualization because they determine what visualization types can or should be used. That doesn't mean that there is only one chart for any combination of data types, but it does narrow down the possibilities.


_Posted by <a href="/about">Robert Kosara</a> on April 17, 2013_


<aside class="comments">

---
## Comments

BSperling says…
>	Sorry, I'm not seeing this as a difference between 'continuous' and 'categorical'. 
>	Since we're dealing with datasets, it seems that all our sources are "anything you can measure or count."
>	To me, it seems like more of a matter of adding dimensions, such as the difference between static (a snapshot in time) vs. longitudinal (changes over a period.)
>	But I think there is some good thinking here to ultimately become a framework for some thoughts about categorizing data, using it help to choose the best visualization concepts for a particular type of dataset.
>	Thanks for your work on this.
>	Best,
>	Bert

<a href="http://eagereyes.org/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	You can't count types, like espresso vs. coffee. That's a classification. You might argue that you can measure that, which may sometimes be true. But the way we think about categories is not as one being more than the other (like with amount or count), but each being different from the others.
>	
>	Static vs. longitudinal is a different way of looking at it, but it doesn't change the underlying type of most of your data. Time is a special case, and continuous can always be converted into categorical (e.g., you might classify age into age groups or weight into low/medium/high, etc.). But the underlying data still has a type that is either quantitive or categorical.

<a href="http://vislives.com" rel="nofollow noopener" target="_blank">Chris Pudney</a> says…
>	Thanks Robert. 
>	
>	Stephen Few has a similarly useful article on choosing charts for Quantitative (Continuous) vs. Categorical data. He also divides Categorical data into Nominal, Ordinal &amp; Interval sub-types.
>	
>	http://www.perceptualedge.com/articles/dmreview/quant_vs_cat_data.pdf

OK says…
>	Is it possible to help me that the number of pedestrians in city center is continuous data or categorical data. Tq

KK Molugu says…
>	Number of pedestrians will be a continuous data, as you will not have a definite number.

<a href="http://gravatar.com/tatavartyshruti" rel="nofollow noopener" target="_blank">Shruti</a> says…
>	could you please explian how to determine the type of dataset based on attribute values

leila says…
>	Could you please tell me the number of times that a test performed or the number of times I visit my grand mother are continuous or categorical? I thought that for data being continuous we have to be be able to have any values between two numbers like 2.5. We can not have 2.3 people walking in the street. Thanks

hendry8 says…
>	I'm not happy with putting "quantitative" into the dichotomy of continuous vs. categorical. Quantitative implies ordering - as in "anything you can measure or count is quantitative" but then this is contradicted by "Quantitative data is data where the values can change continuously, and you cannot count the number of different values." In the mathematical sense of the word "continuous" means there are no gaps - and so 1, 2, 3, … are ordered, but not continuous - but still are certainly quantitative. I would reject the idea the years 2012, 2013 are categorical (vs quantitative) because there is an ordering there as can be seen  with a few more years - e.g. 2012, 2013, 2014, 2015 since it wouldn't make sense to present the data as, e.g.  2015, 2012, 2014, 2013.
>	
>	Additionally, even continuous data is always gathered in spans (my term, you might call these "categories" :-). E.g. certainly height of people certainly is continuous - but usually gathered in half-inch spans. Even if measured more precisely, there still will be spans - rather than each height measured to an infinite number of decimal places. Still, the height spans/categories need to be properly ordered - as was the case with the time/dates/years situation above.

hendry8 says…
>	Perhaps I should have said that there are different categories of categorical data? : -)

<a href="https://plus.google.com/114946465353229663000" rel="nofollow noopener" target="_blank">Niklas Jansson</a> says…
>	The idea that profit over months should be consider "continuous" is stupid as hell. If you made $100 in january and $200 in february, at no point in between did you make a profit of $150, or could even in a meaningful way claim that you did. The profit is measured over a certain time interval. And thus a histogram (or any variation thereof) is the only meaningful representation.
>	
>	Now if you'd actually measure a variable that can change at any time, such as "price per item", "profit per item", "profit averaged over one month", it would make sense.

<a href="https://www.facebook.com/app_scoped_user_id/722455157/" rel="nofollow noopener" target="_blank">Milind Ravindranath</a> says…
>	Exactly, I feel the same way! But it does seem as if the practice of drawling line graphs for discrete data is quite common and accepted. This following document is instructive in this regard : http://www.perceptualedge.com/articles/visual_business_intelligence/line_graphs_and_irregular_intervals.pdf 
>	
>	The book Elements of Graph Design, Stephen M. Kosslyn, W. H. Freeman and Company, New York, p. 8 (quoted in the perceptualedge article) says: 
>	
>	"A continuous rise and fall of a line will naturally be taken to refl ect a continuous variation in the entity being measured. If the changes in that entity are in fact not continuous but discrete, the continuity implied by a line graph is misleading; a bar graph would better represent the actual situation being depicted."
>	
>	But then the perceptualedge document itself goes on to say :
>	
>	"Because an interval scale represents a continuous range of quantitative values, an intimate connections exists from one interval to the next. As such, rather than using bars, it would be fi ne if you wished to use a line to display this frequency distribution, connecting one age group to the next, because the line would meaningfully represent a connection that exists in the data."

</aside>

