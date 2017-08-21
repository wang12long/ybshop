<?php
	header("Content-type:text/json");
	require_once("../sqlConnect.php");
	$data=$_GET["parameter"];
	$DID=$_GET["DID"];
	$ID=$_GET["ID"];
	$goodinfo=json_decode($data);
	$goodName=$goodinfo->goodName;
	$firstsort=$goodinfo->firstsort;
	$secondsort=$goodinfo->secondsort;
	$thirdsort=$goodinfo->thirdsort;
	$upgooddate=date("Y-m-d",$time);
	$sql="update goods set GoodName='{$goodName}',BigClass='{$firstsort}',MiddleClass='{$secondsort}',Class='{$thirdsort}',GoodInfo='{$goodinfo}',UpGoodDate='{$upgooddate}' where ID='{$ID}'";
	$res = excute($sql);
	if ($res) {
			$info = array("err"=>0, "errmsg"=>"产品更新成功");
		} else {
			$info = array("err"=>1, "errmsg"=>"产品更新失败");
		}		
	echo json_encode($info);
?>