import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown';
import ChevronUp from '../../assets/svg/chevronUp';

const styles = {
    rate: 'flex items-center',
    green: 'ml-2 text-[#17C784]',
    red: 'ml-2 text-[#EA3943]',
}

const Rate = ({rate}) => {
    // show rate uptill 2 decimal places
    const rateValue = parseFloat(rate).toFixed(2);
  return (
    <div className={styles.rate}>
        {rate>0 ? <ChevronUp fill="#17C784" /> : <ChevronDown fill="#EA3943" />}
        <p className={rate>0 ? styles.green : styles.red}>{rateValue}%</p>
    </div>
  )
}

export default Rate