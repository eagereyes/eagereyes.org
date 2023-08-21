import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Seminal InfoVis Papers: Introduction","description":"Some of the most fundamental and important papers in information visualization are around 30 years old. This is interesting for several reasons. For one, it shows that the field is still very young. Most research fields go back much, much further. Even within such a short time frame, though, there is a danger of not knowing some of the most important pieces of research.","frontmatter":{"title":"Seminal InfoVis Papers: Introduction","description":"Some of the most fundamental and important papers in information visualization are around 30 years old. This is interesting for several reasons. For one, it shows that the field is still very young. Most research fields go back much, much further. Even within such a short time frame, though, there is a danger of not knowing some of the most important pieces of research.","date":"2015-01-25T19:01:35.000Z","tags":null,"featuredImage":null,"outline":false},"headers":[],"relativePath":"blog/2015/introduction.md","filePath":"blog/2015/introduction.md"}');
const _sfc_main = { name: "blog/2015/introduction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="seminal-infovis-papers-introduction" tabindex="-1">Seminal InfoVis Papers: Introduction <a class="header-anchor" href="#seminal-infovis-papers-introduction" aria-label="Permalink to &quot;Seminal InfoVis Papers: Introduction&quot;">​</a></h1><p>Some of the most fundamental and important papers in information visualization are around 30 years old. This is interesting for several reasons. For one, it shows that the field is still very young. Most research fields go back much, much further. Even within such a short time frame, though, there is a danger of not knowing some of the most important pieces of research.</p><p>While 30 years is not much, it is also a lot. Some papers get cited over and over again, but more for convenience than with an eye towards truly building upon them and questioning them. They are treated as gospel a bit too much.</p><p>The goal of this little series is to describe a few of the most fundamental papers (not just ones that are that old, but also a few more recent ones). I don’t just want to summarize the papers though, but show the way forward: what work has been done since, what questions remain open, what new work could be done based on them?</p><p>A paper’s publication is only the beginning. Its value comes from the work that is built on top of it, questioning it, improving upon it – and, sometimes, proving it wrong.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on January 25, 2015</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/introduction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const introduction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  introduction as default
};
