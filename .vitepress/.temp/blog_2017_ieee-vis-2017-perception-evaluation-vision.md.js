import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"IEEE VIS 2017: Perception, Evaluation, Vision Science","description":"Questions of how visualization is read and understood are a common topic in research, and this year was no exception. This part of my IEEE VIS 2017 report covers papers dealing with perceptual issues, the match between visualization and tasks, statistical reasoning, as well as a panel on vision science.","frontmatter":{"title":"IEEE VIS 2017: Perception, Evaluation, Vision Science","description":"Questions of how visualization is read and understood are a common topic in research, and this year was no exception. This part of my IEEE VIS 2017 report covers papers dealing with perceptual issues, the match between visualization and tasks, statistical reasoning, as well as a panel on vision science.","date":"2017-10-11T18:17:16.000Z","tags":"conference, IEEEVIS","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2017/10/imagining-replications.png"},"headers":[],"relativePath":"blog/2017/ieee-vis-2017-perception-evaluation-vision.md","filePath":"blog/2017/ieee-vis-2017-perception-evaluation-vision.md"}');
const _sfc_main = { name: "blog/2017/ieee-vis-2017-perception-evaluation-vision.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2017/10/imagining-replications.png" width="750" height="405"></p><h1 id="ieee-vis-2017-perception-evaluation-vision-science" tabindex="-1">IEEE VIS 2017: Perception, Evaluation, Vision Science <a class="header-anchor" href="#ieee-vis-2017-perception-evaluation-vision-science" aria-label="Permalink to &quot;IEEE VIS 2017: Perception, Evaluation, Vision Science&quot;">​</a></h1><p>Questions of how visualization is read and understood are a common topic in research, and this year was no exception. This part of my IEEE VIS 2017 report covers papers dealing with perceptual issues, the match between visualization and tasks, statistical reasoning, as well as a panel on vision science.</p><h2 id="perception" tabindex="-1">Perception <a class="header-anchor" href="#perception" aria-label="Permalink to &quot;Perception&quot;">​</a></h2><p><em><a href="http://www.cs.sandia.gov/~atwilso/get_dvs.html">Data Visualization Saliency Model: A Tool for Evaluating Abstract Data Visualizations</a></em> by Laura E. Matzen, Michael J. Haass, Kristin M. Divis, Zhiyuan Wang, and Andrew T. Wilson tries to predict what people will look at in a visualization. Saliency models are usually built for photographs of natural scenes, and it’s not clear if and how they apply to visualization. The authors of this paper adapted an existing model to take into consideration factors like text, color, and the different kinds of spatial scales you see in a visualization. Matlab code for their model is available, though under a somewhat odd license (especially considering that this is U.S. government work).</p><p><em><a href="http://homepage.univie.ac.at/michael.sedlmair/papers/calero-valdez2017priming.pdf">Priming and Anchoring Effects in Visualization</a></em> by André Calero Valdez, Martina Ziefle, and Michael Sedlmair looks at how priming might affect people’s understanding of visualization. Priming is when what you see first influences how you perceive what comes next. In a series of studies, the authors showed that these effects also exist in the particular case of scatterplots that show separable or non-separable clusters. Seeing one kind of plot first changes the likelihood of you judging a subsequent plot as the same or another type.</p><p><em><a href="http://va.gatech.edu/encodings">Evaluating Interactive Graphical Encodings for Data Visualization</a></em> by Bahador Saket, Arjun Srinivasan, Eric D. Ragan, and Alex Endert extends the common studies of visual encodings to include the effect of interaction. How precisely can use scale a bar, bubble, etc. to fit a particular value? They find that the two are closely linked, which is not surprising, but it’s useful to know. You can read their <a href="https://medium.com/@GT_Vis/evaluating-interactive-graphical-encodings-for-data-visualization-b9b8b4bf47f8">Medium posting with more explanation</a>, look at their <a href="https://github.com/gtvalab/interactive-graphical-encodings">Materials and source code</a>, or <a href="http://bahadorsaket.com/publication/encodingsPaper.pdf">read their paper</a>.</p><h2 id="tasks" tabindex="-1">Tasks <a class="header-anchor" href="#tasks" aria-label="Permalink to &quot;Tasks&quot;">​</a></h2><p><em><a href="http://graphics.cs.wisc.edu/Vis/scattertasks/">Scatterplots: Tasks, Data, and Designs</a></em> by Alper Sarikaya and Michael Gleicher looks at the design space of scatterplots and a number of variations on them (like hexagonal bins and splatterplots), and what kinds of tasks they are each useful for.</p><p><em><a href="http://graphics.cs.wisc.edu/Papers/2018/Gle18/viscomp.pdf">Considerations for Visualizing Comparison</a></em> by Michael Gleicher asks for questions about comparisons: what comparison is being made, what makes it hard, what can be done to address the challenges, and what design choices are available. The result is a design process for building visualizations that support comparison.</p><p><em><a href="http://www.cs.ubc.ca/labs/imager/tr/2017/GoalsToTasks/">Bridging From Goals to Tasks with Design Study Analysis Reports</a></em> by Heidi Lam, Melanie Tory, and Tamara Munzner asks how you can go from a stated question to a visualization task. That translation is not nearly as obvious as you’d assume, but they break it down and show different ways of getting from one to the other. <a href="https://docs.google.com/document/d/1H9O_Nd3wlio3iCsXzSSPZzEXRqFTQa1-agAebs2tvd0/edit">Their collection of materials</a> is also available.</p><h2 id="evaluation" tabindex="-1">Evaluation <a class="header-anchor" href="#evaluation" aria-label="Permalink to &quot;Evaluation&quot;">​</a></h2><p><em><a href="http://idl.cs.washington.edu/papers/imagining-replications">Imagining Replications: Graphical Prediction &amp; Discrete Visualizations Improve Recall &amp; Estimation of Effect Uncertainty</a></em> by Jessica Hullman, Matthew Kay, Yea-Seul Kim, and Samana Shrestha went over my head a bit, being the first presentation Friday morning. They look at statistical reasoning, in particular in replication studies, which is generally pretty difficult. Using a number of variations like discretized probability distributions, they were able to help them make better guesses what replications with different outcomes meant for the original studies.</p><p><em><a href="https://arxiv.org/pdf/1504.02218.pdf">Evaluating Cartogram Effectiveness</a></em> by Sabrina Nusrat, Muhammad Jawaherul Alam, and Stephen Kobourov looked at a number of variations on cartograms and the kinds of tasks that are sometimes difficult to do with them, like telling which elements are adjacent. It would have helped to have something else in there as a reference, IMHO, like a bar chart or non-cartogram bubbles.</p><h2 id="panel-vision-science-meets-visualization" tabindex="-1">Panel: Vision Science Meets Visualization <a class="header-anchor" href="#panel-vision-science-meets-visualization" aria-label="Permalink to &quot;Panel: Vision Science Meets Visualization&quot;">​</a></h2><p>This panel by Christine Nothelfer, Zoya Bylinskii, Madison Elliott, Cindy Xiong, Danielle Albers Szafir, Ronald Rensink, Todd Horowitz, Steven Franconeri, Karen Schloss, and Ruth Rosenholtz covered a lot of ground, much more than I can write up here (plus I also missed almost half of it). It was really interesting to get an overview of current topics in vision research, and also to get some myths busted about things like peripheral vision (which is much better than we often assume).</p><p>Two things I want to point to in particular are a review paper, <a href="http://viscog.psych.northwestern.edu/publications/ensemble_coding_in_visualization_JOV_2015_szafir_haroz_gleicher_franconeri.pdf"><em>Four Types of Ensemble Coding in Data Visualizations</em></a>, which gives a good introduction to ensemble coding, and the <a href="https://visxvision.com/join-visxvision/?contact-form-id=81&amp;contact-form-sent=190&amp;_wpnonce=29f05d7352#contact-form-81">InfoVis x Vision Science website</a>. You can sign up there to get news about relevant research and get invited to a Slack channel to discuss research related to vision science and visualization.</p><hr><p>See also:</p><ul><li><a href="/blog/2017/ieee-vis-2017-best-papers-keynote-capstone">Best Papers and Other Awards</a></li><li><a href="/blog/2017/ieee-vis-2017-keynote-and-capstone">Keynote and Capstone</a></li><li><a href="/blog/2017/ieee-vis-2017-word-clouds-sparklines-stories-interaction">Word Clouds, Stories, Interaction</a></li><li><a href="/blog/2017/ieee-vis-2017-machine-learning-diversity-parties">Machine Learning, Diversity, Parties</a></li></ul><p><em>Posted by <a href="/about">Robert Kosara</a> on October 11, 2017</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2017/ieee-vis-2017-perception-evaluation-vision.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ieeeVis2017PerceptionEvaluationVision = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ieeeVis2017PerceptionEvaluationVision as default
};
