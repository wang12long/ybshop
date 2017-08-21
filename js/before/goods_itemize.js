var classes1 = localStorage.getItem('class1');
var classes2 = localStorage.getItem('class2');
var classes3 = localStorage.getItem('class3');
var classes4 = localStorage.getItem('class4');
$('.selname').on('mouseenter', function() {
	$('this').css({
		'background': 'white',
		'color': 'black'
	})
})
if(classes1 != null) {
	$.ajax({
		type: "get",
		url: "http://115.28.227.1/projects/xa/php/php08/common.php",
		async: true,
		data: {
			type: 'getclassgoods',
			class1: classes1,
			op: 'big'
		},
		success: function(res) {
			$('#shouye').append('<span> > </span><span class="classbox">' + res[0].BigClass + '</span>');
			for(var i = 0; i < res.length; i++) {
				var goodinfo = JSON.parse(res[i].GoodInfo);
				$('.getclassgoods').append('<a href="goods_details.html?id=' + res[i].ID + '"><div class="goodsitem">' +
					'<div class="imgbox"><img src="' + goodinfo.firstImg + '" alt=""/></div>' +
					'<span class="pricess">¥89.0</span><span class="sold">已售0件</span>' +
					'<p class="namegoods">' + goodinfo.goodName + '</p>' +
					'</div></a>')
			}
		}
	});
}
if(classes2 != null) {
	$.ajax({
		type: "get",
		url: "http://115.28.227.1/projects/xa/php/php08/common.php",
		async: true,
		data: {
			type: 'getclassgoods',
			class2: classes2,
			op: 'mid'
		},
		success: function(res) {
			$('#shouye').append('<span> > </span><span class="classbox">' + res[0].BigClass + '</span>');
			$('#shouye').append('<span> > </span><span class="classbox">' + res[0].MiddleClass + '</span>');
			for(var i = 0; i < res.length; i++) {
				var goodinfo = JSON.parse(res[i].GoodInfo);
				$('.getclassgoods').append('<a href="goods_details.html?id=' + res[i].ID + '"><div class="goodsitem">' +
					'<div class="imgbox"><img src="' + goodinfo.firstImg + '" alt=""/></div>' +
					'<span class="pricess">¥89.0</span><span class="sold">已售0件</span>' +
					'<p class="namegoods">' + goodinfo.goodName + '</p>' +
					'</div></a>')
			}
		}
	});
}
if(classes3 != null) {
	$.ajax({
		type: "get",
		url: "http://115.28.227.1/projects/xa/php/php08/common.php",
		async: true,
		data: {
			type: 'getclassgoods',
			class3: classes3,
			op: 'sm'
		},
		success: function(res) {
			$('#shouye').append('<span> > </span><span class="classbox">' + res[0].BigClass + '</span>');
			$('#shouye').append('<span> > </span><span class="classbox">' + res[0].MiddleClass + '</span>');
			$('#shouye').append('<span> > </span><span class="classbox">' + res[0].Class + '</span>');
			for(var i = 0; i < res.length; i++) {
				var goodinfo = JSON.parse(res[i].GoodInfo);
				$('.getclassgoods').append('<a href="goods_details.html?id=' + res[i].ID + '"><div class="goodsitem">' +
					'<div class="imgbox"><img src="' + goodinfo.firstImg + '" alt=""/></div>' +
					'<span class="pricess">¥89.0</span><span class="sold">已售0件</span>' +
					'<p class="namegoods">' + goodinfo.goodName + '</p>' +
					'</div></a>')
			}
		}
	});
}
if(classes4 != null) {

	$.ajax({
		type: "get",
		url: "http://115.28.227.1/projects/xa/php/php08/common.php",
		async: true,
		data: {
			type: 'getclassgoods',
			class4: classes4,
			op: 'sea'
		},
		success: function(res) {

			$('#shouye').append('<span> > </span><span class="classbox">' + res[0].BigClass + '</span>');
			for(var i = 0; i < res.length; i++) {
				var goodinfo = JSON.parse(res[i].GoodInfo);

				$('.getclassgoods').append('<a href="goods_details.html?id=' + res[i].ID + '"><div class="goodsitem">' +
					'<div class="imgbox"><img src="' + goodinfo.firstImg + '" alt=""/></div>' +
					'<span class="pricess">¥89.0</span><span class="sold">已售0件</span>' +
					'<p class="namegoods">' + goodinfo.goodName + '</p>' +
					'</div></a>')
			}
		}
	});
}