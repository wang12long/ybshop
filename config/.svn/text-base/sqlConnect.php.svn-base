<?php
	header("Access-Control-Allow-Origin:*");

	$db_host = "localhost";
	$db_user = "root";
	$db_password = "nilaiba";
	$db_name = "08_youba";
	$mysqli = new mysqli($db_host,$db_user,$db_password,$db_name);
	
	if(!$mysqli){
		echo "数据库连接失败" . $mysqli->connect_error;
		exit();
	}
	function excute($sql){
		//声明全局变量
		global $mysqli;
		//设置数据的编码格式
		$mysqli->query("set names utf8");
		//开始执行sql语句
		$res = $mysqli->query($sql);
		return $res;
	}
?>