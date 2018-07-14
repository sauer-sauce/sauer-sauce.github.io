---
layout: post
title:  "CubeScript Tutorial: Part 1 — An Introduction"
date:   2015-09-21 15:07:00
author: Chaos
categories: tutorials
excerpt: "This is the first installment of a multi-part series I’m doing on CubeScript. As the title suggests, I’m starting with a relatively abstract introduction."
tags: cubescript
---
<strong>What is CubeScript?</strong>
<br>
<p>CubeScript is the console language of Cube-based games; it is used to write scripts that can be executed in-game. Scripts written in CubeScript can be anywhere from a single line to hundreds of lines in length (I’ve never seen thousands, but I guess that’s theoretically possible too :P).</p>

<p>While CubeScript shares many features with conventional programming languages, it has significant differences too. For example, one central focus of CubeScript is easy GUI design, a topic that will likely be covered in a later post.</p>

<strong>Basics</strong>
<p>A CubeScript script is basically just a series of syntactically valid statements. A statement will generally be either the invocation of a command or an assignment to a variable. For example, if you’ve ever executed the following in the console:</p>
<div class="contentbox">
	fov 90
</div>

<p>then you’ve used CubeScript; that’s a simple command. Command invocations follow a format wherein the command name is followed by the space-separated arguments to the command. <a class="fixedcode">fov</a>, for example, takes just one argument. A command like <a class="fixedcode">bind</a>, on the other hand, takes two: the key to bind, and the action to perform whenever that key is pushed.</p>

<p>Assignments are fairly straightforward too, especially if you’re familiar with conventional programming languages, as the format is largely the same. For example, if we want to store the value 42 in a variable x, we would simply do:</p>
<div class="contentbox">
	x = 42
</div>

<p>In the old days of CubeScript, assignment itself was actually done via the command "alias"! There is little reason to use <a class="fixedcode">alias</a> over <a class="fixedcode">=</a> now, but it’s good to know in case you see it used in older scripts.</p>

<p>I should also mention that CubeScript scripts are typically placed in either <a class="fixedcode">autoexec.cfg</a> (in your Sauerbraten folder) or in their own <a class="fixedcode">cfg</a> file alongside <a class="fixedcode">autoexec.cfg</a>, whereupon they can be executed with the command <a class="fixedcode">exec file.cfg</a> from <a class="fixedcode">autoexec.cfg</a>. For larger scripts spanning multiple files, it is also possible to package the files in their own folder and use something like <a class="fixedcode">exec folder/file.cfg</a>.</p>

<p>Finally, CubeScript also supports comments, with a syntax similar to that of C/C++/Java:</p>
<div class="contentbox" style="color: gray;">
	// this is a comment
</div>
<p>Note that <a class="fixedcode">/* */</a>-comments are not supported.</p>

<strong>Operators</strong>
<p>Now that we’ve covered what a CubeScript script actually is, we can go on to talk about more complicated things you can do in one. The first thing to go over is operators such as <a class="fixedcode">+</a>, <a class="fixedcode">-</a>, <a class="fixedcode">*</a>, <a class="fixedcode">/</a> etc. Now, it is important to note here that <strong>CubeScript uses</strong> <a target="_blank" href="https://en.wikipedia.org/wiki/Polish_notation">polish/prefix notation</a>, like Lisp, if you’re familiar with that family of languages. Therefore, something like <a class="fixedcode">2 + 3</a> would, in CubeScript, be expressed as <a class="fixedcode">(+ 2 3)</a>. (This is basically a result of the fact that operators such as <a class="fixedcode">+</a> are just commands themselves, so they follow the same syntax as commands, but you probably don’t need to worry too much about that.) So, returning to our <a class="fixedcode">x</a> variable, let’s say we want to assign to <a class="fixedcode">x</a> the sum of <a class="fixedcode">2</a> and <a class="fixedcode">3</a>, we’d simply do this:</p>
<div class="contentbox">
	x = (+ 2 3)
</div>
<p>If you want to represent a more complicated expression like <a class="fixedcode">(2 + 3) * 4</a>, you have to do some nesting of the parenthesis:</p>
<div class="contentbox">
	x = (* (+ 2 3) 4)
</div>

<p>The inner <a class="fixedcode">(+ 2 3)</a> is evaluated first, and its result is then multiplied by <a class="fixedcode">4</a>.</p>
<p>Polish notation might take some getting used to at first, but once you get the hang of it, it’s really quite easy.</p>

<p>Next, we have to be able to access the values we’ve assigned to variables. This is done simply by prefixing the variable name with a <a class="fixedcode">$</a>. For example:</p>
<div class="contentbox">
	x = (+ 2 3)
	<br>
	echo $x
</div>

<p>would echo “5”. Of course, values of variables can be used in expressions being assigned to said variables. For instance, to increment <a class="fixedcode">x</a> by one:</p>
<div class="contentbox">
	x = (+ $x 1)
</div>

<p>A more exhaustive list of operators can be found in the official documentation <a target="_blank" href="http://sauerbraten.org/docs/config.html#cubescript">here</a>, but they all work in essentially the same way.</p>

<strong>Basic Control Flow</strong>
<p>As with most other languages, CubeScript supports some basic control flow constructs such as if-else statements and loops.</p>
<p>In CubeScript, if-else statement follow this syntax:</p>

<div class="contentbox">
	if <a style="color: grey;">condition</a> [ <a style="color: grey;">if body</a> ] [ <a style="color: grey;">else body</a> ]
</div>

<p>For instance:</p>
<div class="contentbox">
	if (= $x 42) [
	<br>
		echo "x is 42!"
	<br>
	] [
	<br>
		echo "x is not 42!"
	<br>
	]
</div>

<p>The snippet above will echo “x is 42!” if <a class="fixedcode">x</a> is indeed 42, and will echo “x is not 42!” otherwise. Note that the else-portion is optional: <a class="fixedcode">if condition [ if body ]</a> is valid by itself:</p>
<div class="contentbox">
	if (= $x 42) [
	<br>
		echo "x is 42!"
	<br>
	]
</div>

<p>Let’s move on to loops. The two most basic types of loops in CubeScript are associated with the commands <a class="fixedcode">while</a> and <a class="fixedcode">loop</a>. <a class="fixedcode">while</a> should seem familiar if you’ve programmed in any conventional language before. It has a syntax of</p>
<div class="contentbox">
	while [ <a style="color: grey;">condition</a> ] [ <a style="color: grey;">body</a> ]
</div>
<p>and will repeatedly execute <a style="color: grey;">body</a> so long as <a style="color: grey;">condition</a> is “true” (i.e. not zero). I’ll reuse the example used in the official docs for <a class="fixedcode">while</a>, because I think it’s a pretty good one:</p>
<div class="contentbox">
	i = 0
	<br>
 	while [ (< $i 10) ] [ echo $i; i = (+ $i 1) ]
</div>

<p>First, <a class="fixedcode">i = 0</a> simply assigns the variable <a class="fixedcode">i</a> to zero, as we know.</p>

<p>The condition <a class="fixedcode">(< $i 10)</a> returns 1 (“true”) if the value in <a class="fixedcode">i</a> is less than 10, and returns 0 (“false”) otherwise.</p>

<p>The loop body does two things (the two statements composing the body are separated by a semicolon):</p>

<p><a class="fixedcode">echo $i</a> just echoes the value of <a class="fixedcode">i</a>.</p>

<p><a class="fixedcode">i = (+ $i 1)</a> increments the value of <a class="fixedcode">i</a> (just like the example with <a class="fixedcode">x</a> above).</p>

<p>So, in plain English, we can translate this snippet as “set <a class="fixedcode">i</a> to 0; while <a class="fixedcode">i</a> is less than 10, echo <a class="fixedcode">i</a> and increment it”. It shouldn’t be too hard to see now that all we will be doing here is echoing the integers from 0 up to 9.</p>

<p>The next kind of loop is, well, <a class="fixedcode">loop</a>, and it has this syntax: <a class="fixedcode">loop var N [ body ]</a>. In this case, <a class="fixedcode">var</a> is the name of some variable, and <a class="fixedcode">N</a> is a non-negative integer. <a class="fixedcode">loop</a> will set <a class="fixedcode">var</a> to 0, then execute <a class="fixedcode">body N</a> times, and each time it will increment <a class="fixedcode">var</a> (meaning <a class="fixedcode">var</a> will take on the values from 0 to <a class="fixedcode">N-1</a>). Again I’ll use the example from the docs:</p>

<div class="contentbox">
	loop i 10 [ echo $i ]
</div>

<p>This actually does the same thing as the <a class="fixedcode">while</a> snippet above: it just echoes the integers from 0 to 9 inclusive.</p>

<p>There are a few other loop constructs for looping over lists and strings. I’ll cover these in a future post.</p>

<strong>Conclusion</strong>
<p>This has been a very brief and, in many ways, high-level introduction to the wonderful world of CubeScript. I’ll apologize in advance to those of you who were already familiar with all this, but for those who were not, I hope you got something out of this overview, and that you’re now better prepared to delve into more complex topics in future posts.</p>
<p>In the near future, I’m planning to go over functions (i.e. the inner workings of <a class="fixedcode">[ ]</a> blocks), strings, lists, and GUI design. Let me know if I left anything out, and thanks for reading!</p>

<p>Check out the <a target="_blank" href="http://www.sauerworld.org/cubescript-tutorial-part-1-an-introduction/"> original post</a></p>
