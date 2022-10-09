<template>
    <div class="bg-img">
          <p>
           Стартовая страница
          </p>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/partners"
          >
            Организации службы доставки
          </v-btn>
    </div>
</template>

<style scoped>
  .bg-img {
    background:rgba(0,0,0, .4);
    background-size: cover;
    padding: 100px;
    height: 100%;
    width: 100%;
  }

  p {
    z-index: 2;
    position: relative;
  }
</style>

<script>
export default {
  name: 'IndexPage',
  computed: {
    indexText() {
      return this.$store.getters.indexText;
    }
  }
}
</script>
