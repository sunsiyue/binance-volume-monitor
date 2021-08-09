import React, { useEffect } from 'react'
import { useTable, useSortBy } from 'react-table'

const SymbolTable = (props) => {

    var allTickers = [{ 'symbol': 'ETHBTC' }, { 'symbol': 'LTCBTC' }];
    var filtered = []
    async function getExchangeInfo() {
        fetch('https://api.binance.com/api/v3/exchangeInfo')
            .then(response => response.json())
            .then(data => allTickers = data.symbols);
        return allTickers;
    }

    function removeNonBtcPair() {
        filtered = allTickers.filter(ele => ele['symbol'].endsWith('BTC'));
    }

    function get24hrVol() {
        filtered.forEach(ele => {
            var url = 'https://api.binance.com/api/v3/ticker/24hr?symbol=' + ele['symbol'];
            fetch(url)
                .then(response => response.json())
                .then(data => ele['24hrVol'] = data['quoteVolume']);
        })
    }

    function get30dVol() {
        filtered.forEach(ele => {
            var url = 'https://api.binance.com/api/v3/klines?symbol=' + ele['symbol'] + '&interval=1h&limit=720';
            var totalVol = 0.0;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    data.forEach(interval =>
                        totalVol += parseFloat(interval[7])
                    );
                })
                .then(() => ele['30dVol'] = totalVol);
        });
    }

    function calculate24hrVs30dAvg() {
        filtered.forEach(ele => {
            var ratio = parseFloat(ele['24hrVol']) / ele['30dVol'] * 30;
            ele['24hrVs30dAvg'] = ratio;
        })
    }

    function updateData() {
        getExchangeInfo()
            .then(removeNonBtcPair)
            .then(get24hrVol)
            .then(get30dVol)
            .then(calculate24hrVs30dAvg)
            .then(setData(filtered))
            .then(console.log(filtered));
    }


    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Getting data!');
            updateData();
        }, 600000);
        return () => clearInterval(interval);
    }, []);

    const [data, setData] = React.useState(
        () => [{ 'symbol': 'ETHBTC', '24hrVol': 13642.71639925, '30dVol': 251030.1, '24hrVs30dAvg': 1.6304067764140566 }, { 'symbol': 'LTCBTC', '24hrVol': 429.0503768, '30dVol': 10849.576828020006, '24hrVs30dAvg': 1.186360676368332 }],
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
