import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse(`{"title":"How to Get Excited About Standard Datasets","description":"It can be hard to get excited about the standard datasets that we keep using to show how visualization and statistics work. But if that's the case for you, it's not the datasets's fault, it's you! Here’s how to keep that spark going!","frontmatter":{"title":"How to Get Excited About Standard Datasets","description":"It can be hard to get excited about the standard datasets that we keep using to show how visualization and statistics work. But if that's the case for you, it's not the datasets's fault, it's you! Here’s how to keep that spark going!","date":"2018-03-21T21:18:20.000Z","tags":null,"featuredImage":"https://media.eagereyes.org/wp-content/uploads/2018/03/iris.jpg"},"headers":[],"relativePath":"blog/2018/how-to-get-excited-about-standard-datasets.md","filePath":"blog/2018/how-to-get-excited-about-standard-datasets.md"}`);
const _sfc_main = { name: "blog/2018/how-to-get-excited-about-standard-datasets.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2018/03/iris.jpg" width="700" height="500"></p><h1 id="how-to-get-excited-about-standard-datasets" tabindex="-1">How to Get Excited About Standard Datasets <a class="header-anchor" href="#how-to-get-excited-about-standard-datasets" aria-label="Permalink to &quot;How to Get Excited About Standard Datasets&quot;">​</a></h1><p>It can be hard to get excited about the standard datasets that we keep using to show how visualization and statistics work. But if that&#39;s the case for you, it&#39;s not the datasets&#39;s fault, it&#39;s you! Here’s how to keep that spark going!</p><h2 id="cars" tabindex="-1">Cars <a class="header-anchor" href="#cars" aria-label="Permalink to &quot;Cars&quot;">​</a></h2><p>What could be more interesting than cars? I mean, come on – they’re cars! And I’m not talking about boring Priuses or self-driving cars or any of that newfangled stuff. No, these are from the time when cars were still <em>cars</em>: the 1970s and early 80s. That’s what the <a href="http://www.rpubs.com/dksmith01/cars">cars dataset</a> is all about (there are, it turns out, lots of car-related datasets, but there’s only one true <em>cars</em>). Real cars. Manly cars.</p><p>So yeah, cars. Like, from the 1970s. Look at them! All those cylinders (whatever those are)! Four and six and even eight cylinders! Crazy! Also weight and mileage and stuff. Who knew they had those in the 70s?</p><p>You can learn fascinating things, like that heavier cars have lower mileage – who knew? Or that more cylinders mean lower mileage. I know, somebody should really tell those car makers about that. Even acceleration is correlated with weight, you can’t make this stuff up!</p><p>Cars just never get old. I mean, cars. Who doesn’t love cars? Cars, cars, cars…</p><h2 id="iris" tabindex="-1">Iris <a class="header-anchor" href="#iris" aria-label="Permalink to &quot;Iris&quot;">​</a></h2><p>If the cars dataset seems a bit dated, surely the <a href="https://archive.ics.uci.edu/ml/datasets/iris">iris data</a> will answer your burning questions. Who hasn’t stared at an iris plant and gone crazy trying to decide whether it’s an <em>iris setosa</em>, <em>versicolor</em>, or maybe even <em>virginica</em>? It’s the stuff that keeps you up at night for days at a time.</p><p>Luckily, the iris dataset makes that super easy. All you have to do is measure the length and width of your particular iris’s petal and sepal, and you’re ready to rock! What’s that, you still can’t decide because the classes overlap? Well, but at least now you have data!</p><p>Actually, it turns out that this data is even older than the cars! <a href="https://en.wikipedia.org/wiki/Iris_flower_data_set">It&#39;s from a 1936 paper</a>! They sure knew their irises in the 30s. And it&#39;s not like plants change all that much in 80 years.</p><h2 id="titanic" tabindex="-1">Titanic <a class="header-anchor" href="#titanic" aria-label="Permalink to &quot;Titanic&quot;">​</a></h2><p>Of all the datasets, the <a href="http://stat.ethz.ch/R-manual/R-devel/library/datasets/html/Titanic.html"><em>Titanic</em> data</a> is clearly the most dramatic. Who isn&#39;t obsessed with the disaster that happened over 100 years ago? Who hasn’t seen the movie that came out in 1997, which is, uh, just over 20 years ago now? I mean, who over the age of 40, of course (millennials don’t know anything, as usual)?</p><p>Well, the data is fascinating either way. You can see how people in the first class did much better than those in the second and third classes! Fascinating insights that you would never have guessed! And the crew mostly died too. It&#39;s almost as if wealth bought you survival. Of course, by now they&#39;re all dead so it&#39;s not like it matters anymore.</p><p>Isn&#39;t it amazing how much you can learn from just four variables, though! It doesn&#39;t even matter who all those people were, they&#39;re just numbers now anyway. They&#39;ve all turned into data.</p><h2 id="love-the-classics" tabindex="-1">Love the Classics <a class="header-anchor" href="#love-the-classics" aria-label="Permalink to &quot;Love the Classics&quot;">​</a></h2><p>The classic datasets are <em>fine</em>. If they bore you, maybe it’s you who’s boring? If they don’t interest you, maybe you have the wrong interests? Generations of students have learned to love them, and so will you!</p><p><em>Posted by <a href="/about">Robert Kosara</a> on March 21, 2018</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/2018/how-to-get-excited-about-standard-datasets.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const howToGetExcitedAboutStandardDatasets = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  howToGetExcitedAboutStandardDatasets as default
};
