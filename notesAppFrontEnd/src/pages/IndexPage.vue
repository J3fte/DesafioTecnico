<template>
  <q-page padding class="bg-white">
    <div class="column items-center justify-evenly">
      <NoteInput />
    </div>
    <div v-if="notasFijadas.length > 0">
      <p>Fijadas</p>
      <NotesList :notas="notasFijadas" />
    </div>
    <div v-if="notasNoFijadas.length > 0">
      <div>
        <p v-if="notasFijadas.length > 0" style="margin-top: 50px">OTRAS</p>
        <NotesList :notas="notasNoFijadas" />
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import { listaController } from '../controllers/viewController';
import NotesList from '../components/NotesList.vue';
import NoteInput from '../components/NoteInput.vue';
import { fetchNotesFromAPI } from '../models/notesModel';

export default defineComponent({
  name: 'IndexPage',
  components: { NoteInput, NotesList },
  setup() {
    const { notas } = listaController();

    onMounted(async () => {
      notas.value = await fetchNotesFromAPI(); //  Cargar las notas al iniciar la página
    });
    const notasFijadas = computed(() =>
      notas.value.filter((nota) => nota.fijado)
    );
    const notasNoFijadas = computed(() =>
      notas.value.filter((nota) => !nota.fijado)
    );
    console.log(notasNoFijadas);
    return {
      notasNoFijadas,
      notasFijadas,
      notas,
    };
  },
});
</script>
