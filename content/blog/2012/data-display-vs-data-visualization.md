# Data Display vs. Data Visualization

Gregor Aisch recently <a href="http://vis4.net/blog/posts/lets-break-the-rules/">wrote a posting about gauges</a>, and how he finds them inspiring and beautiful in their simplicity, even though they are generally disliked in visualization. His posting highlights a common misconception about visualization, and a conflation of different uses of data display, that is worth exploring.

Gregor takes issue with <a href="http://www.excelcharts.com/blog/thats-data-visualization/">the notion that visualization requires a certain number of data points to be displayed</a>. He also considers “breaking those rules” by showing just a single data point in a chart.

## Data Display

Let’s take a step back and look at what a speed gauge in a car does, how it works, and how it is used.

<p align="center"><img class="aligncenter size-full wp-image-1990" title="Tachometer_2011_honda_civic" src="https://media.eagereyes.org/wp-content/uploads/2012/07/Tachometer_2011_honda_civic.jpg" alt="" width="573" height="383" /></p>

A gauge consists of a scale with tick marks and numbers, and a pointer needle that points to a value on that scale. When the value changes, perhaps because the car accelerates, the change is reflected immediately.

Pointing to a value rather than showing it directly as a number has a lot of advantages. For one, you can use the same mechanical design to show speed, RPM, temperature, etc., simply by wiring it up differently and using a different scale. You can also read the value very easily, especially if you have a scale that has markings to indicate critical values (such as maximum speeds).

Some cars have direct numerical displays for speed, and those are much harder to read. In fact, all cars I’ve seen so far with such a display also have some kind of bar display in addition that also shows the speed (though with much less precision). The reason is that it takes a lot more work to read numbers than to watch a needle point, especially when it changes. Gauging acceleration or deceleration is incredibly difficult with a quickly changing numerical display, but very straight-forward with a gauge.

## Tasks

The reason gauges work well in cars is because driving is all about current conditions. What you want to know is, how fast am I going right now? How much gas do I have left? What your speed was five minutes ago, or how much gas you had in your tank three hours ago, matters little.

The task to be accomplished in driving is simple: change or maintain your speed. That might involve use of the accelerator, brake, gear shift, or whatever, but the initial decision is a simple one: am I going too fast, too slow, or am I at about the right speed? That’s it. Current information, quick action, immediate feedback.

A gauge shows one, current, value. That’s what it is good at. Showing more would be possible, of course, but also irrelevant and distracting. In fact, boiling down the amount of information to just what you need is one of the great achievements of car dashboards. There are hundreds of sensors in a modern car, many of which measure values hundreds or thousands of times each second. There is no point in even attempting to show the driver all that information. The only time when the car should show more is when things go wrong. As long as everything is working properly, the driver only needs a small number of current values.

## Data Visualization

The case is very different in data visualization. You can split hairs over how many data points you need, but the difference is a qualitative one: visualization shows a lot more data, usually including a lot of history (if there is a time axis), and sometimes even the future (i.e., forecasts). The tasks that a visualization serves are very different, because they typically are much more complex and not simple comparisons of whether a value is too hight or too low. Analysis often requires finding more data, trying out many different views, etc. None of these tasks are comparable to driving a car.

There is, of course, the possibility of realtime data visualization, where history does matter, and where complex data might be shown that is changing at a high rate. But that task is even less similar to driving, which is a largely intuitive activity. When large amounts of real-time data are necessary for decisions, the decision-making is also much more complex.

## Gauges in Data Visualization

Gauges are a common technique used in some areas of visualization, in particular as part of business intelligence (BI) tools, and in particular <em>dashboards</em>. They are generally ridiculed and criticized when they are used for data displays in business contexts (Stephen Few is <a href="http://www.perceptualedge.com/blog/?p=102">a particularly vocal critic</a>).

In data visualization, gauges simply solve the wrong problem. Business decisions cannot be made only on the current value of some measure, but need history and context. Values also typically do not change as fast, nor are as directly coupled, as the amount of pressure on the accelerator and the car’s speed.

Gauges are also a poor choice because they use up a lot of space that could be used to display more data. In the car case, more data would be an impediment to quick perception and decision-making, but in visualization, more data is generally better.

Many BI tools use gauges not because they are effective, but because they look good and can be styled to be pretty and realistic-looking (much like 3D pie charts). Of course, none of that adds any actual functionality. The term <em>dashboard</em> is also unfortunate, because it reinforces the wrong metaphor. Most uses of BI tools are way more complex than driving a car, so the control rooms of NASA mission control or a nuclear power plant (think tons of blinking lights, rows and rows of screens, huge projection screens on the walls, etc.) would be much more accurate.

Dashboards have their uses as predefined data presentations where somebody put a lot of work into teasing apart the key pieces of information to show and how to present them. In all but the most trivial cases, though, gauges are still not going to be a good choice on a data visualization dashboard.

## Conclusion

The reason gauges are a bad idea in visualization is not because of some “rule” that dictates the minimum amount of data necessary for visualization, but because their strengths do not match the task. They work very well where the two do match, like in a car. But in tasks other than real-time control of a simple and predictable process, they are the wrong choice.
