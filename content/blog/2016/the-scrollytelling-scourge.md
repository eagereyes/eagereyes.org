<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/05/scrollytelling-teaser.png" width="825" height="510" /></p>

# The Scrollytelling Scourge

Scrollytelling is a common way of interacting with stories these days. Scroll down and the story unfolds! Except it's often awkward, brittle, and gets in the way.

## The Age of Scrollytelling

Scrolling is a funny thing. It was long considered something people rarely did, and many news organizations will still talk about stories being "above the fold" when they're visible on most people's screens without scrolling. But the advent of scroll wheels on mice, scroll gestures on trackpads, and of course touch screens on phones and tablets, has turned scrolling into something everybody does without even thinking about it.

Scrollytelling takes this a bit further by assuming that people would rather scroll (or swipe) through a story – hence the term – than hit buttons to advance through a story. Rather than having to click a button on a stepper, you smoothly sail through the story with your scrolly finger.

Except it doesn't work. Let me count the ways it goes wrong.

<ol>
    <li><strong>Continuous scrolling through a story with discrete steps.</strong> Let's take the very cleverly done <em><a href="http://www.bloomberg.com/graphics/2015-whats-warming-the-world/">What's Really Warming the World?</a></em>: It presents a series of questions and answers them. Each question has a little animation, which is continuous. But the steps between the questions are discrete. Scrolling is continuous. It doesn't match the way the story is told. A simple stepper would be way easier. The same is true of this <em><a href="http://www.r2d3.us/visual-intro-to-machine-learning-part-1/">Visual Introduction to Machine Learning</a></em> – great piece, but it's individual steps, continuous scrolling makes no sense.</li>
    <li><strong>Knowing how long the thing is.</strong> Before watching a video on the web, I always check how long it is. If it's longer than I feel like watching, I won't. Scrollytelling pieces often don't give you a good indicator how long the piece is. Yes, you may be able to se the scrollbar, but what does that mean? How far apart are the steps? I have no confidence in that as an indicator.</li>
    <li><strong>Direct access.</strong> Just like I like to know the length of a thing, I also like being able to jump between points. Many scrollytelling pieces now have indicators for the individual steps, which sometimes can be clicked to access them directly, sometimes not.</li>
    <li><strong>Scroll-jacking.</strong> When I scroll, I scroll. I'm the user. I'm in control. I do not want your stupid website to interfere with the scrolling because your little JavaScript thinks that I'm scrolling too fast or that I really should pause here or there before moving on. That tab is closed faster than you can say <em>onScroll</em>.</li>
    <li><strong>Scrolling that doesn't scroll.</strong> Scrolling needs to actually scroll, not just advance an animation. <em><a href="http://www.nytimes.com/interactive/2015/09/30/business/how-the-us-and-opec-drive-oil-prices.html">How the U.S. and OPEC Drive Oil Prices</a></em> makes my brain hurt. I scroll, but nothing (okay, almost nothing) actually scrolls. It's just a bunch of confusing transitions in the same space. Granted, this piece has some other issues as well, but the weird interaction makes things even worse. This <em><a href="http://www.nytimes.com/interactive/2015/11/17/health/wiredwell-food-diary-super-tracker.html">Diary of a Food Tracker</a></em> is another example that would have been so much better with a stepper.</li>
    <li><strong>Precision scrolling.</strong> <em><a href="http://qz.com/576057/why-infectious-bacteria-are-winning/">Why infectious bacteria are winning</a></em> is really interesting, but the scrolling action is infuriating. Text scrolls over the animated graphics, and you have to watch the action while scrolling or you'll miss it. Try to read the text, and you miss the graphics, pay attention to the graphics and the text has just scrolled off the top. This nice piece is completely ruined by the scrollytelling.</li>
    <li><strong>Weird mixed metaphors.</strong> The fantastic <em><a href="http://www.bloomberg.com/graphics/hottest-year-on-record/">Hottest Year on Record</a></em> piece used scrolling as a trigger to start the animation. What if you want to see it again? Now you have to hit a button. It makes no sense. And the initial scrolling distracts, so you've almost certainly missed the first few years.</li>
</ol>

## Stepping Back

What's the alternative? Why, a stepper of course!

<img class="aligncenter size-full wp-image-9285" src="https://media.eagereyes.org/wp-content/uploads/2016/05/stepper.png" alt="stepper" width="1320" height="200" />

This one's from <em><a href="http://www.nytimes.com/interactive/2013/04/16/science/disease-overlap-in-elderly.html">For the Elderly, Diseases That Overlap</a></em>. It's nice and straight-forward: you know many steps there are and where you are in the sequence. Just click the <em>Next</em> button to go to the next one, or any of the numbers to jump around. Animation happens just the same, no scrollyanything needed. But the navigation doesn't get in the way and doesn't distract.

If you absolutely have to use scrolling, read – and heed – Mike Bostock's <em><a href="https://bost.ocks.org/mike/scroll/">How to Scroll</a></em>. But even better: don't.
