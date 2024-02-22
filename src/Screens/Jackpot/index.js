import React, { useState } from 'react'
import images from '../../utilities/images'
import "../../App.css"

export default function Jackpot() {
    const [amount, setAmount] = useState(0.01)
    const [selectedJakpot, setSelectedJakpot] = useState('purple')
    return (
        <div className=" max-w-screen-xl mx-auto flex flex-col items-start mt-5p px-5">
            <div className="text-white font-semibold text-lg border-b-4 border-lineBlue pb-1 pr-3 ">
                <span>CS2 & CS:GO Jackpot</span>
            </div>
            {/* <div className='flex flex-row items-center justify-between w-full mx-auto'>
                 <div
                    onClick={() => setSelectedJakpot('purple')}
                    className={
                        selectedJakpot === 'purple' ?
                            "w-[360px] h-[400px] cursor-pointer bg-cover bg-center flex flex-col items-center justify-center relative" :
                            "w-[280px] h-[310px] cursor-pointer bg-cover bg-center flex flex-col items-center justify-center relative"
                    }
                    style={{
                        backgroundImage: `url(${selectedJakpot === 'purple' ? images.jackpotPurple : images.jackpotDisable})`,
                    }}
                >
                  <div className={
                    selectedJakpot === "purple" ? ' flex flex-row items-center absolute top-3 mr-3' : ' flex flex-row items-center absolute top-2 mr-3'
                  }>
                    <img src={images.coin} className='w-5 h-5' /> 
                    <span className='text-md  text-white ml-1'>25.75</span>
                  </div>

                  <div className='flex flex-col text-white text-center mt-3'>
                    <div className='text-2xl font-semibold text-yellow'>25.75</div>
                    <div className='text-xs text-white mt-2'>FUUUR</div>
                    <div className='text-sm text-yellow mt-2'>NORMAL</div>
                  </div>
                </div>
                <div
                    onClick={() => setSelectedJakpot('red')}
                    className={
                        selectedJakpot === 'red' ?
                            "w-[360px] h-[400px] cursor-pointer bg-cover bg-center flex flex-col items-center justify-center relative" :
                            "w-[280px] h-[310px] cursor-pointer bg-cover bg-center flex flex-col items-center justify-center relative"
                    }
                    style={{
                        backgroundImage: `url(${selectedJakpot === 'red' ? images.jackpotRed : images.jackpotDisable})`,
                    }}
                >
                  <div className={
                    selectedJakpot === "red" ? ' flex flex-row items-center absolute top-3 mr-3' : ' flex flex-row items-center absolute top-2 mr-3'
                  }>
                    <img src={images.coin} className='w-5 h-5' /> 
                    <span className='text-md  text-white ml-1'>25.75</span>
                  </div>

                  <div className='flex flex-col text-white text-center mt-3'>
                    <div className='text-2xl font-semibold text-yellow'>25.75</div>
                    <div className='text-xs text-white mt-2'>FUUUR</div>
                    <div className='text-sm text-yellow mt-2'>NORMAL</div>
                  </div>
                </div>
                <div
                    onClick={() => setSelectedJakpot('blue')}
                    className={
                        selectedJakpot === 'blue' ?
                            "w-[360px] h-[400px] cursor-pointer bg-cover bg-center flex flex-col items-center justify-center relative" :
                            "w-[280px] h-[310px] cursor-pointer bg-cover bg-center flex flex-col items-center justify-center relative"
                    }
                    style={{
                        backgroundImage: `url(${selectedJakpot === 'blue' ? images.jackpotBlue : images.jackpotDisable})`,
                    }}
                >
                  <div className={
                    selectedJakpot === "blue" ? ' flex flex-row items-center absolute top-3 mr-3' : ' flex flex-row items-center absolute top-2 mr-3'
                  }>
                    <img src={images.coin} className='w-5 h-5' /> 
                    <span className='text-md  text-white ml-1'>25.75</span>
                  </div>

                  <div className='flex flex-col text-white text-center mt-3'>
                    <div className='text-2xl font-semibold text-yellow'>25.75</div>
                    <div className='text-xs text-white mt-2'>FUUUR</div>
                    <div className='text-sm text-yellow mt-2'>NORMAL</div>
                  </div>
                </div>
            </div> */}
            {/* <div className='flex flex-row items-center justify-between w-full mx-auto jackpot'  
            >
                <div className='h-[400px] w-[33%] flex flex-row items-center justify-center'>
                    <div
                        onClick={() => setSelectedJakpot('purple')}
                        className={
                            selectedJakpot === 'purple' ?
                                "w-[360px] h-[400px] cursor-pointer bg-cover bg-center flex flex-col items-center justify-center relative" :
                                "w-[280px] h-[310px] cursor-pointer bg-cover bg-center flex flex-col items-center justify-center relative"
                        }
                        style={{
                            backgroundImage: `url(${selectedJakpot === 'purple' ? images.jackpotPurple : images.jackpotDisable})`,
                        }}
                    >
                        <div className={
                            selectedJakpot === "purple" ? ' flex flex-row items-center absolute top-3 mr-3' : ' flex flex-row items-center absolute top-2 mr-3'
                        }>
                            <img src={images.coin} className='w-5 h-5' />
                            <span className='text-md  text-white ml-1'>25.75</span>
                        </div>

                        <div className='flex flex-col text-white text-center mt-3'>
                            <div className='text-2xl font-semibold text-yellow'>25.75</div>
                            <div className='text-xs text-white mt-2'>FUUUR</div>
                            <div className='text-sm text-yellow mt-2'>NORMAL</div>
                        </div>
                    </div>
                </div>
                <div className='h-[400px] w-[33%] flex flex-row items-center justify-center'>

                    <div
                        onClick={() => setSelectedJakpot('blue')}
                        className={
                            selectedJakpot === 'blue' ?
                                "w-[360px] h-[400px] cursor-pointer bg-cover bg-center flex flex-col items-center justify-center relative" :
                                "w-[280px] h-[310px] cursor-pointer bg-cover bg-center flex flex-col items-center justify-center relative"
                        }
                        style={{
                            backgroundImage: `url(${selectedJakpot === 'blue' ? images.jackpotBlue : images.jackpotDisable})`,
                        }}
                    >
                        <div className={
                            selectedJakpot === "blue" ? ' flex flex-row items-center absolute top-3 mr-3' : ' flex flex-row items-center absolute top-2 mr-3'
                        }>
                            <img src={images.coin} className='w-5 h-5' />
                            <span className='text-md  text-white ml-1'>25.75</span>
                        </div>

                        <div className='flex flex-col text-white text-center mt-3'>
                            <div className='text-2xl font-semibold text-yellow'>25.75</div>
                            <div className='text-xs text-white mt-2'>FUUUR</div>
                            <div className='text-sm text-yellow mt-2'>NORMAL</div>
                        </div>
                    </div>
                </div>   <div className='h-[400px] w-[33%] flex flex-row items-center justify-center'>

                    <div
                        onClick={() => setSelectedJakpot('red')}
                        className={
                            selectedJakpot === 'red' ?
                                "w-[360px] h-[400px] cursor-pointer bg-cover bg-center flex flex-col items-center justify-center relative" :
                                "w-[280px] h-[310px] cursor-pointer bg-cover bg-center flex flex-col items-center justify-center relative"
                        }
                        style={{
                            backgroundImage: `url(${selectedJakpot === 'red' ? images.jackpotRed : images.jackpotDisable})`,
                        }}
                    >
                        <div className={
                            selectedJakpot === "red" ? ' flex flex-row items-center absolute top-3 mr-3' : ' flex flex-row items-center absolute top-2 mr-3'
                        }>
                            <img src={images.coin} className='w-5 h-5' />
                            <span className='text-md  text-white ml-1'>25.75</span>
                        </div>

                        <div className='flex flex-col text-white text-center mt-3'>
                            <div className='text-2xl font-semibold text-yellow'>25.75</div>
                            <div className='text-xs text-white mt-2'>FUUUR</div>
                            <div className='text-sm text-yellow mt-2'>NORMAL</div>
                        </div>
                    </div>
                </div>

            </div> */}

            <div className='flex flex-row items-center justify-between w-full mx-auto mt-10'
            >
                <div 
                onClick={() => setSelectedJakpot('purple')}
                className=' w-[33%] flex flex-row items-center justify-center relative cursor-pointer'>
                    <img src={selectedJakpot === 'purple' ? images.jackpotPurple : images.jackpotDisable} className={
                        selectedJakpot === 'purple' ? 'w-full h-auto' : 'w-[90%] sm:w-[80%]  h-auto'
                    } />
                    <div className='absolute top-0 text-white bg-transparent h-full w-full flex flex-col items-center justify-center'>
                        <div className='flex flex-row items-center absolute top-[3%]'>
                            <img src={images.coin} className='w-[8px] h-[8px] sm:w-[12px] md:w-5 sm:h-[12px] md:h-5' />
                            <span className='text-white text-xxxs sm:text-xs md:text-md lg:text-lg mr-[5px] ml-[1px]'>0.00</span>
                        </div>
                        <div className='flex flex-col  text-white text-center '>
                            <div className= {selectedJakpot === 'purple'?'text-[10px] sm:text-sm md:text-xl  md:font-semibold   text-yellow':'text-[10px] sm:text-sm md:text-lg  md:font-semibold   text-yellow'}>0</div>
                            <div className= {selectedJakpot === 'purple'?'text-[10px] sm:text-sm md:text-xl  mt-[1px] mb-[1px]   sm:mt-2 sm:mb-2   text-white':'text-[10px] sm:text-sm md:text-lg  mt-[1px] mb-[1px]   sm:mt-2 sm:mb-2   text-white'}>Waiting</div>
                            <div className={
                                selectedJakpot === 'purple' ?'text-[10px] sm:text-sm md:text-xl  md:font-semibold  text-yellow ' :'text-[10px] sm:text-sm md:text-lg  md:font-semibold  text-yellow '
                            }>SMALL</div>
                        </div>
                    </div>
                </div>
                <div 
                onClick={() => setSelectedJakpot('blue')}
                                className=' w-[33%] flex flex-row items-center justify-center relative cursor-pointer'>
                    <img src={selectedJakpot === 'blue' ? images.jackpotBlue : images.jackpotDisable} className={
                        selectedJakpot === 'blue' ? 'w-full h-auto' : 'w-[90%] sm:w-[80%] h-auto'
                    } />
                    <div className='absolute top-0 text-white bg-transparent h-full w-full flex flex-col items-center justify-center'>
                        <div className='flex flex-row items-center absolute top-[3%]'>
                            <img src={images.coin} className='w-[8px] h-[8px] sm:w-[12px] md:w-5 sm:h-[12px] md:h-5' />
                            <span className='text-white text-xxxs sm:text-xs md:text-md lg:text-lg mr-[5px] ml-[1px]'>25.75</span>
                        </div>

                        <div className='flex flex-col  text-white text-center '>
                            <div className= {selectedJakpot === 'blue'?'text-[10px] sm:text-sm md:text-xl  md:font-semibold   text-yellow':'text-[10px] sm:text-sm md:text-lg  md:font-semibold   text-yellow'}>25.75</div>
                            <div className= {selectedJakpot === 'blue'?'text-[10px] sm:text-sm md:text-xl  mt-[1px] mb-[1px]   sm:mt-2 sm:mb-2   text-white':'text-[10px] sm:text-sm md:text-lg  mt-[1px] mb-[1px]   sm:mt-2 sm:mb-2   text-white'}>FUUUR</div>
                            <div className={
                                selectedJakpot === 'blue' ?'text-[10px] sm:text-sm md:text-xl  md:font-semibold  text-yellow ' :'text-[10px] sm:text-sm md:text-lg  md:font-semibold  text-yellow '
                            }>NORMAL</div>
                        </div>

                    </div>
                </div>
                <div 
                onClick={() => setSelectedJakpot('red')}
                                className=' w-[33%] flex flex-row items-center justify-center relative cursor-pointer'>
                    <img src={selectedJakpot === 'red' ? images.jackpotRed : images.jackpotDisable} className={
                        selectedJakpot === 'red' ? 'w-full h-auto ' : 'w-[90%] sm:w-[80%] h-auto'
                    } />
                    <div className='absolute top-0 text-white bg-transparent h-full w-full flex flex-col items-center justify-center'>
                        <div className='flex flex-row items-center absolute top-[3%]'>
                            <img src={images.coin} className='w-[8px] h-[8px] sm:w-[12px] md:w-5 sm:h-[12px] md:h-5' />
                            <span className='text-white text-xxxs sm:text-xs md:text-md lg:text-lg mr-[5px] ml-[1px]'>0.00</span>
                        </div>

                        <div className='flex flex-col  text-white text-center '>
                            <div className= {selectedJakpot === 'red'?'text-[10px] sm:text-sm md:text-xl  md:font-semibold   text-yellow':'text-[10px] sm:text-sm md:text-lg  md:font-semibold   text-yellow'}>0</div>
                            <div className= {selectedJakpot === 'red'?'text-[10px] sm:text-sm md:text-xl  mt-[1px] mb-[1px]   sm:mt-2 sm:mb-2   text-white':'text-[10px] sm:text-sm md:text-lg  mt-[1px] mb-[1px]   sm:mt-2 sm:mb-2   text-white'}>Waiting</div>
                            <div className={
                                selectedJakpot === 'red' ?'text-[10px] sm:text-sm md:text-xl  md:font-semibold  text-yellow ' :'text-[10px] sm:text-sm md:text-lg  md:font-semibold  text-yellow '
                            }>HIGH</div>
                        </div>

                    </div>
                </div>




            </div>

            <div className='flex flex-row items-center mx-auto text-lineBlue bg-blue4 px-6 py-3 border-2 border-dashed border-lineBlue mt-4'>
                Jackpot Bonus Pot:
                <img src={images.coin} className='w-4 ml-3 mr-1' />
                <span>486.61</span>
            </div>
            <div className='w-full text-center mt-4 text-white text-lg font-semibold'>
                Bonus pot has a <span className='text-yellow'>0.1%</span> chance to be added to the normal jackpot.
            </div>
            <div className='mx-auto mt-4 flex flex-col sm:flex-row items-start gap-2'>
                <div className="flex flex-row items-center">
                    <img src={images.coin} className="w-5" />
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="text-white text-sm py-1 pl-2 focus:outline-none  bg-blue4  border border-lineBlue ml-2 sm:w-[120px] w-full"
                    />
                </div>
                <div className="flex flex-row items-center w-full sm:w-auto justify-between sm:justify-center sm:ml-3">
                    <div className=" bg-blue4 border border-lineBlue text-white text-sm flex items-center justify-center w-10 py-1 cursor-pointer active:opacity-70">
                        1/2
                    </div>
                    <div className="sm:ml-2 bg-blue4 border border-lineBlue text-white text-sm flex items-center justify-center w-10 py-1 cursor-pointer active:opacity-70">
                        x2
                    </div>
                    <div className="sm:ml-2 bg-blue4 border border-lineBlue text-white text-sm flex items-center justify-center w-10 py-1 cursor-pointer active:opacity-70">
                        Min
                    </div>{" "}
                    <div className="sm:ml-2 bg-blue4 border border-lineBlue text-white text-sm flex items-center justify-center w-10 py-1 cursor-pointer active:opacity-70">
                        Max
                    </div>
                </div>
                <div className="bg-yellow w-full sm:ml-3 border border-yellow  font-semibold text-black text-sm flex items-center justify-center sm:w-16 py-1 cursor-pointer active:opacity-70">
                    Join
                </div>
            </div>
        </div>
    )
}
