<?php
	header("Access-Control-Allow-Origin:*");
	if($_GET){
		$type = $_GET["type"];
	}else{
		$type = $_POST["type"];
	}

	switch($type){
		case 'login':
			require_once("login.php");
			break;

		case 'regist':
			require_once("regist.php");
			break;
		case 'address':
			require_once("address.php");
			break;
		case 'getAll':
			require_once("getAllgoods.php");
			break;
		case 'detail':
			require_once("detail.php");
			break;
		case 'col':
			require_once("collectgood.php");
			break;
		case 'delcol':
			require_once("delcollectgood.php");
			break;
		case 'selcol':
			require_once("selcollectgood.php");
			break;
		case 'shopcol':
			require_once("collectshop.php");
			break;
		case 'delshopcol':
			require_once("delcollectshop.php");
			break;
		case 'selshopcol':
			require_once("selcollectshop.php");
			break;
		case 'getstweet':
			require_once("getstweet.php");
			break;
		case 'getshop':
			require_once("getshop.php");
			break;
		case 'addshopcar':
			require_once("addshopcar.php");
			break;
		case 'users':
			require_once("getUser.php");
			break;
		case 'updateuser':
			require_once("upusermsg.php");
			break;
		case 'addpay':
			require_once("addpay.php");
			break;
		case "getShopCarCon":
			require_once("addshopcar.php");
			break;
		case "getclassgoods":
			require_once("bigclassgood.php");
			break;
		case "pay":
			require_once("pay.php");
			break;
		default:
			break;
	}
?>