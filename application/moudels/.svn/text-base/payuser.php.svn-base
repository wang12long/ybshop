<?php
	header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("sqlConnect.php");
	$Did=$_POST['Did'];

	$sql = "select * from goodcar inner join goods on goods.ID=goodcar.GID inner join user on user.ID=goodcar.UID inner join address on address.ID=goodcar.address where goods.DID='{$Did}' and goodcar.Paycar2=1";
	$res = excute($sql);
	$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
	

?>