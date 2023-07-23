import { ref } from 'vue';
import { Note } from 'src/models/Note';
import { eventBus } from 'src/utils/event-bus';
import { postArchivedNote } from 'src/models/notesModel';
export function listaController() {
  //Varibles
  const dialogVisible = ref(false);
  const showActionsIndex = ref(-1);
  const notaSelect = ref();
  const archivado = false;
  //COn esta funcion se fija una nota, primero se obtiene la id, y la variable fijado, la variable archivado siempre va ser null cuando se fije una nota
  const fijarNota = async (id: number, fijado: boolean) => {
    try {
      const nuevoFijado = !fijado;
      await postArchivedNote(id, archivado, nuevoFijado);
      eventBus.emit('actualizar');
    } catch (error) {
      console.error('Error al archivar la nota:', error);
      throw new Error('Error al archivar la nota en la API');
    }
  };
  const openDialog = (nota: Note) => {
    dialogVisible.value = true;
    notaSelect.value = nota;
  };
  const handleMouseOver = (index: number) => {
    showActionsIndex.value = index;
  };
  const handleMouseLeave = () => {
    showActionsIndex.value = -1;
  };
  eventBus.on('CerrarDialogo', async () => {
    dialogVisible.value = false;
  });

  return {
    notaSelect,
    dialogVisible,
    showActionsIndex,
    fijarNota,
    handleMouseOver,
    handleMouseLeave,
    openDialog,
  };
}
