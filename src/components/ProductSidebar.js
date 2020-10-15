import React from 'react';

export default class ProductSidebar extends React.Component {
	render() {
		const { title, image, subtitle, tags } = this.props.product;

		return (
			<div className="productSidebar">
				<div className="productSidebar__details">
					<center>
						<img src={image} alt="" className="productSidebar__image" />
					</center>
					<h3 className="productSidebar__title">{title}</h3>
					<p className="productSidebar__subtitle">{subtitle}</p>
				</div>
				<div className="productSidebar__tags">
					{tags.map((tag, i) => (
						<p className="productSidebar__tag" key={i}>
							{tag}
						</p>
					))}
				</div>
				<div className="productSidebar__options">
					<button>overview</button>
					<button>sales</button>
				</div>
			</div>
		);
	}
}
