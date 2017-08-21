<?php
	header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("sqlConnect.php");
	$aaa=$_POST['a'];
	switch($a){
		case 'a':
		a();
		break;
		case 'aa':
		aa();
		break;
		case 'aaa':
		aaa();
		break;
	}
	function a(){
	$Uid = $_POST["Uid"];
	$Gid = 	$_POST["Gid"];		
	$num = 	$_POST["num"];
		$sql = "insert into pays (GID, Num, UID) values ('{$Gid}', '{$num}', '{$Uid}')";
		$res = excute($sql);
		if ($res) {
			$info = array("err"=>0, "errmsg"=>"添加成功");
		} else {
			$info = array("err"=>1, "errmsg"=>"添加失败");
		
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
	
	function aa(){
		$Uid = $_POST["Uid"];
		$Gid = 	$_POST["Gid"];		
		$sql = "delete from pays where GID='{$Gid}' and UID='{$Uid}'";
		$res = excute($sql);
	}
?>