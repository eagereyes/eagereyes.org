import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Sightings: A Little Space, Please!","description":"\\"InfoVis and SciVis face off\\" is how the American Scientist homepage teases for my latest Sightings column. While the comparison between information visualization (InfoVis) and scientific visualization (SciVis) is part of the discussion, I am also describing work by my colleague Anthony Fodor (who works in bioinformatics) to demonstrate the usefulness of InfoVis in science.","frontmatter":{"title":"Sightings: A Little Space, Please!","description":"\\"InfoVis and SciVis face off\\" is how the American Scientist homepage teases for my latest Sightings column. While the comparison between information visualization (InfoVis) and scientific visualization (SciVis) is part of the discussion, I am also describing work by my colleague Anthony Fodor (who works in bioinformatics) to demonstrate the usefulness of InfoVis in science.","date":"2009-03-04T09:13:46.000Z","tags":"Sightings","featuredImage":"https://media.eagereyes.org/media/2009/Sigthings-SpacePlease.png","outline":false},"headers":[],"relativePath":"blog/2009/sightings-a-little-space-please.md","filePath":"blog/2009/sightings-a-little-space-please.md"}');
const _sfc_main = { name: "blog/2009/sightings-a-little-space-please.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2009/Sigthings-SpacePlease.png" alt="Sightings: A Little Space, Please" width="452" height="300"></p><h1 id="sightings-a-little-space-please" tabindex="-1">Sightings: A Little Space, Please! <a class="header-anchor" href="#sightings-a-little-space-please" aria-label="Permalink to &quot;Sightings: A Little Space, Please!&quot;">​</a></h1><p>&quot;<a href="http://www.americanscientist.org/issues/pub/2009/3/a-little-space-please">InfoVis and SciVis face off</a>&quot; is how the <em>American Scientist</em> homepage teases for my latest <em>Sightings</em> column. While the comparison between information visualization (InfoVis) and scientific visualization (SciVis) is part of the discussion, I am also describing work by my colleague Anthony Fodor (who works in bioinformatics) to demonstrate the usefulness of InfoVis in science.</p><p>The inspiration for this article came from seeing my colleague&#39;s work in studying the microorganisms that live in an environment like a sewage treatment plant. He used a very simple yet highly effective visualization to examine the gathered data and to find interesting structures. As it turns out, we know next to nothing about the microorganisms in our sewage plants (or, for that matter, the oceans or our own bodies). Anthony&#39;s paper is <a href="http://aem.asm.org/cgi/content/abstract/AEM.01210-08v1">available online</a>.</p><p>But I also tried to make a broader point about scientific and information visualization, specifically Tamara Munzner&#39;s observation that InfoVis isn&#39;t unscientific, and SciVis isn&#39;t uninformative. For that, I needed to go into some depth on the difference between the two fields, and it may have ended up being a bit much for a single two-page article. But I am going to expand on this in two articles on this website in the next week or two. Specifically, the image on the first page provides a lot of food for thought and discussion that could prove to be very valuable for understanding the differences between InfoVis and SciVis.</p><p>This is my last regular <em>Sightings</em>. I may contribute again in the future, but not on a regular schedule.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on March 04, 2009</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://carlosscheidegger.wordpress.com" rel="nofollow noopener" target="_blank">Carlos Scheidegger</a> says…</p><blockquote><p>I like Tamara Munzner&#39;s point, and I wish people would just forget about the division (kudos to the VisWeek organization for trying to get everyone to move in that direction). However, I feel that simply calling the field &quot;visualization&quot; is too broad. &quot;Computational Visualization&quot;? In my mind, the word &quot;depiction&quot; gives a better idea than &quot;visualization&quot;: creating an image in Vis should be about making a point, regardless of whether it&#39;s Info or Sci. But I don&#39;t like the sound of &quot;Computational Depiction&quot;.</p><p></p></blockquote><p>Robert Kosara says…</p><blockquote><p>The problem with &quot;depiction&quot; is that it&#39;s too broad: it also includes photography, drawing, painting, etc. I don&#39;t think we&#39;re going to change the names, even though they haven&#39;t even been around that long. But they&#39;re entrenched and it&#39;s going to be difficult to find better ones (non-photorealistic rendering has tried to come up with a better name and they haven&#39;t been able to agree on something more descriptive that doesn&#39;t just say what it&#39;s not). But as long as we understand what the terms really mean and where the gray areas are, we&#39;ll be okay.</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2009/sightings-a-little-space-please.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sightingsALittleSpacePlease = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sightingsALittleSpacePlease as default
};
