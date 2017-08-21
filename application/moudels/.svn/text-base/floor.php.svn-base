<?php
	require_once("../sqlConnect.php");
	
	$op = $_POST["op"];
	switch ($op) {
		case 'up':
			up();
			break;
		case 'sel':
			sel();
			break;
		default:
			
			break;
	}
	
	function up() {	
		$parameter = $_POST["parameter"];
		$LID = $_POST["UId"];	
		for ($i=0; $i < count($parameter); $i++) {
			$sql = "update goods set LID='{$LID}' where Numbers='{$parameter[$i]}';";
			$result = excute($sql);
		}
		if ($result) {
			$info = array("err"=>0, "errmsg"=>"提交成功");
		} else {
			$info = array("err"=>1, "errmsg"=>"提交失败");
		}
		echo json_encode($info);
	}
	
	function sel() {	
		$LID = $_POST["UId"];
		$sql = "select * from goods where LID !=0";
		$result = excute($sql);
		
		if ($result) {
			$arr = [];
			foreach ($result as $thisVal) {
				array_push($arr,$thisVal);
			}
			$info = json_encode($arr);
		} else {
			$info = array("err"=>1, "errmsg"=>"更新失败");
		}
		echo json_encode($info);
	}
	


?>