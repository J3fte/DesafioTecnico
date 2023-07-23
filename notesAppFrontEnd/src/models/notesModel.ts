import { Note } from './Note';
import api from '../services/api';

// Función para crear una nueva nota
export const createNote = async (
  titulo: string,
  texto: string,
  archivado: boolean | string,
  fijado: boolean | string
): Promise<Note> => {
  try {
    const nuevaNota: Note = {
      id: 0, // Se deja en 0 porque la api genera un id
      titulo_nota: titulo,
      descripcion_nota: texto,
      archivado: archivado,
      fijado: fijado,
    };

    // Llamar a la función para guardar la nota en la API
    const response = await postNoteToApi(
      nuevaNota.titulo_nota,
      nuevaNota.descripcion_nota,
      nuevaNota.archivado,
      nuevaNota.fijado
    );

    return response;
  } catch (error) {
    console.log(error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};
// Función para guardar la nota en la API
export const postNoteToApi = async (
  titulo: string,
  texto: string,
  archivado: boolean | string,
  fijado: boolean | string
): Promise<Note> => {
  try {
    const response = await api.post('v1/notes', {
      titulo_nota: titulo,
      descripcion_nota: texto,
      archivado: archivado.toString(),
      fijado: fijado.toString(),
    });

    return response.data; // Devuelve los datos obtenidos desde la API
  } catch (error) {
    console.error('Error al guardar la nota:', error);
    throw new Error('Error al guardar la nota en la API');
  }
};
//Funcion para obtener las notas
export const fetchNotesFromAPI = async () => {
  try {
    const response = await api.get('v1/notes'); // Realiza la solicitud GET a /notas
    const filteredNotes = response.data.filter(
      (note: Note) => note.archivado === 0 //En la bd se guardan como boolean pero se transforma en numero y en la api se muestra como un numero por lo cual para hacer este filtrado usamos el 0
    );
    return filteredNotes; // Devuelve los datos obtenidos desde la API (un array de objetos Note)
  } catch (error) {
    console.error('Error al obtener las notas:', error);
    return []; // En caso de error, devolvemos un array vacío
  }
};
// Función para actualizar una nota existente
export const updateNote = async (
  id: number,
  titulo: string,
  texto: string,
  archivado: boolean | string,
  fijado: boolean | string
): Promise<Note> => {
  try {
    const archivadoString = archivado.toString();
    const fijadoString = fijado.toString();
    const notaActualizada: Note = {
      id: id,
      titulo_nota: titulo,
      descripcion_nota: texto,
      archivado: archivadoString,
      fijado: fijadoString,
    };

    // Llamar a la función para enviar la nota actualizada a la API mediante el método PUT
    const response = await putNoteToApi(notaActualizada);

    return response;
  } catch (error) {
    console.log(error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};
// Función para enviar la nota actualizada a la API mediante el método PUT
export const putNoteToApi = async (note: Note): Promise<Note> => {
  try {
    const response = await api.put(`v1/notes/${note.id}`, note);
    return response.data; // Devuelve los datos obtenidos desde la API
  } catch (error) {
    console.error('Error al actualizar la nota:', error);
    throw new Error('Error al actualizar la nota en la API');
  }
};
// Funcion para eleminar una nota
export const deleteNota = async (notaId: number) => {
  try {
    const response = await api.delete(`v1/notes/${notaId}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar la nota:', error);
    throw error;
  }
};
//Funcion para obtener las notas archivadas
export const fetchNotesArchivadasFromAPI = async () => {
  try {
    const response = await api.get('v1/notes/archived'); // Realiza la solicitud GET a /notas
    return response.data.data; // Devuelve los datos obtenidos desde la API (un array de objetos Note)
  } catch (error) {
    console.error('Error al obtener las notas:', error);
    return []; // En caso de error, devolvemos un array vacío
  }
};
//Funcion para archivar una nota
export const postArchivedNote = async (
  id: number,
  archivado: boolean | string,
  fijado: boolean | string
) => {
  try {
    const response = await api.post(`v1/notes/${id}/archived`, {
      archivado: archivado.toString(),
      fijado: fijado.toString(),
    });
    return response; // Devuelve los datos obtenidos desde la API
  } catch (error) {
    console.error('Error al  archivar la nota:', error);
    throw new Error('Error al archivar la nota en la API');
  }
};
