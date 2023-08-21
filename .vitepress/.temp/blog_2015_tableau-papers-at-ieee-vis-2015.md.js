import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Tableau Papers at IEEE VIS 2015","description":"My colleagues at Tableau Research have three papers at InfoVis next week. They cover guided data exploration, color theory, and data partitioning. Here's a little preview.","frontmatter":{"title":"Tableau Papers at IEEE VIS 2015","description":"My colleagues at Tableau Research have three papers at InfoVis next week. They cover guided data exploration, color theory, and data partitioning. Here's a little preview.","date":"2015-10-21T17:30:06.000Z","tags":"conference, IEEEVIS","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2015/10/tableau-vis-papers-teaser.jpg"},"headers":[],"relativePath":"blog/2015/tableau-papers-at-ieee-vis-2015.md","filePath":"blog/2015/tableau-papers-at-ieee-vis-2015.md"}`);
const _sfc_main = { name: "blog/2015/tableau-papers-at-ieee-vis-2015.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/10/tableau-vis-papers-teaser.jpg" alt="" width="825" height="360"></p><h1 id="tableau-papers-at-ieee-vis-2015" tabindex="-1">Tableau Papers at IEEE VIS 2015 <a class="header-anchor" href="#tableau-papers-at-ieee-vis-2015" aria-label="Permalink to &quot;Tableau Papers at IEEE VIS 2015&quot;">​</a></h1><p>My colleagues at <a href="https://research.tableau.com">Tableau Research</a> have three papers at InfoVis next week. They cover guided data exploration, color theory, and data partitioning. Here&#39;s a little preview.</p><p align="center"><a href="https://research.tableau.com/paper/voyager-exploratory-analysis-faceted-browsing-visualization-recommendations"><img class="aligncenter size-full wp-image-8989" src="https://media.eagereyes.org/wp-content/uploads/2015/10/voyager-pages.jpg" alt="voyager-pages" width="660" height="342"></a></p><h2 id="voyager-exploratory-analysis-via-faceted-browsing-of-visualization-recommendations" tabindex="-1">Voyager: Exploratory Analysis via Faceted Browsing of Visualization Recommendations <a class="header-anchor" href="#voyager-exploratory-analysis-via-faceted-browsing-of-visualization-recommendations" aria-label="Permalink to &quot;Voyager: Exploratory Analysis via Faceted Browsing of Visualization Recommendations&quot;">​</a></h2><p>This is a collaboration between Anushka Anand and Jock Mackinlay at Tableau and some of Jeff Heer&#39;s group at the University of Washington: Kanit Wongsuphasawat, Dominik Moritz, Bill Howe, and Jeffrey Heer. <a href="https://research.tableau.com/paper/voyager-exploratory-analysis-faceted-browsing-visualization-recommendations">The paper </a>describes <a href="http://idl.cs.washington.edu/papers/voyager">the Voyager system</a>, which constructs views of a user&#39;s data automatically. The user can then select the ones that seem interesting, so the system can build more views based on the data in them. This is called a <em>mixed-initiative system</em> because it doesn&#39;t depend entirely on the user to make things happen.</p><p>The goal of Voyager is to make it easier for people to explore more of their data. It can be overwhelming when looking at a database to know what to look at. And when people already know the data, they tend to stick to a relatively small set of data dimensions they already know. Seeing the data makes it easier to spot what else to look at, in particular when two data fields are shown. This is borne out by the study they ran to test the system.</p><p align="center"><a href="https://research.tableau.com/paper/linguistic-approach-categorical-color-assignment-data-visualization"><img class="aligncenter size-full wp-image-8986" src="https://media.eagereyes.org/wp-content/uploads/2015/10/color-pages.jpg" alt="color-pages" width="660" height="342"></a></p><h2 id="a-linguistic-approach-to-categorical-color-assignment-for-data-visualization" tabindex="-1">A Linguistic Approach to Categorical Color Assignment for Data Visualization <a class="header-anchor" href="#a-linguistic-approach-to-categorical-color-assignment-for-data-visualization" aria-label="Permalink to &quot;A Linguistic Approach to Categorical Color Assignment for Data Visualization&quot;">​</a></h2><p>When you&#39;re showing data about fruit, which color would you pick for a banana? Which for a cherry? Which for a watermelon? It seems obvious, but visualization tools just assign colors without any knowledge of what the data is about. <a href="https://research.tableau.com/paper/linguistic-approach-categorical-color-assignment-data-visualization"><em>A Linguistic Approach to Categorical Color Assignment for Data Visualization</em></a> by Vidya Setlur and Maureen Stone is an attempt to change that. Using Natural Language Processing (NLP) techniques, they figure out what likely good colors are for the items in a set of categories, and assign those to the visualization.</p><p>The results are, unsurprisingly, much better than just picking colors at random. There is a lot of clever statistics and NLP magic involved, but the overall idea is pretty simple yet very cool.</p><p align="center"><a href="https://research.tableau.com/paper/automatic-selection-partitioning-variables-small-multiple-displays"><img class="aligncenter size-full wp-image-8987" src="https://media.eagereyes.org/wp-content/uploads/2015/10/partitioning-pages.jpg" alt="partitioning-pages" width="660" height="342"></a></p><h2 id="automatic-selection-of-partitioning-variables-for-small-multiple-displays" tabindex="-1">Automatic Selection of Partitioning Variables for Small Multiple Displays <a class="header-anchor" href="#automatic-selection-of-partitioning-variables-for-small-multiple-displays" aria-label="Permalink to &quot;Automatic Selection of Partitioning Variables for Small Multiple Displays&quot;">​</a></h2><p>A somewhat different way of giving people an idea of their data than Voyager is <em><a href="https://research.tableau.com/paper/automatic-selection-partitioning-variables-small-multiple-displays">Automatic Selection of Partitioning Variables for Small Multiple Displays</a></em> by Anushka Anand and Justin Talbot. Their approach creates views automatically by selecting two variables to use in a scatterplot, picking a categorical variable to slice the data by, and then evaluating which of those combinations produces the most interesting view. To gauge which view is the most interesting, they use <em>scagnostics</em>, which are a way of measuring certain qualities of a scatterplot like clumpiness, stringiness, etc. (Aritra Dasgupta and my work on <a href="/papers/pargnostics">Pargnostics</a> is based on the same idea).</p><p>This requires some advanced statistics that I won&#39;t go into (even though I totally understand it all), but the end result is that their tool can automatically find the ways to subdivide the data that are the most likely to be interesting for the user to look at and investigate further.</p><hr><p>These three papers make for a nice set that embodies what Tableau Research aims to do: deep, innovative work that is also practical and that you can imagine being built into visualization systems.</p><p>More of our papers can be found on the <a href="https://research.tableau.com/papers">Tableau Research website</a>.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on October 21, 2015</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2015/tableau-papers-at-ieee-vis-2015.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tableauPapersAtIeeeVis2015 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tableauPapersAtIeeeVis2015 as default
};
