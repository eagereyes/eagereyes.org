import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Link: CG&A Article on Tapestry","description":"I've written a short piece about the Tapestry conference for the Graphically Speaking column in Computer Graphics and Applications. The article talks about the reasoning behind Tapestry, how it's different from academic conferences, and gives a few examples of talks. It even includes anecdotal evidence to show that the conference has enabled actual knowledge transfer.","frontmatter":{"title":"Link: CG&A Article on Tapestry","description":"I've written a short piece about the Tapestry conference for the Graphically Speaking column in Computer Graphics and Applications. The article talks about the reasoning behind Tapestry, how it's different from academic conferences, and gives a few examples of talks. It even includes anecdotal evidence to show that the conference has enabled actual knowledge transfer.","date":"2015-03-18T06:17:24.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/03/cga-tapestry-teaser.jpg","outline":false},"headers":[],"relativePath":"blog/2015/cga-article-on-tapestry.md","filePath":"blog/2015/cga-article-on-tapestry.md"}`);
const _sfc_main = { name: "blog/2015/cga-article-on-tapestry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/03/cga-tapestry-teaser.jpg" width="825" height="373"></p><h1 id="link-cg-a-article-on-tapestry" tabindex="-1">Link: CG&amp;A Article on Tapestry <a class="header-anchor" href="#link-cg-a-article-on-tapestry" aria-label="Permalink to &quot;Link: CG&amp;A Article on Tapestry&quot;">​</a></h1><p>I&#39;ve written <a href="http://online.qmags.com/CGA0315#pg14&amp;mode2">a short piece about the Tapestry conference</a> for the <em>Graphically Speaking</em> column in <em>Computer Graphics and Applications</em>. The article talks about the reasoning behind <a href="http://www.tapestryconference.com">Tapestry</a>, how it&#39;s different from academic conferences, and gives a few examples of talks. It even includes anecdotal evidence to show that the conference has enabled actual knowledge transfer.</p><p>If you <a href="/publications/Kosara-CGA-2015">prefer a PDF</a> to the e-reader version, you can find that in my publications.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on March 18, 2015</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/cga-article-on-tapestry.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cgaArticleOnTapestry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cgaArticleOnTapestry as default
};
