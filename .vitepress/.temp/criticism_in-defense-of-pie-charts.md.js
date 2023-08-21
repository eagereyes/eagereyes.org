import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"head":[["meta",{"http-equiv":"Refresh","content":"0; URL=/blog/2011/in-defense-of-pie-charts"}]]},"headers":[],"relativePath":"criticism/in-defense-of-pie-charts.md","filePath":"criticism/in-defense-of-pie-charts.md"}');
const _sfc_main = { name: "criticism/in-defense-of-pie-charts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Redirecting to <a href="/blog/2011/in-defense-of-pie-charts">/blog/2011/in-defense-of-pie-charts</a>…</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("criticism/in-defense-of-pie-charts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const inDefenseOfPieCharts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  inDefenseOfPieCharts as default
};
