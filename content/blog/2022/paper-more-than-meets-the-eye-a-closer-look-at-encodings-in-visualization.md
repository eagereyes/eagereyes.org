Encodings play a central role in visualization, but I believe our thinking about them is too simplistic. In a new paper, I argue that we need to distinguish between the encodings that specify how a visualization is drawn and the ones that are readable or actually read by an observer. While they largely or entirely overlap in some charts (like bar charts or scatterplots) they don't in others (pie charts, line charts, etc.). And what exactly do you even specify in more complex visualizations like treemaps?

Encodings are deceptively simple, once you've learned what they are. After all, they're what you see when you look at a chart, right? Well, it's not so easy. I keep harping on how we don't know how pie charts are read, and I've summarized the issue in this figure from the paper.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2022/04/pie-chart-hmmm.png" alt="" width="840" height="324"/></figure>

My point here is that while we clearly specify pie charts by angle, that doesn't mean that we also read them like that. [And](/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results) [as](/blog/2019/paper-evidence-for-area-as-the-primary-visual-cue-in-pie-charts) [I've](/papers/a-pair-of-pie-chart-papers) [shown](/blog/2021/new-video-the-science-of-pie-charts), angle pretty clearly is not how we read pie charts. So we need to at least start to look at two different kinds of encodings: *specified* and *observable encodings*. In the pie chart, the specified encoding is the angle, and observable encodings also include arc length, area, and even chord length. Out of those, the *observed encoding* might be one of them or a combination.

In the paper ([author copy here](/publications/Kosara-CGA-2022), [official version in the IEEE CS Digital Library](https://ieeexplore.ieee.org/document/9756627)), I list a few more chart types, such as bar charts (specify length, observe area, aspect ratio, etc.), line charts (specify points, observe slopes, line segment lengths, etc.), and others, with their encodings. Think about what you really specify in a treemap, for example, and what you observe. I don't think we have a good model for encodings when the transformation is complex and algorithmic (as opposed to a straightforward mapping), like in a squarified treemap.

Line charts are especially interesting to me, because they also illustrate an even more complex encoding. What is the function of a line chart? It's specified and drawn as points that are connected, but you don't read a line chart like that. Instead, you look at shape, overall slopes/trends, etc. These are *derived encodings*, and they depend not only on the chart type but also the task.

I've clearly only scratched the surface here, but I think it's an interesting topic that needs to be understood more deeply than we have so far. Perhaps my little article will inspire some more work in this area.

---

Robert Kosara, [More Than Meets the Eye: A Closer Look at Encodings in Visualization](/publications/Kosara-CGA-2022), *Computer Graphics and Applications (CG&amp;A)*, vol. 42, no. 2, pp. 110-114, 2022.
