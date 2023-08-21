import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"About","description":"","frontmatter":{"title":"About","prev":false,"next":false},"headers":[],"relativePath":"contact.md","filePath":"contact.md"}');
const _sfc_main = { name: "contact.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="contact" tabindex="-1">Contact <a class="header-anchor" href="#contact" aria-label="Permalink to &quot;Contact&quot;">​</a></h1><p>Coming soon…</p><p>In the meantime, you can find me on <a href="https://twitter.com/eagereyes" target="_blank" rel="noreferrer">Twitter</a>, <a href="https://mastodon.social/@eagereyes" target="_blank" rel="noreferrer">Mastodon</a>, <a href="https://bsky.app/profile/eagereyes.org" target="_blank" rel="noreferrer">BlueSky</a>, and <a href="https://www.threads.net/@eagereyes" target="_blank" rel="noreferrer">Threads</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("contact.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contact as default
};
