import { createLocalVue, mount } from '@vue/test-utils'
import CartSum from '@/components/CartSum.vue'
import cartItems from './constants/cartItems'
import toCurrency from '@/filters/toCurrency.js'

describe('CartSum.vue', () => {
	const localVue = createLocalVue()
	localVue.filter('toCurrency', toCurrency)

	let wrapper

    beforeEach(() => {
        wrapper = mount(CartSum, {
			propsData: {
				cartItems
			}
		})
    })

    afterEach(() => {
		wrapper.destroy()
	})
	
	it('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy()
	});

	it('renders the gross sum in euro', () => {
		const grossSum = wrapper.find('#gross-sum')
		// expect(grossSum.text()).toBe('110,00 €')
		expect(grossSum.text()).toBe('€110.00')
	})

	it('renders the vat amount in euro', () => {
		const vatAmount = wrapper.find('#vat-amount')
		// expect(vatAmount.text()).toBe('15,17 €')
		expect(vatAmount.text()).toBe('€15.17')
	})

	it('renders the net sum in euro', () => {
		const netSum = wrapper.find('#net-sum')
		// expect(netSum.text()).toBe('94,83 €')
		expect(netSum.text()).toBe('€94.83')
	})
})
