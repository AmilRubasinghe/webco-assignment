<template>
  <v-container class="pl-8 pr-10">
    <v-responsive>
      <v-row no-gutters justify-space-between>
        <v-col>
          <div class="flex">
            <span class="name-header pr-2">Hello Evano </span>
            <v-icon size="small" color="#DDB691">mdi-hand-wave</v-icon> ,
          </div>
        </v-col>
        <v-col cols="auto" class="mr-4">
          <v-btn @click="openDialog()" icon size="x-small" color="#DCFEED">
            <v-icon color="#55CC8B">mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <TotalCustomerSection class="mt-8" />
      <CustomerTableSection :customers="customers" class="mt-6" />
      <CustomerAddSection
        v-if="isAdd"
        :show="isAdd"
        @cancel="isAdd = false"
        @confirm="onConfirm"
      />
    </v-responsive>
  </v-container>
</template>
<script setup>
import { ref } from "vue";
import TotalCustomerSection from "../components/customers/TotalCustomer.vue";
import CustomerTableSection from "../components/customers/CustomerTableSection.vue";
import CustomerAddSection from "../components/customers/CustomerAddForm.vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const isAdd = ref(false);

const customers = ref([
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "2555550118",
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
    phoneNumber: "2055550100",
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
    phoneNumber: "3025550107",
    email: "ronald@adobe.com",
    country: "Israel",
    isActive: false,
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "2525501261",
    email: "marvin@tesla.com",
    country: "Iran",
    isActive: true,
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "6295550129",
    email: "jerome@google.com",
    country: "Reunion",
    isActive: true,
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "4065550120",
    email: "kathryn@microsoft.com",
    country: "Curacao",
    isActive: true,
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "2085550112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    isActive: true,
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "7045550127",
    email: "kristin@facebook.com",
    country: "Aland islands",
    isActive: false,
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "2525501261",
    email: "marvin@tesla.com",
    country: "Iran",
    isActive: true,
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "6295550129",
    email: "jerome@google.com",
    country: "Reunion",
    isActive: true,
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "4065550120",
    email: "kathryn@microsoft.com",
    country: "Curacao",
    isActive: true,
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "2085550112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    isActive: true,
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "7045550127",
    email: "kristin@facebook.com",
    country: "Aland islands",
    isActive: false,
  },
]);

const openDialog = () => {
  isAdd.value = true;
};

const onConfirm = (customerData) => {
  
  const addedData = {
    ...customerData.customer,
    isActive:true,
    addressDetails:customerData.addressDetails
  }
  console.log("🚀 ~ file: Customers.vue:172 ~ onConfirm ~ addedData:", addedData)

  customers.value.push(addedData);

  toast.success("Transaction added.");
  isAdd.value = false;
};
</script>
