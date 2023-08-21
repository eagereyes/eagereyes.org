import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"A Better Definition of Chart Junk","description":"Maximizing the data-ink ratio sounds like a good idea, but when actually followed to the letter produces terrible and nonsensical results. Here is a more reasonable definition of chart junk that does away with the pretense of a mathematical formula and puts some common sense back into the question of good chart design.","frontmatter":{"title":"A Better Definition of Chart Junk","description":"Maximizing the data-ink ratio sounds like a good idea, but when actually followed to the letter produces terrible and nonsensical results. Here is a more reasonable definition of chart junk that does away with the pretense of a mathematical formula and puts some common sense back into the question of good chart design.","date":"2013-03-17T20:32:04.000Z","tags":"chart junk, definition","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2013/03/minimal-bars.png","outline":false},"headers":[],"relativePath":"blog/2013/definition-chart-junk.md","filePath":"blog/2013/definition-chart-junk.md"}');
const _sfc_main = { name: "blog/2013/definition-chart-junk.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="a-better-definition-of-chart-junk" tabindex="-1">A Better Definition of Chart Junk <a class="header-anchor" href="#a-better-definition-of-chart-junk" aria-label="Permalink to &quot;A Better Definition of Chart Junk&quot;">​</a></h1><p>Maximizing the data-ink ratio sounds like a good idea, but when actually followed to the letter produces terrible and nonsensical results. Here is a more reasonable definition of chart junk that does away with the pretense of a mathematical formula and puts some common sense back into the question of good chart design.</p><p>Much has been made of Tufte’s famous data-ink ratio, and many people like to rail, privately and online, against chart junk. In short, the data-ink-ratio defines the amount of information your chart elements (“ink”) are providing, with the goal of maximizing that ratio. Since we can assume that the information is constant, this means we need to minimize the amount of ink. Any ink on your chart that does not convey data is considered junk.</p><p>While this extremely reduced definition makes for great flame war fuel, it places the emphasis on the wrong question, and when property followed, leads to largely nonsensical charts (this example is from <a href="http://www.perceptualedge.com/articles/visual_business_intelligence/sometimes_we_must_raise_our_voices.pdf">Stephen Few’s recreation of Tufte’s argument</a>).</p><p align="center"><img class="aligncenter size-full wp-image-2267" alt="Minimal Bars" src="https://media.eagereyes.org/wp-content/uploads/2013/03/minimal-bars.png" width="575" height="386"></p><p>The first issue is the whole notion of <em>ink</em>. What does that even mean? If you live in a world of black ink on white paper, that may be a reasonable criterion. But add color and the whole thing breaks down. Color can be used well and can be terrible. Reducing ink does not tell us anything about that. The same is true for interactions like mouse-overs, sorting, and other conveniences our modern visualization machines afford us.</p><p>There is a parallel here with writing. While you might argue that using fewer and simpler words is generally preferable, nobody would argue that writing is merely a question of maximizing the information-to-letters ratio. Good writing needs clarity and simplicity just as it needs variation, voice, explanation, and many other things.</p><p>Which brings me to my alternative definition of chart junk:</p><blockquote><p>Chart junk is any element of a chart that does not contribute to clarifying the intended message.</p></blockquote><p>Do you have more bars than necessary? Get rid of them! Are you missing context that would help people understand the values better? Add it in! Is your use of color distracting from the message? Change it! Are people not able to figure out what you are telling them? Use highlights!</p><p>Do you see the difference? Instead of minimization at all cost, we are now asking questions about the purpose of this thing you are creating. We are no longer pretending that visualization design is a mathematical optimization, and instead thinking about what we want to achieve.</p><p>Chart junk is still chart junk. Don’t add meaningless nonsense to your charts! Don’t clutter them up! Reduce the impact of grid lines, etc. But also think about how you can clarify the message, how you want people to read your data, and what you want them to take away. Perhaps adding things will actually help. What was considered chart junk before <a title="The Three Types of Chart Junk" href="/blog/2012/three-types-chart-junk">might turn out to be useful</a>.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on March 17, 2013</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://twitter.com/gilgongo" rel="nofollow noopener" target="_blank">Jonathan</a> says…</p><blockquote><p>It is a complete exaggeration to say that Tufte&#39;s idea &quot;... when actually followed to the letter produces terrible and nonsensical results.&quot; If your chart from Few&#39;s essay is &quot;nonsensical&quot;, then please explain.</p><p>Not only have you mis-represented Tufte as anti-aesthetic (he&#39;s a patron of the arts for heaven&#39;s sake, and has his own gallery in New York!), you have mis-understood the idea of chart junk. You say &quot;Instead of minimization at all cost, we are now asking questions about the purpose of this thing you are creating.&quot; But removing chart junk is done AFTER his first rule &quot;Above all, show the data.&quot; If the visual device you have chosen does not show the data, together with necessary context or highlighting then the data/ink ratio is irrelevant, and this post is similarly irrelevant to it.</p></blockquote><p><a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…</p><blockquote><p>The example is very similar to one Tufte drew himself, and it shows the data just fine.</p><p>The point here is that there is a double standard: we supposedly follow &quot;maximize data ink,&quot; when we&#39;re really making arbitrary decisions. What I want to do is find a principle that works the way it&#39;s actually written.</p></blockquote><p><a href="http://dataremixed.com" rel="nofollow noopener" target="_blank">Ben Jones</a> says…</p><blockquote><p>Hi Robert, I get your point here - whether you add or take away &quot;ink&quot; or pixels, as long as doing so helps to clarify your intended message, then do it.</p><p>Your definition puts the emphasis on the end over the means, and so requires a contingency that the end is an ethical one. Intended messages ought to be accurate ones.</p><p>Sometimes I find it can be tough to know whether a certain change will add clarity or not. Other than asking people what they think, do you have any other suggestions on how to do that?</p><p>Thanks for the thought provoking post, Ben</p></blockquote><p>carlosscheidegger says…</p><blockquote><p>I agree wholeheartedly with Robert here. And what does &quot;above all, show the data&quot; really mean? If I write down a table with very small numbers and leave the rest of the page white, I am showing all the data, and am minimizing chart junk. Or am I?</p><p>The whole point is that Tufte&#39;s principles seem to require Tufte&#39;s (admitted fantastic, perhaps unparalleled) aesthetic sense. But then, why not make the principle &quot;you shall only let Tufte-like minds draw charts&quot; instead? It would amount to the same outcome: Tufte can draw awesome data graphics, and few, if anyone else can follow his principles correctly.</p></blockquote><p>Jonathan says…</p><blockquote><p>If you write down a table with very small numbers and leave the rest of the page white, then that&#39;s not a statistical graphic. Sure, there might be a context in which doing that is better than a chart of some kind, but your argument is otherwise a straw man.</p></blockquote><p>Jonathan says…</p><blockquote><p>Robert, you&#39;re not going to find a principle of aesthetic that works better than a guideline like the data/ink ratio, or indeed any other design principle for that matter. It&#39;s fine to rail against the mis-use of, say, symmetry or density, but to suggest that those principles themselves are flawed is another matter entirely. And in any case, what is arbitrary about the data/ink ratio?</p></blockquote><p>carlosscheidegger says…</p><blockquote><p>You&#39;re missing the point. It&#39;s not about &quot;lists vs charts.&quot; I hate numeric tables with a passion. But I believe Robert is trying to distill an actual principle. Currently is no good, <em>general</em> principle of visualization that can consistently be acted upon. That&#39;s the &quot;definition&quot; I think that Robert is going after. Everything else we have are just rules of thumb. That&#39;s good for (some) practice, but not good for thoroughly understanding visualizations.</p><p>Incidentally, there&#39;s no good definition of statistical graphic, either! &quot;plots &#39;x, y, z, and w&#39; are statistical graphics&quot; doesn&#39;t count (yes, I have read Bertin, Wilkinson, Wickham, Stolte, MacKinlay, etc. It&#39;s not there, at least not in any way that fundamentally forbids a numeric table from being interpreted as a graphic.)</p></blockquote><p><a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…</p><blockquote><p>I did not say that the data/ink ratio was arbitrary, but that people claim to be maximizing it when they&#39;re really doing something else (i.e., following some arbitrary rule or making ad-hoc decisions). There is nothing wrong with doing that, but I hate the pretense that we&#39;re following a principle here, and that the principle, when followed, leads to good charts.</p><p>Carlos gets it: my point is that we need to figure out a principle or rule that we can actually follow and that, when followed, leads us to a meaningful goal. I think that the one I&#39;ve stated above does that, while Tufte&#39;s definition of chart junk and data-ink does not.</p></blockquote><p><a href="http://twitter.com/trinachi" rel="nofollow noopener" target="_blank">Trina Chiasson (@trinachi)</a> says…</p><blockquote><p>&quot;We are no longer pretending that visualization design is a mathematical optimization, and instead thinking about what we want to achieve.&quot;</p><p>Well said. The best solution depends on the context and desired outcome. A basic guideline for making an informed decision is important, but it&#39;s also important to remember that there&#39;s rarely a one-size-fits-all solution.</p></blockquote><p><a href="http://twitter.com/gilgongo" rel="nofollow noopener" target="_blank">Jonathan</a> says…</p><blockquote><p>The trouble with your principle (&quot;Chart junk is any element of a chart that does not contribute to clarifying the intended message&quot;) is that it&#39;s completely subjective. The point of the data/ink ratio is that it&#39;s a principle that can be tested objectively. If I think a 3D shade contributes to clarifying something, but you don&#39;t, then your principle has nothing to say at that point. Meanwhile, the data/ink ratio does. It&#39;s by no means alone among principles in being over-zealously applied. But that&#39;s not a problem of the principle, it&#39;s a problem with the people applying it.</p></blockquote><p><a href="http://twitter.com/gilgongo" rel="nofollow noopener" target="_blank">Jonathan</a> says…</p><blockquote><p>So what do you do when you see a principle being mis-applied or overly-applied? Conclude that the principle itself is wrong? Personally, I would conclude the person applying the principle is wrong, but Robert disagrees.</p></blockquote><p>Meic Goodyear says…</p><blockquote><p>Principles I try to follow:</p><ul><li>Since any aspect of a chart is capable of conveying information to a reader, only those aspects intended to carry such information should be included. For example, if graduated colours are used the graduation should indicate something about the data represented (eg probability density)</li><li>Aspects and components of charts should be given visual prominence according to their importance to the message.</li><li>Components should be as clearly interpreted as possible (eg horizontal rather than vertical text if formatting allows).</li><li>Avoid redundancy (e.g. don&#39;t repeat info already in chart headings in axis labels)</li><li>Additional non-chart features may be added if (a) they cannot be interpreted as conveying informations and (b) they are likely to added to the retention of the information in the memory of the reader (see Frances Yates&#39;s &quot;The Art of Memory&quot; for inspiration)</li></ul></blockquote><p><a href="http://hatchphotoartistry.com" rel="nofollow noopener" target="_blank">Eric Hatch</a> says…</p><blockquote><p>The data ink / chart junk concept is really useful but ignores issues of psychology and visual acuity. Negative space can be an asset, even in presenting data visually. &quot;Eye chart&quot; papers and slides may be purely data, but if you can&#39;t find the message for the clutter, you&#39;re in trouble.</p><p>As in so much of life, balance is everything.</p></blockquote><p>MarkP says…</p><blockquote><p>One item an end-user would like to include is the explanation (i.e. formula) for how a KPI was calculated. Similar to a regression formula but in this case the explanations &amp; formula are on the &quot;intro&quot; page. I&#39;ve tried to convince him this is actually documentation and has no place in the dashboard. In fact the data-ink ratio for the intro page is 0%</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2013/definition-chart-junk.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const definitionChartJunk = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  definitionChartJunk as default
};
