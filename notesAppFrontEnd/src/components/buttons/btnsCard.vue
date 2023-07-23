<template>
  <div>
    <q-btn
      class="position"
      size="sm"
      v-if="$q.screen.gt.sm"
      round
      dense
      flat
      color="text-grey-7"
      icon="notifications_none"
    >
      <q-tooltip>Recordareme</q-tooltip>
    </q-btn>
    <q-btn
      class="position"
      size="sm"
      v-if="$q.screen.gt.sm"
      round
      dense
      flat
      color="text-grey-7"
      icon="person_add_alt"
    >
      <q-tooltip>Colaborador</q-tooltip>
    </q-btn>
    <q-btn
      class="position"
      size="sm"
      v-if="$q.screen.gt.sm"
      round
      dense
      flat
      color="text-grey-7"
      icon="palette"
    >
      <q-tooltip>Obciones de fondo</q-tooltip>
    </q-btn>
    <q-btn
      class="position"
      size="sm"
      v-if="$q.screen.gt.sm"
      round
      dense
      flat
      color="text-grey-7"
      icon="image"
    >
      <q-tooltip>Agregar imagen</q-tooltip>
    </q-btn>
    <q-btn
      class="position"
      size="sm"
      v-if="$q.screen.gt.sm"
      round
      dense
      flat
      color="text-grey-7"
      icon="archive"
      @click="archivar()"
    >
      <q-tooltip>Archivar </q-tooltip>
    </q-btn>
    <q-btn
      class="position"
      size="sm"
      v-if="$q.screen.gt.sm"
      round
      dense
      flat
      color="text-grey-7"
      icon="more_vert"
    >
      <btnMore :id="id" />
      <q-tooltip>Mas</q-tooltip>
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { btnCardController } from 'src/controllers/btnCardController';
import btnMore from './btnMore.vue';

export default defineComponent({
  name: 'btnCards',
  components: {
    btnMore,
  },
  props: {
    id: {
      type: Number as PropType<number>,
      required: true,
    },
    archivado: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
  setup(props) {
    const { archivar } = btnCardController(props);
    return {
      archivar,
    };
  },
});
</script>
<style scoped>
.position {
  margin: 6px;
}
</style>
