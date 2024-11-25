function cargarContenido(abrir) {
	var contenedor;
	contenedor = document.getElementById('contenido');
	var ajax = new XMLHttpRequest() //crea el objetov ajax 
	ajax.open("get", abrir, true);
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4) {
			console.log(ajax)
			console.log(abrir)
			console.log(contenedor)
			contenedor.innerHTML = ajax.responseText
		}
	}
	ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function mostrarValoresInteresSimple(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresInteresSimple.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function mostrarValoresVFinalSimple(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresVFinalSimple.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function  mostrarValoresICompuesto(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresICompuesto.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function  mostrarValoresInteresC(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresInteresC.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function  mostrarValoresVFinalC(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresVFinalC.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function  mostrarValoresVInicialC(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresVInicialC.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function  mostrarValoresTasaInteresC(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresTasaInteresC.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function  mostrarValoresPeriodoC(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresPeriodoC.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function  mostrarValoresFP(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresFP.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function  mostrarValoresPF(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresPF.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function  mostrarValoresPA(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresPA.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function  mostrarValoresAP(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresAP.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function  mostrarValoresFA(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresPA.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
function  mostrarValoresAF(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresAF.html", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('tabla').innerHTML = '';
            document.getElementById('diagramaFlujoEfectivo').innerHTML = '';
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
	ajax.send();
}
// Variable global para almacenar la instancia del gráfico
let miGrafico = null;

function obtenerValoresInteresS() {
    var resultadoContainer = document.getElementById('resultado');
    var tablaContainer = document.getElementById('tabla');
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularInteresSimple.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            
            // Mostrar resultado
            resultadoContainer.innerHTML = response.resultado;
            
            // Mostrar tabla
            tablaContainer.innerHTML = response.tabla;
            
            // Limpiar y crear nuevo canvas para el gráfico
            diagramaContainer.innerHTML = `
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <div style="position: relative; height: 400px;">
                    <canvas id="graficoFlujo"></canvas>
                </div>
            `;
            
            // Crear nuevo gráfico
            crearGrafico(response.grafico);
        }
    }
    ajax.send(datos);
}


function obtenerValoresVfinalS() {
    var resultadoContainer = document.getElementById('resultado');
    var tablaContainer = document.getElementById('tabla');
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularVFinalSimple.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            
            // Mostrar resultado
            resultadoContainer.innerHTML = response.resultado;
            
            // Mostrar tabla
            tablaContainer.innerHTML = response.tabla;
            
            // Limpiar y crear nuevo canvas para el gráfico
            diagramaContainer.innerHTML = `
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <div style="position: relative; height: 400px;">
                    <canvas id="graficoFlujo"></canvas>
                </div>
            `;
            
            // Crear nuevo gráfico
            crearGrafico(response.grafico);
        }
    }
    ajax.send(datos);
}

function obtenerValoresICompuesto() {
    var resultadoContainer = document.getElementById('resultado');
    var tablaContainer = document.getElementById('tabla');
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularInteresCompuesto.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            
            // Mostrar resultado
            resultadoContainer.innerHTML = response.resultado;
            
            // Mostrar tabla
            tablaContainer.innerHTML = response.tabla;
            
            // Limpiar y crear nuevo canvas para el gráfico
            diagramaContainer.innerHTML = `
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <div style="position: relative; height: 400px;">
                    <canvas id="graficoFlujo"></canvas>
                </div>
            `;
            
            // Crear nuevo gráfico
            crearGrafico(response.grafico);
        }
    }
    ajax.send(datos);
}

function obtenerValoresInteresC() {
    var resultadoContainer = document.getElementById('resultado');

    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularInteresC.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            
            // Mostrar resultado
            resultadoContainer.innerHTML = ajax.responseText;
            
            
            
        }
    }
    ajax.send(datos);
}
function obtenerValoresVFinalC() {
    var resultadoContainer = document.getElementById('resultado');
    var tablaContainer = document.getElementById('tabla');
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularVFinalC.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            
            // Mostrar resultado
            resultadoContainer.innerHTML = response.resultado;
            
            // Mostrar tabla
            tablaContainer.innerHTML = response.tabla;
            
            // Limpiar y crear nuevo canvas para el gráfico
            diagramaContainer.innerHTML = `
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <div style="position: relative; height: 400px;">
                    <canvas id="graficoFlujo"></canvas>
                </div>
            `;
            
            // Crear nuevo gráfico
            crearGrafico(response.grafico);
        }
    }
    ajax.send(datos);
}
function obtenerValoresVInicialC() {
    var resultadoContainer = document.getElementById('resultado');
    var tablaContainer = document.getElementById('tabla');
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularVInicialC.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            
            // Mostrar resultado
            resultadoContainer.innerHTML = response.resultado;
            
            // Mostrar tabla
            tablaContainer.innerHTML = response.tabla;
            
            // Limpiar y crear nuevo canvas para el gráfico
            diagramaContainer.innerHTML = `
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <div style="position: relative; height: 400px;">
                    <canvas id="graficoFlujo"></canvas>
                </div>
            `;
            
            // Crear nuevo gráfico
            crearGrafico(response.grafico);
        }
    }
    ajax.send(datos);
}
function obtenerValoresTasaInteresC() {
    var resultadoContainer = document.getElementById('resultado');

    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularTasaInteresC.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            
            // Mostrar resultado
            resultadoContainer.innerHTML = ajax.responseText;
            
            
            
        }
    }
    ajax.send(datos);
}
function obtenerValoresPeriodoC() {
    var resultadoContainer = document.getElementById('resultado');

    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularPeriodoC.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            
            // Mostrar resultado
            resultadoContainer.innerHTML = ajax.responseText;
            
            
            
        }
    }
    ajax.send(datos);
}

function obtenerValoresFP() {
    var resultadoContainer = document.getElementById('resultado');
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularFP.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            
            // Mostrar resultado
            resultadoContainer.innerHTML = response.resultado;
            
            // Mostrar tabla
            
            // Limpiar y crear nuevo canvas para el gráfico
            diagramaContainer.innerHTML = `
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <div style="position: relative; height: 400px;">
                    <canvas id="graficoFlujo"></canvas>
                </div>
            `;
            
            // Crear nuevo gráfico
            crearGrafico(response.grafico);
        }
    }
    ajax.send(datos);
}

function obtenerValoresPF() {
    var resultadoContainer = document.getElementById('resultado');
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularPF.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            
            // Mostrar resultado
            resultadoContainer.innerHTML = response.resultado;
            
            // Mostrar tabla
            
            // Limpiar y crear nuevo canvas para el gráfico
            diagramaContainer.innerHTML = `
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <div style="position: relative; height: 400px;">
                    <canvas id="graficoFlujo"></canvas>
                </div>
            `;
            
            // Crear nuevo gráfico
            crearGrafico(response.grafico);
        }
    }
    ajax.send(datos);
}

function obtenerValoresAP() {
    var resultadoContainer = document.getElementById('resultado');
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularAP.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            
            // Mostrar resultado
            resultadoContainer.innerHTML = response.resultado;
            
            // Mostrar tabla
            
            // Limpiar y crear nuevo canvas para el gráfico
            diagramaContainer.innerHTML = `
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <div style="position: relative; height: 400px;">
                    <canvas id="graficoFlujo"></canvas>
                </div>
            `;
            
            // Crear nuevo gráfico
            crearGrafico(response.grafico);
        }
    }
    ajax.send(datos);
}

function obtenerValoresPA() {
    var resultadoContainer = document.getElementById('resultado');
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularPA.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            
            // Mostrar resultado
            resultadoContainer.innerHTML = response.resultado;
            
            // Mostrar tabla
            
            // Limpiar y crear nuevo canvas para el gráfico
            diagramaContainer.innerHTML = `
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <div style="position: relative; height: 400px;">
                    <canvas id="graficoFlujo"></canvas>
                </div>
            `;
            
            // Crear nuevo gráfico
            crearGrafico(response.grafico);
        }
    }
    ajax.send(datos);
}

function obtenerValoresAF() {
    var resultadoContainer = document.getElementById('resultado');
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularAF.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            
            // Mostrar resultado
            resultadoContainer.innerHTML = response.resultado;
            
            // Mostrar tabla
            
            // Limpiar y crear nuevo canvas para el gráfico
            diagramaContainer.innerHTML = `
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <div style="position: relative; height: 400px;">
                    <canvas id="graficoFlujo"></canvas>
                </div>
            `;
            
            // Crear nuevo gráfico
            crearGrafico(response.grafico);
        }
    }
    ajax.send(datos);
}

function obtenerValoresFA() {
    var resultadoContainer = document.getElementById('resultado');
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularFA.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            
            // Mostrar resultado
            resultadoContainer.innerHTML = response.resultado;
            
            // Mostrar tabla
            
            // Limpiar y crear nuevo canvas para el gráfico
            diagramaContainer.innerHTML = `
                <h3>DIAGRAMA DE FLUJO DE EFECTIVO</h3>
                <div style="position: relative; height: 400px;">
                    <canvas id="graficoFlujo"></canvas>
                </div>
            `;
            
            // Crear nuevo gráfico
            crearGrafico(response.grafico);
        }
    }
    ajax.send(datos);
}

function crearGrafico(datos) {
    // Destruir gráfico anterior si existe
    if (miGrafico) {
        miGrafico.destroy();
    }

    const ctx = document.getElementById('graficoFlujo').getContext('2d');
    
    miGrafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: datos.periodos,
            datasets: [{
                data: datos.valores,
                backgroundColor: '#2c3e50',
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    grid: {
                        color: '#e0e0e0',
                        drawBorder: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        }
                    },
                    beginAtZero: true,
                    suggestedMin: -Math.max(datos.inicial, datos.final) * 1.2,
                    suggestedMax: Math.max(datos.inicial, datos.final) * 1.2
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12,
                            color: '#00bcd4'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let value = context.raw;
                            return `$${Math.abs(value).toFixed(2)}`;
                        }
                    }
                }
            }
        }
    });
}