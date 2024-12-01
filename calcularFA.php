<?php
    $uniforme=$_POST['uniforme'];
    $interes=$_POST['interes'];
    $periodo_num=$_POST['periodo_num'];
    $periodo_tiempo=$_POST['periodo_tiempo'];
     // Validar que los valores no sean vacíos o negativos
     if(empty($uniforme) || empty($interes) || empty($periodo_num) || 
     $uniforme <= 0 || $interes <= 0 || $periodo_num <= 0) {
      die(json_encode(['error' => 'Los valores deben ser mayores que 0']));
    }

    $interesPorcentual=$interes/100;
    $factor=(pow((1+$interesPorcentual),$periodo_num)-1)/$interesPorcentual;
    $final=$uniforme*$factor;
    $resultado = "<div class='resultado-text'>
    VF = ".number_format($final,2)." $ </div>";

    
    

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

