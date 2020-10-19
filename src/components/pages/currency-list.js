import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {
  currenciesLoaded,
  currencySelection
} from '../../actions/index'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import CurrencyService from '../../services/currency-service'
import CurrencyListItem from '../currency-list-item/currency-list-item'
import Spinner from '../spinner/spinner'

import './currency-list.css'

class CurrencyList extends Component {
  currencyService = new CurrencyService();

  componentDidMount() {
    this.currencyService
      .getCurrency().then((currency) => {
        this.props.currenciesLoaded(currency)
      })
  }

  render() {
    const { currency, loading, onGetCurrency } = this.props

    if (loading) {
      return (
        <Spinner />
      )
    }

    return (
      <div className="wrCurrencyList">
        <div className="wrHeaderCurrencyList">
          <Link to="/" className="wrHomeBtn">
            <ArrowBackIcon className="homeBtn" />
          </Link>
          <span className="titleCurrencyList">Currency Codes</span>
        </div>

        <ul className="currencyList">
          <CurrencyListItem data={currency} onGetCurrency={onGetCurrency} />
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ currency, loading }) => {
  return {
    currency,
    loading
  }
}

const mapStateDispatchToProps = (dispatch) => {
  return {
    currenciesLoaded: (currency) => {
      dispatch(currenciesLoaded(currency))
    },

    onGetCurrency: (code, value) => {
      dispatch(currencySelection(code, value))
    }
  }
}

export default connect(mapStateToProps, mapStateDispatchToProps)(CurrencyList)
