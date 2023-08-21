import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Follow Me on Twitter!","description":"If you enjoy reading my website, why not follow me on Twitter, too? So click the birdie above to get to my Twitter page!","frontmatter":{"title":"Follow Me on Twitter!","description":"If you enjoy reading my website, why not follow me on Twitter, too? So click the birdie above to get to my Twitter page!","date":"2010-08-02T20:44:26.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/media/2010/bird.png","outline":false},"headers":[],"relativePath":"blog/2010/follow-me-on-twitter.md","filePath":"blog/2010/follow-me-on-twitter.md"}');
const _sfc_main = { name: "blog/2010/follow-me-on-twitter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2010/bird.png" alt="" width="332" height="384"></p><h1 id="follow-me-on-twitter" tabindex="-1">Follow Me on Twitter! <a class="header-anchor" href="#follow-me-on-twitter" aria-label="Permalink to &quot;Follow Me on Twitter!&quot;">​</a></h1><p>If you enjoy reading my website, why not <a href="http://twitter.com/eagereyes">follow me on Twitter</a>, too? So click the birdie above to get to my Twitter page!</p><p>I&#39;ve had the link to Twitter in the sidebar of my site for a while, and I&#39;m getting a slow but steady flow of new followers. This is a little experiment to see how many of you are on Twitter and haven&#39;t yet realized that you can follow me, too.</p><p>I tweet pointers to the stories on my website, but that&#39;s not nearly all I do on Twitter. There&#39;s personal stuff, there are links to interesting things I find, (short) rants about things that just bug me that moment, and more.</p><p>I&#39;m probably also going to stop doing my own little microblog for VisWeek this year, and instead only do Twitter. It&#39;s a lot more fun with all the other visualization folks that are there now. It&#39;s also much more useable than having to manually refresh a webpage.</p><p>And if you haven&#39;t tried Twitter, this is your chance! There are lots of interesting people to follow, like the people on my <a href="http://twitter.com/EagerEyes/visualization/members">Visualization Twitter List</a>.</p><p>So what are you waiting for? <a href="http://twitter.com/EagerEyes">Click the link!</a></p><p><em>Posted by <a href="/about">Robert Kosara</a> on August 02, 2010</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2010/follow-me-on-twitter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const followMeOnTwitter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  followMeOnTwitter as default
};
