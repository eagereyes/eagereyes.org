import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Story Points","description":"I consider presentation and storytelling the next step in visualization, after most of the focus has been on exploration and analysis so far. An upcoming version of Tableau will include a feature called Story Points, which supports presentation directly in the visualization tool.","frontmatter":{"title":"Story Points","description":"I consider presentation and storytelling the next step in visualization, after most of the focus has been on exploration and analysis so far. An upcoming version of Tableau will include a feature called Story Points, which supports presentation directly in the visualization tool.","date":"2013-10-06T20:12:25.000Z","tags":"Tableau, storytelling","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2013/10/storypoints-capture-button1.png"},"headers":[],"relativePath":"blog/2013/story-points.md","filePath":"blog/2013/story-points.md"}');
const _sfc_main = { name: "blog/2013/story-points.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="story-points" tabindex="-1">Story Points <a class="header-anchor" href="#story-points" aria-label="Permalink to &quot;Story Points&quot;">​</a></h1><p>I consider presentation and storytelling <a href="/papers/paper-storytelling-step-visualization">the next step in visualization</a>, after most of the focus has been on exploration and analysis so far. An upcoming version of Tableau will include a feature called Story Points, which supports presentation directly in the visualization tool.</p><h2 id="a-story" tabindex="-1">A Story <a class="header-anchor" href="#a-story" aria-label="Permalink to &quot;A Story&quot;">​</a></h2><p>A Tableau Story is a new type of sheet, like a worksheet or a dashboard. It consists of a set of story points, which are worksheets or dashboards in specific states. What that means is that the story point captures the filters, selections, and other things that you can do on a sheet without changing its structure.</p><p align="center"><img class="aligncenter size-medium wp-image-2648" alt="Story Points" src="https://media.eagereyes.org/wp-content/uploads/2013/10/storypoints-4.png" width="600" height="480"></p><p>A story point captures a particular point, or insight. The idea being that you can use this to guide somebody through your work to show them what you have found, and maybe even ask questions. That’s the low-key version of a story. The high-key version is then to tie these points together into a compelling narrative, which naturally requires more work.</p><p>In addition, each story point has a caption in the navigator you see at the top, and the story has a title (with an optional subtitle).</p><p>Story points work well with Tableau’s upcoming presentation mode, which puts the program into full-screen mode and allows you to use it like a presentation tool, while still being fully interactive, to drill down or do other things in response to questions.</p><p align="center"><img class="aligncenter size-medium wp-image-2650" alt="Story Points in Presentation Mode" src="https://media.eagereyes.org/wp-content/uploads/2013/10/storypoints-presentation.png" width="600" height="480"></p><h2 id="creating-story-points" tabindex="-1">Creating Story Points <a class="header-anchor" href="#creating-story-points" aria-label="Permalink to &quot;Creating Story Points&quot;">​</a></h2><p>The user interface is very simple and straightforward, and essentially consists of a single button: <em>Capture</em>. After adding a sheet to the story and making changes, you can capture the current state at any point. You can then continue working and capture another story point at any time (on the same sheet or a different one). Tableau simply remembers what state the sheet was in when you clicked the button.</p><p align="center"><img class="aligncenter size-full wp-image-2649" alt="Story Points Capture Button" src="https://media.eagereyes.org/wp-content/uploads/2013/10/storypoints-capture-button.png" width="600" height="190"></p><p>Don’t need a point, or don’t like the order? Story points can be rearranged by simply dragging and dropping them, and there is a little delete button when you hover over the point in the navigator at the top. The caption for a point can also be changed at any time without needing to capture again.</p><p>The way this works is similar to <a href="/blog/2013/ged-viz-data-storytelling-tool">GEDViz</a>, only based on a much more powerful visualization tool. GEDViz and Tableau are actually nice complements, since Tableau doesn’t do network diagrams right now.</p><h2 id="usage-scenarios" tabindex="-1">Usage Scenarios <a class="header-anchor" href="#usage-scenarios" aria-label="Permalink to &quot;Usage Scenarios&quot;">​</a></h2><p>Story points are meant to cover all the usage scenarios Jock Mackinlay and I laid out <a href="/papers/paper-storytelling-step-visualization">in our storytelling paper earlier this year</a>: presentation in front of an audience or colleagues, as well as people clicking through a prepared set of points on a web site.</p><p>In addition, they will undoubtedly be useful to provide an introduction to people you send a workbook to. It can be hard to get started with new data, so including a little guided tour through the most important points should be very useful to get somebody started.</p><p>When story points are released in Tableau 8.2 early next year, they will be available in Tableau Public as well (and of course Tableau Server and Tableau Online). This will make it possible for anybody to create stories from data and publish them, interaction and all, without the need to write a single line of code.</p><h2 id="reception" tabindex="-1">Reception <a class="header-anchor" href="#reception" aria-label="Permalink to &quot;Reception&quot;">​</a></h2><p>What surprised me <a href="/blog/2013/watch-tcc-keynote-live-monday">when I demoed the feature at TCC</a> was the response from corporate users. I thought that some might like it, but that many would be skeptical about what they would do with this. But it turns out that presentation is a real pain point. Many people export images from Tableau to PowerPoint for presentation, but then of course can’t interact with those in their presentations. Having the actual program running means you can answer questions right there.</p><p><a href="https://twitter.com/JonBoeckenstedt/status/377147325346750464" target="_blank" rel="noreferrer">https://twitter.com/JonBoeckenstedt/status/377147325346750464</a></p><p>It was pretty cool to get this amount of applause for such a new and different feature. In fact, story points were second only to the revealing of the Mac version in terms of audience response – and that was kind of an unfair competition.</p><p><a href="https://twitter.com/KatieBlye/status/377146203496267776" target="_blank" rel="noreferrer">https://twitter.com/KatieBlye/status/377146203496267776</a></p><p><a href="https://twitter.com/eleanorpd/status/377146027356082176" target="_blank" rel="noreferrer">https://twitter.com/eleanorpd/status/377146027356082176</a></p><p>If you want to see a demo of story points, check out <a href="http://www.ustream.tv/recorded/39494039">the TCC keynote video</a> and jump to 1:41:50 for my part.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on October 06, 2013</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2013/story-points.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const storyPoints = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  storyPoints as default
};
