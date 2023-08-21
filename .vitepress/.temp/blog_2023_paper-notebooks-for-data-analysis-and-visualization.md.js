import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Paper: Notebooks for Data Analysis and Visualization","description":"Computational notebooks offer an alternative to the common GUI-based tools used for data visualization and BI today. In this new paper, I talk about what they are, their pros and cons, and how research could fill in some important gaps.","frontmatter":{"title":"Paper: Notebooks for Data Analysis and Visualization","description":"Computational notebooks offer an alternative to the common GUI-based tools used for data visualization and BI today. In this new paper, I talk about what they are, their pros and cons, and how research could fill in some important gaps.","date":"2023-05-01T07:52:48.000Z","tags":"paper","featuredImage":"https://media.eagereyes.org/wp-content/uploads/2023/05/Kosara-CGA-2023-thumb.png","outline":false},"headers":[],"relativePath":"blog/2023/paper-notebooks-for-data-analysis-and-visualization.md","filePath":"blog/2023/paper-notebooks-for-data-analysis-and-visualization.md"}');
const _sfc_main = { name: "blog/2023/paper-notebooks-for-data-analysis-and-visualization.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2023/05/Kosara-CGA-2023-thumb.png" width="600" height="547"></p><h1 id="paper-notebooks-for-data-analysis-and-visualization" tabindex="-1">Paper: Notebooks for Data Analysis and Visualization <a class="header-anchor" href="#paper-notebooks-for-data-analysis-and-visualization" aria-label="Permalink to &quot;Paper: Notebooks for Data Analysis and Visualization&quot;">​</a></h1><p>Computational notebooks offer an alternative to the common GUI-based tools used for data visualization and BI today. In this new paper, I talk about what they are, their pros and cons, and how research could fill in some important gaps.</p><p>Data visualization research has focused primarily on graphical user interfaces (GUIs) for creating data visualization, and for good reason. But notebooks have been used in data science for a while now, and they offer their own advantages over GUIs: reusability, integration of data analysis and modeling, and – especially – easy collaboration.</p><p>This is an invited piece for the <em>Graphically Speaking</em> column in CG&amp;A, and I&#39;m obviously biased because I work for <a href="https://observablehq.com/">Observable</a> now. There are a fair number of computational notebook platforms out there though, like <a href="https://rmarkdown.rstudio.com/lesson-10.html">R Markdown in RStudio</a>, <a href="https://jupyter.org">Jupyter for Python</a>, etc.</p><p><a href="/publications/Kosara-CGA-2023">The paper</a> talks about what notebooks are, where I see their strengths (and some weaknesses!), and in particular where I see opportunities for research. What I don&#39;t discuss in the paper, since it wasn&#39;t as big a hype when I wrote it as it is now, is that notebooks are also pretty ideal for exploring the current wave of AI tools, in particular ChatGPT and similar. But whether it&#39;s old-fashioned data analysis and visualization, financial or other modeling combined with analysis, or exploring AI models, I think there&#39;s a large research space here that is largely untapped.</p><hr class="wp-block-separator has-alpha-channel-opacity"><p>Robert Kosara, <a href="/publications/Kosara-CGA-2023">Notebooks for Data Analysis and Visualization: Moving Beyond the Data</a>, <em>Computer Graphics &amp; Applications (CG&amp;A)</em>, vol. 43, no. 1, pp. 91-96, 2023.</p><p><em>Posted by <a href="/about">Robert Kosara</a> on May 01, 2023</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2023/paper-notebooks-for-data-analysis-and-visualization.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const paperNotebooksForDataAnalysisAndVisualization = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  paperNotebooksForDataAnalysisAndVisualization as default
};
