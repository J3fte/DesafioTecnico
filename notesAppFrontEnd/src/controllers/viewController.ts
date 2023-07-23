import { Note } from 'src/models/Note';
import { ref } from 'vue';
import { fetchNotesFromAPI } from '../models/notesModel';
import { eventBus } from 'src/utils/event-bus';
//Funcion para obtener los valores de la api
export function listaController() {
  const notas = ref<Note[]>([]);

  const loadNotes = async () => {
    notas.value = await fetchNotesFromAPI();
  };

  eventBus.on('actualizar', async () => {
    await loadNotes(); // Actualizar las notas cuando se agrega una nueva
  });

  return {
    notas,
    loadNotes,
  };
}
