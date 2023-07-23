import { ref, Ref } from 'vue';
import { eventBus } from 'src/utils/event-bus';
import { updateNote } from 'src/models/notesModel';
import { Note } from '../models/Note';

interface EditCardController {
  editarCard: () => void;
  archivar: () => void;
  fijar: () => void;
  tituloN: Ref<string>;
  descripcionN: Ref<string>;
  fijado: Ref<boolean | string>;
}
export function editCardController(props: { nota: Note }): EditCardController {
  //variables que vienen por props desde editar Card modal
  const dialogVisible = ref(true); //Es para que se quite la pantalla emergente para editar
  const idN = ref(props.nota.id); //id de la card seleccionada
  //variables que vienen de la card
  const tituloN = ref(props.nota.titulo_nota);
  const descripcionN = ref(props.nota.descripcion_nota);
  const archivado = ref(props.nota.archivado);

  //Esta funcion es para cambiar el estado de fijado al darle click a un boton
  const fijado = ref(props.nota.fijado);
  const fijar = () => {
    fijado.value = !fijado.value; // Se cambia al valor contrario que se tenga
  };

  //Para evitar sobre carga a la api, se guarda los valores que viene de la ventana emergente
  const originalData = {
    tituloN: props.nota.titulo_nota,
    descripcionN: props.nota.descripcion_nota,
    archivado: props.nota.archivado,
    fijado: props.nota.fijado,
  };

  //Esta funcion es para comparar si existe cambios o no
  const hayCambiosSinGuardar = () => {
    return (
      tituloN.value !== originalData.tituloN ||
      descripcionN.value !== originalData.descripcionN ||
      archivado.value !== originalData.archivado ||
      fijado.value !== originalData.fijado
    );
  };

  //Esta funcion cambia el estado de archivado a verdero y manda a llamar a editCard para guardar los cambios y asi archivar la nota
  const archivar = async () => {
    archivado.value = true;
    editarCard();
  };
  //Funcion para editar la card
  const editarCard = async () => {
    //Primero se asegura de que exista algun cambio
    if (hayCambiosSinGuardar()) {
      if (
        idN.value !== null ||
        !tituloN.value.trim() ||
        !descripcionN.value.trim() ||
        archivado.value === null ||
        archivado.value === undefined ||
        fijado.value === null ||
        fijado.value === undefined
      ) {
      }
      if (fijado.value === 1) {
        //ya que en la base datos el true o el falase se guardan como numero, para evitar que al editar la tarjeta
        //se guarde como false entonces simplemente le asignamos true a value antes de ser enviada
        fijado.value = true;
      }
      try {
        console.log(
          fijado.value,
          'variable fijado dentro de la funcion editCard antes de enviarla'
        );

        const response = await updateNote(
          idN.value,
          tituloN.value,
          descripcionN.value,
          archivado.value,
          fijado.value
        );
        if (response) {
          dialogVisible.value = false;
          console.log('Nota editada');
          eventBus.emit('CerrarDialogo');
          eventBus.emit('actualizar');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      eventBus.emit('CerrarDialogo');
    }
  };

  return {
    editarCard,
    archivar,
    fijar,
    tituloN,
    descripcionN,
    fijado,
  };
}
