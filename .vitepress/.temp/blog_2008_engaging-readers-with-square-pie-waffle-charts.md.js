import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Engaging Readers with Square Pie/Waffle Charts","description":"Engaging viewers with interesting depictions of data always bears the risk of creating misleading or unreadable graphics. The square pie chart (or waffle chart) strikes a good balance between being interesting and not distorting the data. Here is an argument for the power of the pie and against the boredom of the bar.","frontmatter":{"title":"Engaging Readers with Square Pie/Waffle Charts","description":"Engaging viewers with interesting depictions of data always bears the risk of creating misleading or unreadable graphics. The square pie chart (or waffle chart) strikes a good balance between being interesting and not distorting the data. Here is an argument for the power of the pie and against the boredom of the bar.","date":"2008-09-07T21:12:03.000Z","tags":null,"featuredImage":"http://graphics8.nytimes.com/images/2008/07/20/business/20debtgraphic.jpg","outline":false},"headers":[],"relativePath":"blog/2008/engaging-readers-with-square-pie-waffle-charts.md","filePath":"blog/2008/engaging-readers-with-square-pie-waffle-charts.md"}');
const _sfc_main = { name: "blog/2008/engaging-readers-with-square-pie-waffle-charts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="http://graphics8.nytimes.com/images/2008/07/20/business/20debtgraphic.jpg" border="0"></p><h1 id="engaging-readers-with-square-pie-waffle-charts" tabindex="-1">Engaging Readers with Square Pie/Waffle Charts <a class="header-anchor" href="#engaging-readers-with-square-pie-waffle-charts" aria-label="Permalink to &quot;Engaging Readers with Square Pie/Waffle Charts&quot;">​</a></h1><p>Engaging viewers with interesting depictions of data always bears the risk of creating misleading or unreadable graphics. The <a href="/Techniques/SquarePieCharts.html">square pie chart</a> (or waffle chart) strikes a good balance between being interesting and not distorting the data. Here is an argument for the power of the pie and against the boredom of the bar.</p><p>The above chart was used in a <a href="http://www.nytimes.com/2008/07/20/business/20debt.html">series of articles on debt in the US</a> in the New York Times. While not strictly a square pie chart, it does illustrate its main features: it&#39;s visually interesting, very readable and discoverable, and it does not distort the data.</p><p>Showing the same information in a bar chart may have been more &quot;standard,&quot; but also rather dull. In addition, the differences between the values would have made it difficult to compare them. The matrix chart above lets the viewer easily work out how many times the average savings is owed in mortgages and other debt.</p><p>The chart also makes a point: that the savings are a tiny fraction of the debt. There is really no way not to see that. And that is visual communication beyond simple data visualization. A bar chart would not be able to do that, unless it essentially claimed that the savings were zero.</p><p>Kaiser at Junk Charts <a href="http://junkcharts.typepad.com/junk_charts/2008/06/the-right-scale.html">criticized the following chart</a> (New York Times magazine, April 27, 2008):</p><p style="${ssrRenderStyle({ "text-align": "center" })}"><img src="https://media.eagereyes.org/media/2008/nytimes-20080427-extracredit-squarepie.jpg" border="0" alt="NYTimes graph on time spent studying for different subjects"></p><p>He offered a bar chart as an alternative, which worked in this case because the values are not that far apart. But it was also as dull as any other chart, with nowhere near the visual interest of the &quot;brick chart.&quot;</p><p>I actually think that this chart is quite clever. It uses a 10x10 grid as the base, so it is easy to read the numbers from looking at the number of layers. Despite the pseudo-3D and the fact that parts of the chars are occluded, the exact numbers can be read quickly. And the red brick metaphor even has a certain resemblance with school buildings.</p><p>In short, the chart has a style and a message. Good charts do not only have to be correct, they also have to be appealing. And this is well done here.</p><p>There is also a collection of <a href="http://www.enterprise-dashboard.com/2008/05/06/the-square-pie-chart/">good examples of pie charts in business graphics</a>. Some of them may be a bit overloaded, but compared with other sins committed in business graphics and dashboards, it&#39;s very tame. I&#39;d take a matrix/waffle/square pie chart over gauges and artificial horizons any day. Perhaps the influence of <a href="/Techniques/Treemaps.html">treemaps</a> in business also helps make these charts look more familiar and thus more acceptable.</p><p>There is no doubt that we need to be careful about the choice of visual representation, and that we need to encourage the use of good charts and criticize the bad ones. But that doesn&#39;t mean we can get lazy and squeeze everything into a few standard charts types we&#39;ve been using for decades. That is especially true if we want people to actually care about what we&#39;re trying to show – and not bore them to tears.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on September 07, 2008</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://PeltierTech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…</p><blockquote><p>&quot;The square pie chart strikes a good balance between being interesting and not distorting the data.&quot;</p><p>I&#39;ll take the dissenting opinion. The square pies (and related charts) are certainly more interesting than boring old round pies, but I think they can be even more distorting. At least the points in a round pie are all wedge-shaped, so the distortion is due to misjudgment of the area or angle of the wedge. In a square pie, data points are added on starting at the next point in the raster, so the shapes are not all uniformly rectangular, or wedge shaped, or circular (as in a bubble chart), so misjudgments of area are compounded by irregularity of the shapes. If the chart designer gets at all creative and arranges the shapes in any artistic tiling pattern, the misjudgments multiply: a 2x8 rectangle may seem different than an 8x2 rectangle, and both are different than a 4x4 rectangle.</p><p>The stacked bar variant of the waffle chart at the top of the article improves on the square pie by constraining most growth to the horizontal dimension, so comparisons are mostly linear rather than areal. The brick chart showing minutes in class also has its measurements constrained mostly in the vertical dimension. For a quick impression the relative thickness of the layers is sufficient, while the reader who wants a more detailed look isn&#39;t too badly inconvenienced by mentally integrating the partial fill of the top layer of the segment.</p></blockquote><p>Robert Kosara says…</p><blockquote><p>Heh, my initial notes said &quot;respond to Jon Peltier&#39;s criticism&quot; - I&#39;ve seen you post links and make statements about these charts, and I will look into those in more detail soon. And I&#39;m not entirely disagreeing with you: that <a href="http://www.enterprise-dashboard.com/2008/05/06/the-square-pie-chart/">business graphics page</a> I linked above has one chart with a hole in the middle and a very uneven layout, for example. But there is no chart type that can&#39;t be abused. Overall though, I think that these are much better than the traditional pie charts.</p><p>As I said in <a href="/Techniques/SquarePieCharts.html">my original square pie charts posting</a>, it&#39;s probably a good idea to lay the chart out like a squarified treemap. That makes the parts as comparable as possible – perhaps not perfect, but still better and more accurate than pie charts.</p></blockquote><p>Jason says…</p><blockquote><p>I find the first graph a little misleading. It&#39;s apples and oranges. One is a total, the other a total per year. To me it would have been much more interesting if the there were two levels. On the first level, it showed the total debt, like in above left and to the right of it, it showed the total savings of the average household. Then below that, on the left it could show yearly payments to debt and to the right of that the savings per year as per the graph above on the right.</p><p>So total with total, yearly with yearly. More accurate and as dramatic.</p><p>Now, if you look for very long, it&#39;s pretty obvious that they are talking about 2 different things, but our brains still see a big area and a small area and associate them. It&#39;s sort of like misleading statistics, nearly everybody is vulnerable to them when presented creatively and you are not paying super attention.</p><p>Now, as for whether I think the square charts are interesting. Boredom, is a large barrier to learning. Diversity of presentation is good, when applied in a thoughtful way. So, I like them. Of course, if square charts were the 99% norm, I would say the same for bar charts.</p></blockquote><p>Robert Kosara says…</p><blockquote><p>True, but it&#39;s still an interesting comparison. Perhaps it would have made sense to compare the savings to the average monthly mortgage payment – which is undoubtedly at least twice the yearly savings. I also wonder how well you can project savings, I&#39;ve seen a graphic somewhere showing how savings have declined over the last 30 years and how instead people have been taking on more and more debt.</p></blockquote><p>dietmar says…</p><blockquote><p>thanks - a friend worked on a simliar technique (see link below). i think the approach is also very useful for providing a contextual overview i.e. over the contents of an archive / database. to the critizism of distortion, i think it works well for discrete quantities, where each block actually represents something useful. <a href="http://nualart.com/area/d/" target="_blank" rel="noreferrer">http://nualart.com/area/d/</a></p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2008/engaging-readers-with-square-pie-waffle-charts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const engagingReadersWithSquarePieWaffleCharts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  engagingReadersWithSquarePieWaffleCharts as default
};
