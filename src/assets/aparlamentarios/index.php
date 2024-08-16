<!doctype html>
<? include('config/tconnection.php'); ?>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta name="keywords" content="">
	<meta name="description" content="">
	<meta property="og:description" content="" />
	<meta property="og:url" content="http://www.cddiputados.gob.mx" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="Av. Lerdo Pte. No. 222, Centro, 50000 Toluca de Lerdo, Méx." />
	<meta property="og:image:height" content="" />
	<meta property="og:title" content="Secretaría de Asuntos Parlamentarios" />

	<link rel="icon" type="image/png" href="favicon.svg">
	<link href="style.css" rel="stylesheet" type="text/css">
	<link href="css/menu_home.css" rel="stylesheet" type="text/css">
	<link href="css/grid.css" rel="stylesheet" type="text/css">
	
	<title>Secretaría de Asuntos Parlamentarios</title>
	
	<script src="https://kit.fontawesome.com/e6414ed8fa.js" crossorigin="anonymous"></script>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script type="text/javascript">
		$(document).on("scroll",function(){
			if($(document).scrollTop()>50){
				$("header").removeClass("large").addClass("small");
			} else{
				$("header").removeClass("small").addClass("large");
			}
		});
	</script>
	
	<? include('gtag.php'); ?>
	
</head>

<body style="background:linear-gradient( 40deg, rgb(32,0,18,1.00) 0%, rgb(150,0,72,1.00) 100% );">
<div align="center">		
	
	<header class="large">

		<!-- MENU RESPONSIVO --->
		<div id="responsive">
			<nav>
				<a href="index.php"><div style="float: left; display: block;"><img src="img/asuntos_parlamentarios.svg" class="logo"></div></a>
				<div id="salto_menu"></div>
				<ul class="topnav">
					<li><a href="secretaria">Secretaría</a>
					<li><a href="diputadasydiputados">Diputadas/os</a>
					<li><a href="comision-2"><? $conn_name = new TConeccion(); $query_name  = "SELECT * FROM cdd_comisiones WHERE id = 2"; $conn_name->Gestion($query_name); $nombre = mysqli_fetch_array($conn_name->Query,MYSQLI_ASSOC); echo utf8_encode($nombre['nombre']); ?></a>
					<li><a href="comision-1">JUCOPO</a>
					<li><a href="comisiones">Comisiones</a>
					<li><a href="asuntos">Asuntos</a>
					<li><a href="gaceta">Gaceta</a>
					<li><a href="search"><i class="fas fa-search"></i></a></li>
					<li class="icon"><a href="javascript:void(0);" style="font-size:1.3em;" onClick="myFunction()">&#9776;</a></li>
				</ul>
			</nav>
			<script>
				function myFunction() {
					document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
				}
			</script>
		</div>
		<!-- FIN MENU RESPONSIVO --->
		
		<!-- MENU DESPLEGABLE --->
		<div id="scrolldown">
			<nav style="width:95%; margin-top:0px;">
				<a href="index"><div style="float: left; display: block;"><img src="img/asuntos_parlamentarios.svg" class="logo"></div></a>
				<div style="clear: both;"></div>
				<ul class="menu">
					<li class="menu"><a href="secretaria">Quiénes somos</a></li>
					<li class="menu"><a href="#">Legislatura &#9662;</a>
						<ul class="dropdown">
							<li class="menu"><a href="diputadasydiputados">Diputadas/os</a></li>
							<li class="menu"><a href="comision-2"><? $conn_name = new TConeccion(); $query_name  = "SELECT * FROM cdd_comisiones WHERE id = 2"; $conn_name->Gestion($query_name); $nombre = mysqli_fetch_array($conn_name->Query,MYSQLI_ASSOC); echo utf8_encode($nombre['nombre']); ?></a></li>
							<li class="menu"><a href="comision-51"><? $conn_name = new TConeccion(); $query_name  = "SELECT * FROM cdd_comisiones WHERE id = 51"; $conn_name->Gestion($query_name); $nombre = mysqli_fetch_array($conn_name->Query,MYSQLI_ASSOC); echo utf8_encode($nombre['nombre']); ?></a></li>
							<li class="menu"><a href="comision-1">JUCOPO</a></li>
							<li class="menu"><a href="comisiones">Comisiones y comités</a></li>
						</ul>
					</li>
					<li class="menu"><a href="#">Actividad &#9662;</a>
						<ul class="dropdown">
							<li class="menu"><a href="asuntos">Asuntos</a></li>
							<li class="menu"><a href="resoluciones">Resoluciones</a></li>
							<li class="menu"><a href="gaceta">Gaceta Parlamentaria</a></li>
							<li class="menu"><a href="sesiones">Sesiones</a></li>
							<li class="menu"><a href="votaciones">Votaciones</a></li>
						</ul>
					</li>
					<li class="menu"><a href="#">Documental &#9662;</a>
						<ul class="dropdown">
							<li class="menu"><a href="ordenes">Órdenes del Día</a></li>
							<li class="menu"><a href="debates">Diario de Debates</a></li>
							<li class="menu"><a href="estenografia">Estenografía</a></li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
		<!-- FIN MENU DESPLEGABLE --->
	</header>
		
	<?
	$con_img = new TConeccion();
	$query_img  = "SELECT * FROM cdd_carrusel ORDER BY RAND() LIMIT 1";
	$con_img->Gestion($query_img);
	$img = mysqli_fetch_array($con_img->Query,MYSQLI_ASSOC);
	?>

	<div id="section" style="background:url(img/carrusel/<? echo $img['img']; ?>) top center no-repeat fixed;">
		
		<!-- BUSCADOR -->
		<div id="box_buscador_desk">
			<form method="get" action="buscador">
				<input type="text" name="tema" class="desk">
				<button id="boton_buscador"><i class="fas fa-search"></i></button>
				<div style="clear: both"></div>
			</form>
		</div>

		<div id="box_buscador_movil">
			<form method="get" action="buscador">
				<input type="text" name="tema" placeholder="Ingresa una palabra..." class="movil">
				<button id="boton_buscador"><i class="fas fa-search"></i></button>
				<div style="clear: both"></div>
			</form>
		</div>		
		<!-- FIN BUSCADOR -->		
	</div>
	
	<!-- ENLACES DE INTERÉS -->
	<div style="width: 100%; padding: 0px; background: rgba(255,255,255,1.00);">
		<div style="width: 100%; max-width: 1110px; margin: auto; padding: 30px 0px;">
			<h1>Información de interés</h1>
			
			<a href="descargas/manual-general-de-organizacion-de-la-secretaria-de-asuntos-parlamentarios.pdf" target="_blank"><div class="asuntos">Manual General de Organización</div></a>
			<a href="anterior" target="_blank"><div class="asuntos">Legislaturas anteriores</div></a>
			<a href="legislacion" target="_blank"><div class="asuntos">Leyes vigentes</div></a>
			<a href="http://www.bibliolex.gob.mx/" target="_blank"><div class="asuntos">Biblioteca<br>"José María Luis Mora"</div></a>
			<!--<a href="http://www.secretariadeasuntosparlamentarios.gob.mx/mainstream/Cronica/index.html" target="_blank"><div class="asuntos">Crónica Legislativa</div></a>-->
			<a href="http://www.secretariadeasuntosparlamentarios.gob.mx/cronista" target="_blank"><div class="asuntos">Crónica legislativa</div></a>
			<a href="http://www.legislativoedomex.gob.mx/transparencia" target="_blank"><div class="asuntos">Transparencia</div></a>
			
			<!-- DÍA NARANJA -->
			<? $orangeday = date('d'); if ($orangeday == 25) { ?>
			
			<div style="width:90%; max-width: 650px; margin:50px auto;">
				<img src="../img/banners/AccionNaranja_ch.jpg" style="width: 100%;" alt="Acción Naranja">
			</div>
			<? } ?>
			<!-- FIN DÍA NARANJA -->
			
			<div style="clear: both"></div>
		</div>
	</div>
	<!-- FIN DE ENLACES DE INTERÉS -->
	
	<? include('footer.php'); ?>
	
</div>
</body>
</html>