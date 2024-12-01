<?php
    $gradiente = $_POST['gradiente'];
    $interes = $_POST['interes'];
    $periodo_num=$_POST['periodo_num'];
    $periodo_tiempo=$_POST['periodo_tiempo'];

    $interesPorcentual = $interes/100;
    
    // Cálculo del factor A/G
    $factorAG = (1/$interesPorcentual) - ($periodo_num/(pow(1 + $interesPorcentual, $periodo_num) - 1));
    $anualidadG = $gradiente * $factorAG;
    
    $resultado = "<div class='resultado-text'>
        VA = $" . number_format($anualidadG, 2) . "</div>";
    
    // Datos para el gráfico
    $periodosTiempo = array();
    $valoresGrafico = array();
    
    // Primer valor es la anualidad base
    $periodosTiempo[] = "0";
    $valoresGrafico[] = $anualidadG;
    
    // Resto de valores son los pagos con gradiente
    for ($i = 1; $i <= $periodo_num; $i++) {  // Cambiar $periodos por $periodo_num
        $periodosTiempo[] = "Período $i" . " " . $periodo_tiempo;
        $valoresGrafico[] = $anualidadG + ($gradiente * $i);
    }
    
    $response = array(
        'resultado' => $resultado,
        'grafico' => array(
            'periodos' => $periodosTiempo,
            'valores' => $valoresGrafico,
            'valorPresente' => $anualidadG,
            'serieUniforme' => end($valoresGrafico)
        )
    );
    
    echo json_encode($response);
?>