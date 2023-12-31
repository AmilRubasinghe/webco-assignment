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
      <CustomerTableSection class="mt-6" />
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

const openDialog = () => {
  isAdd.value = true;
};

const onConfirm = (customerData) => {
  console.log(
    "🚀 ~ file: Customers.vue:39 ~ onConfirm ~ customerData:",
    customerData
  );

  toast.success("Transaction added.");
  isAdd.value = false;
};
</script>
