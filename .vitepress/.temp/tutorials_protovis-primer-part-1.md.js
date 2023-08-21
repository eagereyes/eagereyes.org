import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"head":[["meta",{"http-equiv":"Refresh","content":"0; URL=/blog/2010/protovis-primer-part-1"}]]},"headers":[],"relativePath":"tutorials/protovis-primer-part-1.md","filePath":"tutorials/protovis-primer-part-1.md"}');
const _sfc_main = { name: "tutorials/protovis-primer-part-1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Redirecting to <a href="/blog/2010/protovis-primer-part-1">/blog/2010/protovis-primer-part-1</a>…</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tutorials/protovis-primer-part-1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const protovisPrimerPart1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  protovisPrimerPart1 as default
};
