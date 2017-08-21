<?php
 	header("Content-type:text/json");
	require_once("sqlConnect.php");
	$xid=$_GET['XID'];
	$sql="select * from goods order by id desc limit 0,4";
	$res = excute($sql);
	$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
 
?>