import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Visualization Day at City College of New York","description":"The City College of New York will be hosting a visualization day on April 30, with a very interesting line-up of speakers: Ben Shneiderman (who is also listed as a sponsor), Matthew Ericson (NY Times), Catherine Plaisant (University of Maryland), Martin Wattenberg (IBM/Many Eyes), and others.","frontmatter":{"title":"Visualization Day at City College of New York","description":"The City College of New York will be hosting a visualization day on April 30, with a very interesting line-up of speakers: Ben Shneiderman (who is also listed as a sponsor), Matthew Ericson (NY Times), Catherine Plaisant (University of Maryland), Martin Wattenberg (IBM/Many Eyes), and others.","date":"2008-04-21T22:06:24.000Z","tags":null,"featuredImage":null,"outline":false},"headers":[],"relativePath":"blog/2008/visualization-day-at-city-college-of-new-york.md","filePath":"blog/2008/visualization-day-at-city-college-of-new-york.md"}');
const _sfc_main = { name: "blog/2008/visualization-day-at-city-college-of-new-york.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="visualization-day-at-city-college-of-new-york" tabindex="-1">Visualization Day at City College of New York <a class="header-anchor" href="#visualization-day-at-city-college-of-new-york" aria-label="Permalink to &quot;Visualization Day at City College of New York&quot;">​</a></h1><p>The City College of New York will be hosting a <a href="http://www-cs.ccny.cuny.edu/general/VisualizationDay.htm">visualization day</a> on April 30, with a very interesting line-up of speakers: <a href="http://www.cs.umd.edu/~ben/">Ben Shneiderman</a> (who is also listed as a sponsor), <a href="http://ericson.net/home/index.php">Matthew Ericson</a> (NY Times), <a href="http://www.cs.umd.edu/hcil/members/cplaisant/">Catherine Plaisant</a> (University of Maryland), <a href="http://bewitched.com/">Martin Wattenberg</a> (IBM/Many Eyes), and others.</p><p>Of course, this reminds of my own plans for not just a local, but a <a href="/blog/we-need-a-world-visualization-day.html">world visualization day</a>. That one is on hold for the moment, but I hope to have some news in the near future. I have been asked about it by several people recently, and I am still convinced that there is a need for such an event. More to come soon ...</p><p><em>Posted by <a href="/about">Robert Kosara</a> on April 21, 2008</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2008/visualization-day-at-city-college-of-new-york.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visualizationDayAtCityCollegeOfNewYork = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  visualizationDayAtCityCollegeOfNewYork as default
};
