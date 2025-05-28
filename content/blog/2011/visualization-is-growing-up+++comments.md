<a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos</a> says…
>	Hey Robert, just to clarify a point about the V&V panel: VTK's implementation of MC was fine! It was Macet (a MC variant in a recent TVCG paper of our own) that had a nasty bug. More details in our paper, <a href="http://cscheid.net/papers/verifiable_visualization_for_isosurface_extraction">here</a>.

Robert Kosara says…
>	I thought it was vtk, because Claudio(?) said that almost everybody who's using Marching Cubes has that issue.

<a href="http://www.datamarket.com" rel="nofollow noopener" target="_blank">Thorri</a> says…
>	I sometimes wonder if people in our field are a teeny bit over-sensitive to visualizations being used to lie.
>	
>	Words are sometimes used to lie. The meaning of text can gets muffled up going up the communication chain. We blame the authors or the editors.
>	
>	Charts can be simple or complex. Sometimes charts need experts to understand.  Sometimes their meaning is obvious. Sometimes charts are used to lie. These are fallacies. We should teach people to recognize fallacies — and blame the authors or the editors.
>	
>	There are not three kinds of lies. There is just the lie.

<a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos</a> says…
>	His remark was (or should have been ;) about the topology of VTK's MC output, since VTK's Marching Cubes has a tendency of turning thin tubular structures into strings of beads. Which is not to mean that VTK's Marching Cubes gets the topology wrong. It's just that VTK makes a fairly weak promise about the topology of the MC output.
>	
>	However, it _is_ the case that the topology of VTK's Marching Cubes output is 1- hard to quantify and 2- rarely what the user intends it to be, when the user actually cares about topological issues. These issues are discussed at length on our second verification paper, <a href="http://cscheid.net/papers/topology_verification_for_isosurface_extraction">here</a> (If you don't mind my second paper plug).
>	
>	Really nice text figures on this typeface, by the way!
