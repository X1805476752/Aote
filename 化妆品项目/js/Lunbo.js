function ZongFn(){
	this.init();
}
ZongFn.prototype = {
	constructor:ZongFn,
	init:function(){
		this.OnclickFn();
		this.JsonFn();
	},
	OnclickFn:function(){
		var num = 0;
		var ps = true;
		$("#LeftBtn").on("click",function(){
			if(ps == true){
				num --;
				if(num < 0){
					num = 1;
				}
				ps = false;
			}			
			$("#ulls li").eq(num).show(200).siblings().hide();
			console.log(num);
			$("#ulls li").eq(num).animate({
				"opacity":1
			},600).siblings().animate({
				"opacity":0
			},600);
			setTimeout(function(){
				ps = true;
			},1500);
		})
		$("#RightBtn").on("click",function(){
			if(ps == true){
				num ++;
				if(num > 1){
					num = 0;
				}
				ps = false;
			}		
//			$("#ulls li").eq(num).show(200).siblings().hide();
			$("#ulls li").eq(num).animate({
				"opacity":1
			},600).siblings().animate({
				"opacity":0
			},600);
			setTimeout(function(){
				ps = true;
			},1500);
		})
	},
	JsonFn:function(){
		var self = this;
		var str = $('#template1').html();
		var ops = _.template(str);
		$.get('js/json1.json', function(data) {
			var obj = typeof data == 'object' ? data : eval('(' + data + ')');
			var list = obj.data;
			_.each(list, function(item) {
				var stra = ops(item);
				$('#upls').append($(stra));	
				self.WenBenLiuFn();
			})
		})
	},
	WenBenLiuFn:function(){
		var heightArry = [0,0,0];
			// 最小值的位置
		var index;
		$("#upls li").each(function(){
			// 最小值
			var min = heightArry[0];
			for (var i = 0; i < heightArry.length; i++) {
				if (heightArry[i] < min) {
					index = i;
					min = heightArry[i];
				}
			}
			for (var i = 0; i < heightArry.length; i++) {
				if (heightArry[i]==min) {
					var index = i;
				}
			}
			console.log(min,index);
			$(this).css({
				"left":index*410,
				"top":heightArry[index] +100
			})
			// 把自己的高度放进高度数组中
			heightArry[index]+=$(this).height() +60;
		});
	}
}
new ZongFn();





	



