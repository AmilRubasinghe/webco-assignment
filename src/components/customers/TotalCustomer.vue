<template>
  <div class="inc-exp-container">
    <div>
      <v-row no-gutters>
        <v-col cols="auto">
          <v-avatar size="80" color="#E5FFF1">
            <v-icon size="50" color="#0EB059">mdi-account-multiple</v-icon>
          </v-avatar>
        </v-col>
        <v-col class="px-4">
          <p class="first-row">Total Customers</p>
          <p class="second-row">5,423</p>

          <v-row class="pt-3 pl-3">
            <v-icon size="13" color="#0EB059">mdi-arrow-up</v-icon>
            <p class="third-row-green">18%</p>
            <p class="third-row-normal">this month</p>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-divider vertical color="#AFAFAF"></v-divider>
    <div>
      <v-row no-gutters>
        <v-col cols="auto">
          <v-avatar size="80" color="#E5FFF1">
            <v-icon size="50" color="#0EB059">mdi-account-check-outline</v-icon>
          </v-avatar>
        </v-col>
        <v-col class="px-4">
          <p class="first-row">Members</p>
          <p class="second-row">1,893</p>

          <v-row class="pt-3 pl-3">
            <v-icon size="13" color="#DA3872">mdi-arrow-down</v-icon>
            <p class="third-row-red">1%</p>
            <p class="third-row-normal">this month</p>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-divider vertical color="#AFAFAF"></v-divider>
    <div>
      <v-row no-gutters>
        <v-col cols="auto">
          <v-avatar size="80" color="#E5FFF1">
            <v-icon size="50" color="#0EB059">mdi-account-multiple</v-icon>
          </v-avatar>
        </v-col>
        <v-col class="px-4">
          <p class="first-row">Active Now</p>
          <p class="second-row">189</p>
          <AveterGroup class="mt-n1" />
          <v-row class="pt-3 pl-3"> </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import AveterGroup from "./AvaterGroup.vue";
</script>
