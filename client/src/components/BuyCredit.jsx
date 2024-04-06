import Nav from './Nav'
import EtherCard from './EtherCard'


const BuyCredit = () => {
  return (
    <div>
        <Nav />
        <div className='flex justify-center min-h-[65vh]'>
            <div className='flex flex-col w-[80%] justify-center'>
                <div className='flex flex-row  text-white justify-center items-center py-6'>
                    <div className='flex-col p-20'>
                        <h1 className='text-6xl font-semibold py-4'>Buy <span className="bg-gradient-to-r from-green-200 from-0% via-yellow-100 via-50% to-green-200 to-95% bg-clip-text text-transparent">Carbon Credit</span><br/> using Ethereum</h1>
                        <p className='text-xl font-light'>Offset your carbon footprint today!</p>
                    </div>
                    <div className='flex flex-col justify-center items-center p-20'>
                        <EtherCard />
                    </div>
                </div>
                <div className='flex text-gray-800 justify-center'>
                    <div className='flex min-w-[50%] rounded-xl border-none justify-center'>
                        <input type="text" placeholder='Enter Number of Credits to buy' className='bg-gray-800 rounded-l-xl w-1/2 text-gray-300 text py-4 px-8 outline-none text-left overflow-hidden inline'/>

                        <button href="/ethereum" className='border py-3  rounded-r-lg bg-gradient-to-r from-emerald-50 to-green-500 text-black font-semibold p-4'>Buy Now</button>

                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default BuyCredit