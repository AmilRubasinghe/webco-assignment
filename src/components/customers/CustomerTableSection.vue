<template>
  <div>
    <v-card flat class="customer-card pa-6">
      <v-row no-gutters class="pa-3 mr-1">
        <v-col>
          <div class="table-header-text">All Customers</div>
          <div class="table-subtitle-text">Active Members</div>
        </v-col>
        <v-col cols="4">
          <v-row>
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              density="compact"
              label="Search"
              single-line
              flat
              hide-details
              class="mr-2"
              variant="solo-filled"
            ></v-text-field>
            <v-select
              single-line
              flat
              hide-details
              variant="solo-filled"
              density="compact"
              label="Sort by:"
              clearable
              :items="['Newest', 'Active', 'Inactive']"
            ></v-select>
          </v-row>
        </v-col>
      </v-row>

      <v-data-table
        class="mt-1"
        v-model:search="search"
        v-model:page="page"
        v-model:expanded="expanded"
        :headers="headers"
        expand-on-click
        item-value="addressDetails"
        :items="customerItems"
        :items-per-page="itemsPerPage"
      >
        <template v-slot:item.isActive="{ item }">
          <div class="text-center">
            <v-chip
              :class="item.isActive ? 'green-chip-text' : 'red-chip-text'"
              :text="item.isActive ? 'Active' : 'Inactive'"
              class="text-uppercase"
              label
              size="small"
            ></v-chip>
          </div>
        </template>
        <template v-slot:item.phoneNumber="{ item }">
          {{ PhoneNumberFormat(item.phoneNumber) }}
        </template>
        <template v-slot:expanded-row="{ item }">
          <tr
            class="expanded-row"
            v-for="(address, index) in item.addressDetails"
            :key="index"
          >
            <td></td>
            <td>Address : {{ index + 1 }}</td>
            <td>{{ address.number }}</td>
            <td>{{ address.street }}</td>
            <td colspan="2">{{ address.city }}</td>
          </tr>
        </template>
        <template v-slot:bottom>
          <div class="pt-5 pl-3">
            <v-row no-gutters justify-space-between>
              <v-col
                ><div class="table-pagination">
                  Showing page {{ page }} to {{ pageCount }} of
                  {{ customerItems?.length }} entries
                </div>
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
      </v-data-table>
    </v-card>
  </div>
</template>
<script setup>
import { ref, computed, defineProps } from "vue";

const search = ref("");
const page = ref(1);
const expanded = ref([]);
const itemsPerPage = ref(5);

const props = defineProps({
  customers: {
    type: Array,
    required: true,
  },
});

const customerItems = ref(props.customers);

const headers = ref([
  {
    title: "Customer Name",
    align: "start",
    key: "name",
    sortable: false,
  },
  {
    title: "Company",
    align: "start",
    sortable: false,
    key: "company",
  },
  {
    title: "Phone Number",
    align: "start",
    key: "phoneNumber",
    sortable: false,
  },
  {
    title: "Email",
    align: "start",
    key: "email",
    sortable: false,
  },
  {
    title: "Country",
    align: "start",
    key: "country",
    sortable: false,
  },
  {
    title: "Status",
    align: "center",
    key: "isActive",
    sortable: false,
  },
]);

const PhoneNumberFormat = (phoneNumber) => {
  let phone = new String(phoneNumber);
  const formatPhone =
    "(" +
    phone[0] +
    phone[2] +
    phone[2] +
    ") " +
    phone[3] +
    phone[4] +
    phone[5] +
    "-" +
    phone[6] +
    phone[7] +
    phone[8] +
    phone[9] ;
  return formatPhone;
};

const pageCount = computed(() => {
  return Math.ceil(customerItems.value.length / itemsPerPage.value);
});
</script>
