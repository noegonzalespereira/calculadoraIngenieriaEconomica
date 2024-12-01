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
function mostrarValoresVInicialSimple(){

    var contenedor=document.getElementById('valores')
    var ajax = new XMLHttpRequest() //crea el objetov ajax
    ajax.open("get", "IngresarValoresVInicialSimple.html", true);
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
    ajax.open("get", "IngresarValoresFA.html", true);
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
    ajax.open("get", "IngresarValoresAFPrueba.html", true);
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
function mostrarValoresGradienteAG() {
    var contenedor = document.getElementById('valores')
    var ajax = new XMLHttpRequest()
    ajax.open("get", "IngresarValoresAG.html", true);
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
function mostrarValoresGradientePG() {
    var contenedor = document.getElementById('valores')
    var ajax = new XMLHttpRequest()
    ajax.open("get", "IngresarValoresPG.html", true);
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
function obtenerValoresVinicialS() {
    var resultadoContainer = document.getElementById('resultado');
    var tablaContainer = document.getElementById('tabla');
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularVInicialSimple.php", true);
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
            crearGraficoFlujos(response.grafico);
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
            try {
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
                crearGraficoFlujos(response.grafico);
            } catch (e){
                console.error("Error al procesar la respuesta:", e);
                console.log("Respuesta recibida:", ajax.responseText);

            }

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
            crearGraficoFlujosfinales(response.grafico);
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
            crearGraficoFlujosfinales(response.grafico);
        }
    }
    ajax.send(datos);
}
function obtenerValoresAG() {
    var resultadoContainer = document.getElementById('resultado');
    
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularAG.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            
            resultadoContainer.innerHTML = response.resultado;
            
            
            diagramaContainer.innerHTML = `
                <h3>DIAGRAMA DE FLUJO DE PAGOS</h3>
                <div style="position: relative; height: 400px;">
                    <canvas id="graficoFlujo"></canvas>
                </div>
            `;
            
            crearGraficoGradiente(response.grafico);
        }
    }
    ajax.send(datos);
}

function obtenerValoresPG() {
    var resultadoContainer = document.getElementById('resultado');
    
    var diagramaContainer = document.getElementById('diagramaFlujoEfectivo');
    var formulario = document.getElementById('formulario');
    var datos = new FormData(formulario);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "calcularPG.php", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            
            resultadoContainer.innerHTML = response.resultado;
            
            
            diagramaContainer.innerHTML = `
                <h3>DIAGRAMA DE FLUJO DE PAGOS</h3>
                <div style="position: relative; height: 400px;">
                    <canvas id="graficoFlujo"></canvas>
                </div>
            `;
            
            crearGraficoGradiente(response.grafico);
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



let graficoActual = null;
function crearGraficoFlujos(datos) {
    // Destruir gráfico anterior si existe
    if (graficoActual) {
        graficoActual.destroy();
    }

    const ctx = document.getElementById('graficoFlujo').getContext('2d');
    
    graficoActual = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: datos.periodos,
            datasets: [{
                data: datos.valores,
                backgroundColor: function(context) {
                    // Valor presente en azul, pagos en rojo
                    return context.dataIndex === 0 ? '#2196F3' : '#FF5252';
                },
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
                        },
                        callback: function(value) {
                            return '$' + value.toFixed(2);
                        }
                    },
                    beginAtZero: true,
                    suggestedMin: -Math.max(datos.valorPresente, datos.serieUniforme) * 1.2,
                    suggestedMax: Math.max(datos.valorPresente, datos.serieUniforme) * 1.2
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12
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
                        },
                        title: function(context) {
                            return context[0].dataIndex === 0 ? 
                                'Valor Presente (P)' : 
                                'Pago Uniforme (A)';
                        }
                    }
                }
            }
        }
    });
}
let graficoFinal = null;

function crearGraficoFlujosfinales(datos) {
    // Destruir gráfico anterior si existe
    if (graficoFinal) {
        graficoFinal.destroy();
    }

    const ctx = document.getElementById('graficoFlujo').getContext('2d');
    
    graficoFinal = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: datos.periodos,
            datasets: [{
                data: datos.valores,
                backgroundColor: function(context) {
                     // Pagos uniformes en azul, valor futuro en rojo
                     return context.dataIndex === datos.periodos.length - 1 ? '#FF5252' : '#2196F3';
                    
                },
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
                        },
                        callback: function(value) {
                            return '$' + value.toFixed(2);
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
                            size: 12
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
                        },
                        title: function(context) {
                            return context[0].dataIndex === datos.periodos.length - 1 ? 
                                'Valor Futuro (F)' : 
                                'Serie Uniforme (A)';
                        }
                    }
                }
            }
        }
    });
}
let graficoGradiente = null;

function crearGraficoGradiente(datos) {
    // Destruir gráfico anterior si existe
    if (graficoGradiente) {
        graficoGradiente.destroy();
    }

    const ctx = document.getElementById('graficoFlujo').getContext('2d');
    
    graficoGradiente = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: datos.periodos,
            datasets: [{
                label: 'Gradiente',
                data: datos.valores,
                backgroundColor: function(context) {
                    // Valor inicial en azul, gradientes en verde
                    return context.dataIndex === 0 ? '#2196F3' : '#4CAF50';
                },
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
                        },
                        callback: function(value) {
                            return '$' + value.toFixed(2);
                        }
                    },
                    beginAtZero: true,
                    suggestedMin: -Math.max(datos.valorPresente, datos.serieUniforme) * 1.2,
                    suggestedMax: Math.max(datos.valorPresente, datos.serieUniforme) * 1.2
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Flujo de Gradientes',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let value = context.raw;
                            return `$${Math.abs(value).toFixed(2)}`;
                        },
                        title: function(context) {
                            return context[0].dataIndex === 0 ? 
                                'Valor Base' : 
                                `Gradiente Período ${context[0].dataIndex}`;
                        }
                    }
                }
            }
        }
    });
}