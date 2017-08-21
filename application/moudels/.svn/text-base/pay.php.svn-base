<?php
 	header("Content-type:text/json");
	require_once("sqlConnect.php");
	$Uid=$_POST['Uid'];

	$sql="select * from pays where UID='{$Uid}'";
	$res = excute($sql);
	$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
 
?>