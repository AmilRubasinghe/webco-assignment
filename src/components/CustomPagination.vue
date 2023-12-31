<template>
  <div class="pt-5 pl-3">
    <v-row no-gutters justify-space-between>
      <v-col
        ><div class="table-pagination">
          Showing page {{ pagiPage }} to {{ pagiPageCount }} of
          {{ pagiTotalRecode}} entries
        </div>
      </v-col>
      <v-col cols="3">
        <div>
          <v-pagination
            size="25"
            density="compact"
            v-model="pagiPage"
            active-color="#5A32EA"
            :length="pagiPageCount"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  totalRecode: {
    type: Number,
    required: true,
  },
});

const pagiPage = ref(props.page);
const pagiPageCount = ref(props.pageCount);
const pagiTotalRecode = ref(props.totalRecode);

</script>
