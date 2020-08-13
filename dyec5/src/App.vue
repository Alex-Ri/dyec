<template>
    <div id="app">
        <div class="sidebar-container">
            <side-bar></side-bar>
        </div>

        <div class="content-container">
            <header-bar/>

            <div class="content">
                <div class="cart-container">
                    <cart
                        :cartItems="getItems"
                    />
                </div>

                <div class="item-finder-container">
                    <item-finder/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import HeaderBar from '@/components/HeaderBar'
import Cart from '@/components/Cart'
import ItemFinder from '@/components/ItemFinder'

import cartMixin from '@/mixins/CartMixin.js'

export default {
    name: 'App',
    mixins: [cartMixin],
    components: {
        SideBar,
        HeaderBar,
        Cart,
        ItemFinder
    }
}
</script>

<style>

body {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: row;

    height: 100vh;
}

.sidebar-container {
    width: 70px;
    height: 100vh;
}

.content-container {
    width: 100vw;
    height: calc(100% - 60px);
}

.content {
    height: 100%;
    width: 100%;
    display: flex;
}

.cart-container {
    width: 60%;
    height: 100%;
}

.item-finder-container {
    width: 40%;
    height: calc(100% - 2px);
}

</style>
