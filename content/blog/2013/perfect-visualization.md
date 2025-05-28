# The Perfect Visualization

There are many rules about how to visualize data. We know how to encode specific types of data, what visual encodings work well, and what does not work so well. But is there such a thing as a perfect visualization for a given set of data?

This is a topic that comes up every now and then. In mathematics and some parts of computer science, an algorithm can be shown to be optimal. That requires a way to measure the outcome, though. Without a metric to optimize, there is no optimization. In algorithms, that is usually time, and sometimes error (for approximate or stochastic algorithms). The better algorithm is the one that produces the more desirable value in the metrics.

For visualization, the problem could be stated as: given a data set, what is the best visualization? And can you prove that this is the best? And are there multiple ways of visualizing the data that are equally good?

## What We Know

Visualization can be automated to an extent. We know how to show a given set of data based on the data types that are present. This is not new, much of this work was done in the 1980s. Do you have a categorical dimension and a continuous one? Bar chart. Time and a continues measure? Line chart. Etc.

It gets a bit more complicated than that when the number of data dimensions gets larger, of course. There is also a wide variety of chart types that are not covered in the classic literature. When do you choose a (non-hierarchical) tree map? What about the huge variety of network diagrams? Etc.

We know what types of visual encodings work well, when to use color, etc. Things get hairier when using color to separate, because that means we have to know what to separate by. That is not just a question of data type (low-cardinality categorical data), but depends more on what the user is trying to achieve.

## Task

What this question ignores is the task the user tries to achieve, or in other words: what do you want to know? That can sometimes be stated as a specific question, but often the goal is to find things that are not easy to state, or are simply unknown.

When exploring data, the user can find many interesting things she did not specifically expect. Serendipity is clearly a goal in visualization, and the big advantage over more specific techniques like statistics and machine learning (where you generally need to be able to state a question to pick a method).

Without a way to assess whether you’ve succeeded, there is no way to be sure that a particular visualization is the best. And just because you’ve found something interesting doesn’t mean that you’ve chosen the best visualization: another visualization might have shown you even more and better stuff.

## User

The user is also an underappreciated component of the whole process. How much does the user know about the data? What kinds of insights are novel and interesting as opposed to just things she knows already? Also, the level of visual literacy will make some visualizations work better than others, even if they are objectively not the best choice.

While it’s possible in principle to model the user and to find a way to specify the task, in practice it would be so tedious that it would take much longer to do all that work than to just try

There is also the issue of the analytic flow the user is in. One insight or piece of data leads to another question, which leads to another, etc. The user might start out with one question and end up having explored many different ones, and followed some of the threads over many steps. That is the other strength of visualization, where the human is driving: being able to quickly change direction based on what you find.

## An Academic Question

While it’s not possible to decide for a given visualization whether it is optimal, or perfect, the underlying mechanics of the question are still useful to ponder. Just because we can’t write a program that automagically generates the perfect solution doesn’t mean that we can’t use metrics and knowledge to guide and support the user along the way.

We do know some things about how visualization works based on data types. This could be extended and made much more powerful than it is today. There is also a number of typical tasks the user has in mind. Even if the program can’t guess the exact question, it can try to pick a good common one and get close for 80% of the cases.

The perfect is the enemy of the good, and it is also the enemy of the practical, useful solution. But elements of it, the thinking behind it, and the means by which it could be achieved, are very much compatible with the others.
