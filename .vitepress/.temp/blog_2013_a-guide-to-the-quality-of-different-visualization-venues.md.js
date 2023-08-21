import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"A Guide to the Quality of Different Visualization Venues","description":"I recently got an email from a colleague with the subject, “Academic research, is it all bad?” He had looked at a paper presented at a VIS workshop that people were pointing to on Twitter, and had found it lacking (“it’s just a blog posting”). While there are high-quality venues for visualization research, it’s not easy to be sure which ones are good, and which ones are lower quality.","frontmatter":{"title":"A Guide to the Quality of Different Visualization Venues","description":"I recently got an email from a colleague with the subject, “Academic research, is it all bad?” He had looked at a paper presented at a VIS workshop that people were pointing to on Twitter, and had found it lacking (“it’s just a blog posting”). While there are high-quality venues for visualization research, it’s not easy to be sure which ones are good, and which ones are lower quality.","date":"2013-11-10T20:53:23.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/wp-content/uploads/2013/11/DSC_0495.jpg"},"headers":[],"relativePath":"blog/2013/a-guide-to-the-quality-of-different-visualization-venues.md","filePath":"blog/2013/a-guide-to-the-quality-of-different-visualization-venues.md"}');
const _sfc_main = { name: "blog/2013/a-guide-to-the-quality-of-different-visualization-venues.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2013/11/DSC_0495.jpg" alt="" width="730" height="486"></p><h1 id="a-guide-to-the-quality-of-different-visualization-venues" tabindex="-1">A Guide to the Quality of Different Visualization Venues <a class="header-anchor" href="#a-guide-to-the-quality-of-different-visualization-venues" aria-label="Permalink to &quot;A Guide to the Quality of Different Visualization Venues&quot;">​</a></h1><p>I recently got an email from a colleague, with the subject, “Academic research is it all bad?” He had looked at a paper presented at a VIS workshop that people were pointing to on Twitter, and had found it lacking (“it’s just a blog posting”). While there are high-quality venues for visualization research, it’s not easy to be sure which ones are good, and which ones are lower quality.</p><h2 id="journals-vs-conferences" tabindex="-1">Journals vs. Conferences <a class="header-anchor" href="#journals-vs-conferences" aria-label="Permalink to &quot;Journals vs. Conferences&quot;">​</a></h2><p>The basic unit of publication is called a <em>paper</em>. Papers can be published in journals or proceedings. Proceedings are the collection of papers presented in a conference, symposium, or workshop. The latter three categories are important because there are big quality differences between them, which I will come back to later.</p><p>Academic journals tend to be of high quality: the papers are usually longer than in conference proceedings, and the review process tends to be more in-depth for journals. A journal paper can go through a number of revisions before publication, which can considerably increase its quality.</p><p>Papers at conferences, symposia, and workshops are usually accepted as they are, because the conference schedule does not allow for the drawn-out journal process (which can take years). However, in visualization, this line is blurred, because the top-tier visualization conferences publish their proceedings as special issues of journals.</p><h2 id="acceptance-rates" tabindex="-1">Acceptance Rates <a class="header-anchor" href="#acceptance-rates" aria-label="Permalink to &quot;Acceptance Rates&quot;">​</a></h2><p>For conferences, workshops, and symposia, the general quality metric is the acceptance rate. That is the fraction of submissions that were accepted for presentation at the venue. A lower number means a stricter selection and thus generally higher quality. For example, an acceptance rate of 25% would mean that one out of every four submissions is accepted.</p><p>A good conference acceptance rate is below 30%, and typically around 25%. While you might assume that going as low as possible would be better, that is actually not considered a good thing. Conference chairs usually try to keep the rate above 20% to get enough variety into the conference. The goal is not just to select the best work, but also to be able to take some risks and accept new ideas, provocative work, etc. There are fields that have acceptance rates around 15% and below, but that is not something I’ve seen in visualization (SIGGRAPH hovered around 17% for a while, but they’ve since come back to 20% and higher).</p><p>The equivalent metric for journals is the impact factor, which is the average number of times a paper in that journal gets referenced by other papers. This is largely meaningless in visualization because of the small number of journals and the size of the field in general (i.e., impact factors are very low and jump around a lot). More established sciences like biology and physics have dozens of good journals that are ranked by their impact factors, which only change very slowly.</p><h2 id="conferences-symposia-workshops" tabindex="-1">Conferences, Symposia, Workshops <a class="header-anchor" href="#conferences-symposia-workshops" aria-label="Permalink to &quot;Conferences, Symposia, Workshops&quot;">​</a></h2><p>In many fields, conferences accept abstracts or very early work. That is not the case in visualization (or computer science in general). Conferences expect full papers that are reviewed as they are, which means that the reviewers can’t request major revisions. What is typically possible are minor revisions, such as fixing typos and minor clarifications that don’t require substantial new work.</p><p>The difference between a conference and a symposium isn’t very clearly defined as far as I know, though symposia tend to be smaller and less well-established than conferences. The decision to rename a symposium and make it a conference seems to be largely an administrative one.</p><p>Workshops tend to be a much more ad-hoc, smaller, and generally of lower quality. The goal of a workshop is discussion and exploration of new topics much more than the presentation of completed research. However, many workshops are unfortunately run as mini-conferences with lots of presentations and little time for discussion.</p><p>Workshops tend to have much higher acceptance rates than conferences (50% and higher), and to accept work that is much less finished than conferences. That’s good and bad. The good is that early work can be shown and discussed, but the bad of course is that if you expect to see high-quality work, you might be disappointed. That doesn’t mean that it’s all bad, of course. Workshops like <a href="http://www.beliv.org">BELIV</a> always have some very interesting and thought-provoking papers.</p><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2013/11/DSC_0495.jpg" alt="" width="730" height="486"></p><p></p><h2 id="short-papers-and-posters" tabindex="-1">Short Papers and Posters <a class="header-anchor" href="#short-papers-and-posters" aria-label="Permalink to &quot;Short Papers and Posters&quot;">​</a></h2><p>All conferences accept full papers, but some also have a track for short papers. As the name suggests, short papers tend to be shorter (4–6 pages as opposed to the typical 8–12 for full papers). But in addition, their acceptance criteria are typically less strict, and the acceptance rate higher (within the short paper category). Got a good little idea that just doesn’t warrant a full paper? Write a short paper. Short papers can be very valuable research contributions, but they don’t generally have the same weight and quality level as full papers.</p><p>Posters are a completely separate category. A poster really consists of two parts. The authors submit an extended abstract (usually 2–4 pages), which is what is used to make the acceptance decision (and included in some sort of proceedings, though not in a journal). What is shown at the conference is an actual poster that is usually put up for display for a few days so people can see it, with the poster authors nearby for discussion and/or demos at certain times.</p><p>Posters are all over the map. Acceptance rates can be very high, which is a good thing: get work in front of people, give students exposure, collect feedback and ideas, etc. But that also means that the quality is really hit-or-miss. There are really good posters and really, really terrible ones. Posters are also not generally considered published work, so the same ideas can later be written up and submitted as a paper. That’s generally a no-no with any kind of paper (even short papers).</p><h2 id="a-ranking-of-visualization-venues" tabindex="-1">A Ranking of Visualization Venues <a class="header-anchor" href="#a-ranking-of-visualization-venues" aria-label="Permalink to &quot;A Ranking of Visualization Venues&quot;">​</a></h2><p>While it’s easy to rank the top venues in visualization, there is a lot more debate about where the medium and lower tiers go. Below is my attempt at doing this, with the full expectation that I will get yelled at for some decision or another.</p><h3>Top Tier: TVCG, VAST, InfoVis, SciVis, EuroVis, CHI</h3><p>The best visualization venues are:</p><ul><li>The <a href="http://www.computer.org/portal/web/tvcg">Transactions for Visualization and Computer Graphics (TVCG)</a>, the top journal in the field.</li><li>The <a href="http://ieeevis.org">IEEE VIS</a> conferences: VAST, InfoVis, SciVis. Their proceedings are now all published in TVCG.</li><li><a href="http://eurovis.org">EuroVis</a>. Roughly at the same level as VIS, EuroVis papers are published in CGF.</li><li><a href="http://onlinelibrary.wiley.com/journal/10.1111/(ISSN)1467-8659">Computer Graphics Forum (CGF)</a>. While TVCG has largely been taken over by visualization, CGF is much more mixed between visualization and other computer graphics topics.</li><li>The <a href="http://chi2014.acm.org">CHI Conference on Human Factors in Computing Systems (CHI)</a> is not a visualization conference, but does accept the odd visualization paper. Those visualization papers that do get in are generally very good.</li><li><a href="http://www.siggraph.org">SIGGRAPH</a>. I’m really only including this here because I mentioned it earlier and many people have heard of it. The visualization community has pretty much given up on SIGGRAPH, and vice versa. If you have a visualization technique that produces stunningly beautiful images, you can give a SIGGRAPH submission a shot. More than likely, it’s a waste of time, though. If you get it in, it’s a big deal however, and you join the very exclusive club of visualization researchers with SIGGRAPH papers.</li></ul><h3>Middle Tier: InfoVis Journal, CG&amp;A, VIS Symposia, PacificVis</h3><p>The second tier are not quite as good as the above, but are still solid venues to get work published.</p><ul><li>The <a href="http://ivi.sagepub.com">Information Visualisation Journal</a> (abbreviated as IVS, IVI, or IV Journal) is a more recent journal that still seems to be struggling for attention. Paper quality is more mixed than in TVCG, though they are also more focused on information visualization.</li><li><a href="http://www.computer.org/portal/web/computingnow/cga">Computer Graphics and Applications</a> (CG&amp;A) is a magazine published by the IEEE that is more application-oriented and geared towards a broader audience. It’s a good place for systems papers and applications in general. Papers get rewritten for readability and there are some restrictions on the number of citations, etc.</li><li>IEEE VIS doesn’t just consist of the three conferences, but also of a few symposia. This year, those included LDAV (Large Data Analysis and Visualization), BioVis (bioinformatics data visualization), and VizSec (security visualization). I wasn’t excited by LDAV last year, and I didn’t attend this year. BioVis is a great effort that brings together visualization and bioinformatics researchers. I don’t know anything about VizSec. But these are good venues to talk to a more specialized audience and to explore topics that aren’t covered enough in the conferences.</li><li><a href="http://www.pvis.org">PacificVis</a> technically has a good acceptance rate, but I haven’t seen many exciting papers published there. It also seems more focused on scientific visualization, so it’s a bit outside my general awareness horizon.</li></ul><p>There are also a number of other small conferences and symposia that aren’t core visualization venues, but that can be interesting for certain work. Those include <a href="http://www.acm.org/uist/">User Interface Software and Technology (UIST)</a>, <a href="http://hoc12.elet.polimi.it/avi2014/">Advanced Visual Interfaces (AVI)</a>, the <a href="http://www.diagrams-conference.org/2014/">Diagrams Conference</a>, etc.</p><h3>Lower Tier: IV, VIS workshops, VDA, WSCG</h3><p>Lower tier means high acceptance rate and generally low quality, but they can still be worthwhile to get master&#39;s thesis work published, etc. The point is to know what to expect, both when reading a paper from such a conference, and when submitting work there.</p><ul><li><em><a href="http://www.wscg.eu">International Conferences in Central Europe on Computer Graphics, <em style="${ssrRenderStyle({ "color": "#333333" })}"></em></a><em style="${ssrRenderStyle({ "color": "#333333" })}"><a href="http://www.wscg.eu">Visualization and Computer Vision</a></em></em><a href="http://www.wscg.eu"> (formerly </a><a href="http://www.wscg.eu">Winter School of Computer Graphics, WSCG)</a>. If you work in visualization, you’re probably getting the barrage of emails from Vaclav Skala each year about WSCG. The conference has a high acceptance rate, but it’s also a good opportunity to travel to Plzen (which the Pils is named after) and see work from Eastern Europe that you wouldn’t otherwise see. Also, at what other conference are you handed two bottles of beer with your name badge when you register?</li><li><a href="http://vda-conference.org">Visualization and Data Analysis (VDA)</a> is a small conference with a high acceptance rate (48% in 2012) that is part of the SPIE Electronic Imaging Conference. This could be a really solid little conference, but being tied to a large conference that has nothing to do with visualization (and that is quite expensive) doesn’t do it any favors. Though if you go, you&#39;ll be able to just skip over to <a href="http://users.eecs.northwestern.edu/~pappas/hvei/">Human Vision in Electronic Imaging (HVEI)</a>, which is a solid little perception and vision conference.</li><li>Workshops at VIS. While they are associated with a high-quality conference, the limited audience and late deadline for these workshops usually means that they don’t get a lot of submissions (and those are often rejected conference submissions). So the overall quality is just not as high. The focus on a narrow and potentially overlooked topic can still make them worthwhile, though.</li><li>A British company called graphicslink organizes a conference confusingly named <a href="http://www.graphicslink.co.uk/conferences.htm">Information Visualisation</a> (commonly referred to as IV), with a number of associated conferences, one of which is called ViS. It is usually held in London, but also travels around Europe at times; next year, it will be held in Paris. The quality is generally very low and the scope includes anything that has to do with pixels, either generating them or analyzing them. Avoid.</li></ul><h2 id="what-about-visualized-strata-eyeo-vizbi-openvis-tapestry-etc" tabindex="-1">What about Visualized, Strata, eyeo, VIZBI, openvis, Tapestry, etc.? <a class="header-anchor" href="#what-about-visualized-strata-eyeo-vizbi-openvis-tapestry-etc" aria-label="Permalink to &quot;What about Visualized, Strata, eyeo, VIZBI, openvis, Tapestry, etc.?&quot;">​</a></h2><p>This posting is purely about academic conferences. A number of conferences have cropped up in the last few years that are either entirely non-academic, or that are run by people in other fields who want to explore visualization. These conferences are a good complement to the academic ones and will hopefully help steer and broaden the scope of VIS, EuroVis, and others.</p><p>A large variety of conferences and journals is a good thing, even if it can be confusing. The bigger issue right now is that the number of really good ones is still too low. There should be more small conferences, perhaps even more focused on particular questions (like perception, particular data types, etc.) for good work to be presented and discussed. BioVis is an example of such a conference, though I&#39;m not sure if it&#39;s such a great idea to stuff ever more content into IEEE VIS; having more independent conferences throughout the year would be better. But there are of course reasons that make starting a new conference from scratch a challenge.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on November 10, 2013</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p><a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Welcome.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…</p><blockquote><p>Hi Robert:</p><p>This a really good summary of the current perceptions on publishing in the visualization field. As you note, there are some situations in the &quot;What about...&quot; category that can be just as distinguished as a pure academic publication in the visualization community.</p><p>For example, being a winner in the &quot;International Science and Engineering Visualization Challenge&quot; sponsored by NSF and Science Magazine carries an esteem level of visualization quality that is a little different from publishing a paper: <a href="http://www.nsf.gov/news/special_reports/scivis/" target="_blank" rel="noreferrer">http://www.nsf.gov/news/special_reports/scivis/</a></p><p>Landing the front cover of a magazine such as Science or the having one&#39;s scientific animation featured in a PBS special or network news broadcast also carries with it a high level of recognition in the scientific visualization field.</p><p>Being a successful entry into the Electronic Theater at the annual SIGGRAPH Conference, due to the highly competitive nature of the jury submissions, is also a high level (top tier) accomplishment.</p><p>These would be different from paper publication.</p><p>Thanks for providing the really good summary of ranking of visualization publication venues.</p><p>Smiles... Theresa-Marie</p></blockquote><p><a href="http://twitter.com/francisgagnon" rel="nofollow noopener" target="_blank">Francis Gagnon (@francisgagnon)</a> says…</p><blockquote><p>Thanks a lot, especially for not taking for granted that your readers knew all the basics. I learned a lot. Now I hope someone will write a similar post for non-academic conference !</p></blockquote><p>Pierre Dragicevic says…</p><blockquote><p>Thanks for the post. I just wanted to point out that for some venues, the bar for short papers is as high as for full papers. For CHI and UIST, the acceptance rate for short papers is even lower.</p></blockquote><p><a href="http://www.aviz.fr/~fekete" rel="nofollow noopener" target="_blank">Jean-Daniel Fekete</a> says…</p><blockquote><p>Hi,</p><p>The report seems accurate to me. You may want to cite Google Scholar that classifies Visualization as a subfield of computer graphics: <a href="http://scholar.google.fr/citations?view_op=top_venues&amp;amp;hl=en&amp;amp;vq=eng_computergraphics" target="_blank" rel="noreferrer">http://scholar.google.fr/citations?view_op=top_venues&amp;amp;hl=en&amp;amp;vq=eng_computergraphics</a></p><p>You can also take a look at Human-Computer Interaction since Visualization is strong there: <a href="http://scholar.google.fr/citations?view_op=top_venues&amp;amp;hl=en&amp;amp;vq=eng_humancomputerinteraction" target="_blank" rel="noreferrer">http://scholar.google.fr/citations?view_op=top_venues&amp;amp;hl=en&amp;amp;vq=eng_humancomputerinteraction</a></p><p>The only notable difference with your ranking there is that PacificVis is visible while IVS is not. This is based on h5-index, the H-index from the last 5 years. The difference in perception might come from your old-time presence in the field Robert!</p></blockquote><p><a href="http://andrewpwheeler.wordpress.com/" rel="nofollow noopener" target="_blank">apwheele</a> says…</p><blockquote><p>In addition it would be good to note journals in different fields that individuals can either publish their work in (or at least should peruse on occasion for related research). They of course may be less noteworthy for someone interested in padding a vitae for specifically comp. sci., but hopefully that isn&#39;t a big hindrance.</p><p>Statistics specifically has the Journal of Computational and Graphical Statistics (more aimed at theoretical statistics) or the Journal of Statistical Software (if of course you published software) are two that come to mind.</p><p>It stands to be said that if your visualization is aimed at a particular field of interest the paper will be more easily on topic in any field specific journal. For example if the paper is related to visualizing geographic data there are a ton of different potential journals it might be find a good home at (Cartographia, Journal of Cartography &amp; GIS, The Cartographic Journal to name only a few). (Unfortunately other fields besides geography don&#39;t tend to be as welcoming to viz. papers.)</p></blockquote><p>Liz Marai says…</p><blockquote><p>Robert, I doubt we can have a fair discussion of conference venues w/out accounting for the time factor and VIS splits. By the logic above, VAST was in its starter years a mid-tier conference to InfoVis&#39;s first tier; InfoVis was in its starter years a mid-tier conference to SciVis&#39;s first tier; SciVis/Vis was in its starter years a mid-tier conference to SIGGRAPH&#39;s first tier. And graphics and visualization used to be the left-handed stepchild of Computer Science. Yet, weren&#39;t our founders at SIGGRAPH, Vis/SciVis, InfoVis, VAST, BioVis, LDAV etc. exactly in those starter years, and weren&#39;t all these exciting venues? Not to mention BioVis streamlines publication to a 2.75 impact factor venue compared to InfoVis&#39;s 2.11.</p><p>PS: I&#39;ll agree with the short papers/posters comments above. SciVis/Vis featured at least one year when the poster acceptance rate was lower than the one for regular papers; and the SIGGRAPH posters run, and get awards, in the ACM Student Research Competition.</p></blockquote><p>Liz Marai says…</p><blockquote><p>... compared to InfoVis&#39;s 2.21, not 2.11, sorry, my bad. Anyway, why are we splitting hairs? We&#39;re blessed with higher impact factors than most CS venues.</p></blockquote><p><a href="http://gravatar.com/kanitw" rel="nofollow noopener" target="_blank">Kanit Wongsuphasawat</a> says…</p><blockquote><p>UIST is considered by HCI researchers as first tier venue for system-based HCI research despite its symposium status. I do agree that there are not that many vis work published there, but some years good visualization system papers get published there too.</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2013/a-guide-to-the-quality-of-different-visualization-venues.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aGuideToTheQualityOfDifferentVisualizationVenues = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  aGuideToTheQualityOfDifferentVisualizationVenues as default
};
