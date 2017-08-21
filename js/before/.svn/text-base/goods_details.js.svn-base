var slider = document.querySelector(".goods_mag_slider");
var smallImgWrap = document.querySelector(".goods_smallImg");
var bigImgWrap = document.querySelector(".goods_bigImg");
var smallImgContainer = document.querySelector(".goods_smallImg_container");
var bigImgContainer = document.querySelector(".goods_bigImg_container");
var smallImg = smallImgWrap.querySelector("img");
var bigImg = bigImgWrap.querySelector("img");
var secc = document.querySelector('.succeed');
var disImgArr = [];
var flag = true;
var timer;
//获取修改的ID
var url = decodeURI(location.href);
var STR = url.split('?')[1];
var aa = STR.substring(3);

var DID = '';

//推荐精品

$.ajax({
	type: "get",
	url: "http://115.28.227.1/projects/xa/php/php08/common.php",
	async: true,
	data: {
		type: "bestgoods"
	},
	success: function(res) {
		console.log(res);
		for(var i = 0; i < res.length; i++) {
			var goodinfo = JSON.parse(res[i].GoodInfo);
			$('.swiper-wrapper').append('<div class="swiper-slide" ><a href="goods_details.html?id=' + res[i].ID + '" style="text-decoration:none">' +
				'<img src="' + goodinfo.firstImg + '" style="width:165px;height:165px"/>' +
				'<div class="goods_com_price">' +
				'<p>¥' + goodinfo.price + '</p>' +
				'<p>' + goodinfo.goodName + '</p>' +
				'</div>' +
				'</a></div>')
		}
		var swiper = new Swiper('.goods_com_display .swiper-container', {
			pagination: '.swiper-pagination',
			slidesPerView: 6,
			paginationClickable: true,
			spaceBetween: 30,
			autoplay: 2000,
			speed: 1000,
			loop: true,
			mousewheelControl: false,
			freeMode: true
		});
		$('.goods_com_display .swiper-slide img').on("mouseenter", function() {
			$(this).css({
				'cursor': 'pointer'
			});
			$(this).next().animate({
				'bottom': '0px'
			});
		});
		$('.goods_com_display .swiper-slide img').on("mouseout", function() {
			$('.goods_com_price').animate({
				'bottom': '-35px'
			});
		});
	}
})

//根据ID进行ajax请求
$.ajax({
	type: "get",
	url: "http://115.28.227.1/projects/xa/php/php08/common.php",
	async: true,
	data: {
		type: "detail",
		ID: aa
	},
	success: function(res) {
		var goodinfo = JSON.parse(res[0].GoodInfo);
		//		console.log(goodinfo);
		//		console.log(res);
		//商品信息的动态更新
		$(".goods_pro_title").text(goodinfo.goodName);
		$(".goods_pro_details").text(goodinfo.goodsDescribe);
		$(".goods_price_num").text("¥" + goodinfo.price);
		$('.mark_under s').text("¥" + goodinfo.marketPrice);
		$('.goods_reserve_counts').text('（库存' + goodinfo.stock + '）');
		for(var i = 0; i < goodinfo.goodimgs.length; i++) {
			disImgArr.push(goodinfo.goodimgs[i]);
		}
		//// 放大镜小图初始图片路径
		smallImg.src = disImgArr[0];
		//		var bigImg = bigImgWrap.querySelector("img");
		//// 放大镜大图对应小图路径
		bigImg.src = smallImg.src;

		//=================== 商品详情图片列表 =====================
		$disImg = $(".dis_img");
		//var disImgArr = ["../img/details_goods/dis_1.jpeg", "../img/details_goods/dis_2.jpeg", "../img/details_goods/dis_3.jpeg", "../img/details_goods/dis_4.png"];
		for(var i = 0; i < disImgArr.length; i++) {
			var dImg = document.createElement("img");
			dImg.src = disImgArr[i];
			// 点击图片列表图片 放大镜小图更新路径 大图更新路径
			dImg.onclick = function() {
				smallImg.src = this.src;
				bigImg.src = smallImg.src;
			}
			$disImg.append(dImg);
		}

		//创建商品分类
		if(goodinfo.firstsort != "") {
			$('.goods_index').after('<a href="" class="goods_item">' + goodinfo.firstsort + '</a><span class="goods_dt_ico firstsort" >></span>')
		}
		if(goodinfo.secondsort != "") {
			$('.firstsort').after('<a href="" class="goods_item">' + goodinfo.secondsort + '</a><span class="goods_dt_ico secondsort">></span>')
		}
		if(goodinfo.thirdsort != "") {
			$('.secondsort').after('<a href="" class="goods_item">' + goodinfo.thirdsort + '</a><span class="goods_dt_ico">></span>')
		}
		// 商品货号
		$('#goods_id').text(res[0].Numbers);
		$('.goods_num span').text(res[0].Numbers);
		//商品名
		$('.goods_dt_text').text(goodinfo.goodName);
		$('.goods_name span').text(goodinfo.goodName);
		//品牌
		$('.goods_por span').text(goodinfo.brand);
		//上架时间
		$('.goods_pubtime span').text(res[0].UpGoodDate);
		//商品毛重
		$('.goods_weight span').text(goodinfo.specifications);
		//库存
		$('.goods_res_num span').text(goodinfo.stock);
		//商品介绍
		for(var j = 0; j < goodinfo.detailimgs.length; j++) {
			$('#goods_standcon_imgs').append('<div class="goods_standcon_img"><img src="' + goodinfo.detailimgs[j] + '" /></div>')
		}
		//商店信息
		var shopinfo = JSON.parse(res[0].StoreMsg);
		var address = shopinfo.province + shopinfo.city;
		$('.goods_shoppro_title h2').text(address + shopinfo.storeName);
		$('#shopname').text(shopinfo.storeName);
		$('#shopclass').text(res[0].Kind);
		$('#shopphone').text(shopinfo.phoneNum);
		$('#detailadd').text(address);
		DID = res[0].DID;
		if(DID) {
			getcolshop();
		}
	}
});
//商品收藏
var flags = true;
var UID = "";
if(sessionStorage.getItem("currentUser") != null) {
	UID = JSON.parse(sessionStorage.getItem("currentUser")).Uid.split("'")[1];
}

if(UID) {
	//商品收藏信息获取
	$.ajax({
		type: "get",
		url: "http://115.28.227.1/projects/xa/php/php08/common.php",
		async: true,
		data: {
			type: "selcol",
			GID: aa,
			UID: UID
		},
		success: function(res) {
			if(res.length == 0) {
				$('.col_text').text('收藏');
				flags = true;
			} else {
				$('.col_text').text('已收藏');
				flags = false;
			}
		}
	});
}

function getcolshop() {
	if(UID) {
		//店铺收藏信息获取
		$.ajax({
			type: "get",
			url: "http://115.28.227.1/projects/xa/php/php08/common.php",
			async: true,
			data: {
				type: "selshopcol",
				UID: UID,
				DID: DID
			},
			success: function(res) {
				if(res.length == 0) {
					$('.goods_shop_attention').html("<span class='goodsshop_att_ico'></span><span class='goodsshop_att_text'>关注本店</span>");
					attentionClick = false;
				} else {
					$('.goods_shop_attention').html("<span>取消关注</span>");
					attentionClick = true;
				}
			}
		})
	}
}

$('.goods_collect').click(function() {
	if(UID) {
		if(flags) {
			collectAnimate();
			$.ajax({
				type: "get",
				url: "http://115.28.227.1/projects/xa/php/php08/common.php",
				async: true,
				data: {
					type: "col",
					GID: aa,
					UID: UID
				},
				success: function(res) {
					$('.col_text').text('已收藏');
					flags = false;
				}
			})
		} else if(flags == false) {
			$.ajax({
				type: "get",
				url: "http://115.28.227.1/projects/xa/php/php08/common.php",
				async: true,
				data: {
					type: "delcol",
					GID: aa,
					UID: UID
				},
				success: function(res) {
					$('.col_text').text('收藏');
					flags = true;
//					if(flag) {
//						flag = false;
//						var n = 2;
//						timer = setInterval(function() {
//							n -= 0.05;
////							secc.style.opacity = n;
//							if(n <= 0) {
//								clearTimer();
//								secc.innerHTML = "取消收藏"
////								secc.style.opacity = 0;
//								flag = true;
//							}
//						}, 30)
//					}

				}
			})
		}
	} else {
		$('.userLogin').show('fast');
	}
})

// ========================= 关注店铺 ==========================
var attentionClick = false;

$(".goods_shop_attention").click(function() {
	if(UID) {
		if(!attentionClick) {
			$.ajax({
				type: "get",
				url: "http://115.28.227.1/projects/xa/php/php08/common.php",
				async: true,
				data: {
					type: "shopcol",
					UID: UID,
					DID: DID
				},
				success: function(res) {
					if(res.err == 0) {
						$('.goods_shop_attention').html("<span>取消关注</span>");
						$('.goods_shop_attention').css({
							"padding-left": "25px"
						});
//						setTimeout(function() {
//							if(flag) {
//								flag = false;
//								var n = 2;
//								timer = setInterval(function() {
//									n -= 0.05;
//									secc.style.opacity = n;
//									if(n <= 0) {
//										clearTimer();
//										secc.innerHTML = "关注成功";
//										secc.style.opacity = 0;
//										flag = true;
//									}
//								}, 30)
//							}
//						}, 100)
					} else {
//						if(flag) {
//							flag = false;
//							var n = 2;
//							timer = setInterval(function() {
//								n -= 0.05;
//								secc.style.opacity = n;
//								if(n <= 0) {
//									clearTimer();
//									secc.innerHTML = "关注失败";
//									secc.style.opacity = 0;
//									flag = true;
//								}
//							}, 30)
//						}
					}
				}
			});
			attentionClick = true;
		} else {
			$.ajax({
				type: "get",
				url: "http://115.28.227.1/projects/xa/php/php08/common.php",
				async: true,
				data: {
					type: "delshopcol",
					UID: UID,
					DID: DID
				},
				success: function(res) {
					if(res.err == 0) {
						$('.goods_shop_attention').html("<span class='goodsshop_att_ico'></span><span class='goodsshop_att_text'>关注本店</span>");
					}
				}
			});
			attentionClick = false;
		}
	} else {
		$('.userLogin').show('fast');
	}
})

////放大镜大图宽高
var bigImgWidth = smallImg.offsetWidth * 2;
var bigImgHeight = smallImg.offsetHeight * 2;
bigImg.style.width = bigImgWidth + "px";
bigImg.style.height = bigImgHeight + "px";
//
////================= 放大镜效果 =============================
//var scaleX, scaleY;
//
smallImgWrap.onmousemove = function(event) {
	bigImgWrap.style.display = "inline-block";
	$('.goods_mag_slider').css({
		'display': 'inline-block'
	});
	var X = $('.goods_magnifier').offset().left;
	var Y = document.querySelector(".goods_magnifier").getBoundingClientRect().top;

	scaleX = bigImg.offsetWidth / smallImg.offsetWidth;
	scaleY = bigImg.offsetHeight / smallImg.offsetHeight;
	event = event || window.event;
	var sliderLeft = event.clientX - slider.offsetWidth / 2 - X;
	var sliderTop = event.clientY - slider.offsetHeight / 2 - Y;
	if(sliderLeft <= 0) {
		sliderLeft = 0;
	} else if(sliderLeft >= smallImgWrap.offsetWidth - slider.offsetWidth - 22) {
		sliderLeft = smallImgWrap.offsetWidth - slider.offsetWidth - 22;
	}
	if(sliderTop <= 0) {
		sliderTop = 0;
	} else if(sliderTop >= smallImgWrap.offsetHeight - slider.offsetHeight - 22) {
		sliderTop = smallImgWrap.offsetHeight - slider.offsetHeight - 22;
	}
	slider.style.left = sliderLeft + "px";
	slider.style.top = sliderTop + "px";

	bigImgContainer.scrollLeft = slider.offsetLeft * scaleX;
	bigImgContainer.scrollTop = slider.offsetTop * scaleY;
}
smallImgWrap.onmouseout = function() {
	bigImgWrap.style.display = "none";
	$('.goods_mag_slider').css({
		'display': 'none'
	});
}

// ============= 规格参数hover ===============
$(".goods_stand_titleLeft").find("ul").find("li:eq(0)").addClass("goods_stand_titleActive");
$(".goods_stand_titleLeft").find("ul").find("li").click(function() {
	$(".goods_stand_titleLeft").find("ul").find("li").find("a").css({
		"text-decoration": "none"
	})
	index = $(this).index();
	$(this).addClass("goods_stand_titleActive");
	$(".goods_stand_titleLeft").find("ul").find("li").not("li:eq(" + index + ")").removeClass("goods_stand_titleActive");
})

//=================== 商品规格悬浮 ======================
var goodsStandConTitle = document.querySelector(".goods_standcon_title");
var goodsStandconRight = document.querySelector(".goods_standcon_right");

var bodyHeight = document.querySelector("body").offsetHeight;
var footerHeight = document.querySelector("#footer").offsetHeight;
var footer = document.querySelector("#footer");
var windowHeight = document.documentElement.clientHeight;
var fixDistance = bodyHeight - footerHeight - goodsStandconRight.offsetTop;
goodsStandconRight.style.height = windowHeight + 'px';
window.onscroll = function() {
	goodsNavFixed();
	//	rightIcoScroll();
	if(window.scrollY > $('#footer').offset().top - windowHeight) {
		goodsStandconRight.style.height = windowHeight - 38 - window.scrollY + $('#footer').offset().top - windowHeight + 'px';
	} else {
		goodsStandconRight.style.height = windowHeight + 'px';
	}

}

function goodsNavFixed() {
	scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if(scrollTop >= 1016) {
		goodsStandConTitle.style.width = "955px";
		goodsStandConTitle.style.position = "fixed";
		goodsStandConTitle.style.top = "0";
		goodsStandconRight.style.position = "fixed";
		goodsStandconRight.style.top = "38px";
		goodsStandconRight.style.marginLeft = "3px";

	} else {
		goodsStandConTitle.style.position = "static";
		goodsStandConTitle.style.top = goodsStandConTitle.offsetTop + 'px';
		goodsStandconRight.style.position = "static";
		goodsStandconRight.style.top = goodsStandConTitle.offsetTop + 'px';
		goodsStandconRight.style.marginLeft = "0px";
	}

}

goodsStandconRight.style.height = fixDistance + "px";

// ============================ 商品评价nav ==============================
// 商品每种评价数量
var allCommentNum = 1;
var goodCommentNum = 1;
var midCommentNum = 0;
var badCommentNum = 0;
var userListNum = 0;
var commentArr = [allCommentNum, goodCommentNum, midCommentNum, badCommentNum, userListNum];

var goodsUserCommentLi = document.querySelector(".goods_userComment").children[0].children;

for(var i = 0; i < goodsUserCommentLi.length; i++) {
	var goodsUserCommentNum = goodsUserCommentLi[i].children[0];
	goodsUserCommentNum.innerText = "(" + commentArr[i] + ")";
}
// 判断商品评价有没有内容 有就显示 没有显示没有评论
$('.goods_userComment li').on("click", function() {
	if($(this).find("span").text() == "(0)") {
		$(".goods_userComment_userlist").css({
			"display": "none"
		})
		$(".noneComment").css({
			"display": "block"
		})
	} else {
		$(".goods_userComment_userlist").css({
			"display": "block"
		})
		$(".noneComment").css({
			"display": "none"
		})
	}
});
// 商品评价nav点击样式 
$(".goods_userComment").find("ul").find("li").click(function() {
	$(this).addClass("goods_userComment_Active");
	index = $(this).index();
	$(".goods_userComment").find("ul").find("li").not("li:eq(" + index + ")").removeClass("goods_userComment_Active");
})

//======================= 购物车 ======================
//--------------- 商品售价 -----------------
var goodsPrice = 20.0;
var goodsPriceAll = 0;
var goodsPriceNum = document.querySelector(".goods_price_num");
goodsPriceNum.innerText = "¥" + goodsPrice.toFixed(1);
// ------------------- 购买商品 -----------------
var goodsNum = document.querySelector(".goods_number");
var shopNum = goodsNum.value;
// 库存数量
var reserveNum = 886;
var goodsReserveCounts = document.querySelector(".goods_reserve_counts");
goodsReserveCounts.innerText = "（库存" + reserveNum + "）";
// ---------- 输入购买商品数量 ---------------
goodsNum.onchange = function() {
		shopNum = goodsNum.value;
		var shopNum1 = Number(shopNum);
		if(Number.isInteger(shopNum1) && shopNum1 <= reserveNum) {
			if(shopNum > reserveNum) {
				shopNum = reserveNum;
			}
		} else {
			goodsNum.value = 0;
			shopNum = 0;
		}
		goodsPriceAll = goodsPrice * shopNum;
		goodsPriceNum.innerText = "¥" + goodsPriceAll.toFixed(1);

	}
	// --------------- 加减商品数量 -------------
$(".btn-add").click(function() {
	shopNum++;
	if(shopNum > reserveNum) {
		shopNum = reserveNum;
		if(flag) {
			flag = false;
			var n = 2;
			timer = setInterval(function() {
				n -= 0.05;
				secc.style.opacity = n;
				if(n <= 0) {
					clearTimer();
					secc.innerHTML = "超过最大库存";
					secc.style.opacity = 0;
					flag = true;
				}
			}, 30)
		}
	}
	goodsPriceAll = goodsPrice * shopNum;
	if(goodsPriceAll > reserveNum * shopNum) {
		goodsPriceAll = reserveNum * shopNum;
	}
	//	goodsPriceNum.innerText = "¥" + goodsPriceAll.toFixed(1);
	goodsNum.value = shopNum;
})
$(".btn-reduce").click(function() {
		shopNum--;
		if(shopNum < 1) {
			shopNum = 1;
		}
		goodsPriceAll = goodsPrice * shopNum;
		if(goodsPriceAll < 0) {
			goodsPriceAll = 0;
		}
		//		goodsPriceNum.innerText = "¥" + goodsPriceAll.toFixed(1)
		goodsNum.value = shopNum;
	})
	//------------------- 加入购物车动画 ---------------------
var goodsBuyCar = document.querySelector(".goods_buyCar");

var body = document.querySelector("body");
//goodsBuyCar.onclick = buyAnimate;

var alreadyFly = false;

function buyAnimate() {
	imgAnimate();
	$('.aaa').animate({
		"left": "100%",
		"top": "330px",
		"display": "none"
	}, 800);

	var num = $('.goods_number').val();
	if(sessionStorage.getItem("currentUser") != null) {
		$.ajax({
			type: "post",
			url: "http://115.28.227.1/projects/xa/php/php08/common.php",
			async: true,
			data: {
				type: "addshopcar",
				a: 'a',
				UID: UID,
				GID: aa,
				num: num
			},
			success: function(res) {
				//				console.log(res);
			}
		})
	} else {

	}

}

function collectAnimate() {
	imgAnimate();
	$('.aaa').animate({
		"left": "100%",
		"top": "570px",
		"display": "none"
	}, 800);
}

function imgAnimate() {
	//	console.log($('.goods_smallImg_container img').offset().left);
	smallImgClone = smallImg.cloneNode(true);
	smallImgClone.style.width = "378px";
	smallImgClone.style.height = "378px";
	smallImgClone.zIndex = "9999";
	smallImgClone.style.position = "fixed";
	smallImgClone.style.top = $('.goods_smallImg_container img').offset().top - $(document).scrollTop() + "px";
	smallImgClone.style.left = $('.goods_smallImg_container img').offset().left + 'px';
	smallImgClone.setAttribute("class", "aaa");
	body.appendChild(smallImgClone);

	borderRadiusNum = 40;
	smallImgLeft = 0;
	smallImgSWidth = smallImgClone.offsetWidth;
	smallImgSHeight = smallImgClone.offsetHeight;

	buyBtnInterval = setInterval(function() {
		borderRadiusNum++;
		smallImgSWidth -= 5;
		smallImgSHeight -= 5;
		smallImgClone.style.width = smallImgSWidth + "px";
		smallImgClone.style.height = smallImgSHeight + "px";
		smallImgClone.style.borderRadius = borderRadiusNum + "%";
		if(smallImgSWidth <= 0) {
			clearInterval(buyBtnInterval);
		}
	}, 10)
}

//============================ 右边栏 =====================
$(".goods_standcon_right").find("ul").find("li:eq(0)").find("span").addClass("goods_pointer_active");
$(".goods_standcon_right").find("ul").find("li").click(function() {
		index = $(this).index();
		$(".goods_standcon_right").find("ul").find("li").find("span").not("span:eq(" + index + ")").removeClass("goods_pointer_active");
		$(this).find("span").addClass("goods_pointer_active");
	})
	// 右边栏滚动 指针自动更换
function rightIcoScroll() {

	if(window.scrollTop <= $('#goods_standcon_imgs').offset().top - 20) {
		$(".goods_standcon_right ul li span").removeClass("goods_pointer_active");
		$(".goods_standcon_right ul").find("li:eq(0)").find(".goods_pointer").addClass("goods_pointer_active");
	} else if(window.scrollTop > $('#goods_standcon_imgs').offset().top && window.scrollTop < $('#goods_pro_comment').offset().top - 20) {
		$(".goods_standcon_right ul li span").removeClass("goods_pointer_active");
		$(".goods_standcon_right ul").find("li:eq(1)").find(".goods_pointer").addClass("goods_pointer_active");
	} else if(window.scrollTop > $('#goods_pro_comment').offset().top && window.scrollTop < $('#goodspacking').offset().top - 20) {
		$(".goods_standcon_right ul li span").removeClass("goods_pointer_active");
		$(".goods_standcon_right ul").find("li:eq(2)").find(".goods_pointer").addClass("goods_pointer_active");
	} else if(window.scrollTop > $('#goodspacking').offset().top && window.scrollTop < $('#aftermarket').offset().top - 20) {
		$(".goods_standcon_right ul li span").removeClass("goods_pointer_active");
		$(".goods_standcon_right ul").find("li:eq(3)").find(".goods_pointer").addClass("goods_pointer_active");
	} else if(window.scrollTop > $('#aftermarket').offset().top && window.scrollTop < $('#common_problem').offset().top - 20) {
		$(".goods_standcon_right ul li span").removeClass("goods_pointer_active");
		$(".goods_standcon_right ul").find("li:eq(4)").find(".goods_pointer").addClass("goods_pointer_active");
	} else if(window.scrollTop >= $('#common_problem').offset().top - 20) {
		$(".goods_standcon_right ul li span").removeClass("goods_pointer_active");
		$(".goods_standcon_right ul").find("li:eq(5)").find(".goods_pointer").addClass("goods_pointer_active");
	}
}
var UID1 = '';
if(sessionStorage.getItem("currentUser") != null) {
	UID1 = JSON.parse(sessionStorage.getItem("currentUser")).Uid.split("'")[1];
}

//立即购买
$('.goods_buyNow').on("click", function() {
	if(sessionStorage.getItem("currentUser") != null) {
		sessionStorage.setItem("paygood", aa);
		sessionStorage.setItem("paynum", $('.goods_number').val());
		window.location.href = 'pay.html';
	} else {
		$('.userLogin').show('fast');
	}
});

//=================== 商品评价 ======================
$.ajax({
	type: "post",
	url: "http://115.28.227.1/projects/xa/php/php08/common.php",
	async: true,
	data: {
		type: "getview",
		a: "selectview",
		Gid: aa,
	},
	success: function(res) {
		console.log(res[0]);
		for(var i = 0; i < res.length; i++) {
			$('.goods_userComment_display').append('<div class="goods_userComment_userlist">' +
				'<div class="goods_userComment_user">' +
				'<div class="goods_userHeadImg">' +
				'<img src="' + res[i].HeadImg + '" />' +
				'</div>' +
				'<div class="goods_userCard">' +
				'<p class="goods_username">' + res[i].NickName + '</p>' +
				'</div>' +
				'</div>' +
				'<div class="goods_userComment_box">' +
				'<div class="goods_userBox_top">' +
				'<div class="goods_userBox_topCon">' +
				'<span class="goods_user_stars"></span>' +
				'<span class="goods_userComment_pubTime">2016-12-22</span>' +
				'</div>' +
				'</div>' +
				'<div class="goods_userBox_Bottom">' +
				'<div class="goods_userComment_text">' +
				'心得：' +
				'<p class="goods_userComment_con">' + res[i].view + '</p>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>')
		}

	}
});

//最新上新
$.ajax({
	type: "get",
	url: "http://115.28.227.1/projects/xa/php/php08/common.php",
	async: true,
	data: {
		type: "newgoods"
	},
	success: function(res) {
		for(var i = 0; i < res.length; i++) {
			var goodinfo = JSON.parse(res[i].GoodInfo);
			$('.putnew').append('<li>' +
				'<a href="goods_details.html?id=' + res[i].ID + '" style="text-decoration:none">' +
				'<img src="' + goodinfo.firstImg + '" style="width:155px;height:155px"/>' +
				'<div class="goods_new_det">' +
				'<p class="goods_new_text" style="color:#444;margin-bottom:0;font-weight:bold;font-size:1.1em">' + goodinfo.goodName + '</p>' +
				'<p class="goods_new_price" style="color:red">¥' + goodinfo.price + '</p>' +
				'</div>' +
				'</a>' +
				'</li>')
		}
	}
})

//动画

function clearTimer() {
	clearInterval(timer);
}

$('.goods_buyCar').on("click", function() {
	if(UID) {
		$('.shopData').html("");
		carnum();
		buyAnimate();
	} else {
		$('.userLogin').show('fast');
	}
})