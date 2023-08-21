import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"VIS Running Club 2015","description":"I will organize runs again at IEEE VIS in Chicago two weeks from now. As with previous years, organization will be minimal: just show up ready to run. I will prepare routes in the 3-6mi (5-10km) range.","frontmatter":{"title":"VIS Running Club 2015","description":"I will organize runs again at IEEE VIS in Chicago two weeks from now. As with previous years, organization will be minimal: just show up ready to run. I will prepare routes in the 3-6mi (5-10km) range.","date":"2015-10-15T21:25:00.000Z","tags":"IEEEVIS","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/10/running-teaser.jpg","outline":false},"headers":[],"relativePath":"blog/2015/vis-running-club-2015.md","filePath":"blog/2015/vis-running-club-2015.md"}');
const _sfc_main = { name: "blog/2015/vis-running-club-2015.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/10/running-teaser.jpg" alt="" width="825" height="510"></p><h1 id="vis-running-club-2015" tabindex="-1">VIS Running Club 2015 <a class="header-anchor" href="#vis-running-club-2015" aria-label="Permalink to &quot;VIS Running Club 2015&quot;">​</a></h1><p>I will organize runs again at <a href="http://ieeevis.org">IEEE VIS</a> in Chicago two weeks from now. As with previous years, organization will be minimal: just show up ready to run. I will prepare routes in the 3-6mi (5-10km) range.</p><p>If you want to know what being organized looks like, check out the <a href="http://www.gicentre.net/velo-club-de-vis/">Velo Club de VIS:</a> they have a website, a meetup, fancy bikes, a hashtag, and probably a selfie drone or two.</p><p>For the runs, let&#39;s just meet in the hotel lobby at 6:30am on Tuesday, Wednesday, and Thursday. We can decide to also run on Friday, but I&#39;m going to keep that one optional, so check with me before (unless you want to go on your own).</p><p>For the routes, I will look at where people run on Strava. However, I suspect that we&#39;ll simply go out to the lake and run along there. That seems like the obvious option, and we might get a glimpse of a pretty sunrise there.</p><p>We did this the first time last year at <a href="/blog/2014/vis-2014-monday">VIS</a>, and it was a lot of fun to run around Paris in the dark. I also tried it at <a href="/blog/2015/report-eurovis-2015">EuroVis</a>, but it was mostly just Stephen Kobourov and me. It was a great way to see some more of Cagliari though.</p><p>So pack your shoes and shorts (and maybe some warm running clothes and a beanie/tuque) and join us! I know it&#39;s early but it&#39;s really the only time that works with all the parties and dinners and things planned for the nights.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on October 15, 2015</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/vis-running-club-2015.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visRunningClub2015 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  visRunningClub2015 as default
};
