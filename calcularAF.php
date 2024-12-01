<?php
    $final=$_POST['final'];
    $interes=$_POST['interes'];
    $periodo_num=$_POST['periodo_num'];
    $periodo_tiempo=$_POST['periodo_tiempo'];
     // Validar que los valores no sean vacíos o negativos
     if(empty($final) || empty($interes) || empty($periodo_num) || 
     $final <= 0 || $interes <= 0 || $periodo_num <= 0) {
      die(json_encode(['error' => 'Los valores deben ser mayores que 0']));
    }

    $interesPorcentual=$interes/100;
    $factor=$interesPorcentual/(pow((1+$interesPorcentual),$periodo_num)-1);
    $uniforme=$final*$factor;
    $resultado = "<div class='resultado-text'>
    VA = ".number_format($uniforme,2)." $ </div>";

    
    

$datosGrafico = array();
$periodos = array();

for ($x = 1; $x <= $periodo_num; $x++) {
    $periodos[] = $x." ". $periodo_tiempo;
    $datosGrafico[] = $uniforme;
    
    
}
$periodos[] = "Final". $periodo_tiempo;
$datosGrafico[] = $final;

$response = array(
    'resultado' => $resultado,
    'grafico' => array(
        'periodos' => $periodos,
        'valores' => $datosGrafico,
        'inicial' => $uniforme,
        'final' => $final
    )
);

    echo json_encode($response);
    ?>

