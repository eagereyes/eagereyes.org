import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"RJ Andrews' Profiling the Parks","description":"RJ Andrews has created a great little video about the National Parks in the U.S. Have you ever thought about how the different parks compare? Which one is wider, which one is deeper, which one's at higher or lower elevation?","frontmatter":{"title":"RJ Andrews' Profiling the Parks","description":"RJ Andrews has created a great little video about the National Parks in the U.S. Have you ever thought about how the different parks compare? Which one is wider, which one is deeper, which one's at higher or lower elevation?","date":"2016-11-20T21:34:54.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/wp-content/uploads/2016/11/Profiling-the-Parks-by-RJ-Andrews_10.jpeg","outline":false},"headers":[],"relativePath":"blog/2016/rj-andrews-profiling-the-parks.md","filePath":"blog/2016/rj-andrews-profiling-the-parks.md"}`);
const _sfc_main = { name: "blog/2016/rj-andrews-profiling-the-parks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/11/Profiling-the-Parks-by-RJ-Andrews_10.jpeg" width="700" height="394"></p><h1 id="rj-andrews-profiling-the-parks" tabindex="-1">RJ Andrews&#39; Profiling the Parks <a class="header-anchor" href="#rj-andrews-profiling-the-parks" aria-label="Permalink to &quot;RJ Andrews&#39; Profiling the Parks&quot;">​</a></h1><p><a href="http://www.infowetrust.com/">RJ Andrews</a> has created <a href="https://www.youtube.com/watch?v=q3zt7BXEMPQ">a great little video about the National Parks in the U.S.</a> Have you ever thought about how the different parks compare? Which one is wider, which one is deeper, which one&#39;s at higher or lower elevation?</p><p>I love the hand-drawn images and based on real data, and the way the zooming in and out give context. The video is well worth four and a half minutes of your time.</p><p><a href="https://www.youtube.com/watch?v=q3zt7BXEMPQ" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=q3zt7BXEMPQ</a></p><p>RJ has also written <a href="http://www.infowetrust.com/parks/">a nice posting</a> about the motivation for the piece, the data, the process, etc.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on November 20, 2016</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2016/rj-andrews-profiling-the-parks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rjAndrewsProfilingTheParks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rjAndrewsProfilingTheParks as default
};
