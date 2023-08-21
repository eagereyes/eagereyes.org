import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"I Want to BELIV","description":"Evaluation of visualization systems and techniques is a vital part of visualization research, but is often neglected. While there are established methods for basic perception studies, many other kinds of questions are much more difficult to answer in a controlled study. The CHI workshop BELIV (BEyond time and errors: novel evaLuation methods for Information Visualization) is the place to discuss new ideas about evaluating visualization.","frontmatter":{"title":"I Want to BELIV","description":"Evaluation of visualization systems and techniques is a vital part of visualization research, but is often neglected. While there are established methods for basic perception studies, many other kinds of questions are much more difficult to answer in a controlled study. The CHI workshop BELIV (BEyond time and errors: novel evaLuation methods for Information Visualization) is the place to discuss new ideas about evaluating visualization.","date":"2009-11-09T22:39:52.000Z","tags":null,"featuredImage":null,"outline":false},"headers":[],"relativePath":"blog/2009/i-want-to-beliv.md","filePath":"blog/2009/i-want-to-beliv.md"}');
const _sfc_main = { name: "blog/2009/i-want-to-beliv.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="i-want-to-beliv" tabindex="-1">I Want to BELIV <a class="header-anchor" href="#i-want-to-beliv" aria-label="Permalink to &quot;I Want to BELIV&quot;">​</a></h1><p>Evaluation of visualization systems and techniques is a vital part of visualization research, but is often neglected. While there are established methods for basic perception studies, many other kinds of questions are much more difficult to answer in a controlled study. The CHI workshop <a href="http://www.beliv.org/beliv2010/">BELIV (BEyond time and errors: novel evaLuation methods for Information Visualization)</a> is the place to discuss new ideas about evaluating visualization.</p><p>Evaluation is not a panacea, especially when it comes to complex visualization application. There are also new kinds of visualization that require us to rethink how to evaluate them in the first place. That includes visualization websites like <a href="http://many-eyes.com/">Many Eyes</a> just as much as visualizations in less traditional settings, like museums.</p><p>How do we know that these systems are useful? How can we compare them? Can we measure not just correctness and task completion time, but also engagement, learning, insights, and fun?</p><p>BELIV accepts two kinds of submissions: research papers and position papers. The workshop is part of <a href="http://chi2010.org/">CHI 2010</a>, which will take place in Atlanta, GA, April 10–15, 2010. The deadline for submissions is November 30, at 5pm PST.</p><p>(See also Enrico Bertini&#39;s <a href="http://diuf.unifr.ch/people/bertinie/visuale/">interesting discussion of the history of and ideas behind the workshop</a>.)</p><p><em>Posted by <a href="/about">Robert Kosara</a> on November 09, 2009</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2009/i-want-to-beliv.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const iWantToBeliv = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  iWantToBeliv as default
};
