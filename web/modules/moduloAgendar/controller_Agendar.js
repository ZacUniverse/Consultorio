let idCounter = 1; // Inicializa un contador de ID

// Función para agregar una cita
function addCita() {
    // Obtén los valores del formulario
    const nombre = document.getElementById('txtNombre').value;
    const apellidoP = document.getElementById('txtApellidoP').value;
    const apellidoM = document.getElementById('txtApellidoM').value;
    const contacto = document.getElementById('txtContacto').value;
    const fecha = document.getElementById('txtFechaC').value;
    const horario = document.getElementById('txtHorarioC').value;
    const estatus = document.getElementById('estatus').value;

    // Genera el nombre completo del paciente
    const nombreCompleto = `${nombre} ${apellidoP} ${apellidoM}`;

    // Asigna el ID autoincrementable
    const citaId = idCounter++;

    // Muestra los datos en la ventana emergente
    document.querySelector('#emergenteC3 .modal-body .col-12:nth-child(1) label:last-child').textContent = nombreCompleto;
    document.querySelector('#emergenteC3 .modal-body .col-12:nth-child(2) label:nth-child(2)').textContent = fecha;
    document.querySelector('#emergenteC3 .modal-body .col-12:nth-child(2) label:nth-child(3)').textContent = horario;

    // Agrega la cita a la tabla de la segunda vista
    const table = document.getElementById('tblCitas');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${citaId}</td>
        <td>${nombreCompleto}</td>
        <td>${contacto}</td>
        <td>${fecha}</td>
        <td>${horario}</td>
        <td>${estatus}</td>
    `;
    table.appendChild(newRow);

    // Limpia el formulario (opcional)
    document.getElementById('txtNombre').value = '';
    document.getElementById('txtApellidoP').value = '';
    document.getElementById('txtApellidoM').value = '';
    document.getElementById('txtContacto').value = '';
    document.getElementById('txtFechaC').value = '';
    document.getElementById('txtHorarioC').value = '';
    document.getElementById('estatus').value = 'Agendado';
}
