const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        showCart: false,
        cartUrl: '/cart.json',
        catalogUrl: '/products_index.json',
        products: [],
        cartItems: [],
        filtered: [],
        quantity: 1
    },
