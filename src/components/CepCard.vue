<template>
  <div class="box is-fullwidth" :class="{ 'is-bold': isTitle }">
    <p v-if="typeof address === 'object' && address.cep">
      {{ address.logradouro }}, {{ address.bairro }}, {{ address.localidade }} -
      {{ address.uf }}
    </p>
    <p v-else class="is-danger">
      O endereço do CEP informado não foi encontrado
    </p>
  </div>
</template>

<script>
export default {
  name: "CepCard",
  props: {
    isTitle: Boolean,
    address: Object
  }
};
</script>
<style lang="scss" scoped>
.is-bold {
  font-weight: bold;
}
.is-danger {
  color: red;
}
</style>
