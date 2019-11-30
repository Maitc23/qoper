<?php
    $con = new mysqli('bmsxc1ksnnntilusjy00-mysql.services.clever-cloud.com', 'uvg4tutfrogtcpln', '2CXcPN9d39XawYbThOIs','bmsxc1ksnnntilusjy00');

    if($con -> connect_error) {
        die('Error de conexion '. $con -> connect_error);
    } /*else {
        echo 'Conexion exitosa';
    }*/
?>