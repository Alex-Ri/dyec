<template>
    <div class="cart">
        <div class="header">
            Cart
        </div>

        <div class="items" v-if="cartItems.length > 0">
            <cart-item
                v-for="(cartItem, index) of cartItems"
                :key="index"
                :cartItem="cartItem"
            />
        </div>

        <div class="cart-sum" v-if="cartItems.length > 0">
            <cart-sum
                :cartItems="cartItems"
            />
        </div>

        <button class="cancel" v-if="cartItems.length > 0" @click="removeAllItems">
            Cancel
        </button>
    </div>
</template>

<script>
import CartItem from '@/components/CartItem'
import CartSum from '@/components/CartSum'
import cartMixin from '@/mixins/CartMixin.js'

export default {
	mixins: [cartMixin],
    components: {
        CartItem,
        CartSum
    },
    props: {
        cartItems: {
			type: Array
        }
    }
}
</script>

<style>
.cart {
    width: 100%;
    height: 100%;
    border: solid 1px grey;
    border-top: 0px;
    border-bottom: 0px;
}

.header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px grey;
    border-left: 0px;
    border-right: 0px;
}

.items {
    width: 100%;
    height: 70%;
}

.cart-sum {
    width: 100%;
    height: calc(30% - 104px);
}

.cancel {
	border: none;
	text-decoration: none;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 1px grey;
    
    display: inline-block;
	font-size: 16px;
}



</style>
