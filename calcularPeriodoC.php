<?php
    $inicial=$_POST['inicial'];
    $final=$_POST['final'];
    $interes=$_POST['interes'];



    $interesPorcentual=$interes/100;
    $periodo=log($final / $inicial) / log(1 + $interesPorcentual);
    
    echo  "<div class='resultado-text'>Periodo = ". number_format($periodo, 2)." ? </div>";
?>