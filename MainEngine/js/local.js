/**********************机旁**************/

var lbox1c = document.getElementById('lbox1canvas');
var lbox1ctx = lbox1c.getContext("2d");
lbox1ctx.font = '18px Arial';
lbox1ctx.fillStyle = '#FFFF00';
lbox1ctx.fillText('AHEAD', 78, 33);
lbox1ctx.fillText('ASTERN', 235, 33);
lbox1ctx.fillText('SHUT DOWN', 78, 82);
lbox1ctx.beginPath();
lbox1ctx.font = '14px Arial';
lbox1ctx.fillStyle = '#FFFF00';
lbox1ctx.fillText('TURNING GEAR', 80, 120);
lbox1ctx.fillText('ENGAGED', 80, 135);
lbox1ctx.fillText('BRIDGE', 235, 72);
lbox1ctx.fillText('CONTROL', 235, 87);
lbox1ctx.fillText('AUX BLOWER', 80, 168);
lbox1ctx.fillText('RUNNING', 80, 183);
lbox1ctx.fillText('CONTROL ROOM', 235, 120);
lbox1ctx.fillText('CONTROL', 235, 135);
lbox1ctx.fillText('EMERGENCY', 235, 168);
lbox1ctx.fillText('CONTROL', 235, 183);
lbox1ctx.beginPath();
lbox1ctx.font = '13px Arial';
lbox1ctx.fillStyle = '#FFFFFF';
lbox1ctx.fillText('CANCEL', 91, 225);
lbox1ctx.fillText('SHUT DOWN', 77, 240);
lbox1ctx.fillText('LAMP', 219, 225);
lbox1ctx.fillText('TEST', 219, 240);

//扳手转动
var lhandle1 = document.getElementById('lhandle1');
var lhandle1x = 0; //标识位 0为REMOTE 1为LOCAL
lhandle1.onclick = function() {
	if(lhandle1x % 2 == 0) {
		this.style.transformOrigin = '33% 30%';
		this.style.transform = 'rotate(' + 90 + 'deg)';
		lhandle1x += 1;
	} else {
		this.style.transformOrigin = '33% 30%';
		this.style.transform = 'rotate(' + 0 + 'deg)';
		lhandle1x += 1;
	}

}

var lhandle2 = document.getElementById('lhandle2');
var lhandle2x = 0; //标识位 0为REMOTE 1为LOCAL
lhandle2.onclick = function() {
	if(lhandle2x % 2 == 0) {
		this.style.transformOrigin = '33% 30%';
		this.style.transform = 'rotate(' + 90 + 'deg)';
		lhandle2x += 1;
	} else {
		this.style.transformOrigin = '33% 30%';
		this.style.transform = 'rotate(' + 0 + 'deg)';
		lhandle2x += 1;
	}

}
//摇柄
var lwheel1 = document.getElementById('lwheel1');
var lwheel2 = document.getElementById('lwheel2');
var lwheelx1 = 0;
var lwheelx2 = 0;
var lwheelx2x = 6; //表盘刻度变化系数

function lprintPancel(a) {
	var lw2c = document.getElementById("lwheel2canvas");
	var lw2ctx = lw2c.getContext("2d");
	lw2ctx.clearRect(0, 0, 190, 210);
	lw2ctx.beginPath();
	lw2ctx.rect(58, 197 - 15 * a, 22, 15 * a);
	lw2ctx.fillStyle = "red"
	lw2ctx.fill();
}
lprintPancel(lwheelx2x);

var lbuttonStart = document.getElementById('lbuttonStart');
var lbuttonStop = document.getElementById('lbuttonStop');
lbuttonStart.onclick = function() {
	lbuttonStart.style.backgroundColor = "green";
	lbuttonStop.style.backgroundColor = "grey";
}
lbuttonStop.onclick = function() {
	lbuttonStop.style.backgroundColor = "#B40404";
	lbuttonStart.style.backgroundColor = "grey";
}

var lwheel1Left = document.getElementById('lwheel1Left');
lwheel1Left.onmousemove = function() {
	this.style.cursor = "url('img/cursorLeft.ico'), auto";
}
var lwheel1Right = document.getElementById('lwheel1Right');
lwheel1Right.onmousemove = function() {
	this.style.cursor = "url('img/cursorRight.ico'), auto";
}
lwheel1Left.onclick = function() {
	lwheelx1 += 45;
	lwheel1.style.transform = 'rotate(' + lwheelx1 + 'deg)';
}
lwheel1Right.onclick = function() {
	lwheelx1 -= 45;
	lwheel1.style.transform = 'rotate(' + lwheelx1 + 'deg)';
}

var lwheel2Left = document.getElementById('lwheel2Left');
lwheel2Left.onmousemove = function() {
	this.style.cursor = "url('img/cursorLeft.ico'), auto";
}
var lwheel2Right = document.getElementById('lwheel2Right');
lwheel2Right.onmousemove = function() {
	this.style.cursor = "url('img/cursorRight.ico'), auto";
}
lwheel2Left.onclick = function() {
	lwheelx2 += 45;
	lwheel2.style.transform = 'rotate(' + lwheelx2 + 'deg)';
	lwheelx2x -= 1;
	if(lwheelx2x <= 0) {
		lwheelx2x = 0;
	}
	lprintPancel(lwheelx2x);
}
lwheel2Right.onclick = function() {
	lwheelx2 -= 45;
	lwheel2.style.transform = 'rotate(' + lwheelx2 + 'deg)';
	lwheelx2x += 1;
	if(lwheelx2x >= 11) {
		lwheelx2x = 11;
	}
	lprintPancel(lwheelx2x);
}
//*********************控制面板手柄标识
var cpc = document.getElementById('cpCanvas');
var cpctx = cpc.getContext("2d");
cpctx.strokeStyle = "white";
cpctx.strokeText("STOP", 90, 45);
cpctx.strokeText("MAN", 25, 70);
cpctx.strokeText("AUTO", 145, 70);