export const state = () => ({
    answer: {}
  })
  
export const mutations = {
  setAnswer(state, answer) {
      state.answer = answer
  }
}
  
  export const actions = {
    async postForm({commit}, payload) {
        const answer = await this.$axios.$post('/api/partner/', payload)
        commit('setAnswer', answer);
        console.log('success')
    }
  }
  
  export const getters = {
    answer: s => s.answer
  }
  