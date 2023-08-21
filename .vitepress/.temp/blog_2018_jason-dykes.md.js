import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Portrait: Jason Dykes","description":"Jason Dykes is professor at City University London, where he also co-leads the giCentre. He straddles the line between cartography and visualization, publishing in both communities and combining ideas from both – which have led to crossover ideas like spatially-ordered treemaps and map lineups.","frontmatter":{"title":"Portrait: Jason Dykes","description":"Jason Dykes is professor at City University London, where he also co-leads the giCentre. He straddles the line between cartography and visualization, publishing in both communities and combining ideas from both – which have led to crossover ideas like spatially-ordered treemaps and map lineups.","date":"2018-05-24T07:13:55.000Z","tags":"portrait","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2018/05/jason-dykes.jpg","outline":false},"headers":[],"relativePath":"blog/2018/jason-dykes.md","filePath":"blog/2018/jason-dykes.md"}');
const _sfc_main = { name: "blog/2018/jason-dykes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img class="aligncenter size-full wp-image-10211" src="https://media.eagereyes.org/wp-content/uploads/2018/05/jason-dykes.jpg" alt="" width="720" height="1015"></p><h1 id="portrait-jason-dykes" tabindex="-1">Portrait: Jason Dykes <a class="header-anchor" href="#portrait-jason-dykes" aria-label="Permalink to &quot;Portrait: Jason Dykes&quot;">​</a></h1><p><a href="https://www.gicentre.net/jsndyks/">Jason Dykes</a> is professor at City University London, where he also co-leads the <a href="http://www.gicentre.net/">giCentre</a>. He straddles the line between cartography and visualization, publishing in both communities and combining ideas from both – which have led to crossover ideas like <a href="http://openaccess.city.ac.uk/536/">spatially-ordered treemaps</a> and <a href="http://openaccess.city.ac.uk/15119/">map lineups</a>.</p><p>Jason is also the driving force behind the <a href="https://www.gicentre.net/velo-club-de-vis">Velo Club de VIS</a>, which organizes long bike rides on the Saturday immediately following VIS. These rides are much better organized than my sloppy attempts at running groups, with fancy bike rentals and <a href="https://www.gicentre.net/velo-club-jersey/">custom jerseys</a>.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on May 24, 2018</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2018/jason-dykes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jasonDykes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jasonDykes as default
};
