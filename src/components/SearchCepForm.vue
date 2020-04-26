<template>
  <div class="field has-addons is-fullwidth">
    <div
      class="control is-expanded is-large"
      :class="{ 'is-loading': isLoading }"
    >
      <input
        class="input is-fullwidth is-large"
        placeholder="Informe um CEP"
        v-model="search"
        @keypress.enter="searchAddressForCep"
        :class="{ 'is-danger': $v.$invalid }"
        :disabled="isLoading"
      />
      <p
        v-for="(error, index) in filterErrorMessages"
        :key="index"
        class="help is-danger"
      >
        {{ error }}
      </p>
    </div>
    <div class="control">
      <button class="button is-large is-primary" @click="searchAddressForCep">
        Buscar
      </button>
    </div>
  </div>
</template>

<script>
import { searchAddress } from "@/services/ceps";
import { maxLength } from "vuelidate/lib/validators";
import { getValidatorMessages } from "@/utils/validators";

export default {
  name: "SearchCepForm",
  data() {
    return {
      search: "",
      isLoading: false
    };
  },
  validations: {
    search: {
      maxLength: maxLength(8),
      onlyDigit: value => value.replace(/\D/g, "") === value
    }
  },
  computed: {
    filterErrorMessages() {
      return getValidatorMessages(this.$v.search);
    }
  },
  methods: {
    searchAddressForCep() {
      if (this.search && !this.$v.$invalid) {
        this.isLoading = true;
        searchAddress(this.search)
          .then(({ data }) => {
            this.$emit("found", data);
          })
          .catch(({ data }) => {
            this.$emit("found", data);
          })
          .finally(() => (this.isLoading = false));
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.is-fullwidth {
  width: 100%;
}
</style>
