import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Dance.Draw","description":"My colleague Celine Latulipe has made a nice website about her Dance.Draw project. In what she calls Exquisite Interaction, three dancers wield inertial mice and thus control shapes in a projection behind them. The result is interesting and beautiful.","frontmatter":{"title":"Dance.Draw","description":"My colleague Celine Latulipe has made a nice website about her Dance.Draw project. In what she calls Exquisite Interaction, three dancers wield inertial mice and thus control shapes in a projection behind them. The result is interesting and beautiful.","date":"2008-05-15T22:51:37.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/media/2008/ExquisiteInteraction.jpg","outline":false},"headers":[],"relativePath":"blog/2008/dance-draw.md","filePath":"blog/2008/dance-draw.md"}');
const _sfc_main = { name: "blog/2008/dance-draw.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2008/ExquisiteInteraction.jpg" alt="Dance.Draw"></p><h1 id="dance-draw" tabindex="-1">Dance.Draw <a class="header-anchor" href="#dance-draw" aria-label="Permalink to &quot;Dance.Draw&quot;">​</a></h1><p>My colleague Celine Latulipe has made a nice website about her <a href="http://www.sis.uncc.edu/~clatulip/DanceDraw/Dance.Draw.html">Dance.Draw project</a>. In what she calls <em>Exquisite Interaction</em>, three dancers wield inertial mice and thus control shapes in a projection behind them. The result is interesting and beautiful.</p><p>Celine works in human-computer interaction, specifically on two-handed interaction for one or more people. What that means is that her programs are controlled by up to six mice – two per person, up to three people at the same time. She took that a step further in this collaboration with Sybil Huskey from the Dance Department at UNC Charlotte.</p><p>Each dancer has a mouse in each hand. The mice track motion (similar to a Wii-mote), and thus provide some data about the movements of the dancers. A typical question after such a performance is if she wants to use the mice to track the movements more precisely, but I fail to see the point in doing this. If the goal were motion tracking or capture, there are ways of doing this that are much better than simple mice. Adding more data is really of little use, what is interesting here is the abstraction from the movements to the screen.</p><p>What is being visualized is data from the mice, which represents the dance, which in turn is an interpretation of the music. So in a sense, we are seeing a visualization of the music. Of course, the goal is not a readable visualization, but a more abstract, artistic representation.</p><p>Be sure to watch the video, though the visualization is a bit washed out. The performance usually takes place in an almost entirely dark room, where the visuals are much more dominant. The music is also quite catchy.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on May 15, 2008</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://www.teacupsandtutus.com/stprtu.html" rel="nofollow noopener" target="_blank">Jill Smeetch</a> says…</p><blockquote><p>That&#39;s cool. I agree that more data would not necessarily help. It is beautiful as it is.</p></blockquote><p><a href="http://www.pdxsmiles.com/cosmetic-dentist-portland/" rel="nofollow noopener" target="_blank">Dr. Roger Portland</a> says…</p><blockquote><p>This is interesting. It&#39;s the first time I saw a merge of dancing and drawing as one art form. Truly, art is a boundless realm. I wonder if Wii actually got inspiration from this.</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2008/dance-draw.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const danceDraw = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  danceDraw as default
};
