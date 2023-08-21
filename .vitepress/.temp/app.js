import { defineComponent, mergeProps, useSSRContext, shallowRef, inject, computed, ref, onUnmounted, reactive, markRaw, readonly, nextTick, h, onMounted, unref, watchEffect, watch, watchPostEffect, onUpdated, resolveComponent, createVNode, resolveDynamicComponent, withCtx, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, defineAsyncComponent, provide, toHandlers, withKeys, useSlots, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrRenderStyle, renderToString } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import { useMediaQuery, useWindowScroll, onKeyStroke } from "@vueuse/core";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
const fonts = "";
const vars = "";
const base = "";
const utils = "";
const customBlock = "";
const vpCode = "";
const vpCodeGroup = "";
const vpDoc = "";
const vpSponsor = "";
const _sfc_main$1g = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  __ssrInlineRender: true,
  props: {
    text: {},
    type: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["VPBadge", _ctx.type ?? "tip"]
      }, _attrs))} data-v-7a7936a3>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(_ctx.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const VPBadge_vue_vue_type_style_index_0_scoped_7a7936a3_lang = "";
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPBadge.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const VPBadge = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["__scopeId", "data-v-7a7936a3"]]);
function deserializeFunctions(r) {
  return Array.isArray(r) ? r.map(deserializeFunctions) : typeof r == "object" && r !== null ? Object.keys(r).reduce((t, n) => (t[n] = deserializeFunctions(r[n]), t), {}) : typeof r == "string" && r.startsWith("_vp-fn_") ? new Function(`return ${r.slice(7)}`)() : r;
}
const siteData = deserializeFunctions(JSON.parse(`{"lang":"en-US","dir":"ltr","title":"eagereyes.org","titleTemplate":":title - eagereyes.org","description":"Visualization and Visual Communication","base":"/","head":[],"appearance":true,"themeConfig":{"siteTitle":false,"logo":{"light":"https://media.eagereyes.org/eagereyes-logo-dark.svg","dark":"https://media.eagereyes.org/eagereyes-logo-light.svg","alt":"eagereyes Logo"},"nav":[{"text":"Practical","items":[{"text":"Pie Charts","link":"/pie-charts"},{"text":"YouTube Videos","link":"/tag/eagereyestv"},{"text":"Book Reviews","link":"/tag/book-reviews"},{"text":"Blog","link":"/blog/"}]},{"text":"Academic","items":[{"text":"My Publications","link":"/publications/"},{"text":"Conference Reports","link":"/tag/conference"},{"text":"Peer Review","link":"/tag/peer-review"},{"text":"Lists of Influences","link":"/tag/influences"},{"text":"Common Speaking Mistakes","link":"/blog/2016/common-speaking-mistakes-to-avoid"},{"text":"Criticism","link":"/tag/criticism"}]},{"text":"Admin","items":[{"text":"About","link":"/about"},{"text":"Contact","link":"/contact"},{"text":"License","link":"/license"}]}],"sidebar":{"/blog/":[{"text":"Blog","items":[{"text":"Blog 2023","items":[{"text":"Rainbow Colormaps Are Not All Bad (Paper)","link":"/blog/2023/rainbow-colormaps-are-not-all-bad-paper.md"},{"text":"Paper: Notebooks for Data Analysis and Visualization","link":"/blog/2023/paper-notebooks-for-data-analysis-and-visualization.md"},{"text":"Course on Data Vis Fundamentals and Best Practices","link":"/blog/2023/course-on-data-vis-fundamentals-and-best-practices.md"},{"text":"New video: Exploring the connections between companies with They Rule","link":"/blog/2023/new-video-exploring-the-connections-between-companies-with-they-rule.md"}],"collapsed":true},{"text":"Blog 2022","items":[{"text":"Site Changes Coming, How to Follow Sites, and Where I've Been","link":"/blog/2022/site-changes-coming-how-to-follow-sites-and-where-ive-been.md"},{"text":"Midjourney is a Trip","link":"/blog/2022/midjourney-is-a-trip.md"},{"text":"New video: Gauges for Data Visualization, The NY Times Election Needle, and Circular Bar Charts","link":"/blog/2022/new-video-gauges-for-data-visualization-the-ny-times-election-needle-and-circular-bar-charts.md"},{"text":"Watch My Outlier Talk: This Should Have Been A Bar Chart!","link":"/blog/2022/watch-my-outlier-talk-this-should-have-been-a-bar-chart.md"},{"text":"Paper: More Than Meets the Eye: A Closer Look at Encodings in Visualization","link":"/blog/2022/paper-more-than-meets-the-eye-a-closer-look-at-encodings-in-visualization.md"},{"text":"The (Possible) Stratagem Behind the Biden Bar","link":"/blog/2022/the-possible-stratagem-behind-the-biden-bar.md"},{"text":"The NY Times COVID Spiral Is Off-Center","link":"/blog/2022/the-ny-times-covid-spiral-is-off-center.md"}],"collapsed":true},{"text":"Blog 2021","items":[{"text":"New Video: The Science of Pie Charts","link":"/blog/2021/new-video-the-science-of-pie-charts.md"},{"text":"Paper: From Jam Session to Recital: Synchronous Communication and Collaboration Around Data in Organizations","link":"/blog/2021/paper-from-jam-session-to-recital-synchronous-communication-and-collaboration-around-data-in-organizations.md"},{"text":"EagerEyes Turns 15","link":"/blog/2021/eagereyes-turns-15.md"},{"text":"Can A Timeline Pie Chart Work?","link":"/blog/2021/can-a-timeline-pie-chart-work.md"},{"text":"New video: Chart Appreciation, Iraq's Bloody Toll by Simon Scarr","link":"/blog/2021/new-video-chart-appreciation-iraqs-bloody-toll-by-simon-scarr.md"},{"text":"When the Wrong Chart Is the Right Choice","link":"/blog/2021/when-the-wrong-chart-is-the-right-choice.md"},{"text":"New Video: Linear vs. Quadratic Change","link":"/blog/2021/new-video-linear-vs-quadratic-change.md"},{"text":"New video: Florence Nightingale's Famous Rose Chart (aka \\"Coxcomb\\")","link":"/blog/2021/new-video-florence-nightingales-famous-rose-chart-aka-coxcomb.md"},{"text":"New video: Chart Appreciation, Black vs. White Boys and The Punishing Reach of Racism","link":"/blog/2021/new-video-chart-appreciation-black-vs-white-boys-and-the-punishing-reach-of-racism.md"},{"text":"The Dearth of Videos about Visualization","link":"/blog/2021/the-dearth-of-videos-about-visualization.md"},{"text":"eagereyesTV: Minard's Famous \\"Napoleon's March\\" Chart – What It Shows, What It Doesn't","link":"/blog/2021/eagereyestv-minards-famous-napoleons-march-chart-what-it-shows-what-it-doesnt.md"},{"text":"Felix Auerbach, Die Graphische Darstellung (Graphical Representation, 1914)","link":"/blog/2021/felix-auerbach-die-graphische-darstellung-graphical-representation-1914.md"}],"collapsed":true},{"text":"Blog 2020","items":[{"text":"Video Series: Counting In 2021 with Mechanical Calculators","link":"/blog/2020/video-series-counting-in-2021-with-mechanical-calculators.md"},{"text":"eagereyesTV: Chart Appreciation, What's Really Warming the World","link":"/blog/2020/eagereyestv-chart-appreciation-whats-really-warming-the-world.md"},{"text":"All (Line) Charts are Wrong, But Some Are Useful","link":"/blog/2020/all-line-charts-are-wrong-but-some-are-useful.md"},{"text":"eagereyesTV: Index Charts, Part 2: Chopping Up and Folding the Time Axis","link":"/blog/2020/eagereyestv-index-charts-part-2-chopping-up-and-folding-the-time-axis.md"},{"text":"eagereyesTV: Index Charts, Part 1: Making Time Series Data Comparable","link":"/blog/2020/eagereyestv-index-charts-part-1-making-time-series-data-comparable.md"},{"text":"More Things To Do at VIS: BELIV, VisLies, Social Media Meetup, Etc.","link":"/blog/2020/more-things-to-do-at-vis-beliv-vislies-social-media-meetup-etc.md"},{"text":"An Outsider’s Guide to the IEEE VIS Conference 2020","link":"/blog/2020/an-outsiders-guide-to-ieee-vis-2020.md"},{"text":"What Happened to ISOTYPE?","link":"/blog/2020/what-happened-to-isotype.md"},{"text":"New eagereyesTV Video and Series: Chart Appreciation","link":"/blog/2020/new-eagereyestv-video-and-series-chart-appreciation.md"},{"text":"Prior Work We Missed In Our Connected Scatterplots Paper","link":"/blog/2020/prior-work-we-missed-in-our-connected-scatterplots-paper.md"},{"text":"Tracking 19,000 Runners Over 1,000km Across Virtual Tennessee","link":"/blog/2020/tracking-19000-runners-over-1000km-across-virtual-tennessee.md"},{"text":"CFP: The Third Workshop on Visualization for Communication (VisComm) at VIS 2020","link":"/blog/2020/cfp-the-third-workshop-on-visualization-for-communication-viscomm-at-vis-2020.md"},{"text":"In Praise of the Diagonal Reference Line","link":"/blog/2020/in-praise-of-the-diagonal-reference-line.md"},{"text":"The Visual Evolution of the \\"Flattening the Curve\\" Information Graphic","link":"/blog/2020/the-visual-evolution-of-the-flattening-the-curve-information-graphic.md"}],"collapsed":true},{"text":"Blog 2019","items":[{"text":"eagereyesTV: What Is Data? Part 2, Are Images Data?","link":"/blog/2019/eagereyestv-what-is-data-part-2-are-images-data.md"},{"text":"ISOTYPE Book: Young, Prager, There’s Work for All","link":"/blog/2019/isotype-book-young-prager-theres-work-for-all.md"},{"text":"Review: Alberto Cairo, How Charts Lie","link":"/blog/2019/review-alberto-cairo-how-charts-lie.md"},{"text":"eagereyesTV: What is Data? Part 1, File Formats and Intent","link":"/blog/2019/eagereyestv-what-is-data-part-1-file-formats-and-intent.md"},{"text":"Prolific, the (Much Better) Mechnical Turk Alternative","link":"/blog/2019/prolific-the-much-better-mechnical-turk-alternative.md"},{"text":"eagereyesTV Episode 3: 3D Pie Charts For Science!","link":"/blog/2019/eagereyestv-episode-3-3d-pie-charts-for-science.md"},{"text":"Paper: Evidence for Area as the Primary Visual Cue in Pie Charts","link":"/blog/2019/paper-evidence-for-area-as-the-primary-visual-cue-in-pie-charts.md"},{"text":"eagereyesTV Episode 2: Unit Charts, Dot Plots, ISOTYPE, and What Makes Them Special","link":"/blog/2019/eagereyestv-episode-2-unit-charts-dot-plots-and-isotype-and-what-makes-them-special.md"},{"text":"XIII","link":"/blog/2019/xiii.md"},{"text":"Data: Intent and Primary Interpretation","link":"/blog/2019/data-intent-and-primary-interpretation.md"},{"text":"Introducing eagereyesTV, My New YouTube Channel","link":"/blog/2019/introducing-eagereyestv-my-new-youtube-channel.md"},{"text":"eagereyesTV Episode 1: The DataSaurus, Anscombe’s Quartet, and why summary statistics need to be taken with a grain of salt","link":"/blog/2019/eagereyestv-episode-1-the-datasaurus-anscombes-quartet-and-why-summary-statistics-need-to-be-taken-with-a-grain-of-salt.md"},{"text":"Highlights from EuroVis 2019, Part 2","link":"/blog/2019/highlights-from-eurovis-2019-part-2.md"},{"text":"Highlights from EuroVis 2019, Part 1","link":"/blog/2019/highlights-from-eurovis-2019-part-1.md"},{"text":"What Is A Misleading Chart?","link":"/blog/2019/what-is-a-misleading-chart.md"},{"text":"Visualization for Communication Workshop Deadline Pushed to July 15","link":"/blog/2019/visualization-for-communication-workshop-deadline-pushed-to-july-15.md"},{"text":"Two Short Papers on Part-to-Whole Charts at EuroVis","link":"/blog/2019/two-short-papers-on-part-to-whole-charts-at-eurovis.md"},{"text":"Critiquing and Redesigning","link":"/blog/2019/critiquing-and-redesigning.md"},{"text":"The TrustVis Workshop at EuroVis","link":"/blog/2019/the-trustvis-workshop-at-eurovis.md"},{"text":"Link: Maarten Lambrecht's List of 2018 Visualization Lists","link":"/blog/2019/maarten-lambrechts-list-of-2018-visualization-lists.md"}],"collapsed":true},{"text":"Blog 2018","items":[{"text":"New Vis Research Blog: Multiple Views","link":"/blog/2018/new-vis-research-blog-multiple-views.md"},{"text":"Tapestry 2018 Program, Call for Demos","link":"/blog/2018/tapestry-2018-program-call-for-demos.md"},{"text":"IEEE VIS 2018, Part 3: New Approaches, Meet the Founders, Perception and Cognition","link":"/blog/2018/ieee-vis-2018-storytelling-meet-the-founders-perception-and-cognition.md"},{"text":"IEEE VIS 2018, Part 2: Time, Evaluation, Dashboards, The Future of VIS","link":"/blog/2018/ieee-vis-2018-time-evaluation-dashboards-the-future-of-vis.md"},{"text":"IEEE VIS 2018, Part 1: VisComm, VisInPractice, BELIV, Best Papers","link":"/blog/2018/ieee-vis-2018-viscomm-visinpractice-beliv-best-papers.md"},{"text":"Paper: Skipping the Replication Crisis in Visualization","link":"/blog/2018/skipping-the-replication-crisis-in-visualization.md"},{"text":"Tapestry 2018, Details and Keynote Speakers","link":"/blog/2018/tapestry-2018-details-and-keynote-speakers.md"},{"text":"EuroVis 2018, Wednesday through Friday","link":"/blog/2018/eurovis-2018-wednesday-through-friday.md"},{"text":"EuroVis 2018, Monday and Tuesday","link":"/blog/2018/eurovis-2018-monday-and-tuesday.md"},{"text":"VisComm Workshop at VIS and Tapestry 2018","link":"/blog/2018/viscomm-workshop-at-vis-and-tapestry-2018.md"},{"text":"Portrait: Jason Dykes","link":"/blog/2018/jason-dykes.md"},{"text":"Visualization: Three Alternate Histories","link":"/blog/2018/visualization-five-alternate-histories.md"},{"text":"Seven Visualization Talks That Terrified Me At CHI","link":"/blog/2018/seven-visualization-talks-that-terrified-me-at-chi.md"},{"text":"How to Get Excited About Standard Datasets","link":"/blog/2018/how-to-get-excited-about-standard-datasets.md"},{"text":"Visualization Potpourri, March 2018","link":"/blog/2018/march-2018.md"},{"text":"EuroRVVV Call For Papers!","link":"/blog/2018/eurorvvv-call-for-papers.md"},{"text":"A Smart Take on Election Maps","link":"/blog/2018/a-smart-take-on-election-maps.md"}],"collapsed":true},{"text":"Blog 2017","items":[{"text":"Speaking: How to Use A Microphone","link":"/blog/2017/speaking-how-to-use-a-microphone.md"},{"text":"Vis Potpourri, October 2017","link":"/blog/2017/october-2017.md"},{"text":"ISOTYPE Book: Florence, Only An Ocean Between","link":"/blog/2017/isotype-book-florence-only-an-ocean-between.md"},{"text":"Portrait: Danielle Albers Szafir","link":"/blog/2017/danielle-albers-szafir.md"},{"text":"IEEE VIS 2017: A SciVis Perspective","link":"/blog/2017/ieee-vis-2017-a-scivis-perspective.md"},{"text":"IEEE VIS 2017: Machine Learning, Diversity, Parties","link":"/blog/2017/ieee-vis-2017-machine-learning-diversity-parties.md"},{"text":"IEEE VIS 2017: Perception, Evaluation, Vision Science","link":"/blog/2017/ieee-vis-2017-perception-evaluation-vision.md"},{"text":"IEEE VIS 2017: Word Clouds, Stories, Interaction","link":"/blog/2017/ieee-vis-2017-word-clouds-sparklines-stories-interaction.md"},{"text":"IEEE VIS 2017: Keynote and Capstone","link":"/blog/2017/ieee-vis-2017-keynote-and-capstone.md"},{"text":"IEEE VIS 2017: Best Papers and Other Awards","link":"/blog/2017/ieee-vis-2017-best-papers-keynote-capstone.md"},{"text":"Visualization as a Field Is Still Invisible","link":"/blog/2017/visualization-as-a-field-is-still-invisible.md"},{"text":"Vis Potpourri, September 2017","link":"/blog/2017/september-2017.md"},{"text":"Review: Putting Stories to Work and Out On the Wire","link":"/blog/2017/review-putting-stories-to-work-and-out-on-the-wire.md"},{"text":"The Season of Storytelling: Kicking It Off With A Podcast","link":"/blog/2017/the-season-of-storytelling-kicking-it-off-with-a-podcast.md"},{"text":"Communicating Uncertainty When Lives Are on the Line","link":"/blog/2017/communicating-uncertainty-when-lives-are-on-the-line.md"},{"text":"The Importance of Context","link":"/blog/2017/the-importance-of-context.md"},{"text":"Joy Plots","link":"/blog/2017/joy-plots.md"},{"text":"Building Bridges Between Insular InfoVis Papers","link":"/blog/2017/building-bridges-between-insular-infovis-papers.md"},{"text":"EuroVis 2017 Conference Report, Part 3","link":"/blog/2017/eurovis-2017-thursday.md"},{"text":"EuroVis 2017 Conference Report, Part 2","link":"/blog/2017/eurovis-2017-conference-report-part-2.md"},{"text":"EuroVis 2017 Conference Report, Part 1","link":"/blog/2017/eurovis-2017-conference-report-part-1.md"},{"text":"Paper: An Argument Structure for Data Stories","link":"/blog/2017/paper-an-argument-structure-for-data-stories.md"},{"text":"Paper: Readability and Precision in Pictorial Bar Charts","link":"/blog/2017/paper-readability-and-precision-in-pictorial-bar-charts.md"},{"text":"Paper: Finding a Clear Path: Structuring Strategies for Visualization Sequences","link":"/blog/2017/paper-finding-a-clear-path-structuring-strategies-for-visualization-sequences.md"},{"text":"InfoVis Papers at CHI 2017","link":"/blog/2017/infovis-papers-at-chi-2017.md"},{"text":"Linkstravaganza: Schwabish's Story Links and Andrews' Seeking Minard","link":"/blog/2017/linkstravaganza-schwabishs-story-links-and-andrews-seeking-minard.md"},{"text":"Averages Are Metadata","link":"/blog/2017/averages-are-metadata.md"},{"text":"Huge Percentages Are Meaningless","link":"/blog/2017/huge-percentages-are-meaningless.md"},{"text":"How Do We Know That? – Video of My Talk at UW","link":"/blog/2017/how-do-we-know-that.md"},{"text":"ISOTYPE Book: Priestley, British Women Go To War","link":"/blog/2017/isotype-book-priestley-british-women-go-to-war.md"},{"text":"Sonification: The Power, The Problems","link":"/blog/2017/sonification-the-power-the-problems.md"},{"text":"Encoding vs. Decoding","link":"/blog/2017/encoding-vs-decoding.md"},{"text":"Come To My Talk At UW On Tuesday, February 21","link":"/blog/2017/come-to-my-talk-at-uw-on-tuesday-february-21.md"},{"text":"Hans Rosling: An Appreciation","link":"/blog/2017/hans-rosling-an-appreciation.md"},{"text":"Let’s Crowd-Fund the Data Stories Podcast!","link":"/blog/2017/lets-crowd-fund-the-data-stories-podcast.md"},{"text":"The State of Information Visualization, 2017","link":"/blog/2017/the-state-of-information-visualization-2017.md"},{"text":"ISOTYPE Book: Mackenzie, The Vital Flame","link":"/blog/2017/mackenzie-the-vital-flame.md"},{"text":"New Series: ISOTYPE Books","link":"/blog/2017/intro.md"},{"text":"Posters Program for Tapestry 2017","link":"/blog/2017/posters-program-for-tapestry-2017.md"}],"collapsed":true},{"text":"Blog 2016","items":[{"text":"A Roundup of Year-End News Graphics Roundups","link":"/blog/2016/a-roundup-of-year-end-roundups.md"},{"text":"The Dumbest User Interface of 2016","link":"/blog/2016/the-dumbest-user-interface-of-2016.md"},{"text":"When Rankings Are Just Data Porn","link":"/blog/2016/when-rankings-are-just-data-porn.md"},{"text":"The EagerEyes Holiday Shopping Guide","link":"/blog/2016/the-eagereyes-holiday-shopping-guide.md"},{"text":"Review: Jon Schwabish, Better Presentations","link":"/blog/2016/review-jon-schwabish-better-presentations.md"},{"text":"The Problem with Vis Taxonomies","link":"/blog/2016/the-problem-with-vis-taxonomies.md"},{"text":"RJ Andrews' Profiling the Parks","link":"/blog/2016/rj-andrews-profiling-the-parks.md"},{"text":"Dealing with Paper Rejections","link":"/blog/2016/dealing-with-paper-rejections.md"},{"text":"Graphic Continuum Flash Cards","link":"/blog/2016/graphic-continuum-flash-cards.md"},{"text":"Ten Great Talks at Information+ 2016","link":"/blog/2016/ten-great-talks-at-information-2016.md"},{"text":"All Those Misleading Election Maps","link":"/blog/2016/all-those-misleading-election-maps.md"},{"text":"VIS 2016 – Thursday, Friday: Empirical Methods, Better Presentations","link":"/blog/2016/vis-2016-thursday-friday-empirical-methods-better-presentations.md"},{"text":"VIS 2016 – Wednesday, Thursday: Papers and the Death of SciVis","link":"/blog/2016/vis-2016-wednesday-thursday-papers-and-the-death-of-scivis.md"},{"text":"VIS 2016 – Tuesday","link":"/blog/2016/vis-2016-tuesday.md"},{"text":"VIS 2016 – Sunday, Monday: BELIV and Being Contrarian","link":"/blog/2016/vis-2016-sunday-monday-beliv-and-being-contrarian.md"},{"text":"Common Speaking Mistakes To Avoid","link":"/blog/2016/common-speaking-mistakes-to-avoid.md"},{"text":"A Treemap Chart Pie","link":"/blog/2016/a-treemap-chart-pie.md"},{"text":"IEEE VIS Pointers and Running","link":"/blog/2016/ieee-vis-pointers-and-vis-running.md"},{"text":"Paper: An Empire Built On Sand","link":"/blog/2016/an-empire-built-on-sand.md"},{"text":"The Winding Path of Data Analysis","link":"/blog/2016/the-winding-path-of-data-analysis.md"},{"text":"A Decade of EagerEyes","link":"/blog/2016/a-decade-of-eagereyes.md"},{"text":"The EagerEyes Origin Story","link":"/blog/2016/the-eagereyes-origin-story.md"},{"text":"Why I Do This","link":"/blog/2016/why-i-do-this.md"},{"text":"Meet the New Logo and Theme!","link":"/blog/2016/meet-the-new-logo-and-theme.md"},{"text":"The Controversies","link":"/blog/2016/the-controversies.md"},{"text":"Eagereyes' Early History","link":"/blog/2016/eagereyes-early-history.md"},{"text":"The Ten Years of EagerEyes Blogstravaganza","link":"/blog/2016/blogstravaganza.md"},{"text":"Talk: Pie Charts – Unloved, Unstudied, and Misunderstood","link":"/blog/2016/pie-charts-unloved-unstudied-and-misunderstood.md"},{"text":"Tapestry 2017: St. Augustine, FL on March 1st","link":"/blog/2016/tapestry-2017-st-augustine-fl-on-march-1st.md"},{"text":"Ben Shneiderman's Chart Pies","link":"/blog/2016/ben-shneidermans-chart-pies.md"},{"text":"Link: xkcd's Earth Temperature Timeline","link":"/blog/2016/xkcds-earth-temperature-timeline.md"},{"text":"Review: Lupi, Posavec, Dear Data","link":"/blog/2016/review-lupi-posavec-dear-data.md"},{"text":"Link: Jérôme Cukier's Series on Visualization with React","link":"/blog/2016/jerome-cukiers-series-on-visualization-with-react.md"},{"text":"Nassi-Shneiderman Diagrams","link":"/blog/2016/nassi-shneiderman-diagrams.md"},{"text":"Stacked Bars Are the Worst","link":"/blog/2016/stacked-bars-are-the-worst.md"},{"text":"Two Ideas for a Better Visualization Web","link":"/blog/2016/two-ideas-for-a-better-visualization-web.md"},{"text":"The Repetitive and Boring History of Visualization","link":"/blog/2016/the-repetitive-and-boring-history-of-visualization.md"},{"text":"Link: Our World in Data","link":"/blog/2016/our-world-in-data.md"},{"text":"The Bits Are Rotting in the State of Data Journalism","link":"/blog/2016/the-bits-are-rotting-in-the-state-of-data-journalism.md"},{"text":"A Reanalysis of A Study About (Square) Pie Charts from 2009","link":"/blog/2016/a-reanalysis-of-a-study-about-square-pie-charts-from-2009.md"},{"text":"Link: Mona Chalabi's Data Sketches on Instagram","link":"/blog/2016/mona-chalabis-data-sketches-on-instagram.md"},{"text":"New, Improved Traveling Presidential Candidate Map","link":"/blog/2016/new-improved-traveling-presidential-candidate-map.md"},{"text":"The Café Wall Illusion in a Bar Chart","link":"/blog/2016/the-cafe-wall-illusion-in-a-bar-chart.md"},{"text":"An Illustrated Tour of the Pie Chart Study Results","link":"/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results.md"},{"text":"Publicize, Don't Just Publish!","link":"/blog/2016/publicize-dont-just-publish.md"},{"text":"EuroVis 2016, Thursday and Friday","link":"/blog/2016/eurovis-2016-thursday-and-friday.md"},{"text":"EuroVis 2016, Tuesday and Wednesday","link":"/blog/2016/eurovis-2016-tuesday-and-wednesday.md"},{"text":"EuroVis Coverage and Running","link":"/blog/2016/eurovis-coverage-and-running.md"},{"text":"A Pair of Pie Chart Papers","link":"/blog/2016/a-pair-of-pie-chart-papers.md"},{"text":"The Scrollytelling Scourge","link":"/blog/2016/the-scrollytelling-scourge.md"},{"text":"Row-Level Thinking vs. Cube Thinking","link":"/blog/2016/row-level-thinking-vs-cube-thinking.md"},{"text":"OpenVis 2016 Talk Videos and Pointers","link":"/blog/2016/openvis-2016-talk-videos-and-pointers.md"},{"text":"New Edition of Designing the User Interface","link":"/blog/2016/new-edition-of-designing-the-user-interface.md"},{"text":"MTurk IDs Are Not Anonymous","link":"/blog/2016/mturk-ids-are-not-anonymous.md"},{"text":"3D Bar Charts Considered Not That Harmful","link":"/blog/2016/3d-bar-charts-considered-not-that-harmful.md"},{"text":"Introducing Shift Register, My New Electronics Blog","link":"/blog/2016/introducing-shift-register-my-new-electronics-blog.md"},{"text":"Spreadsheet Thinking vs. Database Thinking","link":"/blog/2016/spreadsheet-thinking-vs-database-thinking.md"},{"text":"The Personified User Interface Trap","link":"/blog/2016/the-personified-user-interface-trap.md"},{"text":"Links: Scott Klein on the History of Data Journalism","link":"/blog/2016/scott-klein-on-the-history-of-data-journalism.md"},{"text":"The Two-Paper Package","link":"/blog/2016/the-two-paper-package.md"},{"text":"Ye Olde Pie Chart Debate","link":"/blog/2016/ye-olde-pie-chart-debate.md"},{"text":"The State of Information Visualization, 2016","link":"/blog/2016/the-state-of-information-visualization-2016.md"},{"text":"2015 Year in Graphics Links","link":"/blog/2016/2015-year-in-graphics-links.md"},{"text":"Link: Tamara Munzner Has A Blog!","link":"/blog/2016/tamara-munzner-has-a-blog.md"},{"text":"Paper: Presentation-Oriented Visualization Techniques","link":"/blog/2016/presentation-oriented-visualization-techniques.md"}],"collapsed":true},{"text":"Blog 2015","items":[{"text":"Link: What Happened in Vis in 2015? Year Review Episode of Data Stories","link":"/blog/2015/what-happened-in-vis-in-2015-year-review-episode-of-data-stories.md"},{"text":"Memorability, Science, and The Value of Thinking Outside the Box","link":"/blog/2015/memorability-science-and-the-value-of-thinking-outside-the-box.md"},{"text":"Link: The Tapestry YouTube Channel","link":"/blog/2015/link-the-tapestry-youtube-channel.md"},{"text":"Review: Munroe's Thing Explainer and Pinker's Sense of Style","link":"/blog/2015/review-munroes-thing-explainer-and-pinkers-sense-of-style.md"},{"text":"Paper: The Connected Scatterplot for Presenting Paired Time Series","link":"/blog/2015/the-connected-scatterplot-for-presenting-paired-time-series.md"},{"text":"Link: The NIPS Experiment","link":"/blog/2015/the-nips-experiment.md"},{"text":"Tapestry 2016 Open For Applications","link":"/blog/2015/tapestry-2016-open-for-applications.md"},{"text":"VIS Proceedings now in the January Issue of TVCG","link":"/blog/2015/vis-proceedings-now-in-the-january-issue-of-tvcg.md"},{"text":"VIS 2015 – Friday","link":"/blog/2015/vis-2015-friday.md"},{"text":"VIS 2015 – Thursday","link":"/blog/2015/vis-2015-thursday.md"},{"text":"VIS 2015 – Wednesday","link":"/blog/2015/vis-2015-wednesday.md"},{"text":"VIS 2015 – Tuesday","link":"/blog/2015/vis-2015-tuesday.md"},{"text":"When Details Hide the Story","link":"/blog/2015/when-details-hide-the-story.md"},{"text":"Tableau Papers at IEEE VIS 2015","link":"/blog/2015/tableau-papers-at-ieee-vis-2015.md"},{"text":"Vizable, data worlds for iPad","link":"/blog/2015/vizable-data-worlds-for-ipad.md"},{"text":"Trifacta Wrangler for cleaning and reshaping data","link":"/blog/2015/trifacta-wrangler-for-cleaning-and-reshaping-data.md"},{"text":"VIS Running Club 2015","link":"/blog/2015/vis-running-club-2015.md"},{"text":"Link: PolicyViz Blog and Podcast","link":"/blog/2015/policyviz-blog-and-podcast.md"},{"text":"Visualization Research, Part I: Engineering","link":"/blog/2015/visualization-research-engineering.md"},{"text":"Why Is Metadata So Hard?","link":"/blog/2015/why-is-metadata-so-hard.md"},{"text":"Encounters with HCI Pioneers","link":"/blog/2015/encounters-with-hci-pioneers.md"},{"text":"The Point Of A Chart","link":"/blog/2015/the-point-of-a-chart.md"},{"text":"Talk: How to Visualize Data","link":"/blog/2015/talk-how-to-visualize-data.md"},{"text":"Link: Visualization Publication Data Collection","link":"/blog/2015/visualization-publication-data-collection.md"},{"text":"Link: Disinformation Visualization","link":"/blog/2015/disinformation-visualization.md"},{"text":"Report: EuroVis 2015","link":"/blog/2015/report-eurovis-2015.md"},{"text":"Paper: An Evaluation of the Impact of Visual Embellishments in Bar Charts","link":"/blog/2015/evaluation-of-the-impact-of-visual-embellishments-in-bar-charts.md"},{"text":"EuroVis Running Club","link":"/blog/2015/eurovis-running-club.md"},{"text":"Feedback Loops for Better Talks","link":"/blog/2015/feedback-loops-for-better-talks.md"},{"text":"Video: The Danger of Glitziness","link":"/blog/2015/the-danger-of-glitziness.md"},{"text":"Conference Report: CHI 2015","link":"/blog/2015/conference-report-chi-2015.md"},{"text":"Link: The Power of Wee Things","link":"/blog/2015/the-power-of-wee-things.md"},{"text":"Paper: ISOTYPE Visualization – Working Memory, Performance, and Engagement with Pictographs","link":"/blog/2015/isotype-visualization.md"},{"text":"Link: Design and Redesign in Data Visualization","link":"/blog/2015/design-and-redesign-in-data-visualization.md"},{"text":"Link: Dear Data","link":"/blog/2015/dear-data.md"},{"text":"Link: Data Journalism in the 19th Century","link":"/blog/2015/data-journalism-in-the-19th-century.md"},{"text":"Complications","link":"/blog/2015/complications.md"},{"text":"Link: CG&A Article on Tapestry","link":"/blog/2015/cga-article-on-tapestry.md"},{"text":"The Value of Illustrating Numbers","link":"/blog/2015/the-value-of-illustrating-numbers.md"},{"text":"Link: The Graphic Continuum","link":"/blog/2015/link-the-graphic-continuum.md"},{"text":"Link: Joint Committee on Standards for Graphic Presentation (1915)","link":"/blog/2015/joint-committee-on-standards-for-graphic-presentation.md"},{"text":"Video: Nigel Holmes on Humor in Visualization and Infographics","link":"/blog/2015/nigel-holmes-on-humor-in-visualization-and-infographics.md"},{"text":"Link: Becksploitation: The Over-Use of a Cartographic Icon","link":"/blog/2015/becksploitation-the-over-use-of-a-cartographic-icon.md"},{"text":"Spelling Things Out","link":"/blog/2015/spelling-things-out.md"},{"text":"Link: Tapestry 2015","link":"/blog/2015/link-tapestry-2015.md"},{"text":"Seminal InfoVis Paper: Treisman, Preattentive Processing","link":"/blog/2015/treisman-preattentive-processing.md"},{"text":"Seminal InfoVis Papers: Introduction","link":"/blog/2015/introduction.md"},{"text":"Link: Data Stories Podcast 2014 Review","link":"/blog/2015/data-stories-podcast-2014-review.md"},{"text":"Link: Data Viz Done Right","link":"/blog/2015/link-data-viz-done-right.md"},{"text":"Why Is Paper-Writing Software So Awful?","link":"/blog/2015/why-is-paper-writing-software-so-awful.md"},{"text":"Links: 2014 News Graphics Round-Ups","link":"/blog/2015/links-2014-news-graphics-round-ups.md"},{"text":"The State of Information Visualization, 2015","link":"/blog/2015/the-state-of-information-visualization-2015.md"},{"text":"Link: Businessweek Vintage Graphics","link":"/blog/2015/businessweek-vintage-graphics.md"},{"text":"The Island of Knowledge and the Shoreline of Wonder","link":"/blog/2015/the-island-of-knowledge-and-the-shoreline-of-wonder.md"}],"collapsed":true},{"text":"Blog 2014","items":[{"text":"eagereyes will be bloggier in 2015","link":"/blog/2014/eagereyes-will-be-bloggier-in-2015.md"},{"text":"Data Stories starring Tamara Munzner","link":"/blog/2014/data-stories-starring-tamara-munzner.md"},{"text":"Review: Wainer, Picturing the Uncertain World","link":"/blog/2014/review-wainer-picturing-the-uncertain-world.md"},{"text":"VIS 2014 Observations and Thoughts","link":"/blog/2014/vis-2014-observations-and-thoughts.md"},{"text":"VIS 2014 – Friday","link":"/blog/2014/vis-2014-friday.md"},{"text":"VIS 2014 – Thursday","link":"/blog/2014/vis-2014-thursday.md"},{"text":"VIS 2014 – Wednesday","link":"/blog/2014/vis-2014-wednesday.md"},{"text":"VIS 2014 – Tuesday","link":"/blog/2014/vis-2014-tuesday.md"},{"text":"VIS 2014 – Monday","link":"/blog/2014/vis-2014-monday.md"},{"text":"The VIS Sports Authority","link":"/blog/2014/the-vis-sports-authority.md"},{"text":"Large Multiples","link":"/blog/2014/large-multiples.md"},{"text":"Eight Years of eagereyes","link":"/blog/2014/eight-years-of-eagereyes.md"},{"text":"Beyond the Knee-Jerk Reaction","link":"/blog/2014/beyond-the-knee-jerk-reaction.md"},{"text":"The Semantics of the Y Axis","link":"/blog/2014/the-semantics-of-the-y-axis.md"},{"text":"My Favorite Charts","link":"/blog/2014/my-favorite-charts.md"},{"text":"What is Data Journalism?","link":"/blog/2014/what-is-data-journalism.md"},{"text":"Putting Data Into Context","link":"/blog/2014/putting-data-into-context.md"},{"text":"Review: Kraak, Mapping Time","link":"/blog/2014/review-kraak-mapping-time.md"},{"text":"When Bars Point Down","link":"/blog/2014/when-bars-point-down.md"},{"text":"Data Stories Episode About Data Storytelling","link":"/blog/2014/data-stories-episode-about-data-storytelling.md"},{"text":"Review: Manuel Lima, The Book of Trees","link":"/blog/2014/review-manuel-lima-the-book-of-trees.md"},{"text":"Story: A Definition","link":"/blog/2014/story-a-definition.md"},{"text":"Stories Are Gateways Into Worlds","link":"/blog/2014/stories-are-gateways-into-worlds.md"},{"text":"NewsVis.org, The Directory of News Visualizations","link":"/blog/2014/newsvis-org-the-directory-of-news-visualizations.md"},{"text":"The Mirrored Line Chart Is A Bad Idea","link":"/blog/2014/the-mirrored-line-chart-is-a-bad-idea.md"},{"text":"Data Stories Podcast: 2013 in Review, Outlook to 2014","link":"/blog/2014/data-stories-podcast-2013-in-review-outlook-to-2014.md"},{"text":"Peer Review, Part 5: The Importance of Gatekeepers","link":"/blog/2014/peer-review-part-5-the-importance-of-gatekeepers.md"},{"text":"Peer Review, Part 4: Good Reasons for Bad Papers","link":"/blog/2014/4-good-reasons-for-bad-papers.md"},{"text":"Peer Review, Part 3: A Taxonomy of Bad Papers","link":"/blog/2014/3-a-taxonomy-of-bad-papers.md"},{"text":"Peer Review, Part 2: How It Works","link":"/blog/2014/2-how-it-works.md"},{"text":"Peer Review, Part 1: Quilt Plots","link":"/blog/2014/1-quilt-plots.md"},{"text":"The State of Information Visualization, 2014","link":"/blog/2014/the-state-of-information-visualization-2014.md"},{"text":"WTFViz, ThumbsUpViz, and HelpMeViz","link":"/blog/2014/wtfviz-thumbsupviz-and-helpmeviz.md"}],"collapsed":true},{"text":"Blog 2013","items":[{"text":"Ben Shneiderman's Treemap Art","link":"/blog/2013/ben-shneidermans-treemap-art.md"},{"text":"Scaling An Axis to Make A Point","link":"/blog/2013/scaling-an-axis-to-make-a-point.md"},{"text":"A Lack of Communication and Visibility","link":"/blog/2013/a-lack-of-communication-and-visibility.md"},{"text":"A Guide to the Quality of Different Visualization Venues","link":"/blog/2013/a-guide-to-the-quality-of-different-visualization-venues.md"},{"text":"Tapestry 2014 Announced","link":"/blog/2013/tapestry-2014-announced.md"},{"text":"Report from IEEE VIS 2013 in Atlanta, GA","link":"/blog/2013/report-from-ieee-vis-2013-in-atlanta-ga.md"},{"text":"Review: Isabel Meirelles, Design for Information","link":"/blog/2013/review-isabel-meirelles-design-information.md"},{"text":"The Seven Year Itch","link":"/blog/2013/seven-year-itch.md"},{"text":"Story Points","link":"/blog/2013/story-points.md"},{"text":"Data Visualization and Journalism Event in San Francisco on September 26","link":"/blog/2013/data-visualization-journalism-event-san-francisco-september-26.md"},{"text":"Watch the TCC Keynote Live on Monday","link":"/blog/2013/watch-tcc-keynote-live-monday.md"},{"text":"Another Look at Many Eyes, 18 Months Later","link":"/blog/2013/many-eyes-18-months-later.md"},{"text":"Thoughts on Blogging","link":"/blog/2013/thoughts-blogging.md"},{"text":"The Perfect Visualization","link":"/blog/2013/perfect-visualization.md"},{"text":"The Golden Age of Information Graphics","link":"/blog/2013/golden-age-information-graphics.md"},{"text":"What Means Mean","link":"/blog/2013/means.md"},{"text":"The Most Iconic Visualizations","link":"/blog/2013/iconic-visualizations.md"},{"text":"GED Viz, A Data Storytelling Tool","link":"/blog/2013/ged-viz-data-storytelling-tool.md"},{"text":"It's Just Too Easy","link":"/blog/2013/its-just-too-easy.md"},{"text":"Conference Report: Tapestry 2013","link":"/blog/2013/conference-report-tapestry-2013.md"},{"text":"How The Rainbow Color Map Misleads","link":"/blog/2013/rainbow-color-map.md"},{"text":"Review: Chabris, Simons, The Invisible Gorilla","link":"/blog/2013/review-chabris-simons-invisible-gorilla.md"},{"text":"VIS Tutorials and the Industry and Government Experiences Track","link":"/blog/2013/vis-tutorials-industry-government-experiences-track.md"},{"text":"Aspect Ratio and Banking to 45 Degrees","link":"/blog/2013/banking-45-degrees.md"},{"text":"Schloß Dagstuhl","link":"/blog/2013/schloss-dagstuhl.md"},{"text":"Why the Obsession with Tables?","link":"/blog/2013/obsession-tables.md"},{"text":"Continuous Values and Baselines","link":"/blog/2013/baselines.md"},{"text":"Meet @InfoVis_Ebooks, Your Source for Random InfoVis Paper Snippets","link":"/blog/2013/infovis_ebooks.md"},{"text":"Data: Continuous vs. Categorical","link":"/blog/2013/data-continuous-vs-categorical.md"},{"text":"How to Keep Following eagereyes After the End of Google Reader","link":"/blog/2013/eagereyes-google-reader.md"},{"text":"The Revolution Will Be Visualized","link":"/blog/2013/revolution-visualized.md"},{"text":"Glimpses of Data: The CBO's Snapshots","link":"/blog/2013/glimpses-data-cbos-snapshots.md"},{"text":"Study on Creative Data Visualization","link":"/blog/2013/study-creative-data-visualization.md"},{"text":"A Better Definition of Chart Junk","link":"/blog/2013/definition-chart-junk.md"},{"text":"Tableau Desktop Now Free For University Students","link":"/blog/2013/tableau-desktop-free-university-students.md"},{"text":"Visualization Makes Things Real","link":"/blog/2013/visualization-real.md"},{"text":"Data Storytelling in Video","link":"/blog/2013/data-storytelling-video.md"},{"text":"The ISOTYPE","link":"/blog/2013/isotype.md"},{"text":"The Halfway House To Nowhere","link":"/blog/2013/halfway-house.md"},{"text":"Review: Scott Christianson, 100 Diagrams That Changed the World","link":"/blog/2013/review-scott-christianson-100-diagrams-changed-world.md"},{"text":"Paper: Storytelling, The Next Step for Visualization","link":"/blog/2013/paper-storytelling-step-visualization.md"},{"text":"The State of Information Visualization, 2013","link":"/blog/2013/state-information-visualization-2013.md"}],"collapsed":true},{"text":"Blog 2012","items":[{"text":"Four Values Can Still Be Worth A Chart","link":"/blog/2012/values-worth-chart.md"},{"text":"Visual Math Gone Wrong","link":"/blog/2012/visual-math-wrong.md"},{"text":"Tapestry, The Conference About Storytelling With Data","link":"/blog/2012/tapestry-conference-storytelling-data.md"},{"text":"Listen To Me Dispense My Wisdom on the Data Stories Podcast!","link":"/blog/2012/listen-dispense-wisdom-data-stories-podcast.md"},{"text":"All Responses to Gelman and Unwin in One Convenient Posting","link":"/blog/2012/responses-gelman-unwin-convenient-posting.md"},{"text":"Affordances","link":"/blog/2012/affordances.md"},{"text":"A Scholarly Discussion with Andrew Gelman and Anthony Unwin","link":"/blog/2012/scholarly-discussion-gelman-unwin.md"},{"text":"The Changing Goals of Data Visualization","link":"/blog/2012/changing-goals-data-visualization.md"},{"text":"VisWeek 2012 Digest, Part 3","link":"/blog/2012/visweek-2012-digest-part-3.md"},{"text":"VisWeek 2012 Digest, Part 2","link":"/blog/2012/visweek-2012-digest-part-2.md"},{"text":"VisWeek 2012 Digest, Part 1","link":"/blog/2012/visweek-2012-digest-part-1.md"},{"text":"VisWeek 2012, Day One","link":"/blog/2012/visweek-2012-day-one.md"},{"text":"A Few VisWeek Pointers","link":"/blog/2012/visweek-pointers.md"},{"text":"Review: Alberto Cairo, The Functional Art","link":"/blog/2012/review-alberto-cairo-functional-art.md"},{"text":"A VisWeek Survival Guide, Part 2","link":"/blog/2012/visweek-survival-guide-part-2.md"},{"text":"Goodbye, Academia; Hello (Again), Tableau!","link":"/blog/2012/goodbye-academia-hello-again-tableau.md"},{"text":"Storytelling and Focus","link":"/blog/2012/storytelling-focus.md"},{"text":"A VisWeek Survival Guide, Part 1","link":"/blog/2012/visweek-survival-guide-part-1.md"},{"text":"Storytelling: Minard vs. Nightingale","link":"/blog/2012/storytelling-minard-vs-nightingale.md"},{"text":"Edward Tufte's One Day Course: A Review","link":"/blog/2012/edward-tufte-one-day-course.md"},{"text":"Cognitive Dissonance on the River Tyne","link":"/blog/2012/cognitive-dissonance-river-tyne.md"},{"text":"Data Display vs. Data Visualization","link":"/blog/2012/data-display-vs-data-visualization.md"},{"text":"A Criticism of Visualization Criticism Criticism","link":"/blog/2012/criticism-visualization-criticism-criticism.md"},{"text":"Science: It's a Curiosity Thing!","link":"/blog/2012/science-curiosity-thing.md"},{"text":"List of Influences: Nigel Holmes","link":"/blog/2012/nigel-holmes.md"},{"text":"EuroVis 2012, Last Day and Wrap-Up","link":"/blog/2012/eurovis-2012-wrap-up.md"},{"text":"EuroVis 2012, Day 3","link":"/blog/2012/eurovis-2012-day-3.md"},{"text":"EuroVis 2012, Day 2","link":"/blog/2012/eurovis-2012-day-2.md"},{"text":"EuroVis 2012, Day 1","link":"/blog/2012/eurovis-2012-day-1.md"},{"text":"From Data to Trends","link":"/blog/2012/from-data-to-trends.md"},{"text":"Paper: Conceptualizing Visual Uncertainty in Parallel Coordinates","link":"/blog/2012/conceptualizing-visual-uncertainty-in-parallel-coordinates.md"},{"text":"A EuroVis Survival Guide, Part 2","link":"/blog/2012/eurovis-survival-guide-part-2.md"},{"text":"How Much Data Do You Really Need?","link":"/blog/2012/data-need.md"},{"text":"Tableau Public Viz of the Day","link":"/blog/2012/tableau-public-day.md"},{"text":"A Glimpse Into the New York Times Graphics Department","link":"/blog/2012/glimpse-into-new-york-times-graphics-department.md"},{"text":"Playable Data","link":"/blog/2012/playable-data.md"},{"text":"A EuroVis Survival Guide, Part 1","link":"/blog/2012/eurovis-survival-guide-part-1.md"},{"text":"The Explanatory Power of Data Points","link":"/blog/2012/the-explanatory-power-of-data-points.md"},{"text":"Visual.ly Create","link":"/blog/2012/visually-create.md"},{"text":"April is Visualization Challenge Time!","link":"/blog/2012/april-visualization-challenge-time.md"},{"text":"What Does It Mean to Inform?","link":"/blog/2012/what-does-it-mean-to-inform.md"},{"text":"Malofiej 20","link":"/blog/2012/malofiej-20.md"},{"text":"Upcoming Travel: SxSW and Malofiej","link":"/blog/2012/upcoming-travel-sxsw-malofiej.md"},{"text":"A Storytelling Experiment","link":"/blog/2012/storytelling-experiment.md"},{"text":"The Three Types of Chart Junk","link":"/blog/2012/three-types-chart-junk.md"},{"text":"The Bikini Chart","link":"/blog/2012/bikini-chart.md"},{"text":"Quo Vadis, Many Eyes?","link":"/blog/2012/quo-vadis-many-eyes.md"},{"text":"Another Metaphor for Visualization: Writing","link":"/blog/2012/metaphor-visualization-writing.md"},{"text":"Watchlist: Jessica Hullman","link":"/blog/2012/jessica-hullman.md"},{"text":"Graphs Beyond the Hairball","link":"/blog/2012/graphs-hairball.md"},{"text":"Venn Diagrams","link":"/blog/2012/venn-diagrams.md"},{"text":"Where Infographics Are Going","link":"/blog/2012/where-infographics-are-going.md"},{"text":"The State of Information Visualization, 2012","link":"/blog/2012/state-information-visualization-2012.md"},{"text":"Hello from Tableau (and Seattle)!","link":"/blog/2012/hello-tableau-and-seattle.md"},{"text":"An Interactive Version of the ZIPScribble Map","link":"/blog/2012/interactive-version-zipscribble-map.md"},{"text":"Embracing Uncertainty in Two-Line Charts","link":"/blog/2012/embracing-uncertainty-two-line-charts.md"},{"text":"New Posting Frequency for 2012","link":"/blog/2012/posting-frequency-2012.md"},{"text":"My Review of Visualize This and Visual Complexity for Science Magazine","link":"/blog/2012/review-visualize-visual-complexity-science-magazine.md"},{"text":"Why I Switched From Drupal to WordPress","link":"/blog/2012/why-i-switched-drupal-wordpress.md"}],"collapsed":true},{"text":"Blog 2011","items":[{"text":"Plot.io","link":"/blog/2011/plot-io.md"},{"text":"Comments Closed, Switching to WordPress","link":"/blog/2011/comments-closed-switching-to-wordpress.md"},{"text":"List of Influences: Ben Shneiderman","link":"/blog/2011/ben-shneiderman.md"},{"text":"You Only See Colors You Can Name","link":"/blog/2011/you-only-see-colors-you-can-name.md"},{"text":"New Series: Watchlist","link":"/blog/2011/new-series.md"},{"text":"Visualization is Growing Up","link":"/blog/2011/visualization-is-growing-up.md"},{"text":"Blogging BOF at VisWeek 2011","link":"/blog/2011/blogging-bof-at-visweek-2011.md"},{"text":"Paper: Privacy-Preserving Visualization","link":"/blog/2011/privacy.md"},{"text":"VisWeek Bingo, Interactive Edition 2011","link":"/blog/2011/visweek-bingo-interactive-edition.md"},{"text":"The Many Names of Visualization","link":"/blog/2011/the-many-names-of-visualization.md"},{"text":"Five Years of EagerEyes","link":"/blog/2011/five-years-of-eagereyes.md"},{"text":"Above All, Do No Harm!","link":"/blog/2011/above-all-do-no-harm.md"},{"text":"Vote for our SxSW Panel on Visualization!","link":"/blog/2011/sxsw.md"},{"text":"Spirals for Periodic Data","link":"/blog/2011/spirals.md"},{"text":"Information Visualization vs. Statistical Graphics","link":"/blog/2011/information-visualization-vs-statistical-graphics.md"},{"text":"Visual.ly: The Future of Data-Based Infographics","link":"/blog/2011/visually-the-future-of-data-based-infographics.md"},{"text":"Want to Make A Chart Memorable? Add Junk","link":"/blog/2011/want-to-make-chart-memorable-add-junk.md"},{"text":"VisWeek 2011 Doctoral Colloquium","link":"/blog/2011/visweek-2011-doctoral-colloquium.md"},{"text":"The Camera Metaphor of Visualization Use","link":"/blog/2011/the-camera-metaphor-of-visualization-use.md"},{"text":"Visualization Choice Influences Decisions","link":"/blog/2011/visualization-choice-influences-decisions.md"},{"text":"Six Niche Visualization Blogs","link":"/blog/2011/six-niche-visualization-blogs.md"},{"text":"A Middle Ground","link":"/blog/2011/a-middle-ground.md"},{"text":"EagerFeet.org: Free Your Nike+ GPS Data","link":"/blog/2011/eagerfeet-free-your-nike-gps-data.md"},{"text":"In Defense of Pie Charts","link":"/blog/2011/in-defense-of-pie-charts.md"},{"text":"One Chart To Rule Them All","link":"/blog/2011/one-chart-to-rule-them-all.md"},{"text":"Tableau Public's New Data Policy","link":"/blog/2011/tableau-public-s-new-data-policy.md"},{"text":"Anscombe's Quartet","link":"/blog/2011/anscombes-quartet.md"},{"text":"Blur and Uncertainty Visualization","link":"/blog/2011/blur-and-uncertainty.md"},{"text":"Tufte and the Truth about the Challenger","link":"/blog/2011/tufte-and-the-truth-about-the-challenger.md"},{"text":"The State of Information Visualization, 2011","link":"/blog/2011/state-of-infovis-2011.md"}],"collapsed":true},{"text":"Blog 2010","items":[{"text":"HTML5 and Visualization on the Web","link":"/blog/2010/html5-and-visualization-on-the-web.md"},{"text":"My Journey to the Kingdom of NIPS","link":"/blog/2010/nips.md"},{"text":"Review: Steven Johnson, The Ghost Map","link":"/blog/2010/review-steven-johnson-the-ghost-map.md"},{"text":"Swivel, Part 2: Solving A Single Problem","link":"/blog/2010/swivel-part-2-solving-a-single-problem.md"},{"text":"Stories Don't Tell Themselves","link":"/blog/2010/stories-dont-tell-themselves.md"},{"text":"Blogging BOF at VisWeek","link":"/blog/2010/blogging-bof-at-visweek.md"},{"text":"The Theory Guide to VisWeek 2010","link":"/blog/2010/theory-guide-to-visweek.md"},{"text":"Laws of Attraction: From Perceived Forces to Conceptual Similarity","link":"/blog/2010/laws-of-attraction.md"},{"text":"Pargnostics: Screen-Space Metrics for Parallel Coordinates","link":"/blog/2010/pargnostics.md"},{"text":"Open Positions at PNNL","link":"/blog/2010/open-positions-at-pnnl.md"},{"text":"VisWeek Preview: InfoVis Theory Workshop and Panel","link":"/blog/2010/visweek-preview-infovis-theory-workshop-and-panel.md"},{"text":"To Those We Lost This Year","link":"/blog/2010/to-those-we-lost-this-year.md"},{"text":"VisWeek Bingo!","link":"/blog/2010/visweek-bingo.md"},{"text":"The Rise and Fall of Swivel.com","link":"/blog/2010/the-rise-and-fall-of-swivel.md"},{"text":"Visualization Without Pictures","link":"/blog/2010/visualization-without-pictures.md"},{"text":"Why Am I Doing This, Again?","link":"/blog/2010/why.md"},{"text":"Review: Kaiser Fung, Numbers Rule Your World","link":"/blog/2010/kaiser-fung-numbers-rule-your-world.md"},{"text":"Beyond Bertin: Seeing the Forest despite the Trees","link":"/blog/2010/beyond-bertin.md"},{"text":"Trivialization for the Masses","link":"/blog/2010/trivialization-for-the-masses.md"},{"text":"InfoVis Theory Workshop Deadline Extended","link":"/blog/2010/infovis-theory-workshop-deadline-extended.md"},{"text":"Parallel Sets Implemented By Third Party","link":"/blog/2010/parallel-sets-implemented-by-third-party.md"},{"text":"A Maze of Twisty Little Passages, All Alike","link":"/blog/2010/a-maze-of-twisty-little-passages-all-alike.md"},{"text":"The Difference Between Infographics and Visualization","link":"/blog/2010/the-difference-between-infographics-and-visualization.md"},{"text":"The Magic of Indirect Multi-Touch Interaction","link":"/blog/2010/the-magic-of-indirect-multi-touch-interaction.md"},{"text":"Follow Me on Twitter!","link":"/blog/2010/follow-me-on-twitter.md"},{"text":"Review: Cornelia Dean, Am I Making Myself Clear?","link":"/blog/2010/cornelia-dean-am-i-making-myself-clear.md"},{"text":"Various VisWeek Workshops","link":"/blog/2010/various-visweek-workshops.md"},{"text":"A Protovis Primer, Part 3","link":"/blog/2010/protovis-primer-part-3.md"},{"text":"Multi-touch Brushing for Parallel Coordinates","link":"/blog/2010/multi-touch-brushing-for-parallel-coordinates.md"},{"text":"Workshop: The Role of Theory in Information Visualization","link":"/blog/2010/infovis-theory-workshop.md"},{"text":"InfoVis Discovery Exhibition 2010","link":"/blog/2010/infovis-discovery-exhibition-2010.md"},{"text":"The End of Verifiable.com","link":"/blog/2010/end-of-verifiable-com.md"},{"text":"Beautiful Visualization","link":"/blog/2010/beautiful-visualization.md"},{"text":"A Protovis Primer, Part 2","link":"/blog/2010/protovis-primer-part-2.md"},{"text":"Conference Acceptance Rates","link":"/blog/2010/conference-acceptance-rates.md"},{"text":"A Protovis Primer, Part 1","link":"/blog/2010/protovis-primer-part-1.md"},{"text":"Paper: Implied Dynamics in Information Visualization","link":"/blog/2010/implied-dynamics-in-information-visualization.md"},{"text":"The Fascinating World of (Good) Infographics","link":"/blog/2010/fascinating-world-of-good-infographics.md"},{"text":"Parallel Coordinates","link":"/blog/2010/parallel-coordinates.md"},{"text":"Visualization Can Never Be Art","link":"/blog/2010/visualization-can-never-be-art.md"},{"text":"Chart Junk Considered Useful After All","link":"/blog/2010/chart-junk-considered-useful-after-all.md"},{"text":"Do Mechanical Turks Dream of Square Pie Charts?","link":"/blog/2010/do-mechnical-turks-dream-of-square-pie-charts.md"},{"text":"The Visualization Cargo Cult","link":"/blog/2010/the-visualization-cargo-cult.md"},{"text":"A Visual Language for Proteins: Jane Richardson","link":"/blog/2010/a-visual-language-for-proteins-jane-richardson.md"},{"text":"The Year of InfoVis Theory","link":"/blog/2010/the-year-of-infovis-theory.md"},{"text":"March Chart Madness","link":"/blog/2010/march-chart-madness.md"},{"text":"Tableau Public","link":"/blog/2010/tableau-public.md"},{"text":"iTunes Ten Billion Song Downloads Visualization","link":"/blog/2010/itunes-10-billion-song-downloads-visualization.md"},{"text":"JavaScript: The Key to In-Browser Visualization","link":"/blog/2010/javascript-key-to-in-browser-visualization.md"},{"text":"Data Visualization: Should We Divide It?","link":"/blog/2010/data-visualization-should-we-divide-it.md"},{"text":"Understanding Pie Charts","link":"/blog/2010/pie-charts.md"},{"text":"The State of Information Visualization","link":"/blog/2010/state-of-infovis-2010.md"}],"collapsed":true},{"text":"Blog 2009","items":[{"text":"Temperature Baseline Differences","link":"/blog/2009/temperature-baseline-differences.md"},{"text":"A Look At Climate Data","link":"/blog/2009/a-look-at-climate-data.md"},{"text":"Interactively Explore Climate Data","link":"/blog/2009/interactively-explore-climate-data.md"},{"text":"Curing A Sick Chart","link":"/blog/2009/curing-a-sick-chart.md"},{"text":"The Unrecorded Life is Not Worth Living","link":"/blog/2009/the-unrecorded-life-is-not-worth-living.md"},{"text":"Bring Out Your Dreadful Charts!","link":"/blog/2009/bring-out-your-dreadful-charts.md"},{"text":"The Cost of a Sick Chart","link":"/blog/2009/cost-of-a-sick-chart.md"},{"text":"The Simple Way to Scrape an HTML Table: Google Docs","link":"/blog/2009/scrape-tables-using-google-docs.md"},{"text":"I Want to BELIV","link":"/blog/2009/i-want-to-beliv.md"},{"text":"Starting Your Own Visualization Blog","link":"/blog/2009/starting-your-own-visualization-blog.md"},{"text":"VisWeek Preview: Changing the World with Visualization (Panel)","link":"/blog/2009/visweek-changing-the-world-with-visualization-panel.md"},{"text":"VisWeek Preview: Live Coverage","link":"/blog/2009/visweek-live-coverage.md"},{"text":"VisWeek Preview: Visualization on the Web Workshop","link":"/blog/2009/visweek-visualization-on-the-web-workshop.md"},{"text":"Shaking the \\"Pretty Picture\\" Stigma","link":"/blog/2009/shaking-the-pretty-picture-stigma.md"},{"text":"qnch - A Data Description Language for Tabular Data","link":"/blog/2009/qnch-data-description-language-for-tabular-data.md"},{"text":"Parallel Sets 2.1 Released","link":"/blog/2009/parallel-sets-2-1-released.md"},{"text":"OECD Seminar on Turning Statistics into Knowledge","link":"/blog/2009/oecd-seminar-turning-statistics-into-knowledge.md"},{"text":"Looking for Parallel Sets Users with Real Data","link":"/blog/2009/parsets-users-with-real-data.md"},{"text":"Putting Visualization on the Web – at VisWeek 2009","link":"/blog/2009/putting-visualization-on-the-web-visweek.md"},{"text":"A Browser for Data.gov","link":"/blog/2009/data-gov-browser.md"},{"text":"Data Is A Dish Best Served Raw","link":"/blog/2009/dish-best-served-raw.md"},{"text":"Parallel Sets Released!","link":"/blog/2009/parallel-sets-released.md"},{"text":"InfoVis 2009 Discovery Exhibition","link":"/blog/2009/infovis-discovery-exhibition.md"},{"text":"Democracy, Public Data, and Data.gov","link":"/blog/2009/data-gov.md"},{"text":"Visualization is not Periodic, Period!","link":"/blog/2009/visualization-is-not-periodic-html.md"},{"text":"Parallel Sets Release Pushed Back A Bit (Updated)","link":"/blog/2009/parsets-delay-html.md"},{"text":"Anybody interested in eagerears.org/.com?","link":"/blog/2009/interested-in-eagerears-html.md"},{"text":"Parallel Sets Release Date","link":"/blog/2009/parallel-sets-release-date-html.md"},{"text":"Design Tutorials for VisWeek 2009","link":"/blog/2009/design-tutorials-for-visweek-2009.md"},{"text":"AppStore Billion Apps Live Visualization","link":"/blog/2009/appstore-billion-apps-live-visualization-html.md"},{"text":"Where are the Visualization Tools?","link":"/blog/2009/where-are-the-visualization-tools.md"},{"text":"New Sister Site: EagerEars.org","link":"/blog/2009/new-sister-site-eagerears.md"},{"text":"Shining a Light on Data: Florence Nightingale","link":"/blog/2009/shining-a-light-on-data-florence-nightingale.md"},{"text":"A Spike of Interest in Parallel Sets","link":"/blog/2009/a-spike-of-interest-in-parallel-sets.md"},{"text":"Sightings: A Little Space, Please!","link":"/blog/2009/sightings-a-little-space-please.md"},{"text":"A National Data Agency","link":"/blog/2009/a-national-data-agency.md"},{"text":"A Better Vis Web Community","link":"/blog/2009/a-better-vis-web-community.md"}],"collapsed":true},{"text":"Blog 2008","items":[{"text":"Sightings: A Vennerable Challenge","link":"/blog/2008/sightings-a-vennerable-challenge.md"},{"text":"Charts and Metaphors","link":"/blog/2008/charts-and-metaphors.md"},{"text":"The Ethics of Business Presentations","link":"/blog/2008/ethics-of-business-presentations.md"},{"text":"Pushing Data over Email","link":"/blog/2008/pushing-data-over-email.md"},{"text":"Design Workshop Questions","link":"/blog/2008/design-workshop-questions-html.md"},{"text":"Swing States","link":"/blog/2008/swing-states.md"},{"text":"The New York Times Visualization Lab","link":"/blog/2008/new-york-times-visualization-lab.md"},{"text":"VisWeek 2008 Live-Microblog Archive","link":"/blog/2008/visweek2008.md"},{"text":"Lessons Learned from Live-Blogging VisWeek 2008","link":"/blog/2008/lessons-learned-from-live-blogging-visweek-2008.md"},{"text":"Debunking the Cent Smear","link":"/blog/2008/debunking-cent-smear.md"},{"text":"NY Times looks at Presidents and the Economy","link":"/blog/2008/nytimes-looks-at-presidents-and-economy.md"},{"text":"Live-Microblog from VisWeek (InfoVis/VAST/Vis) 2008","link":"/blog/2008/live-microblog-from-visweek-2008.md"},{"text":"The Shaping of Information by Visual Metaphors","link":"/blog/2008/shaping-of-information-by-visual-metaphors.md"},{"text":"Sightings: Structures Smaller than Light","link":"/blog/2008/sightings-structures-smaller-than-light.md"},{"text":"Popular vs. Electoral Votes Using Stacked Bar Charts","link":"/blog/2008/popular-vs-electoral-votes-using-stacked-bar-charts.md"},{"text":"A Fisheye Calendar at Yahoo!","link":"/blog/2008/fisheye-calendar-at-yahoo.md"},{"text":"The Electoral College and Second Terms","link":"/blog/2008/electoral-college-and-second-terms.md"},{"text":"Two Years of EagerEyes","link":"/blog/2008/two-years-of-eagereyes.md"},{"text":"The Market Meltdown in Living Color","link":"/blog/2008/market-meltdown-in-living-color.md"},{"text":"The Next YouTube for Charts: iCharts","link":"/blog/2008/the-next-youtube-for-charts-icharts.md"},{"text":"NY Times: The Best and Worst of Data Visualization","link":"/blog/2008/ny-times-the-best-and-worst-of-data-visualization.md"},{"text":"Linear vs. Quadratic Change","link":"/blog/2008/linear-vs-quadratic-change.md"},{"text":"SPSS Viz Designer","link":"/blog/2008/spss-viz-designer.md"},{"text":"Engaging Readers with Square Pie/Waffle Charts","link":"/blog/2008/engaging-readers-with-square-pie-waffle-charts.md"},{"text":"The Sad State of the InfoVis Contest","link":"/blog/2008/sad-state-of-infovis-contest.md"},{"text":"Presidential Demographics as Open-Source, More to Come","link":"/blog/2008/presidential-demographics-open-source-more-to-come.md"},{"text":"Presidential Demographics, Part II","link":"/blog/2008/presidential-demographics-ii.md"},{"text":"Sightings: Symmetric Bat Flight","link":"/blog/2008/sightings-symmetric-bat-flight.md"},{"text":"List of Influences: Jock Mackinlay","link":"/blog/2008/jock-mackinlay.md"},{"text":"What is Visualization? A Definition","link":"/blog/2008/definition-of-visualization.md"},{"text":"The Visual Display of Relevant Information","link":"/blog/2008/visual-display-of-relevant-information.md"},{"text":"The YouTube Screening Room","link":"/blog/2008/youtube-screening-room.md"},{"text":"New CMS, Users, More Coming","link":"/blog/2008/new-site-features.md"},{"text":"Book Review: Visual Thinking for Design, by Colin Ware","link":"/blog/2008/review-visual-thinking.md"},{"text":"Dance.Draw","link":"/blog/2008/dance-draw.md"},{"text":"Paper on Visualization Criticism in CG&A","link":"/blog/2008/vis-criticism.md"},{"text":"Visualization Day at City College of New York","link":"/blog/2008/visualization-day-at-city-college-of-new-york.md"},{"text":"Treemaps","link":"/blog/2008/treemaps.md"},{"text":"Visualization in the World","link":"/blog/2008/visualization-in-the-world-syposium.md"},{"text":"UN Make Large Amounts of Data Available","link":"/blog/2008/un-make-large-amounts-of-data-available.md"},{"text":"The Unbearable Subjectivity of Visualization","link":"/blog/2008/subjectivity-of-visualization.md"}],"collapsed":true},{"text":"Blog 2007","items":[{"text":"Expressive Visualization, Updated Presidents Chart","link":"/blog/2007/expressive-visualization.md"},{"text":"InfoVis 2007: InfoVis for the Masses","link":"/blog/2007/infovis-2007-infovis-for-the-masses.md"},{"text":"Further Steps Towards World Visualization Day","link":"/blog/2007/further-steps-world-visualization-day.md"},{"text":"InfoVis Panel: The Impact of Social Data Visualization","link":"/blog/2007/panel-social-data-visualization.md"},{"text":"A Nobel Prize for Charts","link":"/blog/2007/nobel-prize-for-charts.md"},{"text":"A Tale of Two Types of Visualization and Much Confusion","link":"/blog/2007/tale-of-two-types.md"},{"text":"We Need a World Visualization Day!","link":"/blog/2007/we-need-a-world-visualization-day.md"},{"text":"Autism Diagnosis Accuracy - Visualization Redesign","link":"/blog/2007/autism-diagnosis-accuracy.md"},{"text":"Caring about the Data","link":"/blog/2007/caring-about-the-data.md"},{"text":"The Summer Lull is Officially Over!","link":"/blog/2007/summer-lull-is-officially-over.md"},{"text":"The Science of Information Visualization: A Sketch","link":"/blog/2007/sketch-of-infovis-science.md"},{"text":"List of Influences: Colin Ware","link":"/blog/2007/colin-ware.md"},{"text":"Rethinking the User","link":"/blog/2007/rethinking-the-user.md"},{"text":"The Joy of Representation","link":"/blog/2007/joy-of-representation.md"},{"text":"List of Influences: Penny Rheingans","link":"/blog/2007/penny-rheingans.md"},{"text":"Critiquing in Class Revisited","link":"/blog/2007/critiquing-in-class-revisited.md"},{"text":"Death and Taxes","link":"/blog/2007/death-and-taxes.md"},{"text":"Visualization Sets Information Free","link":"/blog/2007/visualization-sets-information-free.md"},{"text":"List of Influences: Alan MacEachren","link":"/blog/2007/alan-maceachren.md"},{"text":"InfoVis Contest 2007 Data","link":"/blog/2007/infovis-contest-2007-data.md"},{"text":"List of Influences: Jarke \\"Jack\\" van Wijk","link":"/blog/2007/jarke-van-wijk.md"},{"text":"A Critique of Chernoff Faces","link":"/blog/2007/chernoff-faces.md"},{"text":"Review: Swivel vs. Many Eyes","link":"/blog/2007/swivel-vs-many-eyes.md"},{"text":"List of Influences: Chaomei Chen","link":"/blog/2007/chaomei-chen.md"},{"text":"What Travelling Presidential Candidates Save","link":"/blog/2007/what-travelling-presidential-candidates-save.md"},{"text":"An Uncanny Resemblance","link":"/blog/2007/an-uncanny-resemblance.md"},{"text":"Presidential Demographics","link":"/blog/2007/presidential-demographics.md"},{"text":"More ZIPScribble Maps: AT, AU, CA, CH, DE, ES, FR, HU, IT, NL, NO, SE","link":"/blog/2007/more-zipscribble-maps.md"},{"text":"Improved US ZIPScribble Maps, more Countries to Come","link":"/blog/2007/improved-zipscribble-maps-more-countries-to-come.md"},{"text":"List of Influences: Pat Hanrahan","link":"/blog/2007/pat-hanrahan.md"},{"text":"Series: Lists of Influences","link":"/blog/2007/series-introduction.md"}],"collapsed":true},{"text":"Blog 2006","items":[{"text":"Information vs. Art at MCA Chicago","link":"/blog/2006/information-vs-art-at-mca-chicago.md"},{"text":"The Travelling Presidential Candidate Map","link":"/blog/2006/travelling-presidential-candidate-map.md"},{"text":"The Visual Mapping of Poetry","link":"/blog/2006/visual-mapping-of-poetry-html.md"},{"text":"Representational Mug","link":"/blog/2006/representational-mug.md"},{"text":"The Loneliness of the Visualization Critic","link":"/blog/2006/loneliness-of-the-visualization-critic.md"},{"text":"Sets of Possible Occurrences","link":"/blog/2006/sets-of-possible-occurrences.md"},{"text":"When Informative Art Isn't","link":"/blog/2006/informative-art.md"},{"text":"Women in IT - Squaring the Pie?","link":"/blog/2006/square-pie-charts.md"},{"text":"Visualization Criticism - A New Way of Thinking about Visualization","link":"/blog/2006/visualization-criticism.md"},{"text":"Opining or Murmuring: Infographics vs. Visualization","link":"/blog/2006/opining-or-murmuring.md"},{"text":"She Blinded Me with Eye Candy","link":"/blog/2006/nsf-vis-challenge-2006.md"},{"text":"iTunes (Music) Store Billion Downloads Visualization","link":"/blog/2006/itunes-billion-song-downloads.md"},{"text":"Taking Visualization to the Next Level","link":"/blog/2006/taking-visualization-to-the-next-level.md"}],"collapsed":true}]}]},"footer":{"message":"<a href=\\"/license\\">All materials available under CC-BY-SA</a>","copyright":"Copyright ©2006–present Robert Kosara"},"socialLinks":[{"icon":"mastodon","link":"https://mastodon.social/@eagereyes"},{"icon":"youtube","link":"https://youtube.com/@eagereyes"},{"icon":"linkedin","link":"https://linkedin.com/in/rkosara/"},{"icon":"twitter","link":"https://twitter.com/@eagereyes"},{"icon":{"svg":"<svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 11 11\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" xml:space=\\"preserve\\" xmlns:serif=\\"http://www.serif.com/\\" style=\\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;\\"><path d=\\"M3,9.5c0,0.823 -0.677,1.5 -1.5,1.5c-0.823,0 -1.5,-0.677 -1.5,-1.5c0,-0.823 0.677,-1.5 1.5,-1.5c0.823,0 1.5,0.677 1.5,1.5Zm-3,-8.5c0,-0.549 0.451,-1 1,-1c5.523,0 10,4.477 10,10c0,0.549 -0.451,1 -1,1c-0.549,0 -1,-0.451 -1,-1c0,-4.389 -3.611,-8 -8,-8c-0.549,0 -1,-0.451 -1,-1Zm0,4c0,-0.549 0.451,-1 1,-1c3.292,-0 6,2.708 6,6c0,0.549 -0.451,1 -1,1c-0.549,0 -1,-0.451 -1,-1c0,-2.194 -1.806,-4 -4,-4c-0.549,0 -1,-0.451 -1,-1Z\\" style=\\"fill-rule:nonzero;\\"/></svg>"},"link":"https://eagereyes.org/feed"}],"search":{"provider":"local"},"outlineTitle":"Contents"},"locales":{},"scrollOffset":90,"cleanUrls":true}`));
const EXTERNAL_URL_RE = /^[a-z]+:/i;
const PATHNAME_PROTOCOL_RE = /^pathname:\/\//;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => {
      return createTitle(site.value, route.data);
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    }),
    isDark: ref(false)
  };
}
function useData$1() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base2, path) {
  return `${base2}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || path.startsWith(".") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base2 = "/";
      pagePath = sanitizeFileName(pagePath.slice(base2.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base2}${"assets"}/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    if (await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const url = new URL(href, fakeHost);
    if (!siteDataRef.value.cleanUrls) {
      if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
        url.pathname += ".html";
        href = url.pathname + url.search + url.hash;
      }
    }
    updateHistory(href);
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    var _a;
    if (await ((_a = router.onBeforePageLoad) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link2 = e.target.closest("a");
      if (link2 && !link2.closest(".vp-raw") && (link2 instanceof SVGElement || !link2.download)) {
        const { target } = link2;
        const { href, origin, pathname, hash, search } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && !target && origin === currentUrl.origin && // don't intercept if non-html extension is present
        !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
            }
            if (hash) {
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            } else {
              updateHistory(href);
              window.scrollTo(0, 0);
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight)
        window.scrollTo(0, targetTop);
      else
        window.scrollTo({ left: 0, top: targetTop, behavior: "smooth" });
    };
    let scrollOffset = siteDataRef.value.scrollOffset;
    let offset = 0;
    let padding = 24;
    if (typeof scrollOffset === "object" && "padding" in scrollOffset) {
      padding = scrollOffset.padding;
      scrollOffset = scrollOffset.selector;
    }
    if (typeof scrollOffset === "number") {
      offset = scrollOffset;
    } else if (typeof scrollOffset === "string") {
      offset = tryOffsetSelector(scrollOffset, padding);
    } else if (Array.isArray(scrollOffset)) {
      for (const selector of scrollOffset) {
        const res = tryOffsetSelector(selector, padding);
        if (res) {
          offset = res;
          break;
        }
      }
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function tryOffsetSelector(selector, padding) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + padding;
}
function updateHistory(href) {
  if (inBrowser && href !== location.href) {
    history.replaceState({ scrollPosition: window.scrollY }, document.title);
    history.pushState(null, "", href);
  }
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    const { site } = useData$1();
    return () => h(props.as, site.value.contentProps ?? { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
const _sfc_main$1f = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPBackdrop" }, _attrs))} data-v-54a304ca></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPBackdrop_vue_vue_type_style_index_0_scoped_54a304ca_lang = "";
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["__scopeId", "data-v-54a304ca"]]);
const useData = useData$1;
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeoutId = setTimeout(fn, delay);
    }
  };
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink$1(url) {
  if (isExternal(url)) {
    return url.replace(PATHNAME_PROTOCOL_RE, "");
  }
  const { site } = useData();
  const { pathname, search, hash } = new URL(url, "http://a.com");
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
function useLangs({ removeCurrent = true, correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme: theme2 } = useData();
  const currentLang = computed(() => {
    var _a, _b;
    return {
      label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => removeCurrent && currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls)
  }));
  return { localeLinks, currentLang };
}
function normalizeLink(link2, addPath, path, addExt) {
  return addPath ? link2.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link2;
}
const _sfc_main$1e = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks } = useLangs({ removeCurrent: false });
    const root = ref("/");
    onMounted(() => {
      var _a;
      const path = window.location.pathname.replace(site.value.base, "").replace(/(^.*?\/).*$/, "/$1");
      if (localeLinks.value.length) {
        root.value = ((_a = localeLinks.value.find(({ link: link2 }) => link2.startsWith(path))) == null ? void 0 : _a.link) || localeLinks.value[0].link;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "NotFound" }, _attrs))} data-v-1bc323a9><p class="code" data-v-1bc323a9>${ssrInterpolate(((_a = unref(theme2).notFound) == null ? void 0 : _a.code) ?? "404")}</p><h1 class="title" data-v-1bc323a9>${ssrInterpolate(((_b = unref(theme2).notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND")}</h1><div class="divider" data-v-1bc323a9></div><blockquote class="quote" data-v-1bc323a9>${ssrInterpolate(((_c = unref(theme2).notFound) == null ? void 0 : _c.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading.")}</blockquote><div class="action" data-v-1bc323a9><a class="link"${ssrRenderAttr("href", unref(withBase)(root.value))}${ssrRenderAttr("aria-label", ((_d = unref(theme2).notFound) == null ? void 0 : _d.linkLabel) ?? "go to home")} data-v-1bc323a9>${ssrInterpolate(((_e = unref(theme2).notFound) == null ? void 0 : _e.linkText) ?? "Take me home")}</a></div></div>`);
    };
  }
});
const NotFound_vue_vue_type_style_index_0_scoped_1bc323a9_lang = "";
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/NotFound.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["__scopeId", "data-v-1bc323a9"]]);
function getSidebar(_sidebar, path) {
  if (Array.isArray(_sidebar))
    return addBase(_sidebar);
  if (_sidebar == null)
    return [];
  path = ensureStartingSlash(path);
  const dir = Object.keys(_sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash(dir2));
  });
  const sidebar = dir ? _sidebar[dir] : [];
  return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar) {
    const item = sidebar[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({
          text: item.text,
          link: item.link,
          docFooterText: item.docFooterText
        });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function addBase(items, _base) {
  return [...items].map((_item) => {
    const item = { ..._item };
    const base2 = item.base || _base;
    if (base2 && item.link)
      item.link = base2 + item.link;
    if (item.items)
      item.items = addBase(item.items, base2);
    return item;
  });
}
function useSidebar() {
  const { frontmatter, page, theme: theme2 } = useData();
  const is960 = useMediaQuery("(min-width: 960px)");
  const isOpen = ref(false);
  const sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = page.value.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme2.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
const hashRef = ref(inBrowser ? location.hash : "");
if (inBrowser) {
  window.addEventListener("hashchange", () => {
    hashRef.value = location.hash;
  });
}
function useSidebarControl(item) {
  const { page } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link);
  };
  watch([page, item, hashRef], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchPostEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const PAGE_OFFSET = 71;
function resolveTitle(theme2) {
  return typeof theme2.outline === "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (node.classList.contains("VPBadge") || node.classList.contains("header-anchor")) {
        continue;
      }
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  headers = headers.filter((h2) => h2.level >= high && h2.level <= low);
  const ret = [];
  outer:
    for (let i = 0; i < headers.length; i++) {
      const cur = headers[i];
      if (i === 0) {
        ret.push(cur);
      } else {
        for (let j = i - 1; j >= 0; j--) {
          const prev = headers[j];
          if (prev.level < cur.level) {
            (prev.children || (prev.children = [])).push(cur);
            continue outer;
          }
        }
        ret.push(cur);
      }
    }
  return ret;
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const links = [].slice.call(container.value.querySelectorAll(".outline-link"));
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => {
      return links.some((link2) => {
        return link2.hash === anchor.hash && anchor.offsetParent !== null;
      });
    });
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    if (anchors.length && isBottom) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        activateLink(hash);
        return;
      }
    }
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash == null) {
      prevActiveLink = null;
    } else {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 33 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - PAGE_OFFSET;
}
function isAnchorActive(index, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }
  return [false, null];
}
const _sfc_main$1d = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  __ssrInlineRender: true,
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: _ctx.root ? "root" : "nested"
      }, _attrs))} data-v-463da30f><!--[-->`);
      ssrRenderList(_ctx.headers, ({ children, link: link2, title }) => {
        _push(`<li data-v-463da30f><a class="outline-link"${ssrRenderAttr("href", link2)}${ssrRenderAttr("title", title)} data-v-463da30f>${ssrInterpolate(title)}</a>`);
        if (children == null ? void 0 : children.length) {
          _push(ssrRenderComponent(_component_VPDocOutlineItem, { headers: children }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const VPDocOutlineItem_vue_vue_type_style_index_0_scoped_463da30f_lang = "";
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineItem.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["__scopeId", "data-v-463da30f"]]);
const _sfc_main$1c = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(
        frontmatter.value.outline ?? theme2.value.outline
      );
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }],
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-c834746b><div class="content" data-v-c834746b><div class="outline-marker" data-v-c834746b></div><div class="outline-title" data-v-c834746b>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))}</div><nav aria-labelledby="doc-outline-aria-label" data-v-c834746b><span class="visually-hidden" id="doc-outline-aria-label" data-v-c834746b> Table of Contents for current page </span>`);
      _push(ssrRenderComponent(VPDocOutlineItem, {
        headers: headers.value,
        root: true
      }, null, _parent));
      _push(`</nav></div></div>`);
    };
  }
});
const VPDocAsideOutline_vue_vue_type_style_index_0_scoped_c834746b_lang = "";
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["__scopeId", "data-v-c834746b"]]);
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideCarbonAds" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VPCarbonAds), { "carbon-ads": _ctx.carbonAds }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAside" }, _attrs))} data-v-cb998dce>`);
      ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-cb998dce></div>`);
      ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (unref(theme2).carbonAds) {
        _push(ssrRenderComponent(_sfc_main$1b, {
          "carbon-ads": unref(theme2).carbonAds
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPDocAside_vue_vue_type_style_index_0_scoped_cb998dce_lang = "";
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPDocAside.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__scopeId", "data-v-cb998dce"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern = "" } = theme2.value.editLink || {};
    let url;
    if (typeof pattern === "function") {
      url = pattern(page.value);
    } else {
      url = pattern.replace(/:path/g, page.value.filePath);
    }
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const candidates = getFlatSideBarLinks(sidebar);
    const index = candidates.findIndex((link2) => {
      return isActive(page.value.relativePath, link2.link);
    });
    const hidePrev = ((_a = theme2.value.docFooter) == null ? void 0 : _a.prev) === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = ((_b = theme2.value.docFooter) == null ? void 0 : _b.next) === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_c = candidates[index - 1]) == null ? void 0 : _c.docFooterText) ?? ((_d = candidates[index - 1]) == null ? void 0 : _d.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_e = candidates[index - 1]) == null ? void 0 : _e.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_f = candidates[index + 1]) == null ? void 0 : _f.docFooterText) ?? ((_g = candidates[index + 1]) == null ? void 0 : _g.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_h = candidates[index + 1]) == null ? void 0 : _h.link)
      }
    };
  });
}
const _sfc_main$19 = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"></path><path d="M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"></path></svg>`);
}
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/icons/VPIconEdit.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const VPIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
        class: ["VPLink", {
          link: _ctx.href,
          "vp-external-link-icon": isExternal2.value,
          "no-icon": _ctx.noIcon
        }],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: _ctx.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: _ctx.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPLink.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page } = useData();
    const date = computed(() => new Date(page.value.lastUpdated));
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        var _a;
        datetime.value = new Intl.DateTimeFormat(
          void 0,
          ((_a = theme2.value.lastUpdated) == null ? void 0 : _a.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(date.value);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "VPLastUpdated" }, _attrs))} data-v-b89b6307>${ssrInterpolate(((_a = unref(theme2).lastUpdated) == null ? void 0 : _a.text) || unref(theme2).lastUpdatedText || "Last updated")}: <time${ssrRenderAttr("datetime", isoDatetime.value)} data-v-b89b6307>${ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});
const VPDocFooterLastUpdated_vue_vue_type_style_index_0_scoped_b89b6307_lang = "";
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["__scopeId", "data-v-b89b6307"]]);
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(() => {
      return theme2.value.editLink && frontmatter.value.editLink !== false;
    });
    const hasLastUpdated = computed(() => {
      return page.value.lastUpdated && frontmatter.value.lastUpdated !== false;
    });
    const showFooter = computed(() => {
      return hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      if (showFooter.value) {
        _push(`<footer${ssrRenderAttrs(mergeProps({ class: "VPDocFooter" }, _attrs))} data-v-5774f702>`);
        ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
        if (hasEditLink.value || hasLastUpdated.value) {
          _push(`<div class="edit-info" data-v-5774f702>`);
          if (hasEditLink.value) {
            _push(`<div class="edit-link" data-v-5774f702>`);
            _push(ssrRenderComponent(_sfc_main$18, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(VPIconEdit, {
                    class: "edit-link-icon",
                    "aria-label": "edit icon"
                  }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(unref(editLink).text)}`);
                } else {
                  return [
                    createVNode(VPIconEdit, {
                      class: "edit-link-icon",
                      "aria-label": "edit icon"
                    }),
                    createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (hasLastUpdated.value) {
            _push(`<div class="last-updated" data-v-5774f702>`);
            _push(ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_a = unref(control).prev) == null ? void 0 : _a.link) || ((_b = unref(control).next) == null ? void 0 : _b.link)) {
          _push(`<nav class="prev-next" data-v-5774f702><div class="pager" data-v-5774f702>`);
          if ((_c = unref(control).prev) == null ? void 0 : _c.link) {
            _push(`<a class="pager-link prev"${ssrRenderAttr("href", unref(normalizeLink$1)(unref(control).prev.link))} data-v-5774f702><span class="desc" data-v-5774f702>${((_d = unref(theme2).docFooter) == null ? void 0 : _d.prev) || "Previous page"}</span><span class="title" data-v-5774f702>${unref(control).prev.text}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="pager" data-v-5774f702>`);
          if ((_e = unref(control).next) == null ? void 0 : _e.link) {
            _push(`<a class="pager-link next"${ssrRenderAttr("href", unref(normalizeLink$1)(unref(control).next.link))} data-v-5774f702><span class="desc" data-v-5774f702>${((_f = unref(theme2).docFooter) == null ? void 0 : _f.next) || "Next page"}</span><span class="title" data-v-5774f702>${unref(control).next.text}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></nav>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPDocFooter_vue_vue_type_style_index_0_scoped_5774f702_lang = "";
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["__scopeId", "data-v-5774f702"]]);
const _sfc_main$15 = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"></path></svg>`);
}
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronRight.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const VPIconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const open = ref(false);
    onContentUpdated(() => {
      open.value = false;
    });
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(
        frontmatter.value.outline ?? theme2.value.outline
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (headers.value.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocOutlineDropdown" }, _attrs))} data-v-0bc40447><button class="${ssrRenderClass({ open: open.value })}" data-v-0bc40447>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))} `);
        _push(ssrRenderComponent(VPIconChevronRight, { class: "icon" }, null, _parent));
        _push(`</button>`);
        if (open.value) {
          _push(`<div class="items" data-v-0bc40447>`);
          _push(ssrRenderComponent(VPDocOutlineItem, { headers: headers.value }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPDocOutlineDropdown_vue_vue_type_style_index_0_scoped_0bc40447_lang = "";
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineDropdown.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const VPDocOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-0bc40447"]]);
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }]
      }, _attrs))} data-v-a3c25e27>`);
      ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push, _parent);
      _push(`<div class="container" data-v-a3c25e27>`);
      if (unref(hasAside)) {
        _push(`<div class="${ssrRenderClass([{ "left-aside": unref(leftAside) }, "aside"])}" data-v-a3c25e27><div class="aside-curtain" data-v-a3c25e27></div><div class="aside-container" data-v-a3c25e27><div class="aside-content" data-v-a3c25e27>`);
        _push(ssrRenderComponent(VPDocAside, null, {
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-a3c25e27><div class="content-container" data-v-a3c25e27>`);
      ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocOutlineDropdown, null, null, _parent));
      _push(`<main class="main" data-v-a3c25e27>`);
      _push(ssrRenderComponent(_component_Content, {
        class: ["vp-doc", [
          pageName.value,
          unref(theme2).externalLinkIcon && "external-link-icon-enabled"
        ]]
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(VPDocFooter, null, {
        "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPDoc_vue_vue_type_style_index_0_scoped_a3c25e27_lang = "";
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPDoc.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-a3c25e27"]]);
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: {},
    size: {},
    theme: {},
    text: {},
    href: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      props.size ?? "medium",
      props.theme ?? "brand"
    ]);
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    const component = computed(() => {
      if (props.tag) {
        return props.tag;
      }
      return props.href ? "a" : "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
        class: ["VPButton", classes.value],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: isExternal2.value ? "_blank" : void 0,
        rel: isExternal2.value ? "noreferrer" : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const VPButton_vue_vue_type_style_index_0_scoped_fa1633a1_lang = "";
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPButton.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-fa1633a1"]]);
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      if (_ctx.image) {
        _push(`<!--[-->`);
        if (typeof _ctx.image === "string" || "src" in _ctx.image) {
          _push(`<img${ssrRenderAttrs(mergeProps({ class: "VPImage" }, typeof _ctx.image === "string" ? _ctx.$attrs : { ..._ctx.image, ..._ctx.$attrs }, {
            src: unref(withBase)(typeof _ctx.image === "string" ? _ctx.image : _ctx.image.src),
            alt: _ctx.alt ?? (typeof _ctx.image === "string" ? "" : _ctx.image.alt || "")
          }))} data-v-ab19afbb>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "dark",
            image: _ctx.image.dark,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "light",
            image: _ctx.image.light,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPImage_vue_vue_type_style_index_0_scoped_ab19afbb_lang = "";
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPImage.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-ab19afbb"]]);
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHero", { "has-image": _ctx.image || unref(heroImageSlotExists) }]
      }, _attrs))} data-v-5a3e9999><div class="container" data-v-5a3e9999><div class="main" data-v-5a3e9999>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, () => {
        if (_ctx.name) {
          _push(`<h1 class="name" data-v-5a3e9999><span class="clip" data-v-5a3e9999>${_ctx.name}</span></h1>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.text) {
          _push(`<p class="text" data-v-5a3e9999>${_ctx.text}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.tagline) {
          _push(`<p class="tagline" data-v-5a3e9999>${_ctx.tagline}</p>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      if (_ctx.actions) {
        _push(`<div class="actions" data-v-5a3e9999><!--[-->`);
        ssrRenderList(_ctx.actions, (action) => {
          _push(`<div class="action" data-v-5a3e9999>`);
          _push(ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.image || unref(heroImageSlotExists)) {
        _push(`<div class="image" data-v-5a3e9999><div class="image-container" data-v-5a3e9999><div class="image-bg" data-v-5a3e9999></div>`);
        ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, () => {
          if (_ctx.image) {
            _push(ssrRenderComponent(VPImage, {
              class: "image-src",
              image: _ctx.image
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const VPHero_vue_vue_type_style_index_0_scoped_5a3e9999_lang = "";
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPHero.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__scopeId", "data-v-5a3e9999"]]);
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero) {
        _push(ssrRenderComponent(VPHero, mergeProps({
          class: "VPHomeHero",
          name: unref(fm).hero.name,
          text: unref(fm).hero.text,
          tagline: unref(fm).hero.tagline,
          image: unref(fm).hero.image,
          actions: unref(fm).hero.actions
        }, _attrs), {
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info")
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const _sfc_main$_ = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"></path></svg>`);
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/icons/VPIconArrowRight.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const VPIconArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$18, mergeProps({
        class: "VPFeature",
        href: _ctx.link,
        rel: _ctx.rel,
        "no-icon": true,
        tag: _ctx.link ? "a" : "div"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="box" data-v-aeb6d69c${_scopeId}>`);
            if (typeof _ctx.icon === "object") {
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, _parent2, _scopeId));
            } else if (_ctx.icon) {
              _push2(`<div class="icon" data-v-aeb6d69c${_scopeId}>${_ctx.icon}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="title" data-v-aeb6d69c${_scopeId}>${_ctx.title}</h2>`);
            if (_ctx.details) {
              _push2(`<p class="details" data-v-aeb6d69c${_scopeId}>${_ctx.details}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.linkText) {
              _push2(`<div class="link-text" data-v-aeb6d69c${_scopeId}><p class="link-text-value" data-v-aeb6d69c${_scopeId}>${ssrInterpolate(_ctx.linkText)} `);
              _push2(ssrRenderComponent(VPIconArrowRight, { class: "link-text-icon" }, null, _parent2, _scopeId));
              _push2(`</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</article>`);
          } else {
            return [
              createVNode("article", { class: "box" }, [
                typeof _ctx.icon === "object" ? (openBlock(), createBlock(VPImage, {
                  key: 0,
                  image: _ctx.icon,
                  alt: _ctx.icon.alt,
                  height: _ctx.icon.height || 48,
                  width: _ctx.icon.width || 48
                }, null, 8, ["image", "alt", "height", "width"])) : _ctx.icon ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "icon",
                  innerHTML: _ctx.icon
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                createVNode("h2", {
                  class: "title",
                  innerHTML: _ctx.title
                }, null, 8, ["innerHTML"]),
                _ctx.details ? (openBlock(), createBlock("p", {
                  key: 2,
                  class: "details",
                  innerHTML: _ctx.details
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                _ctx.linkText ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: "link-text"
                }, [
                  createVNode("p", { class: "link-text-value" }, [
                    createTextVNode(toDisplayString(_ctx.linkText) + " ", 1),
                    createVNode(VPIconArrowRight, { class: "link-text-icon" })
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPFeature_vue_vue_type_style_index_0_scoped_aeb6d69c_lang = "";
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-aeb6d69c"]]);
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length > 3) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.features) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPFeatures" }, _attrs))} data-v-7e232fde><div class="container" data-v-7e232fde><div class="items" data-v-7e232fde><!--[-->`);
        ssrRenderList(_ctx.features, (feature) => {
          _push(`<div class="${ssrRenderClass([[grid.value], "item"])}" data-v-7e232fde>`);
          _push(ssrRenderComponent(VPFeature, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details,
            link: feature.link,
            "link-text": feature.linkText,
            rel: feature.rel
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFeatures_vue_vue_type_style_index_0_scoped_7e232fde_lang = "";
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-7e232fde"]]);
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).features) {
        _push(ssrRenderComponent(VPFeatures, mergeProps({
          class: "VPHomeFeatures",
          features: unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPHome" }, _attrs))} data-v-20eabd3a>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$$, null, {
        "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
            ];
          }
        }),
        "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$X, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const VPHome_vue_vue_type_style_index_0_scoped_20eabd3a_lang = "";
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPHome.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-20eabd3a"]]);
const _sfc_main$V = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPPage" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPPage.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-3cf691b6>`);
      if (unref(page).isNotFound) {
        ssrRenderSlot(_ctx.$slots, "not-found", {}, () => {
          _push(ssrRenderComponent(NotFound, null, null, _parent));
        }, _push, _parent);
      } else if (unref(frontmatter).layout === "page") {
        _push(ssrRenderComponent(VPPage, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout === "home") {
        _push(ssrRenderComponent(VPHome, null, {
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout && unref(frontmatter).layout !== "doc") {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(frontmatter).layout), null, null), _parent);
      } else {
        _push(ssrRenderComponent(VPDoc, null, {
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const VPContent_vue_vue_type_style_index_0_scoped_3cf691b6_lang = "";
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPContent.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-3cf691b6"]]);
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).footer && unref(frontmatter).footer !== false) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: ["VPFooter", { "has-sidebar": unref(hasSidebar) }]
        }, _attrs))} data-v-e4279f1c><div class="container" data-v-e4279f1c>`);
        if (unref(theme2).footer.message) {
          _push(`<p class="message" data-v-e4279f1c>${unref(theme2).footer.message}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(theme2).footer.copyright) {
          _push(`<p class="copyright" data-v-e4279f1c>${unref(theme2).footer.copyright}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFooter_vue_vue_type_style_index_0_scoped_e4279f1c_lang = "";
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPFooter.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-e4279f1c"]]);
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  __ssrInlineRender: true,
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const { theme: theme2 } = useData();
    const open = ref(false);
    const vh = ref(0);
    ref();
    onContentUpdated(() => {
      open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPLocalNavOutlineDropdown",
        style: { "--vp-vh": vh.value + "px" }
      }, _attrs))} data-v-e8ae7d87>`);
      if (_ctx.headers.length > 0) {
        _push(`<button class="${ssrRenderClass({ open: open.value })}" data-v-e8ae7d87>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))} `);
        _push(ssrRenderComponent(VPIconChevronRight, { class: "icon" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<button data-v-e8ae7d87>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</button>`);
      }
      if (open.value) {
        _push(`<div class="items" data-v-e8ae7d87><div class="header" data-v-e8ae7d87><a class="top-link" href="#" data-v-e8ae7d87>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</a></div><div class="outline" data-v-e8ae7d87>`);
        _push(ssrRenderComponent(VPDocOutlineItem, { headers: _ctx.headers }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const VPLocalNavOutlineDropdown_vue_vue_type_style_index_0_scoped_e8ae7d87_lang = "";
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPLocalNavOutlineDropdown.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-e8ae7d87"]]);
const _sfc_main$R = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path><path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path><path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path><path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path></svg>`);
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/icons/VPIconAlignLeft.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const VPIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const { y } = useWindowScroll();
    const headers = shallowRef([]);
    const navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    });
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty = computed(() => {
      return headers.value.length === 0 && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        fixed: empty.value,
        "reached-top": y.value >= navHeight.value
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(frontmatter).layout !== "home" && (!empty.value || unref(y) >= navHeight.value)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: classes.value }, _attrs))} data-v-693d654a>`);
        if (unref(hasSidebar)) {
          _push(`<button class="menu"${ssrRenderAttr("aria-expanded", _ctx.open)} aria-controls="VPSidebarNav" data-v-693d654a>`);
          _push(ssrRenderComponent(VPIconAlignLeft, { class: "menu-icon" }, null, _parent));
          _push(`<span class="menu-text" data-v-693d654a>${ssrInterpolate(unref(theme2).sidebarMenuLabel || "Menu")}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPLocalNavOutlineDropdown, {
          headers: headers.value,
          navHeight: navHeight.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPLocalNav_vue_vue_type_style_index_0_scoped_693d654a_lang = "";
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-693d654a"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const VPSwitch_vue_vue_type_style_index_0_scoped_92d8f6fb_lang = "";
const _sfc_main$P = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-92d8f6fb><span class="check" data-v-92d8f6fb>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-92d8f6fb>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-92d8f6fb"]]);
const _sfc_main$O = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/icons/VPIconSun.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const VPIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$N = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const VPIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, isDark } = useData();
    const checked = ref(false);
    const toggle = inBrowser ? useAppearance() : () => {
    };
    onMounted(() => {
      checked.value = document.documentElement.classList.contains("dark");
    });
    function useAppearance() {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      const classList = document.documentElement.classList;
      let userPreference = localStorage.getItem(APPEARANCE_KEY);
      let isDark2 = site.value.appearance === "dark" && userPreference == null || (userPreference === "auto" || userPreference == null ? query.matches : userPreference === "dark");
      query.onchange = (e) => {
        if (userPreference === "auto") {
          setClass(isDark2 = e.matches);
        }
      };
      function toggle2() {
        setClass(isDark2 = !isDark2);
        userPreference = isDark2 ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto";
        localStorage.setItem(APPEARANCE_KEY, userPreference);
      }
      function setClass(dark) {
        const css = document.createElement("style");
        css.type = "text/css";
        css.appendChild(
          document.createTextNode(
            `:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`
          )
        );
        document.head.appendChild(css);
        checked.value = dark;
        classList[dark ? "add" : "remove"]("dark");
        window.getComputedStyle(css).opacity;
        document.head.removeChild(css);
      }
      return toggle2;
    }
    watch(checked, (newIsDark) => {
      isDark.value = newIsDark;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPSwitch, mergeProps({
        title: "toggle dark mode",
        class: "VPSwitchAppearance",
        "aria-checked": checked.value,
        onClick: unref(toggle)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VPIconSun, { class: "sun" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VPIconMoon, { class: "moon" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VPIconSun, { class: "sun" }),
              createVNode(VPIconMoon, { class: "moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPSwitchAppearance_vue_vue_type_style_index_0_scoped_a99ed743_lang = "";
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-a99ed743"]]);
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-5e9f0637>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarAppearance_vue_vue_type_style_index_0_scoped_5e9f0637_lang = "";
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-5e9f0637"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$K = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path></svg>`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronDown.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const VPIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$J = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="5" cy="12" r="2"></circle></svg>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoreHorizontal.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const VPIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuLink" }, _attrs))} data-v-2a4d50e5>`);
      _push(ssrRenderComponent(_sfc_main$18, {
        class: { active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch || _ctx.item.link, !!_ctx.item.activeMatch) },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const VPMenuLink_vue_vue_type_style_index_0_scoped_2a4d50e5_lang = "";
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-2a4d50e5"]]);
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuGroup" }, _attrs))} data-v-a6b0397c>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-a6b0397c>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPMenuGroup_vue_vue_type_style_index_0_scoped_a6b0397c_lang = "";
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-a6b0397c"]]);
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenu" }, _attrs))} data-v-e42ed9b3>`);
      if (_ctx.items) {
        _push(`<div class="items" data-v-e42ed9b3><!--[-->`);
        ssrRenderList(_ctx.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPMenu_vue_vue_type_style_index_0_scoped_e42ed9b3_lang = "";
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPMenu.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-e42ed9b3"]]);
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-6b19ffdd><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", open.value)}${ssrRenderAttr("aria-label", _ctx.label)} data-v-6b19ffdd>`);
      if (_ctx.button || _ctx.icon) {
        _push(`<span class="text" data-v-6b19ffdd>`);
        if (_ctx.icon) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.icon), { class: "option-icon" }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.button) {
          _push(`<span data-v-6b19ffdd>${_ctx.button}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPIconChevronDown, { class: "text-icon" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(ssrRenderComponent(VPIconMoreHorizontal, { class: "icon" }, null, _parent));
      }
      _push(`</button><div class="menu" data-v-6b19ffdd>`);
      _push(ssrRenderComponent(VPMenu, { items: _ctx.items }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const VPFlyout_vue_vue_type_style_index_0_scoped_6b19ffdd_lang = "";
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-6b19ffdd"]]);
const icons = {
  discord: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  facebook: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  github: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  instagram: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
  linkedin: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  mastodon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
  slack: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
  twitter: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
  youtube: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
};
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const props = __props;
    const svg = computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return icons[props.icon];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "VPSocialLink no-icon",
        href: _ctx.link,
        "aria-label": _ctx.ariaLabel ?? (typeof _ctx.icon === "string" ? _ctx.icon : ""),
        target: "_blank",
        rel: "noopener"
      }, _attrs))} data-v-16cf740a>${svg.value}</a>`);
    };
  }
});
const VPSocialLink_vue_vue_type_style_index_0_scoped_16cf740a_lang = "";
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-16cf740a"]]);
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPSocialLinks" }, _attrs))} data-v-e71e869c><!--[-->`);
      ssrRenderList(_ctx.links, ({ link: link2, icon, ariaLabel }) => {
        _push(ssrRenderComponent(VPSocialLink, {
          key: link2,
          icon,
          link: link2,
          ariaLabel
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPSocialLinks_vue_vue_type_style_index_0_scoped_e71e869c_lang = "";
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-e71e869c"]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (hasExtraContent.value) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarExtra",
          label: "extra navigation"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(localeLinks).length && unref(currentLang).label) {
                _push2(`<div class="group translations" data-v-c8c2ae4b${_scopeId}><p class="trans-title" data-v-c8c2ae4b${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
                ssrRenderList(unref(localeLinks), (locale) => {
                  _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(site).appearance) {
                _push2(`<div class="group" data-v-c8c2ae4b${_scopeId}><div class="item appearance" data-v-c8c2ae4b${_scopeId}><p class="label" data-v-c8c2ae4b${_scopeId}>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p><div class="appearance-action" data-v-c8c2ae4b${_scopeId}>`);
                _push2(ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(theme2).socialLinks) {
                _push2(`<div class="group" data-v-c8c2ae4b${_scopeId}><div class="item social-links" data-v-c8c2ae4b${_scopeId}>`);
                _push2(ssrRenderComponent(VPSocialLinks, {
                  class: "social-links-list",
                  links: unref(theme2).socialLinks
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "group translations"
                }, [
                  createVNode("p", { class: "trans-title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])) : createCommentVNode("", true),
                unref(site).appearance ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "group"
                }, [
                  createVNode("div", { class: "item appearance" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
                    createVNode("div", { class: "appearance-action" }, [
                      createVNode(VPSwitchAppearance)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                unref(theme2).socialLinks ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "group"
                }, [
                  createVNode("div", { class: "item social-links" }, [
                    createVNode(VPSocialLinks, {
                      class: "social-links-list",
                      links: unref(theme2).socialLinks
                    }, null, 8, ["links"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarExtra_vue_vue_type_style_index_0_scoped_c8c2ae4b_lang = "";
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-c8c2ae4b"]]);
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", { active: _ctx.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-6bee1efd><span class="container" data-v-6bee1efd><span class="top" data-v-6bee1efd></span><span class="middle" data-v-6bee1efd></span><span class="bottom" data-v-6bee1efd></span></span></button>`);
    };
  }
});
const VPNavBarHamburger_vue_vue_type_style_index_0_scoped_6bee1efd_lang = "";
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-6bee1efd"]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$18, mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch || _ctx.item.link,
            !!_ctx.item.activeMatch
          )
        },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        tabindex: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-e5ab8091${_scopeId}>${_ctx.item.text}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: _ctx.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_e5ab8091_lang = "";
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-e5ab8091"]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch,
            !!_ctx.item.activeMatch
          )
        },
        button: _ctx.item.text,
        items: _ctx.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-f732b5d0><span id="main-nav-aria-label" class="visually-hidden" data-v-f732b5d0>Main Navigation</span><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(_sfc_main$z, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarMenu_vue_vue_type_style_index_0_scoped_f732b5d0_lang = "";
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-f732b5d0"]]);
const style = "";
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearchButton",
  __ssrInlineRender: true,
  props: {
    placeholder: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": "Search"
      }, _attrs))}><span class="DocSearch-Button-Container"><svg class="DocSearch-Search-Icon" width="20" height="20" viewBox="0 0 20 20" aria-label="search icon"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${ssrInterpolate(_ctx.placeholder)}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`);
    };
  }
});
const VPNavBarSearchButton_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearchButton.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPLocalSearchBox = defineAsyncComponent(() => import("./VPLocalSearchBox.9a2e4248.js"));
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2, localeIndex } = useData();
    const loaded = ref(false);
    const actuallyLoaded = ref(false);
    const buttonText = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g;
      const options = ((_a = theme2.value.search) == null ? void 0 : _a.options) ?? theme2.value.algolia;
      return ((_e = (_d = (_c = (_b = options == null ? void 0 : options.locales) == null ? void 0 : _b[localeIndex.value]) == null ? void 0 : _c.translations) == null ? void 0 : _d.button) == null ? void 0 : _e.buttonText) || ((_g = (_f = options == null ? void 0 : options.translations) == null ? void 0 : _f.button) == null ? void 0 : _g.buttonText) || "Search";
    });
    onMounted(() => {
      {
        return;
      }
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    function isEditingContent(event) {
      const element = event.target;
      const tagName = element.tagName;
      return element.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";
    }
    const showSearch = ref(false);
    {
      onKeyStroke("k", (event) => {
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
      onKeyStroke("/", (event) => {
        if (!isEditingContent(event)) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
    }
    const metaKey = ref(`'Meta'`);
    onMounted(() => {
      metaKey.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? `'⌘'` : `'Ctrl'`;
    });
    const provider = "local";
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPNavBarSearch",
        style: { "--vp-meta-key": metaKey.value }
      }, _attrs))}>`);
      if (unref(provider) === "local") {
        _push(`<!--[-->`);
        if (showSearch.value) {
          _push(ssrRenderComponent(unref(VPLocalSearchBox), {
            placeholder: buttonText.value,
            onClose: ($event) => showSearch.value = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div id="local-search">`);
        _push(ssrRenderComponent(_sfc_main$x, {
          placeholder: buttonText.value,
          onClick: ($event) => showSearch.value = true
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else if (unref(provider) === "algolia") {
        _push(`<!--[-->`);
        if (loaded.value) {
          _push(ssrRenderComponent(unref(VPAlgoliaSearchBox), {
            algolia: ((_a = unref(theme2).search) == null ? void 0 : _a.options) ?? unref(theme2).algolia,
            onVnodeBeforeMount: ($event) => actuallyLoaded.value = true
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!actuallyLoaded.value) {
          _push(`<div id="docsearch">`);
          _push(ssrRenderComponent(_sfc_main$x, {
            placeholder: buttonText.value,
            onClick: load
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const VPNavBarSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavBarSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_ef6192dc_lang = "";
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-ef6192dc"]]);
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-2973dbb4><a class="title"${ssrRenderAttr("href", unref(theme2).logoLink ?? unref(normalizeLink$1)(unref(currentLang).link))} data-v-2973dbb4>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push, _parent);
      if (unref(theme2).logo) {
        _push(ssrRenderComponent(VPImage, {
          class: "logo",
          image: unref(theme2).logo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(theme2).siteTitle) {
        _push(`<!--[-->${ssrInterpolate(unref(theme2).siteTitle)}<!--]-->`);
      } else if (unref(theme2).siteTitle === void 0) {
        _push(`<!--[-->${ssrInterpolate(unref(site).title)}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push, _parent);
      _push(`</a></div>`);
    };
  }
});
const VPNavBarTitle_vue_vue_type_style_index_0_scoped_2973dbb4_lang = "";
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-2973dbb4"]]);
const _sfc_main$t = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/icons/VPIconLanguages.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const VPIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarTranslations",
          icon: VPIconLanguages,
          label: unref(theme2).langMenuLabel || "Change language"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-ff4524ae${_scopeId}><p class="title" data-v-ff4524ae${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
              ssrRenderList(unref(localeLinks), (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "items" }, [
                  createVNode("p", { class: "title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarTranslations_vue_vue_type_style_index_0_scoped_ff4524ae_lang = "";
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-ff4524ae"]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData();
    const classes = ref({});
    watchPostEffect(() => {
      var _a;
      classes.value = {
        "has-sidebar": hasSidebar.value,
        top: ((_a = frontmatter.value) == null ? void 0 : _a.layout) === "home" && y.value === 0
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBar", classes.value]
      }, _attrs))} data-v-c8ceaf10><div class="container" data-v-c8ceaf10><div class="title" data-v-c8ceaf10>`);
      _push(ssrRenderComponent(VPNavBarTitle, null, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><div class="content" data-v-c8ceaf10><div class="curtain" data-v-c8ceaf10></div><div class="content-body" data-v-c8ceaf10>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$w, { class: "search" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarTranslations, { class: "translations" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: _ctx.isScreenOpen,
        onClick: ($event) => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const VPNavBar_vue_vue_type_style_index_0_scoped_c8ceaf10_lang = "";
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-c8ceaf10"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$18, mergeProps({
        class: "VPNavScreenMenuLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_08b49756_lang = "";
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-08b49756"]]);
const _sfc_main$p = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path></svg>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/icons/VPIconPlus.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const VPIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$18, mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_97083fb3_lang = "";
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-97083fb3"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-f60dbfa7>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-f60dbfa7>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_f60dbfa7_lang = "";
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-f60dbfa7"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-10e00a88><button class="button"${ssrRenderAttr("aria-controls", groupId.value)}${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-10e00a88><span class="button-text" data-v-10e00a88>${ssrInterpolate(_ctx.text)}</span>`);
      _push(ssrRenderComponent(VPIconPlus, { class: "button-icon" }, null, _parent));
      _push(`</button><div${ssrRenderAttr("id", groupId.value)} class="items" data-v-10e00a88><!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-10e00a88>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupLink, { item }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-10e00a88>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_10e00a88_lang = "";
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-10e00a88"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavScreenMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-0dc5cf49><p class="text" data-v-0dc5cf49>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_0dc5cf49_lang = "";
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-0dc5cf49"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["VPNavScreenTranslations", { open: isOpen.value }]
        }, _attrs))} data-v-41505286><button class="title" data-v-41505286>`);
        _push(ssrRenderComponent(VPIconLanguages, { class: "icon lang" }, null, _parent));
        _push(` ${ssrInterpolate(unref(currentLang).label)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "icon chevron" }, null, _parent));
        _push(`</button><ul class="list" data-v-41505286><!--[-->`);
        ssrRenderList(unref(localeLinks), (locale) => {
          _push(`<li class="item" data-v-41505286>`);
          _push(ssrRenderComponent(_sfc_main$18, {
            class: "link",
            href: locale.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(locale.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(locale.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenTranslations_vue_vue_type_style_index_0_scoped_41505286_lang = "";
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-41505286"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavScreenSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen,
          id: "VPNavScreen"
        }, _attrs))} data-v-dc785598><div class="container" data-v-dc785598>`);
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(_sfc_main$l, { class: "menu" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenTranslations, { class: "translations" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$i, { class: "social-links" }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreen_vue_vue_type_style_index_0_scoped_dc785598_lang = "";
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-dc785598"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    provide("close-screen", closeScreen);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "VPNav" }, _attrs))} data-v-5bdc5df3>`);
      _push(ssrRenderComponent(VPNavBar, {
        "is-screen-open": unref(isScreenOpen),
        onToggleScreen: unref(toggleScreen)
      }, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(VPNavScreen, { open: unref(isScreenOpen) }, {
        "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</header>`);
    };
  }
});
const VPNav_vue_vue_type_style_index_0_scoped_5bdc5df3_lang = "";
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPNav.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-5bdc5df3"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(sectionTag.value), mergeProps({
        class: ["VPSidebarItem", classes.value]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.item.text) {
              _push2(`<div class="item"${ssrRenderAttr("role", itemRole.value)}${ssrRenderAttr("tabindex", _ctx.item.items && 0)} data-v-c356ab37${_scopeId}><div class="indicator" data-v-c356ab37${_scopeId}></div>`);
              if (_ctx.item.link) {
                _push2(ssrRenderComponent(_sfc_main$18, {
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent3, _scopeId2);
                    } else {
                      return [
                        (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                          class: "text",
                          innerHTML: _ctx.item.text
                        }, null, 8, ["innerHTML"]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent2, _scopeId);
              }
              if (_ctx.item.collapsed != null) {
                _push2(`<div class="caret" role="button" aria-label="toggle section" tabindex="0" data-v-c356ab37${_scopeId}>`);
                _push2(ssrRenderComponent(VPIconChevronRight, { class: "caret-icon" }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.item.items && _ctx.item.items.length) {
              _push2(`<div class="items" data-v-c356ab37${_scopeId}>`);
              if (_ctx.depth < 5) {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.item.items, (i) => {
                  _push2(ssrRenderComponent(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.item.text ? (openBlock(), createBlock("div", mergeProps({
                key: 0,
                class: "item",
                role: itemRole.value
              }, toHandlers(_ctx.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {}, true), {
                tabindex: _ctx.item.items && 0
              }), [
                createVNode("div", { class: "indicator" }),
                _ctx.item.link ? (openBlock(), createBlock(_sfc_main$18, {
                  key: 0,
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                      class: "text",
                      innerHTML: _ctx.item.text
                    }, null, 8, ["innerHTML"]))
                  ]),
                  _: 1
                }, 8, ["tag", "href"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  key: 1,
                  class: "text",
                  innerHTML: _ctx.item.text
                }, null, 8, ["innerHTML"])),
                _ctx.item.collapsed != null ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "caret",
                  role: "button",
                  "aria-label": "toggle section",
                  onClick: onCaretClick,
                  onKeydown: withKeys(onCaretClick, ["enter"]),
                  tabindex: "0"
                }, [
                  createVNode(VPIconChevronRight, { class: "caret-icon" })
                ], 40, ["onKeydown"])) : createCommentVNode("", true)
              ], 16, ["role", "tabindex"])) : createCommentVNode("", true),
              _ctx.item.items && _ctx.item.items.length ? (openBlock(), createBlock("div", {
                key: 1,
                class: "items"
              }, [
                _ctx.depth < 5 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.item.items, (i) => {
                  return openBlock(), createBlock(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, 8, ["item", "depth"]);
                }), 128)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const VPSidebarItem_vue_vue_type_style_index_0_scoped_c356ab37_lang = "";
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPSidebarItem.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-c356ab37"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { sidebarGroups, hasSidebar } = useSidebar();
    let navEl = ref(null);
    function lockBodyScroll() {
      disableBodyScroll(navEl.value, { reserveScrollBarGap: true });
    }
    function unlockBodyScroll() {
      clearAllBodyScrollLocks();
    }
    watchPostEffect(async () => {
      var _a;
      if (props.open) {
        lockBodyScroll();
        (_a = navEl.value) == null ? void 0 : _a.focus();
      } else {
        unlockBodyScroll();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["VPSidebar", { open: _ctx.open }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-b04a928c><div class="curtain" data-v-b04a928c></div><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-b04a928c><span class="visually-hidden" id="sidebar-aria-label" data-v-b04a928c> Sidebar Navigation </span>`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push, _parent);
        _push(`<!--[-->`);
        ssrRenderList(unref(sidebarGroups), (item) => {
          _push(`<div class="group" data-v-b04a928c>`);
          _push(ssrRenderComponent(VPSidebarItem, {
            item,
            depth: 0
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push, _parent);
        _push(`</nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPSidebar_vue_vue_type_style_index_0_scoped_b04a928c_lang = "";
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-b04a928c"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-9c8615dd></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-9c8615dd> Skip to content </a><!--]-->`);
    };
  }
});
const VPSkipLink_vue_vue_type_style_index_0_scoped_9c8615dd_lang = "";
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-9c8615dd"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    provide("close-sidebar", closeSidebar);
    provide("is-sidebar-open", isSidebarOpen);
    const { frontmatter } = useData();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      if (unref(frontmatter).layout !== false) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["Layout", unref(frontmatter).pageClass]
        }, _attrs))} data-v-324e8308>`);
        ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSkipLink, null, null, _parent));
        _push(ssrRenderComponent(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, _parent));
        if (unref(frontmatter).navbar !== false) {
          _push(ssrRenderComponent(VPNav, null, {
            "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
                ];
              }
            }),
            "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
                ];
              }
            }),
            "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
                ];
              }
            }),
            "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
                ];
              }
            }),
            "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
                ];
              }
            }),
            "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
              ];
            }
          }),
          "sidebar-nav-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPContent, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "not-found", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
              ];
            }
          }),
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPFooter, null, null, _parent));
        ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_Content, _attrs, null, _parent));
      }
    };
  }
});
const Layout_vue_vue_type_style_index_0_scoped_324e8308_lang = "";
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/Layout.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-324e8308"]]);
const _sfc_main$b = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"></path></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/icons/VPIconHeart.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const VPIconHeart = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$1]]);
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2]
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2]
  ],
  big: [
    [832, 3],
    [640, 2]
  ]
};
function useSponsorsGrid({ el, size = "medium" }) {
  const onResize = throttleAndDebounce(manage, 100);
  onMounted(() => {
    manage();
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.classList.add("vp-sponsor-grid-item", "empty");
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    useSponsorsGrid({ el, size: props.size });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [props.size ?? "medium"]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.data, (sponsor) => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${ssrRenderAttr("src", sponsor.img)}${ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: {},
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sponsors = computed(() => {
      const isSponsors = props.data.some((s) => {
        return "items" in s;
      });
      if (isSponsors) {
        return props.data;
      }
      return [
        { tier: props.tier, size: props.size, items: props.data }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsors vp-sponsor", [_ctx.mode ?? "normal"]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(sponsors.value, (sponsor, index) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$a, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: {},
    actionText: {},
    actionLink: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "VPHomeSponsors" }, _attrs))} data-v-978bd032><div class="container" data-v-978bd032><div class="header" data-v-978bd032><div class="love" data-v-978bd032>`);
      _push(ssrRenderComponent(VPIconHeart, { class: "icon" }, null, _parent));
      _push(`</div>`);
      if (_ctx.message) {
        _push(`<h2 class="message" data-v-978bd032>${ssrInterpolate(_ctx.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-978bd032>`);
      _push(ssrRenderComponent(_sfc_main$9, { data: _ctx.data }, null, _parent));
      _push(`</div>`);
      if (_ctx.actionLink) {
        _push(`<div class="action" data-v-978bd032>`);
        _push(ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: _ctx.actionText ?? "Become a sponsor",
          href: _ctx.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const VPHomeSponsors_vue_vue_type_style_index_0_scoped_978bd032_lang = "";
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideSponsors" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        mode: "aside",
        tier: _ctx.tier,
        size: _ctx.size,
        data: _ctx.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const VPTeamPage_vue_vue_type_style_index_0_scoped_b1cfd8dc_lang = "";
const _sfc_main$6 = {};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const VPTeamPageTitle_vue_vue_type_style_index_0_scoped_46c5e327_lang = "";
const _sfc_main$5 = {};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const VPTeamPageSection_vue_vue_type_style_index_0_scoped_3bf2e850_lang = "";
const _sfc_main$4 = {};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: {},
    member: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembersItem", [_ctx.size ?? "medium"]]
      }, _attrs))} data-v-b0e83e62><div class="profile" data-v-b0e83e62><figure class="avatar" data-v-b0e83e62><img class="avatar-img"${ssrRenderAttr("src", _ctx.member.avatar)}${ssrRenderAttr("alt", _ctx.member.name)} data-v-b0e83e62></figure><div class="data" data-v-b0e83e62><h1 class="name" data-v-b0e83e62>${ssrInterpolate(_ctx.member.name)}</h1>`);
      if (_ctx.member.title || _ctx.member.org) {
        _push(`<p class="affiliation" data-v-b0e83e62>`);
        if (_ctx.member.title) {
          _push(`<span class="title" data-v-b0e83e62>${ssrInterpolate(_ctx.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.title && _ctx.member.org) {
          _push(`<span class="at" data-v-b0e83e62> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.org) {
          _push(ssrRenderComponent(_sfc_main$18, {
            class: ["org", { link: _ctx.member.orgLink }],
            href: _ctx.member.orgLink,
            "no-icon": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.member.org)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.member.org), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.desc) {
        _push(`<p class="desc" data-v-b0e83e62>${_ctx.member.desc}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.links) {
        _push(`<div class="links" data-v-b0e83e62>`);
        _push(ssrRenderComponent(VPSocialLinks, {
          links: _ctx.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.member.sponsor) {
        _push(`<div class="sp" data-v-b0e83e62>`);
        _push(ssrRenderComponent(_sfc_main$18, {
          class: "sp-link",
          href: _ctx.member.sponsor,
          "no-icon": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VPIconHeart, { class: "sp-icon" }, null, _parent2, _scopeId));
              _push2(` Sponsor `);
            } else {
              return [
                createVNode(VPIconHeart, { class: "sp-icon" }),
                createTextVNode(" Sponsor ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const VPTeamMembersItem_vue_vue_type_style_index_0_scoped_b0e83e62_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b0e83e62"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: {},
    members: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      props.size ?? "medium",
      `count-${props.members.length}`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembers", classes.value]
      }, _attrs))} data-v-6927e48e><div class="container" data-v-6927e48e><!--[-->`);
      ssrRenderList(_ctx.members, (member) => {
        _push(`<div class="item" data-v-6927e48e>`);
        _push(ssrRenderComponent(VPTeamMembersItem, {
          size: _ctx.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPTeamMembers_vue_vue_type_style_index_0_scoped_6927e48e_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", VPBadge);
  }
};
const ArticleCard_vue_vue_type_style_index_0_scoped_20273c90_lang = "";
const _sfc_main$1 = {
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({ href: $props.href }, _attrs))} data-v-20273c90><div class="card" data-v-20273c90><div class="flex" data-v-20273c90><div style="${ssrRenderStyle({ "min-width": "200px", "margin": "auto" })}" data-v-20273c90><img${ssrRenderAttr("src", $props.image)}${ssrRenderAttr("alt", $props.title)} width="200" data-v-20273c90></div><div class="details" data-v-20273c90><h2 class="title" data-v-20273c90>${ssrInterpolate($props.title)}</h2><p class="excerpt" data-v-20273c90>${ssrInterpolate($props.excerpt)}</p><div class="author" data-v-20273c90><div data-v-20273c90><p class="date" data-v-20273c90>Posted ${ssrInterpolate($props.date)}</p></div></div></div></div></div></a>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/ArticleCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArticleCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-20273c90"]]);
const posts = [
  {
    path: "blog/2023/rainbow-colormaps-are-not-all-bad-paper",
    title: "Rainbow Colormaps Are Not All Bad (Paper)",
    description: "Rainbow colormaps are among the most derided ideas in data visualization, second only to pie charts. And yet, people use them. Why? A recent paper looks at some of the reasons why they are so popular and points to research showing that they might not be so bad if used for the right tasks. There's even opportunity for interesting research in rainbow colormaps!",
    date: "July 12, 2023",
    tags: [
      ""
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2023/07/rainbow-comparison.jpeg"
  },
  {
    path: "blog/2023/paper-notebooks-for-data-analysis-and-visualization",
    title: "Paper: Notebooks for Data Analysis and Visualization",
    description: "Computational notebooks offer an alternative to the common GUI-based tools used for data visualization and BI today. In this new paper, I talk about what they are, their pros and cons, and how research could fill in some important gaps.",
    date: "May 01, 2023",
    tags: [
      "paper"
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2023/05/Kosara-CGA-2023-thumb.png"
  },
  {
    path: "blog/2023/course-on-data-vis-fundamentals-and-best-practices",
    title: "Course on Data Vis Fundamentals and Best Practices",
    description: "I'm teaching a short course on data visualization for Observable. It's free, and you should join! Starts March 7.",
    date: "February 23, 2023",
    tags: [
      ""
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2023/02/vis-course-thumb.png"
  },
  {
    path: "blog/2023/new-video-exploring-the-connections-between-companies-with-they-rule",
    title: "New video: Exploring the connections between companies with They Rule",
    description: "Josh On's They Rule is back, and I've made a video about it.",
    date: "February 09, 2023",
    tags: [
      "eagereyestv"
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2023/02/they-rule-thumb-4x3-1.jpeg"
  },
  {
    path: "blog/2022/site-changes-coming-how-to-follow-sites-and-where-ive-been",
    title: "Site Changes Coming, How to Follow Sites, and Where I've Been",
    description: "This site has been around for over 16 years now, and a lot has changed in the world during that time. I'm currently working on an overhaul and wanted to give everybody an idea of what I'm thinking about and why there has been little activity. In light of recent developments, here are also some good ways to follow good old-fashioned blogs and an alternative to Twitter.",
    date: "November 06, 2022",
    tags: [
      "Meta/Site News"
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2022/11/mastodon-eagereyes.jpeg"
  },
  {
    path: "blog/2022/midjourney-is-a-trip",
    title: "Midjourney is a Trip",
    description: "Of the several AI-powered systems that can create images from text prompts, MidJourney is the most easily accessible one right now. I've had some fun playing with it.",
    date: "June 28, 2022",
    tags: [
      ""
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2022/06/midjourney-teaser.jpg"
  },
  {
    path: "blog/2022/new-video-gauges-for-data-visualization-the-ny-times-election-needle-and-circular-bar-charts",
    title: "New video: Gauges for Data Visualization, The NY Times Election Needle, and Circular Bar Charts",
    description: `Gauges aren't very popular in visualization, but they have some interesting properties. There is, of course, the infamous NY Times "election needle," but you're probably using gauges every day without giving them too much thought. There's also an interesting connection with circular bar charts, which I think can work well when used as part-to-whole charts. I talk about all of this in my new video.`,
    date: "May 17, 2022",
    tags: [
      "eagereyestv"
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2022/05/Gauges-Thumbnail-4x3-1.jpeg"
  },
  {
    path: "blog/2022/watch-my-outlier-talk-this-should-have-been-a-bar-chart",
    title: "Watch My Outlier Talk: This Should Have Been A Bar Chart!",
    description: "I gave a talk at the Outlier conference earlier this year, with the somewhat elaborate title, The Joys – and Dangers – of Bespoke and Unusual Chart Types. Though I eventually decided to go with the much shorter, This Should Have Been A Bar Chart! You can watch it on YouTube now.",
    date: "April 26, 2022",
    tags: [
      ""
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2022/04/outlier-talk.png"
  },
  {
    path: "blog/2022/paper-more-than-meets-the-eye-a-closer-look-at-encodings-in-visualization",
    title: "Paper: More Than Meets the Eye: A Closer Look at Encodings in Visualization",
    description: "Encodings play a central role in visualization, but I believe our thinking about them is too simplistic. In a new paper, I argue that we need to distinguish between the encodings that specify how a visualization is drawn and the ones that are readable or actually read by an observer. While they largely or entirely overlap in some charts (like bar charts or scatterplots) they don't in others (pie charts, line charts, etc.). And what exactly do you even specify in more complex visualizations like treemaps?",
    date: "April 19, 2022",
    tags: [
      "paper"
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2022/04/Kosara-CGA-2022b.png"
  },
  {
    path: "blog/2022/the-possible-stratagem-behind-the-biden-bar",
    title: "The (Possible) Stratagem Behind the Biden Bar",
    description: "A bar chart with a distorted vertical axis isn't very unusual. But what if that chart was posted by the White House and what if it was done on purpose – not to overstate the number shown, but rather to evoke a particular kind of response?",
    date: "January 30, 2022",
    tags: [
      ""
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2022/01/economic-growth-1.jpeg"
  },
  {
    path: "blog/2022/the-ny-times-covid-spiral-is-off-center",
    title: "The NY Times COVID Spiral Is Off-Center",
    description: "An opinion piece in the New York Times last week got a lot of attention in visualization circles for its use of a spiral chart as its opener. While the choice of chart and color scheme can be debated, I want to discuss the fact that the spiral is disconcertingly off-center.",
    date: "January 09, 2022",
    tags: [
      ""
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2022/01/spirals-overlaid.png"
  },
  {
    path: "blog/2021/new-video-the-science-of-pie-charts",
    title: "New Video: The Science of Pie Charts",
    description: "The common explanation for how pie charts work is that we read them by angle. That of course would mean that donut charts would be bad, because you can't see the angle when you take away the center of the pie. Changing the radius of a slice wouldn't matter though, because that doesn't change the angle. But there is no evidence that angle is how we read pie charts, quite the opposite actually. In this new video, I walk through five reasons why angle is not how we read pies, and what that means for other things we like to assume about them.",
    date: "November 16, 2021",
    tags: [
      "pie-charts",
      "eagereyestv"
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2021/11/Thumbnail-4x3-1.jpeg"
  },
  {
    path: "blog/2021/paper-from-jam-session-to-recital-synchronous-communication-and-collaboration-around-data-in-organizations",
    title: "Paper: From Jam Session to Recital: Synchronous Communication and Collaboration Around Data in Organizations",
    description: "Who are the people who use data and visualization as part of their work every day? In particular, how do people use data as part of meetings, to present to others, to discuss their findings and recommendations, etc.? My colleague Matt Brehmer and I ran a pair of studies to find out.",
    date: "October 26, 2021",
    tags: [
      "paper"
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2021/10/pexels-photo-3184292.jpeg"
  },
  {
    path: "blog/2021/eagereyes-turns-15",
    title: "EagerEyes Turns 15",
    description: "EagerEyes is 15 years old today! Rather than look back at 15 years of visualization and blogging (though I will do a little of that too), I want to reflect a bit on what blogging means today and where things are going.",
    date: "October 01, 2021",
    tags: [
      "Meta/Site News"
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2021/09/eagereyes-xv.jpeg"
  },
  {
    path: "blog/2021/can-a-timeline-pie-chart-work",
    title: "Can A Timeline Pie Chart Work?",
    description: "Can you put ranked data into a pie chart that also represents time? This chart tries, and I think it succeeds.",
    date: "September 15, 2021",
    tags: [
      ""
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2021/09/california-wildfires-thumb.jpeg"
  },
  {
    path: "blog/2021/new-video-chart-appreciation-iraqs-bloody-toll-by-simon-scarr",
    title: "New video: Chart Appreciation, Iraq's Bloody Toll by Simon Scarr",
    description: "How do you make people not just see numbers when looking at a chart, but feel something? This chart of the number of deaths during the Iraq war has always given me a visceral response like no other, and it’s still as powerful as when it was made almost ten years ago. So I made a chart appreciation video to explain what I think is so great about it.",
    date: "July 22, 2021",
    tags: [
      "eagereyestv"
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2021/07/Iraq-Thumbnail-Blog.jpg"
  },
  {
    path: "blog/2021/when-the-wrong-chart-is-the-right-choice",
    title: "When the Wrong Chart Is the Right Choice",
    description: "We all agree that the direction of the bars in a bar chart should correspond to the direction in which the values grow. Or do we? When it comes to running or audio recording and processing, it turns out that the seemingly wrong choice can be the right one – because a more semantically meaningful representation can help us understand and use the data much more easily.",
    date: "June 27, 2021",
    tags: [
      ""
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2021/06/undeararmour-bars.jpeg"
  },
  {
    path: "blog/2021/new-video-linear-vs-quadratic-change",
    title: "New Video: Linear vs. Quadratic Change",
    description: "Scaling objects to represent a value is a key part of visualization, but it's not without its pitfalls. Especially when it comes to fancy infographic bar charts, it can easily distort the value's appearance. Why that is, and where else this can happen, isn't always obvious. In my new video, I show how it happens and how to do it right – and how this issue inspired ISOTYPE.",
    date: "June 15, 2021",
    tags: [
      "eagereyestv"
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2021/06/LvQ-Thumbnail.jpeg"
  },
  {
    path: "blog/2021/new-video-florence-nightingales-famous-rose-chart-aka-coxcomb",
    title: `New video: Florence Nightingale's Famous Rose Chart (aka "Coxcomb")`,
    description: "It's Florence Nightingale's 201st birthday tomorrow! Since I missed her 200th, I figured I'd make a video about her famous chart. What made it tick? What was it about? Who was Nightingale, anyway?",
    date: "May 11, 2021",
    tags: [
      "eagereyestv"
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2021/05/Nightingale-Thumbnail.jpeg"
  },
  {
    path: "blog/2021/new-video-chart-appreciation-black-vs-white-boys-and-the-punishing-reach-of-racism",
    title: "New video: Chart Appreciation, Black vs. White Boys and The Punishing Reach of Racism",
    description: "Dots fly across the screen, some of them moving up, some down. They represent black and white boys, and how their income differs from that of their parents and from each other. It's a great way to show this data in an engaging way and without having to explain percentiles. This is a chart appreciation.",
    date: "April 20, 2021",
    tags: [
      "eagereyestv"
    ],
    featuredImage: "https://media.eagereyes.org/wp-content/uploads/2021/04/Black-and-White-Boys-Thumb.jpeg"
  }
];
const Homepage_vue_vue_type_style_index_0_scoped_5d863b31_lang = "";
const _sfc_main = {
  __name: "Homepage",
  __ssrInlineRender: true,
  setup(__props) {
    const { Layout: Layout2 } = theme;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Layout2), _attrs, {
        "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(posts).slice(0, 3), (p, index) => {
              _push2(`<div data-v-5d863b31${_scopeId}>`);
              _push2(ssrRenderComponent(ArticleCard, {
                title: p.title,
                excerpt: p.description,
                image: p.featuredImage,
                href: p.path,
                date: p.date
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(posts).slice(0, 3), (p, index) => {
                return openBlock(), createBlock("div", { key: index }, [
                  createVNode(ArticleCard, {
                    title: p.title,
                    excerpt: p.description,
                    image: p.featuredImage,
                    href: p.path,
                    date: p.date
                  }, null, 8, ["title", "excerpt", "image", "href", "date"])
                ]);
              }), 128))
            ];
          }
        }),
        "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(posts).slice(3), (p, index) => {
              _push2(`<div data-v-5d863b31${_scopeId}>`);
              _push2(ssrRenderComponent(ArticleCard, {
                title: p.title,
                excerpt: p.description,
                image: p.featuredImage,
                href: p.path,
                date: p.date
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(unref(_sfc_main$X), null, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(posts).slice(3), (p, index) => {
                return openBlock(), createBlock("div", { key: index }, [
                  createVNode(ArticleCard, {
                    title: p.title,
                    excerpt: p.description,
                    image: p.featuredImage,
                    href: p.path,
                    date: p.date
                  }, null, 8, ["title", "excerpt", "image", "href", "date"])
                ]);
              }), 128)),
              createVNode(unref(_sfc_main$X))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/Homepage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Homepage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d863b31"]]);
const custom = "";
const RawTheme = {
  ...theme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: Homepage
};
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        if (!group)
          return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0)
          return;
        const blocks = group.querySelector(".blocks");
        if (!blocks)
          return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current)
          return;
        const next = blocks.children[i];
        if (!next || current === next)
          return;
        current.classList.remove("active");
        next.classList.add("active");
        const label = group == null ? void 0 : group.querySelector(`label[for="${el.id}"]`);
        label == null ? void 0 : label.scrollIntoView({ block: "nearest" });
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        let text = "";
        sibling.querySelectorAll("span.line:not(.diff.remove)").forEach((node) => text += (node.textContent || "") + "\n");
        text = text.slice(0, -1);
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    managedHeadTags.forEach((el) => document.head.removeChild(el));
    managedHeadTags = [];
    newTags.forEach((headConfig) => {
      const el = createHeadElement(headConfig);
      document.head.appendChild(el);
      managedHeadTags.push(el);
    });
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    document.title = createTitle(siteData2, pageData);
    const description = pageDescription || siteData2.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      metaDescriptionElement.setAttribute("content", description);
    } else {
      createHeadElement(["meta", { name: "description", content: description }]);
    }
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base2 = resolveThemeExtends(theme2.extends);
    return {
      ...base2,
      ...theme2,
      async enhanceApp(ctx) {
        if (base2.enhanceApp)
          await base2.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData$1();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = site.value.lang;
        document.documentElement.dir = site.value.dir;
      });
    });
    {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (!pageFilePath)
      return null;
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return import(
      /*@vite-ignore*/
      pageFilePath
    );
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "" };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  useRouter as a,
  dataSymbol as d,
  pathToFile as p,
  render,
  useData as u
};
