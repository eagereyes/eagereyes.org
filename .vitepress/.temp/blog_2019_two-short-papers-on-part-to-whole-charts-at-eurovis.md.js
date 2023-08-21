import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Two Short Papers on Part-to-Whole Charts at EuroVis","description":"Why do pie charts look the way they do? What makes this particular way of slicing up a circle the preferred way of showing part-to-whole relationships? In two short papers that I’m presenting this week at EuroVis, I looked at the design space of circular part-to-whole charts, including pie charts.","frontmatter":{"title":"Two Short Papers on Part-to-Whole Charts at EuroVis","description":"Why do pie charts look the way they do? What makes this particular way of slicing up a circle the preferred way of showing part-to-whole relationships? In two short papers that I’m presenting this week at EuroVis, I looked at the design space of circular part-to-whole charts, including pie charts.","date":"2019-06-03T01:08:43.000Z","tags":"paper, pie charts","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2019/05/EuroVis-Pie-Papers-2.png","outline":false},"headers":[],"relativePath":"blog/2019/two-short-papers-on-part-to-whole-charts-at-eurovis.md","filePath":"blog/2019/two-short-papers-on-part-to-whole-charts-at-eurovis.md"}');
const _sfc_main = { name: "blog/2019/two-short-papers-on-part-to-whole-charts-at-eurovis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2019/05/EuroVis-Pie-Papers-2.png" width="660" height="454"></p><h1 id="two-short-papers-on-part-to-whole-charts-at-eurovis" tabindex="-1">Two Short Papers on Part-to-Whole Charts at EuroVis <a class="header-anchor" href="#two-short-papers-on-part-to-whole-charts-at-eurovis" aria-label="Permalink to &quot;Two Short Papers on Part-to-Whole Charts at EuroVis&quot;">​</a></h1><p>Why do pie charts look the way they do? What makes this particular way of slicing up a circle the preferred way of showing part-to-whole relationships? In two short papers that I’m presenting this week at <a href="https://www.eurovis.org">EuroVis</a>, I looked at the design space of circular part-to-whole charts, including pie charts.</p><p>The first paper, titled <em><a href="/publications/Kosara-EuroVis-2019a">Circular Part-to-Whole Charts Using the Area Visual Cue</a></em>, was motivated by the designs Drew Skau and I created for <a href="/papers/a-pair-of-pie-chart-papers">the studies that showed that angle was unlikely to be the cue used to read pie charts</a>. It was surprising that the <em>area-only</em> condition did as well as the pie chart itself, because the slice showing the data had an irregular shape that changed with the value.</p><p>So I designed a study to test seven different ways of slicing up a circle to represent a fraction by area. Out of these, the pie chart did the best, but there was another chart, which I’m going to call <em>the moon pie</em>, that did equally well for accuracy (and better for speed): sliding a circle of the same size over the base circle to create the part that shows the fraction (similar to how the earth’s shadow creates the phases of the moon).</p><p>The second study, <em><a href="/publications/Kosara-EuroVis-2019b">The Impact of Distribution and Chart Type on Part-to-Whole Comparisons</a></em>, builds on the first one and addresses a criticism I keep getting about the earlier work: why only two slices? Why not test more? So I took the pie chart, the moon pie, the straight-slice pie (the area-only condition from earlier), as well as a stacked bar chart and a treemap, and sliced them up into five slices. I also varied the distribution of the numbers to have either a fat-tail or a long-tail shape.</p><p>The moon pie did well in this one too, and much better than the treemap. Stacked bars held their own in this part-to-whole task, even though they’re terrible for most other uses. And the pie chart, which served as the baseline, again did better or at least as well as, any of the other techniques.</p><p>The visualization community may not like pie charts, but in the real world they’re hugely popular and very common. Rather than sneering at them (and the people who use them), why don’t we <a href="/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results">try to understand them better</a>? In particular, the design space of part-to-whole charts is almost entirely unexplored. The only other chart that’s used for this purpose out in the world, the treemap, hasn’t been studied for this purpose much (if at all). And it seems to actually do worse than the pie chart (and the moon pie).</p><p>The two papers very much belong together, you could almost call them two parts of a single paper. I can’t confirm or deny that they were a single paper at some point and may have gone through several rounds of review (and rejection) over several years.</p><hr class="wp-block-separator is-style-wide"><p>Robert Kosara, <a href="/publications/Kosara-EuroVis-2019a">Circular Part-to-Whole Charts Using the Area Visual Cue</a>, <em>EuroVis Short Papers</em>, 2019</p><p>Robert Kosara, <a href="/publications/Kosara-EuroVis-2019b">The Impact of Distribution and Chart Type on Part-to-Whole Comparisons</a>, <em>EuroVis Short Papers</em>, 2019</p><p><em>Posted by <a href="/about">Robert Kosara</a> on June 03, 2019</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p>Bella Gotie says…</p><blockquote><p>Very interesting. Have you ever checked the connection between a pie graph perception and an analog clock perception?</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2019/two-short-papers-on-part-to-whole-charts-at-eurovis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const twoShortPapersOnPartToWholeChartsAtEurovis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  twoShortPapersOnPartToWholeChartsAtEurovis as default
};
