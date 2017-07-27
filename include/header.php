<?php
if(isset($_GET['id'])) {
	$id = $_GET['id'];
} else {
	$id = 1;
}
include('include/funciones.php');
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>GEINCO</title>
	<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700" rel="stylesheet">
	<link href="css/superslides.css" rel="stylesheet">
	<link href="css/reset.css" rel="stylesheet">
	<link href="css/main.css" rel="stylesheet">
	<link href="css/rwd.css" rel="stylesheet">
	<link href="css/transitions.css" rel="stylesheet">
	<link href="css/font-awesome.min.css" rel="stylesheet">
	<link href="owl.carousel/owl.carousel.min.css" rel="stylesheet">
	<link href="owl.carousel/owl.theme.css" rel="stylesheet">
	<link href="owl.carousel/owl.transitions.css" rel="stylesheet">
	<link href="css/jquery.fancybox.min.css" rel="stylesheet">
	
</head>
<body>
<div id="wrap">
<?php
	if($id != 1) {
		include ('include/menu_movil.php');
	}
?>