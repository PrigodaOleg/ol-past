<template>
  <q-page>
    <div
      ref="mapRef"
      id="map"
      class="full-height full-width fixed"
      style="min-height: 400px; min-width: 400px"
    ></div>
    <div
      class="full-width fixed-bottom bg-white absolute"
      style="height: 300px"
    >
      <div class="q-pa-lg">
        <q-slider v-model="timeLine" :min="-500" :max="2023" :label="true" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, provide, ref } from 'vue';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export default defineComponent({
  setup() {
    const map = new Map({
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      }),
      mapRef = ref(),
      timeLine = ref<number>();
    provide('Map', map);
    const layer = new TileLayer({
      source: new OSM(),
      zIndex: 0,
      properties: {
        name: 'osm',
      },
    });
    map.addLayer(layer);
    onMounted(() => {
      map.setTarget(mapRef.value);
    });

    onUnmounted(() => {
      map.setTarget();
    });

    return { mapRef, timeLine };
  },
});
</script>
<style>
@import 'ol/ol.css';
</style>
