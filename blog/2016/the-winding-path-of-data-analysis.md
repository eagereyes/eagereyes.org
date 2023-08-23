---
title: "The Winding Path of Data Analysis"
description: "Data analysis is not a straight-forward process: you try out lots of things, you go down a path that seems promising but then turns out to not work out, and suddenly you hit upon the thing you were looking for."
date: 2016-10-03 19:17:55
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/10/it_is_obvious.png
outline: false
---

# The Winding Path of Data Analysis

Data analysis is not a straight-forward process: you try out lots of things, you go down a path that seems promising but then turns out to not work out, and suddenly you hit upon the thing you were looking for.

<a href="http://abstrusegoose.com/230">This comic</a> is about mathematical proofs, but what hit me recently is how well it also applies to data analysis.

<img class="aligncenter size-full wp-image-9683" src="https://media.eagereyes.org/wp-content/uploads/2016/10/it_is_obvious.png" alt="it_is_obvious" width="744" height="616" />

It's not just the many false starts, it also nicely shows the difference between analysis and presentation: analysis is where you make all the mistakes, but nobody cares about those. When you present your results or your insights, you show the logical, straight path. You want to present a sequence of steps that make sense, no matter whether you actually followed them during your analysis or not.

The human element here is still remarkable, and it makes me very skeptical about automated approaches. A machine might be able to try out lots of things, but how is it going to know which ones are meaningful? How is it going to tell a coherent story about its findings?

And while I get the idea of <a href="http://www.bitss.org/2014/06/13/preregistration-controversy/">preregistration for studies</a>, I'm not convinced that they're feasible for the same reason. There's just too much work that goes into the data analysis that is not mechanical, even without p-hacking.

 

[[PostedBy]]

<aside class="comments">

---
## Comments

Bhushan Karle says…
>	Great insight.

mjskay says…
>	While it doesn't work for every situation (e.g. certain kinds of observational data, existing datasets), pilot studies can help address the difficulty with pre-registration you have identified. Run a pilot, follow the winding path of data analysis (I like this analogy!), record your path (e.g., as an R script). Then run the final study and use the same analysis on it. This can also help in other ways: e.g., if you want to do a power analysis, your pilot gives you the data to do that, which helps you choose the sample size for the full study.
>	
>	Of course in practice---limited resources, limited time---it can be hard to do this. In the case where you already have the data, I think another useful approach is model averaging---follow your winding path, but acknowledge your uncertainty in choosing the correct path (model) by averaging over several paths (models) you found.
>	
>	(I think the analogy might break down at this point...)

<a href="http://civilstatistician.wordpress.com/" rel="nofollow noopener" target="_blank">Jerzy</a> says…
>	I love this comic. And I agree that there are serious concerns about "rote" data analysis getting the right p-values but missing out on insights. (William Cleveland's books have some great examples.)
>	
>	But most of all, thanks for that "preregistration controversy" link, and its link to Cortex and other journals' "Registered Reports." These seem like a great additional publication option that addresses some of the concerns around preregistration.
>	
>	I understand the worry that preregistered "rote" data analysis would prevent you from reporting extra, unexpected findings. But apparently for journals like Cortex, it's no problem---just report them in a separate "post hoc" section (as long as your main question+study was interesting and well-designed). If anything, those post-hoc things are fodder you can use to preregister your next study and thus expand your CV, *whether or not* they pan out next time.
>	
>	Plus, it's optional. Nobody's being banned from publishing their usual studies. It just means there are *also* places which reward good study design and ignore p-hacking.
>	
>	@mjskay: Amen to pilot studies!
>	
>	@Robert: Did you mean preregistration is rarely/never feasible? Or it can be feasible, but just shouldn't be a blanket requirement?

</aside>

