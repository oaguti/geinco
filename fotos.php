<?php include('include/header.php') ?>
<div class="wrap_txt">
<h1>Fotos</h1>
<ul class="galeria">
<?php 
	$i=0;
	do {
		$i++;
		echo '<li><a href="img/slider/s1.jpg" data-fancybox="images" data-caption="My caption"><img src="img/imagen.jpg"></a></li>';
	} while($i < 24);
?>
</ul>
</div>
<?php include('include/footer.php') ?>