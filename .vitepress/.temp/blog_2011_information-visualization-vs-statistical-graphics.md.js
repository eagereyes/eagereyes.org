import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Information Visualization vs. Statistical Graphics","description":"Information Visualization shares part of its history and some techniques with statistical graphics. The two fields differ in their approaches though, and in the expectations people have of what they will gain from a visual representation. In two articles, Andrew Gelman and I have written about what we think visualization is, and our points of view could hardly be more different.","frontmatter":{"title":"Information Visualization vs. Statistical Graphics","description":"Information Visualization shares part of its history and some techniques with statistical graphics. The two fields differ in their approaches though, and in the expectations people have of what they will gain from a visual representation. In two articles, Andrew Gelman and I have written about what we think visualization is, and our points of view could hardly be more different.","date":"2011-08-02T21:14:30.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/media/2011/scgn.jpg"},"headers":[],"relativePath":"blog/2011/information-visualization-vs-statistical-graphics.md","filePath":"blog/2011/information-visualization-vs-statistical-graphics.md"}');
const _sfc_main = { name: "blog/2011/information-visualization-vs-statistical-graphics.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2011/scgn.jpg" alt="" width="600" height="194"></p><h1 id="information-visualization-vs-statistical-graphics" tabindex="-1">Information Visualization vs. Statistical Graphics <a class="header-anchor" href="#information-visualization-vs-statistical-graphics" aria-label="Permalink to &quot;Information Visualization vs. Statistical Graphics&quot;">​</a></h1><p>Information Visualization shares part of its history and some techniques with statistical graphics. The two fields differ in their approaches though, and in the expectations people have of what they will gain from a visual representation. In two articles, Andrew Gelman and I have written about what we think visualization is, and our points of view could hardly be more different.</p><h2 id="the-article" tabindex="-1">The Article <a class="header-anchor" href="#the-article" aria-label="Permalink to &quot;The Article&quot;">​</a></h2><p><a href="http://www.theusrus.de/blog/infovis-and-statgraphics/">Martin Theus</a> invited <a href="http://andrewgelman.com/">Andrew Gelman</a> and me to write articles for the <a href="http://stat-computing.org/">Statistical Computing and Graphics Newsletter</a> he is co-editing. The idea was to write about visualization from two perspectives: Gelman from the statistical graphics side, and I from the information visualization (infovis) side.</p><p>The resulting articles can be found in the <a href="http://stat-computing.org/newsletter/issues/scgn-22-1.pdf">current issue of the newsletter (PDF)</a>, and I&#39;m sure you&#39;ll find them interesting. My article is largely based on a critique of one of Gelman&#39;s postings titled <em><a href="http://andrewgelman.com/2010/12/that_puzzle-sol/">That Puzzle Solving Feeling</a></em> and its accompanying slides, though it&#39;s not actually mentioned in the text. But if you find the veiled references and the last sentence confusing, that is what they are referring to.</p><h2 id="the-reaction" tabindex="-1">The Reaction <a class="header-anchor" href="#the-reaction" aria-label="Permalink to &quot;The Reaction&quot;">​</a></h2><p>What has been interesting is not just the debate itself, but also the reaction and comparing the different points of view of two different communities. In response to the articles, Andrew Gelman and Kaiser Fung (author of <a href="http://junkcharts.typepad.com/">Junk Charts</a>) have written further postings, and I&#39;m having an interesting email exchange with Stephen Few about the merits of spirals for finding periodicity. The latter will be the topic for another posting, but the Gelman and Fung pieces are a good illustration why we need this kind of debate.</p><p><a href="http://statisticsforum.wordpress.com/2011/07/28/robert-kosaras-infovis-example-illustrates-the-chris-rock-effect-a-pleasurable-intellectual-effort-spent-in-discovering-something-obvious-that-couldve-been-noticed-and-even-quantified-much-mor/">Gelman&#39;s posting</a> essentially rehashes the argument that he made before about how the goal in infovis is drawing the reader in with nice-looking visuals, but not delivering much new information. He calls that the <em><a href="http://andrewgelman.com/2011/07/different_goals/">Chris Rock Effect</a></em>:</p><blockquote><p>I call this the Chris Rock effect. Chris Rock says things we all know are true. But he says it so well that we get a shock of recognition, the joy of relearning what we already know, but hearing it in a new way that makes us think more deeply about all sorts of related topics. Sure, you might have already known that Denver is not near any other large city–but seeing it on this map of phone calls brings this fact to life in a way that maybe never happened in your previous experiences looking at U.S. maps.</p></blockquote><p>That is clearly not what information visualization is about. The problem is not that Gelman misrepresents infovis on purpose, he simply has a skewed picture of what it is. Within a few days, he wrote <a href="http://statisticsforum.wordpress.com/2011/07/29/infovis-vs-statgraphics-a-clear-example-of-their-different-goals/">another posting making the same point</a> with different examples.</p><p><a href="http://statisticsforum.wordpress.com/2011/07/31/one-difference-between-statistical-graphics-and-infoviz-is-the-return-on-effort/">Kaiser Fung&#39;s posting</a> makes a different point, but is clearly based on the same (or a very similar) way of looking at visualization. He talks about what he calls the <em>return on effort</em>, and how that differs between infovis and statistical graphics. While Minard&#39;s Napoleon&#39;s March and Gapminder are supposedly in the high-reward range, the examples I use in the article are in the middle- to low-reward zones; and that is despite both requiring high effort. Fung does differentiate between the reader and the producer of a visual representation, though, and his point is about how the effort is distributed differently between statistical graphics and visualization: in infovis, the reader has to do more work than in statistical graphics.</p><h2 id="points-of-view" tabindex="-1">Points of View <a class="header-anchor" href="#points-of-view" aria-label="Permalink to &quot;Points of View&quot;">​</a></h2><p>I think it&#39;s clear that both Gelman and Fung see things from a statistics-centric point of view. That view is based on the things and the tools they are used to: static images, lots of number crunching and statistical testing, and R. When you&#39;re used to a tool like Tableau, interaction and being able to change things easily and quickly are perceived as advantages. But with a tool like R that produces static images and requires considerable effort to change things, this is different.</p><p>Also, the image is not the end goal in visualization. Gelman talks about the circular sick leave data visualization that I&#39;m using as an example in the article, saying that it doesn&#39;t give him any new insights because he would have expected a weekly pattern anyway. The image here shows the view where there are 28 days (or four weeks) on each period of the spiral, showing that pattern.</p><p class="img" align="center"><img src="https://media.eagereyes.org/media/2011/sickleave-aligned.jpg" alt="Spiral showing sick-leave data" width="300" height="300"></p><p>Yes, there is that weekly pattern that we all expected. But there is also a lot more: there are seasonal patterns, there is an almost complete drop-off for the last quarter of the data, there are some atypical weeks where people suddenly get sick on Thursday, etc. Statistics may care mostly about that one effect that can be written down as a hypothesis and then tested, but infovis is about discovery. What else does this tell me? What more can I find out about the data? Is there other data that may explain some of these effects?</p><p>If the goals and means in statistical graphics and infovis were the same, there would be no point in having both. But to get value out of them, we need to understand and respect the differences. There are <a href="http://had.co.nz/">some statisticians who get it</a>, but most seem to be stuck in the Tukey-Tufte school of thinking; unfortunately, most of them would even take that as a compliment. They need to stop looking at colorful pictures and start using an actual visualization tool: something that responds to mouse input and reacts in real-time; something that actually supports discovery in a visual way, rather than just plotting graphs.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on August 02, 2011</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos Scheidegger</a> says…</p><blockquote><p>I want to point out that &quot;That view is based on the things and the tools they are used to: static images, lots of number crunching and statistical testing, and R.&quot; might be a comparably bad misrepresentation of statistical graphics than the Chris Rock effect, in particular when you read Gelman&#39;s work about model checks using graphics.</p><p>Also, it seems to me that you&#39;re setting up a strawman in the &quot;Tukey-Tufte school of thinking&quot;. At least where Tukey is concerned, his book is pretty seriously about interactive graphics. To give him crap in the context of the tools available at the time is exactly as bad as giving Bertin crap about his writings.</p></blockquote><p><a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos Scheidegger</a> says…</p><blockquote><p>I just now saw Gelman&#39;s <a href="http://statisticsforum.wordpress.com/2011/07/29/infovis-vs-statgraphics-a-clear-example-of-their-different-goals/">second posting</a>. Ugh. Claiming that infographics is infovis is just an equally bad strawman.</p><p>Is it a necessity of two conflating research areas that they are naturally incapable of seeing the merits on the other side? It&#39;s Upton Sinclair&#39;s &quot;It is difficult to get a man to understand something when his job depends on not understanding it.&quot; applied to perceived competition. Sigh.</p></blockquote><p>George says…</p><blockquote><p>Robert, I just wanted to comment on the spiral chart.</p><p>If someone was to give that chart alone, I would have no clue how to read or what it means. There is simply not enough information visually to understand what it means.</p><p>I had to read your entire parapgraph describing it, and still I cannot understand fully or feel confortable enough to say &quot;i get it&quot;. Bar charts or line charts would have been describing you point a lot quicker!</p></blockquote><p><a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…</p><blockquote><p>At first I was skeptical about the spiral. It&#39;s not particularly good for rigorously quantitative analysis. But as a tool for exploration, it&#39;s capable of showing where questions should be asked.</p><p>With the tools easily at my own disposal, I would make the line charts, I&#39;d average by week and by month, I&#39;d look at moving averages, I&#39;d plot just Mondays (etc.). I may even use something like loess with a short period to try to smooth away variability, and compare the actual data to smoothed representations. It takes time, but it also takes some time to analyze the spiral form. But perhaps the spiral makes it a bit easier to see details.</p></blockquote><p><a href="http://independent.academia.edu/JoeFaith" rel="nofollow noopener" target="_blank">Joe Faith</a> says…</p><blockquote><p>Is the underlying distinction here between using visualisation (however described) for communicating and/or illustrating something which is already known and using it to discover new information in the data. Just because a visualisation clearly shows an already known fact it can still have value in drilling home the message.</p></blockquote><p><a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…</p><blockquote><p>Unfortunately both sides seem to be comparing the best of one side with the worst of the other. There are some awful infovis papers that completely ignore utility in the pursuit of aesthetics. There are many awful stat graphics papers that ignore aesthetics in the pursuit of utility (and often fail to achieve that). Neither side is perfect, and it&#39;s a shame that we can&#39;t work more closely together to get the best of both worlds.</p></blockquote><p><a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…</p><blockquote><p>Thanks for the kind words. I&#39;d argue that currently most infovis and statistical researchers are missing one or more of the three components of the cycle needed for data analysis: data munging, data visualisation and data modelling. Statisticians tend to have great modelling tools, but not always the best visualisations. Infovis practitioners create compelling visualisations, but can lack models to help dig past the obvious patterns and look for subtleties. Researchers in both fields tend to ignore the huge problem of getting your data in the right format to start with.</p><p>These are all generalisations - there are researchers in both fields doing fantastic work that combine all components. It&#39;s easy to construct straw-man arguments by picking the bad representatives.</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2011/information-visualization-vs-statistical-graphics.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const informationVisualizationVsStatisticalGraphics = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  informationVisualizationVsStatisticalGraphics as default
};
