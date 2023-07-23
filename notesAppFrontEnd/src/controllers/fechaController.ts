export function fecha(fechaAPI: string) {
  // Crear un objeto Date a partir de la cadena de la API
  const fecha = new Date(fechaAPI);

  // Formatear la fecha en un formato legible en la zona horaria del servidor (UTC)
  const fechaLegible = fecha.toLocaleString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return fechaLegible;
}
