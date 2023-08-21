import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Link: The NIPS Experiment","description":"The conference on Neural Information Processing Systems (NIPS) has conducted a fascinating experiment: split the program committee into two and get 10% of submissions reviewed by both. The article I'm linking to above has a great analysis of what they found (and it's not encouraging).","frontmatter":{"title":"Link: The NIPS Experiment","description":"The conference on Neural Information Processing Systems (NIPS) has conducted a fascinating experiment: split the program committee into two and get 10% of submissions reviewed by both. The article I'm linking to above has a great analysis of what they found (and it's not encouraging).","date":"2015-11-17T22:54:02.000Z","tags":"blog/2015","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/11/nips-teaser.png","outline":false},"headers":[],"relativePath":"blog/2015/the-nips-experiment.md","filePath":"blog/2015/the-nips-experiment.md"}`);
const _sfc_main = { name: "blog/2015/the-nips-experiment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="link-the-nips-experiment" tabindex="-1">Link: The NIPS Experiment <a class="header-anchor" href="#link-the-nips-experiment" aria-label="Permalink to &quot;Link: The NIPS Experiment&quot;">​</a></h1><p>The conference on Neural Information Processing Systems (NIPS) <a href="http://blog.mrtz.org/2014/12/15/the-nips-experiment.html">has conducted a fascinating experiment</a>: split the program committee into two and get 10% of submissions reviewed by both. The article I&#39;m linking to above has a great analysis of what they found (and it&#39;s not encouraging).</p><p>This would be a great experiment to run at VIS. Anybody who has spent any time publishing papers has seen reviews that were unnecessarily harsh or too forgiving. Striking the right balance is difficult, and collecting some data on how well the process works is definitely important.</p><p>For some context on NIPS, I <a href="https://eagereyes.org/blog/2010/nips">wrote about the conference a while ago</a>.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on November 17, 2015</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/the-nips-experiment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theNipsExperiment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theNipsExperiment as default
};
