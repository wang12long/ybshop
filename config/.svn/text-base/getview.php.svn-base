<?php
	header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("sqlConnect.php");
	$kind=$_POST['a'];
	switch($kind){
		case 'addview':
		addAddressNew();
		break;
		case 'showview':
		showview();
		break;
		case 'updateview':
		deleteAddress();
		break;
	}
	function addAddressNew(){
		$Uid = $_POST["Uid"];
	$province = 	$_POST["province"];		
	$addUserName = 	$_POST["addUserName"];
//	$adddetailed = 	$_POST["adddetailed"];
	$addphone = 	$_POST['addphone'];
	$addfixphone = 	$_POST["addfixphone"];
	$addemail = 	$_POST["addemail"];
	$postcode = 	$_POST["postcode"];
	$addsendtime = 	$_POST["addsendtime"];
//	echo $addphone;
	
	$type = $_POST["type"];

	
	$sql = "select * from address where UID='{$Uid}' and Address='{$province}' and Name='{$addUserName}' and Tel='{$addphone}' and Email='{$addemail}' and Postcode='{$postcode}'";
	$res = excute($sql);
	$result = $res->fetch_assoc();
	if ($result) {
		$info = array("err"=>1,"errmsg"=>"您新增的地址已存在");
	} else {
		//从注册页面获取数据存放到数据库	
		$sql = "insert into address (Address, Name, Tel, Email, Postcode, UID) values ('{$province}', '{$addUserName}', '{$addphone}', '{$addemail}', '{$postcode}', '{$Uid}')";
		$res = excute($sql);
		if ($res) {
			$sqll = "select ID from address where UID='{$Uid}' and Address='{$province}' and Name='{$addUserName}' and Tel='{$addphone}' and Email='{$addemail}' and Postcode='{$postcode}'";
			$sqlll = excute($sqll);
			
			
			$sqllll=[];
	foreach ($sqlll as $thisVal) {
			array_push($sqllll,$thisVal);
		}
	 $info = json_encode($sqllll);
			
			
			
		} else {
			$info = array("err"=>1, "errmsg"=>"地址添加失败");
		}
	}
	echo json_encode($info);	
	}
	
	
	function showview(){
		$Uid = $_POST["Uid"];
		$sql = $sql = "select * from goodcar inner join goods on goodcar.GID=goods.ID inner join shop on goods.DID=shop.ID inner join user on goodcar.UID=user.ID inner join address on goodcar.address=address.ID where goodcar.UID='{$Uid}' and paycar2=1";
		$res = excute($sql);

		$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
	}
	
	function deleteAddress(){
		$Uid = $_POST["Uid"];
		$sql = "delete from address where ID='{$Uid}'";
		$res = excute($sql);
	}
?>