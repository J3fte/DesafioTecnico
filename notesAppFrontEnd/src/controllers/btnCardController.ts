import { ref } from 'vue';
import { eventBus } from 'src/utils/event-bus';
import { postArchivedNote } from 'src/models/notesModel';

export function btnCardController(props: { id: number; archivado: boolean }) {
  const archivadoV = ref(props.archivado); //se obtiene la variable archivar de la api
  const archivar = async () => {
    //esta funcion es para archivar una nota, tambien actualiza la api archivado y fijado
    archivadoV.value = !archivadoV.value; //Esto se crea porque cuando esta archivado y se le da click de nuevo en la pantalla archivado se desarchive y regrese a notas
    try {
      await postArchivedNote(props.id, archivadoV.value, false); //mandamos a llamar a esta funcion para editar la api
      eventBus.emit('actualizar');
    } catch (error) {
      console.error('Error al archivar la nota:', error);
      throw new Error('Error al archivar la nota en la API');
    }
  };

  return {
    archivar,
  };
}
