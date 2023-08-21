import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Sightings: Structures Smaller than Light","description":"Proteins are inherently three-dimensional, complex structures. To understand them, we need to simplify them to focus their main structural components. Jane Richardson has played a key role in the visual language that we use today when talking about proteins: ribbons and spirals. I interviewed her recently for the Sightings column in American Scientist.","frontmatter":{"title":"Sightings: Structures Smaller than Light","description":"Proteins are inherently three-dimensional, complex structures. To understand them, we need to simplify them to focus their main structural components. Jane Richardson has played a key role in the visual language that we use today when talking about proteins: ribbons and spirals. I interviewed her recently for the Sightings column in American Scientist.","date":"2008-10-13T21:00:35.000Z","tags":"Sightings","featuredImage":"https://media.eagereyes.org/media/2008/Sightings-2008-11-Richardson.jpg","outline":false},"headers":[],"relativePath":"blog/2008/sightings-structures-smaller-than-light.md","filePath":"blog/2008/sightings-structures-smaller-than-light.md"}');
const _sfc_main = { name: "blog/2008/sightings-structures-smaller-than-light.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2008/Sightings-2008-11-Richardson.jpg" alt="Sightings: Structures Smaller than Light" width="452" height="300"></p><h1 id="sightings-structures-smaller-than-light" tabindex="-1">Sightings: Structures Smaller than Light <a class="header-anchor" href="#sightings-structures-smaller-than-light" aria-label="Permalink to &quot;Sightings: Structures Smaller than Light&quot;">​</a></h1><p>Proteins are inherently three-dimensional, complex structures. To understand them, we need to simplify them to focus their main structural components. Jane Richardson has played a key role in the visual language that we use today when talking about proteins: ribbons and spirals. I interviewed her recently for the <em>Sightings</em> column in <em>American Scientist</em>.</p><p>If the name and work sounds familiar, you may remember her <a href="http://vis.computer.org/Vis2006/session/capstone.html">capstone talk at Vis 2006</a>. Jane Richardson is a <a href="http://kinemage.biochem.duke.edu/">professor at Duke University</a>, where she is now working on visualizing proteins and atom configurations in virtual environments (among many other things).</p><p>The interview is available online:<a href="http://www.americanscientist.org/issues/pub/structures-smaller-than-light">Structures Smaller than Light</a> (<a href="http://amsciadmin.eresources.com/libraries/documents/2008103122126984-2008-07Kosara.pdf">PDF</a>)</p><p><em>Posted by <a href="/about">Robert Kosara</a> on October 13, 2008</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2008/sightings-structures-smaller-than-light.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sightingsStructuresSmallerThanLight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sightingsStructuresSmallerThanLight as default
};
