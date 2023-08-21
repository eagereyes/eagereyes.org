import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Encoding vs. Decoding","description":"Visualization techniques encode data into visual shapes and colors. We assume that what the user of a visualization does is decode those values, but things aren’t that simple.","frontmatter":{"title":"Encoding vs. Decoding","description":"Visualization techniques encode data into visual shapes and colors. We assume that what the user of a visualization does is decode those values, but things aren’t that simple.","date":"2017-02-20T21:25:18.000Z","tags":"attention","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2017/02/vispipeline-teaser.png"},"headers":[],"relativePath":"blog/2017/encoding-vs-decoding.md","filePath":"blog/2017/encoding-vs-decoding.md"}');
const _sfc_main = { name: "blog/2017/encoding-vs-decoding.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2017/02/vispipeline-teaser.png" alt="" width="720" height="500"></p><h1 id="encoding-vs-decoding" tabindex="-1">Encoding vs. Decoding <a class="header-anchor" href="#encoding-vs-decoding" aria-label="Permalink to &quot;Encoding vs. Decoding&quot;">​</a></h1><p>Visualization techniques encode data into visual shapes and colors. We assume that what the user of a visualization does is decode those values, but things aren’t that simple.</p><h2 id="encoding" tabindex="-1">Encoding <a class="header-anchor" href="#encoding" aria-label="Permalink to &quot;Encoding&quot;">​</a></h2><p>When a program draws a bar chart, it calculates the length of the bars from the numbers it’s supposed to represent. When it draws a pie chart, it calculates angles. When it draws a scatterplot, it looks at two numbers for each data point and turns those into coordinates to draw a shape.</p><p>We understand the encoding part very well. There’s nothing mysterious about how a chart comes about, it’s a mechanical process.</p><p>This is also where we have much of the theory of visualization, such as it is. Bertin’s retinal variables, despite their name, are all about encoding. Likewise, Wilkinson’s Grammar of Graphics has a formalism for many different ways of encoding numbers.</p><p>Data properties, like whether a data field or column is numerical vs. categorical, whether there’s a meaningful zero, etc., are all about encoding. This is the stuff that lives inside the machine, and that we can formalize very easily.</p><h2 id="decoding" tabindex="-1">Decoding <a class="header-anchor" href="#decoding" aria-label="Permalink to &quot;Decoding&quot;">​</a></h2><p>When it comes to decoding, things get a lot messier. What do we decode? We like to assume that decoding just reverses the encoding: we read the values from the visualization. But not only don’t we do that, we do many other things that are surprisingly poorly understood.</p><p>In a bar chart, we rarely look at individual bars. Instead, we compare them to each other. We also look at the shape of the plot. Which is why being able to sort a chart is incredibly important (charts are from <a href="/blog/2016/all-those-misleading-election-maps">this posting on problems with election maps</a>).</p><p align="center"><img class="aligncenter size-full wp-image-9772" src="https://media.eagereyes.org/wp-content/uploads/2016/11/states-alpha.png" alt="" width="596" height="363"></p><p align="center"><img class="aligncenter size-full wp-image-9773" src="https://media.eagereyes.org/wp-content/uploads/2016/11/states-sorted.png" alt="" width="596" height="363"></p><p>In a pie chart, we presumably compare a slice to the whole. Except we also compare slices to each other, of course. And that thing about the angle? Well, we’re apparently <a href="/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results">not actually reading it that way</a>.</p><p>It gets even more interesting when we look at complex charts like scatterplots, parallel coordinates, etc. In a scatterplot, nobody compares two data points along two axes. Instead, we look at the overall shape. That gives us an idea of correlation (which we’re surprisingly good at estimating), clusters and density, and outliers. Those are much more interesting than merely looking at data values.</p><h2 id="the-value-of-visualization" tabindex="-1">The Value of Visualization <a class="header-anchor" href="#the-value-of-visualization" aria-label="Permalink to &quot;The Value of Visualization&quot;">​</a></h2><p>If visualization were about decoding values from charts, things like aspect ratio would not matter; the number of bars between the two you’re comparing would not matter; the orientation of slices in a pie chart would not matter.</p><p>If it were about decoding values, we would not be getting anywhere as much out of visualization as we do. We would not be getting correlation or clusters or outliers from a scatterplot. There would be little point in drawing pictures from data at all.</p><p>What makes visualization powerful is our ability to go beyond the mere decoding of values from a chart. That makes it interesting, but it also makes it complicated. So far, we have focused our understanding largely on the encoding side of visualization. We need to learn much more about the complex and powerful decoding side.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on February 20, 2017</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p>Bilal says…</p><blockquote><p>Very good point, thank you Robert</p></blockquote><p><a href="http://twitter.com/rybesh" rel="nofollow noopener" target="_blank">Ryan Shaw (@rybesh)</a> says…</p><blockquote><p>One good way to start understanding the value of visualization better might be to choose a new metaphor: <a href="https://goo.gl/zhZKgh" target="_blank" rel="noreferrer">https://goo.gl/zhZKgh</a></p></blockquote><p><a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…</p><blockquote><p>Ryan, that link doesn&#39;t appear to be working. I&#39;m just getting an Access Denied error.</p></blockquote><p><a href="http://glasbrint.com" rel="nofollow noopener" target="_blank">Alex Cookson</a> says…</p><blockquote><p>I had the same issue. Here&#39;s a working link:</p><p><a href="http://www.academia.edu/6290150/The_Conduit_Metaphor_A_Case_of_Frame_Conflict_in_Our_Language_about_Languag" target="_blank" rel="noreferrer">http://www.academia.edu/6290150/The_Conduit_Metaphor_A_Case_of_Frame_Conflict_in_Our_Language_about_Languag</a></p></blockquote><p><a href="http://glasbrint.com" rel="nofollow noopener" target="_blank">Alex Cookson</a> says…</p><blockquote><p>I&#39;ll also follow up with a link to the Wikipedia article. As a layman, I found the article difficult to follow.</p><p><a href="https://en.wikipedia.org/wiki/Conduit_metaphor" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Conduit_metaphor</a></p></blockquote><p><a href="http://www.culturerover.com" rel="nofollow noopener" target="_blank">Michael Kramer</a> says…</p><blockquote><p>This brought to mind the famous essay by Stuart Hall, <a href="https://faculty.georgetown.edu/irvinem/theory/SH-Encoding-Decoding.pdf" target="_blank" rel="noreferrer">https://faculty.georgetown.edu/irvinem/theory/SH-Encoding-Decoding.pdf</a><a href="https://en.wikipedia.org/wiki/Encoding/decoding_model_of_communication" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Encoding/decoding_model_of_communication</a></p></blockquote><p>Stephen Hampshire says…</p><blockquote><p>Excellent blog post, and an excellent article too. I particularly like &quot;Human communication will almost always go astray unless real energy is expended&quot; p. 295</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2017/encoding-vs-decoding.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const encodingVsDecoding = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  encodingVsDecoding as default
};
