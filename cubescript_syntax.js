//CubeScript Syntax Highlighting by Salatiel (@SalatielSauer)
//console.log("CubeScript Syntax Highlighting started");
var alltypes = ['consolecmds', 'guicmds', 'servercmds', 'scriptcmds', 'variables'];
var consolecmds = [
'bind', 'editbind', 'alias', 'push', 'local', 'quit', 'forward', 'backward', 'left', 'right', 'attack', 'jump', 'zoom', 'taunt',
'floatspeed', 'invmouse', 'sensitivity', 'sensitivityscale', 'maxfps', 'fov', 'zoomfov', 'zoominvel', 'zoomoutvel', 'zoomsens',
'zoomautosens', 'hudgun', 'hudgunsway', 'grass', 'grassdist', 'grassstep', 'shaderdetail', 'maxtexsize', 'texcompress',
'watersubdiv', 'waterlod', 'waterreflect', 'waterenvmap', 'waterrefract', 'waterfade', 'waterfallrefract', 'waterfallenv',
'reflectdist', 'reflectsize', 'maxreflect', 'reflectmms', 'envmapsize', 'maxparticledistance', 'particlesize', 'emitfps',
'flarelights', 'flarecutoff', 'flaresize', 'setpostfx', 'screenshot', 'musicvol', 'soundvol', 'soundbufferlen', 'scr_w', 'scr_h',
'screenres', 'gamma', 'hidestats', 'hidehud', 'maxroll', 'crosshairsize', 'crosshairfx', 'exec', 'history', 'keymap', 'textsave',
'echo', 'textload', 'textcopy'
];

var guicmds = [
'gui2d', 'menudistance', 'menuautoclose', 'guiautotab', 'cleargui', 'showgui', 'newgui', 'guilist', 'guispring', 'guititle',
'guibutton', 'guiimage', 'guitext', 'guitextbox', 'guibar', 'guislider', 'guicheckbox', 'guiradio', 'guitab', 'guifield',
"guialign", "guibitfield"
];

var servercmds = [
'startlistenserver', 'stoplistenserver', 'serverip', 'serverport', 'maxclients', 'serverbotlimit', 'publicserver', 'serverdesc',
'serverpass', 'adminpass', 'servermotd', 'updatemaster', 'mastername', 'restrictdemos', 'maxdemos', 'maxdemosize', 'ctftkpenalty'
];

var scriptcmds = [
'div', 'mod', 'strcmp', '!', '&&', 'strstr', 'substr', 'strreplace', 'strlen', 'min',
'max', 'rnd', 'if', 'loop', 'loopfiles', 'while', 'concat', 'concatword', 'format', 'at', 'listlen', 'listclients', 
'onrelease', 'result', "sleep"
];

var variables = [
'editing', 'getalias', 'getbind', 'geteditbind', 'getspecbind', 'getclientnum', 'getclientname', 'getclientteam', 'getname',
'getteam', 'getweapon', 'getfps', 'gettex', 'gettexname', 'isconnected', 'isspectator', "getseltex"
];

var nums = [
	"1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
];
var plainscript = document.getElementsByClassName("cubescript"); //get text from "cubescript" Class

function zoomout(id){
	plainscript[id].style = ('font-size: larger');

};

function zoomin(id){
	plainscript[id].style = ('font-size: 50px');

};

function addscriptoverlay(ps){
	var overlaycontent = "CubeScript <br> <i title='zoom out' class='fas fa-search-minus' onclick='zoomout(" + ps + ")'></i> <i title='zoom in' class='fas fa-search-plus' onclick='zoomin(" + ps + ")'></i> <i title='copy script' class='fas fa-file-download' onclick='window.getSelection().selectAllChildren(plainscript[" + ps + "])'></i>";
	plainscript[ps].innerHTML = (plainscript[ps].innerHTML + "<div class='scriptdiv-overlay'>" + overlaycontent + "</div>");

};

function setcssyntax(cstype, cmtype, type){
for (ic = 0; ic < plainscript.length; ic++) {
		var kw;
		//commands
		for (var kw = 0; kw < cmtype.length; kw++) {
			var thecommand = cmtype[kw];

			//not exactly
			if (type === 0){
				var thecommand2 = new RegExp(cmtype[kw], "g");
				var synscript = (plainscript[ic]).innerHTML.replace(thecommand2, "<span style='color:" + cstype + "'>" + thecommand + "</span>");
			};

			//exactly
			if (type === 1){
				var thecommand2 = new RegExp("\\b" + cmtype[kw] + "\\b", "g");
				var synscript = (plainscript[ic]).innerHTML.replace(thecommand2, "<span style='color:" + cstype + "'>" + thecommand + "</span>");
			};

			//by word
			if (cmtype === "["){
				var synscript = (plainscript[ic]).innerHTML.replace(/\[/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "]"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\]/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "("){
				var synscript = (plainscript[ic]).innerHTML.replace(/\(/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === ")"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\)/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "*"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\*/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === ">"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\>/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "<"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\</g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "||"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\|\|/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "="){
				var synscript = (plainscript[ic]).innerHTML.replace(/\=/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === ";"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\;/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "^f0"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\^f0/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "^f1"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\^f1/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "^f2"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\^f2/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "^f3"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\^f3/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "^f4"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\^f4/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "^f5"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\^f5/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "^f6"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\^f6/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};

			if (cmtype === "^f7"){
				var synscript = (plainscript[ic]).innerHTML.replace(/\^f7/g, "<span style='color:" + cstype + "'>" + cmtype + "</span>");
			};
			plainscript[ic].innerHTML = synscript; //set the modified text
		};	
	};
};
window.onload = function(){
	if(plainscript === null){}
	else {
		setcssyntax("#FF5722", nums, 1);
		setcssyntax("#00abff", consolecmds, 1);
		setcssyntax("#7de7f9", guicmds, 1);
		setcssyntax("#17ff0a", servercmds, 1);
		setcssyntax("#ea36e3", scriptcmds, 1);
		setcssyntax("#17ff0a", variables, 1);
		setcssyntax("#4c5ac5", "[");
		setcssyntax("#4c5ac5", "]");
		setcssyntax("#4c5ac5", "(");
		setcssyntax("#4c5ac5", ")");
		setcssyntax("#4c5ac5", '*');
		//disabled due to escape problems
		//setcssyntax("#4c5ac5", '>');
		//setcssyntax("#4c5ac5", '<');
		//setcssyntax("#4c5ac5", '=');
		setcssyntax("#4c5ac5", '||');
		setcssyntax("#4c5ac5", ';')
		setcssyntax("#29b83f", '^f0');
		setcssyntax("#4471b4", '^f1');
		setcssyntax("#cc9a34", '^f2');
		setcssyntax("#c53232", '^f3');
		setcssyntax("#686868", '^f4');
		setcssyntax("#892f89", '^f5');
		setcssyntax("#bd6001", '^f6');
		setcssyntax("white", '^f7');

		for (ic = 0; ic < plainscript.length; ic++) {
			addscriptoverlay(ic);
		};
	};

}
