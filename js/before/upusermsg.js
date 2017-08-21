var UID = "";

if(sessionStorage.getItem("currentUser") != null) {
	UID = JSON.parse(sessionStorage.getItem("currentUser")).Uid.split("'")[1];
	$.ajax({
		type: "get",
		url: "http://115.28.227.1/projects/xa/php/php08/common.php",
		async: true,
		data: {
			type: "users",
			UID: UID
		},
		success: function(res) {
			//		console.log(res[0]);
			$('.afterLogin_nickname').text(res[0].NickName);
			$('.nickname').text(res[0].NickName);
			headImg.push(res[0].HeadImg);
			$('.allFunDa').html('<img style="width:80px;height:80px" src="' + headImg[0] + '">');
			$('#nickname').val(res[0].NickName);
			if(res[0].Birthday == null) {
				$('#years').val(2000);
				$('#months').val(2);
				$('#days').val(14);
			} else {
				var bir = res[0].Birthday.split('-');
				$('#years').val(bir[0]);
				$('#months').val(bir[1]);
				$('#days').val(bir[2]);
			}
			if(res[0].Sex == null) {
				$("input:radio[name=sex][value=0]").attr("checked", true);
			} else if(res[0].Sex == 0) {
				$("input:radio[name=sex][value=0]").attr("checked", true);
			} else if(res[0].Sex == 1) {
				$("input:radio[name=sex][value=1]").attr("checked", true);
			} else if(res[0].Sex == 2) {
				$("input:radio[name=sex][value=2]").attr("checked", true);
			}

			$('#himgs').html('<img style="width:120px;height:120px;border-radius: 120px;" src="' + headImg[0] + '">');
		}
	});
}

var fileN = document.getElementById("upUHimg");
var headImg = [];
$("#upUHimg").on("change", function() {
	var fileD = fileN.files[0];
	var formData = new FormData();
	formData.append("file", fileD);
	var ajax = new XMLHttpRequest();
	ajax.open("POST", "http://115.28.227.1/projects/xa/php/php08/userheadImg.php");
	ajax.send(formData);
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			var obj = JSON.parse(ajax.responseText);
			if(obj.err == 0) {
				//创建img标签显示图片
				var img = $("<img src='" + obj.msg + "' alt='' class='img-circle'>");
				//				console.log(obj.msg);
				//添加标签
				$("#himgs").html(img);
				//存储该图片的链接
				headImg = [];
				headImg.push(obj.msg);
				//				console.log(headImg);
			}
		}
	}
});
$('#subusermsg').click(function() {
	console.log($('.afterLogin_nickname'))
	if(UID) {
		var nickname = $('#nickname').val();
		var years = $('#years').val();
		var months = $('#months').val();
		var days = $('#days').val();
		var sex = $('input:radio:checked').val();
		var bir = years + '-' + months + '-' + days;

		$.ajax({
			type: "get",
			url: "http://115.28.227.1/projects/xa/php/php08/common.php",
			async: true,
			data: {
				type: 'updateuser',
				nickname: nickname,
				birthday: bir,
				sex: sex,
				headImg: headImg[0],
				UID: UID
			},
			success: function(res) {
				if(res.err == 0) {
					window.history.go(0);
				}
			}
		});
	}
})