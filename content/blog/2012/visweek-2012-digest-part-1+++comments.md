<a href="http://people.cs.clemson.edu/~levinej/" rel="nofollow noopener" target="_blank">Joshua Levine</a> says…
>	Happened to find this post randomly on a google of "ieee visweek 2012 best papers", figured better late than never to comment. 
>	
>	Given that neither you nor I were privy to the entire LDAV submission and review process, I really couldn't say/defend/argue on the full rationalization for choosing it as best paper.  I'm not sure that aspect is ever fair to be on the table (although systemic issues such as submission and review quality should always be).
>	
>	The main goal of this paper, in my mind, is modeling and visualizing uncertainty.  Much of the criticism against rainbow color maps has to do with the associated dangers of trying to reverse map colors back to individual values.  In this case, we use high-frequency banded color maps (examples of both rainbow and others are in the paper) to help highlight where there were large regions of high variance.  Individual colors mapped to values is explicitly not the goal.  A single rainbow color map would have in fact been terrible: even though one could argue individual values would be clearer, seeing variation with nearby values with our approach would be made worse.
>	
>	There are also interesting questions (which we didn't pursue) as to what frequency of the banding will be most effective.  Instead, we allow the user to set and control this using fairly standard transfer function design tools.  Users naturally shift the banding to explore variation.
>	
>	What is perhaps more novel is trying to aid the user in understanding (through both animation and color variation) regions where the data is less certain.  In hindsight, we could do better: for example, working with more sophisticated statistical quantities such as data entropy.  On the other hand, I think there's something impressive about pushing the limits of GPUs to look at a few hundred brain scans or an ensemble of dozens of climate simulations---in real time---using a fairly "basic" volume rendering interface.
>	
>	Nevertheless, you were not the first or only person to make a similar comment.  Another strong critique relates to the fact that the colors used have little to do with a physical meaning for the data---a common goal in volume rendering (esp. for medical fields where realism is important).  And of course the inherent challenges with using animation to convey just about anything.
>	
>	Thanks for the post.
