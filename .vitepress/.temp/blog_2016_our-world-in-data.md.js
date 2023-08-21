import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Link: Our World in Data","description":"Our World in Data looks at a wide variety of data about the world: health, population, energy, growth, inequality, etc. Max Roser and his colleagues dig through the vast amounts of open data to find many interesting connections and insights.","frontmatter":{"title":"Link: Our World in Data","description":"Our World in Data looks at a wide variety of data about the world: health, population, energy, growth, inequality, etc. Max Roser and his colleagues dig through the vast amounts of open data to find many interesting connections and insights.","date":"2016-08-10T07:32:20.000Z","tags":"blog/2015","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2016/08/owid-teaser.png","outline":false},"headers":[],"relativePath":"blog/2016/our-world-in-data.md","filePath":"blog/2016/our-world-in-data.md"}');
const _sfc_main = { name: "blog/2016/our-world-in-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="link-our-world-in-data" tabindex="-1">Link: Our World in Data <a class="header-anchor" href="#link-our-world-in-data" aria-label="Permalink to &quot;Link: Our World in Data&quot;">​</a></h1><p><a href="https://ourworldindata.org">Our World in Data</a> looks at a wide variety of data about the world: health, population, energy, growth, inequality, etc. <a href="https://twitter.com/MaxCRoser">Max Roser</a> and his colleagues dig through the vast amounts of open data to find many interesting connections and insights.</p><p>As an example, <a href="https://ourworldindata.org/the-link-between-life-expectancy-and-health-spending-us-focus">this recent posting on healthcare spending vs. life expectancy</a> uses a <a href="/blog/2015/the-connected-scatterplot-for-presenting-paired-time-series">connected scatterplot</a> to show much of an outlier the U.S. is among OECD countries in both aspects.</p><p>Both data and code for the charts are available as open source and they place them in the public domain. You can directly embed their charts in your own site, like I&#39;m doing here with this chart from an article about <a href="https://ourworldindata.org/how-many-children-did-a-woman-give-birth-to-that-died-before-their-5th-birthday/">child mortality over time</a>.</p><p align="center"><iframe style="${ssrRenderStyle({ "width": "100%", "height": "660px", "border": "0px none" })}" src="https://ourworldindata.org/grapher/Children-woman-death-vs-survival" width="300" height="150"></iframe></p><p><em>Posted by <a href="/about">Robert Kosara</a> on August 10, 2016</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2016/our-world-in-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ourWorldInData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ourWorldInData as default
};
