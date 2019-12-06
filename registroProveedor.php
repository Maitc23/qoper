<?php
  session_start();
  require_once('funciones/funciones.php'); 
  
  if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['ficha']) && validarFicha ($_POST['ficha'])){
  
    //Validar si la informacion es enviada por un robot
    if(!empty($_POST['robot'])) {
      return header('Location: error.php');
    }

    $campos = [
      'nombre' => 'Nombre',
      'apellido' => 'Apellido',
      'cedula' => 'Cedula del usuario',
      'telefono' => 'Telefono del usuario.',
      'email' => 'Correo electrocnico',
      'direccion' => 'Direccion del usuario',
      'clave' => 'Contraseña',
      'reclave'=> 'Confirmar contraseña',
      'terminos' => 'Terminos de uso y condiciones'
    ];
    
    $errores = validarCampos($campos);

    $errores = array_merge($errores, compararClaves($_POST['clave'], $_POST['reclave']));
    if(empty($errores)) {
      $errores = registroProvider();
    }
  }
  $titulo="Registro";
  require_once('partials/arriba.php');
  require_once('BD/conexion.php');
?>

    <!-- Contenedor principal de la pagina --> 
    <div class="container" id="pagina-registro">
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <h1 class="titulo-pagina">Registro</h1>
          <hr>
          <?php	if(!empty($errores)){echo mostrarErrores($errores);}?>
            <!-- Formulario de registro --> 
            <form id="formularioRegistro" <?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?> method="POST">
            <input type="hidden" name="ficha" value="<?php echo ficha_csrf()?>">
             <input type="hidden" name="robot" value="">  
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                  <div class="input-group">
                      <div class="campo-contenedor">
                        <input type="text" class="form-control input-lg" name="nombre" value="<?php echo $_POST['nombre'] ?? '' ?>" placeholder="Nombre" tabindex="1" autofocus  >
                        <span class="glyphicon icono-derecho"></span>
                        <span class="glyphicon glyphicon-user icono-izquierdo"></span>
                      </div>
                      <div class="input-group-addon" data-toggle="tooltip" data-plcaement="bottom" title="Nombres(s) de la persona registrandose">
                        <span class="glyphicon glyphicon-info-sign"></span>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col-sm-6">
                  <div class="form-group">
                      <div class="input-group">
                      <div class="campo-contenedor">
                        <input type="text" class="form-control input-lg" name="apellido" value="<?php echo $_POST['apellido'] ?? '' ?>"placeholder="Apellido" tabindex="2" >
                        <span class="glyphicon icono-derecho"></span>
                        <span class="glyphicon glyphicon-user icono-izquierdo"></span>
                      </div>
                      <div class="input-group-addon" data-toggle="tooltip" data-plcaement="bottom" title="Apellido(s) de la persona registrandose">
                        <span class="glyphicon glyphicon-info-sign"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                  <div class="input-group">
                      <div class="campo-contenedor">
                        <input type="text" class="form-control input-lg" name="cedula" value="<?php echo $_POST['cedula'] ?? '' ?>" placeholder="Cedula" tabindex="3">
                        <span class="glyphicon icono-derecho"></span>
                        <span class="glyphicon glyphicon-user icono-izquierdo"></span>
                      </div>
                      <div class="input-group-addon" data-toggle="tooltip" data-plcaement="bottom" title="Cedula de la persona registrandose">
                        <span class="glyphicon glyphicon-info-sign"></span>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col-sm-12">
                  <div class="form-group">
                      <div class="input-group">
                      <div class="campo-contenedor">
                        <input type="text" class="form-control input-lg" name="telefono" value="<?php echo $_POST['telefono'] ?? '' ?>"placeholder="Telefono" tabindex="4" >
                        <span class="glyphicon icono-derecho"></span>
                        <span class="glyphicon glyphicon-earphone icono-izquierdo"></span>
                      </div>
                      <div class="input-group-addon" data-toggle="tooltip" data-plcaement="bottom" title="Telefono de la persona registrandose">
                        <span class="glyphicon glyphicon-info-sign"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="input-group">
                      <div class="campo-contenedor">
                      <input type="text" class="form-control input-lg" name="direccion" value="<?php echo $_POST['direccion'] ?? '' ?>" placeholder="Direccion" tabindex="5" >
                        <span class="glyphicon icono-derecho"></span>
                        <span class="glyphicon glyphicon-map-marker icono-izquierdo"></span>
                      </div>
                      <div class="input-group-addon" data-toggle="tooltip" data-plcaement="bottom" title="Direccion de la persona registrandose">
                        <span class="glyphicon glyphicon-info-sign"></span>
                      </div>
                    </div>
                      
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                      <div class="input-group">
                      <div class="campo-contenedor">
                      <input type="text" class="form-control input-lg" name="email" value="<?php echo $_POST['email'] ?? '' ?>"placeholder="Correo electronico" tabindex="6" >
                        <span class="glyphicon icono-derecho"></span>
                        <span class="glyphicon glyphicon-envelope icono-izquierdo"></span>
                      </div>
                      <div class="input-group-addon" data-toggle="tooltip" data-plcaement="bottom" title="Correo electronico de la persona registrandose">
                        <span class="glyphicon glyphicon-info-sign"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                      <div class="input-group">
                      <div class="campo-contenedor">
                      <input type="password" class="form-control input-lg" id="clave"  name="clave" placeholder="Contraseña" tabindex="7" >
                        <span class="glyphicon icono-derecho"></span>
                        <span class="glyphicon glyphicon-lock icono-izquierdo"></span>
                      </div>
                      <div class="input-group-addon" data-toggle="tooltip" data-plcaement="bottom" title="Contraseña de la persona registrandose">
                        <span class="glyphicon glyphicon-info-sign"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                      <div class="input-group">
                      <div class="campo-contenedor">
                      <input type="password" class="form-control input-lg" name="reclave" placeholder="Confirmar contraseña" tabindex="8" >
                        <span class="glyphicon icono-derecho"></span>
                        <span class="glyphicon glyphicon-lock icono-izquierdo"></span>
                      </div>
                      <div class="input-group-addon" data-toggle="tooltip" data-plcaement="bottom" title="Verificacion de la contraseña de la persona registrandose">
                        <span class="glyphicon glyphicon-info-sign"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                      <div class="input-group">
                      <div class="campo-contenedor">
                      <input type="file" class="form-control input-lg" name="fotoCedula" value="<?php echo $_POST['fotoCedula'] ?? '' ?>"placeholder="Foto de la cedula" tabindex="11" >
                        <span class="glyphicon icono-derecho"></span>
                        <span class="glyphicon glyphicon-picture icono-izquierdo"></span>
                      </div>
                      <div class="input-group-addon" data-toggle="tooltip" data-plcaement="bottom" title="Foto de la cedula">
                        <span class="glyphicon glyphicon-info-sign"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <label class="btn btn-primary btn-lg btn-block">
                    <input type="checkbox" name="terminos" tabindex="12" <?php if(isset($_POST['terminos'])){echo "checked ='checked'";}?>>
                    Acepto
                  </label>
                </div>

                <div class="col-sm-9">
                  Al registrarse se aceptan los terminos y condiciones de la pagina.
                </div>
              </div>
              <hr>
              <div class="row">
              <div class="col-sm-6">
                  <a href="index.php" class="btn btn-danger btn-lg btn-block" tabindex="14">Cancelar</a>
                </div>
                <div class="col-sm-6">
                  <button type="submit" class="btn btn-success btn-lg btn-block" name="registroBtn" tabindex="13">Registrar</button>
                </div>   
              </div>
            </form><!-- /Formulario de registro --> 
        </div>
      </div>
    </div><!-- /Contenedor principal de la pagina --> 
<?php
  require_once('partials/abajo.php');
?>