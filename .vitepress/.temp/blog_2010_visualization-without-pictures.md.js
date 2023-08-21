import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Visualization Without Pictures","description":"A question that I have been asked a few times recently is: what about visualization for the blind? Would it make sense to provide a textual representation? What about a representation that you can feel and touch, isn't that a visualization? And is there perhaps more to visualization than just the pictures?","frontmatter":{"title":"Visualization Without Pictures","description":"A question that I have been asked a few times recently is: what about visualization for the blind? Would it make sense to provide a textual representation? What about a representation that you can feel and touch, isn't that a visualization? And is there perhaps more to visualization than just the pictures?","date":"2010-10-10T22:52:06.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/media/2010/empty-frame.jpg"},"headers":[],"relativePath":"blog/2010/visualization-without-pictures.md","filePath":"blog/2010/visualization-without-pictures.md"}`);
const _sfc_main = { name: "blog/2010/visualization-without-pictures.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2010/empty-frame.jpg" alt="" width="560" height="374"></p><h1 id="visualization-without-pictures" tabindex="-1">Visualization Without Pictures <a class="header-anchor" href="#visualization-without-pictures" aria-label="Permalink to &quot;Visualization Without Pictures&quot;">​</a></h1><p>A question that I have been asked a few times recently is: what about visualization for the blind? Would it make sense to provide a textual representation? What about a representation that you can feel and touch, isn&#39;t that a visualization? And is there perhaps more to visualization than just the pictures?</p><h2 id="visual-and-non-visual-visualization" tabindex="-1">Visual and Non-Visual Visualization? <a class="header-anchor" href="#visual-and-non-visual-visualization" aria-label="Permalink to &quot;Visual and Non-Visual Visualization?&quot;">​</a></h2><p>The word alone already makes it quite clear that visualization has to be visual. There are examples of using other modalities like sound, e.g., <a href="http://infosthetics.com/archives/2010/10/a_scatter_plot_alternative_for_the_visually_impaired.html">to explore a scatterplot</a>, but those are clearly not visual; Andrew&#39;s description of this sonification example as &quot;non-visual visualization&quot; is a rather obvious oxymoron.</p><p>But consider an even simpler example than an interactive sonification, what about a simple tangible scatterplot? It&#39;s not hard to imagine how to do that, and there may be Braille displays that are able to do that. Is that a visualization?</p><p>Since that kind of representation would not be viewed but rather touched, it&#39;s clearly not a <em>visual</em>ization. The mechanisms are not entirely different between a visualization and a haptic representation, though. The key in both cases is spatial thinking, and that does not require vision. Blind people can navigate through cities and can imagine spatial relationships, so there is no reason why they would not be able to understand a haptic scatterplot. But there is still a difference between that and a visualization.</p><p>Our visual perception works very differently from our hearing, touch, and other senses. Not only is vision much more prominent than our other senses (just think about where you would locate your self: right behind your eyes), it is also an extremely powerful way of detecting patterns and quickly categorizing the world.</p><p>Visual representations have their own, specific rules. Colors, shapes, textures, orientations, etc. are very specific to vision. We can also look at a large number of things at the same time and pick up certain properties in parallel and within a fraction of a second (this is called <em>preattentive perception</em>). Hearing is very different: it is much more serial, with fewer different channels we can differentiate and a very specific idea of what patterns have to sound like to be pleasant (or even just bearable).</p><p>Munging all these things together and calling it all visualization is not just lazy and wrong, it also means ignoring what makes our senses special. Just like a painting and a piece of music are completely different things, we have to understand how different modalities work before we can make effective use of them.</p><h2 id="beyond-the-pictures" tabindex="-1">Beyond the Pictures <a class="header-anchor" href="#beyond-the-pictures" aria-label="Permalink to &quot;Beyond the Pictures&quot;">​</a></h2><p>But the bigger question is: if we take away the pictures, what remains? Is visualization simply a different modality of data analysis? What exactly does it mean to do visualization without pictures, anyway?</p><p>When Kaiser Fung <a href="/criticism/kaiser-fung-numbers-rule-your-world">talks about statistical thinking</a> without actually showing specific formulas or data, he describes statistics without using statistics. I wonder if we would be able to write a similar book about visualization: not just compelling case studies that show real-world impact, but descriptions of using visual tools without showing pictures. How did the use of a scatterplot matrix help solve a particular problem? Why wouldn&#39;t parallel coordinates have worked in this case? Why would a statistician have missed an important clue in this case?</p><p>Such a description requires an understanding of the underlying properties of different kinds of visualizations, how they relate to data, and what they can be used for. It also requires a language to talk about visual structures and what they mean, beyond just statistical terms. There are often structures that can be found in visualizations that do not cleanly map to statistical features, but that provide hints that guide further analysis.</p><p>I am convinced that there is more to visualization than just the pictures. But that does not mean that visualization can be done without pictures; quite the opposite. What we lack is an idea of the different levels at which visualization can be understood, and an effective way to communicate that. As we develop a clearer view of all the things that visualization is, we will be able to make a better case for it, and make people see the value of this field, even if they don&#39;t (and don&#39;t want to) know all the little details.</p><p>We can already do some of this: talking about visual structures in a visualization is nothing new. Perhaps one of the ways to get a deeper understanding of visualization is to put the images away for a while while we think about visualization without actually doing it.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on October 10, 2010</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p>butch1507 says…</p><blockquote><p>A interesting question but I think we have other factors involved that are not mentioned.It&#39;s my belief that a form of visualization templet does exist even without vison being present .Its a older known proven strategy used for teaching letter formation that by closing the eyes and tracing the tactile outline of alphabetical letter ,that the child is able to form the letter more effectively on pencil and paper afterwords as if a visual templet is formed in the mind .I&#39;m not sure who discovered the technique but Barbara Vittalle mentions it in Unicorns are Real ,and I believe Eric Jenson-author and Sally Smith -owner of the Lab School used it . Butch1507</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2010/visualization-without-pictures.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visualizationWithoutPictures = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  visualizationWithoutPictures as default
};
