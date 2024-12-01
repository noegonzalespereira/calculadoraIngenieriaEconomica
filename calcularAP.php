<?php
    $inicial=$_POST['inicial'];
    $interes=$_POST['interes'];
    $periodo_num=$_POST['periodo_num'];
    $periodo_tiempo=$_POST['periodo_tiempo'];


    $interesPorcentual=$interes/100;
    $factor=($interesPorcentual*pow((1+$interesPorcentual),$periodo_num))/(pow((1+$interesPorcentual),$periodo_num)-1);
    $uniforme=$inicial*$factor;
    $resultado = "<div class='resultado-text'>
    VA = ".number_format($uniforme,2)." $ </div>";

    
    

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

