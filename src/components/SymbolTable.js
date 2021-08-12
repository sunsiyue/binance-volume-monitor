import React, { useEffect } from 'react'
import { useTable, useSortBy } from 'react-table'

const SymbolTable = (props) => {
    let debug = false;
    let refreshInterval = 300000;
    
    var allTickers = [{ 'symbol': 'ETHBTC' }, { 'symbol': 'LTCBTC' }];
    var debugData = [
        {
            "symbol": "ETHBTC",
            "status": "TRADING",
            "baseAsset": "ETH",
            "baseAssetPrecision": 8,
            "quoteAsset": "BTC",
            "quotePrecision": 8,
            "quoteAssetPrecision": 8,
            "baseCommissionPrecision": 8,
            "quoteCommissionPrecision": 8,
            "orderTypes": [
                "LIMIT",
                "LIMIT_MAKER",
                "MARKET",
                "STOP_LOSS_LIMIT",
                "TAKE_PROFIT_LIMIT"
            ],
            "icebergAllowed": true,
            "ocoAllowed": true,
            "quoteOrderQtyMarketAllowed": true,
            "isSpotTradingAllowed": true,
            "isMarginTradingAllowed": true,
            "filters": [
                {
                    "filterType": "PRICE_FILTER",
                    "minPrice": "0.00000100",
                    "maxPrice": "922327.00000000",
                    "tickSize": "0.00000100"
                },
                {
                    "filterType": "PERCENT_PRICE",
                    "multiplierUp": "5",
                    "multiplierDown": "0.2",
                    "avgPriceMins": 5
                },
                {
                    "filterType": "LOT_SIZE",
                    "minQty": "0.00100000",
                    "maxQty": "100000.00000000",
                    "stepSize": "0.00100000"
                },
                {
                    "filterType": "MIN_NOTIONAL",
                    "minNotional": "0.00010000",
                    "applyToMarket": true,
                    "avgPriceMins": 5
                },
                {
                    "filterType": "ICEBERG_PARTS",
                    "limit": 10
                },
                {
                    "filterType": "MARKET_LOT_SIZE",
                    "minQty": "0.00000000",
                    "maxQty": "1025.63160667",
                    "stepSize": "0.00000000"
                },
                {
                    "filterType": "MAX_NUM_ORDERS",
                    "maxNumOrders": 200
                },
                {
                    "filterType": "MAX_NUM_ALGO_ORDERS",
                    "maxNumAlgoOrders": 5
                }
            ],
            "permissions": [
                "SPOT",
                "MARGIN"
            ],
            "24hrVs30dAvg": null,
            "24hrVol": "9303.29827838",
            "30dVol": 261710.95900641024
        },
        {
            "symbol": "LTCBTC",
            "status": "TRADING",
            "baseAsset": "LTC",
            "baseAssetPrecision": 8,
            "quoteAsset": "BTC",
            "quotePrecision": 8,
            "quoteAssetPrecision": 8,
            "baseCommissionPrecision": 8,
            "quoteCommissionPrecision": 8,
            "orderTypes": [
                "LIMIT",
                "LIMIT_MAKER",
                "MARKET",
                "STOP_LOSS_LIMIT",
                "TAKE_PROFIT_LIMIT"
            ],
            "icebergAllowed": true,
            "ocoAllowed": true,
            "quoteOrderQtyMarketAllowed": true,
            "isSpotTradingAllowed": true,
            "isMarginTradingAllowed": true,
            "filters": [
                {
                    "filterType": "PRICE_FILTER",
                    "minPrice": "0.00000100",
                    "maxPrice": "100000.00000000",
                    "tickSize": "0.00000100"
                },
                {
                    "filterType": "PERCENT_PRICE",
                    "multiplierUp": "5",
                    "multiplierDown": "0.2",
                    "avgPriceMins": 5
                },
                {
                    "filterType": "LOT_SIZE",
                    "minQty": "0.01000000",
                    "maxQty": "100000.00000000",
                    "stepSize": "0.01000000"
                },
                {
                    "filterType": "MIN_NOTIONAL",
                    "minNotional": "0.00010000",
                    "applyToMarket": true,
                    "avgPriceMins": 5
                },
                {
                    "filterType": "ICEBERG_PARTS",
                    "limit": 10
                },
                {
                    "filterType": "MARKET_LOT_SIZE",
                    "minQty": "0.00000000",
                    "maxQty": "9383.83974982",
                    "stepSize": "0.00000000"
                },
                {
                    "filterType": "MAX_NUM_ORDERS",
                    "maxNumOrders": 200
                },
                {
                    "filterType": "MAX_NUM_ALGO_ORDERS",
                    "maxNumAlgoOrders": 5
                }
            ],
            "permissions": [
                "SPOT",
                "MARGIN"
            ],
            "24hrVs30dAvg": null,
            "24hrVol": "603.05191416",
            "30dVol": 11889.453748040009
        },
        {
            "symbol": "BNBBTC",
            "status": "TRADING",
            "baseAsset": "BNB",
            "baseAssetPrecision": 8,
            "quoteAsset": "BTC",
            "quotePrecision": 8,
            "quoteAssetPrecision": 8,
            "baseCommissionPrecision": 8,
            "quoteCommissionPrecision": 8,
            "orderTypes": [
                "LIMIT",
                "LIMIT_MAKER",
                "MARKET",
                "STOP_LOSS_LIMIT",
                "TAKE_PROFIT_LIMIT"
            ],
            "icebergAllowed": true,
            "ocoAllowed": true,
            "quoteOrderQtyMarketAllowed": true,
            "isSpotTradingAllowed": true,
            "isMarginTradingAllowed": true,
            "filters": [
                {
                    "filterType": "PRICE_FILTER",
                    "minPrice": "0.00000100",
                    "maxPrice": "100000.00000000",
                    "tickSize": "0.00000100"
                },
                {
                    "filterType": "PERCENT_PRICE",
                    "multiplierUp": "5",
                    "multiplierDown": "0.2",
                    "avgPriceMins": 5
                },
                {
                    "filterType": "LOT_SIZE",
                    "minQty": "0.01000000",
                    "maxQty": "100000.00000000",
                    "stepSize": "0.01000000"
                },
                {
                    "filterType": "MIN_NOTIONAL",
                    "minNotional": "0.00010000",
                    "applyToMarket": true,
                    "avgPriceMins": 5
                },
                {
                    "filterType": "ICEBERG_PARTS",
                    "limit": 10
                },
                {
                    "filterType": "MARKET_LOT_SIZE",
                    "minQty": "0.00000000",
                    "maxQty": "10462.91507991",
                    "stepSize": "0.00000000"
                },
                {
                    "filterType": "MAX_NUM_ORDERS",
                    "maxNumOrders": 200
                },
                {
                    "filterType": "MAX_NUM_ALGO_ORDERS",
                    "maxNumAlgoOrders": 5
                }
            ],
            "permissions": [
                "SPOT",
                "MARGIN"
            ],
            "24hrVs30dAvg": null,
            "24hrVol": "1864.70750678",
            "30dVol": 39897.920611669986
        },
        {
            "symbol": "NEOBTC",
            "status": "TRADING",
            "baseAsset": "NEO",
            "baseAssetPrecision": 8,
            "quoteAsset": "BTC",
            "quotePrecision": 8,
            "quoteAssetPrecision": 8,
            "baseCommissionPrecision": 8,
            "quoteCommissionPrecision": 8,
            "orderTypes": [
                "LIMIT",
                "LIMIT_MAKER",
                "MARKET",
                "STOP_LOSS_LIMIT",
                "TAKE_PROFIT_LIMIT"
            ],
            "icebergAllowed": true,
            "ocoAllowed": true,
            "quoteOrderQtyMarketAllowed": true,
            "isSpotTradingAllowed": true,
            "isMarginTradingAllowed": true,
            "filters": [
                {
                    "filterType": "PRICE_FILTER",
                    "minPrice": "0.00000100",
                    "maxPrice": "100000.00000000",
                    "tickSize": "0.00000100"
                },
                {
                    "filterType": "PERCENT_PRICE",
                    "multiplierUp": "5",
                    "multiplierDown": "0.2",
                    "avgPriceMins": 5
                },
                {
                    "filterType": "LOT_SIZE",
                    "minQty": "0.01000000",
                    "maxQty": "100000.00000000",
                    "stepSize": "0.01000000"
                },
                {
                    "filterType": "MIN_NOTIONAL",
                    "minNotional": "0.00010000",
                    "applyToMarket": true,
                    "avgPriceMins": 5
                },
                {
                    "filterType": "ICEBERG_PARTS",
                    "limit": 10
                },
                {
                    "filterType": "MARKET_LOT_SIZE",
                    "minQty": "0.00000000",
                    "maxQty": "7096.25428075",
                    "stepSize": "0.00000000"
                },
                {
                    "filterType": "MAX_NUM_ORDERS",
                    "maxNumOrders": 200
                },
                {
                    "filterType": "MAX_NUM_ALGO_ORDERS",
                    "maxNumAlgoOrders": 5
                }
            ],
            "permissions": [
                "SPOT",
                "MARGIN"
            ],
            "24hrVs30dAvg": null,
            "24hrVol": "144.67417487",
            "30dVol": 4559.558754280001
        },
        {
            "symbol": "BCCBTC",
            "status": "BREAK",
            "baseAsset": "BCC",
            "baseAssetPrecision": 8,
            "quoteAsset": "BTC",
            "quotePrecision": 8,
            "quoteAssetPrecision": 8,
            "baseCommissionPrecision": 8,
            "quoteCommissionPrecision": 8,
            "orderTypes": [
                "LIMIT",
                "LIMIT_MAKER",
                "MARKET",
                "STOP_LOSS_LIMIT",
                "TAKE_PROFIT_LIMIT"
            ],
            "icebergAllowed": true,
            "ocoAllowed": true,
            "quoteOrderQtyMarketAllowed": true,
            "isSpotTradingAllowed": true,
            "isMarginTradingAllowed": false,
            "filters": [
                {
                    "filterType": "PRICE_FILTER",
                    "minPrice": "0.00000100",
                    "maxPrice": "1000.00000000",
                    "tickSize": "0.00000100"
                },
                {
                    "filterType": "PERCENT_PRICE",
                    "multiplierUp": "5",
                    "multiplierDown": "0.2",
                    "avgPriceMins": 5
                },
                {
                    "filterType": "LOT_SIZE",
                    "minQty": "0.00100000",
                    "maxQty": "92141578.00000000",
                    "stepSize": "0.00100000"
                },
                {
                    "filterType": "MIN_NOTIONAL",
                    "minNotional": "0.00010000",
                    "applyToMarket": true,
                    "avgPriceMins": 5
                },
                {
                    "filterType": "ICEBERG_PARTS",
                    "limit": 10
                },
                {
                    "filterType": "MAX_NUM_ORDERS",
                    "maxNumOrders": 200
                },
                {
                    "filterType": "MAX_NUM_ALGO_ORDERS",
                    "maxNumAlgoOrders": 5
                }
            ],
            "permissions": [
                "SPOT"
            ],
            "24hrVs30dAvg": null,
            "24hrVol": 147.19019665,
            "30dVol": 172444.70233812998
        }
    ];



    var filtered = []
    async function getExchangeInfo() {
        if(debug) {
            allTickers = debugData;
        } else {
            fetch('https://api.binance.com/api/v3/exchangeInfo')
            .then(response => response.json())
            .then(data => allTickers = data.symbols);
        }
        
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
                .then(data => {ele['24hrVol'] = parseFloat(data['quoteVolume']);
                ele['priceChangePercent'] = parseFloat(data['priceChangePercent']);}
                );
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
                .then(() => ele['30dVol'] = totalVol)
                .then(calculate24hrVs30dAvg)
                .then(sortByRatio);
        });
    }

    function calculate24hrVs30dAvg() {
        // filtered.forEach(ele => {
        //     var ratio = ele['24hrVol'] / ele['30dVol'] * 30;
        //     console.log(ratio);
        //     ele['24hrVs30dAvg'] = ratio;
        //     console.log(ele['24hrVs30dAvg']);
        // })

        for (let i=0; i<filtered.length; i++) {
            var vol24h = filtered[i]['24hrVol'];
            var vol30d = filtered[i]['30dVol'];
            var ratio = (vol24h / vol30d) * 30;
            filtered[i]['24hrVs30dAvg'] = ratio;
            console.log('val 24hrVs30dAvg: '+filtered[i]['24hrVs30dAvg']);
        }
    }

    function sortByRatio() {
        filtered.sort(function(a, b) {
            return b['24hrVs30dAvg'] - a['24hrVs30dAvg'];
        })
    }

    function updateData() {
        getExchangeInfo()
            .then(removeNonBtcPair)
            .then(get24hrVol)
            .then(get30dVol)
            .then(setData(filtered))
            .then(console.log(filtered));
    }


    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Getting data!');
            updateData();
        }, refreshInterval);
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
            {
                Header: '24hr Price change %',
                accessor: 'priceChangePercent',
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
