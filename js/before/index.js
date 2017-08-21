var swiper1 = new Swiper('.l_title>.swiper-container', {
	direction: 'vertical',
	slidesPerView: 1,
	paginationClickable: true,
	spaceBetween: 30,
	mousewheelControl: true,
	autoplay: 2500,
	effect: 'fade'
});
var swiper2 = new Swiper('#floorcontent .swiper-container', {
	direction: 'vertical',
	slidesPerView: 1,
	paginationClickable: true,
	spaceBetween: 30,
	mousewheelControl: true,
	autoplay: 2500

});

//头部导航栏hover
$('.l_header_left span:eq(2)').hover(function() {
	$(this).css({
		'color': 'red',
		'cursor': 'pointer'
	});
}, function() {
	$(this).css({
		'color': '#666666'
	});
});

//公告

$(".l_teil .l_teil_one span").on("mouseenter", function() {
	$(".l_teil .l_teil_one span").css({
		'border-bottom': '0px solid red'
	});
	$('.l_teil .l_teil_two').css({
		'display': 'none'
	});
	$(this).css({
		'border-bottom': '2px solid red'
	});
	$('.l_teil>.' + $(this).attr("class")).css({
		'display': 'block'
	});

});

// ============================ 轮播图右边个人中心nav ========================
$(".l_teil_one").find("span").css({
	"cursor": "pointer"
})

////右侧导航栏
//
$('.slideBan:eq(0),.l_login>span:eq(0)').on('click', function() {
	$('.userLogin').css({
		'display': 'block'
	});
})
$('.slideBan').not(".slideBan_").on('click', function() {

	$('.right_fix').animate({
		'right': '270px'
	});
	$('.slideCon').animate({
		'right': '0px'
	});
	$('.huan>div').css({
		'display': 'none'
	});
	if($(this).children()[1].innerHTML == "领红包在购物") {
		$('.redPaper').css({
			'display': 'block'
		});
	} else if($(this).children()[1].innerHTML == "购物车") {
		$('.shoppingCar').css({
			'display': 'block'
		});
	} else if($(this).children()[1].innerHTML == "我看过的") {
		$('.mine').css({
			'display': 'block'
		});
	}
});
$('.closeBtn').on("click", function() {
	$('.right_fix').animate({
		'right': '0px'
	});
	$('.slideCon').animate({
		'right': '-270px'
	});
});
$('.noLogin span:eq(1)').on("click", function() {
	$('.userLogin').css({
		'display': 'none'
	});
});

//遮罩的登录页面
var windowWidth1 = $(window).width() - $('.littleImg').width() - $('.slideCon').width();
$('.userLogin').css({
	'width': '100%'
});
$(window).resize(function() {
	var windowWidth = $(window).width() - $('.littleImg').width() - $('.slideCon').width();
	$('.userLogin').css({
		'width': '100%'
	});
});

var closeLoginFlag = false;
$('.closeLogin').on('click', function() {
	if(closeLoginFlag) {
		$('.userLogin').css({
			'display': 'none'
		});
		closeLoginFlag = false;
	} else {
		$('.userLogin').css({
			'display': 'block'
		});
		closeLoginFlag = true;
	}
});

//楼层导航
$('.louceng .louceng_item').on('mouseenter', function() {
	$(this).css({
		"background": "#cc3333"
	})
	if($(this).text() == "1F") {
		$(this).text('数码');
	} else if($(this).text() == "2F") {
		$(this).text('手机');
	} else if($(this).text() == "3F") {
		$(this).text('家装');
	} else if($(this).text() == "4F") {
		$(this).text('服饰');
	} else if($(this).text() == "5F") {
		$(this).text('清洁');
	} else if($(this).text() == "6F") {
		$(this).text('图书');
	} else if($(this).text() == "7F") {
		$(this).text('母婴');
	}
});
$('.louceng .louceng_item').on('mouseout', function() {
	$(this).css({
		"background": "rgba(0,0,0,0.4)"
	})
	if($(this).text() == "数码") {
		$(this).text('1F');
	} else if($(this).text() == "手机") {
		$(this).text('2F');
	} else if($(this).text() == "家装") {
		$(this).text('3F');
	} else if($(this).text() == "服饰") {
		$(this).text('4F');
	} else if($(this).text() == "清洁") {
		$(this).text('5F');
	} else if($(this).text() == "图书") {
		$(this).text('6F');
	} else if($(this).text() == "母婴") {
		$(this).text('7F');
	}
	if(window.scrollY >= 2024) {
		$('.louceng').animate({
			'left': '2%'
		}, 50);
	} else {
		$('.louceng').animate({
			'left': '-5%'
		}, 50);
	}
	if(window.scrollY >= 2024 && window.scrollY < 2515) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(0)').css({
			"background": "#cc3333"
		});
	} else if(window.scrollY >= 2515 && window.scrollY < 3015) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(1)').css({
			"background": "#cc3333"
		});
	} else if(window.scrollY >= 3015 && window.scrollY < 3505) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(2)').css({
			"background": "#cc3333"
		});
	} else if(window.scrollY >= 3505 && window.scrollY < 4005) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(3)').css({
			"background": "#cc3333"
		});
	} else if(window.scrollY >= 4005 && window.scrollY < 4495) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(4)').css({
			"background": "#cc3333"
		});
	} else if(window.scrollY >= 4495 && window.scrollY < 4990) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(5)').css({
			"background": "#cc3333"
		});
	} else if(window.scrollY > 4990) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(6)').css({
			"background": "#cc3333"
		});
	}
});

$(window).scroll(function() {
	if(window.scrollY >= 700) {
		$('.slideBan:eq(6)').css({
			'display': 'block'
		});
	} else {
		$('.slideBan:eq(6)').css({
			'display': 'none'
		});
	}
	if(window.scrollY >= 2024) {
		$('.louceng').animate({
			'left': '2%'
		}, 100);
	} else {
		$('.louceng').animate({
			'left': '-5%'
		}, 100);
	}
	if(window.scrollY >= 2024 && window.scrollY < 2515) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(0)').css({
			"background": "#cc3333"
		});
	} else if(window.scrollY >= 2515 && window.scrollY < 3015) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(1)').css({
			"background": "#cc3333"
		});
	} else if(window.scrollY >= 3015 && window.scrollY < 3505) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(2)').css({
			"background": "#cc3333"
		});
	} else if(window.scrollY >= 3505 && window.scrollY < 4005) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(3)').css({
			"background": "#cc3333"
		});
	} else if(window.scrollY >= 4005 && window.scrollY < 4495) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(4)').css({
			"background": "#cc3333"
		});
	} else if(window.scrollY >= 4495 && window.scrollY < 4990) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(5)').css({
			"background": "#cc3333"
		});
	} else if(window.scrollY >= 4990) {
		$('.louceng .louceng_item').css({
			"background": "rgba(0,0,0,0.4)"
		});
		$('.louceng .louceng_item:eq(6)').css({
			"background": "#cc3333"
		});
	}
});

$('.louceng .louceng_item').on('click', function() {
	if($(this).text() == "数码") {
		$('body').animate({
			'scrollTop': '2024'
		}, 500);
	} else if($(this).text() == "手机") {
		$('body').animate({
			'scrollTop': '2515'
		}, 500);
	} else if($(this).text() == "家装") {
		$('body').animate({
			'scrollTop': '3015'
		}, 500);
	} else if($(this).text() == "服饰") {
		$('body').animate({
			'scrollTop': '3505'
		}, 500);
	} else if($(this).text() == "清洁") {
		$('body').animate({
			'scrollTop': '4005'
		}, 500);
	} else if($(this).text() == "图书") {
		$('body').animate({
			'scrollTop': '4496'
		}, 500);
	} else if($(this).text() == "母婴") {
		$('body').animate({
			'scrollTop': '4990'
		}, 500);
	}
});

//置顶
var timer = null;
$('.slideBan:eq(6)').on("click", function() {
	var scrollTop_ = document.body.scrollTop || document.documentElement.scrollTop;
	timer = setInterval(function() {
		if(scrollTop_ > 0) {
			scrollTop_ -= 40;

			document.body.scrollTop = scrollTop_;
		} else {
			clearInterval(timer);
		}
	}, 0.1);
});

// ======================================= 轮播图图片更换 =========================================

var url = decodeURI(location.href);
var STR = url.split('/');
var str_ = STR[STR.length - 1];
var qq = str_.substr(0, 10);
if(qq == "index.html") {
	var swiper_wrapper1 = document.getElementsByClassName("swiper-wrapper1")[0];
	var imgs = [];
	var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
	var type = "type=showScrollImg";
	ajax.open("POST", "http://115.28.227.1/projects/xa/php/php08/Back/backCommon.php");
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send(type);
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4) {
			if(ajax.status >= 200 && ajax.status < 300 || ajax.status == 304) {
				var obj = JSON.parse(ajax.responseText);
				for(var i = 0; i < obj.length; i++) {
					swiper_wrapper1.innerHTML += '<div class="swiper-slide"><img src="' + obj[i].url + '" /></div>';
				}
				var swiper = new Swiper('.macth_xv_menu>.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true,
					autoplay: 2000
				});
			}
		}
	}
}
//======================================= 限时抢购 ======================================
//限时抢购内容点击加载
$(".l_snap_head_title").each(function(n, obj) {
		$(this).click(function() {
			$(".l_snap_content").html("");
			flashSale(n);
			currentTimeClick();
			$(this).css({
				"background": "rgb(255,124,40)"
			})
		})
	})
	// 限时抢购内容根据时间更新
var time = new Date();
time.hour = time.getHours();
currentTime();

function currentTime() {
	if(time.hour >= 21 && time.hour < 24 || time.hour >= 0 && time.hour < 9) {
		turnGrayAll();
		flashSale(0);
	} else if(time.hour >= 9 && time.hour < 11) {
		flashSale(0);
		turnRed(0);
	} else if(time.hour >= 11 && time.hour < 13) {
		flashSale(1);
		turnRed(1);
	} else if(time.hour >= 13 && time.hour < 15) {
		flashSale(2);
		turnRed(2);
	} else if(time.hour >= 15 && time.hour < 18) {
		flashSale(3);
		turnRed(3);
	} else if(time.hour >= 18 && time.hour < 21) {
		flashSale(4);
		turnRed(4);
	}
}

function currentTimeClick() {
	if(time.hour >= 21 && time.hour < 24) {
		turnGrayAll();
	} else if(time.hour >= 0 && time.hour < 11) {
		turnRed(0);
	} else if(time.hour >= 11 && time.hour < 13) {
		turnRed(1);
	} else if(time.hour >= 13 && time.hour < 15) {
		turnRed(2);
	} else if(time.hour >= 15 && time.hour < 18) {
		turnRed(3);
	} else if(time.hour >= 18 && time.hour < 21) {
		turnRed(4);
	}
}

function turnGrayAll() {
	$(".l_snap_head_title").css({
		"background": "rgb(250,250,250)",
		"color": "black"
	})
	$(".l_snap_head_title").find("span:eq(1)").css({
		"color": "black",
		"border": "1px solid black"
	})
	$(".l_snap_head_title").find("span:eq(1)").text("已结束");
}

function turnRed(timeNum) {
	$(".l_snap_head_title:eq(" + timeNum + ")").css({
		"background": "rgb(255,0,0)",
		"color": "white"
	})
	$(".l_snap_head_title:eq(" + timeNum + ")").find("span:eq(1)").text("正在进行");
	$(".l_snap_head_title:eq(" + timeNum + ")").find("span:eq(1)").css({
		"color": "white",
		"border": "2px solid white"
	})
}

function turnGray(timeNum) {
	$(".l_snap_head").find(".l_snap_head_title").not(".l_snap_head_title:eq(" + timeNum + ")").css({
		"background": "rgb(250,250,250)",
		"color": "black"
	})
	$(".l_snap_head").find(".l_snap_head_title").not(".l_snap_head_title:eq(" + timeNum + ")").find(".l_snap_head_title1").text("已结束");
	$(".l_snap_head").find(".l_snap_head_title").not(".l_snap_head_title:eq(" + timeNum + ")").find("span:eq(1)").css({
		"color": "black",
		"border": "1px solid black"
	})
}

function flashSale(timeId) {
	turnGray(timeId);
	$.ajax({
		type: "post",
		url: "http://115.28.227.1/projects/xa/php/php08/Back/backCommon.php",
		async: true,
		data: {
			type: "flashSaleLoad",
			tid: timeId
		},
		success: function(res) {
			$(".l_snap_content").html("");
			var goods = JSON.parse(res);
			console.log(goods);

			for(var i = 0; i < goods.length; i++) {
				console.log(goods);
				$(".l_snap_content").append('<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 l_snap_shopitem"><a href="public/goods_details.html?id=' + goods[i].ID + '"><img src="' + JSON.parse(goods[i].GoodInfo).firstImg + '" alt="" /></a><div class="shopItem"><p class="l_snap_goodname">' + goods[i].GoodName + '</p><span class="l_snap_goodprice">¥' + JSON.parse(goods[i].GoodInfo).price + '</span></div></div>');

			}
			$(".l_snap_shopitem").find("img").css({
				"width": "70%",
				"height": "162.39px",
				"margin-top": "20px"
			})
			$(".shopItem").css({
				"padding": "0 15px"
			})
			$(".l_snap_goodname").css({
				"font-size": "0.6rem",
				"color": "#666",
				"overflow": "hidden",
				"white-space": "nowrap",
				"text-overflow": "ellipsis"
			})
			$(".l_snap_goodprice").css({
				"font-size": "1rem"
			})

		}
	});
}
// ======================= 用户登录 轮播图右侧用户中心内容更换 =======================
if(window.sessionStorage.getItem('currentUser') != null) {
	var currentUser = JSON.parse(window.sessionStorage.currentUser);
	var userId = currentUser.Uid.split("'")[1];
	$.ajax({
		type: "get",
		url: "http://115.28.227.1/projects/xa/php/php08/common.php",
		async: true,
		data: {
			type: "currentHeadImg",
			UID: userId

		},
		success: function(res) {
			var headImg = res[0].HeadImg;
			var username = res[0].NickName;

			$(".user_headimg").html("<img src='" + headImg + "'/>");
			$(".come:eq(0)").text("Hi! " + username + " 你好");
			$(".l_login").find("span").remove();
			$(".l_login").append("<div class='enterPerZone'>进入我的个人中心</div>");
			$(".enterPerZone").click(function() {
				urlTo = "user.html";
				indexUrl();
			})
			$(".come:eq(0)").css({
				"margin-top": "5px"
			})
			$(".enterPerZone").css({
				"font-size": "0.5rem",
				"cursor": "pointer",
				"color": "#d22b2b",
				"margin-top": "5px"
			})
			$(".enterPerZone").mouseover(function() {
				$(this).css({
					"text-decoration": "underline"
				})
			})
			$(".enterPerZone").mouseout(function() {
				$(this).css({
					"text-decoration": "none"
				})
			})
		}
	})

}

// ================================= 楼层内容获取 ========================

$.ajax({
	type: "post",
	url: "http://115.28.227.1/projects/xa/php/php08/Back/backCommon.php",
	async: true,
	data: {
		type: "floor",
		op: "putInfo"
	},
	success: function(res) {
		var response = JSON.parse(res);
		var itemArr1 = [];
		var itemArr2 = [];
		var itemArr3 = [];
		var itemArr4 = [];
		var itemArr5 = [];
		var itemArr6 = [];
		var itemArr7 = [];
		for(var i = 0; i < response.length; i++) {

			var floorNo = response[i].LID.split("-")[0];
			if(floorNo == "1") {
				itemArr1.push(response[i]);
			} else if(floorNo == "2") {
				itemArr2.push(response[i]);
			} else if(floorNo == "3") {
				itemArr3.push(response[i]);
			} else if(floorNo == "4") {
				itemArr4.push(response[i]);
			} else if(floorNo == "5") {
				itemArr5.push(response[i]);
			} else if(floorNo == "6") {
				itemArr6.push(response[i]);
			} else if(floorNo == "7") {
				itemArr7.push(response[i]);
			}
		}
		createbox(itemArr1, '1');
		createbox(itemArr2, '2');
		createbox(itemArr3, '3');
		createbox(itemArr4, '4');
		createbox(itemArr5, '5');
		createbox(itemArr6, '6');
		createbox(itemArr7, '7');
	}
})

function createbox(arr, eqs, classes1, classses2) {
	for(var i = 0; i < arr.length; i++) {
		var floorClass = arr[i].LID.split("-")[1];
		var goodinfo = JSON.parse(arr[i].GoodInfo);
		$('.shopitemBox').eq(eqs).append('<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 shopitem ' + arr[i].LID + '" style="display:none">' +
			'<a href="public/goods_details.html?id=' + arr[i].ID + '"><img src="' + goodinfo.firstImg + '" alt="" /></a>' +
			'<p class="goodname">' + goodinfo.goodName + '</p>' +
			'<span class="goodprice">¥' + goodinfo.price + '</span>' +
			'</div>')
		$(".shopitem").css({
			"padding": "0 15px"
		})
		$(".shopitem").find("p").css({
			"padding": "0"
		})
		$(".shopitem").find("a").css({
			"display": "block"
		})
		$(".shopitem").find("a").find("img").css({
			"width": "70%",
			"height": "162.39px",
			"margin-top": "10px"
		})
		$(".goodname").css({
			"font-size": "0.7rem",
			"color": "#666",
			"overflow": "hidden",
			"white-space": "nowrap",
			"margin-top": "5px",
			"padding": "0 10px",
			"text-overflow": "ellipsis",
			"text-align": "left"
		})
	}

	if($(".floorClass").attr("class") == 'floorClass 1-1') {
		$('.shopitemBox .1-1').css({
			"display": "block"
		});
		$('.shopitemBox .2-1').css({
			"display": "block"
		});
		$('.shopitemBox .3-1').css({
			"display": "block"
		});
		$('.shopitemBox .4-1').css({
			"display": "block"
		});
		$('.shopitemBox .5-1').css({
			"display": "block"
		});
		$('.shopitemBox .6-1').css({
			"display": "block"
		});
		$('.shopitemBox .7-1').css({
			"display": "block"
		});
	}
}

$(".floorClass").on("mouseenter", function() {
	$(this).siblings().css({
		"border": "1px solid lightgray",
		"border-bottom": "1px solid #D22B2B",
		"background": "rgb(251,251,251)"
	});
	$(this).css({
		"border": "1px solid #D22B2B",
		"border-bottom": "1px solid white",
		"background": "white"
	});
	//	
	if($(this).attr("class") == 'floorClass 1-1') {
		$('.shopitemBox:eq(1) div').css({
			"display": "none"
		});
		$('.shopitemBox .1-1').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 1-2') {
		$('.shopitemBox:eq(1) div').css({
			"display": "none"
		});
		$('.shopitemBox .1-2').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 1-3') {
		$('.shopitemBox:eq(1) div').css({
			"display": "none"
		});
		$('.shopitemBox .1-3').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 1-4') {
		$('.shopitemBox:eq(1) div').css({
			"display": "none"
		});
		$('.shopitemBox .1-4').css({
			"display": "block"
		});
	}

	if($(this).attr("class") == 'floorClass 2-1') {
		$('.shopitemBox:eq(2) div').css({
			"display": "none"
		});
		$('.shopitemBox .2-1').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 2-2') {
		$('.shopitemBox:eq(2) div').css({
			"display": "none"
		});
		$('.shopitemBox .2-2').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 2-3') {
		$('.shopitemBox:eq(2) div').css({
			"display": "none"
		});
		$('.shopitemBox .2-3').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 2-4') {
		$('.shopitemBox:eq(2) div').css({
			"display": "none"
		});
		$('.shopitemBox .2-4').css({
			"display": "block"
		});
	}

	if($(this).attr("class") == 'floorClass 3-1') {
		$('.shopitemBox:eq(3) div').css({
			"display": "none"
		});
		$('.shopitemBox .3-1').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 3-2') {
		$('.shopitemBox:eq(3) div').css({
			"display": "none"
		});
		$('.shopitemBox .3-2').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 3-3') {
		$('.shopitemBox:eq(3) div').css({
			"display": "none"
		});
		$('.shopitemBox .3-3').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 3-4') {
		$('.shopitemBox:eq(3) div').css({
			"display": "none"
		});
		$('.shopitemBox .3-4').css({
			"display": "block"
		});
	}

	if($(this).attr("class") == 'floorClass 4-1') {
		$('.shopitemBox:eq(4) div').css({
			"display": "none"
		});
		$('.shopitemBox .4-1').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 4-2') {
		$('.shopitemBox:eq(4) div').css({
			"display": "none"
		});
		$('.shopitemBox .4-2').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 4-3') {
		$('.shopitemBox:eq(4) div').css({
			"display": "none"
		});
		$('.shopitemBox .4-3').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 4-4') {
		$('.shopitemBox:eq(4) div').css({
			"display": "none"
		});
		$('.shopitemBox .4-4').css({
			"display": "block"
		});
	}

	if($(this).attr("class") == 'floorClass 5-1') {
		$('.shopitemBox:eq(5) div').css({
			"display": "none"
		});
		$('.shopitemBox .5-1').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 5-2') {
		$('.shopitemBox:eq(5) div').css({
			"display": "none"
		});
		$('.shopitemBox .5-2').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 5-3') {
		$('.shopitemBox:eq(5) div').css({
			"display": "none"
		});
		$('.shopitemBox .5-3').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 5-4') {
		$('.shopitemBox:eq(5) div').css({
			"display": "none"
		});
		$('.shopitemBox .5-4').css({
			"display": "block"
		});
	}

	if($(this).attr("class") == 'floorClass 6-1') {
		$('.shopitemBox:eq(6) div').css({
			"display": "none"
		});
		$('.shopitemBox .6-1').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 6-2') {
		$('.shopitemBox:eq(6) div').css({
			"display": "none"
		});
		$('.shopitemBox .6-2').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 6-3') {
		$('.shopitemBox:eq(6) div').css({
			"display": "none"
		});
		$('.shopitemBox .6-3').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 6-4') {
		$('.shopitemBox:eq(6) div').css({
			"display": "none"
		});
		$('.shopitemBox .6-4').css({
			"display": "block"
		});
	}

	if($(this).attr("class") == 'floorClass 7-1') {
		$('.shopitemBox:eq(7) div').css({
			"display": "none"
		});
		$('.shopitemBox .7-1').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 7-2') {
		$('.shopitemBox:eq(7) div').css({
			"display": "none"
		});
		$('.shopitemBox .7-2').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 7-3') {
		$('.shopitemBox:eq(7) div').css({
			"display": "none"
		});
		$('.shopitemBox .7-3').css({
			"display": "block"
		});
	} else if($(this).attr("class") == 'floorClass 7-4') {
		$('.shopitemBox:eq(7) div').css({
			"display": "none"
		});
		$('.shopitemBox .7-4').css({
			"display": "block"
		});
	}
});

// ============================ 左侧边栏 ==========================
$(".bigitem_two:eq(0)").css({
	"background": "rgba(227,227,199,0.6)"
})
$(".bigitem_two:eq(1)").css({
	"background": "rgba(221,222,226,0.6)"
})

$(".bigitem_two:eq(2)").css({
	"background": "rgba(82,4,1,0.8)"
})
$(".bigitem_two:eq(3)").css({
	"background": "rgba(220,206,197,0.7)"
})
$(".bigitem_two:eq(4)").css({
	"background": "rgba(0,5,26,0.9)"
})
$(".bigitem_two:eq(5)").css({
	"background": "rgba(170,217,209,0.6)"
})
$(".bigitem_two:eq(6)").css({
	"background": "rgba(222,220,221,0.6)"
})