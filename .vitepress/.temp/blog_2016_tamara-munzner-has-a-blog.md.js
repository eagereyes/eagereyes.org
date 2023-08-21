import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Link: Tamara Munzner Has A Blog!","description":"Late last year, Tamara Munzner started a blog, called Vis &amp; More. So far, she mostly writes in response to Stephen Few's postings late last year about some recent visualization papers. Her style is quite academic (most of her posting titles start with \\"On\\"…), but very readable and she has lots of interesting things to say.","frontmatter":{"title":"Link: Tamara Munzner Has A Blog!","description":"Late last year, Tamara Munzner started a blog, called Vis &amp; More. So far, she mostly writes in response to Stephen Few's postings late last year about some recent visualization papers. Her style is quite academic (most of her posting titles start with \\"On\\"…), but very readable and she has lots of interesting things to say.","date":"2016-01-27T20:16:26.000Z","tags":"blog/2015","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2014/12/TamaraMunzner.jpg","outline":false},"headers":[],"relativePath":"blog/2016/tamara-munzner-has-a-blog.md","filePath":"blog/2016/tamara-munzner-has-a-blog.md"}`);
const _sfc_main = { name: "blog/2016/tamara-munzner-has-a-blog.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="link-tamara-munzner-has-a-blog" tabindex="-1">Link: Tamara Munzner Has A Blog! <a class="header-anchor" href="#link-tamara-munzner-has-a-blog" aria-label="Permalink to &quot;Link: Tamara Munzner Has A Blog!&quot;">​</a></h1><p>Late last year, Tamara Munzner started a blog, called <a href="https://tamaramunzner.wordpress.com">Vis &amp; More</a>. So far, she mostly writes in response to Stephen Few&#39;s postings late last year about some recent visualization papers. Her style is quite academic (most of her posting titles start with &quot;On&quot;…), but very readable and she has lots of interesting things to say.</p><p>Just in case you don&#39;t know her: <a href="https://www.cs.ubc.ca/~tmm/">Tamara Munzner</a> is a professor of computer science at University of British Columbia in Vancouver. She has been working in the field for many years, and last year published <a href="https://www.cs.ubc.ca/~tmm/vadbook/">a highly-regarded book</a>. Until recently, she was chair of the VIS Executive Committee, which runs the IEEE VIS conference and is involved in many other important decisions that affect the academic visualization community.</p><p>I&#39;m glad to see that despite her love for hand-coded HTML on her faculty website, she has opted to host her blog on wordpress.com. I&#39;m looking forward to her future posts – and perhaps she can even inspire a few other academics to take up blogging!</p><p><em>Posted by <a href="/about">Robert Kosara</a> on January 27, 2016</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2016/tamara-munzner-has-a-blog.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tamaraMunznerHasABlog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tamaraMunznerHasABlog as default
};
