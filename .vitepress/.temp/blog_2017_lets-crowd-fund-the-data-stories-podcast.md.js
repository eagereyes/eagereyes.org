import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Let’s Crowd-Fund the Data Stories Podcast!","description":"Enrico and Moritz, the two hosts of the only visualization podcast in the known universe, are trying to crowd-fund their work rather than rely on advertising. If we all chip in a few dollars or euros per show, this will be easy to accomplish.","frontmatter":{"title":"Let’s Crowd-Fund the Data Stories Podcast!","description":"Enrico and Moritz, the two hosts of the only visualization podcast in the known universe, are trying to crowd-fund their work rather than rely on advertising. If we all chip in a few dollars or euros per show, this will be easy to accomplish.","date":"2017-01-25T07:17:00.000Z","tags":"Data Stories","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2017/01/shutup.jpg","outline":false},"headers":[],"relativePath":"blog/2017/lets-crowd-fund-the-data-stories-podcast.md","filePath":"blog/2017/lets-crowd-fund-the-data-stories-podcast.md"}');
const _sfc_main = { name: "blog/2017/lets-crowd-fund-the-data-stories-podcast.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2017/01/shutup.jpg" width="720" height="450"></p><h1 id="let-s-crowd-fund-the-data-stories-podcast" tabindex="-1">Let’s Crowd-Fund the Data Stories Podcast! <a class="header-anchor" href="#let-s-crowd-fund-the-data-stories-podcast" aria-label="Permalink to &quot;Let’s Crowd-Fund the Data Stories Podcast!&quot;">​</a></h1><p>Enrico and Moritz, the two hosts of the <a href="http://datastori.es/data-stories-crowdfunding/">only visualization podcast in the known universe</a>, are trying to crowd-fund their work rather than rely on advertising. If we all chip in a few dollars or euros per show, this will be easy to accomplish.</p><p>You know those awkward breaks in the middle of the podcast where somebody gets cut off mid-sentence so Moritz can say, “Now is a great time to talk about our sponsor!”? Yeah, nobody likes those. It&#39;s up to you to make them go away, by paying for their costs so they don&#39;t have to run ads.</p><p>The way this works is through Patreon, a crowdfunding platform used by lots of webcomics and other online projects. In contrast to the things I know and support so far, this is not per month, but per episode. So if they’re lazy and don’t do anything, you never pay them. But whenever they produce a new episode, you pay them a few dollars.</p><p>This starts with as little as $3 for a <em>Data Stories Affiliate</em>, up to <em>OMG! Can we hug you now?</em> for $50. Clearly, nobody wants the latter, but I’ve signed up for the <em>Data Stories Fellow</em> ($10) level, even if I <a href="/tag/data-stories">already am a superstar</a> (the $20 level is called <em>Data Stories Super Star</em>).</p><p>There are <a href="http://datastori.es/data-stories-crowdfunding/">more exciting details about this on their blog</a>, or you can just head over to their <a href="https://www.patreon.com/datastories">Patreon page</a> and give them your money there.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on January 25, 2017</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2017/lets-crowd-fund-the-data-stories-podcast.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const letsCrowdFundTheDataStoriesPodcast = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  letsCrowdFundTheDataStoriesPodcast as default
};
