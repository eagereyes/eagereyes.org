import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"Tufte and the Truth about the Challenger","description":"Almost exactly 25 years ago, on January 28, 1986, Space Shuttle Challenger disintegrated seconds after lift-off. One of Edward Tufte's most famous examples of bad charts are the ones used by engineers who argued against the launch, and who failed to convince. It's a fascinating story, but it has one major fault: it is not true.","frontmatter":{"title":"Tufte and the Truth about the Challenger","description":"Almost exactly 25 years ago, on January 28, 1986, Space Shuttle Challenger disintegrated seconds after lift-off. One of Edward Tufte's most famous examples of bad charts are the ones used by engineers who argued against the launch, and who failed to convince. It's a fascinating story, but it has one major fault: it is not true.","date":"2011-02-02T00:08:11.000Z","tags":"criticism","featuredImage":"https://media.eagereyes.org/media/2011/challenger.jpg"},"headers":[],"relativePath":"blog/2011/tufte-and-the-truth-about-the-challenger.md","filePath":"blog/2011/tufte-and-the-truth-about-the-challenger.md"}`);
const _sfc_main = { name: "blog/2011/tufte-and-the-truth-about-the-challenger.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/media/2011/challenger.jpg" alt="" width="600" height="300"></p><h1 id="tufte-and-the-truth-about-the-challenger" tabindex="-1">Tufte and the Truth about the Challenger <a class="header-anchor" href="#tufte-and-the-truth-about-the-challenger" aria-label="Permalink to &quot;Tufte and the Truth about the Challenger&quot;">​</a></h1><p>Almost exactly 25 years ago, on January 28, 1986, Space Shuttle Challenger disintegrated seconds after lift-off. One of Edward Tufte&#39;s most famous examples of bad charts are the ones used by engineers who argued against the launch, and who failed to convince. It&#39;s a fascinating story, but it has one major fault: it is not true.</p><h2 id="the-charge" tabindex="-1">The Charge <a class="header-anchor" href="#the-charge" aria-label="Permalink to &quot;The Charge&quot;">​</a></h2><p>While it is easy to look at this as purely a question of proper data display, the claim Tufte makes is a very serious one: the engineers at Morton Thiokol, which manufactured the rocket boosters that led to the disaster, failed to communicate their concerns, and were thus partially responsible for the death of seven astronauts.</p><p>The authors of the paper this posting is based on, <em>Representation and Misrepresentation: Tufte and the Morton Thiokol Engineers on the Challenger</em> (details below), claim that Tufte both misunderstood and misrepresented the argument and the true cause of the failure. What is more, Tufte keeps making the case that it was the engineers&#39;s fault, despite the fact that information is readily available that shows what really happened.</p><h2 id="o-ring-failure" tabindex="-1">O-Ring Failure <a class="header-anchor" href="#o-ring-failure" aria-label="Permalink to &quot;O-Ring Failure&quot;">​</a></h2><p>To briefly summarize the issue, what happened was that the aft joint on one of the Challenger&#39;s rocket boosters failed during launch, which led to the escape of hot gases to the side, towards the main fuel tank. That tank was quickly ruptured, and started to disintegrate. The tank and shuttle were then torn apart by aerodynamic forces (<a href="http://en.wikipedia.org/wiki/Space_Shuttle_Challenger_disaster" target="_blank">the Wikipedia article</a> argues that there was no actual explosion).</p><p>Tufte has argued that the main cause for the joint failure was damage to the O-rings, which sealed the joint to prevent gases from escaping through a gap between parts of the rocket. That failure was supposedly due to the fact that cold temperatures (colder than any shuttle launch before) had led to a loss of flexibility in the rubber-like material the O-rings were made from.</p><p>The main argument in the paper is that the cause of the failure in the joint was not in fact O-ring damage, but <em>blow-by</em>: hot gases passing by the O-rings when they do not properly seal. Also, Tufte&#39;s elegant chart showing temperature versus damage is misleading, because it does not show the actual O-ring temperature, but a mix of O-ring and environmental temperature (which can differ significantly).</p><h2 id="physics" tabindex="-1">Physics <a class="header-anchor" href="#physics" aria-label="Permalink to &quot;Physics&quot;">​</a></h2><p>Tufte describes Richard Feynman&#39;s famous demonstration of the O-ring&#39;s lack of flexibility after having been compressed in a glass of ice water. He criticizes the lack of a control on this experiment, and that Feynman did not make clear what he was comparing (temperature, wet conditions, etc.), and to what reference. But a very similar experiment, with controls and with a much better design, had been conducted by Morton Thiokol engineers a few months prior, and had shown that the O-rings did not properly seal even at 75 F, a temperature Tufte&#39;s chart shows to be perfectly safe for launch.</p><p>Based on that experiment, the engineers had been arguing categorically against further launches, at any temperature, in August 1985. Tufte&#39;s account makes it sound like the engineers only started putting together some hastily hand-drawn charts at the last minute to stop the launch of the Challenger. But that was only a last effort, and was overruled by managers against the recommendation of the engineers (which was never changed), and despite data that had been known for months.</p><p>In addition to ignoring parts of the known history of the catastrophe, Tufte also gets the physics wrong. He focuses solely on O-ring damage, when that was only part of the problem (and not the engineers&#39; main concern), and singles out temperature as the only dependent variable (when the entire design was flawed and temperature only played a partial role). Another one of his criticisms is the inclusion of four test firings of rocket boosters in the data. Those boosters were tied down in a horizontal position when fired, to collect data and to inspect them after they had burned out. Tufte argues that such a configuration does not expose the rockets to the same stresses as an actual launch, without presenting any kind of evidence.</p><p>The truth is quite the opposite, though: the higher stresses during a horizontal burn actually qualify a booster for a launch, because the latter is much easier on the rocket. When the rocket is tied down, it vibrates and deforms from the power that has nowhere to go. Also, the horizontal position causes deformation of the round shape, which widens any gaps in the joints.</p><p>But all of this is moot in the end, because facts were not the basis for the decision. NASA exerted pressure on Morton Thiokol&#39;s management, which approved the launch despite the evidence presented by the engineers.</p><h2 id="conclusions" tabindex="-1">Conclusions <a class="header-anchor" href="#conclusions" aria-label="Permalink to &quot;Conclusions&quot;">​</a></h2><p>The paper is very interesting and readable, and makes a great companion to Tufte&#39;s book. It tells a cautionary tale about oversimplifying arguments, especially when very serious consequences are involved. Understanding the statistics and visualization is one thing, and there is little doubt that Tufte does that.</p><p>What is equally important though, and easily ignored, is that the context of the data also must be understood to create the correct representation. In constructing the case for a simple, elegant chart that seemingly presented all the relevant information and clearly shows the issue, Tufte ignores much of the complexity of the data and physics, and ends up with something that is meaningless.</p><hr><p>Wade Robison, Roger Boisjoly, David Hoeker, Stefan Young, <em><a href="http://people.rit.edu/wlrgsh/FINRobison.pdf" target="_blank">Representation and Misrepresentation: Tufte and the Morton Thiokol Engineers on the Challenger</a></em>. <em>Science and Engineering Ethics</em>, vol. 8, no. 1, pp. 59–81, 2002.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on February 02, 2011. Filed under <a href="/section/criticism">criticism</a>.</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://www.cs.ubc.ca/~tmm" rel="nofollow noopener" target="_blank">Tamara Munzner</a> says…</p><blockquote><p>Robert - thanks much for publicizing this paper to our community!</p></blockquote><p><a href="http://www.visualquest.in" rel="nofollow noopener" target="_blank">paresh shah</a> says…</p><blockquote><p>&quot;What is equally important though, and easily ignored, is that the context of the data also must be understood to create the correct representation&quot; - an important lesson that!</p></blockquote><p><a href="http://blogs.softartisans.com" rel="nofollow noopener" target="_blank">Claire</a> says…</p><blockquote><p>Thanks for posting this--it reminds me quite a bit of how, when I first started reporting, I&#39;d create stories first, and then add in only the quotes that supplanted them. I&#39;ve a feeling Tufte was setting out to prove that the Morton Thiokol Engineers had erred, and was intent on showcasing only evidence that helped his theory.</p></blockquote><p><a href="http://myindigolives.wordpress.com" rel="nofollow noopener" target="_blank">Ellie Kesselman</a> says…</p><blockquote><p>I read the journal article, well, skimmed it. Published in 2002. But that doesn&#39;t detract at all. What an excellent find!</p><p>Tufte&#39;s error is due to his perspective (and perhaps arrogance). With historical distance, it is far easier to find fault. Let me rephrase that and use an example: Tufte&#39;s analysis of Napoleon&#39;s failed attempt to conquer Russia was flawless. But his analysis of the Challenger disaster shows how poorly suited Tufte is to the nitty gritty of incident review. The latter requires the ability to empathize and re-enact the situation, as one of the participants. Apparently that is not one of Tufte&#39;s abilities.</p><p>I guess Tufte isn&#39;t perfect after all! That&#39;s okay: one needn&#39;t be able to do everything. But one also should be aware of one&#39;s limitations....</p><p>Thank you so much for a wonderful article and critique!</p></blockquote><p><a href="http://www.datavisualization.fr" rel="nofollow noopener" target="_blank">afx75</a> says…</p><blockquote><p>Thanks man for the historical correction ... great post Keep the flow</p></blockquote><p>AnonymousGeorge says…</p><blockquote><p>The second author of this paper, Roger Boisjoly, was one of the engineers at Morton Thiokol who objected to the launch. <a href="http://en.wikipedia.org/wiki/Roger_Boisjoly" target="_blank" rel="noreferrer">http://en.wikipedia.org/wiki/Roger_Boisjoly</a></p></blockquote><p><a href="http://coldwarvet.org" rel="nofollow noopener" target="_blank">ColdWarVet</a> says…</p><blockquote><p>I was sent to a Tufte class many years ago as a requirements analyst with an organization that developed the On-board Shuttle flight software.</p><p>Tufte&#39;s depiction of the temperature versus o-ring damage instances was jaw dropping to me. I showed it to many folks in an effort to convey the need to better depict Avionics and Software metrics and test results.</p><p>Tufte will be in Houston for an 08Apr11 course and the email calls for students are going out now. Though the course is thoroughly engaging and delivers useful information, this article and referenced paper should be mandatory reading for anyone planning to attend.</p></blockquote><p><a href="http://.visualquest.in" rel="nofollow noopener" target="_blank">paresh</a> says…</p><blockquote><p>Has Tufte responded this article at all on his website or in any of his course that he may recently have conducted ?</p></blockquote><p>Robert Kosara says…</p><blockquote><p>I thought of that too, but I don&#39;t think it&#39;s a big issue. Boisjoly isn&#39;t just criticizing Tufte, he has also been very outspoken about the processes and decision-making structures that led to the launch decision. Plus, he has first-hand knowledge of what the engineers were doing and thinking, and what they were trying to accomplish. So his view is very valuable in figuring out what really happened.</p></blockquote><p>Robert Kosara says…</p><blockquote><p>I did searches on <a href="http://www.edwardtufte.com/tufte/" target="_blank">Tufte&#39;s website</a> for the names of the authors, but they came up empty. I can&#39;t believe that nobody has asked him, though. It&#39;s not even about &quot;recent,&quot; the paper is from 2002. Since he tightly controls what gets posted on his &quot;forum,&quot; I guess that he simply doesn&#39;t want to talk about it.</p></blockquote><p>Anonymous says…</p><blockquote><p>I attended Tufte&#39;s course based on a colleague&#39;s recommendation (2 years ago). At the time, I thought some of his comments during the course was over my head (I thought maybe I was not at this level to understand it). He is definitely an IDOL but he gives himself too much credit at times.</p></blockquote><p>Lord John Whorfin says…</p><blockquote><p>He&#39;s essentially accusing the engineers of incompetence when in reality he&#39;s an arrogant windbag full of himself. I never had much respect for his ridiculous books and his utterly insane demands on print quality, but this exposure of his utter incompetence and lack of insight is priceless. What a putz.</p></blockquote><p>Anonymous says…</p><blockquote><p>can you please post or ask those who just attended Tufte&#39;s course in Houston to share their stories with the group?</p></blockquote><p><a href="http://DataAnxiety.tumblr.com" rel="nofollow noopener" target="_blank">Ellie Kesselman</a> says…</p><blockquote><p>You expressed more clearly what I glossed over in my comment. Tufte&#39;s attitude toward the engineers, that they were incompetent, that bothered me too. Rankled. Seemed very arrogant.</p><p>@EagerEyes this was a good post. Your entire blog is impressive. I find myself returning to it, re-reading the same posts, again and again!</p></blockquote><p><a href="http://dboptimizer.com" rel="nofollow noopener" target="_blank">Kyle Hailey</a> says…</p><blockquote><p>&quot;It’s a fascinating story, but it has one major fault: it is not true.&quot; That&#39;s an exaggeration. A greater exaggeration than Tufte&#39;s original story. Tufte glosses over some details like whether or not the engineers had the ambient temperatures of flights without damage and his analysis is overly confident and cocky but he&#39;s trying to demonstrate a crucial point. That point is good visualization of data is powerful and even in these modern times that point is often lost. When I designed the performance monitoring interface to Oracle&#39;s Enterprise Manager in 2003 I spent about 6 months argue for visualization of data while kernel developers argued for just textual data. The story Tufte tells, as I see it, is about engineers were concerned with the &quot;if&quot;, &quot;and&quot; and &quot;but&quot; of the situation because there were questions such as why did the desert trials not have damage in the 40 degree range while the flight had major damage at 53. The answers were not black and white, They did have a black and white opinion though which was there should be no flights below 53 degrees and that colder temperatures posed more of a threat. I see the story as a powerful tragedy that shows the break down in communication between management and engineers. Engineers try to explain everything. When there is too much information management doesn&#39;t get it and makes a misinformed decision. I see it all the time. Engineers are not understood in textual performance reports showing the root cause and clearly pointing to the solution path. Manager&#39;s eyes glass over and they continue to hold meetings and preside over debates when the answers are there. On the other hand when data is presented graphically managers click in and take action. Here is my take on the data</p><p>The correlation between damage and temperature is unclear but it is compelling. There is no damage above 75. There is always damage below 65. The incidents of damage rise below 65. But my favorite part, and the part the is compelling graphically, is that there is no data below 53 degrees and the flight was going to be at around 29. Eve with the ground testing data was well above 29 degrees. How could they launch when there were clear concerns about damage and temperature due and there was no data below the mid 40 degrees? Sure the solid rocket joint temperatures might be different than ambient but the would be with in a few degrees. The damage at 75 was different than the damage at other temperatures, thus it is colored differently. At 70 there were many successful launches and 2 with damage. The middle black dot is the normalized damage ie average of success and damage. The two grey dots represent the un-normalized data for 70. <a href="https://sites.google.com/site/oraclemonitor/challenger" rel="nofollow">Tufte graphic revisited</a> The most unfortunate part of Tufte&#39;s story is any blame on the engineers. If anyone is to blame it seems to be management who didn&#39;t fully take the time to understand the engineers objections. I think the main thrust of the study above is that Tufte cut too many corners in his analysis and wrongly blames the engineers when the situation was much more complex. I agree with that. I also agree that the graphics, had they been an option, which the weren&#39;t at the time, would have been a powerful addition.</p></blockquote><p>Royce Michael Lee says…</p><blockquote><p>The authors of the Tufte rebuttal appear to have erred -- the temperatures in Tufte&#39;s table refer to O-ring temperatures only and seem to me to exactly match those appearing on the Morton Thiokol infographic presented to the Presidential Commission on the Space Shuttle Challenger Accident that Tufte&#39;s book references (and also appears <a href="http://history.nasa.gov/rogersrep/v5p896.htm" rel="nofollow">here</a>). All other qualitative references to temperature in Tufte&#39;s analysis seem to refer to O-ring temperatures exclusively. The only mistake I can find in Tufte&#39;s scatterplot is the predicted O-ring temperatures for Challenger (SRM 25), which the engineers had estimated would be 27-29 degrees, were shown on the Tufte chart as 26-29 degrees. Otherwise the scatterplot and its labels appear consistent with the data.</p><p>Another issue I have with the Robison, Boisjoly, Hoecker and Young paper is footnote g on page 65. This footnote discusses the confusion over flights and rocket names. To &#39;clear-up&#39; the confusion between Morton Thiokol&#39;s naming scheme and Nasa&#39;s naming scheme, the authors create a 3rd scheme of their own. This scheme is confusing and redundant: confusing in that the prefix they chose (STS) is the same prefix that NASA has used; and redundant in that the numbering scheme they use matches Morton Thiokol&#39;s (numbered 1 through 25). Simply sticking to Morton Thiokol&#39;s prefix and numbering (e.g. SRM 25 for the Challenger disaster) as Tufte did would have aided clarity.</p></blockquote><p>Royce Michael Lee says…</p><blockquote><p>Of course I meant quantitative (not qualitative) in my previous post...</p></blockquote><p>Johnny says…</p><blockquote><p>Are you kidding? Tufte doesn&#39;t even let his own students ask him any questions. I saw his lecture in Boston and was aghast when he flippantly dismissed a valid question from a student with a wave of his hand. He&#39;s a legend in his own mind and is worshiped like a god by the legions of corporate do-nothings who get sent to his lectures by management. A critical eye can easily see right through this fraudster.</p></blockquote><p>Mokeman says…</p><blockquote><p>I&#39;ve read all of the papers, about who did, and said what when, but I have unanswered questions.</p><p>Regardless of how much pressure (future contract threats and the like) by Malloy and NASA would have placed on MTI&#39;s Lund, Mason, Kilminster, and Wigley, what possibly would have possessed them (MTI&#39;s Lund, Mason, Limminster etc.) to ultimately sign, in writing, ANY rationale for &quot;recommending&quot; a launch at 27-29 degrees F when the the SRB itself and it&#39;s components were only &quot;qualified&quot; for 40-90 def F ?? I mean, if well-known, documented SPEC&#39;s were for 40-90 deg., what business did any of the parties even have to the night before conference call in the first place?</p><p>And that&#39;s not to even mention the known issues, and 5-7 flights with signs of blow by. Given the known situation, the phone calls/conference with MTI should have only occurred if launch temperature was predicted to be ABOVE 40 degrees, and <em>below</em> 53 degrees (the coldest previous launch).</p><p>Tufte talks a whole bunch about the role of the engineers and such, but all of that goes out the window the second that Kilminster called for the 5-min recess in the conference (that actually lasted 30 minutes). As soon as the 4 managers over-ruled the engineers, it was all a moot point in my mind.</p><p>Since Tufte goes on to talk about how the case could have been &quot;better presented&quot;, it wasn&#39;t clear to me who he was implying that the case could have been presented better TO, - the MTI managers, or Malloy/NASA? Remember, the MTI engineers (Kilminster) are already been previously been convinced by their engineers that a launch was NOT recommended, and conveyed that quote clearly to all parties.</p><p>Regardless of pressure, he (Kilminister specifically) could have simply hid behind basic contractual/legal SPEC&#39;s, and hand the hot potato issue back up to Mason and Lund, and simply say: here boss, - YOU explain to the customer WHY anyone here at MTI would &quot;sign&quot; a piece of paper stating that a launch is recommended far outside of contract/qualified SPECS. Period, end of story. What did I miss here?</p></blockquote><p><a href="http://kylehailey.com" rel="nofollow noopener" target="_blank">Kyle Hailey</a> says…</p><blockquote><p>put together a write up emphasizing the visual aspects of presenting the data at <a href="http://www.kylehailey.com/critical-importance-of-data-visualization/" target="_blank" rel="noreferrer">http://www.kylehailey.com/critical-importance-of-data-visualization/</a></p></blockquote><p><a href="http://people.rit.edu/wlrgsh/" rel="nofollow noopener" target="_blank">Wade Robison</a> says…</p><blockquote><p>I am one of the authors of the 2002 paper. Two of the authors were my students, and they are the ones who showed Roger Boisjoly Tufte&#39;s essay when he came to our campus for a course on the Challenger. He was staying at my house, and we ended up agreeing to write a response. The paper was the outcome of that collaboration -- which included the students.</p><p>I was directing a conference on David Hume in Helsinki when I received an email which very abruptly told me to cease and desist. It was from Tufte, and since I had no idea what he was talking about, I responded by asking what this was all about. He responded by saying, &quot;You know. And stop it.&quot; It turned out that one of the two student co-authors had gone to his website and posted something -- I never bothered to find out what. That set Tufte off, and he assumed that I did it or was behind it. I wrote again and told me I had no idea what he was talking about. He told me that if I didn&#39;t stop, he would write the president of my university. I wrote something like the following: &quot;Please do. He will find it amusing that you would think that he could direct me not to write something on your website. But in any event, I would be more than willing to discuss what you think is wrong with the paper. That&#39;s the way scholars get to the truth, by correcting each other, in a civil manner.&quot; I never heard from him again. Wade Robison</p></blockquote><p><a href="http://www.facebook.com/1189058830" rel="nofollow noopener" target="_blank">Vj Laxmanan</a> says…</p><blockquote><p>Methinks, Tufte is getting too much credit for the correlation between overnight ambient temperature and the number of O-ring failures, erosion etc. This was discovered by the Nobel laureate Richard Feynmann and I remember reading about it in the LA Times when the Rogers Commission report was released. I used to work at the NASA Cleveland Center back then and my boss had copies of the LA Times circulated to our group.</p></blockquote><p>Laura Stegall says…</p><blockquote><p>It&#39;s been 5 years since this article was published and I think people (and the author) should see that the NASA engineer Bob Ebeling (who was one of the first whistleblowers in 1986) STILL to this day maintain that the O-ring failure was a focus of the explosion. You <em>may</em> want to read this NASA Engineer&#39;s first-hand account (link below) on the 30th anniversary of the explosion. He contradicts this authors assertion. I wouldn&#39;t completely dismiss Edward Tufte&#39;s work. His books and seminars had profound impact on my career in technology and statistical analysis. And contrary to some commenters, he spent a good portion of the late afternoon answering student&#39;s questions AND stayed afterward to discuss topics casually and signed all of our books afterward. He is still a formidable resource on re-thinking and communicating quantitative data.</p><p><a href="http://www.npr.org/sections/thetwo-way/2016/01/28/464744781/30-years-after-disaster-challenger-engineer-still-blames-himself" target="_blank" rel="noreferrer">http://www.npr.org/sections/thetwo-way/2016/01/28/464744781/30-years-after-disaster-challenger-engineer-still-blames-himself</a></p></blockquote><p>Hillary Sillitto says…</p><blockquote><p>Tufte’s key point stands, that choosing the right way to display the right data is key to unravelling the complexities of this sort of situation.</p></blockquote><p><a href="http://chicagoneedsspace.wordpress.com/" rel="nofollow noopener" target="_blank">Eric Kristoff</a> says…</p><blockquote><p>For the record, Tufte&#39;s characterization of the O-ring failure being the root cause of the shuttle Challenger&#39;s accident is correct. Please refer to the official findings from the 1986 Rogers Commission report. Chapter 4, opening paragraph. <a href="https://spaceflight.nasa.gov/outreach/SignificantIncidents/assets/rogers_commission_report.pdf" target="_blank" rel="noreferrer">https://spaceflight.nasa.gov/outreach/SignificantIncidents/assets/rogers_commission_report.pdf</a></p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2011/tufte-and-the-truth-about-the-challenger.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tufteAndTheTruthAboutTheChallenger = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tufteAndTheTruthAboutTheChallenger as default
};
