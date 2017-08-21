<?php
	header("Content-type:text/json","Access-Control-Allow-Origin:*");
	$db_tablename = "user";
	$sql = "SELECT * FROM " . $db_tablename . ";";
		$res = excute($sql);
		if($res){
			$arr = [];
			foreach($res as $thisVal){
				array_push($arr, $thisVal);
			}
			$info = $arr;
		}else{
			$info = array("errcode"=>"1","errmsg"=>"查询失败")
		}
		echo json_encode($info);
?>