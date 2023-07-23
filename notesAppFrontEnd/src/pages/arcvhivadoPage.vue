<template>
  <q-page padding class="bg-white">
    <div class="row items-center justify-evenly">
      <NotesList :notas="notas" />
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { listaArchivadaController } from '../controllers/listaArchivadaController';
import NotesList from '../components/NotesList.vue';
import { fetchNotesArchivadasFromAPI } from '../models/notesModel';

export default defineComponent({
  name: 'IndexPage',
  components: { NotesList },
  setup() {
    const { notas } = listaArchivadaController();
    onMounted(async () => {
      notas.value = await fetchNotesArchivadasFromAPI(); //  Cargar las notas al iniciar la página
    });

    return {
      notas,
    };
  },
});
</script>
