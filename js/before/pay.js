var Uid = JSON.parse(sessionStorage.getItem("currentUser")).Uid.split("'")[1];
var pay_l = document.querySelector('.pay_l');
//获取订单地址
$.ajax({
	type: "post",
	url: "http://115.28.227.1/projects/xa/php/php08/common.php",
	async: true,
	data: {
		type: "pay",
		a: "aaa",
		Uid: Uid
	},
	success: function(res) {
		//		console.log(res);
		if(res.length == 0) {
			$('#address').css({
				"display": "block"
			});
		} else {
			$('.addressBtns').css({
				"display": "block"
			});
		}


	}

})

if(sessionStorage.getItem("paygood") == null || sessionStorage.getItem("paygood") == "") {
	$.ajax({
		type: "post",
		url: "http://115.28.227.1/projects/xa/php/php08/common.php",
		async: true,
		data: {
			type: "pay",
			a: "aa",
			Uid: Uid
		},
		success: function(res) {
			for(var i = 0; i < res.length; i++) {
				pay_l.innerHTML += '<div class="carcon">' +
					'<div class="shopstore">店铺：<span>' + res[i].StoreName + '</span></div>' +
					'<table border="0" cellspacing="" cellpadding="" width="100%">' +
					'<tr width="100%">' +
					'<td width="37%" class="shopimg_name">' +
					'<img src="' + JSON.parse(res[i].GoodInfo).firstImg + '" />' +
					'<span class="shopnames">' + JSON.parse(res[i].GoodInfo).goodName + '</span>' +
					'</td>' +
					'<td width="15%" class="changenums">' +
					'<span class="shopnums" style="border: 0px;">' + res[i].Num + '</span>' +
					'</td>' +
					'<td width="15%" class="shopprices1">¥<span>' + JSON.parse(res[i].GoodInfo).price + '</span></td>' +
					'<td width="15%" class="shopprices2">¥<span>' + JSON.parse(res[i].GoodInfo).price * res[i].Num + '</span></td>' +
					'</tr>' +
					'</table>' +
					'</div>'
			}

			var l_price = document.querySelectorAll(".shopprices2 span");

			var l_p = 0;
			for(var i = 0; i < l_price.length; i++) {
				var l_p1 = parseInt(l_price[i].innerHTML);
				l_p += l_p1;
			}
			$('.getmoney1').text(l_p);
		}

	})
} else {
	var Gid = sessionStorage.getItem("paygood");
	$.ajax({
		type: "post",
		url: "http://115.28.227.1/projects/xa/php/php08/common.php",
		async: true,
		data: {
			type: "pay",
			a: "a",
			Gid: Gid
		},
		success: function(res) {
			pay_l.innerHTML = '<div class="carcon">' +
				'<div class="shopstore">店铺：<span>' + res[0].StoreName + '</span></div>' +
				'<table border="0" cellspacing="" cellpadding="" width="100%">' +
				'<tr width="100%">' +
				'<td width="37%" class="shopimg_name">' +
				'<img src="' + JSON.parse(res[0].GoodInfo).firstImg + '" />' +
				'<span class="shopnames">' + JSON.parse(res[0].GoodInfo).goodName + '</span>' +
				'</td>' +
				'<td width="15%" class="changenums">' +
				'<span class="shopnums" style="border: 0px;">' + sessionStorage.getItem("paynum") + '</span>' +
				'</td>' +
				'<td width="15%" class="shopprices1">¥<span>' + JSON.parse(res[0].GoodInfo).price + '</span></td>' +
				'<td width="15%" class="shopprices2">¥<span>' + JSON.parse(res[0].GoodInfo).price * sessionStorage.getItem("paynum") + '</span></td>' +
				'</tr>' +
				'</table>' +
				'</div>';
			var l_price = document.querySelectorAll(".shopprices2 span");

			var l_p = 0;
			for(var i = 0; i < l_price.length; i++) {
				var l_p1 = parseInt(l_price[i].innerHTML);
				l_p += l_p1;
			}
			$('.getmoney1').text(l_p);
		}

	})
}
$('.l_con_con_second2 span').on("click", function() {
	$('.l_con_con_second2 span').css({
		"border": "1px solid darkgrey",
		"background": "white"
	});
	$(this).css({
		"border": "2px solid #6eaf4f",
		"background": "#e6f6de"
	});
});
$('.l_con_con_four2 span').on("click", function() {
	$('.l_con_con_four2 span').css({
		"border": "1px solid darkgrey"
	});
	$(this).css({
		"border": "2px solid #6eaf4f"
	});
});

function show() {
	$('#address').css({
		"display": "block"
	});
}

//确认订单
$('.l_con_con_five1 span:eq(1)').on('click', function() {
	for(var i = 0; i < $('.haveaddressli').length; i++) {
		if($('.haveaddressli:eq(' + i + ')').css("border-color") == "rgb(110, 175, 79)") {
			var address = $('.haveaddressli:eq(' + i + ')')[0].id;
		}
	}
	if(address == undefined) {
		alert('请填写地址');
	} else {
		if(sessionStorage.getItem("paygood") == null || sessionStorage.getItem("paygood") == "") {
			$.ajax({
				type: "post",
				url: "http://115.28.227.1/projects/xa/php/php08/common.php",
				async: true,
				data: {
					type: "pay",
					a: "aaaa",
					address: address
				},
				success: function(res) {
				}

			})
		} else {
			$.ajax({
				type: "post",
				url: "http://115.28.227.1/projects/xa/php/php08/common.php",
				async: true,
				data: {
					type: "pay",
					a: "paysession",
					address: address,
					Uid: Uid,
					Gid: sessionStorage.getItem("paygood"),
					num: sessionStorage.getItem("paynum")
				},
				success: function(res) {
//					console.log(res);
				}

			})
		}
		alert('提交成功！');
				window.location.href="user.html";
	}
})

//取消订单
$('.l_con_con_five1 span:eq(0)').on('click', function() {
	$.ajax({
		type: "post",
		url: "http://115.28.227.1/projects/xa/php/php08/common.php",
		async: true,
		data: {
			type: "pay",
			a: "aaaaa",
		},
		success: function(res) {

		}

	})
//	取消订单清空订单信息
	sessionStorage.removeItem("paygood");
	sessionStorage.removeItem("paynum");
	window.location.href = "shopcar.html";

});
//=======
//// =============================== 新增收货地址 ====================================
//用户收货地址链接数据库
$Uid = JSON.parse(sessionStorage.getItem("currentUser")).Uid.split("'")[1];
$('#submit').on('click', function() {

	if($('#addUserName').val() != "") {
		if($('#adddetailed').val() != "") {
			if($('#addphone').val() != "") {
				if($('#postcode').val() != "") {
					$province = $("#province").val() + ' ' + $("#city").val() + ' ' + $('#district').val() + ' ' + $('#adddetailed').val();
					$addUserName = $('#addUserName').val();
					$addphone = $('#addphone').val();
					$addfixphone = $('#addfixphone').val();
					$addemail = $('#addemail').val();
					$postcode = $('#postcode').val();
					$addsendtime = $('#addsendtime').val();
					//
					$.ajax({
						type: "post",
						url: "http://115.28.227.1/projects/xa/php/php08/common.php",
						async: true,
						data: {
							type: "address",
							kind: "addAddressNew",
							Uid: $Uid,
							province: $province,
							addUserName: $addUserName,
							addphone: $addphone,
							addfixphone: $addfixphone,
							addemail: $addemail,
							postcode: $postcode,
							addsendtime: $addsendtime
						},
						success: function(res) {
							var addressID = JSON.parse(res);
							console.log(addressID);
							haveaddress.innerHTML += '<li class="haveaddressli" id="' + addressID[0].ID + '" onclick="selectaddress(this)">' +
								'<h5><span>收货人姓名:' + $addUserName + '</span></h5>' +
								'<table>' +
								'<tr>' +
								'<td>收货人：</td>' +
								'<td>' + $addUserName + '</td>' +
								'</tr>' +
								'<tr>' +
								'<td>所在区域：</td>' +
								'<td>' + $province + '</td>' +
								'</tr>' +
								'<tr>' +
								'<td>手机：</td>' +
								'<td>' + $addphone + '</td>' +
								'</tr>' +
								'</table>' +
								'</li>';

						}
					});
				} else {
					alert("邮政编码不能为空");
				}
			} else {
				alert("手机号不能为空");
			}
		} else {
			alert("详细地址不能为空");
		}
	} else {
		alert("收货人不能为空");
	}
});
var haveaddress = document.getElementsByClassName('haveaddress')[0];
//收货地址生成的标签
$.ajax({
	type: "post",
	url: "http://115.28.227.1/projects/xa/php/php08/common.php",
	async: true,
	data: {
		type: "address",
		kind: "showAddress",
		Uid: $Uid
	},
	success: function(res) {
		for(var i = 0; i < res.length; i++) {
			haveaddress.innerHTML += '<li class="haveaddressli" id="' + res[i].ID + '" onclick="selectaddress(this)">' +
				'<h5><span>收货人姓名:' + res[i].Name + '</span></h5>' +
				'<table>' +
				'<tr>' +
				'<td>收货人：</td>' +
				'<td>' + res[i].Name + '</td>' +
				'</tr>' +
				'<tr>' +
				'<td>所在区域：</td>' +
				'<td>' + res[i].Address + '</td>' +
				'</tr>' +
				'<tr>' +
				'<td>手机：</td>' +
				'<td>' + res[i].Tel + '</td>' +
				'</tr>' +
				'</table>' +
				'</li>';
		}

	}
});

function selectaddress(a) {
	$('.haveaddressli').css({
		"border": "1px solid darkgray"
	});
	$(a).css({
		"border": "2px solid #6eaf4f"
	});
	//console.log(a);
}