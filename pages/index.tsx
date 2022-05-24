import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <div className='min-h-screen'>
        <Header />
        <div className='mt-10'/>
        <div className='mt-20'/>
      </div>
    </>
  )
}

export default Home
