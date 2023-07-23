<template>
  <q-menu>
    <q-list style="min-width: 100px">
      <q-item
        clickable
        v-close-popup
        @click="deleteNoteF($props.id)"
        style="height: 40px"
      >
        <q-item-section>Borrar la nota</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>Agregar etiqueta</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>Agregar un dibujo</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>Hacer un copia</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>Mostrar casillas de verificacion</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>Copia un documento de Google</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { btnMore } from 'src/controllers/btnMoreController';

export default defineComponent({
  name: 'btnMore',
  props: {
    id: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  setup() {
    const deleteNoteF = btnMore();
    return {
      deleteNoteF,
    };
  },
});
</script>
<style scoped></style>
