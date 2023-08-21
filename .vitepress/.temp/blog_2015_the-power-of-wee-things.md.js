import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Link: The Power of Wee Things","description":"Lena Groeger (of ProPublica) has written a beautiful piece about the Power of Wee Things. She talks about using small things, multiples, and units to display data and get people interested. The article goes through many, many examples covering many different areas and ideas. She also gave a great talk on the topic at OpenVis 2014.","frontmatter":{"title":"Link: The Power of Wee Things","description":"Lena Groeger (of ProPublica) has written a beautiful piece about the Power of Wee Things. She talks about using small things, multiples, and units to display data and get people interested. The article goes through many, many examples covering many different areas and ideas. She also gave a great talk on the topic at OpenVis 2014.","date":"2015-04-22T06:17:53.000Z","tags":"blog/2015","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/04/waldo.jpg","outline":false},"headers":[],"relativePath":"blog/2015/the-power-of-wee-things.md","filePath":"blog/2015/the-power-of-wee-things.md"}');
const _sfc_main = { name: "blog/2015/the-power-of-wee-things.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="link-the-power-of-wee-things" tabindex="-1">Link: The Power of Wee Things <a class="header-anchor" href="#link-the-power-of-wee-things" aria-label="Permalink to &quot;Link: The Power of Wee Things&quot;">​</a></h1><p>Lena Groeger (of ProPublica) has written a beautiful piece about the <a href="http://www.propublica.org/nerds/item/a-big-article-about-wee-things">Power of Wee Things</a>. She talks about using small things, multiples, and units to display data and get people interested. The article goes through many, many examples covering many different areas and ideas. She also gave a great talk on the topic at <a href="http://openvisconf.com/2014/">OpenVis 2014</a>.</p><p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/ZPAp3Fxx7TE?si=APdqQDvHtwdASKb9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p><p>On a somewhat related note, Jake Harris wrote about the <a href="https://source.opennews.org/en-US/learning/connecting-dots/">importance of individual items in data journalism and visualization</a>, and how to connect with them. The two pieces work very well together to illustrate a way of visualizing data that is often overlooked.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on April 22, 2015</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/the-power-of-wee-things.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thePowerOfWeeThings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  thePowerOfWeeThings as default
};
