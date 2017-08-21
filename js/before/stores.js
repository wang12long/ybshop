var pageToolBar = document.querySelector("#pageToolbar");
// =============================== 选择类型 (全部／精选...) ==========================
var opStyle = "selall";
var kinds = 0;

$('.selall').css({
	'background': 'red',
	'color': 'white'
});

pageLoad(0);

//查看全部店铺
$('.selall').click(function() {
	opStyle = "selall";
	pageToolBar.innerHTML = "";
	$('.storeA span').css({
		'background': 'white',
		'color': 'rgb(71,71,71)'
	})
	$(this).css({
		'background': 'red',
		'color': 'white'
	})
	pageLoad(0);
})

//精选商铺
$('.selX').click(function() {
	opStyle = "selX";
	$('.storeA span').css({
		'background': 'white',
		'color': 'rgb(71,71,71)'
	})
	$(this).css({
		'background': 'red',
		'color': 'white'
	})
	pageLoad(0);
})


//其他类别
$('.selclass').click(function() {
	opStyle = "selClass";
	kinds = $(this).text();
	console.log(kinds);
	$('.storeA span').css({
		'background': 'white',
		'color': 'rgb(71,71,71)'
	})
	$(this).css({
		'background': 'red',
		'color': 'white'
	})
	pageLoad(0);
})
//创建一个数组存储店铺ID

function pageLoad(pageNo) {
var storesIDArr=[];
	console.log(kinds);
	$.ajax({
		type: "get",
		url: "http://115.28.227.1/projects/xa/php/php08/common.php",
		async: true,
		data: {
			type: "getshop",
			page: pageNo,
			op: opStyle,
			kind: kinds
		},
		success: function(res) {
			var response = JSON.parse(res);
			var responseObjectArr = response.object;
			for(var i=0;i<responseObjectArr.length;i++){
				storesIDArr.push(responseObjectArr[i].ID);
			}
			
// ------------------------------------ 全部商品分页 -----------------------------------
			var number = response.number;
			if(number > 0) {
				var pageNumber = number / 10;
				pageToolBar.innerHTML = "";
				for(var i = 0; i < pageNumber; i++) {
					var pageBtn = document.createElement("span");
					pageBtn.index = i;
					pageBtn.innerText = i + 1;
					pageBtn.className = "pageBtn";
					pageToolBar.appendChild(pageBtn);
					pageBtn.onclick = function() {
						var index = this.index;
						pageLoad(index);
//						$(".pageBtn").not($(this)).removeClass("pageBtnClick");
						$(".pageBtn:eq(" + index + ")").addClass("pageBtnClick");
					}
				}
			}else{
				pageToolBar.innerHTML = "<div class='storeAtt'>这里什么都没有哦～</div>";
				$(".storeAtt").css({
					"font-size":"1.2rem",
					"color":"#666"
				})
			}
// ------------------------------- 商品分类内容加载 -------------------------------
			var storeB = document.querySelector('#storeBul');
			storeB.innerHTML = "";
			for(var i = 0; i < responseObjectArr.length; i++) {
				var resStoreMsg = JSON.parse(responseObjectArr[i].StoreMsg);
				storeB.innerHTML += '<li class="onestore">' +
					'<div class="storeBa">' +
					'<img src="' + resStoreMsg.storeimg + '" />' +
					'</div>' +
					'<div class="storeBb">' +
					'<strong>' + responseObjectArr[i].StoreName + '</strong><span class="guanzhu">关注</span>' +
					'<div>' +
					'<img src="' + resStoreMsg.logo + '" />' +
					'</div>' +
					'<div>' +
					'<span>卖家：' + resStoreMsg.name + '</span>' +
					'<img src="../img/pa.html" />' +
					'<img src="../img/online.ww" />' +
					'</div>' +
					'<div><span>所在地：</span><span>' + resStoreMsg.province + ' ' + resStoreMsg.county + '</span></div>' +
					'<a href="#">共<span>14</span>件宝贝&gt;&gt;</a>' +
					'</div>' +
					'<div class="storeBc">' +
					'<b>店铺动态评分</b>' +
					'<div>描述相符：<span>5</span></div>' +
					'<div>服务态度：<span>5</span></div>' +
					'<div>发货速度：<span>5</span></div>' +
					'</div>' +
					'<div class="storeBd">' +
					'<ul class="oneshop'+responseObjectArr[i].ID+'">' +					
					'</ul>' +
					'</div>' +
					'</li>'
			}
			
			//创建店铺商品
				console.log(storesIDArr);
			for (var i=0;i<storesIDArr.length;i++) {
				var ids=storesIDArr[i]
				console.log(ids);
				$.ajax({
				type: "get",
				url: "http://115.28.227.1/projects/xa/php/php08/Back/backCommon.php",
				async: true,
				data: {
					type: "getgoodinfo",
					DID: ids
				},
				success: function(res) {
					console.log(res)
					if(res.length>=4){
						res.length=4;
					}
					for(var i=0;i<res.length;i++){
//						 $('.oneshop'+responseObjectArr[i].ID+'').html("");
						 var goodinfo=JSON.parse(res[i].GoodInfo);
						$('<li class="storegood"><a href="goods_details.html?id='+res[i].ID+'" style="text-decoration:none">' +
					'<div>' +
					'<img src="'+goodinfo.firstImg+'" />' +
					'<div class="price">￥<span>'+goodinfo.price+'</span></div>' +
					'</div>' +
					'<p class="goodInfo">'+goodinfo.goodName+'</p>' +
					'</a></li>').appendTo('.oneshop'+res[i].DID+'')
					}
				}
			});
			}
		}

	});
}	