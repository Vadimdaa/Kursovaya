<template>
    <div>
        <form 
            accept-charset="UTF-8"
            v-on:submit.prevent="onSubmit()"
            method="POST"
        >
            <div class="form-line">
                <label> Название
                    <input type="text" v-model="name"  placeholder="example@ex.com">
                </label>
                <label> Адрес ресторана
                    <input type="text" v-model="address" placeholder="Введите значение">
                </label>
                <label> Средний чек
                    <input type="number" v-model="averageCheck"  placeholder="Введите значение">
                </label>
                <label> Работает до
                    <input type="text" v-model="worktime" placeholder="Введите значение">
                </label>
            </div>
            <button class="submit-btn" type="submit">Отправить</button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
      return {
        name: '',
        address: '',
        averageCheck: 1000,
        worktime: '00:00:00',
    }
  },
  methods: {
      async onSubmit() {
        const data = {
            organization: this.name,
            addres_p: this.address,
            price: Number(this.averageCheck),
            employer: this.worktime,
        }  
        if (
            data.name === '' ||
            data.address === ''
        ) {
            alert('Заполните все поля формы')
        } else {
            await this.$store.dispatch('registerForm/postForm', data);
            alert(JSON.stringify(this.$store.getters['registerForm/answer']));
        }
      }
  }
}
</script>


<style scoped>
    .submit-btn {
        background: #fefefe;
        padding: 10px;
        color: #000;
        border-radius: 10px;
    }

    select {
        background: #fff;
        padding: 5px;
        width: 100%;
        border-radius: 10px;
    }

    .form-line {
        margin-bottom: 15px
    }


    input {
        background: #fff;
        color: #000;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 15px;
    }

    form {
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }
</style>
