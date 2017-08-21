<?php
	header("Content-type:text/json");
	require_once("sqlConnect.php");
	$UID=$_GET["UID"];
	$DID=$_GET["DID"];
	$sql="INSERT INTO collect(`UID`, `DID`) VALUES ('{$UID}','{$DID}')";
	$res = excute($sql);
	if ($res) {
				$info = array("err"=>0, "errmsg"=>"收藏成功");
			} else {
				$info = array("err"=>1, "errmsg"=>"收藏失败");
			}
	echo json_encode($info);		
?>