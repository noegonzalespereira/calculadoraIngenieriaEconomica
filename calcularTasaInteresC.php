<?php
    $inicial=$_POST['inicial'];
    $final=$_POST['final'];
    $periodo_num=$_POST['periodo_num'];
    $periodo_tiempo=$_POST['periodo_tiempo'];


    $interesPorcentual=pow(($final/$inicial),(1/$periodo_num))-1;
    
    echo  "<div class='resultado-text'>Tasa de Interes = ". number_format($interesPorcentual, 2)." % </div>";
?>