import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { addProducts } from '../actions/products';
import Product from './Product';

export class App extends React.Component {
	componentDidMount() {
		fetch('./Webdev_data2.json')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.props.addProducts(data);
			});
	}
	render() {
		return (
			<>
				<Header />
				<Product />
			</>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addProducts: (products) => dispatch(addProducts(products)),
});

export default connect(undefined, mapDispatchToProps)(App);
