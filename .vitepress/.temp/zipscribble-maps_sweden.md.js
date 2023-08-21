import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"ZIPScribble Map: Sweden","description":"","frontmatter":{"title":"ZIPScribble Map: Sweden","description":"","date":"2007-01-07T21:53:29.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Sweden-color-borders.png","outline":false},"headers":[],"relativePath":"zipscribble-maps/sweden.md","filePath":"zipscribble-maps/sweden.md"}');
const _sfc_main = { name: "zipscribble-maps/sweden.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img class="aligncenter" title="ZIPScribbleMap Sweden" src="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Sweden-color-borders.png" alt="ZIPScribbleMap Sweden" width="234" height="599" border="0"></p><h1 id="zipscribble-map-sweden" tabindex="-1">ZIPScribble Map: Sweden <a class="header-anchor" href="#zipscribble-map-sweden" aria-label="Permalink to &quot;ZIPScribble Map: Sweden&quot;">​</a></h1><p>When my girlfriend saw this image, she immediately commented how <a href="http://en.wikipedia.org/wiki/Italy">Sweden</a> looked like a <a href="http://en.wikipedia.org/wiki/Stiletto_heel">stiletto boot</a>, more elegant than even <a href="/Applications/MoreZIPScribbleMaps.html#Italy">Italy</a>. Wow, big controversy potential there, but I think I&#39;d rather stay out of this one.</p><p>See also <a href="/zipscribble-maps/interactive-zipscribble-map#SE">the interactive version</a>!</p><table width="60%" border="0" align="center"><tbody><tr><td align="center"><strong>PNG</strong></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Sweden.png" target="_blank" rel="slb_off">Black/White</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Sweden-color.png" target="_blank" rel="slb_off">Color</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Sweden-color-borders.png" target="_blank" rel="slb_off">Color, Borders</a></td></tr><tr><td align="center"><strong>PDF</strong></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Sweden.pdf" target="_blank">Black/White</a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Sweden-color.pdf" target="_blank">Color </a></td><td align="center"><a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMaps/ZIPScribbleMap-Sweden-color-borders.pdf" target="_blank">Color, Borders</a></td></tr></tbody></table><p><em>Posted by <a href="/about">Robert Kosara</a> on January 07, 2007</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zipscribble-maps/sweden.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sweden = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sweden as default
};
