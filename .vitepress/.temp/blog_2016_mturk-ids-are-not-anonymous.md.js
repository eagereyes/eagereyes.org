import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"MTurk IDs Are Not Anonymous","description":"The worker IDs Amazon's Mechanical Turk gives you may look pretty random and anonymous, but they can reveal personally-identifiable information. They need to be removed from datasets, especially when they are shared or published.","frontmatter":{"title":"MTurk IDs Are Not Anonymous","description":"The worker IDs Amazon's Mechanical Turk gives you may look pretty random and anonymous, but they can reveal personally-identifiable information. They need to be removed from datasets, especially when they are shared or published.","date":"2016-05-05T07:32:00.000Z","tags":"mturk, mechanical turk","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2016/05/mturk.png","outline":false},"headers":[],"relativePath":"blog/2016/mturk-ids-are-not-anonymous.md","filePath":"blog/2016/mturk-ids-are-not-anonymous.md"}`);
const _sfc_main = { name: "blog/2016/mturk-ids-are-not-anonymous.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/05/mturk.png" width="400" height="257"></p><h1 id="mturk-ids-are-not-anonymous" tabindex="-1">MTurk IDs Are Not Anonymous <a class="header-anchor" href="#mturk-ids-are-not-anonymous" aria-label="Permalink to &quot;MTurk IDs Are Not Anonymous&quot;">​</a></h1><p>The worker IDs Amazon&#39;s <a href="https://www.mturk.com/">Mechanical Turk</a> gives you may look pretty random and anonymous, but they can reveal personally-identifiable information. They need to be removed from datasets, especially when they are shared or published.</p><p>Like many things, I learned this the hard way. Or I would have, had <a href="http://steveharoz.com/">Steve Haroz</a> not caught it in the data for an upcoming EuroVis paper.</p><p><a href="https://www.amazon.com/gp/profile/A21R62CIBPAHCG">Here&#39;s an example</a> of a worker profile with way too much information about the person&#39;s location and reviews of Amazon purchases. You also often get partial or even full names, and can start guessing their hobbies, etc.</p><p>Many studies are run on MTurk these days, because it&#39;s convenient. And sharing the resulting data is clearly the way to go. Just make sure you replace the Worker IDs with some random identifier before doing so.</p><p>Another pitfall is that once you&#39;ve checked that data into git (and share on github), you need to recreate the repository to erase any trace of it. Just deleting or overwriting a file in a repository isn&#39;t enough, because it&#39;s still in the history. There are tricks in git that allow you to change history, but you better know git really well to use those. Nuking the repository and recreating it with the cleaned data is the safer bet.</p><p>Why Amazon ties the worker IDs to people&#39;s accounts is a bit of a mystery to me. I guess they never expected people to start sharing those IDs, since doing studies isn&#39;t exactly their main use case. It&#39;s still odd, since Amazon otherwise tries to keep the workers anonymous as much as possible (you&#39;re not allowed to ask them certain questions, etc.).</p><p><em>Posted by <a href="/about">Robert Kosara</a> on May 05, 2016</em></p><aside class="comments"><hr><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p>Eytan Adar says…</p><blockquote><p>Yes... see this for a longer analysis: <a href="http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2228728" target="_blank" rel="noreferrer">http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2228728</a></p></blockquote><p><a href="http://www.dethwench.com" rel="nofollow noopener" target="_blank">Monika M. Wahi, MPH, CPH</a> says…</p><blockquote><p>Thank you for putting us on notice. I am an epidemiologist, but I recently helped a communications colleague pilot a survey (n=60) on opinions of the Republican Party on MTurk, which I had never used.</p><p>We used the feature in SurveyMonkey that creates an anonymous link on the web, and designated it not to collect IP address, so the survey dataset was indeed de-identified. However, to be able to allow the workers to get paid on MTurk, you need to have each survey have a unique Survey ID which is then entered into MTurk by the users to get their payment. This is apparently much easier to do in Qualtrics than in SurveyMonkey.</p><p>Qualtrics advice: <a href="http://brentcurdy.net/qualtrics-tutorials/link/" target="_blank" rel="noreferrer">http://brentcurdy.net/qualtrics-tutorials/link/</a></p><p>SurveyMonkey advice: <a href="http://nicholasnicoletti.com/blog/2015/06/survey-monkey-and-mechanical-turk-the-verification-code/" target="_blank" rel="noreferrer">http://nicholasnicoletti.com/blog/2015/06/survey-monkey-and-mechanical-turk-the-verification-code/</a></p><p>I had a bear of a time in SurveyMonkey, but finally figured it out with the advice above. We were limited to sending 20 per batch, and so we did 3 batches for n=60.</p><p>I now realize from this post that I could have re-identified the SurveyMonkey answers by crosslinking the Survey ID in the SurveyMonkey data with info on Amazon Turk about who completed which survey. For this reason, I think if you do it this way using SurveyMonkey, you can say to the IRB that you promise to not try to re-identify the people by going back to your MTurk account and cross-linking the Survey IDs.</p><p>I just want to add: I had never used MTurk for surveys, and was wary of it for two reasons: 1) a biased but uncharacterized convenience sample, and 2) no way to calculate a response rate (no denominator) so hard to quantify selection bias. The colleague and I found (given our topic) that a preponderance of the n=60 were Democrats who were lower income, and this will have a profound effect on the results of surveys on most topics, I believe. I strongly advise against using MTurk for anything but exploratory research that is taken with a grain of salt (as my colleague was doing).</p></blockquote><p><a href="https://www.facebook.com/app_scoped_user_id/658228555/" rel="nofollow noopener" target="_blank">Chris Fuccione</a> says…</p><blockquote><p>Do a search for your worker/requester ID on Google. It will be an eye opener.</p></blockquote></aside></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2016/mturk-ids-are-not-anonymous.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mturkIdsAreNotAnonymous = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mturkIdsAreNotAnonymous as default
};
