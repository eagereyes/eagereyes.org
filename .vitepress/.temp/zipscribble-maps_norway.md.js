import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"ZIPScribble Map: Norway","description":"","frontmatter":{"title":"ZIPScribble Map: Norway","description":"","date":"2007-01-07T21:51:31.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Norway-color-borders.png","outline":false},"headers":[],"relativePath":"zipscribble-maps/norway.md","filePath":"zipscribble-maps/norway.md"}');
const _sfc_main = { name: "zipscribble-maps/norway.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img class="aligncenter" title="ZIPScribbleMap Norway" src="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Norway-color-borders.png" alt="ZIPScribbleMap Norway" width="479" height="559" border="0"></p><h1 id="zipscribble-map-norway" tabindex="-1">ZIPScribble Map: Norway <a class="header-anchor" href="#zipscribble-map-norway" aria-label="Permalink to &quot;ZIPScribble Map: Norway&quot;">​</a></h1><p>The climate in <a href="http://en.wikipedia.org/wiki/Norway">Norway</a> makes the coastal areas and the more southern parts more appealing to live. That data also looks much better than the middle to nortern parts.</p><p>See also <a href="/zipscribble-maps/interactive-zipscribble-map#NO">the interactive version</a>!</p><table width="60%" border="0" align="center"><tbody><tr><td align="center"><strong>PNG</strong></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Norway.png" target="_blank" rel="slb_off">Black/White</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Norway-color.png" target="_blank" rel="slb_off">Color</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Norway-color-borders.png" target="_blank" rel="slb_off">Color, Borders</a></td></tr><tr><td align="center"><strong>PDF</strong></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Norway.pdf" target="_blank">Black/White</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Norway-color.pdf" target="_blank">Color</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Norway-color-borders.pdf" target="_blank">Color, Borders</a></td></tr></tbody></table><p><em>Posted by <a href="/about">Robert Kosara</a> on January 07, 2007</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zipscribble-maps/norway.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const norway = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  norway as default
};
