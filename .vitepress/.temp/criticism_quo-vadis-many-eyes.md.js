import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"head":[["meta",{"http-equiv":"Refresh","content":"0; URL=/blog/2012/quo-vadis-many-eyes"}]]},"headers":[],"relativePath":"criticism/quo-vadis-many-eyes.md","filePath":"criticism/quo-vadis-many-eyes.md"}');
const _sfc_main = { name: "criticism/quo-vadis-many-eyes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Redirecting to <a href="/blog/2012/quo-vadis-many-eyes">/blog/2012/quo-vadis-many-eyes</a>…</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("criticism/quo-vadis-many-eyes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quoVadisManyEyes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quoVadisManyEyes as default
};
