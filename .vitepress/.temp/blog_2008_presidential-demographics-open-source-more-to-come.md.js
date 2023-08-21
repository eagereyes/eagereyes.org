import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Presidential Demographics as Open-Source, More to Come","description":"The EagerEyes Labs' mission is to provide tools to gain insight into relevant data to everybody. As part of that, the plan has always been to release the source code. The first piece of code is now published, and more is coming.","frontmatter":{"title":"Presidential Demographics as Open-Source, More to Come","description":"The EagerEyes Labs' mission is to provide tools to gain insight into relevant data to everybody. As part of that, the plan has always been to release the source code. The first piece of code is now published, and more is coming.","date":"2008-08-31T21:10:54.000Z","tags":null,"featuredImage":null,"outline":false},"headers":[],"relativePath":"blog/2008/presidential-demographics-open-source-more-to-come.md","filePath":"blog/2008/presidential-demographics-open-source-more-to-come.md"}`);
const _sfc_main = { name: "blog/2008/presidential-demographics-open-source-more-to-come.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="presidential-demographics-as-open-source-more-to-come" tabindex="-1">Presidential Demographics as Open-Source, More to Come <a class="header-anchor" href="#presidential-demographics-as-open-source-more-to-come" aria-label="Permalink to &quot;Presidential Demographics as Open-Source, More to Come&quot;">​</a></h1><p>The EagerEyes Labs&#39; mission is to provide tools to gain insight into <a href="/communication/Visual-Display-of-Relevant-Information.html">relevant data</a> to everybody. As part of that, the plan has always been to release the source code. The first piece of code is now published, and more is coming.</p><p>I am starting with the most recent, the <a href="/applications/PresidentialDemographicsII.html">Presidential Demographics</a> applet. It is <a href="https://github.com/eagereyes/PresidentialDemographics">available as a project on github</a>. It&#39;s an Eclipse project that you can import directly into Eclipse or use the contained source files with any other Java IDE.</p><p>This particular applet may not lend itself to massive distributed development, but perhaps somebody will find it useful. And there are more complex things coming that will perhaps lead to some community development.</p><p>I am currently reworking the code for the <a href="/Applications/ZIPScribbleMap.html">ZIPScribble Maps</a>, and am planning on releasing that once it&#39;s in better shape (and depends on fewer external libraries). Future applets (and there are more in the works) will be published with source as much as possible.</p><p>Nathan of Flowing Data recently wrote a <a href="http://flowingdata.com/2008/08/29/a-case-for-open-source-data-visualization/">posting on open source and the question how &quot;open&quot; we should be</a>. I couldn&#39;t help but write in a comment that releasing your code should be a condition for publication. It&#39;s really unconscionable that we as academics sit on our code rather than sharing and building on it. So here&#39;s a first step in that direction.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on August 31, 2008</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…</p><blockquote><p>A great first step! I&#39;ll be looking forward to seeing your other code as it becomes available.</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2008/presidential-demographics-open-source-more-to-come.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const presidentialDemographicsOpenSourceMoreToCome = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  presidentialDemographicsOpenSourceMoreToCome as default
};
