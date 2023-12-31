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
        :items="items"
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
                  Showing data 1 to 8 of 256K entries
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
import { ref, computed } from "vue";
const search = ref("");
const page = ref(1);
const expanded = ref([]);
const itemsPerPage = ref(5);

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

const items = ref([
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(255) 555-0118",
    email: "jane@microsoft.com",
    country: "United states",
    isActive: true,
    addressDetails: [
      {
        number: "No 279",
        street: "Wellington Street",
        city: "Melbourne,VIC",
      },
      {
        number: "No 29",
        street: "Blackburn Rd",
        city: "Melbourne,VIC",
      },
    ],
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    isActive: false,
    addressDetails: [
      {
        number: "No 279",
        street: "Wellington Street",
        city: "Melbourne,VIC",
      },
    ],
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    isActive: false,
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 55-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    isActive: true,
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Reunion",
    isActive: true,
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curacao",
    isActive: true,
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    isActive: true,
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Aland islands",
    isActive: false,
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 55-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    isActive: true,
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Reunion",
    isActive: true,
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curacao",
    isActive: true,
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    isActive: true,
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Aland islands",
    isActive: false,
  },
]);
const pageCount = computed(() => {
  return Math.ceil(items.value.length / itemsPerPage.value);
});
</script>
