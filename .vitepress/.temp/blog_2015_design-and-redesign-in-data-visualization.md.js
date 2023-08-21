import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Link: Design and Redesign in Data Visualization","description":"Fernanda Viégas and Martin Wattenberg have written a wonderful piece titled Design and Redesign in Data Visualization about criticism in data visualization. They thoughtfully analyze the practice and point out some of the issues when people create redesigns, including intellectual honesty and perfect hindsight.","frontmatter":{"title":"Link: Design and Redesign in Data Visualization","description":"Fernanda Viégas and Martin Wattenberg have written a wonderful piece titled Design and Redesign in Data Visualization about criticism in data visualization. They thoughtfully analyze the practice and point out some of the issues when people create redesigns, including intellectual honesty and perfect hindsight.","date":"2015-04-15T06:17:53.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/04/cairo-redesign.png","outline":false},"headers":[],"relativePath":"blog/2015/design-and-redesign-in-data-visualization.md","filePath":"blog/2015/design-and-redesign-in-data-visualization.md"}');
const _sfc_main = { name: "blog/2015/design-and-redesign-in-data-visualization.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/04/cairo-redesign.png" width="725" height="331"></p><h1 id="link-design-and-redesign-in-data-visualization" tabindex="-1">Link: Design and Redesign in Data Visualization <a class="header-anchor" href="#link-design-and-redesign-in-data-visualization" aria-label="Permalink to &quot;Link: Design and Redesign in Data Visualization&quot;">​</a></h1><p>Fernanda Viégas and Martin Wattenberg have written a wonderful piece titled <em><a href="https://medium.com/@hint_fm/design-and-redesign-4ab77206cf9">Design and Redesign in Data Visualization</a></em> about criticism in data visualization. They thoughtfully analyze the practice and point out some of the issues when people create redesigns, including intellectual honesty and perfect hindsight.</p><p>They then go on to define some &quot;rules of engagement&quot; for a more reasonable approach to redesign. They argue for a kinder, more respectful, and more balanced process. Their ideas are informed by the critique in design and certainly make a lot of sense for visualization.</p><p>The piece was originally written for the <em>Malofiej 22</em> book, and I&#39;m glad that it has been published for a wider audience.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on April 15, 2015</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://www.thefunctionalart.com" rel="nofollow noopener" target="_blank">Alberto Cairo</a> says…</p><blockquote><p>Such a great article</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/design-and-redesign-in-data-visualization.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const designAndRedesignInDataVisualization = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  designAndRedesignInDataVisualization as default
};
