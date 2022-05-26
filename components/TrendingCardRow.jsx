import React from 'react'
import Rate from './cmc-table/Rate'

const styles = {
    trendingCardRow: 'flex items-center justify-between mb-4 text-[0.93rem]',
}

const TrendingCardRow = ({ name, symbol, image, price_change_percentage_24h:rate, index:number}) => {

  return (
    <div className={styles.trendingCardRow}>
        <p className='opacity-40'>{number+1}</p>
        <div className='flex flex-grow'> {/* can also use w-full instead of flex-grow */}
            <div className='mx-5'>
                {image && <img src={image} alt={name} width={20} height={20} />}
            </div>
            <p className='font-bold'>{name}</p>
            <span className='text-gray-400 mx-5'>{symbol}</span>
        </div>
        <Rate rate={rate} />
    </div>
  )
}

export default TrendingCardRow