<?php
  $titulo="Perfil";
  session_start();
?>
<html>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<!------ Include the above in your HEAD tag ---------->

<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

<!------ Include the above in your HEAD tag ---------->

<head>
  <title>Usuario</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

</head>


<hr>
<div class="container bootstrap snippet">
    <div class="row">
  		<div class="col-sm-10"><h1>Nombre</h1></div>
    	<!--<div class="col-sm-2"><img title="profile image" class="img-circle img-responsive" src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100"></a></div>-->
    </div>
    <div class="row">
  		<div class="col-sm-3"><!--left col-->
              

      <div class="text-center">
        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar">
        <h6>Upload a different photo...</h6>
        <input type="file" class="text-center center-block file-upload">
      </div></hr><br>

               
        
          
        </div><!--/col-3-->
    	<div class="col-sm-9">
            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#home">Perfil</a></li>
                <li><a data-toggle="tab" href="#messages">Solicitudes de Trabajo</a></li>
                <li><a data-toggle="tab" href="#settings">Cupones</a></li>
              </ul>

              
          <div class="tab-content">
            <div class="tab-pane active" id="home">
                <hr>
                  <form class="form" action="##" method="post" id="registrationForm">
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="first_name"><h4>Nombre</h4></label>
                              <input type="text" class="form-control" name="first_name" id="first_name" placeholder="Nombre" title="Ingrese su nombre.">
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                            <label for="last_name"><h4>Apellido</h4></label>
                              <input type="text" class="form-control" name="last_name" id="last_name" placeholder="Apellido" title="Ingrese su apellido.">
                          </div>
                      </div>
          
                      <div class="form-group">
                          
                        <div class="col-xs-6">
                            <label for="user_name"><h4>Nombre de Usuario</h4></label>
                              <input type="text" class="form-control" name="user_name" id="user_name" placeholder="Nombre de usuario" title="Ingrese su nombre de usuario.">
                          </div>
                      </div>
          
                      <div class="form-group">
                        <div class="col-xs-6">
                            <label for="email"><h4>Email</h4></label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="Ingrese su Email">
                        </div>
                    </div>
                      
                      
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="password"><h4>Password</h4></label>
                              <input type="password" class="form-control" name="password" id="password" placeholder="password" title="Ingrese su password">
                          </div>
                      </div>
                      
                      <div class="form-group">
                           <div class="col-xs-12">
                                <br>
                                <button class="btn btn-lg btn-success" type="submit" style="background-color: #012840"> Guardar Cambios</button>
                               	
                            </div>
                      </div>
              	</form>
              
              <hr>
              
             </div><!--/tab-pane-->
             <div class="tab-pane" id="messages">
               
               <h2></h2>
               
              
               
             </div><!--/tab-pane-->
             <div class="tab-pane" id="settings">
                    
                <div class="form-group">
                          
                    <div class="col-xs-6">
                        <label for="ingresar_codigo"><h4>Ingrese Codigo</h4></label>
                        <input type="password" class="form-control" name="ingresar_codigo" id="ingresar_codigo" placeholder="" title="Redima su codigo">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-xs-12">
                         <br>
                         <button class="btn btn-lg btn-success" type="submit" style="background-color: #012840">Redimir</button>
                            
                     </div>
                  
              </div>
               
              </div><!--/tab-pane-->
          </div><!--/tab-content-->

        </div><!--/col-9-->
    </div><!--/row-->
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</html>