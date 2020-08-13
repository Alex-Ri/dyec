import { createLocalVue, mount } from '@vue/test-utils'
import Cart from '@/components/Cart.vue'
import cartItems from './constants/cartItems'
import toCurrency from '@/filters/toCurrency.js'

describe('Cart.vue', () => {
	const localVue = createLocalVue()
	localVue.filter('toCurrency', toCurrency)

	let emptyCartWrapper
	let itemsInCartWrapper

    beforeEach(() => {
        emptyCartWrapper = mount(Cart, {
			propsData: {
				cartItems: []
			}
		})

		itemsInCartWrapper = mount(Cart, {
			propsData: {
				cartItems
			}
		})
    })

    afterEach(() => {
		emptyCartWrapper.destroy()
		itemsInCartWrapper.destroy()
	})
	
	test('emptyCartWrapper is a Vue instance', () => {
        expect(emptyCartWrapper.isVueInstance).toBeTruthy()
	});

	test('itemsInCartWrapper is a Vue instance', () => {
        expect(emptyCartWrapper.isVueInstance).toBeTruthy()
    });

    it('does not render the cart, cart sum and cancel button when there are no items', () => {
		const items = emptyCartWrapper.find('.items')
		const cartSum = emptyCartWrapper.find('.cart-sum')
		const cancel = emptyCartWrapper.find('.cancel')
		expect(items.exists()).toBe(false)
		expect(cartSum.exists()).toBe(false)
		expect(cancel.exists()).toBe(false)
	})
	
	it('renders the cart, cart sum and cancel button when there are items', () => {
		const items = itemsInCartWrapper.find('.items')
		const cartSum = itemsInCartWrapper.find('.cart-sum')
		const cancel = itemsInCartWrapper.find('.cancel')
		expect(items.exists()).toBe(true)
		expect(cartSum.exists()).toBe(true)
		expect(cancel.exists()).toBe(true)
	})

	it('renders the cart items', () => {
		const cartItems = itemsInCartWrapper.findAll('.cart-item')
		expect(cartItems.length).toBe(2)
	})
})
