// Base
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'
import { getValue } from '../../reducers/index'

// Material-UI
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import './home-page.css'

class HomePage extends Component {
	static propTypes = {
	  getValue: PropTypes.func,
	  code: PropTypes.string,
	  value1: PropTypes.number,
	  valueRes: PropTypes.number
	}

	handleChange = (e) => {
	  const inputValue = e.target.value !== '' ? (e.target.value.toString()[0] === '0' ? e.target.value.toString().replace(/0{2}/, 1) : e.target.value) : 1
	  this.props.getValue(inputValue)
	}

	render() {
	  const { code, value1, valueRes } = this.props

	  return (
	    <div className="wrApp">
	      <div className="wrCurrencyBlock wrBaseCurrency">
	        <input onChange={this.handleChange} type="number" pattern="[,0-9]*" className="baseCurrency" value={value1} />
	        <span className="currencyCode currencyCode1">USA</span>
	      </div>

	      <div className="wrCurrencyBlock wrConvertedCurrency">
	        <Link to="/currency" className="wrCurrencyCode2">
	          <span className="currencyCode currencyCode2">
	            {code}
	            <ArrowDropDownIcon />
	          </span>
	        </Link>
	        <div><span className="convertedCurrency">{valueRes}</span></div>
	      </div>

	      <div className="circleBlock">
	        <ArrowDownwardIcon className="arrowDown" />
	      </div>
	    </div>
	  )
	}
}

const mapStateToProps = ({ code, value1, valueRes }) => {
  return {
    code,
    value1,
    valueRes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getValue: (value) => {
      dispatch(getValue(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
