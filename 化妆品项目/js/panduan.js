function PanduanFn(){
	this.init();
}
PanduanFn.prototype = {
	constructor:PanduanFn,
	init:function(){
		this.DengluFn();
	},
	DengluFn:function(){
		$("#denglus").on("click",function(){
			var reg = /^[a-z][1-9]{9}/;
			var reg2 = /^[a-zA-Z]{3}[1-9]{3,8}/;
			var vals = $("#user").val();
			var pwds = $("#pwd").val();
			if($("#user").val() == ""){
				alert("用户名密码不能为空");
				$("#user").css("border","2px solid red");
				$("#pwd").css("border","2px solid red");
				$("#ones").html("用户名或者邮箱 "+ "<i>*</i>");
				$("#twos").html("密码 "+ "<i>*</i>");
			}else{
				if(reg.test(vals) && reg2.test(pwds)){
					alert("登录成功");
					$("#ones").html("用户名或者邮箱");
					$("#twos").html("密码 ")
					$("#user").css("border","2px solid rgb(154,154,154)");
					$("#pwd").css("border","2px solid rgb(154,154,154)");
					window.open("index.html","_self");
				}else{
					alert("登录失败");
					$("#user").css("border","2px solid red");
					$("#pwd").css("border","2px solid red");
					$("#ones").html("用户名或者邮箱 "+ "<i>*</i>");
					$("#twos").html("用户名或者邮箱 "+ "<i>*</i>");
					if(reg.test(vals)==false){
						$("#user").css("border","2px solid red");
					}
					else if(reg2.test(pwds) == false){
						$("#user").css("border","2px solid red");
					}
				}
			}
		})
	}
}
new PanduanFn();