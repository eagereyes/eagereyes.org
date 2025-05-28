<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/01/eg-guidelines.gif" alt="" width="825" height="510" /></p>

# Why Is Paper-Writing Software So Awful?

The tools of the trade for academics and others who write research papers are among the worst software has to offer. Whether it’s writing or citation management, there are countless issues and annoyances. How is it possible that this fairly straightforward category of software is so outdated and awful?

## Microsoft Word

The impetus for this posting came from yet another experience with one of the most widely used programs in the world. Among some other minor edits on the final version of a paper, I tried to get rid of the blank page after the last one. Easy, just delete the space that surely must be there, right? No, deleting the space does nothing. It doesn’t get deleted, or it comes back, or I don’t know what.

So I select the entire line after the last paragraph and delete that. Now the last page is gone, but the entire document was also just switched from a two-column layout to a single column. Great.

People on Twitter tell me that Word stores formatting information in invisible characters at the end of paragraphs. That may be the case, I really do not care. But that it’s possible for me to delete something I can’t see and thus screw up my entire document has to be some sort of cruel joke. Especially for a program that has been around for so long and is used by millions of people every day.

Word has a long history (<a href="http://en.wikipedia.org/wiki/Microsoft_Word">it was first released in 1983</a>, over 30 years ago), and carries an enormous amount of baggage. Even simple things like figure captions and references are broken in interesting ways. Placing and moving figures is problematic to say the least. Just how poorly integrated some of Word’s features are becomes apparent when you try to add comments to a figure inside a text box (you can’t) or replace the spaces before the square brackets inserted by a citation manager with non-breaking ones (Word replaces the entire citation rather than just the opening bracket, even though only the bracket matches the search).

In trying to be everything to everybody, Word does many things very, very poorly. I have tried alternatives, but they are universally worse. I generally like Pages, but its lack of integration with a citation manager (other than the godawful Endnote) makes it a no-go.

## LaTeX

We all know that you write serious papers in <a href="http://en.wikipedia.org/wiki/LaTeX">LaTeX</a>, right? Any self-respecting computer scientist composes his formula-laden treatises in the only program that can insert negative spaces exactly where you need them. LaTeX certainly doesn’t have the issues Word has, but it has its own set of problems that make it only marginally better (if at all).

It is also starting to seriously show its age. <a href="http://en.wikipedia.org/wiki/TeX">TeX</a>, which is the basic typesetting system LaTeX is based on, was released in 1978 – almost 40 years ago. LaTeX made its debut in 1984, over 30 years ago. These are some of the oldest programs still in widespread use, and LaTeX isn’t getting anywhere near the development resources Word does.

While a lot of work has been done to keep it from falling behind entirely (just be thankful that you can create PDFs directly without even having to know what a dvi file is, or how bad embedded bitmap fonts were), there are also tons of issues. Need a reference inside a figure caption? Better know what <code>\protect</code> does, or the 1970s-era parser will yell at you. Forgot a closing brace? Too bad, you’ll have to find it by scanning through the entire document manually, even though TeX’s parser could easily tell you if it had been updated in the last 20 years. Want to move a figure? Spend 15 minutes moving the figure block around in the text and hope there’s a place where it’ll fall where you want it. And the list goes on.

And then there are the errors you can’t even fix directly. The new packages that insert links into the bibliography are great, except when the link breaks over a column boundary, which causes an error that you can’t avoid. All you can do is add or remove text so the column boundary falls differently. Great fun when this happens right before a deadline.

## Citation Managers

In the old days, putting your references together was a ton of work: you had to collect them in one place, keep the list updated when you wanted to add or remove one, then sort and format them, and maybe turn the placeholder references in the paper text into numbers. Any time you’d add or remove one, you had to do it over again.

## bibTeX

Enter bibliography software. In the dinosaur corner, we have <a href="http://en.wikipedia.org/wiki/BibTeX">bibTeX</a>. As the name suggests, it works with (La)TeX. And it’s almost as old, having been released in 1985. It uses a plain text file with a very simple (and brittle) format for all its data, and you have to run LaTeX <em>three times</em> to make sure all references are really correct. This puts even the old two-pass compilers to shame, but that’s how bibTeX works.

There are programs that provide frontends for these text files, and they’re mostly <a href="http://jabref.sourceforge.net">ugly and terrible</a>. A notable exception here is <a href="http://bibdesk.sourceforge.net">BibDesk</a>, especially if you’re in the life sciences. It works really well and doesn’t get in the way. It’s an unassuming little program, and it gets updated pretty continuously. What it does, it does really quite well.

But the rest of the field is as horrifying a train wreck as the writing part.

## Mendeley

I can’t quite share in the doomsday-is-here wailing that started when Elsevier bought <a href="https://www.mendeley.com">Mendeley</a>, and I haven’t seen any terrible decisions yet. What drives me up the wall are simply the bugs and the slowness and the things you expect to work but don’t.

Why does <em>All Documents</em> not include all documents? Why do I have to drag a paper I imported into a group into <em>All Documents</em> so it shows up there? Why are papers in groups copies instead of references, so that when I update one, the other one doesn’t get updated? The most basic things are so incredibly frustrating.

To be fair, Mendeley is constantly improving and is nowhere near as terrible as it was a year or two ago. It still has a ways to go, though. And I really hope they get serious about that iPad app at some point.

## Papers

I’m trying to love <a href="http://www.papersapp.com">Papers</a>. I really do. It’s a native Mac app (though there’s now also a Windows version). It looks good. But it manages to be buggy and annoying in many places where Mendeley works well.

For one, the search in Papers is broken. I cannot rely on it to find stuff. It’s an amazingly frustrating experience when you search for an author and can’t see a particular paper you’re sure is there, and then search for its title and there it is! The ‘All Fields’ setting in the search also doesn’t seem to include nearly all fields, like the author. And matching papers against the global database has its own set of pitfalls and annoyances (like being able to edit fields in a matched paper only to have your edits cheerfully thrown away when you’re not looking). The list goes on (don’t open the grid view if you have large PDFs in your collection, etc.).

## Endnote

Listed only for completeness. Beyond terrible. Written by some sort of committee that understands neither paper writing nor software. I really can’t think of any non-academic commercial software that’s worse (within the category of software for academic users, it’s neck and neck with that nightmare that is <em>Banner</em>).

## A Better Way?

How is it possible that the tools of the trade for academics are so outdated, insufficient, and just plain terrible? Is there really nothing in writing that is smarter than treating text as a collection of letters and spaces? Can’t we have a tool that manages reasonable layout (the stuff that LaTeX is good at without the parts it sucks at) with a decent reference manager?

This isn’t rocket surgery. All these things have well-known algorithms and approaches (partly due to the work that went into TeX and other systems). There have also been advances since the days when Donald Knuth wrote TeX. Having classics to look back at is great, but being stuck with them is not. And it's particularly infuriating in what is supposed to be <em>high technology</em>.

What I understand even less is that there are no tools that consider text in a way that’s more semantic. Why can’t I treat paragraphs or sections as objects? Why doesn’t a section know that its title is part of it and thus needs to be included when I do something to it? Why don’t word processors allow me to fold a paragraph or section or chapter, like some source code editors do? Why can't figures float while I move them and anchor to only certain positions given the constraints in a template?

There are so many missed opportunities here, it’s breathtaking. There has to be a world beyond the dumb typewriters with fancy clipart we have today. Better, more structured writing tools (like <a href="http://www.literatureandlatte.com/scrivener.php">Scrivener</a>, but with a reference manager) have got to be possible and viable as products.

We can’t continue writing papers with technology that hasn’t had any meaningful updates in 30 years (LaTeX) or that tries to cover everything that contains text in some form (Word). There has got to be a better way.
