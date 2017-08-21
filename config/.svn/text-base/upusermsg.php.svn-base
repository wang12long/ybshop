<?php
	 header("Content-type:text/json");
	 require_once("sqlConnect.php");
	 $nickname=$_GET['nickname'];
	 $birthday=$_GET['birthday'];
	 $headimg=$_GET['headImg'];
	 $sex=$_GET['sex'];
	 $DID=$_GET['UID'];
	 $sql="UPDATE `user` SET `NickName`='{$nickname}',`HeadImg`='{$headimg}',`Birthday`='${birthday}',`Sex`='{$sex}' WHERE ID='{UID}'";
	 $res = excute($sql);
	 $result = $res->fetch_assoc();
	if ($result) {
		$info = array("err"=>0,"errmsg"=>"信息更新成功");
	}else{
		$info = array("err"=>1,"errmsg"=>"信息更新失败");
	}
	echo json_encode($info);
?>
