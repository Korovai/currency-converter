export default class CurrencyService {
	_apiId = '36bff187879d4355836363942074385e';
	_apiCurrency = 'https://openexchangerates.org/api/latest.json?app_id=';

	getResource = async (url) => {
	  const res = await fetch(`${this._apiCurrency}${url}`)

	  if (!res.ok) throw new Error(`Could not fetch ${this._apiCurrency}${url}, received ${res.status}`)

	  const data = await res.json()
	  return data
	}

	getCurrency = async () => {
	  const resCurrency = await this.getResource(`${this._apiId}`)
	  const arrayRes = []
	  for (const [code, value] of Object.entries(resCurrency.rates)) {
	    const newObj = {
	      code,
	      value
	    }
	    arrayRes.push(newObj)
	  }

	  return arrayRes
	}
}
