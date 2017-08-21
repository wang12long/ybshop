//================= 注册滑动效果 ====================
var regs = document.querySelectorAll(".reg");
var reCont1 = document.querySelector(".re-cont1");
var rgbtnChild = document.querySelectorAll(".rgbtn-child");

rgbtnChild[0].classList.add("current");
$('.rgbtn-child').on('click', function() {
	if($(this).context.innerHTML == "手机注册") {
		rgbtnChild[0].classList.add("current");
		rgbtnChild[1].classList.remove("current");
		reCont1.style.transform = "translate(0,0)";
	} else {
		rgbtnChild[0].classList.remove("current");
		rgbtnChild[1].classList.add("current");
		reCont1.style.transform = "translate(-340px, 0)";
		reCont1.style.transition = "0.8s";
	}
});

var flag0 = flag1 = flag2 = flag3 = flag4 = flag5 = false;
var inp0a, inp1a, inp2a, inp3a, inp4a, inp5a, inp6a;
//================== 手机号正则 =====================
var inp2 = document.querySelector('#useremail');
inp2.onblur = function() {
	inp2a = inp2.value;
	// var a="UserName='"+inp1a+"'";
	var name = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
	if(name.test(inp2a) == true) {
		$('.input-grope').css({
			"display": "none"
		});
		flag2 = true;
	} else {
		$('.input-grope').css({
			"display": "block"
		});
		flag2 = false;
	}
}
var inp6 = document.querySelector('#userphone');
inp6.onblur = function() {
		inp6a = inp6.value;
		// var a="UserName='"+inp1a+"'";
		var name = /^1(3[0-9]|4[57]|5[012356789]|7[3678]|8[0-9])\d{8}$/g;
		if(name.test(inp6a) == true) {
			$('.input-gropa').css({
				"display": "none"
			});
			flag5 = true;
		} else {
			$('.input-gropa').css({
				"display": "block"
			});
			flag5 = false;
		}
	}
	//================== 密码正则 =====================
var inp3 = document.querySelector('#phonepwd');
inp3.onblur = function() {
	inp3a = inp3.value;
	// var a="UserName='"+inp1a+"'";
	var name = /^[A-Za-z0-9]{6,}$/g;
	if(name.test(inp3a) == true) {
		$('.input-gropb').css({
			"display": "none"
		});
		flag3 = true;
	} else {
		$('.input-gropb').css({
			"display": "block"
		});
		flag3 = false;
	}
}
var inp0 = document.querySelector('#emailpwd');
inp0.onblur = function() {
	inp0a = inp0.value;
	// var a="UserName='"+inp1a+"'";
	var name = /^[A-Za-z0-9]{6,}$/g;
	if(name.test(inp0a) == true) {
		$('.input-gropf').css({
			"display": "none"
		});
		flag0 = true;
	} else {
		$('.input-gropf').css({
			"display": "block"
		});
		flag0 = false;
	}
}

var inp4 = document.querySelector('#rephonepwd');
inp4.onblur = function() {
	inp4a = inp4.value;
	// var a="UserName='"+inp1a+"'";
	var name = /^[A-Za-z0-9]{6,}$/g;
	if(inp4a == inp3a) {
		$('.input-gropc').css({
			"display": "none"
		});
		flag4 = true;
	} else {
		$('.input-gropc').css({
			"display": "block"
		});
		flag4 = false;
	}
}

var inp1 = document.querySelector('#reemailpwd');
inp1.onblur = function() {
	inp1a = inp1.value;
	// var a="UserName='"+inp1a+"'";
	var name = /^[A-Za-z0-9]{6,}$/g;
	if(inp1a == inp0a) {
		$('.input-gropg').css({
			"display": "none"
		});
		flag1 = true;
	} else {
		$('.input-gropg').css({
			"display": "block"
		});
		flag1 = false;
	}
}

//================== 手机号注册功能 =====================

//	
$rebtn1 = $("#rebtn1");
$rebtn1.click(function() {
	if(flag5) {
		if(flag3) {
			if(flag4) {
				if($('#aaa').prop('checked')) {
					$userphone = $("#userphone").val();
					$phonepwd = $("#phonepwd").val();
					$.ajax({
						type: "post",
						url: "http://115.28.227.1/projects/xa/php/php08/common.php",
						async: true,
						data: {
							type: "regist",
							username: $userphone,
							password: $phonepwd
						},
						success: function(res) {
							console.log(res);
							if(res.err == 0){
								alert("注册成功！");
								window.location.href = "../index.html";
							}else if(res.errmsg == "用户已存在"){
								alert("注册失败！" + res.errmsg);
							}else{
								alert("注册失败!" + res.errmsg);
							}
						}
					});
				} else {
					alert("请确认勾选");
				}
			} else {
				alert("输入密码不相同");
			}
		} else {
			alert("请输入正确的密码");
		}
	} else {
		alert("请输入正确的手机号码");
	}
});
//================== 邮箱注册功能 =====================

$rebtn2 = $("#rebtn2");
$rebtn2.click(function() {
	if(flag2) {
		if(flag0) {
			if(flag1) {
				if($('#aab').prop('checked')) {
					$useremail = $("#useremail").val();
					$emailpwd = $("#emailpwd").val();
					$.ajax({
						type: "post",
						url: "http://115.28.227.1/projects/xa/php/php08/common.php",
						async: true,
						data: {
							type: "regist",
							username: $useremail,
							password: $emailpwd
						},
						success: function(res) {
							console.log(res);
							if(res.err == 0){
								alert("注册成功！");
								window.location.href = "../index.html";
							}else if(res.errmsg == "用户已存在"){
								alert("注册失败！" + res.errmsg);
							}else{
								alert("注册失败!" + res.errmsg);
							}
						}
					});
				} else {
					alert("请确认勾选");
				}
			} else {
				alert("输入密码不相同");
			}
		} else {
			alert("请输入正确的密码");
		}
	} else {
		alert("请输入正确的邮箱");
	}	
});
//==================  =====================