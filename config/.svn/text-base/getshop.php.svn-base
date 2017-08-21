<?php
 	header("Content-type:text/json");
	require_once("sqlConnect.php");
	$op=$_GET['op'];
	switch ($op) {
		case 'selall':
			selallshop();
			break;
		case 'selX':
			selXshop();
			break;
		case 'selClass':
			selclassshop();
			break;
		default:
			
			break;
	}
	
	function selallshop(){
		$sql="select * from shop  order by id desc";
		$res = excute($sql);
		$arr=[];
		foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 	$jsonStr=json_encode($arr);
        echo $jsonStr;
	}
	function selXshop(){
		$sql="select * from shop where XID=1 order by id desc";
		$res = excute($sql);
		$arr=[];
		foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 	$jsonStr=json_encode($arr);
        echo $jsonStr;
	}
	function selclassshop(){
		$kind=$_GET['kind'];
		$sql="select * from shop where Kind='{$kind}' order by id desc";
		$res = excute($sql);
		$arr=[];
		foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 	$jsonStr=json_encode($arr);
        echo $jsonStr;
	}
 
?>