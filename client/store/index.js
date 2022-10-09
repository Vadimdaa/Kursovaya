export const state = () => ({
    ordersCount: 0,
    orders: {},
    partners: {}
  })
  
  export const mutations = {
    setOrdersCount(state, ordersCount) {
      state.ordersCount = ordersCount
    },
    setOrders(state, orders) {
      state.orders = orders
    },
    setPartners(state, partners) {
      state.partners = partners
    }
  }
  
  export const actions = {
    async nuxtServerInit({dispatch, commit}) {
      const orders = await this.$axios.$get('/api/order/');
      commit('setOrdersCount', orders.count || 0);
      commit('setOrders', orders);
      console.log('nuxtServerInit');
    },
    async refresh({commit}) {
      const orders = await this.$axios.$get('/api/order/')
      commit('setOrders', orders)
    }
  }
  
  export const getters = {
    ordersCount: s => s.ordersCount,
    clients: s => s.clients,
    partners: s => s.partners
  }
  