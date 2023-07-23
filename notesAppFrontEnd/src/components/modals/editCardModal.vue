<template>
  <div class="q-pa-md" style="max-width: 100%; background-color: aliceblue">
    <q-form @submit="editarCard">
      <q-btn
        @click="fijar()"
        class="pin"
        size="md"
        v-if="$q.screen.gt.sm"
        round
        dense
        flat
        color="grey-7"
        :icon="fijado ? 'mdi-pin' : 'mdi-pin-outline'"
      ></q-btn>
      <q-input
        v-model="tituloN"
        placeholder="Título"
        borderless
        :rules="[
          (val) => !!val || '* Campo requerido',
          (val) => val.length < 300 || 'No se puede agregar mas 300 caracteres',
        ]"
        lazy-rules
        class="custom-input"
      />
      <q-input
        v-model="descripcionN"
        borderless
        placeholder="Crear una nota..."
        :rules="[
          (val) => !!val || '* Campo requerido',
          (val) => val.length < 300 || 'No se puede agregar mas 300 caracteres',
        ]"
        lazy-rules
      />
      <p class="fecha">Ultima edicion: {{ fecha(nota.updated_at) }}</p>
      <q-card-actions class="btn">
        <btnsAddCard :funcionEnviar="editarCard" :archivar="archivar" />
      </q-card-actions>
    </q-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Note } from 'src/models/Note';
import btnsAddCard from '../buttons/btnsAddCard.vue';
import { editCardController } from '../../controllers/editCardController';
import { fecha } from 'src/controllers/fechaController';
export default defineComponent({
  name: 'editCard',
  components: {
    btnsAddCard,
  },
  props: {
    nota: {
      type: Object as PropType<Note>,
      required: true,
    },
  },

  setup(props) {
    const { editarCard, archivar, fijar, tituloN, descripcionN, fijado } =
      editCardController(props);
    return {
      editarCard,
      archivar,
      fijar,
      tituloN,
      descripcionN,
      fijado,
      fecha,
    };
  },
});
</script>
<style scoped>
.btn {
  direction: ltr;
}
.fecha {
  position: absolute;
  right: 10px;
  bottom: 25px;
}
.custom-input {
  font-size: 28px;
}
</style>
