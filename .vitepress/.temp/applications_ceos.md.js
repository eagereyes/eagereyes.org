import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"It Pays to be a CEO in the U.S.","description":"An interactive story showing the pay disparity between average workers and CEOs in different countries.","frontmatter":{"title":"It Pays to be a CEO in the U.S.","description":"An interactive story showing the pay disparity between average workers and CEOs in different countries.","date":"2014-10-12T17:51:03.000Z","tags":"applications","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2014/10/ceos-static.png"},"headers":[],"relativePath":"applications/ceos.md","filePath":"applications/ceos.md"}');
const _sfc_main = { name: "applications/ceos.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="it-pays-to-be-a-ceo-in-the-u-s" tabindex="-1">It Pays to be a CEO in the U.S. <a class="header-anchor" href="#it-pays-to-be-a-ceo-in-the-u-s" aria-label="Permalink to &quot;It Pays to be a CEO in the U.S.&quot;">​</a></h1><p><span style="${ssrRenderStyle({ "font-size": "8pt" })}">Data from <a href="http://www.washingtonpost.com/blogs/wonkblog/wp/2014/09/25/the-pay-gap-between-ceos-and-workers-is-much-worse-than-you-realize/">Washington Post&#39;s Wonkblog</a>. See the <a href="/blog/2014/large-multiples">accompanying posting</a> for context and to discuss. Code <a href="https://gist.github.com/eagereyes/1a3ac476c7d21e0f7b00">available as a gist on github</a>.</span></p><p><em>Posted by <a href="/about">Robert Kosara</a> on October 12, 2014</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("applications/ceos.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ceos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ceos as default
};
