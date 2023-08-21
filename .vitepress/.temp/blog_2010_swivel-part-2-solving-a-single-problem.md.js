import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Swivel, Part 2: Solving A Single Problem","description":"After my interview with Swivel founders Brian Mulloy and Dmitry Dimov on what happened to Swivel.com, I felt there were still many open questions. So I reached out to Halsey Minor, whose (cleverly-named) incubator Minor Ventures had funded Swivel, and who had made the decision to pull the plug. In this interview, he talks about his issues with Swivel, his priorities in developing products, and what it would take to bring Swivel back.","frontmatter":{"title":"Swivel, Part 2: Solving A Single Problem","description":"After my interview with Swivel founders Brian Mulloy and Dmitry Dimov on what happened to Swivel.com, I felt there were still many open questions. So I reached out to Halsey Minor, whose (cleverly-named) incubator Minor Ventures had funded Swivel, and who had made the decision to pull the plug. In this interview, he talks about his issues with Swivel, his priorities in developing products, and what it would take to bring Swivel back.","date":"2010-11-17T23:07:12.000Z","tags":"Swivel, criticism","featuredImage":"https://media.eagereyes.org/media/2010/swivel2.jpg"},"headers":[],"relativePath":"blog/2010/swivel-part-2-solving-a-single-problem.md","filePath":"blog/2010/swivel-part-2-solving-a-single-problem.md"}');
const _sfc_main = { name: "blog/2010/swivel-part-2-solving-a-single-problem.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2010/swivel2.jpg" alt="" width="560" height="303"></p><h1 id="swivel-part-2-solving-a-single-problem" tabindex="-1">Swivel, Part 2: Solving A Single Problem <a class="header-anchor" href="#swivel-part-2-solving-a-single-problem" aria-label="Permalink to &quot;Swivel, Part 2: Solving A Single Problem&quot;">​</a></h1><p>After my <a href="/blog/2010/the-rise-and-fall-of-swivel">interview with Swivel founders Brian Mulloy and Dmitry Dimov on what happened to Swivel.com</a>, I felt there were still many open questions. So I reached out to Halsey Minor, whose (cleverly-named) incubator <a href="http://minorventures.com/">Minor Ventures</a> had funded Swivel, and who had made the decision to pull the plug. In this interview, he talks about his issues with Swivel, his priorities in developing products, and what it would take to bring Swivel back.</p><h2 id="some-background" tabindex="-1">Some Background <a class="header-anchor" href="#some-background" aria-label="Permalink to &quot;Some Background&quot;">​</a></h2><p>Halsey Minor co-founded <a href="http://www.cnet.com/">CNet</a>, and was a major investor in <a href="http://www.salesforce.com/">Salesforce</a>, Grand Central (which was acquired by Google to become <a href="https://www.google.com/voice">Google Voice</a>), <a href="http://www.opendns.com/">OpenDNS</a>, and a number of other companies. As part of the development work for CNet, he spun out the software company <a href="http://www.vignette.com/">Vignette</a>, which made StoryServer, one of the first content management systems for sites with massive amounts of traffic.</p><blockquote><p><strong>Minor</strong>: I have a very specific idea for what I want. Every time I&#39;ve built a product that has suited me personally, it has been successful. Google Voice was built because I live in two cities (L.A. and San Francisco), I have five cell phones, I have a farm in Virginia, and I&#39;m impossible to track down. I&#39;m a big believer in the cloud, and have been for a long time (which is why we started Salesforce), so I wanted to put all my telecommunications into the cloud. I wanted to be able to redirect whoever wanted to reach me to wherever I was. So that worked great.</p><p>A theme runs through all the things I do: as a customer, I know what&#39;s stupid and I know what&#39;s smart. I know what&#39;s helpful, and I know what gets in the way.</p></blockquote><h2 id="the-use-of-visualization" tabindex="-1">The Use of Visualization <a class="header-anchor" href="#the-use-of-visualization" aria-label="Permalink to &quot;The Use of Visualization&quot;">​</a></h2><p>We moved back and forth quite a bit between different topics (this interview is edited much more than the previous one), but the obvious one was that of visualization.</p><blockquote><p><strong>Minor</strong>: The academic community tends to look at visualization in a very narrow way. You tend to look at it as data being visualized. But I see a massive amount of work being squandered in corporations every quarter. People have to pull data from many disparate sources: text, data, pictures, logos, all kinds of stuff. And they put that into a static PowerPoint presentation and give that to the board. And then the board goes away and three months later, they come back and they do same thing again.</p><p>But what if that document was a living document? What happened to us at Salesforce was that the first CEO, John Dillon, put together a whole book on statistics of everything. But it turned out that none of those statistics mattered because we were losing 8% of our customers each month. We were turning over our entire customer base every year! So this entire book got reduced down to a single metric: churn. Other metrics cascaded off from that, and we changed our compensation system so that salespeople were compensated for renewals, not just signing up new customers.</p><p>These statistics became the focus of our quarterly meetings. What I want to do with Swivel is do that, but I also want you to be able to slice and dice the data yourself. I want you to play with the graphs yourself. We&#39;re showing you the data over three months, but perhaps you want to see the data over nine months, which may be telling a different story.</p><p>The way I look at it, large corporations spend $10 billion on SAS-like software, and it&#39;s generally run by two people. You have to fill in a form and wait six months to get an answer back. What I want to build is a world where data is fluid, where it can be shared across borders, where the data becomes live and is updated in real-time, and I can circumscribe who can and cannot see it. That may or may not be just people in my company, but maybe people in my division and my clients.</p></blockquote><h2 id="what-went-wrong" tabindex="-1">What Went Wrong <a class="header-anchor" href="#what-went-wrong" aria-label="Permalink to &quot;What Went Wrong&quot;">​</a></h2><p>Why was Swivel not successful? What would have been needed to keep it running?</p><blockquote><p><strong>Minor</strong>: There was a very academic – and I don&#39;t mean to be derisive about academic approaches to business – but I think there was a very academic bent, that when they were going to conferences and talking to people there, they weren&#39;t talking to customers. If we had started Salesforce this way, we wouldn&#39;t have been very successful. And we weren&#39;t really solving business problems or problems that customers wanted to pay us a lot of money for. While it was a very noble endeavor, it was not a sustainable one.</p><p>Getting paying customers is a really simple equation: people pay for what they value, but we weren&#39;t delivering anything of sufficient value to make people want to pay. It was buggy and it didn&#39;t solve a problem. It didn&#39;t solve a problem for me, and I could tell them what it was, so how was it going to solve a problem for anybody who wasn&#39;t going to tell them?</p><p>The one thing I wanted it to do is to solve one use case. If after spending tens of millions of dollars, all I have is a good internal tool, I&#39;m happy. We&#39;ll have taken a shot at it, and now I have something that I can use to manage my own business. But that never happened.</p></blockquote><p>Why was the site simply turned off, without any kind of landing page or message?</p><blockquote><p><strong>Minor</strong>: The last group that was running it went off to do other things. Other than maintenance, there wasn&#39;t really anybody actually running it. It wasn&#39;t well manned, there wasn&#39;t a team in place to think through all these issues. And I&#39;ve had plenty on my plate, so this wasn&#39;t my highest priority.</p><p>There was also my perception that there wasn&#39;t really anybody getting any use out of it at all. So I was actually surprised that anybody even noticed. Whenever I launch a product, I hate it. There are all those things I could do better. This product, I hated before I even launched it. And after I launched it, I still didn&#39;t like it. I like where it&#39;s going, but I don&#39;t like that it&#39;s buggy and that there are all those things that you can&#39;t do.</p></blockquote><h2 id="the-present" tabindex="-1">The Present <a class="header-anchor" href="#the-present" aria-label="Permalink to &quot;The Present&quot;">​</a></h2><p>Mr. Minor hinted that Swivel was still being used internally, even though it wasn&#39;t available to people outside. I should mention that this interview was actually conducted during VisWeek, in the last week of October.</p><blockquote><p><strong>Minor</strong>: I now have 20 developers in Argentina who have built <a href="http://www.atmosphir.com/">Atmosphir</a>, which is a very fast-growing game that is launching in November. We have about 60,000 users and about 70,000 worlds have been built. And the speed of growth will probably step up an order of magnitude in six months.</p><p>So that I could finally get somebody to do what I&#39;d asked, which is to make Swivel work, I took it to a guy from Atmosphir and said: instead of you building a whole metric system for managing how the game is going, use Swivel. Pump all the data in there, generate the graphs, use it and make it work. And then, because I&#39;ve actually put the data analytics side with the business side, I know I&#39;m going to solve a problem. Vignette worked because it solved my problem. I wasn&#39;t guessing what it meant to be a high-volume content producer on the Internet, I was a high-volume content producer on the Internet. I just needed to be more efficient, or I was never going to make any money.</p><p>So we&#39;ve taken Swivel and its APIs and we&#39;re pumping huge amounts of data in, like which worlds do people go to, what are they buying, we have a lot of metrics for this virtual universe. And all that data is poring into Swivel and then gets realized inside of Swivel. And from that, we can figure things like whether cutting the price of something would sell more, etc. We can also connect it with Salesforce for promotions, and with Google Analytics for web traffic data and conversion rate, etc.</p></blockquote><h2 id="the-future" tabindex="-1">The Future <a class="header-anchor" href="#the-future" aria-label="Permalink to &quot;The Future&quot;">​</a></h2><p>You offered to bring Swivel back.</p><blockquote><p><strong>Minor</strong>: Quite frankly, I didn&#39;t know that anybody was even using it. I didn&#39;t know journalists were even using it. That&#39;s why I&#39;ve said, if it&#39;s really this valuable to you, I&#39;ll bring it back! It’s very inexpensive. But tell me it&#39;s really valuable, because otherwise I&#39;d rather take all my energy and work on making it work right.</p></blockquote><p>I asked if he thought that people might not trust Swivel again, given the fact that it had just disappeared so suddenly.</p><blockquote><p><strong>Minor</strong>: Do you know how many companies I&#39;ve launched on the Internet that are still around and that are doing fabulously well? With my track record, is somebody going to hold Swivel against me for going dark for a few months, when Salesforce is a $50 billion company, and Vignette was a $26 billion company? I was one of two people who built NASDAQ 100 companies as an Internet company, me and Yahoo! That&#39;s because we made money, and I had an insane amount of money in the bank from having started Vignette. So I&#39;m hardly a fly-by-night entrepreneur.</p></blockquote><p>I interjected that I did not mean trust in him personally, but rather the product.</p><blockquote><p><strong>Minor</strong>: I think the best chance that they would trust me is if the product works and it actually does something useful for them. And if that is not the case, I don&#39;t think they should trust me. Because it doesn&#39;t add enough to their life or their job or their peace of mind to use. There are too many other good products on the Internet. I pride myself on the quality of the products that I put out.</p></blockquote><hr><p>Did you use Swivel? Do you want it back? Feel free to post your comments below. I will collect them and send them to Mr. Minor, unless he drops by to check them out himself (which I assume he will).</p><p><em>Posted by <a href="/about">Robert Kosara</a> on November 17, 2010. Filed under <a href="/section/criticism">criticism</a>.</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://twitter.com/#!/acotgreave" rel="nofollow noopener" target="_blank">Andy Cotgreave</a> says…</p><blockquote><p>great interview. The key for me is the requirement to sell to businesses. How common is this with new web applications:</p><ol><li>First visit site</li><li>See something amazing.</li><li>Lift jaw off floor</li><li>Think about how you would apply it.</li><li>Come up empty, apart from maybe some hobby-level applications.</li><li>Leave the site, never to come back</li></ol><p>Swivel was a bit like that. It was amazing, and it appealed to my inner geek. But it didn&#39;t have the flexibility to make me even consider moving away from my tools of choice (Tableau and Excel) for rapid, embeddable visualisations.</p></blockquote><p><a href="http://jeromecukier.net" rel="nofollow noopener" target="_blank">jerome cukier</a> says…</p><blockquote><p>it would require a lot of extra work and resources to make the swivel vision work, that is helping people analyse the data of their organisation. and since Swivel was launched, there are better, less intimidating BI tools that can fit that need. However, the original swivel was the best solution to display simple charts online, with a link to data, and an appropriate look and feel. As such it was very useful to bloggers, students, journalists etc. so why not bring that back and monetize traffic?</p></blockquote><p>Anonymous says…</p><blockquote><p>we were just getting going with the tool when the rug was pulled, but for our organization, with a low budget and limited IT resources, it was one of the best choices we had found online and was the one we had chosen. we would be happy to see it back up and running -- and improved!</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2010/swivel-part-2-solving-a-single-problem.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const swivelPart2SolvingASingleProblem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  swivelPart2SolvingASingleProblem as default
};
