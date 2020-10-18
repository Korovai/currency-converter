import React from 'react';
import {Link} from 'react-router-dom';

import './currency-list-item.css';

const CurrencyListItem = ({data, onGetCurrency}) => {
	
	const elements = data.map((item, index) => {
		const {code, value} = item;
		const currentLetter  = index === 0 ? '' : data[index - 1].code.charAt(0);
		const firstLetter  = data[index].code.charAt(0);
		
		if(currentLetter !== firstLetter) {
			return (
				<div key={code}>
          <div className="wrLetter">{firstLetter}</div>
          <Link to="/" className="currencyListItem">
            <li onClick={() => onGetCurrency(code, value)}>{code}</li>
          </Link>
				</div>
			);
		} else {
      return (
        <Link key={code} to="/" className="currencyListItem">
          <li onClick={() => onGetCurrency(code, value)}>{code}</li>
        </Link>
      );
    }
	});

	return (
		<React.Fragment>
			{elements}
		</React.Fragment>
	);
};

export default CurrencyListItem;