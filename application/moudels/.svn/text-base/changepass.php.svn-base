<?php
	header("Content-type:text/json","Access-Control-Allow-Origin:*");

	require_once("../sqlConnect.php");
	$oldpass = $_POST["oldpass"];
	$newpass = $_POST["newpass"];
	//从数据库查询原密码是否正确
	$sql = "SELECT * FROM admin WHERE PassWord = '{$oldpass}'";
	//执行sql语句
	$res = excute($sql);
	$result = $res->fetch_assoc();
	if($result){
		// 密码正确
		$sql1="UPDATE `admin` SET `PassWord`='{$newpass}' WHERE PassWord='{$oldpass}'";
		$res1 = excute($sql1);
		$result1 = $res1->fetch_assoc();
		if($result1){
			$info = array("err"=>0,"errmsg"=>"密码修改成功");
		}
	}else{
		//密码不正确
		$info = array("err"=>1,"errmsg"=>"原密码不正确");
	}
  	echo json_encode($info);
?>