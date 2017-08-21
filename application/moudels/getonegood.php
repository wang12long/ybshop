<?php
 	header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("../sqlConnect.php");
	$GID=$_GET['GID'];
	$sql="select * from goods where ID='{$GID}'";
	$res = excute($sql);
	$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
 
?>