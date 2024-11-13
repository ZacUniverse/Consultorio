let moduloAgendar;
let moduloCitasHoy;

function cargarInicio() {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    fetch("web/index.html");
}
 
function CargarModuloAgendar(){
    fetch("modules/moduloAgendar/view_Agendar.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloAgendar/controller_Agendar.js").then(
                            function(controller){
                                moduloAgendar = controller;
                            }
                            );
                }
            );
}
function CargarModuloCitasHoy(){
    fetch("modules/moduloCitasHoy/view_CitasHoy.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloCitasHoy/controller_Citas.js").then(
                            function(controller){
                                moduloCitasHoy = controller; 
                            }
                            );
                }
            );
}

