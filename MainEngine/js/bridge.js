//*************驾驶台画表盘
printPanel(250, 280, 150, 130, 'bCanvas');
printPanel(680, 225, 120, 100, 'bCanvas');
printPanel(680, 470, 120, 100, 'bCanvas');
printScale(250, 280, 150, -120, 120, 'bCanvas');
printScale(680, 225, 117, 0, 40, 'bCanvas');
printScale(680, 470, 117, 0, 100, 'bCanvas');

var bc = document.getElementById('bCanvas');
var bctx = bc.getContext("2d");
bctx.font = "25px Arial ";
bctx.fontWeight = 300;
bctx.fillStyle = "white"
bctx.fillText("ME RPM", 215, 80);
bctx.fillText("START AIR PRESS", 600, 50);
bctx.fillText("Actuator pos feedback", 580, 300);

/***********************临时*************/
pointerRotate(27, 'bStartAirPressPointer') ;
pointerRotate(-70, 'bActuatorPosFeedbackPointer') ;
pointerRotate(27, 'cStartAirPressPointer') ;
pointerRotate(-43, 'cActuatorPosFeedbackPointer') ;


/**********************驾驶台电报系统加车钟**************/
var btled1 = document.getElementsByClassName('btelegraph1Led1');
for(var i = 0; i < 5; i++) {
	btled1[i].style.background = '#006400';
}
btled1[5].style.background = 'yellow';
var btled2 = document.getElementsByClassName('btelegraph1Led2');
for(var i = 0; i < 5; i++) {
	btled2[i].style.background = '#006400';
}
btled2[5].style.background = 'yellow';

/************************电报系统杠杆设置**************************/
var bstate=document.getElementById('bState');
var btelegraph1lever = document.getElementById('btelegraph1lever');//btelegraph1lever为驾控台车钟界面的方向杠杆
var btext1 = document.getElementById('btelegraph1Text1');
var disY = 0;
var brmp=0;


btelegraph1lever.onmousedown = function(ev) {
	var oEvent = ev || event;
	disY = oEvent.clientY - btelegraph1lever.offsetTop;
	
	document.onmousemove = function(ev) {
		var oEvent = ev || event;

		var t = oEvent.clientY - disY;
		
		if(t < -45) {
			t = -45;
		} else if(t > 275) {
			t = 275;
		}
		
		var a = 0;      //计算油门速度
		if(t>=-45 && t<95){
			a=(95-t)*82/140;
		}
		if(t>125 && t>275){
			a=82-(t-125)*82/150;
			a=-a;
		}
		
		brmp=a;
		
		if(t >= -45 && t < -25) {
			btext1.innerHTML = 'Nav.Full';LED();//LED为led初始化函数
			ttled1[0].style.background = '#00FF00';ttled2[0].style.background = '#00FF00';
			btled1[0].style.background = '#00FF00';btled2[0].style.background = '#00FF00';
			sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
		}
		if(t >= -25 && t < 5) {
			btext1.innerHTML = 'Full';LED();
			ttled1[1].style.background = '#00FF00';ttled2[1].style.background = '#00FF00';
			btled1[1].style.background = '#00FF00';btled2[1].style.background = '#00FF00';
			sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
		}
		if(t >= 5 && t < 35) {
			btext1.innerHTML = 'Half';LED();
			ttled1[2].style.background = '#00FF00';ttled2[2].style.background = '#00FF00';
			btled1[2].style.background = '#00FF00';btled2[2].style.background = '#00FF00';
			sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
		    sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);  
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
		}
		if(t >= 35 && t < 65) {
			btext1.innerHTML = 'Slow';LED();
			ttled1[3].style.background = '#00FF00';ttled2[3].style.background = '#00FF00';
			btled1[3].style.background = '#00FF00';btled2[3].style.background = '#00FF00';
			sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);  
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
		}
		if(t >= 65 && t < 95) {
			btext1.innerHTML = 'Dead Slow';LED();
			ttled1[4].style.background = '#00FF00';ttled2[4].style.background = '#00FF00';
			btled1[4].style.background = '#00FF00';btled2[4].style.background = '#00FF00';
			sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);  
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
			
		}
		if(t >= 95 && t < 125) {
			btext1.innerHTML = 'Stop';LED();
			sdctx.drawImage(picMap, 60, 520, 57, 62, 320, 524, 72, 70);//方向车钟stop位置
			sdctx.drawImage(picMap, 610, 145, 10, 18, 537, 726, 10, 20); //方向车钟stop阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			
			sdctx.drawImage(picMap, 605, 738, 220, 14, 490, 754, 280, 16);
			//方向车钟stop两位三通阀门通路，方向车钟ahead两位三通阀门关闭，方向车钟start两位三通阀门关闭，方向车钟astern两位三通阀门关闭	
		}
		if(t >= 125 && t <155) {
			btext1.innerHTML = 'D.Slow AST';LED();
			ttled1[6].style.background = '#8B0000';ttled2[6].style.background = '#8B0000';
			btled1[6].style.background = '#8B0000';btled2[6].style.background = '#8B0000';
			sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			
			sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}
		if(t >= 155 && t < 185) {
			btext1.innerHTML = 'Slow AST';LED();
			ttled1[7].style.background = '#8B0000';ttled2[7].style.background = '#8B0000';
			btled1[7].style.background = '#8B0000';btled2[7].style.background = '#8B0000';
			sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}
		if(t >= 185 && t < 215) {
			btext1.innerHTML = 'Half AST';LED();
			ttled1[8].style.background = '#8B0000';ttled2[8].style.background = '#8B0000';
			btled1[8].style.background = '#8B0000';btled2[8].style.background = '#8B0000';
			sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
		    sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}
		if(t >= 215 && t < 245) {
			btext1.innerHTML = 'Full AST';LED();
			ttled1[9].style.background = '#8B0000';ttled2[9].style.background = '#8B0000';
			btled1[9].style.background = '#8B0000';btled2[9].style.background = '#8B0000';
			sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}
		if(t >= 245 && t < 275) {
			btext1.innerHTML = 'Nav.Full AST';LED();
			ttled1[10].style.background = '#8B0000';ttled2[10].style.background = '#8B0000';
			btled1[10].style.background = '#8B0000';btled2[10].style.background = '#8B0000';
			sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}
		btelegraph1lever.style.top = t-450 + 'px';


	};

	document.onmouseup = function() {
		document.onmousemove = null;
		document.onmouseup = null;
	};

	return false;
};