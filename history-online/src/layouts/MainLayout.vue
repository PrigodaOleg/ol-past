<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          :aria-label="$t('label.menu')"
          @click="leftDrawerOpen=!leftDrawerOpen"
        />
        <q-toolbar-title>
          {{ $t('label.applicationTitle') }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header>
          {{ $t('label.links') }}
        </q-item-label>
        <q-item
          to="/">
          <q-item-section avatar>
            <q-icon name="mdi-home"/>
          </q-item-section>
          <q-item-section>
            {{ $t('label.home') }}
          </q-item-section>
        </q-item>

        <q-item
          to="map">
          <q-item-section avatar>
            <q-icon name="mdi-map"/>
          </q-item-section>
          <q-item-section>
            Карта
          </q-item-section>
        </q-item>
        <q-item
          to="timeline">
          <q-item-section avatar>
            <q-icon name="mdi-timeline-clock-outline"/>
          </q-item-section>
          <q-item-section>
            Ось времени
          </q-item-section>
        </q-item>
        <q-item
          to="graph">
          <q-item-section avatar>
            <q-icon name="mdi-graph-outline"/>
          </q-item-section>
          <q-item-section>
            Граф взаимосвязей
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';


export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen
    };
  }
});
</script>
