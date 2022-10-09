export const state = () => ({
    partners: [],
    next: null,
    prev: null
  })
  
  export const mutations = {
    setPartners(state, partners) {
      state.partners = partners
    },
    setNext(state, next) {
      state.next = next
    },
    setPrevious(state, prev) {
      state.prev = prev
    },
  }
  
  export const actions = {
    async fetch({commit}) {
      const partners = await this.$axios.$get('/api/partner/?limit=1')
      commit('setPartners', partners.results);
      commit('setNext', partners.next)
      commit('setPrevious', partners.previous);
    },
    async getWithXp({commit}) {
      const partners = await this.$axios.$get('/api/partner/filt?organization=1fwdfsd')
      console.log(partners)
      commit('setPartners', partners.results)
      commit('setNext', partners.next);
      commit('setPrevious', partners.previous);
    },
    async fetchAll({commit}) {
      const partners = await this.$axios.$get('/api/partner/')
      commit('setPartners', partners.results)
      commit('setNext', partners.next);
      commit('setPrevious', partners.previous);
    },
    sortByNames({commit}, partners) {
      const sortedVacancies = [...partners].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      commit('setPartners', sortedVacancies);
    },
    async fetchNext({commit}, nextLink) {
      const partners = await this.$axios.$get('/api/' + nextLink.split('/api/')[1]); 
      commit('setPartners', partners.results);
      commit('setNext', partners.next);
      commit('setPrevious', partners.previous);
    },
    async fetchPrev({commit}, prevLink) {
      const partners = await this.$axios.$get('/api/' + prevLink.split('/api/')[1]); 
      commit('setPartners', partners.results);
      commit('setNext', partners.next);
      commit('setPrevious', partners.previous);
    },
  }
  
  export const getters = {
    partners: s => {
      console.log('got data')
      return s.partners
    },
    next: s => s.next,
    prev: s => s.prev
  }
  