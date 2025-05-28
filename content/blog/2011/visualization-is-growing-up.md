# Visualization is Growing Up

Several topics at this year's VisWeek conference have come up because visualization is playing a bigger role in important decisions. When the consequences can be severe, it is important to know whether a visualization actually works, whether we can trust it, and what biases it might present.

## Verification and Validation

While the definitions differ somewhat, the common understanding of verification is that it means checking whether a system is working correctly, whereas validation asks whether the system performs the function it is supposed to.

Neither question is usually addressed in visualization research. One example that was brought up in the discussion on the panel on this topic at VisWeek are  some implementations of <a href="http://en.wikipedia.org/wiki/Marching_cubes">Marching Cubes</a> that have a bug that leads to small creases and cuts in the isosurfaces produced, which is obviously a problem.

User studies theoretically provide a way of validating visualization software, but are almost never done in that way in practice. It is often not entirely clear what the correct answer to a question is (or if there even is one), and studies are not typically rigorous and thorough enough to be called validations. Showing that a new system works better than an existing one is often sufficient for publication, but validation needs to be much more specific.

All of these things are clearly important, though, if we expect people to trust visualization to make decisions. As long as we cannot demonstrate that our systems perform the intended function and are working correctly, we cannot expect to be taken as seriously as other, more rigorous fields.

## When Rainbow Colormaps Kill

Michelle Borkin presented <a href="http://gvi.seas.harvard.edu/paper/evaluation-artery-visualizations-heart-disease-diagnosis">fascinating work on the use of colormaps</a> in the diagnosis of coronary heart disease. Their 2D representations using perceptually uniform colormaps led to significantly fewer errors than the usual 3D representations and/or the dreaded rainbow colormap.

When the choice of visualization type and parameters makes such a big difference, we need a much better understanding of the potential consequences before we can recommend the use of visualization for important decisions. Similar results have been reported <a href="/blog/2011/visualization-choice-influences-decisions">when making decisions about continuing or aborting clinical studies</a>, and Caroline Ziemkiewicz's work has also shown <a href="/blog/2010/paper-implied-dynamics-in-information-visualization">the impact of surface features on people's perception of data</a>.

## Visualization and Policy-Making

Another panel that caught my attention was the one on visualization and policy-making. The panelists reported on the use of visualization in a wide range of areas, such as law enforcement, public safety, public health, financial fraud detection, science policy, etc. Clearly, potentially far-reaching decisions have to be made based on good data and representations that do not mislead.

Jason Moore of the Air Force Research Lab told an interesting story about how a visualization he had been working on with others was used to brief some high-ranking politicians, but along the way the axis scales were changed from highly technical ones to more approachable (but unrelated) ones.

That made me think of the way charts move through command and communication chains: memos, reports, and presentations get summarized, edited, etc. as they move up, but that is not typically the case with visualizations and charts. On the one hand, that means more unfiltered information for the people in charge, but on the other it also requires that the people who make the decisions know enough about the technical side of things to understand them. There are clearly advantages and disadvantages to this, and I wonder how much of a problem it might present.

## A Hippocratic Oath

Jason Moore also suggested a hippocratic oath for visualization. This version is slightly edited from his original, and I guess some more work could be done on it. But I think it's a great start.

>	
>	  <p>I shall not use visualization to intentionally hide or confuse the truth which it is intended to portray. I will respect the great power visualization has in garnering wisdom and misleading the uninformed. I accept this responsibility willfully and without reservation, and promise to defend this oath against all enemies, both domestic and foreign.</p>
>	

## Final Thoughts

We all want visualization to matter, but there is a lot of work to be done for it to really be able to do that. There are many open questions about the reliability, reproducibility, verifiability, and validity of visualization. As the field matures, we need to address those. Many of these questions may not be as exciting as coming up with yet another way of representing the data, but they are undoubtedly much more important.
