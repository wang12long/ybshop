<?php
	header("Content-type:text/json");
	require_once("sqlConnect.php");
	$UID=$_GET["UID"];	
	$DID=$_GET["DID"];
	if($GID==''){
		$sql="select * FROM `collectshop` inner join shop on collectshop.DID=shop.ID  WHERE UID='{$UID}'";
	}else{
		$sql="select * FROM `collectshop` WHERE UID='{$UID}' and DID='{$DID}'";
	}
		$res = excute($sql);
		$arr=[];
		foreach ($res as $thisVal) {
				array_push($arr,$thisVal);
			}
		 $jsonStr=json_encode($arr);
	        echo $jsonStr;			
	        
?>