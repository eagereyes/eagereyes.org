import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Visualization in the World","description":"On April 24 and 25, the Charlotte Visualization Center at UNC Charlotte will host its second symposium, titled Visualization in the World. We have an impressive line-up of speakers and are expecting fascinating discussions.","frontmatter":{"title":"Visualization in the World","description":"On April 24 and 25, the Charlotte Visualization Center at UNC Charlotte will host its second symposium, titled Visualization in the World. We have an impressive line-up of speakers and are expecting fascinating discussions.","date":"2008-04-11T14:59:01.000Z","tags":null,"featuredImage":null,"outline":false},"headers":[],"relativePath":"blog/2008/visualization-in-the-world-syposium.md","filePath":"blog/2008/visualization-in-the-world-syposium.md"}');
const _sfc_main = { name: "blog/2008/visualization-in-the-world-syposium.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="visualization-in-the-world" tabindex="-1">Visualization in the World <a class="header-anchor" href="#visualization-in-the-world" aria-label="Permalink to &quot;Visualization in the World&quot;">​</a></h1><p>On April 24 and 25, the <a href="http://viscenter.uncc.edu/">Charlotte Visualization Center</a> at UNC Charlotte will host its second symposium, titled <a href="http://viscenter.uncc.edu/symposium08.htm">Visualization in the World</a>. We have an impressive line-up of speakers and are expecting fascinating discussions.</p><p>The speakers will be</p><ul><li>George Robertson, Principal Researcher at Microsoft Research in visualization and computer-human interaction.</li><li>Felice Frankel, Senior Research Fellow at Harvard University and world-renowned science photographer.</li><li>Alan MacEachren, Professor of Geography at Pennsylvania State University and Director of the GeoVista Center.</li><li>Jeremy Wolfe, <strong></strong>Professor of Ophthalmology at Harvard Medical School and a leading expert on visual perception.</li><li>Yehuda Kalay, Professor of Architecture at UC Berkeley.</li><li> Bernd Froehlich, Professor and Head of the Virtual Reality Systems Group, Bauhaus-Universitat Weimar, Germany.</li></ul> Plus, there will be talks by the visualization faculty at UNCC, a visualized dance performance, and a lot more. <p>Videos and slides of the talks from the <a href="http://www.viscenter.uncc.edu/symposium06/">Symposium on the Future of Visualization</a> in May 2006 (as part of the Grand Opening of the Charlotte Visualization Center) are available online.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on April 11, 2008</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2008/visualization-in-the-world-syposium.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visualizationInTheWorldSyposium = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  visualizationInTheWorldSyposium as default
};
