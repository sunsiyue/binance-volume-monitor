import React from 'react'
import { useTable, useSortBy } from 'react-table'

const SymbolTable = () => {

    const data = React.useMemo(
        () => [{ 'symbol': 'ETHBTC', '24hrVol': 13642.71639925, '30dVol': 251030, '24hrVs30dAvg': 1.6304067764140566 }, { 'symbol': 'LTCBTC', '24hrVol': 429.0503768, '30dVol': 10849.576828020006, '24hrVs30dAvg': 1.186360676368332 }],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Ticker',
                accessor: 'symbol',
            },
            {
                Header: '24hrVol vs. 30dAvgVol',
                accessor: '24hrVs30dAvg',
            },
            {
                Header: '24hrVol',
                accessor: '24hrVol',
            },
            {
                Header: '30dVol',
                accessor: '30dVol',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useSortBy)

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                style={{
                                    background: 'aliceblue',
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}
                            >
                                {column.render('Header')}
                                <span>
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? ' 🔽'
                                            : ' 🔼'
                                        : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '10px',
                                            border: 'solid 1px gray',
                                            background: 'papayawhip',
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default SymbolTable
