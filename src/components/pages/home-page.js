import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {
	getValue
} from '../../actions/index';


import './home-page.css';

class HomePage extends Component {	

	handleChange = (e) => {
		this.props.getValue(e.target.value);
	}
	
	render() {
		const {
      code,
      value1,
      valueRes
    } = this.props;

		return (
			<div className="wrApp">
				<div className="wrCurrencyBlock wrBaseCurrency">
					<div><input onChange={this.handleChange} type="text" className="baseCurrency" defaultValue={value1} /></div>
					<span className="currencyCode currencyCode1">USA</span>
				</div>

				<div className="wrCurrencyBlock wrConvertedCurrency">
					<Link to='/currency' className="wrCurrencyCode2">
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
		);
	};
};

const mapStateToProps = ({code, value1, valueRes}) => {
	return {
		code,
		value1,
		valueRes
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getValue: (value) => {
			dispatch(getValue(value));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);