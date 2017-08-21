<?php
 	header("Content-type:text/json");
	require_once("../sqlConnect.php");
	$xid=$_GET['XID'];
	$storename=$_GET['storename'];
	$sql="update shop set XID='{#xid}' where StoreName='{$storename}'";
	$res = excute($sql);
	$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
 
?>