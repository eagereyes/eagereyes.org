import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Sightings: Symmetric Bat Flight","description":"How do bats fly? What are the aerodynamic conditions around their wings? And how do you visualize all that? I did a short interview with David Laidlaw (PDF), who has collaborated with physicists, biologists, fluid mechanics experts, and others, to create a poster that won last year's NSF Visualization Challenge. The interview was done for American Scientist's Sightings column, which I have been invited to write.","frontmatter":{"title":"Sightings: Symmetric Bat Flight","description":"How do bats fly? What are the aerodynamic conditions around their wings? And how do you visualize all that? I did a short interview with David Laidlaw (PDF), who has collaborated with physicists, biologists, fluid mechanics experts, and others, to create a poster that won last year's NSF Visualization Challenge. The interview was done for American Scientist's Sightings column, which I have been invited to write.","date":"2008-08-06T20:58:19.000Z","tags":"Sightings","featuredImage":"https://media.eagereyes.org/media/2008/Sightings-BatFlight.jpg","outline":false},"headers":[],"relativePath":"blog/2008/sightings-symmetric-bat-flight.md","filePath":"blog/2008/sightings-symmetric-bat-flight.md"}`);
const _sfc_main = { name: "blog/2008/sightings-symmetric-bat-flight.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2008/Sightings-BatFlight.jpg" border="0" alt="Sightings: Symmetric Bat Flight"></p><h1 id="sightings-symmetric-bat-flight" tabindex="-1">Sightings: Symmetric Bat Flight <a class="header-anchor" href="#sightings-symmetric-bat-flight" aria-label="Permalink to &quot;Sightings: Symmetric Bat Flight&quot;">​</a></h1><p>How do bats fly? What are the aerodynamic conditions around their wings? And how do you visualize all that? I did a <a href="http://www.americanscientist.org/issues/pub/2008/4/symmetric-bat-flight">short interview with David Laidlaw</a> (<a href="http://amsciadmin.eresources.com/libraries/documents/2008631226116815-2008-07KosaraSightings.pdf">PDF</a>), who has collaborated with physicists, biologists, fluid mechanics experts, and others, to create a poster that won last year&#39;s NSF Visualization Challenge. The interview was done for <a href="http://www.americanscientist.org/"><em>American Scientist</em></a>&#39;s <em>Sightings</em> column, which I have been invited to write.</p><p>I am taking this over from Felice Frankel, which is not an easy task. I have decided to skirt direct comparisons by changing the format and branching out into more InfoVis-y topics (though always with a scientific application), visualization criticism, etc.</p><p>American Scientist is published every other month, and I will be posting pointers to the articles here when they appear. <em>Sightings</em> is available free of charge in a web version and even as a very nice PDF (see links above).</p><p><em>Posted by <a href="/about">Robert Kosara</a> on August 06, 2008</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2008/sightings-symmetric-bat-flight.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sightingsSymmetricBatFlight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sightingsSymmetricBatFlight as default
};
