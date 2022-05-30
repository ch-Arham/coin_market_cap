import React, { useState, useContext, useEffect, useCallback } from 'react'
import btc from '../../assets/btc.png'
import { CoinMarketContext } from '../../context/context'
import CMCTableHeader from './CMCTableHeader'
import CMCTableRow from './CMCTableRow'

const CMCTable = () => {
  const { getTopTenCoins } = useContext(CoinMarketContext)
  let [coinData, setCoinData] = useState(null)
  // we need to use useCallback to avoid infinite loop
  // useCallback is a hook that allows us to memoize a function so that it will only be re-evaluated when one of its dependencies has changed.
  useEffect(() => {
    setData()
  }, [])

  const setData = useCallback(async () => {
    try {
      let apiResponse = await getTopTenCoins()
      let filteredResponse = []

      for (let i = 0; i < apiResponse.length; i++) {
        //to get only top ten coins
        const element = apiResponse[i]
        if (element.cmc_rank <= 10) filteredResponse.push(element)
      }

      setCoinData(filteredResponse)
    } catch (e) {
      console.log(e.message)
    }
  }, [getTopTenCoins])

  return (
    <div className="mx-10">
      <div className="font-bold text-white">
        <div className="mx-auto max-w-screen-2xl">
          <table className="w-full">
            <CMCTableHeader />

            {coinData && coinData ? (
              coinData.map((coin, index) => {
                return (
                    <CMCTableRow
                        key={index}
                        starNum={coin.cmc_rank}
                        coinName={coin.name}
                        coinSymbol={coin.symbol}
                        coinIcon={btc}
                        showBuy={true}
                        hRate={coin.quote.USD.percent_change_24h}
                        dRate={coin.quote.USD.percent_change_7d}
                        price={coin.quote.USD.price}
                        marketCapValue={coin.quote.USD.market_cap}
                        volumeCryptoValue={coin.quote.USD.volume_24h}
                        volumeValue={coin.total_supply}
                        circulatingSupply={coin.circulating_supply}
                    />
                )
              })
            ) : (
              <></>
            )}
          </table>
        </div>
      </div>
    </div>
  )
}

export default CMCTable
