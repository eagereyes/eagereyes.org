import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Link: Data Viz Done Right","description":"Andy Kriebel's Data Viz Done Right is a remarkable little website. He collects good examples of data visualization and talks about what works and what doesn't. He does have bits of criticism sometimes, but he always has more positive than negative things to say about his picks. Good stuff.","frontmatter":{"title":"Link: Data Viz Done Right","description":"Andy Kriebel's Data Viz Done Right is a remarkable little website. He collects good examples of data visualization and talks about what works and what doesn't. He does have bits of criticism sometimes, but he always has more positive than negative things to say about his picks. Good stuff.","date":"2015-01-21T07:17:48.000Z","tags":"blog/2015","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2014/12/data-viz-done-right.png","outline":false},"headers":[],"relativePath":"blog/2015/link-data-viz-done-right.md","filePath":"blog/2015/link-data-viz-done-right.md"}`);
const _sfc_main = { name: "blog/2015/link-data-viz-done-right.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="link-data-viz-done-right" tabindex="-1">Link: Data Viz Done Right <a class="header-anchor" href="#link-data-viz-done-right" aria-label="Permalink to &quot;Link: Data Viz Done Right&quot;">​</a></h1><p>Andy Kriebel&#39;s <em><a href="http://www.datavizdoneright.com">Data Viz Done Right</a></em> is a remarkable little website. He collects good examples of data visualization and talks about what works and what doesn&#39;t. He does have bits of criticism sometimes, but he always has more positive than negative things to say about his picks. Good stuff.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on January 21, 2015</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="https://plus.google.com/+AndyKriebel" rel="nofollow noopener" target="_blank">Andy Kriebel</a> says…</p><blockquote><p>Thanks Robert!!</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/link-data-viz-done-right.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const linkDataVizDoneRight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  linkDataVizDoneRight as default
};
