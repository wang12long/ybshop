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
			type:"selshopcol",
			UID:UID,
			DID:''
		},
		success:function(res){
			for(var i=0;i<res.length;i++){
				var shopinfo=JSON.parse(res[i].StoreMsg);
				$('#storeList').append('<ul class="myfavoritestorewidth myfavoritestoreInfo">'+
						'<li class="storea">'+
							'<img src="'+shopinfo.logo+'"/>'+
						'</li>'+
						'<li class="storeb">'+
							'<span>'+shopinfo.storeName+'</span>'+
						'</li>'+
						'<li class="storec">'+
							'<a href="#">'+shopinfo.name+'</a>'+
						'</li>'+
						'<li class="stored">'+
							'<span>'+shopinfo.phoneNum+'</span>'+
						'</li>'+
						'<li class="storee">'+
							'<span>'+shopinfo.email+'</span>'+
						'</li>'+
						'<li class="storef">'+
							'<span class="btn btn-danger" id="'+res[i].DID+'" onclick="del(this)">取消关注</span>'+
						'</li>'+
					'</ul>')
				
				
			}
		}
	})
}
function del(a){
	var DID=$(a).attr('id');
	 var r=confirm('确认取消关注？');
	  if (r==true){
			$.ajax({
				type:"get",
				url:"http://115.28.227.1/projects/xa/php/php08/common.php",
				async:true,
				data:{
					type:"delshopcol",
					UID:UID,
					DID:DID
				},
				success:function(res){
					if(res.err==0){
	  					$(a).parent().parent().remove();	  					
					}
				}
			});	  	
	  }
}

