import React,{ useEffect, useState } from 'react'
import fire from "../assets/fire.png"
import btc from "../assets/btc.png"
import usdt from "../assets/usdt.png"
import gainers from "../assets/gainers.png"
import recent from "../assets/recent.png"
import ReactSwitch from "react-switch"
import Rate from './cmc-table/Rate'
import TrendingCard from './TrendingCard'

const styles = {
    trendingWrapper: 'mx-10 max-w-screen-2xl',
    h1: `text-3xl text-white`,
    flexCenter: `flex items-center,`
}

const Trending = () => {
    const [ checked, setChecked ] = useState(false);
    const [ coins, setCoins ] = useState([]);


    useEffect(async ()=>{
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h");
        const data = await response.json();
        setCoins(data);

    },[]);
    
    const test0 =coins.map(coin => coin.price_change_percentage_24h );
    const test1=test0.sort((a,b)=>b-a);
    const test2 = coins.filter(coin => coin.price_change_percentage_24h === test1[0]);
    const test3 = coins.filter(coin => coin.price_change_percentage_24h === test1[1]);
    const test4 = coins.filter(coin => coin.price_change_percentage_24h === test1[2]);
    const test=[...test2,...test3,...test4];

    const coin1 = [coins[Math.floor(Math.random() * 100)],coins[Math.floor(Math.random() * 100)],coins[Math.floor(Math.random() * 100)]];
    let coin2
    if(test.length===3){
        coin2 = [test[0],test[1],test[2]];
    }else if(test.length===2){
        coin2 = [test[0],test[1],coins[Math.floor(Math.random() * 100)]];
    }else if(test.length===1){
        coin2 = [test[0],coins[Math.floor(Math.random() * 100)],coins[Math.floor(Math.random() * 100)]];
    }else{
        coin2 = [coins[0],coins[1],coins[3]]
    }
    const coin3 = [coins[16],coins[17],coins[18]];


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
                <span><Rate rate={-0.53} /></span>
                <p className='text-gray-400'>&nbsp; decrease over the last day.{" "}<span className='underline'>Read More</span></p>
            </div>
            <br />

            <div className={styles.flexCenter}>
                <TrendingCard title='Trending' icon={fire} data={coin1} />
                <TrendingCard title='Biggest Gainers' icon={gainers} data={coin2} />
                <TrendingCard title='Recently Added' icon={recent} data={coin3} />
            </div>
        </div>
    </div>
  )
}

export default Trending