import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Series: Lists of Influences","description":"Ever wondered where the successful visualization researchers take their ideas from? How they got to know all that stuff that they draw from? What made them work on a certain project? Well wonder no more. EagerEyes.org brings you twelve lists of books, articles, and other things that influenced twelve researchers who influence us.","frontmatter":{"title":"Series: Lists of Influences","description":"Ever wondered where the successful visualization researchers take their ideas from? How they got to know all that stuff that they draw from? What made them work on a certain project? Well wonder no more. EagerEyes.org brings you twelve lists of books, articles, and other things that influenced twelve researchers who influence us.","date":"2007-01-03T09:37:10.000Z","tags":"influences","featuredImage":null,"outline":false},"headers":[],"relativePath":"blog/2007/series-introduction.md","filePath":"blog/2007/series-introduction.md"}');
const _sfc_main = { name: "blog/2007/series-introduction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="series-lists-of-influences" tabindex="-1">Series: Lists of Influences <a class="header-anchor" href="#series-lists-of-influences" aria-label="Permalink to &quot;Series: Lists of Influences&quot;">​</a></h1><p>Ever wondered where the successful visualization researchers take their ideas from? How they got to know all that stuff that they draw from? What made them work on a certain project? Well wonder no more. EagerEyes.org brings you twelve lists of books, articles, and other things that influenced twelve researchers who influence us.</p><p>I had a very interesting discussion about influential books with Pat Hanrahan at the Vis 2006 conference in Baltimore. Not long before that, I had seen an article about a <a href="http://www.designobserver.com/archives/019524.html">book containing lists of influences</a> by influential designers. Thus was born the idea to do the same thing for visualization.</p><p>I am going to ask a dozen people who are known in the field of visualization the same question:</p><blockquote><p>Which 10 books, papers, websites, or objects had the most influence on your work, inspired you, or made you a better person?</p></blockquote><p>The results will be posted at a rate of one per month over the course of 2007. The list is certainly biased towards the people I know better or whose work I find interesting. It is not restricted to Information Visualization people, though, and I am trying to cover a broad range of research interests.</p><p>This project has two goals: put together a really interesting reading list, and get to know the contributors better. I am in no way interested in the personality cult that exists in some other fields (notably mathematics with the <a href="http://en.wikipedia.org/wiki/Erd%C5%91s_number">Erdős number</a>, or design with its <a href="http://www.designobserver.com/archives/020303.html">superstars</a>), and the goal of this project is really the opposite of that. All the visualization researchers I know are extremely friendly, interested, and approachable. By learning about what influences them, we get to know them better, and make this field more of a community.</p><p>The topic <a href="/tag/influences/">Lists of Influences</a> shows you the growing list of lists of influential influences.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on January 03, 2007. Filed under <a href="/tag/influences">Lists of Influences</a>.</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2007/series-introduction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const seriesIntroduction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  seriesIntroduction as default
};
