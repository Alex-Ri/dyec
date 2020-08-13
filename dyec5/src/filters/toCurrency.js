import Vue from 'vue'

Vue.filter('toCurrency', (amount, currency, locale = 'de-DE', digits = 2) => {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: digits
    })

    const priceString = formatter.format(amount / 100)
    if (priceString.includes('aN')) { formatter.format(0) }

    return priceString
})
