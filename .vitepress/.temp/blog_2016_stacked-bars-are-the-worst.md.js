import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Stacked Bars Are the Worst","description":"Bar charts are great. They always work. They're always the safe choice. Right? Well, no. Stacked bar charts are deceiving because we think they work just like regular bars, when they're really pretty terrible.","frontmatter":{"title":"Stacked Bars Are the Worst","description":"Bar charts are great. They always work. They're always the safe choice. Right? Well, no. Stacked bar charts are deceiving because we think they work just like regular bars, when they're really pretty terrible.","date":"2016-08-24T20:21:53.000Z","tags":"techniques","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2016/08/bars-stacked.png"},"headers":[],"relativePath":"blog/2016/stacked-bars-are-the-worst.md","filePath":"blog/2016/stacked-bars-are-the-worst.md"}`);
const _sfc_main = { name: "blog/2016/stacked-bars-are-the-worst.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stacked-bars-are-the-worst" tabindex="-1">Stacked Bars Are the Worst <a class="header-anchor" href="#stacked-bars-are-the-worst" aria-label="Permalink to &quot;Stacked Bars Are the Worst&quot;">​</a></h1><p>Bar charts are great. They always work. They&#39;re always the safe choice. Right? Well, no. Stacked bar charts are deceiving because we think they work just like regular bars, when they&#39;re really pretty terrible.</p><h2 id="some-examples" tabindex="-1">Some Examples <a class="header-anchor" href="#some-examples" aria-label="Permalink to &quot;Some Examples&quot;">​</a></h2><p>Look at the following chart, showing <a href="https://public.tableau.com/views/ArbeitsmarktBayern2016/ArbeitsmarktBayern">unemployment numbers for Bavaria</a>. The total height of the bars is easy enough to compare, but how about the blue bars at the top? Are those getting longer or shorter? How sure are you?</p><p align="center"><img class="aligncenter size-full wp-image-9481" src="https://media.eagereyes.org/wp-content/uploads/2016/08/bars-stacked.png" alt="bars-stacked" width="825" height="406"></p><p>Wikipedia has <a href="https://commons.wikimedia.org/wiki/File:Piecharts.svg">the following chart comparing pie and bar charts</a>, which is used in teaching visualization to show how bad pie charts are. Compare the green segment in the pie charts and the bar charts. Clearly, pie charts are much more difficult to read.</p><p align="center"><img class="aligncenter size-full wp-image-9482" src="https://media.eagereyes.org/wp-content/uploads/2016/08/piecharts-wikipedia.png" alt="piecharts-wikipedia" width="610" height="474"></p><p>But is the comparison fair? The bars are next to each other, they&#39;re easy to compare. Stacked bars are actually much more like pie charts.</p><h2 id="the-obligatory-cleveland-and-mcgill-section" tabindex="-1">The Obligatory Cleveland and McGill Section <a class="header-anchor" href="#the-obligatory-cleveland-and-mcgill-section" aria-label="Permalink to &quot;The Obligatory Cleveland and McGill Section&quot;">​</a></h2><p>While this doesn&#39;t seem to be widely known, it&#39;s not new. In their seminal paper on graphical perception, Cleveland and McGill compared stacked bars with other ways of doing bar charts. Here are the five kinds of bar configurations they compared.</p><p align="center"><img class="aligncenter size-full wp-image-9478" src="https://media.eagereyes.org/wp-content/uploads/2016/08/bar-chart-types.png" alt="bar-chart-types" width="660" height="164"></p><p>The little dots indicate what to compare. Types 4 and 5 are the stacked bar charts. Type 4 is similar to my example above, where you&#39;re looking at bars that sit on top of other bars. In Type 5, you&#39;re comparing lengths that are stacked rather than next to each other. The results show that these are the most difficult, producing the highest error.</p><p>Here are confidence intervals (same thing I&#39;ve used in the <a href="/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results">recent pie charts postings</a>) for error. Check out types 4 and 5!</p><p align="center"><img class="aligncenter size-medium wp-image-9480" src="https://media.eagereyes.org/wp-content/uploads/2016/08/results-bars-only.png" alt="results-bars-only" width="660" height="240"></p><p>The latter are clearly worse than the first three. The confidence intervals clearly don&#39;t overlap. The error metric used in the paper is also based on the logarithm, so the differences here are pretty large.</p><p>But Cleveland and McGill also tested pie charts. Let&#39;s see how pie charts do in comparison. I&#39;ve highlighted them in the full version of the results.</p><p align="center"><img class="aligncenter size-full wp-image-9479" src="https://media.eagereyes.org/wp-content/uploads/2016/08/results-all.png" alt="results-all" width="660" height="439"></p><p>Stacked bar charts have higher error than pie charts (angle condition, even though we now know <a href="/papers/a-pair-of-pie-chart-papers">that it&#39;s not angle</a>)! The basic bar charts are clearly better than pie charts, but stack them and they&#39;re worse! Both stacked configurations are worse than pie charts, but especially the one where you&#39;re comparing bars that sit on top of each other.</p><p>There are also other studies that have found the same or similar results. One example is <a href="/blog/2016/a-reanalysis-of-a-study-about-square-pie-charts-from-2009">the Mechanical Turk study on square pies I wrote about recently</a>.</p><h2 id="it-s-not-that-simple" tabindex="-1">It&#39;s Not That Simple <a class="header-anchor" href="#it-s-not-that-simple" aria-label="Permalink to &quot;It&#39;s Not That Simple&quot;">​</a></h2><p>Nobody ever got fired for using a bar chart, right? Well, it&#39;s not quite that easy. Even though many charts seem really simple, making small changes to them can have a significant impact on their readability.</p><p>There is also more to it than just the chart type. If the differences in the values are large, you&#39;ll be able to tell which way things are going even if you can&#39;t read the values with much precision. Depending on the use case, that can be good enough. But when the numbers are similar or there is no clear trend, they get harder to see and you need a more robust way of showing the data.</p><p>Stacked bars are particularly problematic because they have the air of precision, when they&#39;re really poor. They can be useful when the point is to show that a value is the sum of other values, but you&#39;re only interested in comparing the totals. They also work if you only need to show one section and can make that the one on the bottom. Then the bars are comparable and work well.</p><p>But just throwing values into a stacked bar chart is a bad idea. Just like people tend to misuse pie charts, most uses of stacked bars I see are really poorly done. People don&#39;t pick up on that even when they will immediately ridicule you for using a pie chart. Things are a bit more subtle than <em>bar chart good, pie chart bad</em>, however.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on August 24, 2016</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p>Karunaker Molugu says…</p><blockquote><p>Nice article Robert and have seen people abuse it widely. If there are two or three segments, its easy (kind of) to compare and stacked bars make sense but when there are more.. I prefer line charts.</p></blockquote><p><a href="http://mjskay.com" rel="nofollow noopener" target="_blank">Matthew Kay</a> says…</p><blockquote><p>I think it&#39;s difficult to advocate for more subtle and thoughtful choice of visualization types with an article titled &quot;Stacked bars are the worst&quot;. Is the title intentionally ironic?</p><p>I don&#39;t think the antidote to mindlessly repeating the mantra &quot;never use pie charts&quot; is a new generation mindlessly repeating the mantra &quot;stacked bars are the worst&quot;. Especially since you do acknowledge they are useful in some cases (personally I think comparing many Likert items/diverging scales can be one---scaled to the same total height there becomes essentially two categories you are interested in, and comparing across many side by side is easier than with any other presentation I have seen), but this minor point will likely be forgotten as readers recount this article to others.</p></blockquote><p>Darb K says…</p><blockquote><p>then what do you recommend?</p></blockquote><p><a href="http://twitter.com/acotgreave" rel="nofollow noopener" target="_blank">Andy Cotgreave (@acotgreave)</a> says…</p><blockquote><p>I&#39;m afraid I agree with Matthew: they&#39;re weak for all the reasons you point out. You also acknowledge their strengths, so you&#39;re passionate headline undermines your argument.</p><p>If the PRIMARY purpose is to look at the total, then they&#39;re not too bad. The SECONDARY purpose (what&#39;s the breakdown of the bar) isn&#39;t as effectively conveyed but that&#39;s ok, it&#39;s contextual info to support the PRIMARY purpose.</p><p>Also this article rehashes a lot of what Stephen Few stated recently. The debate in the comments with Cole and Steve is fascinating (if you have the stamina): <a href="https://www.perceptualedge.com/blog/?p=2239" target="_blank" rel="noreferrer">https://www.perceptualedge.com/blog/?p=2239</a></p></blockquote><p>Jeffrey Heer says…</p><blockquote><p>Hi Robert,</p><p>I think we need to be more careful in our interpretation of research results. This is a critical responsibility in our role as researchers.</p><p>In the case of Cleveland &amp; McGill, the position-length and position-angle experiments actually have different experimental protocols and so the results should not be directly compared -- at least, not without careful consideration and caveats. (Though the graphic itself does indeed invite comparison between experiments!) The fact that position judgments in the position-angle experiment exhibit much lower error than those same judgments in the position-length experiments should give us pause. A more controlled comparison comes from our 2010 graphical perception paper (<a href="http://idl.cs.washington.edu/papers/crowdsourcing-graphical-perception" target="_blank" rel="noreferrer">http://idl.cs.washington.edu/papers/crowdsourcing-graphical-perception</a>), where stacked bar and pie chart judgments led to error distributions with overlapping confidence intervals.</p><p>I&#39;m afraid your title is not supported by the data. The experimental data I&#39;m familiar with suggest that stacked bars and pies (with a small number of elements!) lead to similar errors. Headlining that &quot;stacked bars are the worst&quot; is much more akin to yellow journalism than to experimentally-supported advice.</p></blockquote><p><a href="https://www.facebook.com/app_scoped_user_id/694515078/" rel="nofollow noopener" target="_blank">William Holz</a> says…</p><blockquote><p>Well, if you want to visualize information in a manner in which people can generate effective insights, it&#39;s important to acknowledge the weaknesses of stacked bars because they&#39;re very significant and right now many people treat stacked bars as a de facto quality visualization.</p><p>That&#39;s a bad thing because the only places stacked bars are effective are with respect to totals and whichever element is placed on the bottom. The &#39;stacked&#39; elements tend to get dramatically misinterpreted and I&#39;ve more than once had to replace an existing viz because somebody was making comparisons between stacked items and was struggling to identify variance.</p><p>I think the takeaway should be that every viz has its flaws and every dataset has its quirks. If we&#39;re trying to communicate information, we should be trying to do it as well as possible, right? If we&#39;re doing something interactive and can&#39;t add guidelines or somesuch then we shouldn&#39;t be leaning on stacked bars.</p><p>This is more severe than the pie chart issue. Pie charts are popular, comprehensible, and just tend to fall apart when you try to do too much with them. Stacked bars fall apart quickly and can become deceptive if things end up arranged in just the right/wrong way. That&#39;s not a value add, and if your viz isn&#39;t adding value then it&#39;s time to either change visualizations or not just visualize for the sake of &#39;pretty&#39;.</p></blockquote><p>Rina Petersen says…</p><blockquote><p>Thanks for the thoughtful analysis, as usual.</p><p>IMO, stack bars save real estate. For that reason, I still use it, usually for a dimension with 3-4 category. I usually put the most interested category at the bottom or the top of the bars to make is easier to see the trend.</p></blockquote><p><a href="https://www.facebook.com/app_scoped_user_id/694515078/" rel="nofollow noopener" target="_blank">William Holz</a> says…</p><blockquote><p>&quot;IMO, stack bars save real estate. For that reason, I still use it, usually for a dimension with 3-4 category. I usually put the most interested category at the bottom or the top of the bars to make is easier to see the trend.&quot;</p><p>Ditto! Great minds think alike (and perhaps so do we) 😉</p><p>They&#39;re useful for the total, and people have no difficulty with whatever field is at the bottom of the bar. I&#39;ve dabbled with the order of the elements a bit and found that if you have a field that&#39;s largely unchanging then it&#39;s pretty harmless to put those on the bottom (since that doesn&#39;t screw up the perception of the one above, so you end up with three elements that work!)...but as a rule I think your strategy of putting the &#39;key&#39; element on the bottom is the way to go!</p></blockquote><p><a href="https://www.facebook.com/app_scoped_user_id/694515078/" rel="nofollow noopener" target="_blank">William Holz</a> says…</p><blockquote><p>Hey Jeffrey! Great little pub you had there.</p><p>Out of curiosity, are you guys considering doing a study specifically on the differences between people&#39;s interpretations of the components? In my experience people have little difficulty with totals and whichever part of the bar is &#39;unstacked&#39; (on the bottom) but start to struggle (sometimes dramatically!) with value judgments when dealing with elements that have been stacked on top of another element that diverges.</p><p>I&#39;d be interested to see how well supported that is experimentally, as well as how other factors (degree of variance, use of guidelines, etc.) influence people&#39;s ability to comprehend them.</p></blockquote><p><a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…</p><blockquote><p>Okay, let&#39;s talk about the title: it&#39;s not meant to be a precise statement, but &quot;the worst&quot; as in &quot;You&#39;re always criticizing my postings! You&#39;re THE WORST!&quot; Also, stacked bars are the worst bars, and the data actually supports that (at least some of the data).</p><p>As I pointed out above, we found that stacked bars did the worst when compared to square pies, pies, and donuts. It seems like this could be a good topic for some meta-analysis.</p></blockquote><p><a href="http://www.mjskay.com/" rel="nofollow noopener" target="_blank">Matthew Kay</a> says…</p><blockquote><p>I did not say that we shouldn&#39;t acknowledge the weaknesses of stacked bars.</p><p>I said we should acknowledge the weaknesses <em>and strengths</em> of stacked bars, in order to make informed judgements about when to use them. Robert has argued for more nuanced guidelines in vis, for example, that the blanket prescription against pie charts does not acknowledge the weaknesses <em>and strengths</em> of pie charts. It is thus ironic that this article makes exactly the same type of blanket prescription against stacked bars (in title and intro) that he correctly argues against giving in the case of pie charts.</p></blockquote><p><a href="http://dataremixed.com" rel="nofollow noopener" target="_blank">Ben Jones</a> says…</p><blockquote><p>Interesting discussion here. Thanks for reminding us about an arguably overlooked drawback with a popular chart type. I have to agree with Andy C and Jeff H, though, that the title was too provocative, and while it definitely got me to read the blog post, I&#39;m not quite ready to banish the stacked bar from my solution set based on what I read here.</p><p>Mostly because I wonder whether stacked bars really are &quot;the worst&quot; type of bar chart in every case. Picking up on Andy&#39;s comment, if my primary task is best aided by a comparison of the sum of the segment values, and if the individual segment lengths are secondary contextual elements only, wouldn&#39;t a stacked bar be far better than showing each segment side-by-side, or even better than a line chart, especially if the total bar (or line) wasn&#39;t shown? With these other chart types, I&#39;d have to do mental math just to know the totals for each chunk of time.</p><p>And in the defense of the example that you reference at the beginning of this blog post, the creator of the visualization probably does the best thing possible - they let the reader start with the overall picture as shown via the stacked bars, seeing the trend in the total value, and then the reader can also click through and see the trends associated with the individual segments by themselves. So it&#39;s a sequenced data narrative that takes advantage of the strengths of various chart types, and also hedges against their respective weaknesses.</p></blockquote><p><a href="http://richardbrath.wordpress.com" rel="nofollow noopener" target="_blank">Richard Brath</a> says…</p><blockquote><p>As others have already pointed out, the task changes the form of the representation. If you need to understand the change in the blue bars, there are other representations that may be better.</p><p>However, in practice, I have reservations about grouped bars sharing a common baseline (as shown in the second figure) instead of a stacked bar. As the number of entries increases beyond a few bars, the bar widths become narrow (the initial unemployment graph has 13 time intervals and 7 categories resulting in 91 discrete bars if redrawn as a grouped bar chart). If you&#39;re trying to see a trend in one category, it becomes difficult to trace that particular bar through each bar group unless it&#39;s the tallest bar or has some very obvious pattern different than the others.</p><p>There are many possible alternative layouts: stacked bars, grouped bars, small multiples of bars, pie charts, line charts, tables with bars, etc. Tables are interesting because of the assumed easy-to-use interactions available in tables - tables often include various sorting options. Sorting helps rearrange the entries to facilitate perceiving the data of interest.</p><p>If one can easily filter or re-sort a stacked bar so that the category of interest is along the baseline, then the visual comparison becomes easy. An interesting question is why don&#39;t we expect our (stacked bar) charts to have standardized, easy-to-use features such as filter, sort and re-order?</p></blockquote><p>Michael says…</p><blockquote><p>I agree- stacked bars often look nice but can be difficult to interpret. The one place I use them is when I&#39;m showing percentages of a total. Comparing the breakdown of a value into 2 categories over time works well with stacked bars. To be clear, I&#39;m talking about having the bars go the full height of the graph, with two colors showing the breakdown.</p></blockquote><p><a href="http://www.tlfresearch.co.uk" rel="nofollow noopener" target="_blank">Nigel</a> says…</p><blockquote><p>First let me state for the record - I&#39;m not an analyst.</p><p>There are a number of people saying if you want to focus on one of the results the stacked bar is acceptable as long as you put the data of interest at the bottom.</p><p>So, if you&#39;re focus is &quot;look at this compared to &quot;the rest&quot;&quot; - why not display it as such? group all the &quot;other&quot; categories in to a single category (so you&#39;re still seeing the &quot;look at me&quot; figures as part of the whole) - but you&#39;re not distracted by the other categories...</p></blockquote><p><a href="http://www.tlfresearch.co.uk" rel="nofollow noopener" target="_blank">Nigel</a> says…</p><blockquote><p>Yes, I noticed I used the wrong &quot;your&quot; at the start of the third paragraph...in my defence I originally wrote &quot;you&#39;re focussing on&quot;...but then changed my mind.</p><p>Looking at it is making my teeth itch, but there&#39;s no edit button.</p></blockquote><p>kld212 says…</p><blockquote><p>Bit late to the conversation here... but what about the 100% stacked bar chart? Is this not a fairly decent way of looking at how a mix changes? e.g. product sales (products a, b and c) year on year with 100% meaning total sales</p></blockquote><p>lori says…</p><blockquote><p>I&#39;m reading a scientific article and in utter frustration with one of its figures which is a stacked bar chart. I googled &quot;stacked bar charts are the worst!&quot; and found you. thank you for articulating these reasons so well!</p></blockquote><p>Matthew W Gillman says…</p><blockquote><p>If all bars are 100% and you heed the admonition of no more than 2 categories in each stacked bar (because the only interpretable portion is the bottom), then just show that bottom category in a single bar. So much easier to visually interpret. Stacked bars are indeed &quot;the worst.&quot;</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2016/stacked-bars-are-the-worst.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stackedBarsAreTheWorst = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stackedBarsAreTheWorst as default
};
