<template>
  <q-layout view="hHh Lpr lff" class="bg-grey-1">
    <q-header
      style="box-shadow: none; border-bottom: 1px solid #ccc"
      class="bg-white text-grey-8"
      height-hint="70"
    >
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title
          v-if="$q.screen.gt.xs"
          shrink
          class="row items-center no-wrap"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/654px-Google_Keep_icon_%282020%29.svg.png?20230204082519"
            style="height: 40px; max-width: 50px"
          />
          <span class="q-ml-sm">Keep</span>
        </q-toolbar-title>

        <q-input
          class="GNL__toolbar-input shadow-4"
          v-model="search"
          placeholder="Buscar"
          borderless
        >
          <template v-slot:prepend>
            <q-icon
              v-if="search === ''"
              name="search"
              class="GNL__icon-center"
            />
          </template>
        </q-input>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            v-if="$q.screen.gt.sm"
            round
            dense
            flat
            color="text-grey-7"
            icon="refresh"
          >
            <q-tooltip>Actualizar</q-tooltip>
          </q-btn>
          <q-btn
            v-if="$q.screen.gt.sm"
            round
            dense
            flat
            color="text-grey-7"
            icon="view_stream"
          >
            <q-tooltip>Vista de lista</q-tooltip>
          </q-btn>
          <q-btn
            v-if="$q.screen.gt.sm"
            round
            dense
            flat
            color="text-grey-7"
            icon="settings"
          >
            <q-tooltip>Configuracion</q-tooltip>
          </q-btn>
          <q-btn
            class="position"
            v-if="$q.screen.gt.sm"
            round
            dense
            flat
            color="text-grey-7"
            icon="apps"
          >
            <q-tooltip>Google Apps</q-tooltip>
          </q-btn>

          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      borderless
      :width="280"
      :breakpoint="500"
      class="bg-white"
    >
      <q-scroll-area class="fit" prevent-scroll>
        <q-list padding>
          <q-item
            clickable
            v-ripple
            class="GNL__drawer-item"
            :active="link === 'notas'"
            @click="changeRouteToNotas"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="lightbulb_outline" />
            </q-item-section>
            <q-item-section>Notas</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            class="GNL__drawer-item"
            :active="link === 'Recordatorios'"
            @click="link = 'Recordatorios'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="notifications_none" />
            </q-item-section>
            <q-item-section>Recordatorios</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            class="GNL__drawer-item"
            :active="link === 'editar'"
            @click="link = 'editar'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="edit" />
            </q-item-section>
            <q-item-section>Editas etiquetas</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            class="GNL__drawer-item"
            :active="link === 'archivar'"
            @click="changeRouteToArchivar"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="archive" />
            </q-item-section>
            <q-item-section>Archivar</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            class="GNL__drawer-item"
            :active="link === 'papeleria'"
            @click="link = 'papeleria'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="delete_outline" />
            </q-item-section>
            <q-item-section>Papeleria</q-item-section>
          </q-item>
          <div class="absolute-bottom">
            <div class="flex flex-center q-gutter-xs text-grey-8">
              <a
                class="GNL__drawer-footer-link"
                href="javascript:void(0)"
                aria-label="Privacy"
                >Licencias de código abierto</a
              >
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'AppKeep',
  methods: {
    changeRouteToArchivar() {
      // Cambiar la ruta actual a la nueva ruta deseada (por ejemplo, "/archivar")
      this.$router.push({ path: '/archivado' });
      this.link = 'archivar';
    },
    changeRouteToNotas() {
      // Cambiar la ruta actual a la nueva ruta deseada (por ejemplo, "/archivar")
      this.$router.push({ path: '/' });
      this.link = 'notas';
    },
  },
  setup() {
    const link = ref('');
    const leftDrawerOpen = ref(false);
    const search = ref('');
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    return {
      link,
      leftDrawerOpen,
      search,
      toggleLeftDrawer,
    };
  },
};
</script>
<style lang="sass">
.position
  margin-left: 60px
.my-menu-link
  color: black
  background: $amber-2
.GNL

  &__toolbar
    height: 70px


  &__toolbar-input
    width: 700px
    margin-left: 80px
    background-color: $grey-11
    border-radius: 8px
    box-sizing: border-box

  &__icon-center
    margin-left:15px

  &__drawer-item

    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px


    .q-item__section--avatar
      .q-icon
        color: #5f6368


    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    padding-right: 80px
    padding-bottom: 12px
    &:hover
      color: #000
</style>
