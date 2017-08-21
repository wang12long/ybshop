//全部功能
$(".allFunC").find("li").find("a").hover(function() {
		$(this).css({
			'color': 'red'
		});
	}, function() {
		$(this).css({
			'color': 'rgb(71,71,71)'
		});
	})
	//用户信息
$(".allFunDb").find("li").find("a").hover(function() {
	$(this).css({
		'color': 'red'
	});
}, function() {
	$(this).css({
		'color': 'rgb(89,153,208)'
	});
});

$(".allFunDc").find("li").hover(function() {
	$(this).find("a").css({
		'color': 'red'
	});
	$(this).find("i").css({
		'transform': 'translateY(-7px)'
	});
}, function() {
	$(this).find("a").css({
		'color': 'rgb(71,71,71)'
	});
	$(this).find("i").css({
		'transform': 'translateY(0px)'
	});
});
$(".allFunEa").find("li").eq(0).css({});
//出生日期
$(function() {
	$.ms_DatePicker({
		YearSelector: ".sel_year",
		MonthSelector: ".sel_month",
		DaySelector: ".sel_day"
	});
});
(function($) {
	$.extend({
		ms_DatePicker: function(options) {
				var defaults = {
					YearSelector: "#sel_year",
					MonthSelector: "#sel_month",
					DaySelector: "#sel_day",
					FirstText: "--",
					FirstValue: 0
				};
				var opts = $.extend({}, defaults, options);
				var $YearSelector = $(opts.YearSelector);
				var $MonthSelector = $(opts.MonthSelector);
				var $DaySelector = $(opts.DaySelector);
				var FirstText = opts.FirstText;
				var FirstValue = opts.FirstValue;

				// 初始化 
				var str = "<option value=\"" + FirstValue + "\">" + FirstText + "</option>";
				$YearSelector.html(str);
				$MonthSelector.html(str);
				$DaySelector.html(str);

				// 年份列表 
				var yearNow = new Date().getFullYear();
				var yearSel = $YearSelector.attr("rel");
				for(var i = yearNow; i >= 1900; i--) {
					var sed = yearSel == i ? "selected" : "";
					var yearStr = "<option value=\"" + i + "\" " + sed + ">" + i + "</option>";
					$YearSelector.append(yearStr);
				}

				// 月份列表 
				var monthSel = $MonthSelector.attr("rel");
				for(var i = 1; i <= 12; i++) {
					var sed = monthSel == i ? "selected" : "";
					var monthStr = "<option value=\"" + i + "\" " + sed + ">" + i + "</option>";
					$MonthSelector.append(monthStr);
				}

				// 日列表(仅当选择了年月) 
				function BuildDay() {
					if($YearSelector.val() == 0 || $MonthSelector.val() == 0) {
						// 未选择年份或者月份 
						$DaySelector.html(str);
					} else {
						$DaySelector.html(str);
						var year = parseInt($YearSelector.val());
						var month = parseInt($MonthSelector.val());
						var dayCount = 0;
						switch(month) {
							case 1:
							case 3:
							case 5:
							case 7:
							case 8:
							case 10:
							case 12:
								dayCount = 31;
								break;
							case 4:
							case 6:
							case 9:
							case 11:
								dayCount = 30;
								break;
							case 2:
								dayCount = 28;
								if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
									dayCount = 29;
								}
								break;
							default:
								break;
						}

						var daySel = $DaySelector.attr("rel");
						for(var i = 1; i <= dayCount; i++) {
							var sed = daySel == i ? "selected" : "";
							var dayStr = "<option value=\"" + i + "\" " + sed + ">" + i + "</option>";
							$DaySelector.append(dayStr);
						}
					}
				}
				$MonthSelector.change(function() {
					BuildDay();
				});
				$YearSelector.change(function() {
					BuildDay();
				});
				if($DaySelector.attr("rel") != "") {
					BuildDay();
				}
			} // End ms_DatePicker 
	});
})(jQuery);

//评价内容
//评价数量
	$.ajax({
	type:"post",
	url:"http://115.28.227.1/projects/xa/php/php08/common.php",
	async:true,
	data:{
		type:"getview",
		a:"showview",
		Uid:JSON.parse(sessionStorage.getItem("currentUser")).Uid.split("'")[1]
	},
	success:function(res){
		console.log(res)
for(var i = 0; i < res.length; i++) {
		console.log(res[i].view)
	var $myevaluateInfo = $("<ul class='myevaluateInfo myevaluatewidth'>" +
		"<li class='shopinfoss clearfix'>" +
		"<div>" +
		"<a href=''><img src='"+JSON.parse(res[i].GoodInfo).firstImg+"' /></a>" +
		"</div>" +
		"<div style='text-align:center'>" +
		"<a href=''><span class='infoHover'>"+res[i].GoodName+"</span></a>" +
		"</div>" +
		"</li>" +
		"<li class='myevaluateInfoa'>" +
		"<span>"+res[i].StoreName+"</span>" +
		"</li>" +
		"<li class='myevaluateInfob'>" +
		"<span>2017-01-12 20:25:21</span>" +
		"</li>" +
		"<li class='myevaluateInfoc'>" +
		"<span>"+res[i].view+"</span>" +
		"</li>" +
		"<li class='myevaluateInfod'>" +
		"<span id='"+res[i].ID+"'>评价</span>" +
		"</li>" +
		"</ul>");
	$(".allComment").append($myevaluateInfo);
}

var flag = false;
var Cid;

$('.myevaluateInfod').find("span").on('click', function() {
	if(flag) {
		flag = false;
	} else {
		$('#commCont').val("");
		$('.revise').css({
			'display': 'block'
		});
		flag = true;
		Cid=$(this)[0].id;
	}
});
$('#cancleBtn').on('click', function() {
	$('.revise').css({
		'display': 'none'
	});
	flag = false;
});
$('#isBtn').on('click', function() {
	
	if($('#commCont').val() == "") {
		alert("请填写您的评价");
	} else {
		flag = false;
		
		var view=$('#commCont').val();
		$('.revise').css({
			'display': 'none'
		});
		$.ajax({
			type:"post",
			url:"http://115.28.227.1/projects/xa/php/php08/common.php",
			async:true,
			data:{
				type:"getview",
				a:"addview",
				Cid:Cid,
				view:view
			},
			success:function(res){
				window.history.go(0);
			}
		});
	}
});

	}
});

//撑开评价界面


