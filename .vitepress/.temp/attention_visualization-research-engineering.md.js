import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"head":[["meta",{"http-equiv":"Refresh","content":"0; URL=/blog/2015/visualization-research-engineering"}]]},"headers":[],"relativePath":"attention/visualization-research-engineering.md","filePath":"attention/visualization-research-engineering.md"}');
const _sfc_main = { name: "attention/visualization-research-engineering.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Redirecting to <a href="/blog/2015/visualization-research-engineering">/blog/2015/visualization-research-engineering</a>…</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("attention/visualization-research-engineering.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visualizationResearchEngineering = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  visualizationResearchEngineering as default
};
