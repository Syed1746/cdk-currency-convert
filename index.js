import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_vOzmXm9wG3I2xmq8i9n7JESppoQJQhqrbqyQydrB');
export async function currencies(fromcurrency, tocurrency, units) {
    const currency = await freecurrencyapi.latest({
        base_currency: fromcurrency,
        currencies: tocurrency
    })
    const multiplier = currency.data[tocurrency];
    return multiplier * units;
}