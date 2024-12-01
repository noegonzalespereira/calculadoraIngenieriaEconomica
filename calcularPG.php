<?php
    $gradiente = $_POST['gradiente'];
    $interes = $_POST['interes'];
    $periodo_num=$_POST['periodo_num'];
    $periodo_tiempo=$_POST['periodo_tiempo'];

    $interesPorcentual = $interes/100;
    
    // Cálculo del factor P/G
    $factorPG = (pow((1 + $interesPorcentual), $periodo_num) - $interesPorcentual*$periodo_num - 1) / 
                (pow($interesPorcentual,2) * pow((1 + $interesPorcentual), $periodo_num));
    
    $valorPresenteG = $gradiente * $factorPG;
    
    $resultado = "<div class='resultado-text'>
        VP = $" . number_format($valorPresenteG, 2) . "</div>";
    
    // Datos para el gráfico
    $periodosTiempo = array();
    $valoresGrafico = array();
    
    // Valor presente
    $periodosTiempo[] = "0";
    $valoresGrafico[] = -$valorPresenteG; // Negativo porque es un desembolso
    
    // Gradientes futuros
    for ($i = 1; $i <= $periodo_num; $i++) {  // Cambiar $periodos por $periodo_num
        $periodosTiempo[] = "Período $i" . " " . $periodo_tiempo;
        $gradienteActual = $gradiente * $i;
        $valoresGrafico[] = $gradienteActual;
    }
    
    $response = array(
        'resultado' => $resultado,
        'grafico' => array(
            'periodos' => $periodosTiempo,
            'valores' => $valoresGrafico,
            'valorPresente' => $valorPresenteG,
            'serieUniforme' => max($valoresGrafico)
        )
    );
    
    echo json_encode($response);
?>