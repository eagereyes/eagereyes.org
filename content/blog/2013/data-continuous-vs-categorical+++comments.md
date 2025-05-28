BSperling says…
>	Sorry, I'm not seeing this as a difference between 'continuous' and 'categorical'. 
>	Since we're dealing with datasets, it seems that all our sources are "anything you can measure or count."
>	To me, it seems like more of a matter of adding dimensions, such as the difference between static (a snapshot in time) vs. longitudinal (changes over a period.)
>	But I think there is some good thinking here to ultimately become a framework for some thoughts about categorizing data, using it help to choose the best visualization concepts for a particular type of dataset.
>	Thanks for your work on this.
>	Best,
>	Bert

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
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
