<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <!-- Se utiliza q-card para renderizar las notas -->
    <q-card
      v-for="(nota, index) in notas"
      :key="nota.titulo_nota"
      class="my-card text-black rounded-borders"
      @mouseover="handleMouseOver(index)"
      @mouseleave="handleMouseLeave()"
    >
      <q-btn
        :style="{ opacity: showActionsIndex === index ? 1 : 0 }"
        class="select"
        size="xs"
        v-if="$q.screen.gt.sm"
        round
        dense
        flat
        color="white"
        icon="done"
        @click="console.log(nota.updated_at)"
      >
        <q-tooltip>Seleccionar nota</q-tooltip>
      </q-btn>
      <q-btn
        :style="{ opacity: showActionsIndex === index ? 1 : 0 }"
        class="pin"
        size="md"
        v-if="$q.screen.gt.sm"
        round
        @click="fijarNota(nota.id, Boolean(nota.fijado))"
        dense
        flat
        color="grey-7"
        :icon="nota.fijado ? 'mdi-pin' : 'mdi-pin-outline'"
      >
        <q-tooltip>Fijar nota</q-tooltip>
      </q-btn>
      <q-card-section
        @click="openDialog(nota)"
        class="auto-height"
        style="word-wrap: break-word; overflow-y: auto"
      >
        <div class="text-title">{{ nota.titulo_nota }}</div>
        {{ nota.descripcion_nota }}
      </q-card-section>
      <q-card-actions :style="{ opacity: showActionsIndex === index ? 1 : 0 }">
        <btnsCard :id="nota.id" :archivado="Boolean(nota.archivado)" />
      </q-card-actions>
    </q-card>
    <q-dialog v-model="dialogVisible">
      <editCard :nota="notaSelect" style="width: 700px" />
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Note } from '../models/Note';

import btnsCard from './buttons/btnsCard.vue';
import editCard from './modals/editCardModal.vue';
import { listaController } from '../controllers/NoteListController';

export default defineComponent({
  name: 'NotesList',
  props: {
    notas: {
      type: Array as PropType<Note[]>,
      required: true,
    },
  },
  components: { btnsCard, editCard },
  setup() {
    const {
      notaSelect,
      dialogVisible,
      showActionsIndex,
      fijarNota,
      handleMouseOver,
      handleMouseLeave,
      openDialog,
    } = listaController();

    return {
      notaSelect,
      dialogVisible,
      showActionsIndex,
      fijarNota,
      handleMouseOver,
      handleMouseLeave,
      openDialog,
    };
  },
});
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
  position: relative;
}

.q-card-actions {
  opacity: 0;
  transition: opacity 0.2s;
}

.my-card:hover .q-card-actions {
  opacity: 1;
}

.auto-height {
  min-height: fit-content;
}

.text-title {
  font-size: 17px;
  font-weight: 600;
}

.select {
  background-color: black;
  top: -8px;
  right: 10px;
}
</style>
