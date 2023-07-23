import { ref } from 'vue';

import { eventBus } from '../utils/event-bus';
import { createNote } from 'src/models/notesModel';

export function controllerInput() {
  //varibles de la nota
  const input = ref(null);
  const showInput = ref(false);
  const titulo = ref('');
  const texto = ref('');
  const archivado = ref(false);
  const fijado = ref(false);

  const fijar = () => {
    fijado.value = !fijado.value; // Se cambia al valor contrario que se tenga
  };

  const toggleInput = (isActive: boolean) => {
    //Muesta el input o lo desactiva
    showInput.value = isActive;
  };
  //Esta funcion archiva la nota pero al momento de crearla
  const archivar = async () => {
    archivado.value = true;
    fijado.value = false;
    console.log('Nota archivada');
    guardarNota();
  };

  //Se mandan los valores obtenidos del formulario y se envian a guardar notea para que prosece la informacion y lo guarede en la api
  const guardarNota = async () => {
    //Comprobar que los valores no vengan vacios
    if (
      !titulo.value.trim() ||
      !texto.value.trim() ||
      archivado.value === null ||
      archivado.value === undefined ||
      fijado.value === null ||
      fijado.value === undefined
    ) {
      toggleInput(false);
      return;
    }
    try {
      // Llama a la función createNote del modelo para agregar la nota a la API
      const response = await createNote(
        titulo.value,
        texto.value,
        archivado.value,
        fijado.value
      );
      if (response) {
        console.log('Nota guardada con éxito');
        eventBus.emit('actualizar');
        titulo.value = '';
        texto.value = '';
        archivado.value = false;
        fijado.value = false;
        toggleInput(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    fijar,
    fijado,
    input,
    showInput,
    titulo,
    texto,
    archivado,
    guardarNota,
    toggleInput,
    archivar,
  };
}
