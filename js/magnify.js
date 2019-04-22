function my$(id) {
		return document.getElementById(id);
	}
	my$("rahMen").onmouseover = function() {
		my$("shadMirr").style.display = "block";
		my$("magnify").style.opacity = 1;
		// my$("magnify").style.transition = "all 0.1s";
	}
	my$("rahMen").onmouseout = function() {
		my$("shadMirr").style.display = "none";
		my$("magnify").style.opacity = 0;
	}
	my$("rahMen").onmousemove = function(event) {
		//添加 event 事件
		var evt = event || window.event;
		//获取鼠标 left 和 top 坐标
		var left = evt.clientX - my$("rahMen").offsetLeft - my$("shadMirr").offsetWidth / 2;
		var top = evt.clientY - my$("detailsGround").offsetTop - my$("detailsBack").offsetTop- my$("details").offsetTop- my$("rahMen").offsetTop - my$("shadMirr").offsetHeight / 2;
		//判断边界
		if (left <= 0) {
			left = 0;
		}
		if (top <= 0) {
			top = 0;
		}
		var leftMax = my$("rahMen").offsetWidth - my$("shadMirr").offsetWidth;
		var topMax = my$("rahMen").offsetHeight - my$("shadMirr").offsetHeight;
		if (left > leftMax) {
			left = leftMax;
		}
		if (top > topMax) {
			top = topMax;
		}
		// 将坐标赋值给 shadMirr,使 shadMirr 位置就是鼠标位置.
		my$("shadMirr").style.left = left + "px";
		my$("shadMirr").style.top = top + "px";

		//让鼠标位置与大图片有关联
		var x = left * (my$("magnify").offsetWidth) / (my$("shadMirr").offsetWidth);
		var y = top * (my$("magnify").offsetHeight- my$("detailsGround").offsetTop) / (my$("shadMirr").offsetHeight);
		//将鼠标位置和大图片关联
		my$("magnify").style.backgroundPositionX = -x + "px"; //相对运动,所以用-1;
		my$("magnify").style.backgroundPositionY = -y + "px";
	}