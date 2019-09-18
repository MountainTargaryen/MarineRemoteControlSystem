/**********************集控室车钟**************/

	var ttled1 = document.getElementsByClassName('ttelegraph1Led1');
	for(var i = 0; i < 5; i++) {
	ttled1[i].style.background = '#006400';
	}
	ttled1[5].style.background = 'yellow';
	var ttled2 = document.getElementsByClassName('ttelegraph1Led2');
	for(var i = 0; i < 5; i++) {
	ttled2[i].style.background = '#006400';
	}
	ttled2[5].style.background = 'yellow';

/*****************车钟杠杆******************/
var rmp = 0; //船速
var ttelegraph1lever = document.getElementById('ttelegraph1lever');
var ttext1 = document.getElementById('ttelegraph1Text1');
var disY = 0;
//ttelegraph1lever为集控室车钟界面的方向杠杆
ttelegraph1lever.onmousedown = function(ev) {
	var oEvent = ev || event;
	disY = oEvent.clientY - ttelegraph1lever.offsetTop;

	document.onmousemove = function(ev) {
		var oEvent = ev || event;

		var t = oEvent.clientY - disY;

		if(t < -200) {
			t = -200;
		} else if(t > 190) {
			t = 190;
		}

		if(t >= -200 && t < -180) {
			ttext1.innerHTML = 'Nav.Full';
			sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
		}
		if(t >= -180 && t < -140) {
			ttext1.innerHTML = 'Full';
			sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
		}
		if(t >= -140 && t < -100) {
			ttext1.innerHTML = 'Half';
			sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
		    sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);  
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
		}
		if(t >= -100 && t < -60) {
			ttext1.innerHTML = 'Slow';
			sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);  
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
		}
		if(t >= -60 && t < -20) {
			ttext1.innerHTML = 'Dead Slow';
			sdctx.drawImage(picMap, 1, 520, 57, 62, 320, 524, 72, 70); //方向车钟ahead位置
			sdctx.drawImage(picMap, 610, 145, 10, 18, 749, 726, 10, 20); //方向车钟start阀门通路
			sdctx.drawImage(picMap, 610, 145, 10, 18, 608, 726, 10, 20); //方向车钟ahead阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 605, 721, 231, 14, 490, 754, 295, 16);  
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门通路，方向车钟start两位三通阀门通路，方向车钟astern两位三通阀门关闭
			
		}
		if(t >= -20 && t < 20) {
			ttext1.innerHTML = 'Stop';
			
			sdctx.drawImage(picMap, 60, 520, 57, 62, 320, 524, 72, 70);//方向车钟stop位置
			sdctx.drawImage(picMap, 610, 145, 10, 18, 537, 726, 10, 20); //方向车钟stop阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 678, 726, 10, 20); //方向车钟astern阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			
			sdctx.drawImage(picMap, 605, 738, 220, 14, 490, 754, 280, 16);
			//方向车钟stop两位三通阀门通路，方向车钟ahead两位三通阀门关闭，方向车钟start两位三通阀门关闭，方向车钟astern两位三通阀门关闭	
		}
		if(t >= 20 && t < 60) {
			ttext1.innerHTML = 'D.Slow AST';
			sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			
			sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}
		if(t >= 60 && t < 100) {
			ttext1.innerHTML = 'Slow AST';
			sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}
		if(t >= 100 && t < 140) {
			ttext1.innerHTML = 'Half AST';
			sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
		    sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}
		if(t >= 140 && t < 180) {
			ttext1.innerHTML = 'Full AST';
			sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}
		if(t >= 180 && t < 200) {
			ttext1.innerHTML = 'Nav.Full AST';
			sdctx.drawImage(picMap, 119, 520, 57, 62, 320, 524, 72, 70); //方向车钟astern位置
			sdctx.drawImage(picMap, 600, 145, 9, 18, 749, 726, 10, 20); //方向车钟start阀门关闭
			sdctx.drawImage(picMap, 600, 145, 9, 18, 608, 726, 10, 20); //方向车钟ahead阀门关闭
			sdctx.drawImage(picMap, 610, 145, 10, 18, 678, 726, 10, 20); //方向车钟astern阀门通路
			sdctx.drawImage(picMap, 600, 145, 9, 18, 537, 726, 10, 20); //方向车钟stop阀门关闭
			sdctx.drawImage(picMap, 826, 721, 231, 14, 490, 754, 295, 16); 
			//方向车钟stop两位三通阀门关闭，方向车钟ahead两位三通阀门关闭，方向车钟astern两位三通阀门通路，方向车钟start两位三通阀门通路
		}

		ttelegraph1lever.style.top = t + 'px';

	};

	document.onmouseup = function() {
		document.onmousemove = null;
		document.onmouseup = null;
	};

	return false;
};

var ttelegraph2lever = document.getElementById('ttelegraph2lever');
var ttelegraph2watch = document.getElementById('ttelegraph2watch');
var trmp=0;
ttelegraph2lever.onmousedown = function(ev) {
	var oEvent = ev || event;

	disY = oEvent.clientY - ttelegraph2lever.offsetTop;

	document.onmousemove = function(ev) {
		var oEvent = ev || event;

		var t = oEvent.clientY - disY;

		if(t < -225) {
			t = -225;
		} else if(t > 250) {
			t = 250;
		}

		ttelegraph2lever.style.top = t + 'px';
		var a = 0;
		if(t >= -225 && t < -40) {
			a = parseInt(-(t + 40) * 82 / 185);
			ttelegraph2watch.innerHTML = a;
			speedLevelChange(a);
		};
		if(t >= -40 && t < 0) {
			ttelegraph2watch.innerHTML = 'START';
			sdctx.drawImage(picMap, 306, 521, 123, 89, 72, 488, 155, 100); //速度车钟start位置

		};
		if(t >= 0 && t < 40) {
			ttelegraph2watch.innerHTML = 'STOP';
			sdctx.drawImage(picMap, 180, 521, 123, 89 , 73 , 488, 155, 100); //速度车钟stop位置
		};
		if(t >= 40 && t < 70) {
			ttelegraph2watch.innerHTML = 'START';
			sdctx.drawImage(picMap, 306, 521, 123, 89, 72, 488, 155, 100); //速度车钟start位置
		};
		if(t >= 70 && t < 250) {
			a = parseInt(-(t - 70) * 78 / 180);
			ttelegraph2watch.innerHTML = a;
			speedLevelChange(-a);
		};
		trmp = a;
		if(trmp < 10 && trmp > -10) {
			trmp = 0;
		}
		//yd=a;
		
		/*
		//驾驶台杠杆随着集控室车钟的变化而变化
		bpointerLever1(rmp, 110, 230, 'bCanvas1');
		//驾驶室表盘指针及示数随着集控室车钟的变化而变化
		pointerRotate(rmp * 0.75, 'bMERPMPointer');
		//集控室杠杆随着集控室车钟的变化而变化
		bpointerLever1(rmp, 110, 230, 'cCanvas1');
		//集控室表盘指针及示数随着集控室车钟的变化而变化
		pointerRotate(rmp * 0.75, 'cMERPMPointer');

		innerChange(rmp, 'RMP', 'bMERPM');
		innerChange(rmp, 'RMP', 'cMERPM');
		if(rmp > 0) {
			innerChange('', 'ahead', 'bState');
			innerChange('', 'ahead', 'cState');
		}
		if(rmp < 0) {
			innerChange('', 'astern', 'bState');
			innerChange('', 'astern', 'cState');
		}
		if(rmp == 0) {
			innerChange('', 'stop', 'bState');
			innerChange('', 'stop', 'cState');
		}*/
	};

	document.onmouseup = function() {
		document.onmousemove = null;
		document.onmouseup = null;
	};

	return false;
};

//驾控台与集控室 切换手柄
var thandle = document.getElementById('thandle');
var thandlex = 0; //杠杆手柄左右标志位，默认集控室
thandle.onclick = function() {
	if(thandlex  == 0) {
		this.style.transformOrigin = '33% 30%';
		this.style.transform = 'rotate(' + 90 + 'deg)';
		
		thandlex += 1;
	} else {
		this.style.transformOrigin = '33% 30%';
		this.style.transform = 'rotate(' + 0 + 'deg)';
		
		thandlex -= 1;
	}
}