<template>
    <div>
        <template  v-for="(vacancy, index) of (vacancies)" >
        <template> 
        <v-subheader
           :key="vacancy.id"
          v-text="vacancies.organization"
        ></v-subheader>

        <v-divider
           :key="index"
        ></v-divider>

        <v-list-item
         :key="vacancy.organization"
        >
          <v-list-item-avatar>
            <v-img :style="{background: '#fff'}" :src="require('@/static/food-icon.jpg')"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="'Название: ' + vacancy.organization"></v-list-item-title>
            <v-list-item-subtitle v-html="'Организация: ' + vacancy.addres_p"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="'Цена: ' + vacancy.price"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="'Рабочее время: ' + vacancy.employer"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </template>
      </template>
    </div>
</template>

<script>
export default {
    props: ['vacancies'],
    name: 'Order'
}
</script>