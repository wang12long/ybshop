//================= 登录滑动效果 ====================
$codeLogin = $(".code-login");
$userLogin = $(".user-login");
$boxContent = $(".boxcontent");
$userLogin.css("color","#D22B2B");
$codeLogin.click(function(){
	$(this).css({
		color:"#D22B2B"
	})
	$userLogin.css({
		color:"#666"
	})
	$boxContent.css({
		transform:"translateX(0px)"
	})
})
$userLogin.click(function(){
	$(this).css({
		color:"#D22B2B"
	})
	$codeLogin.css({
		color:"#666"
	})
	$boxContent.css({
		transform:"translateX(-349px)"
	})
})
//================== 登录功能 =====================
$loginBtn = $("#loginbtn");
$loginBtn.click(function(){
	$username = $("#username").val();
	$password = $("#password").val();
	$.ajax({
	type:"post",
	url:"http://115.28.227.1/projects/xa/php/php08/common.php",
	data:{
		type:"login",
		username:$username,
		password:$password
	},
	success:function(res){
		if(res.err == 0){
//			alert("登录成功");
			
			var url = decodeURI(location.href);
			var STR = url.split('/');
			var str_=STR[STR.length-1];
			var qq = str_.substr(0,10);
			if(qq=="login.html"){
				window.location.href = "../index.html";
			}else{
				window.history.go(0);
			}
			
			
		window.sessionStorage.currentUser = '{"currentUser":"' + res.nickname + '","Uid":"' + res.nickid + '","headImg":"' + res.headImg + '"}';
		
//		window.location.href = url;	

		}else if(res.err == 1){
			alert("登录失败！" + res.errmsg);
		}else if(res.err == 2){
			alert("登录失败！" + res.errmsg);	
		}else{
			alert("登录失败！");
		}
	}
});
})

