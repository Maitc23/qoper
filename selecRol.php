<?php
  $titulo="Rol";
  require_once('partials/arriba.php'); 
?>

    <!-- Contenedor principal de la pagina --> 
    <div class="container" id="pagina-rol">
        <h1 class="titulo-pagina">Seleccione su rol</h1>
        <ul>
          <li><a href="registroProveedor.php"> Proveedor </a></li>
          <li><a href="registroPersonal.php"> Cliente </a></li>
        </ul>
    </div><!-- /Contenedor principal de la pagina --> 
<?php
  require_once('partials/abajo.php');
?>