<?php
	header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("../sqlConnect.php");
	$db_tablename ="goods";
	$tid = $_POST["tid"];
	if($type == "flashSale"){
	$goodsNumberArr = $_POST["goodsNumbers"];
	
	for($i = 0; $i < count($goodsNumberArr);$i++){
		$sql = "UPDATE " . $db_tablename . " SET TID= " . $tid . " WHERE Numbers='" . $goodsNumberArr[$i] . "';";
		$result = excute($sql);
	}

	if($result){
		$info = array("errcode"=>0,"errmsg"=>"提交成功");
	}else{
		$info = array("errcode"=>1,"errmsg"=>"提交失败");
	}

	echo json_encode($info);
	}else if($type == "flashSaleLoad"){
		$sql = "SELECT * FROM " . $db_tablename . " WHERE TID=" . $tid . ";";
		$result = excute($sql);
		if($result){
			$info = array("errcode"=>0,"errmsg"=>"更新成功");
		}else{
			$info = array("errcode"=>1,"errmsg"=>"更新失败");
		}
		echo json_encode($info);
	}else if($type == "showFlashSale"){
//		$sql = "SELECT * FROM " . $db_tablename . ";";
//		$res = excute($sql);
//		$result = $res->fetch_assoc();
//		var_dump($result);
		 echo "10";
	}
	
?>