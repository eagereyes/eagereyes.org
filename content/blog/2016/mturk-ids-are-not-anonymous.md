<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/05/mturk.png" width="400" height="257" /></p>

# MTurk IDs Are Not Anonymous

The worker IDs Amazon's <a href="https://www.mturk.com/">Mechanical Turk</a> gives you may look pretty random and anonymous, but they can reveal personally-identifiable information. They need to be removed from datasets, especially when they are shared or published.

Like many things, I learned this the hard way. Or I would have, had <a href="http://steveharoz.com/">Steve Haroz</a> not caught it in the data for an upcoming EuroVis paper.

<a href="https://www.amazon.com/gp/profile/A21R62CIBPAHCG">Here's an example</a> of a worker profile with way too much information about the person's location and reviews of Amazon purchases. You also often get partial or even full names, and can start guessing their hobbies, etc.

Many studies are run on MTurk these days, because it's convenient. And sharing the resulting data is clearly the way to go. Just make sure you replace the Worker IDs with some random identifier before doing so.

Another pitfall is that once you've checked that data into git (and share on github), you need to recreate the repository to erase any trace of it. Just deleting or overwriting a file in a repository isn't enough, because it's still in the history. There are tricks in git that allow you to change history, but you better know git really well to use those. Nuking the repository and recreating it with the cleaned data is the safer bet.

Why Amazon ties the worker IDs to people's accounts is a bit of a mystery to me. I guess they never expected people to start sharing those IDs, since doing studies isn't exactly their main use case. It's still odd, since Amazon otherwise tries to keep the workers anonymous as much as possible (you're not allowed to ask them certain questions, etc.).
