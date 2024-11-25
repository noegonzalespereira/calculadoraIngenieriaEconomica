<?php
    $inicial=$_POST['inicial'];
    $interes=$_POST['interes'];
    $periodo_num=$_POST['periodo_num'];
    $periodo_tiempo=$_POST['periodo_tiempo'];


    $interesPorcentual=$interes/100;
    $interesCompuesto=$inicial*(pow((1+$interesPorcentual),$periodo_num)-1);
    $final = $inicial + $interesCompuesto;
    $resultado = "<div class='resultado-text'>
    Interés Compuesto = $interesCompuesto $ </div>";

    $tabla = '<h3>TABLA INTERES COMPUESTO</h3>
<div class="table-container">
    <table>
        <thead>
            <tr>
                <th>'.$periodo_tiempo.'</th>
                <th>Prestamo $</th>
                <th>Interes %</th>
                <th>Deuda $</th>
                <th>Suma Total $</th>
            </tr>
        </thead>
        <tbody>';

for ($j = 0; $j <= (int)$periodo_num; $j++) {
    $principalTabla = $j === 0 ? number_format($inicial, 2) : '----';
    $interesTabla = $j === 0 ? '----' : $interes . ' %';
    
    // Calcular la deuda para cada período usando interés compuesto
    if ($j === 0) {
        $deudaTabla = number_format($inicial, 2);
    } elseif ($j === (int)$periodo_num) {
        $deudaTabla = number_format($final, 2);
    } else {
        $deudaTabla = number_format($inicial * pow((1 + $interesPorcentual), $j), 2);
    }
    
    $finalTabla = $j === (int)$periodo_num ? number_format($final, 2) : '----';
    
    $tabla .= "<tr style='color: ".($j === 0 ? '#000' : '#CD4F39')."'>
        <td>$j</td>
        <td>$principalTabla</td>
        <td>$interesTabla</td>
        <td>$deudaTabla</td>
        <td>$finalTabla</td>
    </tr>";
}

$tabla .= '</tbody></table></div>';

// Generar datos para el diagrama
$datosGrafico = array();
$meses = array();

// Para el gráfico de interés compuesto
$datosGrafico[] = $inicial; // Valor inicial positivo
for ($x = 1; $x <= $periodo_num; $x++) {
    if ($x === (int)$periodo_num) {
        // Último período: mostrar el monto final negativo
        $datosGrafico[] = -$final;
    } else {
        // Períodos intermedios: mostrar el interés de ese período
        $montoActual = $inicial * pow((1 + $interesPorcentual), $x);
        $montoAnterior = $inicial * pow((1 + $interesPorcentual), ($x - 1));
        $interesDelPeriodo = $montoActual - $montoAnterior;
        $datosGrafico[] = -$interesDelPeriodo;
    }
    $meses[] = "$x $periodo_tiempo";
}
array_unshift($meses, "0 $periodo_tiempo"); // Agregar el período inicial

$response = array(
    'resultado' => $resultado,
    'tabla' => $tabla,
    'grafico' => array(
        'periodos' => $meses,
        'valores' => $datosGrafico,
        'inicial' => $inicial,
        'final' => $final
    )
);

echo json_encode($response);
?>