var consolecmds = [
'bind', 'editbind', 'alias', 'push', 'local', 'quit', 'forward', 'backward', 'left', 'right', 'attack', 'jump', 'zoom', 'taunt',
'floatspeed', 'invmouse', 'sensitivity', 'sensitivityscale', 'maxfps', 'fov', 'zoomfov', 'zoominvel', 'zoomoutvel', 'zoomsens',
'zoomautosens', 'hudgun', 'hudgunsway', 'grass', 'grassdist', 'grassstep', 'shaderdetail', 'maxtexsize', 'texcompress',
'watersubdiv', 'waterlod', 'waterreflect', 'waterenvmap', 'waterrefract', 'waterfade', 'waterfallrefract', 'waterfallenv',
'reflectdist', 'reflectsize', 'maxreflect', 'reflectmms', 'envmapsize', 'maxparticledistance', 'particlesize', 'emitfps',
'flarelights', 'flarecutoff', 'flaresize', 'setpostfx', 'screenshot', 'musicvol', 'soundvol', 'soundbufferlen', 'scr_w', 'scr_h',
'screenres', 'gamma', 'hidestats', 'hidehud', 'maxroll', 'crosshairsize', 'crosshairfx', 'exec', 'history', 'keymap'
];

var guicmds = [
'gui2d', 'menudistance', 'menuautoclose', 'guiautotab', 'cleargui', 'showgui', 'newgui', 'guilist', 'guispring', 'guititle',
'guibutton', 'guiimage', 'guitext', 'guitextbox', 'guibar', 'guislider', 'guicheckbox', 'guiradio', 'guitab', 'guifield'
];

var servercmds = [
'startlistenserver', 'stoplistenserver', 'serverip', 'serverport', 'maxclients', 'serverbotlimit', 'publicserver', 'serverdesc',
'serverpass', 'adminpass', 'servermotd', 'updatemaster', 'mastername', 'restrictdemos', 'maxdemos', 'maxdemosize', 'ctftkpenalty'
];

var variables = [
'editing', 'getalias', 'getbind', 'geteditbind', 'getspecbind', 'getclientnum', 'getclientname', 'getclientteam', 'getname',
'getteam', 'getweapon', 'getfps', 'gettex', 'name', 'isconnected', 'isspectator', 'tex'
];

var plainscript = document.getElementById("cubescript"); //get text from "cubescript" iD

document.getElementById("cubescript").innerHTML = plainscript.innerHTML.replace(new RegExp(commandtoreplace, 'g'), "<span class='cs_guicmds'>newgui</span>");
