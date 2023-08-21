import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Link: The Graphic Continuum","description":"The Graphic Continuum is a poster created by Jon Schwabish and Severino Ribecca (the man behind the Data Visualisation Catalogue). It lists almost 90 different chart types and organizes them into five large groups: distribution, time, comparing categories, geospatial, part-to-whole, and relationships. Some of them are connected across groups where there are further similarities.\\nThe poster is printed very nicely and makes for a great piece of wall art to stare at when thinking about data, and maybe to get an idea for what new visualization to try.","frontmatter":{"title":"Link: The Graphic Continuum","description":"The Graphic Continuum is a poster created by Jon Schwabish and Severino Ribecca (the man behind the Data Visualisation Catalogue). It lists almost 90 different chart types and organizes them into five large groups: distribution, time, comparing categories, geospatial, part-to-whole, and relationships. Some of them are connected across groups where there are further similarities.\\nThe poster is printed very nicely and makes for a great piece of wall art to stare at when thinking about data, and maybe to get an idea for what new visualization to try.","date":"2015-02-25T07:17:10.000Z","tags":"blog/2015","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/01/graphic-continuum-cropped.jpg","outline":false},"headers":[],"relativePath":"blog/2015/link-the-graphic-continuum.md","filePath":"blog/2015/link-the-graphic-continuum.md"}');
const _sfc_main = { name: "blog/2015/link-the-graphic-continuum.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="link-the-graphic-continuum" tabindex="-1">Link: The Graphic Continuum <a class="header-anchor" href="#link-the-graphic-continuum" aria-label="Permalink to &quot;Link: The Graphic Continuum&quot;">​</a></h1><p><em><a href="http://policyviz.com/graphic-continuum/">The Graphic Continuum</a></em> is a poster created by <a href="http://policyviz.com/">Jon Schwabish</a> and Severino Ribecca (the man behind the <em><a href="http://www.datavizcatalogue.com">Data Visualisation Catalogue</a></em>). It lists almost 90 different chart types and organizes them into five large groups: distribution, time, comparing categories, geospatial, part-to-whole, and relationships. Some of them are connected across groups where there are further similarities.</p><p>The poster is printed very nicely and makes for a great piece of wall art to stare at when thinking about data, and maybe to get an idea for what new visualization to try.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on February 25, 2015</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/link-the-graphic-continuum.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const linkTheGraphicContinuum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  linkTheGraphicContinuum as default
};
