<template>
    <div class="cart-item">
        <div class="description-container">

            <div class="sku">
                #{{ cartItem.sku }}
            </div>
            <div class="description">
                {{ cartItem.brand }} {{ cartItem.name }}
            </div>

        </div>
        <div class="price-container">
            <div class="price">
                {{ cartItem.price | toCurrency(cartItem.currency) }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cartItem: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.cart-item {
    min-height: 80px;
    width: 100%;
    border: solid 1px grey;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    display: flex;
    flex-direction: row;
}

.description-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 80%;
    padding: 10px 20px;
}

.price-container {
    display: flex;
    flex-direction: row;
    width: 20%;
    padding: 10px 20px;
    text-align: right;
}

.sku {
    width: 100%;
}

.brand {
    width: 100%;
    font-weight: bold;
}

.price {
    width: 100%;
}
</style>
