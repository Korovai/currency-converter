const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS'
const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS'
const FETCH_CURRENCY_VALUE = 'FETCH_CURRENCY_VALUE'

const reducer = (state, action) => {
  if (state === undefined) {
    return {
      currency: [],
      code: 'SELECT CURRENCY',
      value1: 1,
      value2: '',
      valueRes: 0,
      loading: true
    }
  }

  switch (action.type) {
    case FETCH_CURRENCIES_SUCCESS:
      return {
        currency: action.payload,
        code: state.code,
        value1: state.value1,
        value2: state.value2,
        valueRes: state.value1 * state.value2,
        loading: false
      }
    case FETCH_CURRENCY_SUCCESS:
      return {
        currency: state.currency,
        code: action.code,
        value1: state.value1,
        value2: action.value,
        valueRes: action.value * state.value1,
        loading: false
      }

    case FETCH_CURRENCY_VALUE:
      return {
        currency: state.currency,
        code: state.code,
        value1: +action.payload,
        value2: state.value2,
        valueRes: action.payload * state.value2,
        loading: true
      }
    default:
      return state
  }
}

export default reducer

const currenciesLoaded = (currency) => {
  return {
    type: 'FETCH_CURRENCIES_SUCCESS',
    payload: currency
  }
}

const currencySelection = (code, value) => {
  return {
    type: 'FETCH_CURRENCY_SUCCESS',
    code,
    value
  }
}

const getValue = (value) => {
  return {
    type: 'FETCH_CURRENCY_VALUE',
    payload: value
  }
}

export {
  currenciesLoaded,
  currencySelection,
  getValue
}
