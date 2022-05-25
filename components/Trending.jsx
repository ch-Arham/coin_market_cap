import React,{ useEffect, useState } from 'react'
import fire from "../assets/fire.png"
import btc from "../assets/btc.png"
import usdt from "../assets/usdt.png"
import gainers from "../assets/gainers.png"
import recent from "../assets/recent.png"
import ReactSwitch from "react-switch"
import Rate from './cmc-table/Rate'

const styles = {
    trendingWrapper: 'mx-10 max-w-screen-2xl',
    h1: `text-3xl text-white`,
    flexCenter: `flex items-center,`
}

const Trending = () => {
    const [ checked, setChecked ] = useState(false);
    const [ coins, setCoins ] = useState([]);

    useEffect(async ()=>{
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h");
        const data = await response.json();
        // const arr = data.map(coin => coin.price_change_percentage_24h);
        setCoins(data);
    },[]);

  return (
    <div className='text-white'>
        <div className={styles.trendingWrapper}>
            <div className='flex justify-between'>
                <h1 className={styles.h1}>Todays Cryptocurrency Prices by Market Cap</h1>

                <div className='flex items-center'>
                    <p className='text-gray-400'>Highlights &nbsp;</p>
                    <ReactSwitch checked={checked} onChange={()=>setChecked(!checked)} />
                </div>
            </div>

            <br />
            <div className='flex items-center'>
                <p className='text-gray-400'>The global crypto market cap is $1.74T, a &nbsp;</p>
                <span><Rate isIncrement={true} rate='0.53%' /></span>
                <p className='text-gray-400'>&nbsp; decrease over the last day.<span className='underline'>Read More</span></p>
            </div>
            <br />

            <div className={styles.flexCenter}>
                {/* <TrendingCard title='Trending' icon={fire} data={coins} /> */}
                {/* <TrendingCard title='Biggest Gainers' icon={gainers} data={coins} /> */}
                {/* <TrendingCard title='Recently Added' icon={recent} data={coins} /> */}
            </div>
        </div>
    </div>
  )
}

export default Trending