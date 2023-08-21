import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"The Repetitive and Boring History of Visualization","description":"When people talk about the history of data visualization, the same set of names always comes up: Playfair, Nightingale, Snow, Minard. They are historically important, alright, but why do they overshadow all the other work that was done? And what do we know about how important they actually were?","frontmatter":{"title":"The Repetitive and Boring History of Visualization","description":"When people talk about the history of data visualization, the same set of names always comes up: Playfair, Nightingale, Snow, Minard. They are historically important, alright, but why do they overshadow all the other work that was done? And what do we know about how important they actually were?","date":"2016-08-14T20:27:53.000Z","tags":"isotype, history","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2016/08/watt-teaser.png"},"headers":[],"relativePath":"blog/2016/the-repetitive-and-boring-history-of-visualization.md","filePath":"blog/2016/the-repetitive-and-boring-history-of-visualization.md"}');
const _sfc_main = { name: "blog/2016/the-repetitive-and-boring-history-of-visualization.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/08/watt-teaser.png" width="825" height="510"></p><h1 id="the-repetitive-and-boring-history-of-visualization" tabindex="-1">The Repetitive and Boring History of Visualization <a class="header-anchor" href="#the-repetitive-and-boring-history-of-visualization" aria-label="Permalink to &quot;The Repetitive and Boring History of Visualization&quot;">​</a></h1><p>When people talk about the history of data visualization, the same set of names always comes up: Playfair, Nightingale, Snow, Minard. They are historically important, alright, but why do they overshadow all the other work that was done? And what do we know about how important they actually were?</p><h2 id="the-usual-suspects" tabindex="-1">The Usual Suspects <a class="header-anchor" href="#the-usual-suspects" aria-label="Permalink to &quot;The Usual Suspects&quot;">​</a></h2><p>They’re like old friends. Every time you see a talk about visualization, one of them will show up. It’s often Minard, but sometimes it’s Nightingale or Snow, and sometimes it’s Playfair. They’re familiar and you kind of expect to see them, but they’re also boring. You’ve seen them, even though you might not know as much about them as you think.</p><p>But are those really the examples we should be looking at? What impact did Minard’s chart ever have? Was Nightingale’s plot really that important for making her case for nursing as a profession? I haven’t seen much evidence beyond pure speculation. Snow’s map supposedly was key to convincing the powers that were to shut down that water pump that was spreading the cholera. But were they convinced by the map or by his scientific reasoning?</p><p>There are many things we don’t know about these examples, and it seems problematic to just pick them because they have nice stories attached to them. What was their real impact? How much do we know about each of them (and which of those stories are even true)? And what are we missing?</p><p>Perhaps there were much more important charts and visual tools out there that are long forgotten, but that affected many more people than what we like to show. To illustrate what I mean, here are three examples that were likely more important than the ones I listed above.</p><h2 id="watt-s-steam-power-indicator" tabindex="-1">Watt’s Steam Power Indicator <a class="header-anchor" href="#watt-s-steam-power-indicator" aria-label="Permalink to &quot;Watt’s Steam Power Indicator&quot;">​</a></h2><p>There is some debate about when exactly the first steam indicator drew a chart, but it must have been the early or mid–1790s. These diagrams not only predate nearly all the famous visualization examples, they were also hugely important for the development of the steam engine – and they were drawn by a machine rather than by hand!</p><p>James Watt or his engineer John Southern devised <a href="http://www.archivingindustry.com/Indicator/firststeps.htm">this incredible apparatus</a> that could plot the pressure inside a steam engine against the movement of the piston. The area of the diagram represents the amount of power the engine produces, and the shape of different parts described the different elements of the stroke and are useful diagnostic tools.</p><p>How important was this diagram? Clearly very important, or Watt wouldn’t have kept it a secret for many years. He was able to glean valuable information from it to optimize his engines and get a leg up on the competition that was quickly springing up.</p><p>The steam engine is what brought about the industrial revolution – no steam engine, no industry, no railway, no electricity, etc. It’s not a stretch to say that this diagram played a crucial part in bringing all that about. And yet few people know about it or understand its significance.</p><p align="center"><img class="aligncenter size-full wp-image-9463" src="https://media.eagereyes.org/wp-content/uploads/2016/08/slavery-map-1861.jpg" alt="slavery-map-1861" width="660" height="527"></p><h2 id="the-slave-map" tabindex="-1">The Slave Map <a class="header-anchor" href="#the-slave-map" aria-label="Permalink to &quot;The Slave Map&quot;">​</a></h2><p>Clive Thompson <a href="http://www.smithsonianmag.com/history/surprising-history-infographic-180959563/?no-ist">recently wrote about the history of the information graphic</a>, citing the usual suspects. He also included an example that is remarkably different, though: a map of the slave population in the Southern States of (what is now) the United States, based on the 1860 census.</p><p>This wasn’t just a statistical map. It was an early statistical map, for sure. But its impact was that it showed the people fighting the <a href="https://en.wikipedia.org/wiki/American_Civil_War">American Civil War</a> whom they were fighting, and what they were fighting for. And in particular, it was <a href="http://www.openculture.com/2013/09/visualizing-slavery-the-map-abraham-lincoln-spent-hours-studying-during-the-civil-war.html">a constant reference for Abraham Lincoln</a>. We know that because of historical accounts, and because it was included in <a href="http://www.senate.gov/artandhistory/art/artifact/Painting_33_00005.htm">a famous painting of Lincoln working on the Emancipation Declaration</a>.</p><p>This was no coincidence. A painting isn’t a snapshot that includes whatever clutter might be lying around. Paintings are carefully arranged and staged, and something as complex as this map was not included just for fun. This is visual evidence of this map’s central role in the history of the United States.</p><p>And yet, this is not the map that everybody shows in their visualization classes. Why not? Because Minard&#39;s map is a better story? Because it&#39;s less uncomfortable to talk about a fairly abstract war than about slavery?</p><h2 id="isotype" tabindex="-1">ISOTYPE <a class="header-anchor" href="#isotype" aria-label="Permalink to &quot;ISOTYPE&quot;">​</a></h2><p><a href="/tag/isotype">ISOTYPE</a> is largely ignored in visualization, and yet it seems to have been a major thing in the middle of the last century. There was the ISOTYPE institute that Otto and then Marie Neurath ran for decades. There were also numerous books that used ISOTYPE, beyond the ones that the Neuraths themselves wrote. I know of at least a dozen books on subjects like politics, economics, entertainment, and health that included ISOTYPE charts. The charts were not the main focus of the books, they were used to illustrate the dry numbers and to give people something interesting and memorable to look at.</p><p>How much impact did those have? I don’t know. I don’t even think it’s going to be possible to get numbers for print runs in the 1940s or 50s (or even much more recent ones). But these books must have reached a large number of people. There must have been a reason for authors to seek out the ISOTYPE institute to have these charts made.</p><p>It’s amazing that we don’t seem to know much about this at all, even though it’s not even that long ago.</p><h2 id="what-else-are-we-missing" tabindex="-1">What Else Are We Missing? <a class="header-anchor" href="#what-else-are-we-missing" aria-label="Permalink to &quot;What Else Are We Missing?&quot;">​</a></h2><p>This list is by no means meant to be complete. Instead, I want to know what else we’re missing. We seem to be content just looking at the same old examples again and again.</p><p>If we don’t know enough about their context and real importance, we’re dealing with a very shallow and limited understanding of our history. We’re doing ourselves a huge disservice by ignoring the truly important and impactful pieces. We need to change that.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on August 14, 2016</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p>gilgongo says…</p><blockquote><p>Samuel Plimsoll&#39;s &quot;Plimsoll mark&quot; for ship waterlines was, if not spectacular, at least significant for commercial sailing vessels:</p><p><a href="https://en.wikipedia.org/wiki/Waterline" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Waterline</a></p></blockquote><p><a href="http://twitter.com/fabian_dubois" rel="nofollow noopener" target="_blank">Fabian Dubois (@fabian_dubois)</a> says…</p><blockquote><p>I agree, It would be great to have a more historical visualization examples available.</p><p>I remember being surprised by the lack of available info after stumbling upon 19th century work from Austrian statistician Anton Leo Hickmann in an exhibition, he had some isotype-like work (building height visualization) that could have been a source of inspiration to ISOTYPE, being from the same city. You can see some of his urbanism/demographics visualizations here <a href="https://www.datamaplab.com/posts/retro-data-visualization-hickmann/" target="_blank" rel="noreferrer">https://www.datamaplab.com/posts/retro-data-visualization-hickmann/</a></p></blockquote><p><a href="http://nicolas.kruchten.com/" rel="nofollow noopener" target="_blank">Nicolas Kruchten</a> says…</p><blockquote><p>This fantastic resource basically charts milestones for every type of visualization I have ever heard of: <a href="http://datavis.ca/milestones/" target="_blank" rel="noreferrer">http://datavis.ca/milestones/</a></p></blockquote><p><a href="http://civilstat.com" rel="nofollow noopener" target="_blank">Jerzy</a> says…</p><blockquote><p>&quot;Snow’s map supposedly was key to convincing the powers that were to shut down that water pump that was spreading the cholera. But were they convinced by the map or by his scientific reasoning?&quot;</p><p>If I remember correctly from reading &quot;The Ghost Map&quot; (and Wikipedia seems to agree): John Snow got the pump handle removed first. He only created the map much later, after the fact. (Maybe he sketched himself a similar map during the epidemic, but maybe he just put the evidence together in his head. We don&#39;t know.)</p><p>So as much as I love that map, and it makes for a great story, that story isn&#39;t strictly true.</p></blockquote><p>gilgongo says…</p><blockquote><p>As an aside, I think the Snow map is a good example of something that isn&#39;t made clear enough in most discussions of dataviz: the difference between using dataviz for demonstration of a phenomenon as opposed to its <em>discovery</em>.</p><p>In the vast and almost total majority of cases where exotic visualisation is used (like the Minard diagram or Snow map), it&#39;s demonstrating phenomena that have been arrived at by other means. But there always seems to be a kind article of faith that infoviz also <em>reveals</em> insights. I find this faith interesting and wonder to what extent it explains the success people like David McCandless who may be trading on this faith in some way.</p><p>It&#39;s philosophy Friday...</p></blockquote><p><a href="http://offenhuber.net" rel="nofollow noopener" target="_blank">Dietmar Offenhuber</a> says…</p><blockquote><p>The diagram of the Brookes slave ship was perhaps the one of the most effective historical examples in a policy context and was central to the abolition movement. <a href="http://www.bl.uk/learning/images/Campaign_MAI/photographs/large93035.html" target="_blank" rel="noreferrer">http://www.bl.uk/learning/images/Campaign_MAI/photographs/large93035.html</a></p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2016/the-repetitive-and-boring-history-of-visualization.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theRepetitiveAndBoringHistoryOfVisualization = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theRepetitiveAndBoringHistoryOfVisualization as default
};
