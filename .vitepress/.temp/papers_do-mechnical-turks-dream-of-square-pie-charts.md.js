import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"head":[["meta",{"http-equiv":"Refresh","content":"0; URL=/blog/2010/do-mechnical-turks-dream-of-square-pie-charts"}]]},"headers":[],"relativePath":"papers/do-mechnical-turks-dream-of-square-pie-charts.md","filePath":"papers/do-mechnical-turks-dream-of-square-pie-charts.md"}');
const _sfc_main = { name: "papers/do-mechnical-turks-dream-of-square-pie-charts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Redirecting to <a href="/blog/2010/do-mechnical-turks-dream-of-square-pie-charts">/blog/2010/do-mechnical-turks-dream-of-square-pie-charts</a>…</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("papers/do-mechnical-turks-dream-of-square-pie-charts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const doMechnicalTurksDreamOfSquarePieCharts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  doMechnicalTurksDreamOfSquarePieCharts as default
};
