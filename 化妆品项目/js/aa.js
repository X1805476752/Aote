$(function(){
	$("#fenqins li").each(function(index){
		$(this).css("left",index*150)
	});
	$("#fenqins li").on("mouseenter",function(){
		$("#fenqins li").stop(true);
		//获取触发的这个li的索引
		var index = $(this).index();
		//获取每一个li
		$("#fenqins li").each(function(i){
			//在触发的这个li前面的所有元素
			if(i<=index){
				$(this).animate({
					"left":130 * i
				},666)
			}else{
				$(this).animate({
					"left":300 +( i - 1 )*130
				})
			}
		});
	});
	$("#fenqins").on("mouseleave",function(){
		$("#fenqins li").stop(true);
		$("#fenqins li").each(function(index){
			$("#fenqins li").eq(index).animate({
				"left":index * 150
			},666)
		})
	})
});