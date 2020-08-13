let instance
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

export default class {
    constructor () {
        if (instance) { return instance }

        this.shared = [
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
            }
        ]
        return this
    }

    addItem = (item) => {
        console.log('Add item to cart.')
        this.shared.push(item)
        console.log(this.shared)
    }

    removeItemAtIndex = (index) => {
        this.shared.splice(index, 1)
    }

    searchForSKUAndAddToCart = (sku) => {
        console.log(`Search for SKU: ${sku}`)
        const foundItem = defaultItems.find(item => item.sku === sku)

        console.log('Item found.')
        console.log(foundItem)

        this.addItem(foundItem)
    }
}
