<template>
    <div class="cart-sum">
        <div class="descriptions">
            <div class="entry">Net total:</div>
            <div class="entry">VAT (16%):</div>
            <div class="entry to-pay">To pay:</div>
        </div>
        <div class="amounts">
            <div id="net-sum" class="entry">{{ netSum | toCurrency(currency) }}</div>
            <div id="vat-amount" class="entry">{{ vatAmount | toCurrency(currency) }}</div>
            <div id="gross-sum" class="entry to-pay">{{ grossSum | toCurrency(currency) }}</div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        cartItems: {
            required: true,
            type: Array
        }
    },
    computed: {
        grossSum () {
            return this.cartItems.reduce((a, b) => {
                return a + Number(b.price)
            }, 0)
        },

        netSum () {
            return this.grossSum / 1.16
        },

        vatAmount () {
            return this.grossSum - this.netSum
        },

        currency () {
            return 'EUR'
        }
    }
}
</script>

<style scoped>
.cart-sum {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    border-top: solid 1px grey;
}

.descriptions {
    width: 50%;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
}

.amounts {
    text-align: right;
    width: 50%;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
}

.entry {
    width: 100%;
}

.to-pay {
    font-weight: bold;
    font-size: 1.2em;
}
</style>
