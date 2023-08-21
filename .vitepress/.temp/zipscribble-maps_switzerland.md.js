import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"ZIPScribble Map: Switzerland","description":"","frontmatter":{"title":"ZIPScribble Map: Switzerland","description":"","date":"2007-01-07T21:54:42.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Switzerland-color-names-borders.png","outline":false},"headers":[],"relativePath":"zipscribble-maps/switzerland.md","filePath":"zipscribble-maps/switzerland.md"}');
const _sfc_main = { name: "zipscribble-maps/switzerland.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img class="aligncenter" title="ZIPScribbleMap Switzerland" src="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Switzerland-color-names-borders.png" alt="ZIPScribbleMap Switzerland" width="599" height="364" border="0"></p><h1 id="zipscribble-map-switzerland" tabindex="-1">ZIPScribble Map: Switzerland <a class="header-anchor" href="#zipscribble-map-switzerland" aria-label="Permalink to &quot;ZIPScribble Map: Switzerland&quot;">​</a></h1><p><a href="http://en.wikipedia.org/wiki/Switzerland">Switzerland</a> is known for its mountains, and you can see that quite well on this map, especially in the middle to southern areas. Especially impressive is the canton of Uri (UR), which is one long valley; this is very nicely visible on this map.</p><p>See also <a href="/zipscribble-maps/interactive-zipscribble-map#CH">the interactive version</a>!</p><table width="80%" border="0" align="center"><tbody><tr><td align="center"><strong>PNG</strong></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Switzerland.png" target="_blank" rel="slb_off">Black/White</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Switzerland-color.png" target="_blank" rel="slb_off">Color</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Switzerland-color-names.png" target="_blank" rel="slb_off">Color, Names</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Switzerland-color-names-borders.png" target="_blank" rel="slb_off">Color, Names, Borders</a></td></tr><tr><td align="center"><strong>PDF</strong></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Switzerland.pdf" target="_blank">Black/White</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Switzerland-color.pdf" target="_blank">Color </a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Switzerland-color-names.pdf" target="_blank">Color, Names</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Switzerland-color-names-borders.pdf" target="_blank">Color, Names, Borders</a></td></tr></tbody></table><p><em>Posted by <a href="/about">Robert Kosara</a> on January 07, 2007</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zipscribble-maps/switzerland.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const switzerland = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  switzerland as default
};
