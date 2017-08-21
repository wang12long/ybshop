<?php
header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("sqlConnect.php");
	$data=$_GET["parameter"];
	$storeinfo=json_decode($data);
	$kind=$storeinfo->kind;
	$storeName=$storeinfo->storeName;
	$pass=$storeinfo->password;
	$sql = "select * from shop where StoreName='{$storeName}'";
	$res = excute($sql);
	$result = $res->fetch_assoc();
	if ($result) {
		$info = array("err"=>1,"errmsg"=>"商家名已存在");
	} else{		
		$sql = "insert into shop (StoreName,Pass,Kind,StoreMsg,XID,RID) values ('{$storeName}','{$pass}','{$kind}','{$data}','0','0')";
		$res = excute($sql);
		if ($res) {
				$info = array("err"=>0, "errmsg"=>"商家注册成功");
			} else {
				$info = array("err"=>1, "errmsg"=>"商家注册失败");
			}		
	}
	echo json_encode($info);
?>