 $(function () {
	var $ul=$("#ups");
	//初始化。遍历每个li，让每个li旋转不一样的度数
	$("#ups li").each(function (index) {
		$(this).css("transform","rotateY("+40*index+"deg) translateZ(450px)")
	});
	var lock=true;  //函数截流
	var dg = 0;		//父级旋转的度数
	$(".stage").on("mousewheel",function (e,delta) {
		//阻止默认事件
		e.preventDefault();
		//函数节流
		if(!lock) return;
		//父级旋转的度数根据鼠标滚轮的方向来改变
		dg=dg-delta*40;
		console.log(dg);
		$ul.css("transform","rotateY(" + dg + "deg)");
		lock=false;
		//函数截流，因为transition的动画时间是0.5s，所以500毫秒后开锁
		setTimeout(function () {
			lock=true;
		},500)
	})
})

//响应事件下拉菜单
function XiaLaFn(){
	this.inits();
}
XiaLaFn.prototype = {
	constructor:XiaLaFn,
	inits:function(){
		this.DianFn();
		// this.AnniuFn();
	},
	DianFn:function(){
		var suo = true;
		$("#LaBtn").on("click",function(){
			if(suo){
				$("#navs").animate({
					"left":0,
				},700);
				suo = false;
			}else{
				$("#navs").animate({
					"left":"-260px",
				},700);
				suo = true;
			}
		})
	},
	//小按钮逻辑
	AnniuFn:function(){
		$(".more").on("mouseenter",function(){
			$(this).css("color","black").css("background-color","rgb(239,193,124)");
			$(".jiao").css("border-top-color","black");
		})
		$(".more").on("mouseleave",function(){
			$(this).css("color","rgb(239,193,124)").css("background-color","rgb(0,0,0)");
			$(".jiao").css("border-top-color","rgb(239,193,124)");
		})
	}
}
new XiaLaFn();
