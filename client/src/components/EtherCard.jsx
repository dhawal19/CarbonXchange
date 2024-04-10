import React from 'react'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'

const EtherCard = () => {
    return (
        <div>
            <div className='p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism '>
                <div className="flex justify-between flex-col w-full h-full">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                            <SiEthereum fontSize={21} color='#fff' />
                        </div>
                        <BsInfoCircle fontSize={17} color='#fff' />
                    </div>
                    <div className="">
                        <p className='text-white font-light text-sm'>
                            12345678
                        </p>
                        <p className='text-white font-semibold text-lg mt-1'>
                            Ethereum
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EtherCard