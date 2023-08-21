import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Above All, Do No Harm!","description":"Heatmaps and 3D pie charts are often criticized, and for good reason. But they're not always a bad choice, and can work for simple data presentation. Context is important when criticizing visualizations, especially when there are no obvious improvements that can be made.","frontmatter":{"title":"Above All, Do No Harm!","description":"Heatmaps and 3D pie charts are often criticized, and for good reason. But they're not always a bad choice, and can work for simple data presentation. Context is important when criticizing visualizations, especially when there are no obvious improvements that can be made.","date":"2011-08-21T22:17:25.000Z","tags":"Visual Communication, criticism","featuredImage":null},"headers":[],"relativePath":"blog/2011/above-all-do-no-harm.md","filePath":"blog/2011/above-all-do-no-harm.md"}`);
const _sfc_main = { name: "blog/2011/above-all-do-no-harm.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><a href="/criticism/above-all-do-no-harm"><img src="https://media.eagereyes.org/media/2011/soccer-teaser.jpg" alt="" width="600" height="200"></a></p><h1 id="above-all-do-no-harm" tabindex="-1">Above All, Do No Harm! <a class="header-anchor" href="#above-all-do-no-harm" aria-label="Permalink to &quot;Above All, Do No Harm!&quot;">​</a></h1><p>Heatmaps and 3D pie charts are often criticized, and for good reason. But they&#39;re not always a bad choice, and can work for simple data presentation. Context is important when criticizing visualizations, especially when there are no obvious improvements that can be made.</p><h2 id="the-chart" tabindex="-1">The Chart <a class="header-anchor" href="#the-chart" aria-label="Permalink to &quot;The Chart&quot;">​</a></h2><p><a href="http://well-formed-data.net/">Moritz Stefaner</a> <a href="https://twitter.com/moritz_stefaner/status/105029152993845249">tweeted</a> about this chart on the weekend, and he did not like it.</p><p align="center"><img src="https://media.eagereyes.org/media/2011/soccer-moritz.png" alt="" width="600" height="220"></p><p>The <a href="http://www.spiegel.de/fotostrecke/fotostrecke-71846-2.html">image in question</a> was posted as part of an article in German magazine <em>Der Spiegel</em>. The point of it is to show the strategy of Dutch soccer player Arjen Robben in a particular match against Germany.</p><p align="center"><img src="https://media.eagereyes.org/media/2011/soccer-heatmap.jpg" alt="" width="600" height="448"></p><p>The image caption claims that it shows where he spent most of his time during the game, and even lets you see his movements.</p><p>The way the data is shown here is by means of a 3D bar chart overlaid on the soccer field. The information is encoded redundantly in both the height of the bars and their color.</p><h2 id="criticism" tabindex="-1">Criticism <a class="header-anchor" href="#criticism" aria-label="Permalink to &quot;Criticism&quot;">​</a></h2><p>It&#39;s easy to criticize a tilted 3D bar chart: the bars are distorted by the perspective, and at least in principle it can hide information (shorter bars can disappear behind taller ones). There is a reason why three-dimensional visualizations are rare in information visualization: they are hard to read and navigate, and there are few if any advantages to be gained from the third dimension.</p><p>Another problem is that there is a big step between the green parts of the soccer field, which Robben presumably never touched during the game, and the bars for the squares where he spent time. There has to be some kind of cut-off though, or Robben must be able to teleport himself onto some of the disconnected squares.</p><h2 id="above-all-do-no-harm-1" tabindex="-1">Above All, Do No Harm <a class="header-anchor" href="#above-all-do-no-harm-1" aria-label="Permalink to &quot;Above All, Do No Harm&quot;">​</a></h2><p>In light of the above, this a bad visualization. However, I argue that it works, and that it does not violate what should be visualization&#39;s prime directive: above all, do no harm!</p><p>This image is meant to communicate a small amount of information, essentially 20x14 (280) grid cells with numbers. The obvious thing to do, since that is also how the data was acquired, is to map them onto the soccer field. That could be done in 2D or (pseudo-)3D.</p><p>The 2D case would be a boring heatmap, where the data would be only encoded using color. If you wanted to be serious about the lower cutoff, there would be no or very few fields with no value (or a 0) where the soccer field could be seen, so there would be little context to guide the viewer. The result might be more in line with common visualization wisdom, but also much less compelling and in need of a lot more explanation to even understand what it shows.</p><p>The 3D version has two things going for it: it shows the data in a redundant way (using the bar heights), and it provides useful context. Why also vary color? Well, why not? It&#39;s obvious that the bars are much easier to differentiate when their colors differ. Redundant encodings are not very common in visualization, but they often end up being useful, in particular when using visualization for presentation and communication.</p><p>The obvious downside of potentially hiding values between the 3D bars is not an issue here, since the distribution of values is nice and smooth. We can see all bars and can compare them reasonably well. The point of this chart is not to precisely compare the exact amounts of time Robben spent in each square, so the fact that we&#39;re not able to compare them with great accuracy is simply not an issue.</p><p>The cut-off that lets the field shine through also helps this visualization, because it establishes context: this is a soccer field. Not only does it show that immediately, it also gives enough context to judge where on the field the squares are. Sure, there is a bit of inaccuracy in that cut-off, but does that really matter? The point is to show where the guy spent most of his time, not where he was seen once or twice during the entire game.</p><p>Finally, the arrow. It&#39;s not entirely obvious, but I assume that it shows which goal Robben&#39;s team was playing towards. Since the sides are usually switched after the break, they probably rotated the data from the second half to get a more consistent image. This could perhaps be labeled a bit more clearly, but I think it&#39;s actually useful to figure out if Robben was playing defense or forward.</p><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>Given the amount of data, the point to be made, and the audience, I think that this visualization is a good choice. While it does use a few things that can be problematic, they are non-issues in this case. The point gets across, clearly and accurately enough, and with enough context to make the visualization easy to read and understand.</p><p>It&#39;s a bit too easy to dismiss a visualization just because it uses a technique that is overused and that is often problematic. We need a bit more subtlety in our criticism, and a bit more care to see if something might work in a particular case, even if it may not in many others.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on August 21, 2011. Filed under <a href="/section/criticism">criticism</a>.</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://dillingham.me.uk/" rel="nofollow noopener" target="_blank">Iain Dillingham</a> says…</p><blockquote><p>Hi there. Nice post -- but that arrow. I wonder whether the arrow is doing harm. I don&#39;t know much about German football, but Robben is a winger so it&#39;s no surprise that he appears to spend much of the game up front. However, because it&#39;s not clear whether the data were rotated or translated to produce one image for the two halves of the game, we don&#39;t know for sure whether Robben favours the right or the left of the pitch. Taking the visualization at face value, it seems he favours the right. This makes sense, but it&#39;s rather ambiguous!</p></blockquote><p><a href="http://twitter.com/#!/acotgreave" rel="nofollow noopener" target="_blank">Andy Cotgreave</a> says…</p><blockquote><p>Although I don&#39;t know for sure, I assume the arrow indicates the direction of play, and that the creators of the viz merged both halves of the game into one dataset.</p><p>This makes perfect sense to me - the direction of play is irrelevant*; what&#39;s important is where he spends his time. If the data&#39;s not merged, then you don&#39;t see the story.</p><ul><li>okay, perhaps direction of play can be important because of wind conditions and where the home/away fans are sitting, but really, this is irrelevant.</li></ul></blockquote><p><a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…</p><blockquote><p>I&#39;m usually very sensitive to all of the issues raised about the graph. But as soon as I saw it, I knew without any conscious thought what it was about.</p><p>Since it mimics an actual physical space, the 3D perspective was okay, and the thin bars were tall enough to emphasize the colors, without obscuring any values.</p><p>The arrow didn&#39;t really bother me. It&#39;s a bit bold, but no matter. It&#39;s probably not even needed. I found that I knew just from the perspective view which goal the player was shooting for.</p></blockquote><p><a href="http://vislives.com" rel="nofollow noopener" target="_blank">Chris Pudney</a> says…</p><blockquote><p>By coincidence I came across <a href="http://www.arcticicehockey.com/2011/8/22/2374005/shot-target-visualization">this post on ice hockey &quot;Shot Target Visualization&quot;</a> which uses a series of heat maps to encode the frequency of shots on goal vs. the shooters&#39; position on the ice.</p></blockquote><p><a href="http://moritz.stefaner.eu" rel="nofollow noopener" target="_blank">Moritz Stefaner</a> says…</p><blockquote><p>Just to let you know that I posted a reply and a proposal for a redesign over at: <a href="http://well-formed-data.net/archives/669/on-the-role-of-bacon-in-visualization" target="_blank" rel="noreferrer">http://well-formed-data.net/archives/669/on-the-role-of-bacon-in-visualization</a></p></blockquote><p>Sixing Huang says…</p><blockquote><p>I agree that the 3D bar charts are sufferring from the &quot;hiding&quot; problem. One way to diminish it is to make the bar a bit transparent. But this brings another problem: the visualization looks very crowded because a lot of vertices are visible that should be hidden. And sometimes it is difficult to read the heights of some bars. So being transparent or opaque doesn&#39;t solve the entire problem.</p><p>On the other hand, I find heatmap doesn&#39;t have this problem at all. Of course, human eyes are better at telling height than colors apart. If we superimpose the real value on top of the color cells, this will not be a problem again.</p><p>The alternative will be using bubble table aka balloon plot that is drawing circles in the table (sometimes along side with the values). However, I think bubble plot is more confusing (size, radius or diameter are proportional to the value?) and more difficult to be differentiated between close values.</p><p>So my personal favorite is still heatmap, sophisticated it is, but it gets the job done!</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2011/above-all-do-no-harm.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboveAllDoNoHarm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  aboveAllDoNoHarm as default
};
