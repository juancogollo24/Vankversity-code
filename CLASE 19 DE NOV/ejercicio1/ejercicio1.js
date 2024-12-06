const pacientes = [
    { nombre: 'Juan Pérez', documento: '123456789', cita: { dia: 'Lunes', fecha: '2024-11-20', hora: '10:00' } },
    { nombre: 'María López', documento: '987654321', cita: { dia: 'Miércoles', fecha: '2024-11-22', hora: '15:00' } }
  ];
  function buscarPaciente(documento) {
    return pacientes.find(paciente => paciente.documento === documento);
  }
  function mostrarCita(paciente) {
    console.log(`Nombre: ${paciente.nombre}`);
    console.log(`Día de la cita: ${paciente.cita.dia}`);
    console.log(`Fecha de la cita: ${paciente.cita.fecha}`);
    console.log(`Hora de la cita: ${paciente.cita.hora}`);
  }
  function cambiarCita(paciente, nuevoDia, nuevaFecha) {
    paciente.cita.dia = nuevoDia;
    paciente.cita.fecha = nuevaFecha;
    console.log('La cita se ha actualizado exitosamente.');
  }
  const documentoUsuario = prompt('Ingrese su número de documento:');
  
  const pacienteEncontrado = buscarPaciente(documentoUsuario);
  
  if (pacienteEncontrado) {
    mostrarCita(pacienteEncontrado);
  
    const deseaCambiar = prompt('¿Desea cambiar el día o la fecha de su cita? (si/no)');
  
    if (deseaCambiar.toLowerCase() === 'si') {
      const nuevoDia = prompt('Ingrese el nuevo día:');
      const nuevaFecha = prompt('Ingrese la nueva fecha (AAAA-MM-DD):');
      cambiarCita(pacienteEncontrado, nuevoDia, nuevaFecha);
      mostrarCita(pacienteEncontrado);
    } else {
      console.log('La cita no ha sido modificada.');
    }
  } else {
    console.log('Paciente no encontrado.');
  }