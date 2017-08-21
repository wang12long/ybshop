<?php
	header("Content-type:text/json");
	require_once("sqlConnect.php");
	$UID=$_GET["UID"];
	$GID=$_GET["GID"];
	$sql="INSERT INTO collect(`UID`, `GID`) VALUES ('{$UID}','{$GID}')";
	$res = excute($sql);
	if ($res) {
				$info = array("err"=>0, "errmsg"=>"收藏成功");
			} else {
				$info = array("err"=>1, "errmsg"=>"收藏失败");
			}
	echo json_encode($info);		
?>