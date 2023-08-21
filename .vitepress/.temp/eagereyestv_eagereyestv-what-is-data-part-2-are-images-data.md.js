import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"head":[["meta",{"http-equiv":"Refresh","content":"0; URL=/blog/2019/eagereyestv-what-is-data-part-2-are-images-data"}]]},"headers":[],"relativePath":"eagereyestv/eagereyestv-what-is-data-part-2-are-images-data.md","filePath":"eagereyestv/eagereyestv-what-is-data-part-2-are-images-data.md"}');
const _sfc_main = { name: "eagereyestv/eagereyestv-what-is-data-part-2-are-images-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Redirecting to <a href="/blog/2019/eagereyestv-what-is-data-part-2-are-images-data">/blog/2019/eagereyestv-what-is-data-part-2-are-images-data</a>…</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("eagereyestv/eagereyestv-what-is-data-part-2-are-images-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const eagereyestvWhatIsDataPart2AreImagesData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  eagereyestvWhatIsDataPart2AreImagesData as default
};
