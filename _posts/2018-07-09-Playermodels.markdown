---
layout: post
title:  "Playermodels Guide"
date:   2018-07-09 12:26:00
author: Salatiel
categories: tutorials
excerpt: Creating a Playermodel
tags: models
---

<h3>Adding a new playermodel</h3>

Files that need modification: <br>
src/fpsgame/render.cpp <br>
data/game_fps.cfg <br>
<br>
<p>File src/fpsgame/render.cpp, line 11:</p>
<p>VARFP(playermodel, 0, 0, 4, changedplayermodel());</p>
<p>4 is the default amount of playermodels (/playermodel 0...4), we will change this to 5.</p>
<p>VARFP(playermodel, 0, 0, 5, changedplayermodel());</p>
<p>So we can select the playermodel 5 using the /playermodel 5 command.</p>

<p>File src/fpsgame/render.cpp, line 49:</p>
<p>static const playermodelinfo playermodels[5] =</p>
<p>we will change this '[5]' to '[6]'.</p>
<p>static const playermodelinfo playermodels[6] =</p>

<p>File src/fpsgame/render.cpp, line 56:</p>
<p>{ "captaincannon", "captaincannon/blue"...</p>
<p>below that, on line 57, we'll add our playermodel (inside the braces of course).</p>
<img src="{{ base.url }}/content/images/posts/sauersauce_20182008-1.png"> <br>
<p>What each "block" represents:</p>
<p>
"playermodel name" <br>
"playermodel blue skin cfg folder" <br>
"playermodel red skin cfg folder" <br>
"playermodel hudguns folder" <br>
"playermodel quaddamage folder" <br>
"playermodel blue armor folder" <br>
"playermodel green armor folder" <br>
"playermodel yellow armor folder" <br>
"playermodel name" <br>
"playermodelname_blue" <br>
"playermodelname_red" <br>
</p>
