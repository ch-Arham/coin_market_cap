import React from 'react'
import Image from 'next/image'
import btc from '../assets/btc.png'
import eth from '../assets/eth.png'
import usdc from '../assets/usdc.png'
import usdt from '../assets/usdt.png'
import xrp from '../assets/xrp.png'
import cardano from '../assets/cardano.png'
import bnb from '../assets/bnb.png'
import solana from '../assets/solana.png'
import avalanche from '../assets/avalanche.png'

const styles = {
    coinNameRow: 'flex items-center ml-4',
    buyButton: 'bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-xl coursor-pointer hover:opacity-50',
}



const CoinNameRow = ({ name, clicked }) => {
    const coinIcon = () => {
        switch(name){
            case 'Bitcoin':
                return <Image src={btc} width={20} height={20} className='rounded-full' />
            case 'Ethereum':
                return <Image src={eth} width={20} height={20} />
            case 'Tether':
                return <Image src={usdt} width={20} height={20} />
            case 'USD Coin':
                return <Image src={usdc} width={20} height={20} />
            case 'XRP':
                return <Image src={xrp} width={20} height={20} />
            case 'Cardano':
                return <Image src={cardano} width={20} height={20} />
            case 'BNB':
                return <Image src={bnb} width={20} height={20} />
            case 'Solana':
                return <Image src={solana} width={20} height={20} />
            case 'Avalanche':
                return <Image src={avalanche} width={20} height={20} />
            case 'Dogecoin':
                return <Image src='https://thumbnail.imgbin.com/1/12/11/imgbin-dogecoin-cryptocurrency-digital-currency-doge-7gPEMECNJtfqezwmJx05tD1zk_t.jpg' width={20} height={20} />
            default:
                return <Image src={bnb} width={20} height={20} />
        }
    }
  return (
    <div className={styles.coinNameRow}>
        <div className='mr-3 flex' onClick={clicked}>
            <div className='mr-2'>{coinIcon()}</div>
            {name}
        </div>

        <p>
            {
                name === 'Bitcoin' || name === 'Ethereum' || name === 'Tether' ? (
                    <span className={styles.buyButton}>Buy</span>
                ) : (<></>)
            }
        </p>
    </div>
  )
}

export default CoinNameRow