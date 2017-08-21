<?php
	header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("sqlConnect.php");
	function a(){
	
		$Uid = $_POST["Uid"];
		$sql = "select * from goodcar where UID='{$Uid}' and paycar2=1";
		$res = excute($sql);
		$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;
	

?>