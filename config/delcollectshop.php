<?php
	header("Content-type:text/json");
	require_once("sqlConnect.php");
	$UID=$_GET["UID"];
	$GID=$_GET["GID"];
	$sql="DELETE FROM `collect` WHERE UID='{$UID}' and GID='{$GID}'";
	$res = excute($sql);
	if ($res) {
				$info = array("err"=>0, "errmsg"=>"取消收藏成功");
			} else {
				$info = array("err"=>1, "errmsg"=>"取消收藏失败");
			}
	echo json_encode($info);		
?>