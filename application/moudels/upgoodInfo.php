<?php
header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("../sqlConnect.php");
	$data=$_GET["parameter"];
	$DID=$_GET["DID"];
	$goodinfo=json_decode($data);
	$goodName=$goodinfo->goodName;
	$firstsort=$goodinfo->firstsort;
	$secondsort=$goodinfo->secondsort;
	$thirdsort=$goodinfo->thirdsort;
	$time=time();
	$numbers="yb".$time;
	$upgooddate=date("Y-m-d",$time);
//	$sql = "select * from shop where StoreName='{$storeName}'";
//	$res = excute($sql);
//	$result = $res->fetch_assoc();
//	if ($result) {
//		$info = array("err"=>1,"errmsg"=>"商家名已存在");
//	} else{		
		$sql = "insert into goods (GoodName,BigClass,MiddleClass,Class,DID,GoodInfo,Numbers,UpGoodDate) values ('{$goodName}','{$firstsort}','{$secondsort}','{$thirdsort}','{$DID}','{$data}','{$numbers}','{$upgooddate}')";
		$res = excute($sql);
		if ($res) {
				$info = array("err"=>0, "errmsg"=>"产品添加成功");
			} else {
				$info = array("err"=>1, "errmsg"=>"产品添加失败");
			}		
//	}
	echo json_encode($info);
?>