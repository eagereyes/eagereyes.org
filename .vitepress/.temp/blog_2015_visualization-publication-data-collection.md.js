import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Link: Visualization Publication Data Collection","description":"People from Georgia Tech, INRIA, University of Stuttgart, and other institutions have put together a comprehensive dataset of all papers presented at Vis/VisWeek/VIS since 1990. This was first collected for a set of visualizations last year, but has been updated with the 2014 data. They intend on keeping it up to date.","frontmatter":{"title":"Link: Visualization Publication Data Collection","description":"People from Georgia Tech, INRIA, University of Stuttgart, and other institutions have put together a comprehensive dataset of all papers presented at Vis/VisWeek/VIS since 1990. This was first collected for a set of visualizations last year, but has been updated with the 2014 data. They intend on keeping it up to date.","date":"2015-06-17T07:43:08.000Z","tags":"blog/2015","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/06/vispubdata.jpg","outline":false},"headers":[],"relativePath":"blog/2015/visualization-publication-data-collection.md","filePath":"blog/2015/visualization-publication-data-collection.md"}');
const _sfc_main = { name: "blog/2015/visualization-publication-data-collection.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="link-visualization-publication-data-collection" tabindex="-1">Link: Visualization Publication Data Collection <a class="header-anchor" href="#link-visualization-publication-data-collection" aria-label="Permalink to &quot;Link: Visualization Publication Data Collection&quot;">​</a></h1><p>People from Georgia Tech, INRIA, University of Stuttgart, and other institutions have put together <a href="http://www.vispubdata.org/site/vispubdata/">a comprehensive dataset of all papers presented at Vis/VisWeek/VIS</a> since 1990. This was first collected for <a href="http://www.cc.gatech.edu/gvu/ii/citevis/VIS25/">a set of visualizations last year</a>, but has been updated with the 2014 data. They intend on keeping it up to date.The dataset contains not just titles, authors, etc., but also unique authors (for cases where there are differences in spelled-out names, use of middle names, etc.), and even citations within the dataset. The data is kept in a Google Doc, so anybody can help improve the quality.</p><p>This is an important collection of data to have for the field, and a great first step. Adding TVCG and maybe a few more of the <a href="/blog/2013/a-guide-to-the-quality-of-different-visualization-venues">common visualization publication venues</a> would make this even more interesting and useful.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on June 17, 2015</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/visualization-publication-data-collection.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visualizationPublicationDataCollection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  visualizationPublicationDataCollection as default
};
