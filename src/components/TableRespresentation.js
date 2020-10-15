import React from 'react';
import { useTable } from 'react-table';
import numeral from 'numeral';

const columns = [
	{
		Header: 'Week Ending',
		accessor: 'weekEnding',
	},
	{
		Header: 'Retail  Sales',
		accessor: 'retailSales',
		Cell: (props) => numeral(props.value).format('$0,0'),
	},
	{
		Header: 'Wholesale Sales',
		accessor: 'wholesaleSales',
		Cell: (props) => numeral(props.value).format('$0,0'),
	},
	{
		Header: 'Units Sold',
		accessor: 'unitsSold',
	},
	{
		Header: 'Retailer Margin',
		accessor: 'retailerMargin',
		Cell: (props) => numeral(props.value).format('$0,0'),
	},
];

const TableRepresentation = (props) => {
	let data = [...props.product.sales];
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data,
	});
	return (
		<div className="table">
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup, i) => (
						<tr key={i} {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column, i) => (
								<th key={i} {...column.getHeaderProps()}>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i) => {
						prepareRow(row);
						return (
							<tr key={i} {...row.getRowProps()}>
								{row.cells.map((cell, i) => {
									return (
										<td key={i} {...cell.getCellProps()}>
											{cell.render('Cell')}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TableRepresentation;
