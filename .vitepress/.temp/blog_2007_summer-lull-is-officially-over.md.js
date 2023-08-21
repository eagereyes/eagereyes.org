import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"The Summer Lull is Officially Over!","description":"This summer has been a busy one for me and a rather inactive one for EagerEyes. But it is almost over now, and even though things are not getting quieter (quite the opposite with the semester starting), this site will see regular updates (at least once a week) again.","frontmatter":{"title":"The Summer Lull is Officially Over!","description":"This summer has been a busy one for me and a rather inactive one for EagerEyes. But it is almost over now, and even though things are not getting quieter (quite the opposite with the semester starting), this site will see regular updates (at least once a week) again.","date":"2007-08-26T18:06:16.000Z","tags":null,"featuredImage":null,"outline":false},"headers":[],"relativePath":"blog/2007/summer-lull-is-officially-over.md","filePath":"blog/2007/summer-lull-is-officially-over.md"}');
const _sfc_main = { name: "blog/2007/summer-lull-is-officially-over.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-summer-lull-is-officially-over" tabindex="-1">The Summer Lull is Officially Over! <a class="header-anchor" href="#the-summer-lull-is-officially-over" aria-label="Permalink to &quot;The Summer Lull is Officially Over!&quot;">​</a></h1><p>This summer has been a busy one for me and a rather inactive one for EagerEyes. But it is almost over now, and even though things are not getting quieter (quite the opposite with the semester starting), this site will see regular updates (at least once a week) again.</p><p>A few articles are already in the pipeline, and I will catch up on the <a href="/influences">lists of influences</a>. Anything else you want to see – or that you don&#39;t care about?</p><p><em>Posted by <a href="/about">Robert Kosara</a> on August 26, 2007</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…</p><blockquote><p>Hi Robert,</p><p>I&#39;d be interested in reading about more Infovis papers that you think are particularly important/interesting. Perhaps you could explore some of papers from the lists of influences in more detail? It would also be interesting to see your list of influences, and to learn more about your interests in critiquing visualisations, perhaps with some actual critiques. Stephen Few has nice critiques of commercial graphics, and it would be nice to see critiques of research graphics as well.</p><p>Hadley</p></blockquote><p>Robert Kosara says…</p><blockquote><p>Good ideas, thanks! I will definitely write more critiques, and I am also planning on discussing more papers, especially as the InfoVis conference draws nearer. As for my list of influences, I think I&#39;ll let the more influential people talk first 😉</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2007/summer-lull-is-officially-over.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const summerLullIsOfficiallyOver = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  summerLullIsOfficiallyOver as default
};
