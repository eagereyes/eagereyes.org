import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"New Edition of Designing the User Interface","description":"The 6th edition of Designing the User Interface just came out. This is one of the central books in HCI. This edition is also notable because it adds a lot of fresh blood to the list of authors.","frontmatter":{"title":"New Edition of Designing the User Interface","description":"The 6th edition of Designing the User Interface just came out. This is one of the central books in HCI. This edition is also notable because it adds a lot of fresh blood to the list of authors.","date":"2016-05-15T20:30:45.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/wp-content/uploads/2016/05/013438038X.jpg","outline":false},"headers":[],"relativePath":"blog/2016/new-edition-of-designing-the-user-interface.md","filePath":"blog/2016/new-edition-of-designing-the-user-interface.md"}');
const _sfc_main = { name: "blog/2016/new-edition-of-designing-the-user-interface.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/05/013438038X.jpg" width="521" height="648"></p><h1 id="new-edition-of-designing-the-user-interface" tabindex="-1">New Edition of Designing the User Interface <a class="header-anchor" href="#new-edition-of-designing-the-user-interface" aria-label="Permalink to &quot;New Edition of Designing the User Interface&quot;">​</a></h1><p>The 6th edition of <em><a href="https://www.pearsonhighered.com/program/Shneiderman-Designing-the-User-Interface-Strategies-for-Effective-Human-Computer-Interaction-6th-Edition/PGM327860.html">Designing the User Interface</a></em> just came out. This is one of the central books in HCI. This edition is also notable because it adds a lot of fresh blood to the list of authors.</p><p>Ben Shneiderman published the first edition of the book in 1986. Since the third edition, Catherine Plaisant has been his co-author. The newest edition adds four more: Maxine Cohen of Nova Southeastern University, Steven Jacobs of Northern Arizona University, and Niklas Elmqvist and Nicholas Diakopoulos of the University of Maryland.</p><p>The last two names should be familiar to people interested in InfoVis and data journalism. I haven&#39;t seen the book yet myself, but this seems to promise a lot of interesting new content. The publisher&#39;s page on the book also <a href="https://www.pearsonhighered.com/program/Shneiderman-Designing-the-User-Interface-Strategies-for-Effective-Human-Computer-Interaction-6th-Edition/PGM327860.html">stresses the new content</a>:</p><blockquote><p>Updates include current HCI design methods, new design examples, and totally revamped coverage of social media, search and voice interaction. Major revisions were made to EVERY chapter, changing almost every figure (170 new color figures) and substantially updating the references.</p></blockquote><p><em>Posted by <a href="/about">Robert Kosara</a> on May 15, 2016</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2016/new-edition-of-designing-the-user-interface.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newEditionOfDesigningTheUserInterface = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  newEditionOfDesigningTheUserInterface as default
};
