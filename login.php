<?php
	
	session_start();
	require_once('funciones/funciones.php');
	if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['ficha']) && validarFicha ($_POST['ficha'])){
    
		//Validar si la informacion es enviada por un robot
		if(!empty($_POST['robot'])) {
		  return header('Location: error.php');
		}
		
		$campos = [
		  'email' => 'Correo Electronico',
		  'clave' => 'Contraseña'
		];
		
		$errores = validarCampos($campos);
	
		if(empty($errores)) {
		  $errores = login();
		}
	  }
	$titulo="Login";

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title><?php echo $titulo ?? "Qoper"?></title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">	
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="images/img-01.png" alt="IMG" >
				</div>
				<?php if(!empty($errores)){echo mostrarErrores($errores);}?>
					<form class="login100-form validate-form" method="POST" id="formularioLogin" >
					<input type="hidden" name="ficha" value="<?php echo ficha_csrf()?>">  
            		<input type="hidden" name="robot" value=""> 
					<span class="login100-form-title">
						Qoper
					</span>
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" value="<?php echo $_POST['email'] ?? '' ?>"placeholder="Email">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="clave" placeholder="Password">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div class="container-login100-form-btn">
						<button type="submit" class="login100-form-btn">
							Login
						</button>
					</div>
					<div class="text-center p-t-12">
						<span class="txt1">
							Olvido
						</span>
						<a class="txt2" href="olvido_contra.php">
							su contrasena?
						</a>
					</div>
						<div class="text-center p-t-136">
						<a class="txt2" href="registro.php">
							No tiene cuenta? Registrese
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="vendor/select2/select2.min.js"></script>
	<script src="js/main.js"></script>
</body>
</html>