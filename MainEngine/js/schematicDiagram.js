var sdc = document.getElementById('sdc');
var sdctx = sdc.getContext("2d");
var picMap = document.createElement('img');
picMap.src = 'img/pictureMap.BMP';
picMap.onload=function(){
			
			sdctx.drawImage(picMap, 60 , 520, 57 , 62 , 320, 524, 72 , 70 );//方向车钟stop位置
			sdctx.drawImage(picMap, 180, 521, 123, 89 , 73 , 488, 155, 100); //速度车钟stop位置
		}