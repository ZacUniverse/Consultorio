let citaId = 1;

function addCita() {
  // Recolecta los datos del formulario
  const nombre = document.getElementById("txtNombre").value;
  const apellidoP = document.getElementById("txtApellidoP").value;
  const apellidoM = document.getElementById("txtApellidoM").value;
  const contacto = document.getElementById("txtContacto").value;
  const fechaCita = document.getElementById("txtFechaC").value;
  const horarioCita = document.getElementById("txtHorarioC").value;
  const estatus = document.getElementById("estatus").value;

  // Combina nombre completo del paciente
  const nombreCompleto = `${nombre} ${apellidoP} ${apellidoM}`;

  // Actualiza la ventana emergente
  const lblPaciente = document.getElementById("lblPaciente");
  const lblFecha = document.getElementById("lblFecha");
  const lblHorario = document.getElementById("lblHorario");

  // Verifica si los elementos existen antes de modificar sus propiedades
  if (lblPaciente && lblFecha && lblHorario) {
    lblPaciente.textContent = nombreCompleto;
    lblFecha.textContent = fechaCita;
    lblHorario.textContent = horarioCita;
  } else {
    console.error("No se encontraron los elementos en la ventana emergente.");
  }

  // Agrega la cita a la tabla
  const tblCitas = document.getElementById("tblCitas");
  const row = tblCitas.insertRow();
  row.insertCell(0).textContent = citaId++;
  row.insertCell(1).textContent = nombreCompleto;
  row.insertCell(2).textContent = contacto;
  row.insertCell(3).textContent = fechaCita;
  row.insertCell(4).textContent = horarioCita;
  row.insertCell(5).textContent = estatus;

  // Limpia el formulario
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtApellidoP").value = "";
  document.getElementById("txtApellidoM").value = "";
  document.getElementById("txtContacto").value = "";
  document.getElementById("txtFechaC").value = "";
  document.getElementById("txtHorarioC").value = "";
  document.getElementById("estatus").value = "Agendado";
}

function limpiarFormulario() {
  // Limpia el formulario
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtApellidoP").value = "";
  document.getElementById("txtApellidoM").value = "";
  document.getElementById("txtContacto").value = "";
  document.getElementById("txtFechaC").value = "";
  document.getElementById("txtHorarioC").value = "";
  document.getElementById("estatus").value = "";
}

function cancelarCitas() {
  // Obtiene la referencia de la tabla de citas por su ID
  const tblCitas = document.getElementById("tblCitas");

  // Verifica que la tabla exista y tenga elementos
  if (tblCitas) {
    // Elimina todas las filas de la tabla
    tblCitas.innerHTML = "";
    // Reinicia el ID de cita para comenzar desde 1 en caso de agregar nuevas citas
    citaId = 1;
  }
}
