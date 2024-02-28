import React, { useState } from 'react'
import images from '../../utilities/images'

export default function Battle() {
    const [tab, setTab] = useState('price')
    return (
        <div className=" max-w-screen-xl mx-auto flex flex-col items-start mt-10 px-5">
            <div className="text-white font-semibold text-lg border-b-4 border-lineBlue pb-1 pr-3 ">
                <span>CS2 & CS:GO Case Battles</span>
            </div>
            <div className='mt-4 flex flex-row items-center justify-between '>
                <div className='flex flex-row gap-2'>
                    <div
                        onClick={() => setTab('price')}
                        className={
                            tab === 'price' ? 'bg-white text-black text-sm w-16 text-center border-white border py-[6px] cursor-pointer active:opacity-80 font-semibold' :
                                'bg-darkBlue2 text-white border border-white text-sm w-16 text-center py-[6px] cursor-pointer active:opacity-80 font-semibold'
                        }>PRICE</div>
                    <div
                        onClick={() => setTab('date')}
                        className={
                            tab === 'date' ?
                                'bg-white text-black text-sm w-16 text-center border-white border py-[6px] cursor-pointer active:opacity-80 font-semibold'
                                :
                                'bg-darkBlue2 text-white border border-white text-sm w-16 text-center py-[6px] cursor-pointer active:opacity-80 font-semibold'
                        }>DATE</div>
                </div>
                <div className='bg-darkBlue2 flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center'>
                        <img src={images.battles} className='w-7 mr-2'/>
                        <div className=''>
                           <div className='text-xs font-semibold text-grayText'>Battle</div>
                           <div className='text-md font-semibold text-white'>RAIN</div>
                        </div>
                    </div>
                    <div className='bg-blue4 flex flex-row items-center px-3 py-1'>
                        <img src={images.coin} className='w-5' />
                        <div className='text-xs text-white border border-dashed border-white px-2 py-[2px] mr-2 ml-2'>40.87</div>
                        <div className='text-xs text-white flex flex-row items-center'>
                            <img className='w-3 mr-1' src={images.clock} />
                            14.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
