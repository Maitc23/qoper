<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
/**
 * Funcion para enviar correos
 */
function phpMailer($email, $nombre) {
    require_once('vendor/PHPMailer/src/Exception.php');
    require_once('vendor/PHPMailer/src/PHPMailer.php');
    require_once('vendor/PHPMailer/src/SMTP.php');

    $mail = new PHPMailer(true);
    try{
        //server del correo
        $mail -> SMTPDebug = 2;
        $mail -> isSMTP();
        $mail -> Host='in-v3.mailjet.com';
        $mail -> SMTPAuth = true;
        $mail -> Username = '833b051aa3ca5aa16b55cca33f85975d';
        $mail -> Password = '2ba4dd4b58b87667e5bd22a653c9b344';
        $mail -> SMTPSecure = 'tls';
        $mail -> Port = 587;


        //Usuario
        $mail -> setFrom('macuervo84@gmail.com', 'Qoper');
        $mail -> addAddress($email, $nombre);

        //Contenido
        $mail -> isHTML(true);
        $mail -> Subject = 'Se ha registrado a Qoper';
        $mail -> Body = 'Se ha registrado en Qoper</b>';
        $mail -> AltBody = 'Se ha registrado en Qoper.';
        
        $mail -> send();
    } catch (Exception $err) {
        echo 'El mensaje no pudo ser enviado: '.$err -> ErrorInfo;
    }
}

/**
 * Funcion para registrar usuarios 
 * @param  userInfo
 * @return any
 */
function registroCustumer(){
    require_once('BD/conexion.php');
    //Declaracion de variables
    $errores= duplicacionCorrreo($con); 
    if(!empty($errores)){ 
        return $errores;
    }
    $nombre =limpiar($_POST['nombre']);
    $apellido =limpiar($_POST['apellido']);
    $cedula =limpiar($_POST['cedula']);
    $email =limpiar($_POST['email']);
    $clave =limpiar($_POST['clave']);
    $telefono = limpiar($_POST['telefono']);
 
    //Insercion de los datos a la BD
    $dec = $con -> prepare("INSERT INTO usuario (nombre,apellido,cedula,contra,email,telefono,) VALUES (?,?,?,?,?,?,)");
    $dec -> bind_param("ssssss", $nombre, $apellido,$cedula,password_hash($clave, PASSWORD_DEFAULT),$email,$telefono);
    $dec -> execute();
    $resultado = $dec -> affected_rows;
    $dec -> free_result();
    $dec -> close();
    $con -> close(); 

    if($resultado == 1) {
        header('Location: profile_user.php');
        //phpMailer($email, $nombre);
    } else {
        $errores[] = 'Oops!, hubo algun error en el registro, intente de nuevo';
    }
    return $errores;
}

/**
 * Funcion para registrar usuarios 
 * @param  userInfo
 * @return any
 */
function registroProvider(){
    require_once('BD/conexion.php');
    //Declaracion de variables
    $errores= duplicacionCorrreo($con); 
    if(!empty($errores)){ 
        return $errores;
    }
    $nombre =limpiar($_POST['nombre']);
    $apellido =limpiar($_POST['apellido']);
    $cedula =limpiar($_POST['cedula']);
    $email =limpiar($_POST['email']);
    $clave =limpiar($_POST['clave']);
    $telefono = limpiar($_POST['telefono']);
    $direccion = limpiar($_POST['direccion']);

	//Inicio del fileUpload para fotos de perfil
	$target_dir = "img/fotosPerfil/";
	$fotoPerfil = $target_dir . $nombre .basename($_FILES["fotoPerfil"]["name"]);
	$uploadOk = 1;
	$imageFileType = strtolower(pathinfo($fotoPerfil,PATHINFO_EXTENSION));
    //Inicio del fileUpload para fotos de perfil
	$target_dir1 = "img/fotosCedula/";
	$fotoCedula = $target_dir1 . $nombre .basename($_FILES["fotoCedula"]["name"]);
	$uploadOk1 = 1;
	$imageFileType1 = strtolower(pathinfo($fotoCedula,PATHINFO_EXTENSION));
	// Check if image file is a actual image or fake image
	if(isset($_POST["submit"])) {
	    $check1 = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
	        if($check1 !== false) {
		        echo "File is an image - " . $check1["mime"] . ".";
		        $uploadOk1 = 1;
		    } else {
		        echo "File is not an image.";
		        $uploadOk1 = 0;
		    }
		}
		// Check file size
		if ($_FILES["fotoCedula"]["size"] > 500000) {
		    echo "Sorry, your file is too large.";
		    $uploadOk1 = 0;
		}
		// Allow certain file formats
		if($imageFileType1 != "jpg" && $imageFileType1 != "png" && $imageFileType1 != "jpeg"
		&& $imageFileType1 != "gif" ) {
		    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
		    $uploadOk1 = 0;
		}
	//fin del fileUpload
 
    //Insercion de los datos a la BD
    $dec = $con -> prepare("INSERT INTO usuario (nombre,apellido,cedula,contra,email,telefono,direccion,fotoCedula) VALUES (?,?,?,?,?,?,?,?)");
    $dec -> bind_param("ssssssss", $nombre, $apellido,$cedula,password_hash($clave, PASSWORD_DEFAULT),$email,$telefono,$direccion,$fotoCedula);
    $dec -> execute();
    $resultado = $dec -> affected_rows;
    $dec -> free_result();
    $dec -> close();
    $con -> close(); 

    if($resultado == 1) {
        header('Location: profile_provider.php');
        //phpMailer($email, $nombre);
    } else {
        $errores[] = 'Oops!, hubo algun error en el registro, intente de nuevo';
    }
    return $errores;
}

/**
 * Funcion que limpia caracteres especiales en nuestros formularios
 * @param datos
 * @return datos
 * */
    function limpiar($datos) {
        $datos = trim($datos);
        $datos = stripslashes($datos);
        $datos = htmlspecialchars($datos);
        return $datos;
    }

/**
 * Funcion para mostrar posibles erorres
 * @param errores
 * @return any
 */
    function mostrarErrores($errores){ 
        $resultado = '<div class="alert alert-danger errores"><ul>';
        foreach($errores as $error) {
            $resultado .= '<li>'. htmlspecialchars($error). '</li>';
        }
        $resultado .= '</ul></div>';
        return $resultado;
    }   


    /**  
     * Funcion para generar csrf
     * @return ficha
     */
    function ficha_csrf() {
        $ficha = bin2hex(random_bytes(32));
        return $_SESSION['ficha'] = $ficha;
    }
    /**
     * Funcion para validar la ficha csrf
     *@param ficha
     *@return any
     */
    function validarFicha($ficha) {
        if(isset($_SESSION['ficha']) && hash_equals($_SESSION['ficha'], $ficha)) {
            unset($_SESSION['ficha']);
            return true;
        } else {
            return false;
        }
    }

    /**
     * Funcion para validar campos 
     *@param campos
     *@return any
     */
    function validarCampos ($campos) {
        $errores = []; 
        foreach($campos as $nombre => $mostrar) {
            if(!isset($_POST[$nombre]) || $_POST[$nombre] == null) {
                $errores[] = $mostrar. ' Es un campo requerido.';
            } else { 
                $valides= campos();
                foreach($valides as $campo => $opcion){
                    if($nombre == $campo) {
                        if(!preg_match($opcion['patron'], $_POST[$nombre])) {
                            $errores[] = $opcion['error'];
                        }
                    }
                }
            }
        }
        return $errores;
    }

    /**
     *Funcion para validar escritura de los campos
     *@return any
     */
    function campos() {
        $validacion = [
            'nombre' => [
                'patron' => '/^[a-z\s]{2,50}$/i', 
                'error' => 'NOMBRES solo pueden usar letras y espacios. No puede ser mas largo de 50 caracteres.'
            ],
            'apellido' => [
                'patron' => '/^[a-z\s]{2,50}$/i', 
                'error' => 'APELLIDOS solo pueden usar letras y espacios. No puede ser mas largo de 50 caracteres.'
            ],
             'clave' => [
                'patron' => '/(?=^[\w\!@#\$%\^&\*\?]{8,30}$)(?=(.*\d){2,})(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*[\!@#\$%\^&\*\?_]){2,})^-*/', 
                'error' => 'Por favor entre una contraseña valida. La contraseña debe tener por lo menos 2 letras mayuscula, 2 letras minusculas, 2 numeros y 2 simbolos.'
             ]
        ];
        return $validacion;
    }
    /**
     *Funcion para validar escritura de los campos
     *@param clave
     *@param reclave
     *@return any
     */
    function compararClaves($clave, $reclave) {
        $errores = [];

        if($clave !== $reclave) {
            $errores[] = 'Las contraseñas no son iguales';
        }
        return $errores;
    }

    /**
     *Funcion para validar la existencia de correo o cedula del usuario
     *@param con
     *@return any
     */
    function duplicacionCorrreo($con){
        $errores = []; 
        
        $cedula =limpiar($_POST['cedula']);
        $email =limpiar($_POST['email']);
        
        $dec = $con -> prepare("SELECT cedula, email FROM usuario WHERE cedula like ? OR email like ? ");
        $dec -> bind_param("ss", $cedula, $email);
        $dec -> execute();

        $resultado = $dec -> get_result();
        $cantidad = mysqli_num_rows($resultado);
        $linea = $resultado -> fetch_assoc();
        $dec -> free_result();
        $dec -> close();
        

        if($cantidad > 0) {
            if($_POST['cedula'] == $linea['cedula']){
                $errores[] = 'La cedula introducida no esta disponible.';
            }
            if($_POST['email'] == $linea['email']){
                $errores[] = 'El correo electronico no esta disponible.';
            }
        }
        return $errores;
    }

   

    /**
     *Funcion hacer login en el sistema
     *@param con
     *@return any
     */
    function login() {

        require_once('BD/conexion.php');
        $errores = []; 
        
        $email =limpiar($_POST['email']);
        $clave =limpiar($_POST['clave']);
        
        $dec = $con -> prepare("SELECT * FROM usuario WHERE email like ? ");
        $dec -> bind_param("s", $email);
        $dec -> execute();

        $resultado = $dec -> get_result();
        $cantidad = mysqli_num_rows($resultado);
        $linea = $resultado -> fetch_assoc();
        $dec -> free_result();
        $dec -> close();
   

        if($cantidad == 1) {

            //$errores = fuerzaBruta($con, $linea['intento'], $linea['idUser'], $linea['tiempo']);
            if(!empty($errores)){
                return $errores;
            }
            if(password_verify($clave, $linea['contra'])){
               /* $intento = 0;
                $tiempo = NULL;
                $id = $linea['idUser'];
                $dec = $con -> prepare("UPDATE usuario SET intento like ? AND tiempo like ? WHERE idUser like ?");
                $dec -> bind_param("isi", $intento, $tiempo, $id);
                $dec -> execute();
                $dec -> close();
                $con -> close();
             */
                $_SESSION['nombre'] = $linea['nombre'];
                $_SESSION['apellido'] = $linea['apellido'];
                header('Location: profile_provider.php');
            }
        } else {
            $errores[] = 'El Correo electronico o la contraseña no son validos.';       
        }

         return $errores;
    }

    /**
     *Funcion protegernos de insercion por fuerza bruta
     *@param intento
     *@param con 
     *@param idUser
     *@param tiempo
     *@return any
     */
    function fuerzaBruta($con, $intento, $id, $tiempo){

        $errores = []; 
        $intento = $intento + 1;
        
        $dec = $con -> prepare("UPDATE usuario SET intento = ? WHERE idUser = ? ");
        $dec -> bind_param("ii", $intento, $id);
        $dec -> execute();
        $dec -> close();
 

        if($intento == 5) {

            $ahora = date('Y-m-d H:i:s');
            $dec = $con -> prepare("UPDATE usuario SET tiempo like ? WHERE idUser like ? ");
            $dec -> bind_param("si", $ahora, $idUser);
            $dec -> execute();
            $dec -> close();
            $con -> close();

            $errores[] = 'Esta cuenta ha sido bloqueada por los proximos 15 min';
        
        } else if ($intento > 5) {

            $espera = strtotime(date('Y-m-d H:i:s')) - strtotime($tiempo);
            $min = ceil((900 - $espera)/60);
            
            if($espera < 900) {
                $errores[] = 'Esta cuenta ha sido bloqueada por los proximos'.$min.' minutos';
            } else {
                $intento = 1;
                $tiempo = NULL;
                $dec = $con -> prepare("UPDATE usuario SET intento like ? , tiempo like ? WHERE idUser like ? ");
                $dec -> bind_param("isi", $intento, $tiempo, $id);
                $dec -> execute();
                $dec -> close();
                $con -> close();
            }
        }
        return $errores;
    }
?>