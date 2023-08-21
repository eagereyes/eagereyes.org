import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"The State of Information Visualization, 2014","description":"2013 was another exciting year for visualization. Between many new developments in data storytelling, a new wave of news graphics, new visualization blogs, better automated infographics, and visuals designed to hit you hard, it is difficult to decide what was most important. Here is a look back, and some ideas about where we're going.","frontmatter":{"title":"The State of Information Visualization, 2014","description":"2013 was another exciting year for visualization. Between many new developments in data storytelling, a new wave of news graphics, new visualization blogs, better automated infographics, and visuals designed to hit you hard, it is difficult to decide what was most important. Here is a look back, and some ideas about where we're going.","date":"2014-01-12T21:22:01.000Z","tags":"state-of-infovis","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2014/01/oregonian-trimet-long-days.png"},"headers":[],"relativePath":"blog/2014/the-state-of-information-visualization-2014.md","filePath":"blog/2014/the-state-of-information-visualization-2014.md"}`);
const _sfc_main = { name: "blog/2014/the-state-of-information-visualization-2014.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-state-of-information-visualization-2014" tabindex="-1">The State of Information Visualization, 2014 <a class="header-anchor" href="#the-state-of-information-visualization-2014" aria-label="Permalink to &quot;The State of Information Visualization, 2014&quot;">​</a></h1><p>2013 was another exciting year for visualization. Between many new developments in data storytelling, a new wave of news graphics, new visualization blogs, better automated infographics, and visuals designed to hit you hard, it is difficult to decide what was most important. Here is a look back, and some ideas about where we&#39;re going.</p><h2 id="storytelling" tabindex="-1">Storytelling <a class="header-anchor" href="#storytelling" aria-label="Permalink to &quot;Storytelling&quot;">​</a></h2><p>If there was a topic that clearly left its mark on 2013, it’s storytelling. Coming from me, this may not be a big surprise – after all, <a href="/blog/2013/state-information-visualization-2013">I predicted this</a> at the beginning of the year. But if you’re a doubter, 2013 gave you lots of reason to doubt your, um, doubts.</p><p>First, the academic world. There were <a title="Report from IEEE VIS 2013 in Atlanta, GA" href="/blog/2013/report-from-ieee-vis-2013-in-atlanta-ga">a number of papers at InfoVis on storytelling and related topics</a>. Memorability, narrative, and real-world scales all made an appearance. I believe this was also the first time a session was actually named <em>Storytelling</em> in InfoVis. And who could forget the paper I wrote with Jock Mackinlay for <em>IEEE Computer</em>: <em><a href="/papers/paper-storytelling-step-visualization">Storytelling: The Next Step in Visualization</a></em>? That paper has just been republished in a <a href="http://www.computer.org/portal/web/computingnow/archive/january2014">special issue of <em>IEEE Computing Now</em></a> on current trends in visualization, which also includes four other great papers (including Mike Bostock and Jeff Heer’s paper on D3). There is also <a href="http://youtu.be/cZsJSJ0WSZ4">a video of me talking about storytelling</a> from an industry perspective and demoing story points.</p><p>Will this continue? Yes, of course! I know that there are a number of papers on storytelling under review for EuroVis right now, and I have no doubt that there will be a good number of submissions on the topic to InfoVis and VAST. Alberto Cairo also <a href="https://twitter.com/albertocairo/status/422039245738364928">just announced</a> that he will be the keynote speaker at IEEE VIS in Paris in November, which should be very interesting. No pressure, Alberto!</p><p>Then, there are the conferences. 2013 saw the first <em><a href="http://www.tapestryconference.com">Tapestry</a></em> conference, a conference specific to storytelling with data; its second incarnation is just over a month away. And it&#39;s not the only one: the speakers at <em><a href="http://visualized.com/2014/">Visualized</a></em> are also called <em>storytellers</em>, and the new <a href="http://openvisconf.com"><em>OpenVis</em> conference</a> led with Amanda Cox last year and will have Mike Bostock headlining this year. It’s great to see the cross-pollination between visualization people, designers, and news graphics folks. This is going to lead to many exciting new things.</p><p>And finally, products. Last year saw the introduction of the <a href="/blog/2013/ged-viz-data-storytelling-tool">GEDViz storytelling tool</a> which, while limited in scope and not a commercial product, is certainly pointing in the right direction. Tableau also announced the <a href="/blog/2013/story-points">Story Points</a> feature, which will be part of the upcoming 8.2 release. The competition isn’t asleep either, many of them have announced storytelling features for upcoming releases. Not all of them really are storytelling features in the way I understand the term, but the word is certainly being thrown around a lot.</p><p>I don’t see any of this losing steam, quite the opposite. 2014 is the year when a large number of people will have access to these new tools for the first time, and will start building stories. That is a qualitatively new thing, and it will be exciting to see what people end up creating.</p><h2 id="automated-infographics" tabindex="-1">Automated Infographics <a class="header-anchor" href="#automated-infographics" aria-label="Permalink to &quot;Automated Infographics&quot;">​</a></h2><p>An idea that I first saw a few years ago really took off in 2013: automated infographics. Rather than just visualizing the data on a sort of dashboard, why not make an information graphic with nice production values and fill in people’s own data? This was <a href="/blog/2011/visually-the-future-of-data-based-infographics">the original idea behind Visual.ly</a>, and the possibilities are endless. <a href="https://www.vizify.com">Vizify</a> creates <a href="https://www.vizify.com/eagereyes">a multi-page information graphic</a> from your LinkedIn and other social network data, WordPress sent out <a href="http://jetpack.me/annual-report/44463152/2013/">a custom annual report</a> to users of wordpress.com and Jetpack (for self-hosted blogs), Google created <a href="https://plus.google.com/u/0/+anilsabharwal/posts/DY2iSB7UFaP">a personal video for Google+ users</a>, etc.</p><p align="center"><img alt="Wordpress Year in Blogging Annual Report" src="https://media.eagereyes.org/wp-content/uploads/2014/01/wordpress-report-730x500.png" width="730" height="500"></p><p>WordPress’ annual report is quite neat. It uses the common scrolling format to show what are essentially pages of information: overall stats, the most popular postings, search terms, commenters, etc. at the top of the page (and behind the information pages as you scroll down), animated fireworks represent the blog postings, etc. A lot of work went into this, and it looks great. Many companies would kill for an annual report as slick and well-designed as this one.</p><p>What is interesting about this is that there is apparently a need to make things more interesting than just plain visualizations. I use two different site trackers, but I still found the little summary in my WordPress annual report quite interesting. Plus, it’s much more fun to look at. Of course, that approach would not work for regular site stats: I want more depth for those, and I certainly don’t want to watch fireworks going off in the background whenever I want to see my site stats. But once a year, this is great.</p><p>I don’t believe that infographics are going to replace generic visualization, but I have no doubt that we will see a lot more context-specific graphics like that in the future. Not only are they more interesting, by standing out, they are also much more likely to be remembered.</p><h2 id="news-graphics" tabindex="-1">News Graphics <a class="header-anchor" href="#news-graphics" aria-label="Permalink to &quot;News Graphics&quot;">​</a></h2><p>Last year also saw some interesting new developments in news graphics. In particular, we&#39;re seeing more use of relatively complex visualizations. I remember <a title="InfoVis 2007: InfoVis for the Masses" href="/blog/2007/infovis-2007-infovis-for-the-masses">Matthew Ericson talking about scatterplots in his Vis keynote in 2007</a>, and essentially saying that the New York Times would not print scatterplots.</p><p>How things have changed. Last year, we saw <a href="http://wapo.st/18TTIUo">slope graphs/parallel coordinates</a>, <a href="http://www.oregonlive.com/commuting/index.ssf/2013/12/trimet_driver_fatigue_new_work.html">scatter plots</a>, <a href="http://www.nytimes.com/newsgraphics/2013/09/07/director-star-chart/">networks</a>, as well as more elaborate visual data stories using the usual line and bar charts on the <a href="http://www.bloomberg.com/dataview/2013-11-08/what-the-jobs-report-really-means.html">jobs report</a>, <a href="http://www.bloomberg.com/dataview/2013-12-20/how-we-spend.html">spending</a>, etc.</p><p>I particularly liked this scatterplot when I happened across it while in Portland recently. It&#39;s sort of a meta-visualization: it shows the effect <em>The Oregonian&#39;s</em> reporting has had on the shift lengths of bus and tram drivers in Portland.</p><p align="center"><img class="aligncenter size-medium wp-image-2993" alt="The Oregonian, Trimet&#39;s Long Days" src="https://media.eagereyes.org/wp-content/uploads/2014/01/oregonian-trimet-long-days-730x355.png" width="730" height="355"></p><p>This past year has also seen some very interesting movements of visual and data journalists, between different media as well as from media to other companies. Andy Kirk listed a good number of them in a posting on <a href="http://www.visualisingdata.com/index.php/2013/12/10-significant-visualisation-developments-july-to-december-2013/">significant events of the latter half of last year</a> (his <a href="http://www.visualisingdata.com/index.php/2013/07/10-significant-visualisation-developments-january-to-june-2013/">posting on the first half</a> is also worth a read). This is a good sign, because it means that there is an active labor market, and it also means a transfer of knowledge. People staying in the same place don&#39;t help ideas move from place to place. I think we should see the results of many of these moves in the next months.</p><h2 id="more-thinking-about-visualization" tabindex="-1">More Thinking About Visualization <a class="header-anchor" href="#more-thinking-about-visualization" aria-label="Permalink to &quot;More Thinking About Visualization&quot;">​</a></h2><p>I just wrote about <a href="/blog/2014/wtfviz-thumbsupviz-and-helpmeviz">WTFViz, ThumbsUpViz, and HelpMeViz</a>, and how I see those new websites as a sign of a richer online visualization culture. You may not agree with all of them, or any of them, but they finally show some new directions. It will be interesting to watch them evolve over this year and see where they are going. They certainly provide a lot of food for thought about visualization best practices.</p><p>I&#39;m also throwing in <a title="Review: Isabel Meirelles, Design for Information" href="/criticism/review-isabel-meirelles-design-information">Isabel Meirelles book, <em>Design for Information</em></a>, here. I really liked the approach she took in her book, and I hope that this will finally get people to write more thoughtful, informative, and interesting books about visualization. The <a title="It’s Just Too Easy" href="/criticism/its-just-too-easy">reliance on pretty pictures without much depth</a> is getting old.</p><h2 id="visualization-that-punches-you-in-the-gut" tabindex="-1">Visualization That Punches You In The Gut <a class="header-anchor" href="#visualization-that-punches-you-in-the-gut" aria-label="Permalink to &quot;Visualization That Punches You In The Gut&quot;">​</a></h2><p>Perhaps my favorite development of 2013 is what some have called <em>emotive visualization</em>. Behind that anemic term hides a category of visual storytelling that doesn&#39;t just state facts, but wants you to feel them. Sure, they are based on numbers. But the point is not just to give you the numbers, but to hit you with them, and hard.</p><p align="center"><img class="aligncenter size-full wp-image-2298" alt="U.S. Gun Deaths" src="https://media.eagereyes.org/wp-content/uploads/2013/04/guns.jpg" width="600" height="211"></p><p>The pieces on <a title="The Revolution Will Be Visualized" href="/blog/2013/revolution-visualized">drone strikes and gun deaths</a> published last year achieved that goal and got a lot of people talking, as did <a title="Data Storytelling in Video" href="/blog/2013/data-storytelling-video">a video discussing wealth inequality</a>. I hope we will see more of this kind of work going forward. This is the wilder side of storytelling, and the more visceral one. While numbers may seem boring, <a title="Visualization Makes Things Real" href="/blog/2013/visualization-real">making them visual makes them real</a>, in a very powerful way.</p><h2 id="_2014-and-beyond" tabindex="-1"><span style="${ssrRenderStyle({ "font-size": "1.5em", "line-height": "1.5em" })}">2014 And Beyond</span> <a class="header-anchor" href="#_2014-and-beyond" aria-label="Permalink to &quot;&lt;span style=&quot;font-size: 1.5em; line-height: 1.5em;&quot;&gt;2014 And Beyond&lt;/span&gt;&quot;">​</a></h2><p>What all these developments have in common is that while they are visualizations at their heart, they add significant context to it. Whether there&#39;s a story, a deeper concern, or infographic elements, there is a lot of added value. This goes against the established wisdom of minimalism and starkly empty visualizations, but it&#39;s also a completely different use case. I hope that 2014 will be the year people will finally realize that presentation and analysis are vastly different, and that we need to understand those differences, and establish good criteria for work in presentation and storytelling.</p><p>Beyond that, I&#39;m just looking forward to more exciting work. It&#39;s a good time to be in data visualization.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on January 12, 2014</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Welcome.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…</p><blockquote><p>Hi Robert:</p><p>Thanks for mentioning the A Snapshot of Current Trends in Visualization that Min Chen and I guest edited for the January 2014 issue of IEEE Computing Now.</p><p><a href="http://www.computer.org/portal/web/computingnow/archive/january2014" target="_blank" rel="noreferrer">http://www.computer.org/portal/web/computingnow/archive/january2014</a></p><p>In addition to including yours and the D3 work, we also noted Samuel Gratzl and his colleagues&#39; &quot;LineUp: Visual Analysis of Multi-Attribute Rankings work. - See more at: <a href="http://www.computer.org/portal/web/computingnow/archive/january2014" target="_blank" rel="noreferrer">http://www.computer.org/portal/web/computingnow/archive/january2014</a></p><p>We also noted: Jean-Daniel Fekete&#39;s Computer article, &quot;Visual Analytics Infrastructure: From Data Management to Exploration,&quot; in Visual Analytics. - See more at: <a href="http://www.computer.org/portal/web/computingnow/archive/january2014" target="_blank" rel="noreferrer">http://www.computer.org/portal/web/computingnow/archive/january2014</a></p><p>As well as scientific visualization work on: &quot;Feature Tracking and Visualization of the Madden-Julian Oscillation in Climate Simulated,&quot; by Teng-Yok Lee and his colleagues. - See more at: <a href="http://www.computer.org/portal/web/computingnow/archive/january2014" target="_blank" rel="noreferrer">http://www.computer.org/portal/web/computingnow/archive/january2014</a></p><p>Another key trend in scientific visualization that is rapidly emerging is Ensemble Visualization. Scientists create ensembles in computational modeling by by executing a simulation repeatedly but with slightly different input parameters and storing the results into a portfolio (or ensemble). Scientists compare the results via scientific or statistical visualization methods.</p><p>Smiles.... Theresa-Marie</p></blockquote><p><a href="http://visualized.com" rel="nofollow noopener" target="_blank">eric</a> says…</p><blockquote><p>Hi Robert, thanks for the thoughtful and in-depth post. Just a point of clarification here, the Visualized conference you mentioned actually first took place in November 2012 (<a href="http://visualized.com/2012/" target="_blank" rel="noreferrer">http://visualized.com/2012/</a>), where the focus was also storytelling with data visualization, and the speakers were called &quot;storytellers&quot; back then as well. Just an FYI... that given the dates, some of what you suggested above is factually incorrect. But more importantly there was a lot of people talking about this before you and I, and I think we&#39;re all proponents of the same thing so who was first etc, really shouldn&#39;t be a huge deal 😃 Either way, great post! thank you.</p><p>eric klotz, visualized</p></blockquote><p><a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…</p><blockquote><p>Thanks for pointing that out, I&#39;ve edited that paragraph. I thought that the speakers being called storytellers at Visualized was a new thing for some reason. I didn&#39;t mean to suggest that we invented the term or the idea of a storytelling conference, I guess I got a bit too excited there. 😉</p></blockquote><p><a href="http://www.vizworld.com" rel="nofollow noopener" target="_blank">Dean Meyers</a> says…</p><blockquote><p>Robert, a great summary of 2013! I also wrote about the US Gun Deaths Interactive visualisation on my website: <a href="http://www.vizworld.com/2013/09/gun-deaths-infographics-emotional-storytelling/" target="_blank" rel="noreferrer">http://www.vizworld.com/2013/09/gun-deaths-infographics-emotional-storytelling/</a> . It has since gone on to win a Bronze prize from the Kantar Information is Beautiful Awards.</p><p>I was just at International CES, where I made a point of visiting the Z-Wave section, where vendors showed how this industry standard for home sensors and controllers has matured to allow the creation of full dashboards for the everyday consumer to monitor and control everything from video to door locks. The Internet of Things will massively impact data visualization as a field, as the non-data scientist will desire and learn to read these data streams in easily digestible infographics, as much as Edward Tufte talks about reading the statistics of sports teams through visuals is a given by every sports fan.</p><p>Much to watch, much to read, much to interpret, and what stories to tell!</p><p>Hoping to see you at Tapestry!</p><p>Dean Meyers Publisher - www.vizworld.com</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2014/the-state-of-information-visualization-2014.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theStateOfInformationVisualization2014 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theStateOfInformationVisualization2014 as default
};
