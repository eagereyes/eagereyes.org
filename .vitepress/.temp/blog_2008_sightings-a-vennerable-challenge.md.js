import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Sightings: A Vennerable Challenge","description":"Venn diagrams are a strange mix of structure and data visualization. In my latest Sightings column (PDF) for American Scientist, I use the example of a visualization challenge from last year to discuss different ways to show the same data about diagnosis techniques for autism in young children. This also sparked the launch of a new site feature: Ask Eagereyes.","frontmatter":{"title":"Sightings: A Vennerable Challenge","description":"Venn diagrams are a strange mix of structure and data visualization. In my latest Sightings column (PDF) for American Scientist, I use the example of a visualization challenge from last year to discuss different ways to show the same data about diagnosis techniques for autism in young children. This also sparked the launch of a new site feature: Ask Eagereyes.","date":"2008-12-21T22:01:24.000Z","tags":"Sightings","featuredImage":"https://media.eagereyes.org/media/2008/Sigthings-VennerableChallenge.jpg","outline":false},"headers":[],"relativePath":"blog/2008/sightings-a-vennerable-challenge.md","filePath":"blog/2008/sightings-a-vennerable-challenge.md"}');
const _sfc_main = { name: "blog/2008/sightings-a-vennerable-challenge.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2008/Sigthings-VennerableChallenge.jpg" alt="Sightings: A Vennerable Challenge" width="452" height="300" border="0"></p><h1 id="sightings-a-vennerable-challenge" tabindex="-1">Sightings: A Vennerable Challenge <a class="header-anchor" href="#sightings-a-vennerable-challenge" aria-label="Permalink to &quot;Sightings: A Vennerable Challenge&quot;">​</a></h1><p>Venn diagrams are a strange mix of structure and data visualization. In my latest <a href="http://www.americanscientist.org/issues/pub/2009/1/a-vennerable-challenge"><em>Sightings</em> column</a> (<a href="http://amsciadmin.eresources.com/libraries/documents/200812151345447084-2009-01Kosara-Sightings.pdf">PDF</a>) for <em><a href="http://www.americanscientist.org/">American Scientist</a></em>, I use the example of a visualization challenge from last year to discuss different ways to show the same data about diagnosis techniques for autism in young children. This also sparked the launch of a new site feature: <a href="/ask"><em>Ask Eagereyes</em></a>.</p><p>Regular readers of this website will perhaps remember the <a href="http://nuit-blanche.blogspot.com/2007/09/on-difficulty-of-autism-diagnosis-can.html">Autism diagnosis accuracy redesign challenge</a> originally posted on Nuit Blanche, which asked for better ways to show data that had been displayed in a Venn diagram. There were <a href="http://nuit-blanche.blogspot.com/2007/10/judging-autism-charts-challenge.html">a number of interesting designs</a>, and I also <a href="/Applications/AutismDiagnosisAccuracy.html">contributed one</a>. All of these were clearly better than the original, but I was most interested in the ones that showed the structure of the data. So I ended up talking about my own redesign as well as Patrick Murphy&#39;s redesign of mine.</p><p><a href="/ask"><em>Ask EagerEyes</em></a> is an extension of what I am trying to achieve with <em>Sightings</em> (which I took over from Felice Frankel in the summer): to make the scientific community aware of information visualization and to get a better understanding of the problems scientists are facing in analyzing their data and communicating their results. The autism case study is a great example for the need for a better understanding of these questions.</p><p>But <em>Ask EagerEyes</em> is not limited to scientific data. If you have any kind of data you would like to understand better, or have a visualization of data that you think could be improved, drop me a note. The reason this is not part of a forum is that I want to make it possible to discuss problems that involve confidential or otherwise unpublished data. Eventually, of course, I hope to be able to talk about the problems posed and solutions found on this site. Some of the questions might also become challenges for my dear readers.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on December 21, 2008</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://PeltierTech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…</p><blockquote><p>The tree chart below the first bar chart has an unfortunate error. While this is an effective way to describe the bars in the chart, one of the [n] shapes is colored green instead of yellow, which threw off comprehension for a moment.</p><p>Not a typo, but an issue with visualization effectiveness, is the use of the colored Venn diagram as a legend for the colored bar chart. This was much more difficult to comprehend than the version with the tree.</p></blockquote><p>Robert Kosara says…</p><blockquote><p>Thanks for catching that, that&#39;s a really dumb mistake. I don&#39;t know how we missed that. It seems like this was introduced when the graph was redrawn for the magazine layout.</p><p>Patrick&#39;s colored Venn diagram neatly ties together the original idea from the paper with the sorted bars. It helps people navigate the structure who are more familiar or comfortable with the Venn diagram than a tree structure. But in terms of navigation, I agree that the tree works better.</p></blockquote><p>Robert Kosara says…</p><blockquote><p>This has been fixed in the online version. Thanks again for spotting this.</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2008/sightings-a-vennerable-challenge.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sightingsAVennerableChallenge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sightingsAVennerableChallenge as default
};
