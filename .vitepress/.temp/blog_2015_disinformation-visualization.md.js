import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Link: Disinformation Visualization","description":"In his piece Disinformation Visualization: How to lie with datavis, Mushon Zer-Aviv makes some interesting points about how framing the same data differently in visualization can make a big difference. Using the example of the abortion debate, he shows the usual chart tricks, cherry-picking, subsetting, etc., that is done to make the data support a particular story.","frontmatter":{"title":"Link: Disinformation Visualization","description":"In his piece Disinformation Visualization: How to lie with datavis, Mushon Zer-Aviv makes some interesting points about how framing the same data differently in visualization can make a big difference. Using the example of the abortion debate, he shows the usual chart tricks, cherry-picking, subsetting, etc., that is done to make the data support a particular story.","date":"2015-06-03T06:17:30.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/05/disinformation-teaser.jpg","outline":false},"headers":[],"relativePath":"blog/2015/disinformation-visualization.md","filePath":"blog/2015/disinformation-visualization.md"}');
const _sfc_main = { name: "blog/2015/disinformation-visualization.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/05/disinformation-teaser.jpg" width="500" height="309"></p><h1 id="link-disinformation-visualization" tabindex="-1">Link: Disinformation Visualization <a class="header-anchor" href="#link-disinformation-visualization" aria-label="Permalink to &quot;Link: Disinformation Visualization&quot;">​</a></h1><p>In his piece <em><a href="https://visualisingadvocacy.org/blog/disinformation-visualization-how-lie-datavis">Disinformation Visualization: How to lie with datavis</a>,</em> <a href="http://mushon.com/">Mushon Zer-Aviv</a> makes some interesting points about how framing the same data differently in visualization can make a big difference. Using the example of the abortion debate, he shows the usual chart tricks, cherry-picking, subsetting, etc., that is done to make the data support a particular story.</p><p>This is a slightly more opinionated view of some of the work I&#39;ve mentioned recently, like <a href="http://fellinlovewithdata.com/research/deceptive-visualizations">Enrico Bertini&#39;s paper on deceptive visualization</a> and <a href="/blog/2015/evaluation-of-the-impact-of-visual-embellishments-in-bar-charts">our work on bar chart embellishments</a>.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on June 03, 2015</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://www.leo#" rel="nofollow noopener" target="_blank">Leo</a> says…</p><blockquote><p>Very interesting!</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/disinformation-visualization.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const disinformationVisualization = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  disinformationVisualization as default
};
