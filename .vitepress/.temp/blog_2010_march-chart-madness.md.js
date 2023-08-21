import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"March Chart Madness","description":"Terrible charts seem to be in season. Rarely have I come across so many incredibly bad charts in such a short time: information graphics that don't actually depict data, distorted representations, useless color schemes, and the worst pie chart ever.","frontmatter":{"title":"March Chart Madness","description":"Terrible charts seem to be in season. Rarely have I come across so many incredibly bad charts in such a short time: information graphics that don't actually depict data, distorted representations, useless color schemes, and the worst pie chart ever.","date":"2010-03-03T09:15:27.000Z","tags":"criticism","featuredImage":"https://media.eagereyes.org/media/2010/WorstPieChartEver.jpg"},"headers":[],"relativePath":"blog/2010/march-chart-madness.md","filePath":"blog/2010/march-chart-madness.md"}`);
const _sfc_main = { name: "blog/2010/march-chart-madness.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2010/WorstPieChartEver.jpg" width="500" height="254" alt="Worst Pie Chart Ever"></p><h1 id="march-chart-madness" tabindex="-1">March Chart Madness <a class="header-anchor" href="#march-chart-madness" aria-label="Permalink to &quot;March Chart Madness&quot;">​</a></h1><p>Terrible charts seem to be in season. Rarely have I come across so many incredibly bad charts in such a short time: information graphics that don&#39;t actually depict data, distorted representations, useless color schemes, and the worst pie chart ever.</p><h2 id="rings-of-firefox" tabindex="-1">Rings of FireFox <a class="header-anchor" href="#rings-of-firefox" aria-label="Permalink to &quot;Rings of FireFox&quot;">​</a></h2><p align="center"><a href="http://weightshift.com/design/mozilla-firefox-infographics"><img src="https://media.eagereyes.org/media/2010/mozilla_infographics.jpg" width="560" height="561" alt="mozilla infographics"></a></p><p>This is an <a href="http://weightshift.com/design/mozilla-firefox-infographics">info graphic created for the Mozilla Foundation</a> that is used to show the number of users compared to the number of developers, etc. Unfortunately, it doesn&#39;t actually depict the numbers graphically. The circle radius grows linearly, while the numbers increase at a much faster pace, and not at regular intervals.</p><p>It&#39;s clearly challenging to show the relationship of 200 million users with 400 core developers, but they didn&#39;t even try. Why make a fancy graphic when a plain old list would have worked just as well? That at least would not pretend to depict something that it really does not.</p><h2 id="transportation-trouble" tabindex="-1">Transportation Trouble <a class="header-anchor" href="#transportation-trouble" aria-label="Permalink to &quot;Transportation Trouble&quot;">​</a></h2><p align="center"><a href="http://www.infrastructurist.com/2010/02/18/how-do-americans-get-to-work-transit-patterns-in-major-cities/"><img src="https://media.eagereyes.org/media/2010/commuting_to_work.jpg" width="560" height="389" alt="commuting to work"></a></p><p>Showing <a href="http://www.infrastructurist.com/2010/02/18/how-do-americans-get-to-work-transit-patterns-in-major-cities/">how people in different U.S. cities travel to and from work</a> is clearly interesting, but this does not strike me as a particularly good representation. Using the letters as a kind of stacked bar chart may be clever, but it does not lead to a very readable chart.</p><p>The different shapes of the letters make it difficult to compare between cities, and the visual impact of wider versus narrower names is larger than the encoded information. The ordering by width of name rather than some meaningful criterion also doesn&#39;t help. Compare LA and ATL: sure they&#39;re similar, but how long does it take you to find that out?</p><p>When you notice the effort it takes to read the visualization, there&#39;s something wrong with it. Here, form clearly trumps function.</p><h2 id="squared-taxes" tabindex="-1">Squared Taxes <a class="header-anchor" href="#squared-taxes" aria-label="Permalink to &quot;Squared Taxes&quot;">​</a></h2><p align="center"><a href="http://www.fsteurope.com/news/eu-income-tax-revealed/"><img src="https://media.eagereyes.org/media/2010/EUfunding-small.jpg" width="560" height="423" alt="EU funding"></a></p><p>There is a lot of talk in the European Union about <a href="http://www.fsteurope.com/news/eu-income-tax-revealed/">net payers and net receivers of money</a>. This chart tries to make the point that the EU swallows up a lot of money, and clearly succeeds. But it does so at the expense of honesty.</p><p>The triangles are scaled by height, not by area. Double the height does not mean double the area though, but four times the area (and the visual impact). It&#39;s the old <a href="/2008/linear-vs-quadratic-change">linear-vs.-quadratic trick</a>. A more effective way would have been to simply show the difference, but that would have been harder to exaggerate like this.</p><p>The other issue here is that the numbers don&#39;t seem to add up. Where does all the money go? There are a lot of net payers in this graphic, but very few (and very small) net receivers. Does the money just vanish?</p><h2 id="pies-in-the-sky" tabindex="-1">Pies in the Sky <a class="header-anchor" href="#pies-in-the-sky" aria-label="Permalink to &quot;Pies in the Sky&quot;">​</a></h2><p align="center"><a href="http://www.coolinfographics.com/blog/2010/2/19/nasas-new-budget-infographic.html"><img src="https://media.eagereyes.org/media/2010/nasapies.jpg" width="560" height="508" alt="NASA Pies"></a></p><p>A chart depicting <a href="http://www.coolinfographics.com/blog/2010/2/19/nasas-new-budget-infographic.html">the development of NASA&#39;s budget over 60 years</a> naturally needs flashing images of random NASA stuff, and of course stacked pies. The visual metaphor here is particularly useless, because it shouts information that is of little relevance, while the more important part is tough to make out.</p><p>The height of pie stack shows the total federal budget, using some arbitrary mapping that doesn&#39;t seem to be consistent. At the beginning, each pie corresponds to $500 billion, but from about $1500 billion on, this changes to some other number. At the end, the stack is only seven pies high for almost $4.4 trillion.</p><p>Since NASA isn&#39;t exactly a large part of the overall budget, the pie slice it occupies stays very small throughout. That may be intentional, but it&#39;s also pointless: NASA isn&#39;t the only thing paid for with taxpayer money, it can&#39;t get 80% of the budget. The maximum seems to have been just under 4.5% in 1966, but it takes a lot of serial searching (and number reading) to find that.</p><p>Overall, the chart does a very poor job of showing NASA&#39;s budget and how it relates to the federal budget. Putting bars side by side, or showing the fraction as bars over time would have been much more effective and impressive. As would have been leaving out the early 90&#39;s-style flashing nonsense reminiscent of geocities.</p><h2 id="blog-o-spheres" tabindex="-1">Blog-O-Spheres <a class="header-anchor" href="#blog-o-spheres" aria-label="Permalink to &quot;Blog-O-Spheres&quot;">​</a></h2><p align="center"><a href="http://www.intac.net/breakdown-of-the-blogosphere/ "><img src="https://media.eagereyes.org/media/2010/blogosphere1.jpg" width="560" height="383" alt="blogosphere1"></a></p><p>This <a href="http://www.intac.net/breakdown-of-the-blogosphere/ ">breakdown of the blogosphere</a> is mostly remarkable for its odd chart use. The five charts above use five different visual metaphors. From top left, clockwise: a circle is divided by a rounded line with considerable width (who are the people in the green area?); a regular pie chart; a kind of bubble chart, but it shows the values on top of each other, making it appear as if people making more than $100k are a subset of the people making less; a Venn diagram; and disconnected bubbles where the relative size represents the data.</p><p>That last one took me a while to figure out, I first thought that the continent&#39;s area represented a percentage within the bubbles (like the same color does on the pie chart). I can see the reason for trying out new things, but keeping elements constant between charts suggests that they serve the same purpose. When they don&#39;t, they become confusing.</p><p align="center"><a href="http://www.intac.net/breakdown-of-the-blogosphere/ "><img src="https://media.eagereyes.org/media/2010/blogosphere2.jpg" width="560" height="286" alt="blogosphere2"></a></p><p>The same info graphic has some more gems, like the pie chart on the left. The dot in the center and the faux reflection create noise that makes reading the actual chart difficult. The highlight has more contrast than the actual chart, so finding the right edge requires a lot more work.</p><p>While the pie chart has some kind of glow around it, the chart on the right is incredibly dark and almost impossible to even see. The dark purples all look the same, and without the labels, the right-most one is almost invisible. The information seems to be encoded in the bar width here, which leads to the circle shape distorting the representation (less area on the left and right). A simple pie chart would have worked much better, as would have a square pie.</p><h2 id="waves-of-color" tabindex="-1">Waves of Color <a class="header-anchor" href="#waves-of-color" aria-label="Permalink to &quot;Waves of Color&quot;">​</a></h2><p align="center"><a href="http://wcatwc.arh.noaa.gov/chile/chileem.jpg"><img src="https://media.eagereyes.org/media/2010/chileem-small.jpg" width="560" height="412" alt="Tsunami simulation"></a></p><p>Bad visualizations are not only the work of clueless designers, scientists and engineers also tend to create images that are less than meaningful. This example from NOAA showing the <a href="http://wcatwc.arh.noaa.gov/chile/chileem.jpg">forecast impact of the tsunami created by the earthquake in Chile</a> is a good example.</p><p>The color scale here changes from 0 to 20 in the usual terrible primary-color fashion that creates artificially strong boundaries and is not perceptually uniform or even just monotonic in luminance. But what takes the cake here is the fact that all the values above about 20 are the exact same color! When your color scale only differentiates 20% of your range of values, something is wrong.</p><h2 id="pyramid-games" tabindex="-1">Pyramid Games <a class="header-anchor" href="#pyramid-games" aria-label="Permalink to &quot;Pyramid Games&quot;">​</a></h2><p align="center"><a href="http://www.pcrm.org/magazine/gm07autumn/health_pork.html"><img src="https://media.eagereyes.org/media/2010/pyramids.jpg" width="500" height="356" alt="Pyramids"></a></p><p>When looking at distorted data, the question is always: was this an accident, or was it done on purpose? This <a href="http://www.pcrm.org/magazine/gm07autumn/health_pork.html">comparison of subsidies versus food recommendations</a> is one such example. The pyramid on the left shows the distribution of subsidies, while the one on the right shows the recommended amounts from each food group.</p><p>The problem here is that the values were scaled by height only, so whatever is at the bottom of the pyramid gets a lot more weight in relation to its size than what is close to the tip. This shows a complete misunderstanding of the pyramid: when you divide that into quarters (as is usually done), the lower quarter is larger than the middle and top ones. This is done on purpose, because the areas represent how much of each food group you should be eating.</p><p>Here, however, this is ignored, leading to an unfair overrepresentation of some of the values. They also label the pyramids so the values are harder to compare, even when looking at the numbers. This makes the contrast stronger, and may have been done on purpose to make this point. But it&#39;s still a distortion.</p><h2 id="the-worst-pie-chart-ever" tabindex="-1">The Worst Pie Chart Ever <a class="header-anchor" href="#the-worst-pie-chart-ever" aria-label="Permalink to &quot;The Worst Pie Chart Ever&quot;">​</a></h2><p align="center"><a href="http://www.glenturpin.com/2009/12/worst-pie-chart-ever/"><img src="https://media.eagereyes.org/media/2010/WorstPieChartEver.jpg" width="500" height="254" alt="Worst Pie Chart Ever"></a></p><p>It&#39;s hard to argue with Glen Turpin, who found <a href="http://www.glenturpin.com/2009/12/worst-pie-chart-ever/">this abomination of a pie chart</a> on a <a href="http://fluent.razorfish.com/">portfolio website of design agency razorfish</a>.</p><p>The chart supposedly shows how often people share recommendations online. But it has been distorted to a degree that makes it almost entirely unreadable. It starts with the organic shape of the &quot;pie,&quot; which looks more like some kind of donut. It has a kind of wood texture applied that is visible under a layer of sharply defined color ovals that do not carry information. As an afterthought, the actual pie slices are then added using transparent white. The whole thing is rotated along two axes, squashing any hope of actually reading the data. Sure, there are numbers there, but what&#39;s the point of even having a chart when you can only read the numbers?</p><p>The distortions in this chart are almost comical. It&#39;s hard to think of anything that has not been done here to make it harder to read. Something went very wrong here.</p><h2 id="_3d-pie-problems-illustrated" tabindex="-1">3D Pie Problems, Illustrated <a class="header-anchor" href="#_3d-pie-problems-illustrated" aria-label="Permalink to &quot;3D Pie Problems, Illustrated&quot;">​</a></h2><p align="center"><a href="http://fury.com/2010/03/why-3d-pie-charts-are-bad/"><img src="https://media.eagereyes.org/media/2010/escher-stroop.png" width="417" height="145" alt="escher-stroop.png"></a></p><p>Enough with the bad examples. Kevin Fox created this <a href="http://fury.com/2010/03/why-3d-pie-charts-are-bad/">fantastic pie chart</a>. It takes a moment or two to figure out. It&#39;s subtle. Genius.</p><h2 id="a-chart-joke" tabindex="-1">A Chart Joke <a class="header-anchor" href="#a-chart-joke" aria-label="Permalink to &quot;A Chart Joke&quot;">​</a></h2><p align="center"><a href="http://robcham.tumblr.com/post/297693217/thats-not-how-graphs-work-dont-tell-me-what"><img src="https://media.eagereyes.org/media/2010/mathjokes.png" width="225" height="225" alt="A Chart Joke"></a></p><p><a href="http://robcham.tumblr.com/post/297693217/thats-not-how-graphs-work-dont-tell-me-what">Found here</a>.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on March 03, 2010. Filed under <a href="/section/criticism">criticism</a>.</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p>JL says…</p><blockquote><p>I agree with almost everything you&#39;ve said here. But wrt the transit graph - Chicago and LA are similar?? More than twice as many people use transit in Chicago as LA, roughly 2/3 the number drive, and roughly twice as many people walk! I actually found the graphic quite readable despite some of the concerns you brought up - especially for making quick, rough comparisons on transit patterns (which is the intention). Some small numbers might have helped. But perhaps the distortion is worse than I thought if you are seeing Chicago and LA as similar - 50-100% difference is not a small differentiation!</p></blockquote><p>Robert Kosara says…</p><blockquote><p>That was a typo, I meant to refer to ATL, not CHI. They&#39;re harder to compare because they&#39;re not on the same line, and the different letter shapes provide little reference. The only thing you can go by is comparing to the horizontal bar in the A.</p></blockquote><p>wds says…</p><blockquote><p>I&#39;m not so sure about the second problem you found with the waves of colour graph. Making everything above 20 the same colour could well have been intentional, since it&#39;s mostly just noise. They probably should have made a scale that says 20-100 -&gt; this colour, but then you lose the sense of proportion.</p></blockquote><p>Robert Kosara says…</p><blockquote><p>That may be the reason, but it&#39;s still the usual terrible rainbow color scale. The colors aren&#39;t equally far from each other perceptually, so you see all kinds of boundaries that aren&#39;t actually there. The colors&#39; perceived brightness increases and decreases without any clear direction (which makes telling values apart harder). The legend is only a part of the problem here.</p><p>I guess I&#39;ll need to write something about color to show you what the problems here are and why these things are important.</p></blockquote><p><a href="http://www.design2express.com/" rel="nofollow noopener" target="_blank">Gilroy</a> says…</p><blockquote><p>Nice Share it shows that people should use their mind before displaying statistical information with charts.</p></blockquote><p>Rahul says…</p><blockquote><p>With the plots you criticize though it would be nice if you posted a better alternative. The Mozilla rings for example. The huge magnitude range poses some real visualization challenges.</p></blockquote><p>Olga says…</p><blockquote><p>I agree, I loved the transit chart. It gives a quick feel of different cities. Its very visual and you can draw quick conclusions easily!</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2010/march-chart-madness.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const marchChartMadness = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  marchChartMadness as default
};
