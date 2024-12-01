<?php
    $uniforme=$_POST['uniforme'];
    $interes=$_POST['interes'];
    $periodo_num=$_POST['periodo_num'];
    $periodo_tiempo=$_POST['periodo_tiempo'];


    $interesPorcentual=$interes/100;
    $factor=(pow((1+$interesPorcentual),$periodo_num)-1)/($interesPorcentual*pow((1+$interesPorcentual),$periodo_num));
    $inicial=$uniforme*$factor;
    $resultado = "<div class='resultado-text'>
    VP = ".number_format($inicial,2)." $ </div>";

    
    

$datosGrafico = array();
$periodos = array();

for ($x = 0; $x <= $periodo_num; $x++) {
    if ($x === 0) {
        $datosGrafico[] = $inicial;
    } 
    else {
        // En el último período, agregar el valor negativo del final
        $datosGrafico[] = -$uniforme;
    }
    
        $periodos[] = "$x $periodo_tiempo";
    
}

$response = array(
    'resultado' => $resultado,
    'grafico' => array(
        'periodos' => $periodos,
        'valores' => $datosGrafico,
        'inicial' => $inicial,
        'serieUniforme' => $uniforme
    )
);

    echo json_encode($response);
    ?>

