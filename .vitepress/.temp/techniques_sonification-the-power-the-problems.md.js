import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"head":[["meta",{"http-equiv":"Refresh","content":"0; URL=/blog/2017/sonification-the-power-the-problems"}]]},"headers":[],"relativePath":"techniques/sonification-the-power-the-problems.md","filePath":"techniques/sonification-the-power-the-problems.md"}');
const _sfc_main = { name: "techniques/sonification-the-power-the-problems.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Redirecting to <a href="/blog/2017/sonification-the-power-the-problems">/blog/2017/sonification-the-power-the-problems</a>…</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("techniques/sonification-the-power-the-problems.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sonificationThePowerTheProblems = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sonificationThePowerTheProblems as default
};
