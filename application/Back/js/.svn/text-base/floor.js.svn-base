var url = decodeURI(location.href);
var STR = url.split('?')[1];
var pages = STR.substring(3);


$(".floor1a").each(function(n, obj) {
	var currentId = n;
	$(this).on('click', function() {
		var UId = $(this).parent().parent().parent().parent().parent().prev()[0].id + "-" + (currentId + 1);
		console.log(UId);
		var floor1Arr = [];
		for(var i = 0; i < 8; i++) {
			floor1Arr.push($($(".floorstyle table").find("tr:eq(" + (currentId + 1) + ")").find("td").find("input")[i]).val());
		}
//		console.log(floor1Arr);
		$.ajax({
			type: "post",
			url: "http://115.28.227.1/projects/xa/php/php08/Back/backCommon.php",
			async: true,
			data: {
				type: "floor",
				UId: UId,
				parameter: floor1Arr,
				op: "up"
			},
			success: function(res) {
				var result=JSON.parse(res);
				if(result.err==0){
					alert('提交成功')
					window.history.go(0);
				}
			}
		});
	});

})

$.ajax({
	type: "post",
	url: "http://115.28.227.1/projects/xa/php/php08/Back/backCommon.php",
	async: true,
	data: {
		type: "floor",
		parameter: "",
		op: "sel"
	},
	success: function(res) {
//				console.log(JSON.parse(JSON.parse(res)));
		var floor1 = [];	
		var floor2 = [];	
		var floor3 = [];	
		var floor4 = [];	
		var floor5 = [];	
		var floor6 = [];	
		var floor7 = [];	
		var floor8 = [];	
		var floor11 = [];
		var floor12 = [];
		var floor13 = [];
		var floor14 = [];
		var floors = []; 
		for(var i = 0; i < JSON.parse(JSON.parse(res)).length; i++) {
			if (JSON.parse(JSON.parse(res))[i].LID.substring(0,1) == 1) {
				floor1.push(JSON.parse(JSON.parse(res))[i]);
			} else if (JSON.parse(JSON.parse(res))[i].LID.substring(0,1) == 2) {
				floor2.push(JSON.parse(JSON.parse(res))[i]);
			} else if (JSON.parse(JSON.parse(res))[i].LID.substring(0,1) == 3) {
				floor3.push(JSON.parse(JSON.parse(res))[i]);
			} else if (JSON.parse(JSON.parse(res))[i].LID.substring(0,1) == 4) {
				floor4.push(JSON.parse(JSON.parse(res))[i]);
			} else if (JSON.parse(JSON.parse(res))[i].LID.substring(0,1) == 5) {
				floor5.push(JSON.parse(JSON.parse(res))[i]);
			} else if (JSON.parse(JSON.parse(res))[i].LID.substring(0,1) == 6) {
				floor6.push(JSON.parse(JSON.parse(res))[i]);
			} else if (JSON.parse(JSON.parse(res))[i].LID.substring(0,1) == 7) {
				floor7.push(JSON.parse(JSON.parse(res))[i]);
			} else if (JSON.parse(JSON.parse(res))[i].LID.substring(0,1) == 8) {
				floor8.push(JSON.parse(JSON.parse(res))[i]);
			}
		}
		floors.push(floor1,floor2,floor3,floor4,floor5,floor6,floor7,floor8);
		var temp;
		if (pages == 1) {
			temp = 0;
			selectStyle(temp);
		} else if (pages == 2) {
			temp = 1;
			selectStyle(temp);
		} else if (pages == 3) {
			temp = 2;
			selectStyle(temp);
		} else if (pages == 4) {
			temp = 3;
			selectStyle(temp);
		} else if (pages == 5) {
			temp = 4;
			selectStyle(temp);
		} else if (pages == 6) {
			temp = 5;
			selectStyle(temp);
		} else if (pages == 7) {
			temp = 6;
			selectStyle(temp);
		} else if (pages == 8) {
			temp = 7;
			selectStyle(temp);
		}
		
		function selectStyle(temp) {
			for (var i = 0; i < floors[temp].length; i++) {
				if (floors[temp][i].LID.substring(2,3) == 1) {
					floor11.push(floors[temp][i]);
				} else if (floors[temp][i].LID.substring(2,3) == 2) {
					floor12.push(floor1[i]);
				} else if (floors[temp][i].LID.substring(2,3) == 3) {
					floor13.push(floor1[i]);
				} else if (floors[temp][i].LID.substring(2,3) == 4) {
					floor14.push(floor1[i]);
				}
			}			
		}
		
		for (var i = 0; i < floor11.length; i++) {
			$('.floorstyle').find('tr:eq(1)').find('td').eq(i).find('input').val(floor11[i].Numbers);
		}
		for (var i = 0; i < floor12.length; i++) {
			$('.floorstyle').find('tr:eq(2)').find('td').eq(i).find('input').val(floor12[i].Numbers);
		}
		for (var i = 0; i < floor13.length; i++) {
			$('.floorstyle').find('tr:eq(3)').find('td').eq(i).find('input').val(floor13[i].Numbers);
		}
		for (var i = 0; i < floor14.length; i++) {
			$('.floorstyle').find('tr:eq(4)').find('td').eq(i).find('input').val(floor14[i].Numbers);
		}			
	}
});