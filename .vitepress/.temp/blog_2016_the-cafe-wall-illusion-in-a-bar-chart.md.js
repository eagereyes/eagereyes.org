import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"The Café Wall Illusion in a Bar Chart","description":"The Café Wall Illusion makes you to see perfectly parallel lines as being at an angle. It's a curiosity and a cool perceptual illusion – except when it shows up in a bar chart, as it did in this example.","frontmatter":{"title":"The Café Wall Illusion in a Bar Chart","description":"The Café Wall Illusion makes you to see perfectly parallel lines as being at an angle. It's a curiosity and a cool perceptual illusion – except when it shows up in a bar chart, as it did in this example.","date":"2016-06-30T08:00:33.000Z","tags":"Perception","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2016/06/cafe-wall-bars.png","outline":false},"headers":[],"relativePath":"blog/2016/the-cafe-wall-illusion-in-a-bar-chart.md","filePath":"blog/2016/the-cafe-wall-illusion-in-a-bar-chart.md"}`);
const _sfc_main = { name: "blog/2016/the-cafe-wall-illusion-in-a-bar-chart.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/06/cafe-wall-bars.png" width="575" height="373"></p><h1 id="the-cafe-wall-illusion-in-a-bar-chart" tabindex="-1">The Café Wall Illusion in a Bar Chart <a class="header-anchor" href="#the-cafe-wall-illusion-in-a-bar-chart" aria-label="Permalink to &quot;The Café Wall Illusion in a Bar Chart&quot;">​</a></h1><p><a href="https://en.wikipedia.org/wiki/Café_wall_illusion">The Café Wall Illusion</a> makes you to see perfectly parallel lines as being at an angle. It&#39;s a curiosity and a cool perceptual illusion – except when it shows up in a bar chart, as it did in this example.</p><p>The classic café wall illusion was first spotted on a tiled wall, where the misaligned black and white tiles were making the lines look all wonky (<a href="https://commons.wikimedia.org/wiki/File:Café_wall.svg">image from Wikipedia</a>).</p><img class="aligncenter size-full wp-image-9360" src="https://media.eagereyes.org/wp-content/uploads/2016/06/cafe-wall.png" alt="cafe-wall" width="660" height="412"><p><a href="http://allisontmccann.com">FiveThirtyEight journalist Allison McCann</a> recently <a href="https://twitter.com/atmccann/status/735593381896818690" target="_blank" rel="noreferrer">tweeted this image</a>, which also shows the illusion. This is the first time I&#39;ve ever seen it in a bar chart.</p><p>It looks like that zero line is angled up slightly. I wonder if this would cause people to be slightly biased in their reading of the data.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on June 30, 2016</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://gravatar.com/keeskramer" rel="nofollow noopener" target="_blank">keeskramer</a> says…</p><blockquote><p>If you just order the bars left to right by x-axis-value there is no problem.</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2016/the-cafe-wall-illusion-in-a-bar-chart.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theCafeWallIllusionInABarChart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theCafeWallIllusionInABarChart as default
};
