import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Link: PolicyViz Blog and Podcast","description":"Jon Schwabish is running a blog and podcast called PolicyViz. In both, he talks about communicating data and how to deal with numbers for the general public. He recently had two interesting guests back-to-back on his podcast: Nigel Holmes and Edward Tufte. Both episodes are well worth listening to.","frontmatter":{"title":"Link: PolicyViz Blog and Podcast","description":"Jon Schwabish is running a blog and podcast called PolicyViz. In both, he talks about communicating data and how to deal with numbers for the general public. He recently had two interesting guests back-to-back on his podcast: Nigel Holmes and Edward Tufte. Both episodes are well worth listening to.","date":"2015-10-13T19:53:29.000Z","tags":"blog/2015","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/10/policyviz-teaser.jpg","outline":false},"headers":[],"relativePath":"blog/2015/policyviz-blog-and-podcast.md","filePath":"blog/2015/policyviz-blog-and-podcast.md"}');
const _sfc_main = { name: "blog/2015/policyviz-blog-and-podcast.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="link-policyviz-blog-and-podcast" tabindex="-1">Link: PolicyViz Blog and Podcast <a class="header-anchor" href="#link-policyviz-blog-and-podcast" aria-label="Permalink to &quot;Link: PolicyViz Blog and Podcast&quot;">​</a></h1><p>Jon Schwabish is running a blog and podcast called <a href="https://policyviz.com">PolicyViz</a>. In both, he talks about communicating data and how to deal with numbers for the general public. He recently had two interesting guests back-to-back on his podcast: Nigel Holmes and Edward Tufte. Both episodes are well worth listening to.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on October 13, 2015</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/policyviz-blog-and-podcast.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const policyvizBlogAndPodcast = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  policyvizBlogAndPodcast as default
};
