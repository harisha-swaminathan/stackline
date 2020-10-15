import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartRepresentation = (props) => {
  let retailsales = [];
  
	props.product.sales.forEach((sale) => {
		let date = new Date(sale.weekEnding).getTime();
		retailsales.push([date, sale.retailSales]);
  });
  
	const options = {
		chart: {
			type: 'spline',
		},
		credits: {
			enabled: false,
		},
		title: {
			text: 'Retail sales',
			align: 'left',
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				month: '%b',
			},
			title: {
				text: null,
			},
			lineColor: '#dbdbdb',
		},
		yAxis: {
			visible: false,
			title: {
				text: null,
			},
			labels: {
				enabled: false,
			},
		},

		plotOptions: {
			series: {
				lineWidth: 3,
				marker: {
					enabled: false,
				},
			},
		},
		series: [
			{
				name: 'Retail Sales',
				labels: {
					enabled: false,
				},
				data: [...retailsales],
			},
		],
	};
	return (
		<div className="chart">
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export default ChartRepresentation;
