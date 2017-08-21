//判断是否有人登录
var UID='';
if(sessionStorage.getItem("currentUser")!=null){
	UID = JSON.parse(sessionStorage.getItem("currentUser")).Uid.split("'")[1];
}
//如果有人登录
if(UID){
	$.ajax({
		type:"get",
		url:"http://115.28.227.1/projects/xa/php/php08/common.php",
		async:true,
		data:{
			type:"selcol",
			UID:UID,
			GID:''
		},
		success:function(res){
			for(var i=0;i<res.length;i++){
				var goodinfo=JSON.parse(res[i].GoodInfo);
				$('.myfavoriteInfo').append('<li>'+
							'<div class="myfavoriteInfoa">'+
								'<img src="'+goodinfo.firstImg+'"/>'+
							'</div>'+
							'<div class="myfavoriteInfob">'+
								'<a href=""><span class="infoHover">'+goodinfo.goodName+'</span></a>'+
							'</div>'+
							'<b class="myfavoriteInfoc">￥<span>'+goodinfo.price+'</span></b>'+							
						'</li>')
			}
		}
	})
}