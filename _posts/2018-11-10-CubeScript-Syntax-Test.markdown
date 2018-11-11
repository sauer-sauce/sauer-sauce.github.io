---
layout: post
title:  "CubeScript Syntax Highlighting test"
date:   2018-11-10 10:35:30
author: Salatiel
categories: community
excerpt: "..."
tags: cubescript
---

<div class="cubescript">

//this is a comment

newgui HelloWorld [

	guibutton "^f0Hello!" [sleep 1000 [echo "^f5world!"]]
	guibar
	guibutton "^f3Close" [cleargui] "exit"
]

</div>

<div class="cubescript">

//FavMaps by Salatiel (10/03/2018)

addfavmap = [ 
    if (=s $arg1 "")[echo "^f7[FavMaps]: Missing ^f2Category"][
        if (=s $mapname "")[favmaps_mapname = "untitled"][favmaps_mapname = (mapname)]
        if (=s $favmaps_mapfile "")[favmaps_mapfile = "base"][favmaps_mapfile = $arg1]

        sleep 20 [favmaps_savemapname ;    favmaps_refreshfile] ;

        echo (concatword "^f7[FavMaps]: Added ^f1" $arg1 "/^f7" $favmaps_mapname)
    ]
]

//Define
favmaps_mapname = "untitled"
favmaps_mapfile = "base" 
favmaps_configs = 1
favmaps_sdirect = 1

favmaps = [showgui favmaps]
favmaps_refreshfile = [
	if (=s $favmaps_mapfile "")[
		favmaps_mapfile = "base"
		if (=s $favmaps_mapname "")[favmaps_mapname = "untitled"]
	][
		textsave (concatword "packages/favmaps/" $favmaps_mapfile ".dir")
		(concatword "favmaps_thefile-" $favmaps_mapfile) = 0
	]
]
favmaps_savemapname = [
	if (=s $favmaps_mapfile "")[
		favmaps_mapfile = "base"
		if (=s $favmaps_mapname "")[favmaps_mapname = "untitled"]
	][
		textsave (concatword "packages/favmaps/" $favmaps_mapfile "/" $favmaps_mapname ".ogz")
	]
]

newgui favmaps [
	guistayopen [
		guialign -1 [guitext "^f1mapname:	" 0; guifield favmaps_mapname -15 ; guibutton "^f0 Save" [favmaps_savemapname] 0]
		guialign -1 [guitext "^f1mapfile:	" 0; guifield favmaps_mapfile -15 ; guibutton "^f0 Refresh" [favmaps_refreshfile] 0]
		//guialign -1 [guibitfield "^f0Show configs" favmaps_configs 1]
		//if (= $favmaps_configs 1)[
			guialign -1 [guibitfield "^f1Show Directory" favmaps_sdirect 1]
		//]
		guibar
		
		loopfiles favmaps_thefile "packages/favmaps" "dir" [
			guialign -1 [guibitfield (concatword "^f6" $favmaps_thefile) (concatword "favmaps_thefile-" $favmaps_thefile) 1]
			if (= $(concatword "favmaps_thefile-" $favmaps_thefile) 1)[
				loopfiles favmaps_themap (concatword "packages/favmaps/" $favmaps_thefile) "ogz" [
					guialign -1 [
						guitext "^f7-> " 0;
						if (= $favmaps_sdirect 1)[
							guibutton (concatword "^f1packages/base/^f7" $favmaps_themap ".ogz")[map @favmaps_themap] "arrow_fw"
						][guibutton (concatword "^f7" $favmaps_themap ".ogz")[map @favmaps_themap] "arrow_fw"]
					]
				]
			]	
		]
	]
] 0

</div>
