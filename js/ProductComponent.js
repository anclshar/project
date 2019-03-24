Vue.component('products', {
    props: ['products', 'img'],
    template: `<div class="items-all container">
                    
                </div>`
})
Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="items">
            <a class="item-img" href="#" class="item"> <img alt="item">
                <div class="item-text">
                    <p class="item-name">{{product.product_name}}</p>
                    <p class="item-price">${{product.price}}</p>
                </div>
            </a>
            <div class="add-to-cart"><a href="#" class="add">Add To Cart</a></div>
        </div>`
})