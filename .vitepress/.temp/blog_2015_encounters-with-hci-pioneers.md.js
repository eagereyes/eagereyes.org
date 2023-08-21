import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Encounters with HCI Pioneers","description":"Ben Shneiderman has put together a series of postings about the Pioneers of Human-Computer Interaction (HCI). Each includes a brief biography, some personal notes by Ben, as well as Ben's photos of them. The latter are particularly remarkable, often going back to the 1980s – like the gem at the top of this page, showing the man himself in 1986.","frontmatter":{"title":"Encounters with HCI Pioneers","description":"Ben Shneiderman has put together a series of postings about the Pioneers of Human-Computer Interaction (HCI). Each includes a brief biography, some personal notes by Ben, as well as Ben's photos of them. The latter are particularly remarkable, often going back to the 1980s – like the gem at the top of this page, showing the man himself in 1986.","date":"2015-09-01T20:14:09.000Z","tags":"blog/2015","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/09/shneider-man.jpg","outline":false},"headers":[],"relativePath":"blog/2015/encounters-with-hci-pioneers.md","filePath":"blog/2015/encounters-with-hci-pioneers.md"}`);
const _sfc_main = { name: "blog/2015/encounters-with-hci-pioneers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="encounters-with-hci-pioneers" tabindex="-1">Encounters with HCI Pioneers <a class="header-anchor" href="#encounters-with-hci-pioneers" aria-label="Permalink to &quot;Encounters with HCI Pioneers&quot;">​</a></h1><p>Ben Shneiderman has put together a series of postings about the <a href="https://hcipioneers.wordpress.com/">Pioneers of Human-Computer Interaction (HCI)</a>. Each includes a brief biography, some personal notes by Ben, as well as Ben&#39;s photos of them. The latter are particularly remarkable, often going back to the 1980s – like the gem at the top of this page, showing the man himself in 1986.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on September 01, 2015</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/encounters-with-hci-pioneers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const encountersWithHciPioneers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  encountersWithHciPioneers as default
};
