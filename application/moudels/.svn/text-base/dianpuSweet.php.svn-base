<?php
header("Content-type:text/json");


	require_once("../sqlConnect.php");
	$aa=$_POST["aa"];


	switch ($aa) {
		case 'aa':
			aa();
			break;
		case 'aaa':
			aaa();
			break;
		default:
			
			break;
	}


	


function aa(){
	$a = $_POST["a"];
	$b = $_POST["b"];
	$c = $_POST["c"];
	//从数据库查询当前登录用户信息
	$sql2 = "update goods set XID=0 where XID='$c'";
	$sql = "update goods set XID='$c' where Numbers='$a'";
	$sql1 = "update goods set XID='$c' where Numbers='$b'";
	//执行sql语句
	$res2 = excute($sql2);
	$res = excute($sql);
	$res1 = excute($sql1);
	if ($res && $res1 && $res2) {
		$info = array("err"=>0, "errmsg"=>"修改成功");
	} else {
		$info = array("err"=>1, "errmsg"=>"修改失败");
	}
	echo json_encode($info);
}	

function aaa(){

	//从数据库查询当前登录用户信息
	$sql = "SELECT * FROM shop WHERE RID = 0";
	//执行sql语句
	$res = excute($sql);
	$arr=[];
	foreach ($res as $thisVal) {
			array_push($arr,$thisVal);
		}
	 $jsonStr=json_encode($arr);
        echo $jsonStr;

}	

	
?>