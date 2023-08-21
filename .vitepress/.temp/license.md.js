import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"About","description":"","frontmatter":{"title":"About","prev":false,"next":false},"headers":[],"relativePath":"license.md","filePath":"license.md"}');
const _sfc_main = { name: "license.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h1><p>All content on eagereyes is released under a <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Share-Alike License</a>. That means you’re welcome to use anything you see here as long as you…</p><ul><li>give me credit and</li><li>release your own content under the same terms.</li></ul><p>If you want to use materials for commercial purposes, I’m usually happy to grant permission. Just <a href="http://eagerstage.newmandi.com/contact/">ask</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("license.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const license = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  license as default
};
