<?php
   	header("Content-type:text/json");
	require_once("sqlConnect.php");
	$UID=$_GET["UID"];	
	$GID=$_GET["GID"];
	if($GID==''){
		$sql="select * FROM `collect` inner join goods on collect.GID=goods.ID  WHERE UID='{$UID}'";
	}else{
		$sql="select * FROM `collect` WHERE UID='{$UID}' and GID='{$GID}'";

	}
		$res = excute($sql);
		$arr=[];
		foreach ($res as $thisVal) {
				array_push($arr,$thisVal);
			}
		 $jsonStr=json_encode($arr);
	        echo $jsonStr;			
	        
?>