var fileM = document.getElementById("uplogo");
var imgs = [];
$("#uplogo").on("change", function() {
	var fileD = fileM.files[0];
	var formData = new FormData();
	formData.append("file", fileD);

	var ajax = new XMLHttpRequest();
	ajax.open("POST", "http://115.28.227.1/projects/xa/php/php08/storereigister.php");
	ajax.send(formData);
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			var obj = JSON.parse(ajax.responseText);
			if(obj.err == 0) {
				//创建img标签显示图片
				var img = $("<img src='" + obj.msg + "' alt='' >");
//				console.log(obj.msg);
				//添加标签
				$("#logo1").html(img);
				//存储该图片的链接
				imgs.push(obj.msg);
//				console.log(imgs);
			}
		}
	}
});

var fileN = document.getElementById("uphimg");
var imgss = [];
$("#uphimg").on("change", function() {
	var fileD = fileN.files[0];
	var formData = new FormData();
	formData.append("file", fileD);

	var ajax = new XMLHttpRequest();
	ajax.open("POST", "http://115.28.227.1/projects/xa/php/php08/storereigister.php");
	ajax.send(formData);
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			var obj = JSON.parse(ajax.responseText);
			if(obj.err == 0) {
				//创建img标签显示图片
				var img = $("<img src='" + obj.msg + "' alt='' >");
//				console.log(obj.msg);
				//添加标签
				$("#logo2").html(img);
				//存储该图片的链接
				imgss.push(obj.msg);
//				console.log(imgss);
			}
		}
	}
});
var flag1=flag2=flag3=flag4=flag5=flag6=flag7=flag8=true;
//
function canregister(){
	if($('.onlyname').val()==""){
		$('.onlyname').attr("placeholder", "此处内容必填");
		flag1=false;
	}else{
		flag1=true;
	}
	if($('#detailAddress').val()==""){
		$('#detailAddress').attr("placeholder", "此处内容必填");
		flag2=false;
	}else{
		flag2=true;
	}
	if($('#name').val()==""){
		$('#name').attr("placeholder", "此处内容必填");
		flag3=false;
	}else{
		flag3=true;
	}
	if($('#phoneNum').val()==""){
		$('#phoneNum').attr("placeholder", "此处内容必填");
		flag4=false;
	}else{
		flag4=true;
	}
	if($('#email').val()==""){
		$('#email').attr("placeholder", "此处内容必填");
		flag5=false;
	}else{
		flag5=true;
	}
	if($('#password').val()==""){
		$('#password').attr("placeholder", "此处内容必填");
		flag6=false;
	}else{
		flag6=true;
	}
	if($("#uplogo").val()==""){
		$("#chosefile1").show("fast");
		flag7=false;
	}else{
		$("#chosefile1").hide("fast");
		flag7=true;
	}
	$("#uplogo").on("change",function(){
		if($("#uplogo").val()!=""){
			$("#chosefile1").hide("fast");
		}
	})
	if($("#uphimg").val()==""){
		$("#chosefile2").show("fast");
		false8=false;
	}else{
		$("#chosefile2").hide("fast");
		false8=true;
	}
	$("#uphimg").on("change",function(){
		if($("#uphimg").val()!=""){
			$("#chosefile2").hide("fast");
		}
	})
}
$('#sub').on('click', function() {
	canregister();
	if(flag1==true&&flag2==true&&flag3==true&&flag4==true&&flag5==true&&flag6==true&&flag7==true&&flag8==true){
		var info = $("#form").serializeArray();
			var storeinfo = {};
			for(var i = 0; i < info.length; i++) {
				var obj = info[i];
				storeinfo[obj.name] = obj.value;
			}
//			console.log(storeinfo);
			storeinfo["imgs"] = imgs;
			storeinfo['logo'] = imgs[imgs.length - 1];
			storeinfo['storeimg'] = imgss[imgss.length - 1];
			$.ajax({
				type: "get",
				url: "http://115.28.227.1/projects/xa/php/php08/storeinfo.php",
				async: true,
				data: {
					parameter: JSON.stringify(storeinfo)
				},
				success: function(res) {
					console.log(res);
					if(res.err == "0"){
						alert("注册成功");
						window.location.href="../application/index.html"
					}else{
						alert("注册失败");
					}
				}
			});
	}
})

