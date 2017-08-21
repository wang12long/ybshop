<?php
 	header("Content-type:text/json");
	require_once("sqlConnect.php");
	$id=$_GET['ID'];
	$sql="select * from goods g inner join shop s on g.DID=s.ID where g.ID='{$id}'";
	$res = excute($sql);
	$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
 
?>