import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Link: Maarten Lambrecht's List of 2018 Visualization Lists","description":"I'm not generally a fan of year-end lists, but they do provide a great way to see many fantastic pieces of work in one place. And if a simple list already does that, what might a list of lists do? Check out Maarten Lambrecht's List of 2018 Visualization Lists to find out!","frontmatter":{"title":"Link: Maarten Lambrecht's List of 2018 Visualization Lists","description":"I'm not generally a fan of year-end lists, but they do provide a great way to see many fantastic pieces of work in one place. And if a simple list already does that, what might a list of lists do? Check out Maarten Lambrecht's List of 2018 Visualization Lists to find out!","date":"2019-01-02T18:29:00.000Z","tags":"blog/2015","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2019/01/image.png","outline":false},"headers":[],"relativePath":"blog/2019/maarten-lambrechts-list-of-2018-visualization-lists.md","filePath":"blog/2019/maarten-lambrechts-list-of-2018-visualization-lists.md"}`);
const _sfc_main = { name: "blog/2019/maarten-lambrechts-list-of-2018-visualization-lists.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="link-maarten-lambrecht-s-list-of-2018-visualization-lists" tabindex="-1">Link: Maarten Lambrecht&#39;s List of 2018 Visualization Lists <a class="header-anchor" href="#link-maarten-lambrecht-s-list-of-2018-visualization-lists" aria-label="Permalink to &quot;Link: Maarten Lambrecht&#39;s List of 2018 Visualization Lists&quot;">​</a></h1><p>I&#39;m not generally a fan of year-end lists, but they do provide a great way to see many fantastic pieces of work in one place. And if a simple list already does that, what might a list of lists do? Check out <a href="http://www.maartenlambrechts.com/2018/12/31/the-list-of-2018-visualization-lists.html">Maarten Lambrecht&#39;s <em>List of 2018 Visualization Lists</em></a> to find out!</p><p>Maarten&#39;s list is largely focused on data visualization, including data journalism pieces from Reuters, The Guardian, the South China Morning Post, the New York Times, the Washington Post, and many more; but also postings about maps, satellite imagery, science photography, and illustration.</p><p>A lot of amazing work was created last year, it&#39;s worth spending some time to look over and get a sense of both the level and amount of good visualization work that&#39;s being produced today.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on January 02, 2019</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2019/maarten-lambrechts-list-of-2018-visualization-lists.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const maartenLambrechtsListOf2018VisualizationLists = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  maartenLambrechtsListOf2018VisualizationLists as default
};
