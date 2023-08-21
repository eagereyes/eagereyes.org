import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"EuroVis 2016, Tuesday and Wednesday","description":"EuroVis 2016 is happening this week in Groningen, The Netherlands. This is the report from the first two-and-a-half days,  which saw some symposia, a keynote, and many paper presentations.","frontmatter":{"title":"EuroVis 2016, Tuesday and Wednesday","description":"EuroVis 2016 is happening this week in Groningen, The Netherlands. This is the report from the first two-and-a-half days,  which saw some symposia, a keynote, and many paper presentations.","date":"2016-06-08T13:22:30.000Z","tags":"conference, eurovis","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2016/06/EuroVis-2016-teaser1.jpg"},"headers":[],"relativePath":"blog/2016/eurovis-2016-tuesday-and-wednesday.md","filePath":"blog/2016/eurovis-2016-tuesday-and-wednesday.md"}');
const _sfc_main = { name: "blog/2016/eurovis-2016-tuesday-and-wednesday.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/06/EuroVis-2016-teaser1.jpg" width="825" height="510"></p><h1 id="eurovis-2016-tuesday-and-wednesday" tabindex="-1">EuroVis 2016, Tuesday and Wednesday <a class="header-anchor" href="#eurovis-2016-tuesday-and-wednesday" aria-label="Permalink to &quot;EuroVis 2016, Tuesday and Wednesday&quot;">​</a></h1><p><a href="http://eurovis.org">EuroVis 2016</a> is happening this week in Groningen, The Netherlands. This is the report from the first two-and-a-half days, which saw some symposia, a keynote, and many paper presentations.</p><p>The pre-conference program kicked off on Monday afternoon. In addition to a few small symposia, there was also a tutorial on machine learning and visualization. It was pretty basic, but <a href="http://mlvis2016.hiit.fi">the materials are available online</a> in case you want to take a look.</p><h2 id="opening-session" tabindex="-1"><b></b><b>Opening Session</b> <a class="header-anchor" href="#opening-session" aria-label="Permalink to &quot;&lt;b&gt;&lt;/b&gt;&lt;b&gt;Opening Session&lt;/b&gt;&quot;">​</a></h2><p>The main conference began Tuesday afternoon with the opening session and keynote. The opening session always has some interesting information about the number of papers, etc., plus a lot of random stuff.</p><p>EuroVis has close to 300 attendees this year, about the same number as last year.</p><p>This year, EuroVis had 183 full paper submissions, of which 50 were accepted, for an acceptance rate of 27.3%. Short papers had 57 submissions, with 25 accepted for a 44% acceptance rate. An interesting outlier was the posters program with 28 submissions and 27 accepts, for a 96% acceptance rate (that must be some sort of record). I did not write down the stats for state of the art reports (STARs, basically surveys), but they got a lot more submissions this year due to the new review process and the fact that they are published in the <em>Computer Graphics Forum</em> (CGF) journal.</p><h2 id="keynote-anders-ynnerman-openspace-–-visualizing-the-universe" tabindex="-1"><b>Keynote: Anders Ynnerman, OpenSpace – Visualizing the Universe</b> <a class="header-anchor" href="#keynote-anders-ynnerman-openspace-–-visualizing-the-universe" aria-label="Permalink to &quot;&lt;b&gt;Keynote: Anders Ynnerman, OpenSpace – Visualizing the Universe&lt;/b&gt;&quot;">​</a></h2><p>Anders Ynnerman helps run the planetarium in Linköping (Sweden), and also collaborates with the Hayden Observatory in New York. He showed the work they&#39;re doing visualizing the universe and making it not just interesting and entertaining, but also scientifically accurate. He gave a very nice, we&#39;ll-paced talk and demo of their capabilities.</p><p>He also made the interesting point that it&#39;s not just about <em>what</em> was discovered, but also the <em>how </em>– which can inspire people more than the what to want to explore themselves. While I initially didn&#39;t agree with that, I now think that he&#39;s on to something. It certainly helps to see, as he showed, how the New Horizons probe flew by and photographed Pluto to appreciate the incredible accomplishment, more than just seeing the resulting photos.</p><p>Besides the stunning visuals, the talk was remarkable because of Ynnerman&#39;s obvious love for science and his work. It&#39;s great to see that kind of curiosity and drive to communicate science to people.</p><p>Update: you can now <a href="https://vimeo.com/groups/383543/videos/169967499">watch the keynote yourself</a>:</p><iframe src="https://player.vimeo.com/video/169967499" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe><h2 id="high-dimensional-data" tabindex="-1"><b>High-Dimensional Data</b> <a class="header-anchor" href="#high-dimensional-data" aria-label="Permalink to &quot;&lt;b&gt;High-Dimensional Data&lt;/b&gt;&quot;">​</a></h2><p>The first real papers session took place Wednesday morning. Unfortunately, most talks did not have URLs, and I haven&#39;t been very successful in searching for papers posted online. That is especially problematic for EuroVis, since very few institutions outside of Europe have access to the Eurographics digital library, so these papers have nowhere near the reach they should have.</p><p><i>Enhancing Scatterplots with Multi-Dimensional Focal Blur</i> by Joachim Staib, Sebastian Grottel, and Stefan Gomhold built on the idea of blur for focus and context in visualization. This is of particular interest to me, since <a href="/publications/Kosara_InfoVis_2001.html">I did work on this in my Ph.D. thesis</a>. They showed some interesting examples of how blur can separate clusters in scatterplots, but I was ultimately confused whether they were going for interaction or static images.</p><p><i>Exploring Items and Features with I<sup>F</sup> and F<sup>I</sup>-Tables</i> by Paul van der Corput and Jarke J. van Wijk presented the very simple idea of showing two tables next to each other, one with the items as rows and the features as columns (I<sup>F</sup>), and one the other way around (F<sup>I</sup>). This way, the user can pick candidate rows and then look at the items side-by-side. Some histograms and a bit of interaction made the whole thing look quite useful.</p><h2 id="charts-and-glyphs" tabindex="-1"><b></b><b>Charts and Glyphs</b> <a class="header-anchor" href="#charts-and-glyphs" aria-label="Permalink to &quot;&lt;b&gt;&lt;/b&gt;&lt;b&gt;Charts and Glyphs&lt;/b&gt;&quot;">​</a></h2><p><a href="http://innovis.cpsc.ucalgary.ca/Publications/_Wun2015"><i>Comparing Bar Chart Authoring with Microsoft Excel and Tangible Tiles</i></a> by Tiffany Wun, Jennifer Payne, Samuel Huron, and Sheelagh Carpendale had people create and modify bar charts either in Excel or using little physical tiles. They found some interesting differences, like the fact that it&#39;s faster to create charts in Excel than with tiles, but modifying them takes longer. The comparison clearly has its limits, but their aim is to look for hybrid models of interacting with visualizations.</p><p><i>Arcs, Angles, or Areas: Individual Data Encodings in Pie and Donut Charts</i> by Drew Skau and… oh, that&#39;s right, me! This was the full paper part of the <a href="/papers/a-pair-of-pie-chart-papers">EuroVis Pie Paper Package</a>. We got a good number of questions after the talk and more discussions in the break after the session.</p><p><a href="http://cs.swan.ac.uk/~csbob/research/glyphDesign/userStudy/chung16how.pdf"><i>How Ordered Is It? On the Perceptual Orderability of Visual Channels</i></a> by David H. S. Chung, Daniel Archambault, Rita Borgo, Darren J. Edwards, Robert S. Laramee, and Min Chen looked into how well different visual cues can show orderings. They tested color, size, value, but also texture, orientation, and shape. This kind of basic study is nice because it provides practical guidance but also some starting points for more theoretical work.</p><p><a href="http://people.cs.uchicago.edu/~glk/pubs/#EV-2016"><i>Glyphs for Asymmetric Second-Order 2D Tensors</i></a> by Nicholas Seltzer and Gordon Kindlmann was a fun talk, even though I didn&#39;t follow all the math. They created a set of glyphs that can show the properties of 2D flow tensors. Their design process is very principled, and the results look very interesting.</p><h2 id="a-few-first-thoughts" tabindex="-1">A Few First Thoughts <a class="header-anchor" href="#a-few-first-thoughts" aria-label="Permalink to &quot;A Few First Thoughts&quot;">​</a></h2><p>EuroVis feels kind of low-key this year. The large room, even though it&#39;s called the Small Room, seems too large for the conference and feels empty. The papers are okay, but I felt that there was more exciting work last year. Maybe Thursday and Friday will blow me away!</p><p>While the talks are all solid, I&#39;m confused by the lack of online materials. Our pie charts paper was the only talk with links to materials, and there was only one other talk that had a link to the paper. This was quite different at InfoVis, where many talks had links to landing pages for their papers.</p><p>There also isn&#39;t much going on on Twitter. My tweets <a href="https://twitter.com/eagereyes/timelines/733779814738317312">are collected here</a>, and there&#39;s some activity under the <a href="https://twitter.com/search?q=EuroVis%20OR%20EuroVis2016&amp;src=typd">EuroVis and EuroVis2016</a> hashtags (though I wish everybody would join forces under <em>#EuroVis</em>, which is shorter). But there&#39;s much less than I would have expected.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on June 08, 2016</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://theresamariehyne.com" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…</p><blockquote><p>Thanks for the summary of your first days at EuroVis 2016.</p></blockquote><p><a href="http://randomstratum.wordpress.com" rel="nofollow noopener" target="_blank">Boris Gorelik</a> says…</p><blockquote><p>&gt; Comparing Bar Chart Authoring with Microsoft Excel and Tangible Tiles by Tiffany Wun, Jennifer Payne, Samuel Huron, and Sheelagh Carpendale had people create and modify bar charts either in Excel or using little physical tiles. They found some interesting differences, like the fact that it’s faster to create charts in Excel than with tiles, but modifying them takes longer. The comparison clearly has its limits, but their aim is to look for hybrid models of interacting with visualizations.</p><p>What a nice comparison. I also enjoyed reading (some of) the linked paper.</p></blockquote><p>Alexander Rind says…</p><blockquote><p>Thanks a lot for your coverage, Robert.</p><p>I think one reason why few EuroVis pages are available online is that EuroGraphics publishing agreement allows copies on author&#39;s websites only AFTER official publication, whereas IEEE VIS has no such embargo period. Quite out-of-time as IMHO the openness will raise interest in the conference.</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2016/eurovis-2016-tuesday-and-wednesday.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const eurovis2016TuesdayAndWednesday = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  eurovis2016TuesdayAndWednesday as default
};
