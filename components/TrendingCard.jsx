import React from 'react'
import Image from 'next/image'
import MoreButton from './MoreButton'
import TrendingCardRow from './TrendingCardRow'
const styles = {
    trendingCardWrapper: `flex items-center justify-between`,
  }
import myStyles  from '../styles/trendingCard.module.css'

const TrendingCard = ({ title, icon, data }) => {
  return (
    <div className={myStyles.trendingCard}>
        <div className={styles.trendingCardWrapper}>
            <div className='flex'>
                {
                    icon && (
                        <Image
                            src={icon}
                            alt={title}
                            width={25}
                            height={20}
                        />
                    )
                }
                &nbsp;
                &nbsp;
                <p className='font-bold mr'>{title}</p>
            </div>
            <MoreButton />
        </div>
        <br />
        {data.map((item, index) => (
            <div key={index}>
                <TrendingCardRow {...item} index={index} />
            </div>
        )
   
        )}

    </div>
  )
}

export default TrendingCard