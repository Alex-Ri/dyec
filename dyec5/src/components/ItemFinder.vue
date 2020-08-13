<template>
    <div class="item-finder">

        <label for="sku">SKU:</label>
        <input v-model="sku" id="sku">
        <button id="search-button" v-if="sku !== ''" @click="searchForSKU">Search</button>
    </div>
</template>

<script>
import cartMixin from '@/mixins/CartMixin.js'

export default {
    mixins: [cartMixin],
    data () {
        return {
            sku: ''
        }
    },
    methods: {
        searchForSKU () {
            this.searchForSKUAndAddToCart(this.sku)
        }
    }
}
</script>

<style>
.item-finder {
    width: 100%;
    height: 100%;
    border-top: solid 1px grey;
    border-bottom: solid 1px grey;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
