//**************集控室画表盘
printPanel(250, 280, 150, 130, 'cCanvas');
printPanel(680, 225, 120, 100, 'cCanvas');
printPanel(680, 470, 120, 100, 'cCanvas');
printScale(250, 280, 150, -120, 120, 'cCanvas');
printScale(680, 225, 117, 0, 40, 'cCanvas');
printScale(680, 470, 117, 0, 100, 'cCanvas');

var cc = document.getElementById('cCanvas');
var cctx = cc.getContext("2d");
cctx.font = "25px Arial ";
cctx.fontWeight = 300;
cctx.fillStyle = "white";
cctx.fillText("ME RPM", 215, 80);
cctx.fillText("START AIR PRESS", 600, 50);
cctx.fillText("FUEL INDEX", 620, 300);

/*驾控台画杠杆*/
//bpointerLever1(r,x,y,id);
//r为传入的rmp
//x为canvas的横坐标
//y为canvas的横坐标
bpointerLever1(0, 110, 230, 'cCanvas1');