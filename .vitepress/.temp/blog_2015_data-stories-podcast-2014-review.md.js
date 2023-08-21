import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Link: Data Stories Podcast 2014 Review","description":"Episode 46 of the Data Stories podcast features Andy Kirk and yours truly in an epic battle for podcast dominance a review of the year 2014.","frontmatter":{"title":"Link: Data Stories Podcast 2014 Review","description":"Episode 46 of the Data Stories podcast features Andy Kirk and yours truly in an epic battle for podcast dominance a review of the year 2014.","date":"2015-01-22T07:17:26.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/01/ds46.png","outline":false},"headers":[],"relativePath":"blog/2015/data-stories-podcast-2014-review.md","filePath":"blog/2015/data-stories-podcast-2014-review.md"}');
const _sfc_main = { name: "blog/2015/data-stories-podcast-2014-review.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="link-data-stories-podcast-2014-review" tabindex="-1">Link: Data Stories Podcast 2014 Review <a class="header-anchor" href="#link-data-stories-podcast-2014-review" aria-label="Permalink to &quot;Link: Data Stories Podcast 2014 Review&quot;">​</a></h1><p><a href="http://datastori.es/data-stories-46-year-2014-review-w-robert-kosara-and-andy-kirk/">Episode 46 of the <em>Data Stories</em> podcast</a> features <a href="http://www.visualisingdata.com">Andy Kirk</a> and yours truly in <del>an epic battle for podcast dominance</del> a review of the year 2014. This complements well my <a title="The State of Information Visualization, 2015" href="https://eagereyes.org/blog/2015/the-state-of-information-visualization-2015">State of Information Visualization</a> posting, and of course there is a bit of overlap (I wrote that posting after we recorded the episode – Moritz and Enrico are <em>so slow</em>). There are lots of differences though, and the podcast has the advantage of not just me talking. We covered a lot of ground there, starting from a general down about the year, to end up finding quite a few things to talk about (just check out the long list of links in the show notes!).</p><p><em>Posted by <a href="/about">Robert Kosara</a> on January 22, 2015</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/data-stories-podcast-2014-review.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dataStoriesPodcast2014Review = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dataStoriesPodcast2014Review as default
};
