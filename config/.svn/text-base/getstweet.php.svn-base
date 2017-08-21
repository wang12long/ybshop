<?php
 	header("Content-type:text/json");
	require_once("sqlConnect.php");
	$sql="select * from shop where RID=1";
	$res = excute($sql);
	$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
 
?>