<?php
	header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("sqlConnect.php");
	$aaa=$_POST['aaa'];
	switch($aaa){
		case 'aa':
		aa();
		break;
		case 'aaa':
		aaa();
		break;
		case 'aaaa':
		aaaa();
		break;
	}
	function aa(){
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
			$info = array("err"=>0, "errmsg"=>"地址添加成功");
		} else {
			$info = array("err"=>1, "errmsg"=>"地址添加失败");
		}
	}
	echo json_encode($info);	
	}
	
	
	function aaa(){
		$Uid = $_POST["Uid"];
		$sql = "select * from address where UID='{$Uid}'";
		$res = excute($sql);

		$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
	}
	
	function aaaa(){
		$Uid = $_POST["Uid"];
		$sql = "delete from address where ID='{$Uid}'";
		$res = excute($sql);
	}
?>