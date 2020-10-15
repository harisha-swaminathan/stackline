import React from 'react';
import { connect } from 'react-redux';
import ProductSidebar from './ProductSidebar';
import ChartRepresentation from './ChartRepresentation';
import TableRespresentation from './TableRespresentation';

const Product = (props) => (
	<>
		{props.product && (
			<div className="product__content">
				<div className="product__sidebar">
					<ProductSidebar product={props.product} />
				</div>
				<div className="product__visualization">
					<ChartRepresentation product={props.product} />
					<TableRespresentation product={props.product} />
				</div>
			</div>
		)}
	</>
);

const mapStateToProps = (state) => ({
	product: state.find((product) => product.id === 'B007TIE0GQ'),
});

export default connect(mapStateToProps)(Product);
