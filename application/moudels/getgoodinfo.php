<?php
 	header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("../sqlConnect.php");
	$DID=$_GET['DID'];
	$sql="select * from goods where DID='{$DID}'";
	$res = excute($sql);
	$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
 
?>