import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Graphic Continuum Flash Cards","description":"Jon Schwabish and Severino Ribecca have turned their Graphic Continuum poster into a set of cards. They're a good way to expand your visual vocabulary and find new ideas for how to represent your data.","frontmatter":{"title":"Graphic Continuum Flash Cards","description":"Jon Schwabish and Severino Ribecca have turned their Graphic Continuum poster into a set of cards. They're a good way to expand your visual vocabulary and find new ideas for how to represent your data.","date":"2016-11-09T07:17:42.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/wp-content/uploads/2016/11/continuum-cards.jpg","outline":false},"headers":[],"relativePath":"blog/2016/graphic-continuum-flash-cards.md","filePath":"blog/2016/graphic-continuum-flash-cards.md"}`);
const _sfc_main = { name: "blog/2016/graphic-continuum-flash-cards.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/11/continuum-cards.jpg" width="720" height="540"></p><h1 id="graphic-continuum-flash-cards" tabindex="-1">Graphic Continuum Flash Cards <a class="header-anchor" href="#graphic-continuum-flash-cards" aria-label="Permalink to &quot;Graphic Continuum Flash Cards&quot;">​</a></h1><p><a href="http://policyviz.com/">Jon Schwabish</a> and<a href="http://www.datavizcatalogue.com"> Severino Ribecca</a> have turned their <a href="http://policyviz.com/graphic-continuum/">Graphic Continuum poster</a> into a set of cards. They&#39;re a good way to expand your visual vocabulary and find new ideas for how to represent your data.</p><p>Each card shows one visualization technique as a stylized image on one side and a short definition on the other. They are grouped by color into six sets of related techniques, like ones used for comparing values, distributions, time, part-to-whole, etc.</p><p>The cards are a bit larger than regular playing cards, but there are 52 of them, just like in most packs of cards. There is no game component, but I&#39;m sure somebody will figure out how to turn them into a drinking game.</p><p>The cards are <a href="http://www.policyvizshop.com">available for $15</a>. If you have a Graphic Continuum poster, you can also <a href="http://policyviz.com/introducing-graphic-continuum-flash-cards/">participate in a drawing</a> to win a free set (until November 11).</p><p><em>Posted by <a href="/about">Robert Kosara</a> on November 09, 2016</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2016/graphic-continuum-flash-cards.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const graphicContinuumFlashCards = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  graphicContinuumFlashCards as default
};
