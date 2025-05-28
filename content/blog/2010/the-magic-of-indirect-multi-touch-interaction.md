<p align="center"><img src="https://media.eagereyes.org/media/2010/magic-trackpad.jpg" alt="" width="560" height="202" /></p>

# The Magic of Indirect Multi-Touch Interaction

Direct multi-touch interaction is all the rage right now on mobile devices like iPhones and iPads. Apple is working on a lesser-known variation that is just as useful, but used in their less glamorous laptop computers. The latest development has been their <a href="http://www.apple.com/magictrackpad/">Magic Trackpad</a>, which brings that type of interaction (with some new twists) to the desktop.

There are also multi-touch tables of course, but I consider those of purely academic interest right now. They are still huge, clunky, and expensive. But there are millions of MacBooks and MacBook Pros out there, and Apple is selling over a million iPads a month (and untold numbers of iPhones). These devices are out there, used by real people in the real world. Touch interaction for these devices is much more interesting simply because it can be made immediately accessible to a lot of people.

## A Bit of History

Apple's MacBook and MacBook Pro computers have had multi-touch gestures for a while. It started several years ago with two-finger scrolling. Some other manufacturers let you use parts of the trackpad for scrolling, but it's hard to exactly hit those spots when you want to, and easy when you don't. Moving two fingers up or down to scroll feels perfectly natural, and becomes second nature almost instantly.

The next step was tapping with two fingers for a right mouse click, or <em>secondary click</em>, in Apple's parlance. Again, a gesture that makes perfect sense, and that is much quicker and easier than having two buttons below the trackpad.

Some of the newer gestures include pinch-to-zoom (like on the iPhone), two-finger rotate, three fingers to navigate back and forth and four fingers to switch between apps. I don't use the latter two, but I love the new option of using three fingers for dragging. That works much better than the old tap-and-drag, and since I don't need it as much, doing a three-finger gesture for that makes sense.

There has been quite a bit of experimentation over time. For a while, there was an option to do "endless scrolling" by moving two fingers in a circle on the trackpad (like on the iPod click-wheel). That never worked well for me though, and it doesn't play well with sideways scrolling. The new inertial scrolling is a better alternative once you're used to it, as it lets you "throw" whatever you're scrolling and stop it when you're there. There is some friction, so it doesn't go on forever if you don't stop it, but that works well for most purposes.

Opera and FireFox have had plugins for a while that let you use mouse gestures for navigation. I always found those tedious, however. Instead of performing a complicated and error-prone mouse gesture, I'd rather click a button or use a key shortcut. But with touch, such gestures are becoming much more natural.

## Gorilla Arm

I see a lot of people assume that the touch interaction they know from their phones will inevitably come to the desktop. This just shows a lack of both imagination and realism, in my humble opinion. Reaching out and touching a vertical screen is not just uncomfortable and tiring, it's also imprecise. The ease with which you can touch-interact with a phone you're holding in your hand does not translate to sitting in front of a computer and touch that surface all day.

No discussion of touch interaction would be complete without mentioning the movie <em>Minority Report</em>, of course. Whenever touch interaction comes up, that movie is cited as the perfect example for how touch interaction needs to work. These people tend to forget that that's a movie though, and that it just demoed the typical interactions which we know to work well with touch: grabbing things, zooming, flicking them around. Plus, Tom Cruise actually needed a body double because the many takes it took to get those scenes filmed were so tiring he just couldn't keep on doing them.

This problem is generally referred to as <em>Gorilla Arm</em>, which is what your arm would look like if you were to actually use a vertical touch screen for eight hours every day (plus back and shoulder pain, posture problems, etc.).

The reason for not touching our desktop screens is the same as for not having mice plugged into our phones: it doesn't make sense. Different uses and different devices need different interactions.

## Visualization Uses

Another big problem with touching a display used for visualization is simply this: you can't see what's underneath your hand/fingers. When you're dealing with photos or documents, that's not a big issue. But when you're looking at a lot of data and trying to select or brush, direct touch interaction runs into this inherent problem.

Indirect interaction is the obvious answer to this. It's not just more comfortable and available, right now, to lots of users. It's also much more practical for real-world uses. The <a href="/blog/2010/multi-touch-brushing-for-parallel-coordinates">multi-touch interaction video</a> I posted recently (and which was just accepted as a poster at <a href="http://vis.computer.org/VisWeek2010/" target="blank">VisWeek</a>) is a first step in this direction.

There have been some attempts at doing indirect interaction on touch tables, mostly when multiple surfaces and displays were involved. There has also been some work that's trying to increase precision by using two hands in different ways (like one for zooming, one for touching).

The reason indirect multi-touch works especially well in this case is because the display actually gets in the way. It makes a lot more sense to not even try to put the display where the interaction is, and instead provide feedback on the actual display. This also allows for some flexibility when the user isn't 100% precise in her interaction. In the parallel coordinates brushing example, the brushes stick to the axes where they started, so a sideways movement will not make them jump around needlessly. That's useful, because having to maintain the exact horizontal location is difficult and distracting.

The common interactions described earlier are similar in that they don't map to a direct display interaction, either. The useful thing about two-finger scrolling (just like scroll wheels on mice) is that you don't have to find the scroll bar first to be able to scroll, you simply scroll the active view. Doing this on a separate touch surface rather than directly on the display is actually a good idea when there is more than one view visible (as is usually the case on phones). Indirect multi-touch interaction in visualization is similar in that some interactions don't necessarily affect only specific regions (like angular brushing), and those that do can be connected to the geometry of the trackpad using visual feedback.

We tend to throw as much technology as we can at every problem. But the example of indirect multi-touch interaction shows how some restraint can lead to a simpler solution that is much more useable and flexible. Going forward, we will need to let go of some of our ideas for how interaction is done right now, in order to be able to explore what is possible. Just like my phones-with-mice example above, I think we're still stuck in thinking that one particular way of doing things will work across all uses and devices. But that is just not the case.
