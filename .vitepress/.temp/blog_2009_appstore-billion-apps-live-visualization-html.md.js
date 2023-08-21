import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"AppStore Billion Apps Live Visualization","description":"Apple's AppStore for iPhone and iPod touch is about to sell its billionth application. You can watch Apple's pretty counter webpage, or you can see the downloads piling up and the rate of downloads visualized below. Unlike the billionth song download a few years ago, this is in (almost) real-time. The collected data and the Python script that generates the images using Google Charts is included.","frontmatter":{"title":"AppStore Billion Apps Live Visualization","description":"Apple's AppStore for iPhone and iPod touch is about to sell its billionth application. You can watch Apple's pretty counter webpage, or you can see the downloads piling up and the rate of downloads visualized below. Unlike the billionth song download a few years ago, this is in (almost) real-time. The collected data and the Python script that generates the images using Google Charts is included.","date":"2009-04-11T10:01:19.000Z","tags":"applications","featuredImage":"https://media.eagereyes.org/media/2009/billionapps.png","outline":false},"headers":[],"relativePath":"blog/2009/appstore-billion-apps-live-visualization-html.md","filePath":"blog/2009/appstore-billion-apps-live-visualization-html.md"}`);
const _sfc_main = { name: "blog/2009/appstore-billion-apps-live-visualization-html.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2009/billionapps.png" border="0" alt="We&#39;re about to hit a billion" width="503" height="140"></p><h1 id="appstore-billion-apps-live-visualization" tabindex="-1">AppStore Billion Apps Live Visualization <a class="header-anchor" href="#appstore-billion-apps-live-visualization" aria-label="Permalink to &quot;AppStore Billion Apps Live Visualization&quot;">​</a></h1><p>Apple&#39;s AppStore for iPhone and iPod touch is about to sell its billionth application. You can watch <a href="http://www.apple.com/itunes/billion-app-countdown/">Apple&#39;s pretty counter webpage</a>, or you can see the downloads piling up and the rate of downloads visualized below. Unlike the <a href="/vis/iTMS.html">billionth song download</a> a few years ago, this is in (almost) real-time. The collected data and the Python script that generates the images using Google Charts is included.</p><p>The images below show the number of downloads (the scale goes from 900 million to 1 billion) as the dark gray background &quot;mountain,&quot; and the rate of downloads (0 to 500,000 per hour) as the green line. Light gray stripes in the background indicate six hour intervals (the time zone is PDT). The images change once per hour, when new data becomes available. The best time to check is shortly after the full hour.</p><p><em>Charts no longer available, unfortunately…</em></p><p>The bottom chart currently does not fill the image, but it will in a few days. This was done on purpose to keep the aspect ratio from changing dramatically over time, and to keep the images comparable. As of writing this, I only have about 24 hours of data, and it&#39;s from the beginning of the promotion and from a Friday; so it&#39;s hard to make predictions based on this. I do expect the billionth application to be sold before the end of the coming week (April 17), however, and we might see the rate of downloads go over 500,000 per hour (update April 15: looks like a downward trend so far, actually).</p><p>For the billionth song countdown, Apple gave away prizes for every 100,000th download. You could see quite well how people were hunting for those, from the spikes in download rate close to those points. This time around, things are a lot less exciting, and this is also reflected in the data: instead of a new data point every five minutes, there&#39;s only one per hour, and it is delayed by almost an hour. It is still interesting to see the more and less active times during the day, and also the sheer number of downloads (300,000 downloads per hour is 5,000 per minute and over 83 per second!).</p><p>The data for this is scraped from the same source Apple&#39;s webpage uses. I&#39;m making the collected data available here: <a href="http://data.eagereyes.org/itms/countdownlog.txt" target="_blank">countdownlog.txt</a>. It&#39;s a simple text file that should be self-explanatory. It&#39;s updated every five minutes, in case Apple changes its update frequency as downloads pick up during the week.</p><p>Instead of working this into the <a href="/vis/iTMS.html">billion downloads applet</a>, I decided to try out <a href="http://code.google.com/apis/chart/">Google Charts</a>. While the API is pretty good for basic charts, it does have its limitations. Perhaps the most annoying is that images are limited to 300,000 pixels: I would have liked to make the large version of this quite a bit larger. Getting a combined line and bar chart also involves some trickery (which is documented, though). This could be a bit easier. Transparency would be another useful feature, to make the stripes visible through the bars.</p><p>Another problem is that Google Charts does not degrade gracefully. When there is too much data, it simply gives you an error message or produces a completely useless image. I had to split the chart up at four full days, because it croaked at 117 data points. This does not seem to be a limitation of the URL length (it uses GET requests, not POST), but of the renderer.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on April 11, 2009</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p>Anonymous says…</p><blockquote><p>Nice work! However, I wish Apple would update the counter far more often. Real-time up until only a million apps remain, then let those who extrapolate the best win.</p></blockquote><p>Michael B says…</p><blockquote><p>It will be interesting to see the spike at the end, when everyone is going for the billionth download!</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2009/appstore-billion-apps-live-visualization-html.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const appstoreBillionAppsLiveVisualizationHtml = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  appstoreBillionAppsLiveVisualizationHtml as default
};
