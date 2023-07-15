<script setup lang="ts">
const { center, markers } = {
  center: { lat: 44.819665687023154, lng: -0.5978853182532341 },
  markers: [
    {
      position: {
        lat: 44.819665687023154,
        lng: -0.5978853182532341
      }
    } // Along list of clusters
  ]
}
</script>

<template>
  <GMapMap
    :center="center"
    :zoom="15"
    map-type-id="terrain"
    style="width: 100%; height: 50vh"
  >
    <GMapCluster>
      <GMapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      >
        <slot name="info-window" />
      </GMapMarker>
    </GMapCluster>
  </GMapMap>
</template>

<style lang="scss" scoped>
.vue-map {
  width: 100%;
}
</style>
