import { eventBus } from 'src/utils/event-bus';
import { deleteNota } from 'src/models/notesModel';

export function btnMore() {
  //Funcion para eliminar notas recibe el id de la nota y manda a llamar deleteNoteF la cual la elimina de la api
  const deleteNoteF = async (id: number) => {
    try {
      const response = await deleteNota(id);
      console.log('Nota eliminada', response);
      eventBus.emit('actualizar');
    } catch (error) {
      console.error('Error al eliminar la nota:', error);
    }
  };
  return deleteNoteF;
}
