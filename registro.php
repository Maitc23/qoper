<?php
  $titulo="Registro";
  require_once('partials/arriba.php'); 
?>

    <!-- Contenedor principal de la pagina --> 
    <div class="container" id="pagina-registro">
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <h1 class="titulo-pagina">Registro</h1>
          <hr>
            <!-- Formulario de registro --> 
            <form id="" action ="" method="">
              <div class="accounttype">
                <input type="radio" value="None" id="radioOne" name="account" checked/>
                <label for="radioOne" class="radio" chec>Personal</label>
                <input type="radio" value="None" id="radioTwo" name="account" />
                <label for="radioTwo" class="radio">Proveedor</label>
              </div>
            <hr>
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
                <div class="col-sm-6">
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
              <div class="col-sm-6">
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
                  <input type="file" id="fileToUpload" name="foto"  class="form-control input-lg" tabindex="9" >
                        <span class="glyphicon icono-derecho"></span>
                        <span class="glyphicon glyphicon-camera icono-izquierdo"></span>
                      </div>    
                      <div class="input-group-addon" data-toggle="tooltip" data-plcaement="bottom" title="Foto de perfil del usuario" placeholder="Foto de perfil" tabindex="10">
                        <span class="glyphicon glyphicon-info-sign"></span>
                      </div>
                    </div>
     
                  </div>
                </div>
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
                    <input type="checkbox" name="terminos" tabindex="12"   <?php if(isset($_POST['terminos'])){echo "checked ='checked'";}?>>
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