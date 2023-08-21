import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"An Interactive Version of the ZIPScribble Map","description":"For more than five years, the ZIPScribble Map and its related pages have been the most popular feature on my website. To freshen things up a bit, I am adding an interactive version that runs in your browser. I have also added a few more countries, for a new total of 38.","frontmatter":{"title":"An Interactive Version of the ZIPScribble Map","description":"For more than five years, the ZIPScribble Map and its related pages have been the most popular feature on my website. To freshen things up a bit, I am adding an interactive version that runs in your browser. I have also added a few more countries, for a new total of 38.","date":"2012-01-15T21:32:42.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/wp-content/uploads/2012/01/zipscribble-us-interactive.png"},"headers":[],"relativePath":"blog/2012/interactive-version-zipscribble-map.md","filePath":"blog/2012/interactive-version-zipscribble-map.md"}');
const _sfc_main = { name: "blog/2012/interactive-version-zipscribble-map.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img class="alignnone size-full wp-image-1624" title="ZIPScribble Map, interactive version" src="https://media.eagereyes.org/wp-content/uploads/2012/01/zipscribble-us-interactive.png" alt="" width="600" height="390"></p><h1 id="an-interactive-version-of-the-zipscribble-map" tabindex="-1">An Interactive Version of the ZIPScribble Map <a class="header-anchor" href="#an-interactive-version-of-the-zipscribble-map" aria-label="Permalink to &quot;An Interactive Version of the ZIPScribble Map&quot;">​</a></h1><p>For more than five years, the <a href="/zipscribble-maps">ZIPScribble Map</a> and its related pages have been the most popular feature on my website. To freshen things up a bit, I am adding <a href="/zipscribble-maps/interactive-zipscribble-map">an interactive version that runs in your browser</a>. I have also added a few more countries, for a new total of 38.</p><p>While I still like the simple aesthetics of the bare map with just the scribble on a white background the best, it&#39;s obviously an interesting question to see where a particularly interesting scribble feature is located on a map. It was also a hassle to find particular countries so far, especially if you wanted to find out which ones were even available on the site at all.</p><p>This new map was built using <a href="http://polymaps.org/">Polymaps</a>, which is a very clever toolkit for building &quot;slippy&quot; maps, i.e., the kind of dynamic in-browser maps we&#39;re used to now from Google Maps and others. They&#39;re easy to navigate using the usual pan and zoom controls (buttons or mouse wheel/trackpad gestures), so they should feel no different than other maps you&#39;ve used. They&#39;re different in that they make it easier to build data displays on top of them, though. They&#39;re also fairly platform-agnostic, so a number of different map tile providers can be plugged in easily.</p><h2 id="new-zipscribble-map-features" tabindex="-1">New ZIPScribble Map Features <a class="header-anchor" href="#new-zipscribble-map-features" aria-label="Permalink to &quot;New ZIPScribble Map Features&quot;">​</a></h2><p>Because of that, the new ZIPScribble map has some nifty tricks up its sleeves. You can switch between countries on the page, but you can also link to a particular one by using a hash. That way, I can link to some of the new countries like <a title="ZIPScribble Map Japan" href="/zipscribble-maps/interactive-zipscribble-map#JP">Japan</a> or <a title="ZIPScribble Map Mexico" href="/zipscribble-maps/interactive-zipscribble-map#MX">Mexico</a>, for example, and they&#39;re all going to the same page. What&#39;s more, I can link to a map location, so I can focus in on <a title="ZIPScribble Map United States" href="/zipscribble-maps/interactive-zipscribble-map#US/7.58/34.881/-90.041">how the Mississippi divides ZIP code zones</a>, for example, or look at the <a title="ZIPScribble Map Russia, Kaliningrad Oblast" href="/zipscribble-maps/interactive-zipscribble-map#RU/5.64/55.342/26.651">Russian Enclave Kaliningrad</a> (located between <a title="ZIPScribble Map Poland" href="/zipscribble-maps/interactive-zipscribble-map#PL">Poland</a> and <a title="ZIPScribble Map Lithuania" href="/zipscribble-maps/interactive-zipscribble-map#LT">Lithuania</a>). The page also remembers the last country you&#39;ve visited when you come back to it using a generic link, though a specific link will override that.</p><p>Since the background map can be a distraction, it is possible to turn it off. I have also included a way to turn on states again, which are interesting for some countries. For countries where there is no state or province information in the data, that checkbox is inactive. Coloring states is an issue I have not solved, and I have not found a good way of generating enough distinct colors so that neighboring states don&#39;t end up with the same ones in some cases. So right now, the colors are randomly generated, which results in surprisingly reasonable choices. If you don&#39;t like the colors, you can disable and re-enable the states to create a new set of colors.</p><p>Needless to say, this requires a modern browser. Any reasonably recent browser (including IE9) works. FireFox works, though it&#39;s quite a bit slower than the others I&#39;ve tried. The big drawback of using Polymaps (and thus SVG) is that it&#39;s not very fast on iPad. I built a simple prototype of this using Canvas, which worked much better on iOS. Getting the map overlay and the interaction to work was a major issue, though. I&#39;m not sure if Canvas layers are doable in Polymaps, but I might try those at some point in the future.</p><h2 id="new-data" tabindex="-1">New Data <a class="header-anchor" href="#new-data" aria-label="Permalink to &quot;New Data&quot;">​</a></h2><p>Some interesting issues I&#39;ve faced again had to do with finding reasonable bounding boxes. I chose to ignore some parts of <a title="ZIPScribble Map Spain" href="/zipscribble-maps/interactive-zipscribble-map#ES">Spain</a> and <a title="ZIPScribble Map France" href="/zipscribble-maps/interactive-zipscribble-map#FR">France</a>, for example, so I could focus more clearly on the main part of the countries. I&#39;ve also again ignored Alaska and Hawaii in finding the bounding box for the U.S. All of those zip codes are there on the map, though, you just have to zoom out and pan around a bit. Also, the state connector lines are always visible, so there are cues that there&#39;s more outside the screen.</p><p>One part of the data that I am leaving out on purpose is the eastern-most part of Russia, where it extends beyond 180° longitude. Including those points causes some issues with Polymaps where the map wraps around, and which creates some distracting lines. Once there is a solution to that, I will add those points back in. Somebody also added the North Pole to Canada as a point, which caused some interesting issues with calculating bounding boxes (since all the longitude lines converge there).</p><p>To create good bounding boxes, I used some of <a href="http://vis4.net/blog/posts/rendering_country_maps/">Gregor Aisch&#39;s ideas</a>, though I only add 10% of padding in each direction. I think this works quite well for an interactive map.</p><p>I have also updated all the data, which has caused some of the maps to improve considerably (relative to their static versions). While I was playing with the data, I also added some countries you might have heard of, like <a title="ZIPScribble Map India" href="/zipscribble-maps/interactive-zipscribble-map#IN">India</a>, <a title="ZIPScribble Map Pakistan" href="/zipscribble-maps/interactive-zipscribble-map#PK">Pakistan</a>, <a title="ZIPScribble Map AR" href="/zipscribble-maps/interactive-zipscribble-map#AR">Argentina</a>, <a title="ZIPScribble Map Brazil" href="/zipscribble-maps/interactive-zipscribble-map#BR">Brazil</a>, <a title="ZIPScribble Map Japan" href="/zipscribble-maps/interactive-zipscribble-map#JP">Japan</a>, <a title="ZIPScribble Map Mexico" href="/zipscribble-maps/interactive-zipscribble-map#MX">Mexico</a>, and a few others. The data quality is very uneven, and I&#39;ve left out a few countries where I just didn&#39;t trust it to be sensible. I will keep updating the data though, and adding more countries when their data becomes available or improves.</p><h2 id="source-code-available" tabindex="-1">Source Code Available <a class="header-anchor" href="#source-code-available" aria-label="Permalink to &quot;Source Code Available&quot;">​</a></h2><p>As a final note, the source code for all of this <a href="https://github.com/eagereyes/zipscribble">is available on github</a>.</p><p>And here&#39;s the link again: <a href="/zipscribble-maps/interactive-zipscribble-map">The Interactive ZIPScribble Map</a></p><p><em>Posted by <a href="/about">Robert Kosara</a> on January 15, 2012</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2012/interactive-version-zipscribble-map.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const interactiveVersionZipscribbleMap = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  interactiveVersionZipscribbleMap as default
};
