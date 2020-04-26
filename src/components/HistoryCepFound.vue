<template>
  <div class="is-fullwidth">
    <a class="is-pulled-right is-text-primary" @click="$emit('clear')"
      >Limpar histórico</a
    >
    <div class="title is-4 is-text-white">
      Histórico de buscas ({{ qtyAddress }})
    </div>
    <div class="is-fullwidth is-fixed">
      <cep-card
        v-for="(address, index) in limitedHistory"
        :key="address.cep + '-' + index"
        :address="address"
      />
    </div>
  </div>
</template>

<script>
import CepCard from "@/components/CepCard";
export default {
  name: "HistoryCep",
  props: {
    history: Array
  },
  data() {
    return {
      limitHistory: 5
    };
  },
  components: {
    CepCard
  },
  computed: {
    limitedHistory() {
      return this.history.slice(0, this.limitHistory);
    },
    qtyAddress() {
      return this.limitedHistory.length;
    }
  }
};
</script>

<style lang="scss" scope>
.is-fullwidth {
  width: 100%;
}
.is-fixed {
  height: 60vh;
  overflow: auto;
}
</style>
