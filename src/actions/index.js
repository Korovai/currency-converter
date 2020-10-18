const currenciesLoaded = (currency) => {
	return {
		type: 'FETCH_CURRENCIES_SUCCESS',
		payload: currency
	};
};

const currencySelection = (code, value) => {
	return {
		type: 'FETCH_CURRENCY_SUCCESS',
		code,
		value
	};
};

const getValue = (value) => {
	return {
		type: 'FETCH_CURRENCY_VALUE',
		payload: value
	};
};

export {
	currenciesLoaded,
	currencySelection,
	getValue
};