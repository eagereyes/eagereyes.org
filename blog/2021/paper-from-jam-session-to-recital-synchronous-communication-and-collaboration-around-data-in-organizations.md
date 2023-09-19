---
title: "Paper: From Jam Session to Recital: Synchronous Communication and Collaboration Around Data in Organizations"
description: "Who are the people who use data and visualization as part of their work every day? In particular, how do people use data as part of meetings, to present to others, to discuss their findings and recommendations, etc.? My colleague Matt Brehmer and I ran a pair of studies to find out."
date: 2021-10-26 21:51:06
tags: paper
featuredImage: https://media.eagereyes.org/wp-content/uploads/2021/10/pexels-photo-3184292.jpeg
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2021/10/pexels-photo-3184292.jpeg" width="940" height="529" /></p>

# Paper: From Jam Session to Recital: Synchronous Communication and Collaboration Around Data in Organizations

Who are the people who use data and visualization as part of their work every day? In particular, how do people use data as part of meetings, to present to others, to discuss their findings and recommendations, etc.? My colleague Matt Brehmer and I ran a pair of studies to find out.

I’ve written <a href="https://engineering.tableau.com/how-do-people-communicate-and-collaborate-with-data-in-organizations-a19154bd25e0">a little blog post about the paper over on the Tableau Engineering Blog</a>, and I will give a brief summary here as well. But in this post, I want to focus on a few quotes and points that I found particularly interesting.

The study started with us mocking up ideas for features that would be useful as part of presentations with data, such as builds or progressive reveals with granular control, a secondary screen display with controls over what’s being shown to the audience, and a simple authoring system for syncing up video with an interactive visualization that would walk through a presentation but stay interactive for the viewer.

In the process of interviewing people about their responses to our ideas, we realized that we weren’t spending enough time asking them about their own uses of data in their own organizations. These were all people working in organizations and regularly using data in presentations to others, a group of people we actually know very little about. So we ran a second study, which involved a few of the same people, to dive deeper into their actual uses, frustrations, and ideas.

In the paper, we use musical metaphors to describe three categories of presentations: <em>jam sessions</em> are highly interactive small-group meetings where the presentation tends to be just the opener to collaboration; <em>semi-improvised performances</em> are more formal presentations outside the presenter’s immediate team, often with more preparation, and delivered at regular intervals like weekly, monthly, or quarterly; and finally <em>recitals</em> are the kinds of formal presentation many of us associate with data presentation, such as TED Talks, big productions on stage, etc. In organizations, that latter group also includes presentations to senior management or the company board, company owners, as well as customers.

## Bar Charts Suck

One thing that was fun to see was that people really dislike the workhorse analytical chart types like bar charts for presentation. Especially in the more formal kinds of presentation, they want to use more interesting chart types to get people’s attention. <em>“Some people are half asleep”</em> was one interesting quote, and the same person told us that he <em>“hates bar charts, [they’re] very 2001.”</em> Other participant insert uses lollipop charts to <em>“break up an otherwise boring series of charts”.</em>

Presentations to owners and boards are sometimes created by design agencies that make them much more visually interesting without (hopefully) changing any of the data. I think one person really summed it up nicely, saying that he wanted to <em>“present ordinary data in extraordinary ways.”</em>

## Regular Meeting Cadence

I don’t think I’ve ever seen anybody discuss recurring uses of visualization in the literature. But meetings where data gets presented aren’t one-offs, they happen on some kind of schedule, like every week, month, quarter, etc. In fact, one of our interviewees sometimes meets with her team multiple times <em>per day</em>, saying <em>“you don’t want to see my calendar!”</em>

Presentations for recurring meetings aren’t built from scratch and don’t start from zero. The people there know the data and context, and they often will have expectations for what they will hear. This is completely different from the common idea of data analysis, and in particular data exploration, in visualization. What tools do we have for these people? How do you show change from the previous presentation, how do you incorporate expectations?

## Poor Tool Coverage

What also struck me as we were writing the paper was just how poorly presentation with data is supported by tools today. Visualizations and business intelligence tools are used a lot in <em>jam session</em>-style meetings, but lack most of even the basic features you’d expect from PowerPoint or Google Slides. And presentation tools, which are much more common in <em>semi-improvised performances</em> and <em>recitals</em>, lose the direct connection to the data. So when the data changes, often the entire presentation has to be updated – by hand! – to make sure nothing is missed. This isn’t uncommon either, sales and other data that gets reported externally goes through many revisions before it’s final, so having to update data in presentations is as common as it is painful.

We believe that there is a lot of opportunity here, both for research and for tool development. Visualization research has mostly ignored business users and the presentation use case so far, and even publishing work about them is challenging – I know of work that we actually used as inspiration for our studies that is still in revision limbo. Given how many people this kind of work might affect, it seems like an enormous missed opportunity.

There’s a lot more in <a href="/publications/Brehmer-VIS-2021b">the paper</a>, including about our mock-ups, as well as many more quotes and other insights into this very common use of data.

<hr class="wp-block-separator"/>

Matthew Brehmer and Robert Kosara, <a href="/publications/Brehmer-VIS-2021b">From Jam Session to Recital: Synchronous Communication and Collaboration Around Data in Organizations</a>. <em>Transactions on Visualization and Computer Graphics (Proceedings Vis)</em>, 2021.


<PostedBy />


