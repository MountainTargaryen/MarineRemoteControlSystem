var auxHandle = document.getElementById("auxHandle");
var cpHandleRight = document.getElementById("cpHandleRight");
var cpHandleLeft = document.getElementById("cpHandleLeft");
var cpHandleX = 0
cpHandleLeft.onmousemove = function() {
	this.style.cursor = "url('img/cursorLeft.ico'), auto";
}
cpHandleRight.onmousemove = function() {
	this.style.cursor = "url('img/cursorRight.ico'), auto";
}
cpHandleLeft.onclick = function() {
	cpHandleX = cpHandleX - 45;
	if(cpHandleX <= -45) {
		cpHandleX = -45;
	}
	auxHandle.style.transformOrigin = 'center 38%';
	auxHandle.style.transform = 'rotate(' + cpHandleX + 'deg)';
}
cpHandleRight.onclick = function() {
	cpHandleX += 45;
	if(cpHandleX >= 45) {
		cpHandleX = 45;
	}
	auxHandle.style.transformOrigin = 'center 38%';
	auxHandle.style.transform = 'rotate(' + cpHandleX + 'deg)';
}