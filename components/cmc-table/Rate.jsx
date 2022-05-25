import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown';
import ChevronUp from '../../assets/svg/chevronUp';

const styles = {
    rate: 'flex items-center',
    green: 'ml-2 text-[#17C784]',
    red: 'ml-2 text-[#EA3943]',
}

const Rate = ({isIncrement,rate}) => {
  return (
    <div className={styles.rate}>
        {isIncrement ? <ChevronUp fill="#17C784" /> : <ChevronDown fill="#EA3943" />}
        <p className={isIncrement ? styles.green : styles.red}>{rate}</p>
    </div>
  )
}

export default Rate