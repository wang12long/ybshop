<?php
	//解决跨域
	header("Access-Control-Allow-Origin:*");
	if($_GET){
	$type=$_GET['type'];
	}else{
	$type=$_POST['type'];
	}
	switch($type){
		case "adminlogin":
			require_once("Backlogin.php");
			break;
		case "changepass":
			require_once("changepass.php");
			break;
		case "storelogin":
			require_once("storeuser_login.php");
			break;
		case 'upgoodinfo':
			require_once("upgoodInfo.php");
			break;
		case "upgoodsimg":
			require_once("upgoodsImg.php");
			break;
		case "getgoodinfo":
			require_once("getgoodinfo.php");
			break;
		case "deletegoods":
			require_once("deletegoods.php");
			break;
		case "changegoods":
			require_once("getonegood.php");
			break;
		case "updategoodinfo":
			require_once("updategood.php");
			break;
		case "scrollImg":
			require_once("scrollImg.php");
			break;
		case "showScrollImg":
			require_once("scrollImg.php");
			break;
		case "subImgInfo":
			require_once("scrollImg.php");
			break;
		case "deleteScrollImg":
			require_once("scrollImg.php");
			break;		
		case "liuxin":
			require_once("liuxin.php");
			break;	
		case "dianpuSweet":
			require_once("dianpuSweet.php");
			break;
		case "flashSale":
			require_once("flash_sale.php");
			break;
		case "flashSaleLoad":
			require_once("flash_sale.php");
			break;
		case "floor";
			require_once("floor.php");
			break;
		default:
			break;
	}
?>