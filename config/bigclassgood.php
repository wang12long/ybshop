<?php
   	header("Content-type:text/json");
	require_once("sqlConnect.php");	
	$option=$_GET['op'];
	switch ($option) {
		case 'big':
			selbig();
			break;
		case 'mid':
			selmid();
			break;
		case 'sm':
		    selsm();
		    break;
		default:
			
			break;
	}
	function selbig(){
		$bigclass=$_GET['class1'];	
		$sql="select * FROM `goods` WHERE BigClass='{$bigclass}'";
		$res = excute($sql);
		$arr=[];
		foreach ($res as $thisVal) {
				array_push($arr,$thisVal);
			}
		 $jsonStr=json_encode($arr);
	        echo $jsonStr;			
	}
	function selmid(){
		$middleclass=$_GET['class2'];
		$sql="select * FROM `goods` WHERE MiddleClass='{$middleclass}'";
		$res = excute($sql);
		$arr=[];
		foreach ($res as $thisVal) {
				array_push($arr,$thisVal);
			}
		 $jsonStr=json_encode($arr);
	        echo $jsonStr;	
	} 
	function selsm(){
		$smclass=$_GET['class3'];
		$sql="select * FROM `goods` WHERE Class='{$smclass}'";
		$res = excute($sql);
		$arr=[];
		foreach ($res as $thisVal) {
				array_push($arr,$thisVal);
			}
		 $jsonStr=json_encode($arr);
	        echo $jsonStr;	
	}          
?>