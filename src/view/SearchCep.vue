<template>
  <div class="container is-fullheight is-fullcenter">
    <div class="title is-1 is-text-white">Buscador de endereços</div>
    <search-cep-form @found="onFoundCep" />
    <cep-card
      v-show="address || history.length > 0"
      isTitle
      :address="address"
    />
    <hr class="divider" />
    <history-cep-found :history="history" @clear="onCleanHistory" />
  </div>
</template>

<script>
import SearchCepForm from "@/components/SearchCepForm";
import CepCard from "@/components/CepCard";
import HistoryCepFound from "@/components/HistoryCepFound";

export default {
  name: "SearchCep",
  components: {
    SearchCepForm,
    CepCard,
    HistoryCepFound
  },
  data() {
    return {
      address: undefined,
      history: []
    };
  },
  methods: {
    onFoundCep(address) {
      this.address = address ? address : {};
      if (address && address.cep) this.history.unshift(address);
    },
    onCleanHistory() {
      this.history = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.is-fullheight {
  height: 100vh;
}
.is-fullcenter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.divider {
  border: 0.5px solid white;
  width: 100%;
}
</style>
