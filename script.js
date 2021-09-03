var colorArray = ['#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5'
					,'#1E88E5', '#2196F3', '#42A5F5', '#64B5F6', '#90CAF9'];
var index = 0;

function changeColor(){
	var color = colorArray[index];
	document.querySelector("i").style.color = color;
	index++;
	if(index >= colorArray.length){
		index = 0;
	}
}

setInterval(changeColor, 500);




//alert("THE LORD IS RISEN!!")