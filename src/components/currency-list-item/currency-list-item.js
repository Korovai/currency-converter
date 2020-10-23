// Base
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './currency-list-item.css'

const CurrencyListItem = ({ data, onGetCurrency }) => {
  const elements = data.map((item, index) => {
    const { code, value } = item
    const currentLetter = index === 0 ? '' : data[index - 1].code.charAt(0)
    const firstLetter = data[index].code.charAt(0)

    if (currentLetter !== firstLetter) {
      return (
        <div key={code}>
          <div className="wrLetter">{firstLetter}</div>
          <Link onClick={() => onGetCurrency(code, value)} to="/" className="currencyListItem">
            {code}
          </Link>
        </div>
      )
    }
    return (
      <Link onClick={() => onGetCurrency(code, value)} key={code} to="/" className="currencyListItem">
        {code}
      </Link>
    )
  })

  return (
    <React.Fragment>
      {elements}
    </React.Fragment>
  )
}

CurrencyListItem.propTypes = {
  data: PropTypes.array,
  onGetCurrency: PropTypes.elementType
}

export default CurrencyListItem
