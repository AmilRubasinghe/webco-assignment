<template>
  <div>
    <v-navigation-drawer :width="280" fixed>
      <v-list dense>
        <div class="drawer-header">
          <v-icon class="drawer-icon" size="x-large">mdi-nut</v-icon
          ><span class="drawer-text-header">Dashboard</span
          ><span class="drawer-text-small">v.01</span>
        </div>

        <v-list-item
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          router
          exact
          nav
          :prepend-icon="item.icon"
          :title="item.title"
          class="my-4 mx-3 nav-bar-list"
          dense
        >
          <template v-if="item.isAppend" v-slot:append>
            <v-icon size="x-small">mdi-chevron-right</v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script setup>
import { ref } from "vue";

const navItems = ref([
  {
    icon: "mdi-view-dashboard-outline",
    title: "Dashboard",
    to: "/dashboard",
    isAppend: false,
  },
  {
    icon: "mdi-package-variant-closed",
    title: "Product",
    to: "/products",
    isAppend: true,
  },
  {
    icon: "mdi-account-box-outline",
    title: "Customers",
    to: "/customers",
    isAppend: true,
  },
  {
    icon: "mdi-cone",
    title: "Income",
    to: "/income",
    isAppend: true,
  },
  {
    icon: "mdi-decagram-outline",
    title: "Promote",
    to: "/promotes",
    isAppend: true,
  },
  {
    icon: "mdi-comment-question-outline",
    title: "Help",
    to: "/help",
    isAppend: true,
  },
]);
</script>
