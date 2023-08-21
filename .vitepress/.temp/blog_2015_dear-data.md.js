import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Link: Dear Data","description":"Giorgia Lupi and Stefanie Posavec are collaborating on a clever and beautiful new project they call Dear Data (Twitter account). Every week, they are sending post cards to each other with hand-drawn visualizations of data they have gathered: public transportation, ways they communicate, etc.","frontmatter":{"title":"Link: Dear Data","description":"Giorgia Lupi and Stefanie Posavec are collaborating on a clever and beautiful new project they call Dear Data (Twitter account). Every week, they are sending post cards to each other with hand-drawn visualizations of data they have gathered: public transportation, ways they communicate, etc.","date":"2015-04-01T06:17:58.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/03/dear-data.jpg","outline":false},"headers":[],"relativePath":"blog/2015/dear-data.md","filePath":"blog/2015/dear-data.md"}');
const _sfc_main = { name: "blog/2015/dear-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/03/dear-data.jpg" width="825" height="510"></p><h1 id="link-dear-data" tabindex="-1">Link: Dear Data <a class="header-anchor" href="#link-dear-data" aria-label="Permalink to &quot;Link: Dear Data&quot;">​</a></h1><p>Giorgia Lupi and Stefanie Posavec are collaborating on a clever and beautiful new project they call <em><a href="http://www.dear-data.com">Dear Data</a></em> (<a href="https://twitter.com/_deardata">Twitter account</a>). Every week, they are sending post cards to each other with hand-drawn visualizations of data they have gathered: public transportation, ways they communicate, etc.</p><p><a href="http://giorgialupi.net">Giorgia</a> and <a href="http://www.stefanieposavec.co.uk">Stefanie</a> are two of the most interesting people working in data visualization/design/art right now. Both are also incredibly skilled and creative designers, well worth watching.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on April 01, 2015</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/dear-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dearData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dearData as default
};
