<?php
	header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("../sqlConnect.php");
	$storename = $_POST["storename"];
	$password = $_POST["password"];
	//从数据库查询当前登录用户信息
	$sql = "SELECT * FROM shop WHERE StoreName = '{$storename}'";
	//执行sql语句
	$res = excute($sql);
	$result = $res->fetch_assoc();
	if($result){
		//存在该用户
		// 判断密码是否正确
		if($result["Pass"] == $password){
			$info = array("err"=>0,"errmsg"=>"登录成功");
		}else{
			$info = array("err"=>2,"errmsg"=>"用户名和密码不匹配");
		}
	}else{
		//该用户不存在
		$info = array("err"=>1,"errmsg"=>"用户名不存在");
	}
	echo '11';
//	echo json_encode($info);
?>