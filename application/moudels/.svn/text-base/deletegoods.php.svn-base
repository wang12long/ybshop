<?php
header("Content-type:text/json");
require_once ("../sqlConnect.php");
$GID = $_GET["GID"];
$sql = "delete from goods where Numbers='{$DID}'";
$res = excute($sql);
$result = $res -> fetch_assoc();
if ($result) {
	$info = array("err" => 0, "errmsg" => "产品删除成功");
} else {
	$info = array("err" => 1, "errmsg" => "产品删除失败");
}
echo json_encode($info);
?>