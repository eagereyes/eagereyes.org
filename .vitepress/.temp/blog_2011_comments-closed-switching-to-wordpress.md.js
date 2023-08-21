import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Comments Closed, Switching to WordPress","description":"After more than five years, I've finally had it with Drupal. I'm switching the site to WordPress over the holidays. If you're reading this through your feed reader, you should not notice a difference. The new site will look different and will have a few simple little features that will make it easier to browse. WordPress also is much more organized on the back-end, so I will hopefully be motivated to write more.","frontmatter":{"title":"Comments Closed, Switching to WordPress","description":"After more than five years, I've finally had it with Drupal. I'm switching the site to WordPress over the holidays. If you're reading this through your feed reader, you should not notice a difference. The new site will look different and will have a few simple little features that will make it easier to browse. WordPress also is much more organized on the back-end, so I will hopefully be motivated to write more.","date":"2011-12-21T15:23:36.000Z","tags":null,"featuredImage":null,"outline":false},"headers":[],"relativePath":"blog/2011/comments-closed-switching-to-wordpress.md","filePath":"blog/2011/comments-closed-switching-to-wordpress.md"}`);
const _sfc_main = { name: "blog/2011/comments-closed-switching-to-wordpress.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="comments-closed-switching-to-wordpress" tabindex="-1">Comments Closed, Switching to WordPress <a class="header-anchor" href="#comments-closed-switching-to-wordpress" aria-label="Permalink to &quot;Comments Closed, Switching to WordPress&quot;">​</a></h1><p>After more than five years, I&#39;ve finally had it with Drupal. I&#39;m switching the site to WordPress over the holidays. If you&#39;re reading this through your feed reader, you should not notice a difference. The new site will look different and will have a few simple little features that will make it easier to browse. WordPress also is much more organized on the back-end, so I will hopefully be motivated to write more.</p><p>I have turned comments off so I can start transitioning the content. I will post more about the reasons for the switch when the new site is live early next year.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on December 21, 2011</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2011/comments-closed-switching-to-wordpress.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commentsClosedSwitchingToWordpress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  commentsClosedSwitchingToWordpress as default
};
