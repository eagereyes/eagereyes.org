import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"What Travelling Presidential Candidates Save","description":"An anonymous commenter asked  what the savings were of the Travelling Presidential Candidate Map (ZIPTPCMap)  vs. the ZIPScribbleMap. That was not something I had even thought about, and so the result was quite surprising.","frontmatter":{"title":"What Travelling Presidential Candidates Save","description":"An anonymous commenter asked  what the savings were of the Travelling Presidential Candidate Map (ZIPTPCMap)  vs. the ZIPScribbleMap. That was not something I had even thought about, and so the result was quite surprising.","date":"2007-02-08T00:50:15.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/media/attachments/ZIPScribblevsTPC.png","outline":false},"headers":[],"relativePath":"blog/2007/what-travelling-presidential-candidates-save.md","filePath":"blog/2007/what-travelling-presidential-candidates-save.md"}');
const _sfc_main = { name: "blog/2007/what-travelling-presidential-candidates-save.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img title="ZIPScribbleMap vs. TPCMap" src="https://media.eagereyes.org/media/attachments/ZIPScribblevsTPC.png" alt="ZIPScribbleMap vs. TPCMap" width="523" height="198"></p><h1 id="what-travelling-presidential-candidates-save" tabindex="-1">What Travelling Presidential Candidates Save <a class="header-anchor" href="#what-travelling-presidential-candidates-save" aria-label="Permalink to &quot;What Travelling Presidential Candidates Save&quot;">​</a></h1><p>An anonymous commenter <a href="/Applications/ZIPTPCMap.html#comment-203">asked</a> what the savings were of the Travelling Presidential Candidate Map (<a href="/Applications/ZIPTPCMap.html">ZIPTPCMap</a>) vs. the <a href="/Applications/ZIPScribbleMap.html">ZIPScribbleMap</a>. That was not something I had even thought about, and so the result was quite surprising.</p><p>The total travel distance on the ZIPScribbleMap is 1,859,224.14km (1,155,268.3mi), while the path through the ZIPTPCMap is only 408,589.32km (253,885.63mi) long. That is a factor of almost 4.6, which is rather significant. The method used to calculate the TPC path is only about 75% optimal, so that if done properly, the factor could be well above 5.</p><p>What this shows is that it clearly pays off to follow a presidential candidate around, rather than just blindly following the ZIP code order without thinking.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on February 08, 2007</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2007/what-travelling-presidential-candidates-save.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const whatTravellingPresidentialCandidatesSave = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  whatTravellingPresidentialCandidatesSave as default
};
