import React, { useState, useContext, useEffect, useCallback } from 'react'
import btc from '../../assets/btc.png';
import { CoinMarketContext } from '../../context/context';

const CMCTable = () => {
    const { getTopTenCoins } = useContext(CoinMarketContext);
    const [coinData, setcoinData] = useState([]);

    const getTopTenCoinsData = useCallback(async () => {
        try {
            const apiResponse = await getTopTenCoins();
            setcoinData(apiResponse);

           

            
        } catch (error) {
            console.log(error.message);
        }
    }, [getTopTenCoins]);



  return (
    <div>CMCTable</div>
  )
}

export default CMCTable