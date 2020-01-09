<?php if ($handle = opendir('profielfotos/')) {
    $file = //mysql_real_escape_string($_GET['u']); Aqui se pone la direccion pertinente de la BD de Qoper
    if (file_exists('profielfotos/'.$file.'.png')) {
        echo 'profielfotos/'.$file.'.png';
    } else if (file_exists('profielfotos/'.$file.'.jpg')) {
        echo 'profielfotos/'.$file.'.jpg';
    } //Las cuatro lineas de arriba permiten que se utilizen archivos .jpg y .png, las mantiene para que no se pierdan
}
closedir($handle); 