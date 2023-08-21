import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"eagereyes.org","text":"Visualization and Visual Communication"},"features":[{"title":"Pie Charts","details":"Learn about how they work, and what we know and don't know about them","link":"/tag/pie-charts"},{"title":"YouTube Videos","details":"My 'eagereyesTV' YouTube videos about chart types, data, etc.","link":"/tag/eagereyestv"},{"title":"The Blog","details":"The eagereyes blog, going all the way back to 2006","link":"/blog/"}],"footer":true,"outline":false},"headers":[],"relativePath":"index.md","filePath":"index.md"}`);
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
