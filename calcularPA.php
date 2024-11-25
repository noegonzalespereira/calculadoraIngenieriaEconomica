<?php
    $unifome=$_POST['unifome'];
    $interes=$_POST['interes'];
    $periodo_num=$_POST['periodo_num'];
    $periodo_tiempo=$_POST['periodo_tiempo'];


    $interesPorcentual=$interes/100;
    $factor=(pow((1+$interesPorcentual),$periodo_num)-1)/($interesPorcentual*pow((1+$interesPorcentual),$periodo_num));
    $inicial=$unifome*$factor;
    $interesPeriodico = $inicial * $interesPorcentual;
    $resultado = "<div class='resultado-text'>
    VP = ".number_format($inicial,2)." $ </div>";

    
    

$datosGrafico = array();
$meses = array();

for ($x = 0; $x <= $periodo_num; $x++) {
    if ($x === 0) {
        $datosGrafico[] = $inicial;
        $meses[] = "0 $periodo_tiempo";
    } 
    else if ($x === (int)$periodo_num) {
        // En el último período, agregar el valor negativo del final
        $datosGrafico[] = -$final;
        $meses[] = "$x $periodo_tiempo";
    }
    else {
        // Para períodos intermedios, mostrar el interés periódico
        $datosGrafico[] = -$interesPeriodico;
        $meses[] = "$x $periodo_tiempo";
    }
}

$response = array(
    'resultado' => $resultado,
    'grafico' => array(
        'periodos' => $meses,
        'valores' => $datosGrafico,
        'inicial' => $inicial,
        'final' => $final
    )
);

    echo json_encode($response);
    ?>

