<?php
	header("Content-type:text/json","Access-Control-Allow-Origin:*");
	require_once("../sqlConnect.php");

$db_tablename = "scrollImg";
	if($type == "scrollImg"){
		$fileObj = $_FILES['file'];
		
	if($fileObj["error"] == 0){
		$types = ['jpg','jpeg','png','gif'];
		$type = explode('/',$fileObj['type'])[1];

		if(in_array($type,$types)){
			$time = time();
			$filePath = "http://115.28.227.1/projects/xa/php/php08/img/scrollImg/" . $time . "." . $type;

			$res = move_uploaded_file($fileObj['tmp_name'],"../img/scrollImg/" . $time . "." . $type);
			if($res){	
					$info = array("errcode"=>0,"errmsg"=>$filePath);
				
			}else{
				$info = array("errcode"=>1,"errmsg"=>"文件移动失败");
			}
		}else{
			$info = array("errcode"=>1,"msg"=>"文件格式不合法");
		}
		echo json_encode($info);
	}
}else if($type == "showScrollImg"){
	$sql = "SELECT * FROM " . $db_tablename . " ORDER BY id DESC LIMIT 6";
	$result = excute($sql);
	
	if($result){
		$arr = [];
		foreach($result as $thisVal){
			array_push($arr, $thisVal);
		}
		$jsonStr = json_encode($arr);
		echo $jsonStr;
	}
}else if($type == "subImgInfo"){
	$imgUrls = $_POST["imgs"];
	$imgUrlString = json_decode($imgUrls);
	for($i = 0; $i < sizeof($imgUrlString);$i++){
		$sql = "INSERT INTO ".$db_tablename." (url) values ('{$imgUrlString[$i]}')";
		$result = excute($sql);
	}
	
	if($result){
		$info = '{"errcode":"0","errmsg":"提交成功"}';	
		}else{
		$info = '{"errcode":"1","errmsg":"提交失败"}';	
		}
	
	echo $info;
}else if($type == "deleteScrollImg"){
	$id = $_POST['id'];
	sql = "DELETE FROM ".$db_tablename." WHERE id = '{$id}')";
		$result = excute($sql);
		if($result){
		$info = '{"errcode":"0","errmsg":"删除成功"}';	
		}else{
		$info = '{"errcode":"1","errmsg":"删除失败"}';	
		}
		echo $info;
}

?>