<!-- <template>
  <div>
    <v-row no-gutters justify-space-between>
      <v-col
        ><div class="table-pagination">Showing data 1 to 8 of 256K entries</div>
      </v-col>
      <v-col cols="3">
        <div>
          <v-pagination
            size="25"
            density="compact"
            v-model="page"
            active-color="#5A32EA"
            :length="pageCount"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  totalPage: {
    type: Number,
    required: true,
  },
});
</script> -->
