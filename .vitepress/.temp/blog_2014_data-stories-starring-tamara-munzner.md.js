import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Data Stories starring Tamara Munzner","description":"The latest episode of the Data Stories podcast has Tamara Munzner as the guest. They talk about her much-anticipated book, visualization taxonomies, and a lot more. It's a great episode, well worth listening to.","frontmatter":{"title":"Data Stories starring Tamara Munzner","description":"The latest episode of the Data Stories podcast has Tamara Munzner as the guest. They talk about her much-anticipated book, visualization taxonomies, and a lot more. It's a great episode, well worth listening to.","date":"2014-12-28T23:28:27.000Z","tags":"Data Stories","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2014/12/TamaraMunzner.jpg","outline":false},"headers":[],"relativePath":"blog/2014/data-stories-starring-tamara-munzner.md","filePath":"blog/2014/data-stories-starring-tamara-munzner.md"}`);
const _sfc_main = { name: "blog/2014/data-stories-starring-tamara-munzner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="data-stories-starring-tamara-munzner" tabindex="-1">Data Stories starring Tamara Munzner <a class="header-anchor" href="#data-stories-starring-tamara-munzner" aria-label="Permalink to &quot;Data Stories starring Tamara Munzner&quot;">​</a></h1><p><a href="http://datastori.es/data-stories-44/">The latest episode of the <em>Data Stories</em> podcast</a> has <a href="http://www.cs.ubc.ca/~tmm/">Tamara Munzner</a> as the guest. They talk about <a href="http://www.crcpress.com/product/isbn/9781466508910">her much-anticipated book</a>, visualization taxonomies, and a lot more. It&#39;s a great episode, well worth listening to.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on December 28, 2014</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2014/data-stories-starring-tamara-munzner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dataStoriesStarringTamaraMunzner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dataStoriesStarringTamaraMunzner as default
};
