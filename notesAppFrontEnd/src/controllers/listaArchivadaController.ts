import { Note } from 'src/models/Note';
import { ref } from 'vue';
import { fetchNotesArchivadasFromAPI } from '../models/notesModel';
import { eventBus } from 'src/utils/event-bus';

export function listaArchivadaController() {
  const notas = ref<Note[]>([]);

  const loadNotesArchivadas = async () => {
    //Funcion para obtener los ultimos cambios en la api
    notas.value = await fetchNotesArchivadasFromAPI();
  };

  eventBus.on('actualizar', async () => {
    await loadNotesArchivadas(); // Actualizar las notas cuando se agrega una nueva
  });

  return {
    notas,
    loadNotesArchivadas,
  };
}
