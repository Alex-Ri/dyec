import { createLocalVue, mount } from '@vue/test-utils'
import CartItem from '@/components/CartItem.vue'
import cartItems from './constants/cartItems'
import toCurrency from '@/filters/toCurrency.js'

describe('CartItem.vue', () => {
	const localVue = createLocalVue()
	localVue.filter('toCurrency', toCurrency)

	let wrapper

    beforeEach(() => {
        wrapper = mount(CartItem, {
			propsData: {
				cartItem: cartItems[0]
			}
		})
    })

    afterEach(() => {
		wrapper.destroy()
	})
	
	it('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy()
	})

	it('renders the cart item', () => {
		const cartItem = wrapper.find('.cart-item')
		expect(cartItem.exists()).toBe(true)
	})

	it('renders the sku of the item', () => {
		const cartItemSku = wrapper.find('.sku')
		expect(cartItemSku.text()).toBe('#10001')
	})

	it('renders the brand of the item', () => {
		const cartItemSku = wrapper.find('.description')
		expect(cartItemSku.text()).toBe('DYEC Test shoe')
	})

	it('renders the price of the item in euro', () => {
		const cartItemSku = wrapper.find('.price')
		expect(cartItemSku.text()).toBe('€50.00')
	})
})
