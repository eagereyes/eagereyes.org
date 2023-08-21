import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Blogging BOF at VisWeek","description":"Enrico Bertini and I will host a Birds-of-a-Feather meeting Thursday night on Blogging in Visualization. We will talk about our experiences, answer questions, and hopefully dispel some myths about blogging in science. Whether you're going or not, I recommend reading the article You Aren’t Blogging Yet?!? in The Scientist.","frontmatter":{"title":"Blogging BOF at VisWeek","description":"Enrico Bertini and I will host a Birds-of-a-Feather meeting Thursday night on Blogging in Visualization. We will talk about our experiences, answer questions, and hopefully dispel some myths about blogging in science. Whether you're going or not, I recommend reading the article You Aren’t Blogging Yet?!? in The Scientist.","date":"2010-10-25T18:19:58.000Z","tags":"VisWeek","featuredImage":null,"outline":false},"headers":[],"relativePath":"blog/2010/blogging-bof-at-visweek.md","filePath":"blog/2010/blogging-bof-at-visweek.md"}`);
const _sfc_main = { name: "blog/2010/blogging-bof-at-visweek.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="blogging-bof-at-visweek" tabindex="-1">Blogging BOF at VisWeek <a class="header-anchor" href="#blogging-bof-at-visweek" aria-label="Permalink to &quot;Blogging BOF at VisWeek&quot;">​</a></h1><p><a href="http://fellinlovewithdata.com/">Enrico Bertini</a> and I will host a Birds-of-a-Feather meeting Thursday night on <em>Blogging in Visualization</em>. We will talk about our experiences, answer questions, and hopefully dispel some myths about blogging in science. Whether you&#39;re going or not, I recommend reading the article <em><a href="http://www.the-scientist.com/article/display/57713/">You Aren’t Blogging Yet?!?</a></em> in <em>The Scientist</em>.</p><p>One the biggest issues, which was again raised in the Doctoral Colloquium when I mentioned blogging, is giving away too much about your research. There is no doubt that you have to be careful, but it&#39;s really not that hard to do. You can still talk about the tools you&#39;re using, papers you&#39;re reading, related thoughts, etc.</p><p>But don&#39;t let that possibility scare you away from blogging! It&#39;s easy to manage and you get a lot of benefits: becoming known in the community, promoting your work, and influencing the direction of the field more than a few papers can.</p><p>If you have more questions or doubts, come to our BOF on <em>Thursday, 7:30pm, Great Ballroom A</em> (right after the SCI Open House/Evaluation BOF).</p><p><em>Posted by <a href="/about">Robert Kosara</a> on October 25, 2010</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2010/blogging-bof-at-visweek.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bloggingBofAtVisweek = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bloggingBofAtVisweek as default
};
