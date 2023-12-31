<template>
  <div>
    <v-item-group multiple selected-class="bg-purple">
      <v-item v-for="item in avatars" :key="item.id">
        <v-avatar class="ml-n2" color="primary" size="x-small">
          <v-img v-if="item.src" :src="item.src"></v-img>
          <div v-else>A</div>
        </v-avatar>
      </v-item>
    </v-item-group>
  </div>
</template>
<script setup>
import { ref } from "vue";
const avatars = ref([
  {
    id: 1,
    src: null,
  },
  {
    id: 2,
    src: "https://randomuser.me/api/portraits/med/women/3.jpg",
  },
  {
    alt: "Frankie Dowle",
    id: 4,
    presence: "Online",
    role: "Platform Architect",
    src: "https://randomuser.me/api/portraits/med/men/8.jpg",
  },
  {
    alt: "Annette Walker",
    id: 5,
    presence: "Online",
    role: "Head of UX",
    src: "https://randomuser.me/api/portraits/med/women/5.jpg",
  },
  {
    alt: "Danny Quaide",
    id: 6,
    presence: "Offline",
    role: "UI Designer",
    src: "https://randomuser.me/api/portraits/med/men/10.jpg",
  },
  {
    alt: "Paisley Arch",
    id: 7,
    presence: "Holiday",
    role: "Automation Engineer",
    src: "https://randomuser.me/api/portraits/med/women/7.jpg",
  },
  {
    alt: "Kenneth Boomstang",
    id: 8,
    presence: "Online",
    role: "Frontend Engineer",
    src: "https://randomuser.me/api/portraits/med/men/1.jpg",
  },
]);
</script>
