import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Parallel Sets Released!","description":"After an initial commitment, an announcement, and a delay, we are proud to announce that the Parallel Sets application has been released! Mac OS X and Windows versions are ready to be downloaded, and the source code is available for your enlightenment and/or entertainment.","frontmatter":{"title":"Parallel Sets Released!","description":"After an initial commitment, an announcement, and a delay, we are proud to announce that the Parallel Sets application has been released! Mac OS X and Windows versions are ready to be downloaded, and the source code is available for your enlightenment and/or entertainment.","date":"2009-06-01T17:45:10.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/media/2009/parsets-release.png","outline":false},"headers":[],"relativePath":"blog/2009/parallel-sets-released.md","filePath":"blog/2009/parallel-sets-released.md"}');
const _sfc_main = { name: "blog/2009/parallel-sets-released.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2009/parsets-release.png" border="0" alt="Parallel Sets Release Party" width="574" height="301"></p><h1 id="parallel-sets-released" tabindex="-1">Parallel Sets Released! <a class="header-anchor" href="#parallel-sets-released" aria-label="Permalink to &quot;Parallel Sets Released!&quot;">​</a></h1><p>After <a href="/blog/2009/a-spike-of-interest-in-parallel-sets.html">an initial commitment</a>, <a href="/blog/2009/parallel-sets-release-date.html">an announcement</a>, and <a href="/blog/2009/parsets-delay.html">a delay</a>, we are proud to announce that the <a href="/parallel-sets">Parallel Sets</a> application has been released! Mac OS X and Windows versions are ready to be downloaded, and the source code is available for your enlightenment and/or entertainment.</p><p>This initial release is mostly meant to provide a solid program that works well. It includes a few demo data sets, and it is possible to download additional ones from a repository or import your own. The program needs to pre-process the data and stores it in a local database for flexibility and quick access. While it can import numerical data, it currently only shows categorical data in the visualization.</p><p>More features are certainly planned, and you can expect a few major updates over the next few months. We are also looking for feature suggestions (and bug reports) to make the program as useful as possible.</p><p><em>Why Parallel Sets V2.0?</em>, you might ask. The reason is simple: it&#39;s the third implementation of the technique, and it&#39;s the first one that is made widely available. We did not want to call it 1.0, since it was not the first implementation. The underlying data model is also a step up from the previous two implementations, and we went to great lengths to make the program integrate well in Windows and on the Mac. ParSets 3.0 sounded a bit preposterous, though, and would have raised even more questions (and expectations).</p><p>So go ahead and <a href="/parallel-sets">download it</a>, try it out, tell us if it works, and send us your feature requests (and bug reports)!</p><p><em>Posted by <a href="/about">Robert Kosara</a> on June 01, 2009</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…</p><blockquote><p>Congrats!</p></blockquote><p><a href="http://carlosscheidegger.wordpress.com" rel="nofollow noopener" target="_blank">Carlos Scheidegger</a> says…</p><blockquote><p>YES! Thank you for your trouble - open source releases should be valued more, but this is unfortunately not the case right now. It&#39;s a huge amount of work to do something like this, and even know my personal thanks is not much of an incentive for doing so, every little thing helps, right? :)</p></blockquote><p>cormac Bryce says…</p><blockquote><p>great stuff keep up the good work!</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2009/parallel-sets-released.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const parallelSetsReleased = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  parallelSetsReleased as default
};
