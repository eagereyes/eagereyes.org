import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Storytelling: Minard vs. Nightingale","description":"There is a lot of confusion about storytelling and what tells a story. I have argued previously that stories do not tell themselves. Rather, we tell the stories given raw materials. Some of these materials lend themselves better to ad-hoc storytelling, so we tend to say that they actually tell the story, when it's really us who do it.","frontmatter":{"title":"Storytelling: Minard vs. Nightingale","description":"There is a lot of confusion about storytelling and what tells a story. I have argued previously that stories do not tell themselves. Rather, we tell the stories given raw materials. Some of these materials lend themselves better to ad-hoc storytelling, so we tend to say that they actually tell the story, when it's really us who do it.","date":"2012-08-13T20:34:40.000Z","tags":"blog/2013","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2014/06/Minard-Napoleon.png"},"headers":[],"relativePath":"blog/2012/storytelling-minard-vs-nightingale.md","filePath":"blog/2012/storytelling-minard-vs-nightingale.md"}`);
const _sfc_main = { name: "blog/2012/storytelling-minard-vs-nightingale.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="storytelling-minard-vs-nightingale" tabindex="-1">Storytelling: Minard vs. Nightingale <a class="header-anchor" href="#storytelling-minard-vs-nightingale" aria-label="Permalink to &quot;Storytelling: Minard vs. Nightingale&quot;">​</a></h1><p>There is a lot of confusion about storytelling and what tells a story. I have <a title="Stories Don’t Tell Themselves" href="/blog/2010/stories-dont-tell-themselves">argued previously that stories do not tell themselves</a>. Rather, we tell the stories given raw materials. Some of these materials lend themselves better to ad-hoc storytelling, so we tend to say that they actually tell the story, when it&#39;s really us who do it.</p><h2 id="exhibit-a-minard" tabindex="-1">Exhibit A: Minard <a class="header-anchor" href="#exhibit-a-minard" aria-label="Permalink to &quot;Exhibit A: Minard&quot;">​</a></h2><p>A particular example of the easy storytelling genre are maps, and a particularly famous example is Charles Minard&#39;s visualization of Napoleon&#39;s Russian campaign in 1812/13. While not immediately obvious if you haven&#39;t seen it before, this is really a map, with the Polish border in the west and Moscow in the east. The width of the ribbon shows the number of men in Napoleon&#39;s army: he starts out with 422,000, loses a lot of them before he even reaches Moscow, where he arrives with 100,000; turns around and makes it back with all of 10,000 men.</p><p align="center"><img class="aligncenter size-medium wp-image-8238" src="https://media.eagereyes.org/wp-content/uploads/2014/06/Minard-Napoleon.png" alt="Minard, Napoleon&#39;s March" width="730" height="348"></p><p>What makes this such a compelling visualization? There is more to it than just the width of the ribbon. The line graph at the bottom shows temperatures, with the highest one being freezing, and most of the way being considerably colder. There is not just space, but time. Of course, time and space are tied together, they are not independent here. But the temporal dimension is what draws us in and makes this into a sort of road movie: we can follow along a journey.</p><h2 id="exhibit-b-nightingale" tabindex="-1">Exhibit B: Nightingale <a class="header-anchor" href="#exhibit-b-nightingale" aria-label="Permalink to &quot;Exhibit B: Nightingale&quot;">​</a></h2><p>Another famous chart is Nightingale&#39;s depiction of deaths of British soldiers in the Crimean War in 1854-56 (often wrongly referred to as a <em>coxcomb plot</em>). The depiction here is more abstract because there is no map, but the amount of information is comparable. There are 24 months of data, with three values each (one for each cause of death). Reading the visualization is a bit more challenging: you start in the nine-o&#39;clock position on the right chart, go around clockwise and then follow the line to the left chart where you again start at nine o&#39;clock and follow the circle segments in a clockwise direction.</p><p align="center"><img class="aligncenter size-medium wp-image-8239" src="https://media.eagereyes.org/wp-content/uploads/2012/08/Nightingale-mortality1-730x459.jpg" alt="Florence Nightingale, Diagram of the Causes of Mortality in the Army in the East" width="730" height="459"></p><p>So we have time here, and we have suffering: this is about soldiers being wounded or killed in combat, and dying from horrible infections and disease (the red part shows deaths from wounds, blue shows infectious disease, and black shows all other causes). But the depiction is clearly less compelling than Minard&#39;s, and much harder to turn into a story.</p><h2 id="storytelling-affordances" tabindex="-1">Storytelling Affordances <a class="header-anchor" href="#storytelling-affordances" aria-label="Permalink to &quot;Storytelling Affordances&quot;">​</a></h2><p>The key difference, I believe, is the map. It makes it easy for us to turn the temporal sequence into a story. It&#39;s the analog of drawing out a path on a map with your finger, a kind of virtual journey. It also helps that the first leg of Napoleon&#39;s march is going left to right on the map, the natural reading direction in the West. Movement is progress, and it pushes the story along. We are used to these kinds of stories, many of the oldest stories in existence (<em>The Odyssey</em>, for example) are based on journeys (even if not on roads).</p><p>It&#39;s also a kind of lazy storytelling. Of course you can make people see a story when you give them a map. But what if there is no map? What if location doesn&#39;t mean anything? I don&#39;t know if Minard was interested in telling a story, or if he considered not using a map. I do know that Nightingale&#39;s goal was not to tell a story, but to convince an audience that had barely heard of statistics, much less understood what numbers could tell them. But whether those decisions were based on the intent to tell stories or not, the outcomes are vastly different.</p><p>We are so hard-wired for causality and stories that it&#39;s difficult to look at something like a map and not tell a story. We are incredibly creative at filling in the blanks. That can be useful when we are given hints and we revel in the creative act of making up a story (good photography evokes that kind of storytelling), but it can also lead to misinterpretation and wrong conclusions. The key to storytelling with data is not only to be able to convey a story, but to make sure that it&#39;s the intended one.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on August 13, 2012</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://www.annettesimmons.com" rel="nofollow noopener" target="_blank">Annette Simmons</a> says…</p><blockquote><p>Thank you for reminding me how much maps and charts tell stories, or activate us to make up our own stories. I will be working with some doctors soon and I need to remember that.</p></blockquote><p>derek says…</p><blockquote><p>The key dimension in a story is not space, but time. For some reason Nightingale chose to bury the time. A Playfair-style bar chart would have been much more compelling, but I think cartesian time-series charts were already thought &quot;boring&quot; and &quot;conventional&quot; even then.</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2012/storytelling-minard-vs-nightingale.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const storytellingMinardVsNightingale = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  storytellingMinardVsNightingale as default
};
