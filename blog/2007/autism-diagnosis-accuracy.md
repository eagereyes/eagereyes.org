---
title: "Autism Diagnosis Accuracy - Visualization Redesign"
description: "Kaiser at Junk Charts has posted an interesting challenge based on the question how to visualize an Autism diagnosis dataset in a better way (originally posted by Igor Carron at Nuit Blanche). I'm offering my own redesign of the data below, and discuss my different approach and what it tells us about the visualization of sets in general."
date: 2007-09-29 20:51:32
tags: criticism
featuredImage: https://media.eagereyes.org/media/attachments/Autism-redesign.png
---

# Autism Diagnosis Accuracy - Visualization Redesign

<p align="center"><img src="https://media.eagereyes.org/media/attachments/Autism-redesign.png" alt="Autism Teaser" border="0" /></p>

Kaiser at <a href="http://junkcharts.typepad.com/junk_charts/">Junk Charts</a> has posted an interesting <a href="http://junkcharts.typepad.com/junk_charts/2007/09/a-challenge.html">challenge</a> based on the question how to visualize an Autism diagnosis dataset in a better way (originally posted by Igor Carron at <a href="http://nuit-blanche.blogspot.com/2007/09/on-difficulty-of-autism-diagnosis-can.html">Nuit Blanche</a>). I'm offering my own redesign of the data below, and discuss my different approach and what it tells us about the visualization of sets in general.

## The Problem

The original visualization of this data is shown below (click for a larger image in a separate window/tab). These <a href="http://en.wikipedia.org/wiki/Venn_diagram">Venn diagrams</a> show the performance of three different early tests for <a href="http://en.wikipedia.org/wiki/Autism">autism</a> (PL-ADOS, ADI-R, and Clinician's assessment). There are two distinct questions here, autism itself and other autism-related disorders (called autism spectrum). The diagram itself depicts the number of children that got a positive diagnosis in any combination of tests, while the fraction of children who were later found to be autistic is indicated in parentheses.

<p align="center"><a href="https://media.eagereyes.org/media/attachments/autism-test-figure-2.jpg" rel="lightbox"><img src="https://media.eagereyes.org/media/attachments/autism-test-figure-2-thumb.jpg" alt="" width="450" height="239" border="0" /></a></p>

The redesigns posted in the Junk Charts discussion are mostly focused on improving the Venn diagram, but I believe that the original version of the diagram is already flawed. What seems to be much more interesting than the number of children diagnosed with each combination of methods is the correctness of the diagnosis. The number of children serves mostly to measure the support, since all tests agreed only on a small number of children.

## The Data

The basis for a redesign is a <a href="http://en.wikipedia.org/wiki/Cross-tabulation">cross-tabulation</a> of the data, which can be easily read from the figure. A cross-tabulation lists the combinations of all categories against each other, with their relative frequencies as the value. Because we are looking at three criteria here, the shape of the table is a little different - in fact, it looks a bit like a tree!

<table border="0">
<thead>
<tr>
<td><strong> PL-ADOS</strong></td>
<td><strong>ADI-R
</strong></td>
<td><strong>Clinician
</strong></td>
<td><strong>Number Autism
</strong></td>
<td><strong>Percent Autism
</strong></td>
<td><strong>Number Spectrum
</strong></td>
<td><strong>Percent Spectrum
</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">n</td>
<td style="text-align: center;">n</td>
<td style="text-align: center;">n</td>
<td style="text-align: right;">42</td>
<td style="text-align: right;">14</td>
<td style="text-align: right;">17</td>
<td style="text-align: right;">12</td>
</tr>
<tr>
<td style="text-align: center;">n</td>
<td style="text-align: center;">n</td>
<td style="text-align: center;">y</td>
<td style="text-align: right;">2</td>
<td style="text-align: right;">100</td>
<td style="text-align: right;">2</td>
<td style="text-align: right;">50</td>
</tr>
<tr>
<td style="text-align: center;">n</td>
<td style="text-align: center;">y</td>
<td style="text-align: center;">n</td>
<td style="text-align: right;">16</td>
<td style="text-align: right;">56</td>
<td style="text-align: right;">9</td>
<td style="text-align: right;">44</td>
</tr>
<tr>
<td style="text-align: center;">n</td>
<td style="text-align: center;">y</td>
<td style="text-align: center;">y</td>
<td style="text-align: right;">1</td>
<td style="text-align: right;">100</td>
<td style="text-align: right;">2</td>
<td style="text-align: right;">100</td>
</tr>
<tr>
<td style="text-align: center;">y</td>
<td style="text-align: center;">n</td>
<td style="text-align: center;">n</td>
<td style="text-align: right;">23</td>
<td style="text-align: right;">43</td>
<td style="text-align: right;">7</td>
<td style="text-align: right;">43</td>
</tr>
<tr>
<td style="text-align: center;">y</td>
<td style="text-align: center;">n</td>
<td style="text-align: center;">y</td>
<td style="text-align: right;">11</td>
<td style="text-align: right;">82</td>
<td style="text-align: right;">7</td>
<td style="text-align: right;">86</td>
</tr>
<tr>
<td style="text-align: center;">y</td>
<td style="text-align: center;">y</td>
<td style="text-align: center;">n</td>
<td style="text-align: right;">26</td>
<td style="text-align: right;">65</td>
<td style="text-align: right;">21</td>
<td style="text-align: right;">67</td>
</tr>
<tr>
<td style="text-align: center;">y</td>
<td style="text-align: center;">y</td>
<td style="text-align: center;">y</td>
<td style="text-align: right;">51</td>
<td style="text-align: right;">90</td>
<td style="text-align: right;">107</td>
<td style="text-align: right;">96</td>
</tr>
<tr>
<td><em>
</em></td>
<td></td>
<td> <strong>Total</strong></td>
<td style="text-align: right;"><strong>172</strong></td>
<td style="text-align: right;"></td>
<td style="text-align: right;"><strong>172</strong></td>
<td style="text-align: right;"></td>
</tr>
</tbody>
</table>

The root node of this tree is of course the entire data set, or the last row of the table. The tree splits into a yes and a no branch in every column. The columns <em>Number Autism</em> and <em>Number Spectrum</em> are shown in the Venn diagram above. But what we are really interested in are the percentages <em>Percent Autism</em> and <em>Percent Spectrum</em>. Also, the tree structure is implicit in the Venn diagram but very hard to read (in fact, I would argue that Venn diagrams are a great tool for learning about sets, but useless as a visualization).

## The Redesign

The following images now show my redesign of the diagram. The percentages are shown as bars for easy comparison, while the number of cases for each combination of tests is shown as a number - since the absolute numbers are important here, that appears to be the best choice. Which tests indicated autism is shown by the tree diagram below the bar charts. This diagram should also clarify the brief explanation abive about the tree in the table above.

<p align="center"><img src="https://media.eagereyes.org/media/attachments/Autism.png" alt="" width="425" height="389" border="0" /></p>

<p align="center"><img src="https://media.eagereyes.org/media/attachments/AutismSpectrum.png" alt="" width="428" height="389" border="0" /></p>

It is easy to see that there are significant differences in the accuracy of the combinations of the tests. Because they are roughly sorted from all-no to all-yes from left to right, there is an overall trend of the numbers getting better, but it is not very clear which combination of tests is the most effective.

One value that stands out is the left-most one: the one in which all tests were negative. This value should of course be as small as possible, because it shows the number of false negatives. All other bars show the correct positives.

We can sort the table by correctness, and get bars that neatly increase in height from left to right. Of course, some of the bars (especially the 100% ones) have very little support (one or two cases), so we indicate to the user that they should be disregarded.

Notice that in the images below, the order of test combinations from left to right is not identical (i.e., the autism and spectrum numbers were sorted independently), and the order of criteria in the tree levels has changed from the ones above - but is consistent between these two images.

<p align="center"><img src="https://media.eagereyes.org/media/attachments/Autism-sorted.png" alt="" width="398" height="390" border="0" /></p>

<p align="center"><img src="https://media.eagereyes.org/media/attachments/AutismSpectrum-sorted.png" alt="" width="395" height="390" border="0" /></p>

The new order of tree levels is very significant, because the higher tree level (closer to the root of the tree) has a greater impact on the accuracy of the test than the lower levels. The clinician's assessment thus is the most important criterion, followed by ADI-R and then PL-AIDOS.

What can we learn from this? Subsets defined by categories are effectively hierarchies. This is the reason why categorical data can be visualized so well using treemaps! And especially in this case, we are very interested in the hierarchy, because it tells us which of the tests contributes most to the accuracy of the diagnosis.

Below are PDF versions of my redesigns for closer inspection.

<table border="0">
<tbody>
<tr valign="top">
<td><a href="https://media.eagereyes.org/media/attachments/Autism.pdf" target="_blank"><img src="https://media.eagereyes.org/media/attachments/Autism-thumb.png" alt="" width="298" height="210" border="0" /></a></td>
<td><a href="https://media.eagereyes.org/media/attachments/Autism-sorted.pdf" target="_blank"><img src="https://media.eagereyes.org/media/attachments/Autism-sorted-thumb.png" alt="" width="298" height="210" border="0" /></a></td>
</tr>
</tbody>
</table>

[[PostedBy]]

