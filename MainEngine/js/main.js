//阻止右键菜单
document.oncontextmenu = function(ev) {
	var oEvent = ev || event;
	return false;
}
//获取导航
var ahomepage = document.getElementById('ahomepage');
var abridge = document.getElementById('abridge');
var acontrolRoom = document.getElementById('acontrolRoom');
var acontrolPanel = document.getElementById('acontrolPanel');
var alocal = document.getElementById('alocal');
var aschematicDiagram = document.getElementById('aschematicDiagram');
var athreeD = document.getElementById('athreeD');
var atelegraph = document.getElementById('atelegraph');
var adiagram = document.getElementById('adiagram');
//获取页面内容
var start = document.getElementById('start');
var homepage = document.getElementById('homepage');
var bridge = document.getElementById('bridge');
var controlRoom = document.getElementById('controlRoom');
var controlPanel = document.getElementById('controlPanel');
var local = document.getElementById('local');
var schmaticDiagram = document.getElementById('schematicDiagram');
var threeD = document.getElementById('threeD');
var telegraph = document.getElementById('telegraph');
var diagram = document.getElementById('diagram');
var oldColor = '';
//鼠标经过导航时背景变蓝，离开后恢复深蓝
ahomepage.onmouseover = function() {
	oldColor = this.style.background;
	this.style.background = '#819FF7';
}
ahomepage.onmouseout = function() {
	this.style.background = oldColor;
}
abridge.onmouseover = function() {
	this.style.background = '#819FF7';
}
abridge.onmouseout = function() {
	this.style.background = oldColor;
}
acontrolRoom.onmouseover = function() {
	this.style.background = '#819FF7';
}
acontrolRoom.onmouseout = function() {
	this.style.background = oldColor;
}
acontrolPanel.onmouseover = function() {
	this.style.background = '#819FF7';
}
acontrolPanel.onmouseout = function() {
	this.style.background = oldColor;
}
alocal.onmouseover = function() {
	this.style.background = '#819FF7';
}
alocal.onmouseout = function() {
	this.style.background = oldColor;
}
aschematicDiagram.onmouseover = function() {
	this.style.background = '#819FF7';
}
aschematicDiagram.onmouseout = function() {
	this.style.background = oldColor;
}
athreeD.onmouseover = function() {
	this.style.background = '#819FF7';
}
athreeD.onmouseout = function() {
	this.style.background = oldColor;
}
atelegraph.onmouseover = function() {
	this.style.background = '#819FF7';
}
atelegraph.onmouseout = function() {
	this.style.background = oldColor;
}
adiagram.onmouseover = function() {
	this.style.background = '#819FF7';
}
adiagram.onmouseout = function() {
	this.style.background = oldColor;
}
//画面切换函数
ahomepage.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "block";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";

	ahomepage.style.backgroundColor = "#000";
	abridge.style.backgroundColor = "darkblue";
	acontrolRoom.style.backgroundColor = "darkblue";
	acontrolPanel.style.backgroundColor = "darkblue";
	alocal.style.backgroundColor = "darkblue";
	aschematicDiagram.style.backgroundColor = "darkblue";
	athreeD.style.backgroundColor = "darkblue";
	atelegraph.style.backgroundColor = "darkblue";
	adiagram.style.backgroundColor = "darkblue";
}

abridge.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "none";
	bridge.style.display = "block";
	controlRoom.style.display = "none";
	controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";


	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "#000";
	acontrolRoom.style.backgroundColor = "darkblue";
	acontrolPanel.style.backgroundColor = "darkblue";
	alocal.style.backgroundColor = "darkblue";
	aschematicDiagram.style.backgroundColor = "darkblue";
	athreeD.style.backgroundColor = "darkblue";
	atelegraph.style.backgroundColor = "darkblue";
	adiagram.style.backgroundColor = "darkblue";
}
acontrolRoom.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "block";
	controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";


	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "darkblue";
	acontrolRoom.style.backgroundColor = "#000";
	acontrolPanel.style.backgroundColor = "darkblue";
	alocal.style.backgroundColor = "darkblue";
	aschematicDiagram.style.backgroundColor = "darkblue";
	athreeD.style.backgroundColor = "darkblue";
	atelegraph.style.backgroundColor = "darkblue";
	adiagram.style.backgroundColor = "darkblue";
}
acontrolPanel.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	controlPanel.style.display = "block";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";


	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "darkblue";
	acontrolRoom.style.backgroundColor = "darkblue";
	acontrolPanel.style.backgroundColor = "#000";
	alocal.style.backgroundColor = "darkblue";
	aschematicDiagram.style.backgroundColor = "darkblue";
	athreeD.style.backgroundColor = "darkblue";
	atelegraph.style.backgroundColor = "darkblue";
	adiagram.style.backgroundColor = "darkblue";
}
alocal.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	controlPanel.style.display = "none";
	local.style.display = "block";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";


	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "darkblue";
	acontrolRoom.style.backgroundColor = "darkblue";
	acontrolPanel.style.backgroundColor = "darkblue";
	alocal.style.backgroundColor = "#000";
	aschematicDiagram.style.backgroundColor = "darkblue";
	athreeD.style.backgroundColor = "darkblue";
	atelegraph.style.backgroundColor = "darkblue";
	adiagram.style.backgroundColor = "darkblue";
}
aschematicDiagram.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "block";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";


	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "darkblue";
	acontrolRoom.style.backgroundColor = "darkblue";
	acontrolPanel.style.backgroundColor = "darkblue";
	alocal.style.backgroundColor = "darkblue";
	aschematicDiagram.style.backgroundColor = "#000";
	athreeD.style.backgroundColor = "darkblue";
	atelegraph.style.backgroundColor = "darkblue";
	adiagram.style.backgroundColor = "darkblue";
}
athreeD.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "block";
	telegraph.style.display = "none";
	diagram.style.display = "none";


	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "darkblue";
	acontrolRoom.style.backgroundColor = "darkblue";
	acontrolPanel.style.backgroundColor = "darkblue";
	alocal.style.backgroundColor = "darkblue";
	aschematicDiagram.style.backgroundColor = "darkblue";
	athreeD.style.backgroundColor = "#000";
	atelegraph.style.backgroundColor = "darkblue";
	adiagram.style.backgroundColor = "darkblue";
}
atelegraph.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "block";
	diagram.style.display = "none";


	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "darkblue";
	acontrolRoom.style.backgroundColor = "darkblue";
	acontrolPanel.style.backgroundColor = "darkblue";
	alocal.style.backgroundColor = "darkblue";
	aschematicDiagram.style.backgroundColor = "darkblue";
	athreeD.style.backgroundColor = "darkblue";
	atelegraph.style.backgroundColor = "#000";
	adiagram.style.backgroundColor = "darkblue";
}

adiagram.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "block";


	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "darkblue";
	acontrolRoom.style.backgroundColor = "darkblue";
	acontrolPanel.style.backgroundColor = "darkblue";
	alocal.style.backgroundColor = "darkblue";
	aschematicDiagram.style.backgroundColor = "darkblue";
	athreeD.style.backgroundColor = "darkblue";
	atelegraph.style.backgroundColor = "darkblue";
	adiagram.style.backgroundColor = "#000";
}

//初始化，显示校船图片
var astart = function() {
	start.style.display = "block";
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";

	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "darkblue";
	acontrolRoom.style.backgroundColor = "darkblue";
	acontrolPanel.style.backgroundColor = "darkblue";
	alocal.style.backgroundColor = "darkblue";
	aschematicDiagram.style.backgroundColor = "darkblue";
}

astart();

//获取主界面图片内部导航
var hbridge = document.getElementById('hbridge');
var hcontrolRoom = document.getElementById('hcontrolRoom');
var hcontrolPanel = document.getElementById('hcontrolPanel');
var hlocal = document.getElementById('hlocal');
var htelegraph = document.getElementById('htelegraph');

//主界面图片内部导航切换函数
hbridge.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "none";
	bridge.style.display = "block";
	controlRoom.style.display = "none";
	controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "none";
	threeD.style.display = "none";
	diagram.style.display = "none";

	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "#000";
	acontrolRoom.style.backgroundColor = "darkblue";
	acontrolPanel.style.backgroundColor = "darkblue";
	alocal.style.backgroundColor = "darkblue";
	aschematicDiagram.style.backgroundColor = "darkblue";
	atelegraph.style.backgroundColor = "darkblue";
	athreeD.style.backgroundColor = "darkblue";
	adiagram.style.backgroundColor = "darkblue";
}
hcontrolRoom.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "block";
	controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "none";
	threeD.style.display = "none";
	diagram.style.display = "none";

	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "darkblue";
	acontrolRoom.style.backgroundColor = "#000";
	acontrolPanel.style.backgroundColor = "darkblue";
	alocal.style.backgroundColor = "darkblue";
	aschematicDiagram.style.backgroundColor = "darkblue";
	atelegraph.style.backgroundColor = "darkblue";
	athreeD.style.backgroundColor = "darkblue";
	adiagram.style.backgroundColor = "darkblue";
}
hcontrolPanel.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	controlPanel.style.display = "block";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "none";
	threeD.style.display = "none";
	diagram.style.display = "none";

	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "darkblue";
	acontrolRoom.style.backgroundColor = "darkblue";
	acontrolPanel.style.backgroundColor = "#000";
	alocal.style.backgroundColor = "darkblue";
	aschematicDiagram.style.backgroundColor = "darkblue";
	atelegraph.style.backgroundColor = "darkblue";
	athreeD.style.backgroundColor = "darkblue";
	adiagram.style.backgroundColor = "darkblue";
}
hlocal.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	controlPanel.style.display = "none";
	local.style.display = "block";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "none";
	threeD.style.display = "none";
	diagram.style.display = "none";

	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "darkblue";
	acontrolRoom.style.backgroundColor = "darkblue";
	acontrolPanel.style.backgroundColor = "darkblue";
	alocal.style.backgroundColor = "#000";
	aschematicDiagram.style.backgroundColor = "darkblue";
	atelegraph.style.backgroundColor = "darkblue";
	athreeD.style.backgroundColor = "darkblue";
	adiagram.style.backgroundColor = "darkblue";
}
htelegraph.onclick = function() {
	start.style.display = "none";
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "block";
	threeD.style.display = "none";
	diagram.style.display = "none";

	ahomepage.style.backgroundColor = "darkblue";
	abridge.style.backgroundColor = "darkblue";
	acontrolRoom.style.backgroundColor = "darkblue";
	acontrolPanel.style.backgroundColor = "darkblue";
	alocal.style.backgroundColor = "darkblue";
	aschematicDiagram.style.backgroundColor = "darkblue";
	atelegraph.style.backgroundColor = "#000";
	athreeD.style.backgroundColor = "darkblue";
	adiagram.style.backgroundColor = "darkblue";
}

/*主界面淡入淡出*/
var hPic = document.getElementById('hpicture');
var hPiced = hPic.getElementsByTagName('img');

for(var i = 0; i < hPiced.length; i++) {

	hPiced[i].onmouseover = function() {
		startMove(this, 'opacity', 100);
	};
	hPiced[i].onmouseout = function() {
		startMove(this, 'opacity', 0);
	};
}