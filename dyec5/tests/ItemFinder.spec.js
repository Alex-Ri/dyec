import { createLocalVue, mount } from '@vue/test-utils'
import ItemFinder from '@/components/ItemFinder.vue'
import toCurrency from '@/filters/toCurrency.js'

describe('ItemFinder.vue', () => {
	const localVue = createLocalVue()
	localVue.filter('toCurrency', toCurrency)

	let wrapper

    beforeEach(() => {
        wrapper = mount(ItemFinder)
    })

    afterEach(() => {
		wrapper.destroy()
	})
	
	it('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy()
	})

	it('sets inputfield value', () => {
		const inputField = wrapper.find('input')
		inputField.element.value = '10005'
		inputField.trigger('input')
		expect(wrapper.vm.sku).toBe('10005')
	})

	it('does not render search button', async () => {		
		const searchButton = wrapper.find('button')
		expect(searchButton.exists()).toBe(false)
	})	

	it('remders search button', async () => {		
		const inputField = wrapper.find('input')
		inputField.element.value = '10005'
		inputField.trigger('input')
		
		await wrapper.vm.$forceUpdate();

		const searchButton = wrapper.find('button')

		expect(searchButton.exists()).toBe(true)
	})	

	it('triggers search method and adds 1 item', async () => {		
		const inputField = wrapper.find('input')
		inputField.element.value = '10005'
		inputField.trigger('input')
		
		await wrapper.vm.$forceUpdate();

		const searchButton = wrapper.find('button')
		wrapper.vm.searchForSKUAndAddToCart = jest.fn()
		searchButton.trigger('click')
    
		expect(wrapper.vm.searchForSKUAndAddToCart).toBeCalled()

		// expect(wrapper.vm.getItems.length).toBe(1)
	})
})
