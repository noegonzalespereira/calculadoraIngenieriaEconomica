<?php
    $final=$_POST['final'];
    $interes=$_POST['interes'];
    $periodo_num=$_POST['periodo_num'];
    $periodo_tiempo=$_POST['periodo_tiempo'];


    $interesPorcentual=$interes/100;
    $inicial=$final/(1+$interesPorcentual*$periodo_num);
    $interesPeriodico=$inicial*$interesPorcentual;

    // $final=$inicial*pow((1+$interesPorcentual),$periodo_num);
    $resultado = "<div class='resultado-text'>
    Valor Inicial = ". number_format($inicial,2)."  $ </div>";

    $tabla = '<h3>TABLA INTERES SIMPLE</h3>
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
        // Préstamo solo se muestra en la primera fila
        $principalTabla = $j === 0 ? number_format($inicial, 2) : '----';
        
        // Interés se muestra en todas las filas excepto la primera
        $interesTabla = $j === 0 ? '----' : $interes . ' %';
        
        // Deuda se calcula diferente para la primera y última fila
        if ($j === 0) {
            $deudaTabla = number_format($inicial, 2);
        } elseif ($j === (int)$periodo_num) {
            $deudaTabla = number_format($final, 2);
        } else {
            $deudaTabla = number_format($inicial + $interesPeriodico * $j, 2);
        }
        
        // Suma total solo se muestra en la última fila
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
