<template>
  <div class="q-pa-md">
    <!-- Renderiza el q-input si showInput es falso -->
    <q-input
      v-if="!showInput"
      ref="input"
      class="newNote-input shadow-4"
      @click="toggleInput(true)"
      borderless
      placeholder="Crear una nota..."
    >
      <q-btn
        class="btnPosition"
        size="md"
        round
        dense
        flat
        color="grey-7"
        icon="check_box"
      >
        <q-tooltip>Nueva lista</q-tooltip>
      </q-btn>
      <q-btn
        class="btnPosition"
        size="md"
        round
        dense
        flat
        color="grey-7"
        icon="brush"
      >
        <q-tooltip>Nueva nota con dibujo</q-tooltip>
      </q-btn>
      <q-btn
        class="btnPosition"
        size="md"
        v-if="$q.screen.gt.sm"
        round
        dense
        flat
        color="grey-7"
        icon="image"
      >
        <q-tooltip>Nota nueva con imagen</q-tooltip>
      </q-btn>
    </q-input>

    <div v-if="showInput" class="note-input-form shadow-8" auto-close>
      <q-form @submit="guardarNota">
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
          v-model="titulo"
          placeholder="Título"
          borderless
          input-class="no-outline"
          type="autogrow"
          :rules="[
            (val) => !!val || '* Required',
            (val) =>
              val.length < 300 || 'No se puede agregar mas 300 caracteres',
          ]"
          lazy-rules
        />
        <q-input
          v-model="texto"
          borderless
          placeholder="Crear una nota..."
          type="autogrow"
          :rules="[
            (val) => !!val || '* Required',
            (val) =>
              val.length < 300 || 'No se puede agregar mas 300 caracteres',
          ]"
          lazy-rules
        />
        <q-card-actions>
          <btnAddCard :funcionEnviar="guardarNota" :archivar="archivar" />
        </q-card-actions>
      </q-form>
    </div>
  </div>
</template>

<script type="ts">
import { defineComponent} from 'vue';
import { controllerInput } from '../controllers/NoteInputController';
import btnAddCard from './buttons/btnsAddCard.vue'
export default defineComponent({
  name: 'NoteInput',
  components: {
    btnAddCard,
  },
  setup() {
    const {
      showInput,
      fijado,
      titulo,
      texto,
      fijar,
      guardarNota,
      toggleInput,
      archivar,
    } = controllerInput();
    return {
      showInput,
      titulo,
      texto,
      fijado,
      fijar,
      guardarNota,
      toggleInput,
      archivar,
    };
  },
});
</script>

<style lang="sass">
.newNote-input
  width: 650px
  background-color: $grey-1
  border-radius: 8px
  box-sizing: border-box
  padding-left: 15px
  font-size: 18px

.note-input-form
  width: 700px
  background-color: $grey-1
  border-radius: 8px
  padding: 15px

.no-outline:focus
  outline: none
  box-shadow: none

.pin
  position: absolute
  right: 10px
  z-index: 9999

.btnPosition
  margin-right: 19px
.btn
  direction: ltr
.btn_cerrar
  position: absolute
  right: 20px
</style>
