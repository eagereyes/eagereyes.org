import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"ZIPScribble Map: France","description":"","frontmatter":{"title":"ZIPScribble Map: France","description":"","date":"2007-01-07T21:46:26.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-France-color-borders.png","outline":false},"headers":[],"relativePath":"zipscribble-maps/france.md","filePath":"zipscribble-maps/france.md"}');
const _sfc_main = { name: "zipscribble-maps/france.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img class="aligncenter" title="ZIPScribbleMap France" src="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-France-color-borders.png" alt="ZIPScribbleMap France" width="559" height="544" border="0"></p><h1 id="zipscribble-map-france" tabindex="-1">ZIPScribble Map: France <a class="header-anchor" href="#zipscribble-map-france" aria-label="Permalink to &quot;ZIPScribble Map: France&quot;">​</a></h1><p>The <a href="http://en.wikipedia.org/wiki/France">French</a> are known for their beaurocracy, and the map seems to be an expression of that. Inside each <em>région</em>, there are several clusters for the <em>départements</em>, neatly separated. Smaller departments are often thrown together with larger ones, though, and inside each cluster is a nice bit of scribble chaos to make things more interesting. To the south-east, you can see the Mediterranean island of <a href="http://en.wikipedia.org/wiki/Corsica">Corsica</a>.</p><p>See also <a href="/zipscribble-maps/interactive-zipscribble-map#FR">the interactive version</a>!</p><table width="60%" border="0" align="center"><tbody><tr><td align="center"><strong>PNG</strong></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-France.png" target="_blank" rel="slb_off">Black/White</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-France-color.png" target="_blank" rel="slb_off">Color</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-France-color-borders.png" target="_blank" rel="slb_off">Color, Borders</a></td></tr><tr><td align="center"><strong>PDF</strong></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-France.pdf" target="_blank">Black/White</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-France-color.pdf" target="_blank">Color</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-France-color-borders.pdf" target="_blank">Color, Borders</a></td></tr></tbody></table><p><em>Posted by <a href="/about">Robert Kosara</a> on January 07, 2007</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zipscribble-maps/france.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const france = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  france as default
};
