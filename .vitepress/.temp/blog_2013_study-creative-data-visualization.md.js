import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Study on Creative Data Visualization","description":"To explore how we can make it easier to create new visualization designs, we are running a study based on a new approach, called visualization primitives. It lets you map data to the properties of objects like rectangles and ellipses. Build something with data, have fun, and help us figure out if it works!","frontmatter":{"title":"Study on Creative Data Visualization","description":"To explore how we can make it easier to create new visualization designs, we are running a study based on a new approach, called visualization primitives. It lets you map data to the properties of objects like rectangles and ellipses. Build something with data, have fun, and help us figure out if it works!","date":"2013-03-22T03:05:01.000Z","tags":"study","featuredImage":null,"outline":false},"headers":[],"relativePath":"blog/2013/study-creative-data-visualization.md","filePath":"blog/2013/study-creative-data-visualization.md"}');
const _sfc_main = { name: "blog/2013/study-creative-data-visualization.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="study-on-creative-data-visualization" tabindex="-1">Study on Creative Data Visualization <a class="header-anchor" href="#study-on-creative-data-visualization" aria-label="Permalink to &quot;Study on Creative Data Visualization&quot;">​</a></h1><p>To explore how we can make it easier to create new visualization designs, we are <a href="http://visualizationprimitives.net">running a study</a> based on a new approach, called <em>visualization primitives</em>. It lets you map data to the properties of objects like rectangles and ellipses. Build something with data, have fun, and help us figure out if it works!</p><p>This being a study, it asks you a few questions before you start, but that takes less than a minute. Then there&#39;s a brief tutorial, after which you&#39;re free to play. Build interesting things with the data (we&#39;re using the <a href="http://www.oecdbetterlifeindex.org">OECD Better Life Index</a> data) and submit the ones you like. This is all anonymous, obviously. My student <a href="https://twitter.com/SeeingStructure">Drew Skau</a>, who is running this study, will analyze the data to see what kinds of things you and others are building and how much of the design space you explore.</p><p>Don&#39;t forget to hit <em>Done</em> when you don&#39;t want to play any more. You then get asked a few more questions that also won&#39;t take much time, but that are crucial for the study. Once you&#39;re done with those, you can continue building or just close the window.</p><p>Here&#39;s the link to the study: <a href="http://visualizationprimitives.net">Visualization Creativity Study</a></p><p><em>Posted by <a href="/about">Robert Kosara</a> on March 22, 2013</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2013/study-creative-data-visualization.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const studyCreativeDataVisualization = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  studyCreativeDataVisualization as default
};
