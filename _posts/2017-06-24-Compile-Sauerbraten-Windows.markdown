---
layout: post
title:  "How to compile Sauerbraten for Windows"
date:   2017-06-24 11:00:00
author: RaZgRiZ
categories: tutorials
excerpt: Compiling Sauerbraten for windows
tags: source-code
---

<h3>Downloads</h3>
<a href="http://www.codeblocks.org/downloads/26">CodeBlocks download<a/> get the version without minGW
<br>
<p>
<a href="http://tdm-gcc.tdragon.net/download">TDM64-GCC download</a> install wherever you prefer
<br>
<br>
<h3>Configurations</h3>
<p>
<br>
once both are installed, you'll want to open up codeblocks so we can configure the compiler <br>
on the menu bar up top, select Settings > Compiler <br>
GNU GCC should be set as the default, and it's what we'll be using in general as far as cube 2 projects go <br>
Now on the tabs right below, switch to "Toolchain executables" <br>
You'll want to set the path first and foremost where you installed tdm-gcc to. Auto detect should pick it up but if not, put it in manually. <br>
for example "C:\Program Files (x86)\CodeBlocks\TDM-GCC-64" <br>
Next, you'll want the following things in the fields below: <br>
x86_64-w64-mingw32-gcc.exe <br>
x86_64-w64-mingw32-g++.exe <br>
x86_64-w64-mingw32-g++.exe <br>
ar.exe <br>
windres.exe <br>
mingw32-make.exe <br>
Next, switch to the "Build options" tab, and set the number of cores your CPU has in "number of processes for parallel builds" <br>
got an i5? that's a 4. got an i7? that's an 8. <br>
lastly, switch to the "Other settings" tab on the right. <br>
set Compiler logging to Task description to avoid spam (optional) <br>
confirm changes and you're all set. </p>
