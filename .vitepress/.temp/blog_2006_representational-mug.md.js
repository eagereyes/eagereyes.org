import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Representational Mug","description":"This was bought in the store of the Guggenheim Museum in New York.","frontmatter":{"title":"Representational Mug","description":"This was bought in the store of the Guggenheim Museum in New York.","date":"2006-11-08T09:50:47.000Z","tags":null,"featuredImage":"http://eagereyes.org/media/attachments/Guggenheim_Mug.jpg","outline":false},"headers":[],"relativePath":"blog/2006/representational-mug.md","filePath":"blog/2006/representational-mug.md"}');
const _sfc_main = { name: "blog/2006/representational-mug.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img title="Representational Mug" src="https://media.eagereyes.org/media/attachments/Guggenheim_Mug.jpg" alt="Representational Mug" width="500" height="429"></p><h1 id="representational-mug" tabindex="-1">Representational Mug <a class="header-anchor" href="#representational-mug" aria-label="Permalink to &quot;Representational Mug&quot;">​</a></h1><p>This was bought in the store of the <a href="http://en.wikipedia.org/wiki/Solomon_R._Guggenheim_Museum">Guggenheim Museum in New York</a>.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on November 08, 2006</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p>Petra says…</p><blockquote><p>The mug is really nice, but why is it a representational mug?</p></blockquote><p>Robert Kosara says…</p><blockquote><p>I knew this would be a bit too hard, so I added a little hint.</p></blockquote><p>Peter M. says…</p><blockquote><p>Petra: The hint is that it was bought at the &quot;Guggenheim Museum&quot;. You have had to be there to know what Robert means 😉</p></blockquote><p>mrs.rambo says…</p><blockquote><p>it&#39;s shaped like the building.</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2006/representational-mug.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const representationalMug = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  representationalMug as default
};
