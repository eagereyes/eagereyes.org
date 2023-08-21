import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Laws of Attraction: From Perceived Forces to Conceptual Similarity","description":"Can gravity have an influence on how the data in a chart is perceived? How do different kinds of connections between circles change our perception of the distance between them? And what does that mean for how strongly we perceive them to be connected? We conducted some user studies to find out.","frontmatter":{"title":"Laws of Attraction: From Perceived Forces to Conceptual Similarity","description":"Can gravity have an influence on how the data in a chart is perceived? How do different kinds of connections between circles change our perception of the distance between them? And what does that mean for how strongly we perceive them to be connected? We conducted some user studies to find out.","date":"2010-10-21T21:03:55.000Z","tags":"VisWeek, papers","featuredImage":"https://media.eagereyes.org/media/2010/attraction.png"},"headers":[],"relativePath":"blog/2010/laws-of-attraction.md","filePath":"blog/2010/laws-of-attraction.md"}');
const _sfc_main = { name: "blog/2010/laws-of-attraction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2010/attraction.png" alt="" width="560" height="362"></p><h1 id="laws-of-attraction-from-perceived-forces-to-conceptual-similarity" tabindex="-1">Laws of Attraction: From Perceived Forces to Conceptual Similarity <a class="header-anchor" href="#laws-of-attraction-from-perceived-forces-to-conceptual-similarity" aria-label="Permalink to &quot;Laws of Attraction: From Perceived Forces to Conceptual Similarity&quot;">​</a></h1><p>Can gravity have an influence on how the data in a chart is perceived? How do different kinds of connections between circles change our perception of the distance between them? And what does that mean for how strongly we perceive them to be connected? We conducted some user studies to find out.</p><h2 id="gravity" tabindex="-1">Gravity <a class="header-anchor" href="#gravity" aria-label="Permalink to &quot;Gravity&quot;">​</a></h2><p>The motivation for this study came from <a href="/blog/2010/paper-implied-dynamics-in-information-visualization">an earlier paper</a>, were we had found that people interpreted charts that had an unequal distribution of &quot;weight&quot; (darker vs. lighter colors) as unstable. In fact, some of them even reported that they thought that an unbalanced donut chart might roll away. This can only be explained if there is a notion of gravity that can turn such an imbalance into movement.</p><p>So the goal of our first study was to look for other effects that were caused by gravity. One of them was a downward shift of the remembered location of bubbles in a scatterplot, the other was how structures in the data (like clusters) would attract a bubble.</p><p>What we found is quite amazing: gravity does have an effect, and it is comparable in size to gravity effects found in earlier work that used drawings of realistic scenes. Our minds clearly did not evolve to deal with purely abstract images and spaces, but rather expect the effects of universal natural facts like gravity even in entirely abstract images. Clusters of points also attract other points, so that the remembered location of a bubble shifts towards them.</p><p>What does that mean? It seems that there is an inherent problem with a lot of charts that can lead to errors in reading and recalling the data. We have only discovered the possibility for this so far, and more work is clearly needed. But this is opens up a lot of interesting questions.</p><h2 id="attraction" tabindex="-1">Attraction <a class="header-anchor" href="#attraction" aria-label="Permalink to &quot;Attraction&quot;">​</a></h2><p>In a related study, we looked at how different visual properties make an object appear closer to another object than it is. These properties included similar colors and sizes, lines between them, frames around them, etc.</p><p>While connecting lines are known to, well, connect objects, we found that they reduce the perceived distance between the objects they connect. The same is true for an outline around the objects and a filled background between them (these are the significant ones).</p><p>When comparing how strongly each of these properties connects the two bubbles conceptually, it turns out that this is predicted quite well by how much each of these properties seemingly move the objects towards each other.</p><p>This opens up new possibilities, like being able to test and measure how clearly conceptual information will be read from a diagram by testing for the shift caused by the visual attributes used. This is theory that is not just interesting and scientifically sound, but useful.</p><hr><p>Caroline Ziemkiewicz, Robert Kosara, <a href="/publications/Ziemkiewicz-InfoVis-2010">Laws of Attraction: From Perceived Forces to Conceptual Similarity</a>, <em>Transactions on Visualization and Computer Graphics (Proceedings InfoVis)</em>, 2010.</p><p>The paper will be presented at VisWeek 2010 in the <a href="http://vis.computer.org/VisWeek2010/schedule/thursday.html">first morning session on Thursday</a>, <em>Perception and Cognition</em>.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on October 21, 2010</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2010/laws-of-attraction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lawsOfAttraction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lawsOfAttraction as default
};
