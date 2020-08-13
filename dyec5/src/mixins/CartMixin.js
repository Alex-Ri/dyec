import Vue from 'vue'

const defaultItems = [
    {
        name: 'Cool shoe',
        brand: 'DYEC',
        price: '5999',
        sku: '10005',
        currency: 'EUR' 
    },
    {
        name: 'Cool shoe 2',
        brand: 'DYEC',
        price: '6999',
        sku: '10006',
        currency: 'EUR'
    },
    {
        name: 'Cool shoe 3',
        brand: 'DYEC',
        price: '4299',
        sku: '10007',
        currency: 'EUR'
    }
]

const store = Vue.observable({
    items: []
})

const cartMixin = {
    created: function () {
        store.items = []
    },
    computed: {
        getItems () {
            return store.items
        }
    },
    methods: {
        addItem: function (item) {
            console.log('Add item to cart.')
            store.items.push(item)
        },

        removeItemAtIndex: function (index) {
            store.items.splice(index, 1)
        },

        searchForSKUAndAddToCart: function (sku) {
            console.log(`Search for SKU: ${sku}`)
            const foundItem = defaultItems.find(item => item.sku === sku)
            
			if(!foundItem) {
				console.log('Item not found.')
				return false
			}
			
			console.log('Item found.')
			this.addItem(foundItem)
			return true
		},
		
		removeAllItems: function () {
			store.items = []
		}
    }
}

export default cartMixin
