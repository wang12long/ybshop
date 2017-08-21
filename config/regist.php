<?php
	header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("sqlConnect.php");
	$username = $_POST["username"];
	$password = $_POST["password"];
	$type = $_POST["type"];
	$sql = "select * from user where UserName='{$username}'";
	$res = excute($sql);
	$result = $res->fetch_assoc();
	if ($result) {
		$info = array("err"=>1,"errmsg"=>"用户已存在");
	} else {
		//从注册页面获取数据存放到数据库	
		$time = "YB" . time();
		$sql = "insert into user (UserName, PassWord,NickName) values ('{$username}', '{$password}','{$time}')";
		$res = excute($sql);
		if ($res) {
			$info = array("err"=>0, "errmsg"=>"注册成功");
		} else {
			$info = array("err"=>1, "errmsg"=>"注册失败");
		}
	}
	echo json_encode($info);	
?>