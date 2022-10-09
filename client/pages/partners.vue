<template>
    <div>
      <v-btn v-if="!isWithXp" v-on:click="show_xp" >Отобразить только организации с названием 1fwdfsd(фильтрация)</v-btn>
      <v-btn v-if="isWithXp" v-on:click="show" >Отобразить все организации</v-btn>
      <div class="pages">
        <v-btn v-on:click="sortNames">Отсортировать названия по Алфавиту</v-btn>
        <v-btn v-on:click="drop">Сбросить сортировку и фильтр</v-btn>
      </div>
      <div class="pages">
        <v-btn v-on:click="prev" >Предыдущая</v-btn>
        <v-btn v-on:click="next" >След страница</v-btn> 
      </div>
        <ul>
            <Order v-bind:vacancies="vacancies" />
        </ul>
    </div>
</template>

<script>
import Order from '@/components/Order'

export default {
  data() {
    return {
      isWithXp: false
    }
  },
  components: {Order},
  async fetch({store}) {
    if (store.getters['vacs/partners'].length === 0) {
      await store.dispatch('vacs/fetch')
    }
  },
  computed: {
    vacancies() {
        return this.$store.getters['vacs/partners'];
    }
  },
  methods: {
    async show() {
      this.isWithXp = !this.isWithXp
      await this.$store.dispatch('vacs/fetch')
    },
    async show_xp() {
      this.isWithXp = !this.isWithXp
      await this.$store.dispatch('vacs/getWithXp')
    },
    async next() {
      const next = this.$store.getters['vacs/next'];
      if (next) {
        this.$store.dispatch('vacs/fetchNext', next);
      } else {
        alert('Следующей страницы нет')
      }
    },
    async prev() {
      const prev = this.$store.getters['vacs/prev'];
      if (prev) {
        this.$store.dispatch('vacs/fetchPrev', prev);
      } else {
        alert('Предыдущей страницы нет')
      }
    },
    async sortNames() {
      await this.$store.dispatch('vacs/fetchAll');
      const partners = this.$store.getters['vacs/partners'];
      await this.$store.dispatch('vacs/sortByNames', partners);
    },
    async drop() {
      this.isWithXp = false
      await this.$store.dispatch('vacs/fetch')
    }
  }
}
</script>

<style>
  .pages {
    margin-top: 20px;
  }
</style>