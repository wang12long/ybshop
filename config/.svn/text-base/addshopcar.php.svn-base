<?php
	header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("sqlConnect.php");
	$kind=$_POST['kind'];
	switch($kind){
		case 'getRegistInfo':
		getRegistInfo();
		break;
		case 'getUidInfo':
		getUidInfo();
		break;
		case 'getAllInfo':
		getAllInfo();
		break;
		case 'aaaa':
		aaaa();
		break;
	}
	function getRegistInfo(){
	$Uid = $_POST["UID"];
	$Gid = 	$_POST["GID"];		
	$num = 	$_POST["num"];

	$sql = "select * from goodcar where UID='{$Uid}' and GID='{$Gid}'";
	$res = excute($sql);
	$result = $res->fetch_assoc();
	if ($result) {
		$sql = "select Num from goodcar where UID='{$Uid}' and GID='{$Gid}'";
		$res = excute($sql);
		$r = mysqli_fetch_assoc($res);
		$num1=$r['Num']+$num;
	 	$sql1 = "update goodcar set Num='{$num1}' where UID='{$Uid}' and GID='{$Gid}'";
	 	$res1 = excute($sql1);
	} else {
		//从注册页面获取数据存放到数据库	
		$sql = "insert into goodcar (UID, GID, Num) values ('{$Uid}', '{$Gid}', '{$num}')";
		$res = excute($sql);
		if ($res) {
			$info = array("err"=>0, "errmsg"=>"添加成功");
		} else {
			$info = array("err"=>1, "errmsg"=>"添加失败");
		}
	}
		echo json_encode($info);	
	}
	
	
	function getUidInfo(){
		$Uid = $_POST["Uid"];
		$sql = "select * from goodcar where UID='{$Uid}'";
		$res = excute($sql);
		$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
	}
	
	function getAllInfo(){
		$Gid = $_POST["Gid"];
		$sql = "select goodcar.GID,goodcar.Num,goods.GoodInfo,shop.StoreMsg from goods inner join goodcar on goodcar.GID=goods.ID inner join shop on shop.ID=goods.DID where goods.ID='{$Gid}'";
		$res = excute($sql);

		$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
	}

function aaaa(){
		$Gid = $_POST["Gid"];
		$num= $_POST["num"];
		$Uid = $_POST["UID"];
		$sql1 = "update goodcar set Num='{$num}' where UID='{$Uid}' and GID='{$Gid}'";
		$res = excute($sql);

		$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
	}
?>