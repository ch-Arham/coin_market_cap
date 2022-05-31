import React from 'react'
import converter from '../../assets/converter.png'
import btc from '../../assets/btc.png'
import eth from '../../assets/eth.png'
import usdc from '../../assets/usdc.png'
import usdt from '../../assets/usdt.png'
import xrp from '../../assets/xrp.png'
import cardano from '../../assets/cardano.png'
import bnb from '../../assets/bnb.png'
import solana from '../../assets/solana.png'
import avalanche from '../../assets/avalanche.png'
import Image from 'next/image'

const styles = {
    converter: `flex items-center justify-between bg-[#171924] border border-gray-500/10 px-5 py-5 rounded-xl`,
    convertButton: `bg-[#1d4ed8] p-2 px-5 w-min rounded-xl mt-5 cursor-pointer hover:opacity-60`,
  }

const CMCPriceConverter = ({ from, to, fromSymbol, toSymbol, fromLogo, toLogo, price }) => {
    price = parseFloat(price).toFixed(2);
    // add , to price
    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const coinIcon = () => {
        switch(from){
            case 'Bitcoin':
                return <Image src={btc} width={35} height={35} className='rounded-full' />
            case 'Ethereum':
                return <Image src={eth} width={35} height={35} />
            case 'Tether':
                return <Image src={usdt} width={35} height={35} />
            case 'USD Coin':
                return <Image src={usdc} width={35} height={35} />
            case 'XRP':
                return <Image src={xrp} width={35} height={35} />
            case 'Cardano':
                return <Image src={cardano} width={35} height={35} />
            case 'BNB':
                return <Image src={bnb} width={35} height={35} />
            case 'Solana':
                return <Image src={solana} width={35} height={35} />
            case 'Avalanche':
                return <Image src={avalanche} width={35} height={35} />
            case 'Dogecoin':
                return <Image src='https://thumbnail.imgbin.com/1/12/11/imgbin-dogecoin-cryptocurrency-digital-currency-doge-7gPEMECNJtfqezwmJx05tD1zk_t.jpg' width={35} height={35} />
            default:
                return <Image src={bnb} width={35} height={35} />
        }
    }
  return (
    <div>
        <h2>
            {fromSymbol} to {toSymbol} converter
        </h2>
        <br />
        <div className={styles.converter}>
            <div>
                <div className='flex items-center'>
                    <div className='avatar-container flex items-center'>
                        { fromLogo && fromLogo ? coinIcon() : <div></div> }
                    </div>
                    &nbsp; &nbsp;
                    <div>
                        <p className='text-sm text-gray-400'>{fromSymbol}</p>
                        <h4>{from}</h4>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <p className='text-2xl flex items-center'>1</p>
                &nbsp; &nbsp;
                <div className='flex items-center'>
                    <Image src={converter} alt='' width={35} height={35} />
                </div>
                &nbsp; &nbsp;
                <div className='flex items-center'>
                    <span className='flex items-center w-[35px] h-[35px]'>{toLogo}</span>
                    &nbsp; &nbsp;
                    <div className='flex flex-col justify-center'>
                        <p className='text-sm text-gray-400'>{toSymbol}</p>
                        <h4>{to}</h4>
                    </div>
                </div>
            </div>
            <p className='text-2xl'>${price}</p>
        </div>
        <div className={styles.convertButton}>
            Convert
        </div>
    </div>
  )
}

export default CMCPriceConverter