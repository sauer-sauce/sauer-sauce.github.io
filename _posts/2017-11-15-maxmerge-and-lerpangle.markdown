---
layout: post
title:  "Maxmerge and Lerpangle commands"
date:   2017-11-15 15:12:00
author: "TristamK"
categories: "tutorials"
excerpt: "About /maxmerge and /lerpangle commands  - TristamK"
tags: commands
---
 <strong>/maxmerge</strong> determines the maximum connection distance  of polygons
<br>
Default: <strong>/maxmerge 6</strong>
<br>
The higher you set this var the connection distance longer. 
<br>

<div class="contentbox">
Pros:
	<li> Disceasing amount of polygons (wtr) on your map</li>
	<li> Possible discresaing output file of your map.</li>
	<li> If map big enough it can increase fps on your map (see Examples).</li>
</div>

<div class="contentbox">
Cons:
	<li> Discreasing amount of polygons doen't always mean that it will be the same to your fps. FPS can be lower after this command (- 1-5 fps. Minor influence).</li>
	<li> Possible increasing load time of map.</li>
	<li> Possible to make fps of your map unstable a bit. </li>
</div>

<strong>Examples</strong>
/maxmerge = 6 <br>
<img src="{{ base.url }}/content/images/posts/sauersauce_20171115-1.jpg"> <br>
/maxmerge = 12 <br>
<img src="{{ base.url }}/content/images/posts/sauersauce_20171115-1.jpg"> <br>

 <strong>/lerpangle</strong> controls whether surface normals are interpolated for lighting. <br>
Normals are sampled at each vertex of the surface. If the angle between two surfaces' normals (which meet at a vertex) is less than A, then the resulting normal will be the average of the two. Normals are then later interpolated between the normals at the vertexes of a surface. <br>
Default: <strong>/lerpangle 44</strong>

<div class="contentbox">
Pros:
	<li> Very low size of file. If you can discrease size (20-40%?!) of map why don't use it ?</li>
	<li> Speed of light calculating inscreased at least on 20%</li>
</div>

<div class="contentbox">
Cons:
	<li> Possible increasing load time of map</li>
	<li> Possible unstable FPS on map (need more tests maybe)</li>
	<li> Possible light errors</li>
	<li> On same maps this variable doesn't work at all and even can broke light maps</li>
</div>

