import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Tapestry 2014 Announced","description":"After a very successful Tapestry conference in February this year, we have been getting a steady stream of questions from people about another event next year. Now we're finally able to announce next year's event. And it will be awesome, again.","frontmatter":{"title":"Tapestry 2014 Announced","description":"After a very successful Tapestry conference in February this year, we have been getting a steady stream of questions from people about another event next year. Now we're finally able to announce next year's event. And it will be awesome, again.","date":"2013-11-06T22:07:30.000Z","tags":"conference, tapestry","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2013/11/tapestry-triptych.jpeg","outline":false},"headers":[],"relativePath":"blog/2013/tapestry-2014-announced.md","filePath":"blog/2013/tapestry-2014-announced.md"}`);
const _sfc_main = { name: "blog/2013/tapestry-2014-announced.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img alt="Tapestry Triptych" src="https://media.eagereyes.org/wp-content/uploads/2013/11/tapestry-triptych-730x323.jpeg" width="730" height="323"></p><h1 id="tapestry-2014-announced" tabindex="-1">Tapestry 2014 Announced <a class="header-anchor" href="#tapestry-2014-announced" aria-label="Permalink to &quot;Tapestry 2014 Announced&quot;">​</a></h1><p>After a very successful <a title="Conference Report: Tapestry 2013" href="/blog/2013/conference-report-tapestry-2013">Tapestry conference</a> in February this year, we have been getting a steady stream of questions from people about another event next year. Now we&#39;re finally able to announce next year&#39;s event. And it will be awesome, again.</p><p>There&#39;s no point in listing all the information here, since I also wrote <a href="http://www.tapestryconference.com/blog/2013/tapestry-2014">the announcement posting on the Tapestry blog</a>. But we have another great line-up for keynotes and short stories, there will be a demos session, and we will also have posters.</p><p><a href="http://www.tapestryconference.com">Tapestry 2014</a> will take place on February 26, 2014, in Annapolis, Maryland. If you&#39;re interested in attending, <a href="http://www.tapestryconference.com/invitation">request an invitation</a>. We will again be limited to about 100 attendees, so don&#39;t wait too long!</p><p><em>Posted by <a href="/about">Robert Kosara</a> on November 06, 2013</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2013/tapestry-2014-announced.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tapestry2014Announced = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tapestry2014Announced as default
};
