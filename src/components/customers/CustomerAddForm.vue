<template>
  <div>
    <v-dialog
      v-model="isDialog"
      max-width="600px"
      transition="dialog-transition"
      persistent
    >
      <v-card class="px-14 py-5 dialog-customer">
        <v-row justify="end" class="mr-n8">
          <v-btn
            @click="$emit('cancel')"
            variant="flat"
            size="x-large"
            icon="mdi-close"
          ></v-btn>
        </v-row>
        <v-container>
          <v-row justify="start" class="mb-1">
            <v-card-title>
              <span class="dialog-head">Add New Customer</span>
            </v-card-title>
          </v-row>

          <v-form ref="form" v-model="isMainFormValid">
            <v-text-field
              v-model="customer.name"
              :rules="[(v) => !!v || 'Customer Name is required']"
              label="Customer Name"
              variant="underlined"
              required
            ></v-text-field>

            <v-text-field
              v-model="customer.company"
              :rules="[(v) => !!v || 'Company is required']"
              label="Company"
              variant="underlined"
              required
            ></v-text-field>

            <v-text-field
              v-model="customer.phoneNumber"
              :rules="[
                rules.required,
                rules.onlyNumber,
                rules.minCounter,
                rules.maxCounter,
              ]"
              label="Contact Phone"
              variant="underlined"
              required
            ></v-text-field>

            <v-text-field
              v-model="customer.email"
              :rules="[rules.required, rules.email]"
              label="Email"
              variant="underlined"
              required
            ></v-text-field>

            <v-text-field
              v-model="customer.country"
              :rules="[(v) => !!v || 'Country is required']"
              label="Country"
              variant="underlined"
              required
            ></v-text-field>
          </v-form>

          <v-form ref="addressForm" v-model="isFormValid">
            <v-row justify="start" class="my-1">
              <v-card-title>
                <span class="dialog-body">Address Details</span>
              </v-card-title>
            </v-row>
            <div v-for="(item, index) in addressDetails" :key="index">
              <div class="address-number">Address :{{ index + 1 }}</div>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    v-model="item.number"
                    label="Number"
                    readonly
                    density="compact"
                    variant="underlined"
                  ></v-text-field
                ></v-col>
                <v-col>
                  <v-text-field
                    v-model="item.street"
                    label="Street"
                    readonly
                    density="compact"
                    variant="underlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-text-field
                v-model="item.city"
                label="City , State"
                density="compact"
                variant="underlined"
                readonly
              ></v-text-field>
              <v-row justify="end">
                <v-btn
                  @click="deleteAddress(index)"
                  color="#00AC4F"
                  variant="outlined"
                  size="small"
                  class="px-4"
                  >Delete</v-btn
                >
              </v-row>
            </div>
            <div class="mt-8">
              <v-row no-gutters>
                <v-col cols="4" class="mr-5">
                  <v-text-field
                    v-model="address.number"
                    :rules="[(v) => !!v || 'Number is required']"
                    label="Number"
                    density="compact"
                    variant="underlined"
                    required
                  ></v-text-field
                ></v-col>
                <v-col>
                  <v-text-field
                    v-model="address.street"
                    :rules="[(v) => !!v || 'Street is required']"
                    label="Street"
                    density="compact"
                    variant="underlined"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-text-field
                v-model="address.city"
                :rules="[(v) => !!v || 'City,State is required']"
                label="City , State"
                density="compact"
                variant="underlined"
                required
              ></v-text-field>

              <v-btn
                @click="addressSubmit()"
                color="#00AC4F"
                variant="outlined"
                class="px-8"
                >Add</v-btn
              >
            </div>
          </v-form>

          <v-card-actions class="mt-8">
            <v-row justify="center">
              <v-btn @click="onSubmit" block class="submit-btn">Submit</v-btn>
            </v-row>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const props = defineProps({
  show: Boolean,
});
const isDialog = ref(props.show);

const customer = ref({});

const address = ref({
  number:'',
  street:'',
  city:''
});

const isFormValid = ref(false);

const isMainFormValid = ref(false);

const addressForm = ref(null);

const form = ref(null);

const addressDetails = ref([]);

const rules = ref({
  required: (value) => !!value || "Required.",
  maxCounter: (value) => value.length <= 10 || "Max count 10 numbers",
  minCounter: (value) => value.length >= 10 || "Min count 10 numbers",
  onlyNumber: (value) => {
    const pattern = /^[0-9]*$/;
    return pattern.test(value) || "Allow only numbers";
  },
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
});

const emit = defineEmits(["confirm", "cancel"]);

const onSubmit = () => {
  form.value.validate();

  if (!isMainFormValid.value) return;

  if (!addressDetails?.value.length > 0) {
    toast.error("Min 1 address must be filled.");
    return;
  }
  console.log("addressDetails", addressDetails);
  const CustomerData = {
    customer: customer.value,
    addressDetails: addressDetails.value,
  };
  console.log("CustomerData", CustomerData);
  emit("confirm", CustomerData);

  form.value.reset();
  customer.value = {};
  addressDetails.value = [];
};

const addressSubmit = () => {
  addressForm.value.validate();

  if (!isFormValid.value) return;

  addressDetails.value.push(address.value);

  address.value = {};


  addressForm.value.resetValidation();
};

const deleteAddress = (index) => {
  if (index > -1) {
    addressDetails.value.splice(index, 1);
  }
};
</script>
