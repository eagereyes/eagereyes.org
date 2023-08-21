import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Link: Data Journalism in the 19th Century","description":"Scott Klein of ProPublica has written a great story about an early use of data in journalism, and Horace Greeley, the colorful journalist behind it. Greeley found an issue and then gathered the data to show the extent of the problem. This is not unlike today.","frontmatter":{"title":"Link: Data Journalism in the 19th Century","description":"Scott Klein of ProPublica has written a great story about an early use of data in journalism, and Horace Greeley, the colorful journalist behind it. Greeley found an issue and then gathered the data to show the extent of the problem. This is not unlike today.","date":"2015-03-25T06:17:39.000Z","tags":"journalism","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/03/greely.jpg","outline":false},"headers":[],"relativePath":"blog/2015/data-journalism-in-the-19th-century.md","filePath":"blog/2015/data-journalism-in-the-19th-century.md"}');
const _sfc_main = { name: "blog/2015/data-journalism-in-the-19th-century.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/03/greely.jpg" width="825" height="510"></p><h1 id="link-data-journalism-in-the-19th-century" tabindex="-1">Link: Data Journalism in the 19th Century <a class="header-anchor" href="#link-data-journalism-in-the-19th-century" aria-label="Permalink to &quot;Link: Data Journalism in the 19th Century&quot;">​</a></h1><p>Scott Klein of ProPublica has written a great story about <a href="http://www.propublica.org/nerds/item/antebellum-data-journalism-busted-abe-lincoln">an early use of data in journalism</a>, and Horace Greeley, the colorful journalist behind it. Greeley found an issue and then gathered the data to show the extent of the problem. This is not unlike today.</p><p>In Greeley&#39;s case, the issue was how much money members of Congress were paid for their travels to their home states, despite modern conveniences like railroads that made those journeys much faster than they had been in the past.</p><p>The story is very well written and represents an important piece of history and context for today&#39;s practice of data journalism.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on March 25, 2015</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/data-journalism-in-the-19th-century.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dataJournalismInThe19thCentury = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dataJournalismInThe19thCentury as default
};
