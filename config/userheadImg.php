<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-type:text/json");
   $file = $_FILES["file"];
   $type = explode(".",  $file['name'])[1];
   $types = ["jpg", "jpeg", "png"];
   if(in_array($type, $types)) {
   	   //移动文件
   	   $time = time();
   	   $filePath = "http://115.28.227.1/projects/xa/php/php08/img/headImg/".$time.".".$type;
	   //获取临时路径
	   $tmp = $file['tmp_name'];
	   //开始移动
	   $res = move_uploaded_file($tmp, "./img/headImg/".$time.".".$type);
	   if($res) {
	   	   $infor = array("err"=>0, "msg"=>$filePath);
	   }else {
	   	   $infor = array("err"=>1, "msg"=>"文件上传失败"); 
	   }
   }else {
   	  $infor = array("err"=>1, "msg"=>"文件格式只支持png,jpg,jpeg");
   }
   
   echo json_encode($infor);
?>