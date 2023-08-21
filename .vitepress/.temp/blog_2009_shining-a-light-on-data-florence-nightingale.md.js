import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Shining a Light on Data: Florence Nightingale","description":"Florence Nightingale invented modern nursing, and established its importance based on data she collected during the Crimean War in the 19th century. She was not only the first one to realize the role of hygiene and care for wounded soldiers to prevent the spread of disease and death, she also was the first to understand that sound decisions can only be made on data. Not only did she collect that data, she also devised ways to communicate it to decision makers who lacked knowledge of statistics or math.","frontmatter":{"title":"Shining a Light on Data: Florence Nightingale","description":"Florence Nightingale invented modern nursing, and established its importance based on data she collected during the Crimean War in the 19th century. She was not only the first one to realize the role of hygiene and care for wounded soldiers to prevent the spread of disease and death, she also was the first to understand that sound decisions can only be made on data. Not only did she collect that data, she also devised ways to communicate it to decision makers who lacked knowledge of statistics or math.","date":"2009-03-24T10:07:11.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/media/2009/Nightingale-mortality.jpg","outline":false},"headers":[],"relativePath":"blog/2009/shining-a-light-on-data-florence-nightingale.md","filePath":"blog/2009/shining-a-light-on-data-florence-nightingale.md"}');
const _sfc_main = { name: "blog/2009/shining-a-light-on-data-florence-nightingale.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2009/Nightingale-mortality.jpg" alt="Nightingale&#39;s Coxcomb plot (from Wikipedia)" width="500" height="332"></p><h1 id="shining-a-light-on-data-florence-nightingale" tabindex="-1">Shining a Light on Data: Florence Nightingale <a class="header-anchor" href="#shining-a-light-on-data-florence-nightingale" aria-label="Permalink to &quot;Shining a Light on Data: Florence Nightingale&quot;">​</a></h1><p><a href="http://en.wikipedia.org/wiki/Florence_Nightingale">Florence Nightingale</a> invented modern nursing, and established its importance based on data she collected during the Crimean War in the 19th century. She was not only the first one to realize the role of hygiene and care for wounded soldiers to prevent the spread of disease and death, she also was the first to understand that sound decisions can only be made on data. Not only did she collect that data, she also devised ways to communicate it to decision makers who lacked knowledge of statistics or math.</p><p>Looking around the web, there is a lot of material on Nightingale&#39;s writing on nursing and related topics. But I would argue that her larger contribution was in making the care for the wounded (and, in extension, nursing in general) a priority. Without that, all her writing and collections of best practices would not have had nearly the same practical impact.</p><p>Nightingale was an unusual woman. Born into an upper-class English family, she was expected to be a well-behaved mother and wife. It is fascinating and shocking to think that she and her peers had practically no access to education or to fulfill any other roles not for lack of money or resources, but because they were under so much pressure to fit in and do what was expected of them.</p><p>But she persisted, became a nurse, and later went to Turkey to see the conditions in the makeshift hospitals where soldiers were treated after they had been wounded in battle. What she found there were horrific conditions that were causing much more death in the hospitals than on the battlefields: lack of fresh air and light, overcrowding, lack of food, and no sanitation facilities to speak of.</p><p>To change things, she collected data about the conditions and the causes of death. She was among the very first to ever apply statistics to healthcare, and undoubtedly the first to change the conditions based on such data. Her extensive reports and presentations convinced Queen Victoria to appoint a commission to change procedures in the military and keep many thousands of her soldiers alive.</p><p>In contrast to her mentor William Farr, Nightingale realized that statistics was not just numbers. What counted was to understand the facts and make informed decisions. To get the numbers across to the Queen and others who she could not expect to have much (or any) knowledge of statistics, she devised graphical representations.</p><p>William Playfair had developed the bar chart a few decades earlier, but it seems that Nightingale realized even at that time that bar charts are just not very exciting. Her coxcomb plot (see image at the top) divides a circle into twelve parts, one for each month of the year. The area of the circle segments is scaled to represent the numbers of soldiers dying from wounds sustained in battle, preventable disease, and other factors. By far the largest killer was disease, the spread of which could be controlled quite well even in the 1850s with simple measures of hygiene and care.</p><p>The coxcomb plot has the advantage that it makes seasonal patterns visible, even though there clearly are better alternatives when reading exact numbers is a priority. The chart also makes for a much nicer image, without the use of any decorative elements. To get people with no knowledge of the numbers or the method to convey them to pay attention, it is a very good choice. Subtle differences (or exact numbers) are also of little importance when the numbers differ by an order of magnitude or so. It seems that Nightingale was also aware of the problem of <a href="/basics/Linear-vs-Quadratic-Change.html">quadratic growth in area from scaling the radius</a> of the circle wedges. There is a <a href="http://www.sciencenews.org/index/generic/activity/view/id/38937/title/Florence_Nightingale_The_passionate_statistician">very nice article that describes her work on the coxcomb plot</a>, which claims that she redrew her charts after originally making that mistake, and realizing it.</p><p>During her time in the Crimea, Nightingale would tirelessly walk the halls of the hospitals, often late into the night, to collect her data. That earned her the nickname, &quot;The Lady with the Lamp.&quot; In a more metaphorical sense, this is also an apt description of what she accomplished with her use of data and visualization.</p><hr> This is my humble contribution to <a href="http://findingada.com/">Ada Lovelace Day</a> (though I may be stretching the definition of &quot;technology&quot; a bit). There is also a <a href="http://ada.pint.org.uk/">list of other postings about great women in technology</a>. <p><em>Posted by <a href="/about">Robert Kosara</a> on March 24, 2009</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p>T.J. Jankun-Kelly says…</p><blockquote><p>Visualization and graphics (statistical or otherwise) are as much of a tool as is the simple lever. One may seem more &quot;technological&quot; due to its physicality, but both are technology in the sense they are tools that assist us accomplish tasks. To say that Nightingale&#39;s work was a technological advancement is to say that the &quot;invention&quot; of the calculus was not a technological advance. So, no streching at all.<br><br>Good article, BTW. To be fair to Playfair (or make the case for Nightingale more complete), <a title="Pie Chart: History" href="http://en.wikipedia.org/wiki/Pie_chart#History&quot;">he did also &quot;invent&quot; the (non-polar area) pie-chart</a> as well. Nightingale&#39;s version (supposedly <a title="Florence Nightingale&#39;s statistical diagrams" href="http://www.york.ac.uk/depts/maths/histstat/small.htm">not called coxcomb by her</a>, that refered to something else) addressed the compairson problem you mentioned directly in contrast to pie charts.</p></blockquote><p>Robert Kosara says…</p><blockquote><p>I&#39;m not sure I would want technology to subsume maths, so I still think it is a stretch. But because Nightingale&#39;s graphs involved more than just the numbers, I think it&#39;s no too bad.</p><p>Thanks for that link, that&#39;s a very interesting article! I know about the pie chart and who invented it, but I didn&#39;t want to make this too complicated. There&#39;s certainly more to be said about the early history of visual communication of numbers, and that article has some good information on that, too.</p></blockquote><p>T.J. Jankun-Kelly says…</p><blockquote><p>It appears the Small article is part of a much larger collection of documents by the U. of York: <a title="Milestones in the History of Thematic Cartography, Statistical Graphics, and Data Visualization" href="http://www.math.yorku.ca/SCS/Gallery/milestone/">Milestones in the History of Thematic Cartography, Statistical Graphics, and Data Visualization</a>. A few day&#39;s reading...</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2009/shining-a-light-on-data-florence-nightingale.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shiningALightOnDataFlorenceNightingale = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  shiningALightOnDataFlorenceNightingale as default
};
