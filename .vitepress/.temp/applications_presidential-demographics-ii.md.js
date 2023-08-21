import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"head":[["meta",{"http-equiv":"Refresh","content":"0; URL=/blog/2008/presidential-demographics-ii"}]]},"headers":[],"relativePath":"applications/presidential-demographics-ii.md","filePath":"applications/presidential-demographics-ii.md"}');
const _sfc_main = { name: "applications/presidential-demographics-ii.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Redirecting to <a href="/blog/2008/presidential-demographics-ii">/blog/2008/presidential-demographics-ii</a>…</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("applications/presidential-demographics-ii.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const presidentialDemographicsIi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  presidentialDemographicsIi as default
};
