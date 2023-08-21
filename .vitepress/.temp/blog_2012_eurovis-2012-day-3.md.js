import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"EuroVis 2012, Day 3","description":"I missed a few of the papers I wanted to see today, but there were again some interesting ones. The big event of the day was of course the social event at a Heuriger.","frontmatter":{"title":"EuroVis 2012, Day 3","description":"I missed a few of the papers I wanted to see today, but there were again some interesting ones. The big event of the day was of course the social event at a Heuriger.","date":"2012-06-07T23:02:56.000Z","tags":"conference, eurovis","featuredImage":null,"outline":false},"headers":[],"relativePath":"blog/2012/eurovis-2012-day-3.md","filePath":"blog/2012/eurovis-2012-day-3.md"}');
const _sfc_main = { name: "blog/2012/eurovis-2012-day-3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="eurovis-2012-day-3" tabindex="-1">EuroVis 2012, Day 3 <a class="header-anchor" href="#eurovis-2012-day-3" aria-label="Permalink to &quot;EuroVis 2012, Day 3&quot;">​</a></h1><p>I missed a few of the papers I wanted to see today, but there were again some interesting ones. The big event of the day was of course the social event <a href="http://en.wikipedia.org/wiki/Heuriger">at a Heuriger</a>.</p><p><em>ClockMap: Enhancing Circular Treemaps with Temporal Glyphs for Time-Series Data</em> by Fabian Fischer, Johannes Fuchs, and Florian Mansmann is an interesting approach for finding temporal trends in a large amount of data. The visual metaphor is based on circles, with some gradients to make them look prettier, which drew some criticism during the discussion. It’s also unclear how well this works for periods that are longer than one day.</p><p><em>arcs.fm - A Backdrop Visualization for Music Talk</em> by Dominikus Baur, Andreas Butz, and Sheelagh Carpendale is an interesting project that shows people’s listening histories and makes it possible to compare them in order to facilitate discussions about music. One of the goals was to keep it simple so as to not interfere with the actual discussion, so both the display and the interaction are fairly straight-forward and limited. The use of arcs makes it easy to read, but given the large number of different artists and songs people tend to listen to they end up being very sparse.</p><p>One of the papers that I absolutely wanted to see and actually got to see is <em>The Effects of Visualization Feedback on Promoting Health Goal Progress in Older Adults</em> by Tuan Pham, Shannon Mejía, Ronald Metoyer, and Karen Hooker. The project’s goal was to provide simple tools for people to see how well they were doing on some basic fitness goals. They found some interesting results, like that people who used their progress visualization ended up being more active on the same day, but less active the next. They were very careful and deliberate about their design, but perhaps could have made it a bit more fun and engaging to get stronger effects. Adding some simple gamification denatures might also have helped to give people intermediate goals while working towards their monthly totals. The paper is not available online, but <a href="http://web.engr.oregonstate.edu/~pham/projects/pulse/">the project website</a> has some information.</p><p>The final paper was <em>Perception of Animated Node-Link Diagrams for Dynamic Graphs</em> by Sohaib Ghani, Niklas Elmqvist, and Ji Soo Yi. They studied the difference in how well people would remember changes in graphs depending on whether the graph layout was static or changed in response to node additions or deletions. Not surprisingly, the dynamic layout caused distraction, so people did better with the static layout in all cases. The study was very well done, they even came up with a long list of metric of what could be causing distractions (edges crossing, nodes crossing edges, amount of movement, etc.). However, subjects were staring at the screen during the change; a more realistic scenario would have been somebody fiddling with a filter and missing changes in the static case, and perhaps having a chance of seeing them in the dynamic one.</p><p>The day was ended with copious amounts of wine and food at a Heuriger, which is a typical Austrian thing where people go to eat and drink (a lot). Friday is going to be short, but the capstone at the end promises to be highly interesting and thought-provoking.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on June 07, 2012</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://web.engr.oregonstate.edu/~pham/" rel="nofollow noopener" target="_blank">Tuan Pham</a> says…</p><blockquote><p>Dr. Kosara, thank you for your interest in our paper. I&#39;ve put the links to the paper and supplemental document on <a href="http://web.engr.oregonstate.edu/~pham/projects/pulse/" rel="nofollow">the project website</a>.</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2012/eurovis-2012-day-3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const eurovis2012Day3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  eurovis2012Day3 as default
};
