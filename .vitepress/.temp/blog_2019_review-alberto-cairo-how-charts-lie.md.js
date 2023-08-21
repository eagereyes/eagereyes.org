import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Review: Alberto Cairo, How Charts Lie","description":"Alberto Cairo’s new book, How Charts Lie, takes readers on a tour of how charts are used and misused, and teaches them how to not be misled. It’s a useful book for both makers and consumers of charts, in the news, business, and pretty much anywhere else.","frontmatter":{"title":"Review: Alberto Cairo, How Charts Lie","description":"Alberto Cairo’s new book, How Charts Lie, takes readers on a tour of how charts are used and misused, and teaches them how to not be misled. It’s a useful book for both makers and consumers of charts, in the news, business, and pretty much anywhere else.","date":"2019-11-11T21:07:05.000Z","tags":"book-reviews","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2019/11/how-charts-lie-cover.jpg","outline":false},"headers":[],"relativePath":"blog/2019/review-alberto-cairo-how-charts-lie.md","filePath":"blog/2019/review-alberto-cairo-how-charts-lie.md"}');
const _sfc_main = { name: "blog/2019/review-alberto-cairo-how-charts-lie.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2019/11/how-charts-lie-cover.jpg" width="800" height="569"></p><h1 id="review-alberto-cairo-how-charts-lie" tabindex="-1">Review: Alberto Cairo, How Charts Lie <a class="header-anchor" href="#review-alberto-cairo-how-charts-lie" aria-label="Permalink to &quot;Review: Alberto Cairo, How Charts Lie&quot;">​</a></h1><p>Alberto Cairo’s new book, <em><a href="http://www.thefunctionalart.com/p/reviews.html">How Charts Lie</a></em>, takes readers on a tour of how charts are used and misused, and teaches them how to not be misled. It’s a useful book for both makers and consumers of charts, in the news, business, and pretty much anywhere else.</p><p>When Alberto started talking about the title on Twitter, he got <a href="https://twitter.com/jdfaviz/status/1115274913756139520?s=20">some pushback from academics</a>. Are you saying that all charts lie? Will people read it as such? Isn’t it too negative to lead with the fact that they lie? Etc.</p><p>Of course, a book title needs to be compelling enough for people to pick it up, so the usual academic equivocations and qualifications aren’t going to sell many copies. It also follows titles like Huff’s <em>How to Lie with Statistics</em> and Mormonier’s <em>How to Lie with Maps</em> that are arguably classics.</p><p>The book is structured into six main chapters. The first, <em>How Charts Work</em>, is followed by five chapters all titled <em>Charts that Lie by X</em>, where X is being poorly designed, display dubious or insufficient data, leaving out uncertainty, and showing misleading patterns. The <em>How Charts Work</em> chapter is a great opener that leads the reader through a few charts and demonstrates the value of paying attention to all the elements of a chart. This by itself would be a useful thing for anyone to read, and would be a great teaching resource for high schools if it wasn’t all examples from politics (I doubt any teacher fond of their job would use it in class).</p><p>Alberto’s heavy reliance on examples from politics might also make the book age poorly. They seem relevant and timely right now, but what about in a few years, perhaps after an election that changes who’s running the country?</p><p>The book is clearly useful for both consumers of charts and the people who make them. Knowing what and how it can be done wrong helps avoid those mistakes, and knowing them when looking at news coverage will protect from many of them (assuming you want to be even if the chart reinforces your views of the world).</p><p>The conclusion chapter may be my favorite part of the book because of the wonderful account Alberto gives of Florence Nightingale’s work and the role her kind-of-famous chart played in it. There, he states what I think sums up the entire book very succinctly: <em>our purpose when using charts matters</em>. I’d go even further to say that our purpose or intent is <em>all that matters</em>.</p><p>Charts don’t lie, people do. The book is really about how charts are being misused to make a point. The book’s opening example illustrates this: if you want to believe that Trump won the election in a landslide, <a href="https://www.snopes.com/news/2019/10/02/donald-trump-impeach-this-map/">the map showing votes by area</a> will make you happy; even if you were told why it&#39;s such a poor representation of the election, would you care?</p><p>It&#39;s a great book about what to do and not do with charts, but <em>How Charts Lie</em> is also a testament to the awful state of today’s political discourse. I worry that the people who would most need to read it, like <a href="http://www.thefunctionalart.com/2019/09/that-damn-mapagain.html">the president Cairo sent a copy</a>, won’t.</p><p>But everybody else should.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on November 11, 2019</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2019/review-alberto-cairo-how-charts-lie.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reviewAlbertoCairoHowChartsLie = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reviewAlbertoCairoHowChartsLie as default
};
