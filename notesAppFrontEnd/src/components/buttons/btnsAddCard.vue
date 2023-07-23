<template>
  <q-btn
    class="btnPosition"
    size="md"
    round
    dense
    flat
    color="grey-7"
    icon="notifications_none"
  >
    <q-tooltip>Recordareme</q-tooltip>
  </q-btn>
  <q-btn
    class="btnPosition"
    size="md"
    round
    dense
    flat
    color="grey-7"
    icon="person_add_alt"
  >
    <q-tooltip>Colaborador</q-tooltip>
  </q-btn>
  <q-btn
    class="btnPosition"
    size="md"
    round
    dense
    flat
    color="grey-7"
    icon="palette"
  >
    <q-tooltip>Obciones de fondo</q-tooltip>
  </q-btn>
  <q-btn
    class="btnPosition"
    size="md"
    round
    dense
    flat
    color="grey-7"
    icon="image"
  >
    <q-tooltip>Agregar imagen</q-tooltip>
  </q-btn>
  <q-btn
    @click="archivar()"
    class="btnPosition"
    size="md"
    round
    dense
    flat
    color="grey-7"
    icon="archive"
  >
    <q-tooltip>Archivar </q-tooltip>
  </q-btn>
  <q-btn
    class="btnPosition"
    size="md"
    round
    dense
    flat
    color="grey-7"
    icon="more_vert"
  >
    <q-tooltip>Mas</q-tooltip>
  </q-btn>

  <q-btn
    class="btnPosition"
    size="md"
    round
    dense
    flat
    color="grey-7"
    icon="undo"
  >
    <q-tooltip>Deshacer</q-tooltip>
  </q-btn>
  <q-btn
    class="btnPosition"
    size="md"
    round
    dense
    flat
    icon="redo"
    color="grey-7"
  >
    <q-tooltip>Rehacer</q-tooltip>
  </q-btn>
  <q-btn
    flat
    label="Cerrar"
    @click="funcionEnviar()"
    class="btn_cerrar"
    color="grey-7"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'btnAddCard',
  props: {
    funcionEnviar: {
      type: Function,
      required: true,
    },
    archivar: {
      type: Function,
      required: true,
    },
  },
});
</script>
