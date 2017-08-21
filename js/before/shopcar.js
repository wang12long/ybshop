var UID1 = '';
if(sessionStorage.getItem("currentUser") != null) {
	UID1 = JSON.parse(sessionStorage.getItem("currentUser")).Uid.split("'")[1];
}
var shop_l = document.querySelector('.shop_l');
// 查找该用户购物车中所有的没有支付的商品信息（没有支付的商品id）
$.ajax({
	type: "post",
	url: "http://115.28.227.1/projects/xa/php/php08/common.php",
	async: true,
	data: {
		type: "addshopcar",
		a: 'aa',
		Uid: UID1
	},
	success: function(res) {
		console.log(res[0]);
		// 遍历上面所查到的商品id再查找到商品详细信息（shop，goods ， goodcar）
		for(var i = 0; i < res.length; i++) {
			$.ajax({
				type: "post",
				url: "http://115.28.227.1/projects/xa/php/php08/common.php",
				async: true,
				data: {
					type: "addshopcar",
					a: 'aaa',
					Gid: res[i].GID,
					Uid: UID1
				},
				success: function(res) {
					console.log(res)
					shop_l.innerHTML += '<div class="carcon" id="' + JSON.parse(res[0].GID) + '">' +
						'<div class="shopstore">店铺：<span>' + JSON.parse(res[0].StoreMsg).storeName + '</span></div>' +
						'<table border="0" cellspacing="" cellpadding="" width="100%" >' +
						'<tr width="100%">' +
						'<td width="8%">' +
						'<label>' +
						'<input type="checkbox" onclick="carcon(this)">' +
						'</label>' +
						'</td>' +
						'<td width="37%" class="shopimg_name">' +
						'<img src="' + JSON.parse(res[0].GoodInfo).firstImg + '"/>' +
						'<span class="shopnames">' + JSON.parse(res[0].GoodInfo).goodName + '</span>' +
						'</td>' +
						'<td width="15%" class="changenums">' +
						'<span class="reduce" onclick="reduce(this)">－</span>' +
						'<span class="shopnums">' + JSON.parse(res[0].Num) + '</span>' +
						'<span class="add" onclick="add(this)">＋</span>' +
						'</td>' +
						'<td width="15%" class="shopprices1">¥<span>' + JSON.parse(res[0].GoodInfo).price + '</span></td>' +
						'<td width="15%" class="shopprices2">¥<span>' + JSON.parse(res[0].GoodInfo).price * JSON.parse(res[0].Num) + '</span></td>' +
						'<td width="10%"><span onclick="delete1(this)">删除</span></td>' +
						'</tr>' +
						'</table>' +
						'</div>'
				}
			});

		}
	}
});

//减少商品
function reduce(a) {
	var num = $(a).next().text();
	if(num > 1) {
		num--;
	} else {
		num = 1
	}
	$(a).next().text(num);
	var oneprice = $(a).parent().nextAll().eq(0).children().text();
	var allprice = $(a).parent().nextAll().eq(0).children().text();
	allprice = oneprice * num;

	$(a).parent().nextAll().eq(1).children().text(allprice);
	getmoney();
}
//增加商品
function add(b) {
	var num = $(b).prev().text();
	num++;
	$(b).prev().text(num);
	var oneprice = $(b).parent().nextAll().eq(0).children().text();
	var allprice = $(b).parent().nextAll().eq(0).children().text();
	allprice = oneprice * num;

	$(b).parent().nextAll().eq(1).children().text(allprice);
	getmoney();
}
//全选（）
$('#all').on('click', function() {
	if(this.checked) {
//		判断checkbox是否被选中
		$(".carcon :checkbox").prop("checked", true);
	} else {
		$(".carcon :checkbox").prop("checked", false);
	}
	getmoney();
})
//去结算   判断登录   判断哪个被选  遍历选择的产品  传递参数（被选中  paycar = 1 被选中  改变购物车该产品数量 取消选中 paycar=0 ）
$('.gosettle').on('click', function() {
	if(sessionStorage.getItem("currentUser") != null) {
		for(var i = 0; i < $(".carcon").length; i++) {
			if($(".carcon:eq(" + i + ") :checkbox").prop("checked")) {

				//			console.log($(".carcon:eq("+i+")")[0].id);
				//			console.log($(".carcon:eq("+i+")").find("span")[3].innerHTML);

				$.ajax({
					type: "post",
					url: "http://115.28.227.1/projects/xa/php/php08/common.php",
					async: true,
					data: {
						type: "addpay",
						a: 'a',
						Gid: $(".carcon:eq(" + i + ")")[0].id,
						num: $(".carcon:eq(" + i + ")").find("span")[3].innerHTML,
						Uid: UID1
					},
					success: function(res) {}
				});

			}
		}
	}
})
//checkbox点击事件（）
function carcon(d) {
	allchk();
	getmoney();
}

//检查是否全选
function allchk() {
	var chknum = $(".carcon :checkbox").size(); //选项总个数 
	var chk = 0;
	$(".carcon :checkbox").each(function() {
		if($(this).prop("checked") == true) {
			chk++;
		}
	});
	if(chknum == chk) { //全选 
		$("#all").prop("checked", true);
	} else { //不全选 
		$("#all").prop("checked", false);
	}
}

//计算总价   （更新num）
function getmoney() {
	var needmoney = 0;
	var valArr = [];
//	选中checkbox计算一个商品的money， 放进数组
	$(".carcon :checkbox").each(function() {
		if($(this).prop("checked") == true) {
			var moneys = $(this).parent().parent().nextAll().eq(3).children().text();
			valArr.push(moneys);
		}
	})
//	计算数组里所有商品的money
	for(var i = 0; i < valArr.length; i++) {
		needmoney += parseInt(valArr[i]);
	}
	//toFixed(小数点后几位):取浮点数（）
	needmoney = needmoney.toFixed(2);
	$('.needmoney').text(needmoney);
	for(var j = 0; j < $(".carcon").length; j++) {

		// console.log($(".carcon:eq("+j+")")[0].id);
		// console.log($(".shopnums:eq("+j+")")[0].innerHTML);
		$.ajax({
			type: "post",
			url: "http://115.28.227.1/projects/xa/php/php08/common.php",
			async: true,
			data: {
				type: "addshopcar",
				a: 'aaaa',
				Gid: $(".carcon:eq(" + j + ")")[0].id,
				num: $(".shopnums:eq(" + j + ")")[0].innerHTML,
				Uid: UID1
			},
			success: function(res) {}
		});
	}
}

//删除 购物车商品id
function delete1(c) {
	$(c).parent().parent().parent().parent().parent().remove();//？
	$.ajax({
		type: "post",
		url: "http://115.28.227.1/projects/xa/php/php08/common.php",
		async: true,
		data: {
			type: "addshopcar",
			a: 'aaaaa',
			Gid: $(c).parent().parent().parent().parent().parent()[0].id,
			Uid: UID1
		},
		success: function(res) {}
	});
}
// 跳转首页
$('.goon').click(function() {
	window.location.href = '../index.html';
})
// 跳转支付界面
$('.gosettle').on("click", function() {
	window.location.href = "pay.html";
})