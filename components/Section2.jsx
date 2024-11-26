import React from 'react'
import Image from 'next/image'
import car1 from "../components/images/car1.png"
import car2 from "../components/images/car2.png"
import car3 from "../components/images/car3.png"
import car4 from "../components/images/car4.png"

const Section2 = () => {
    return (
        <div className='w-full h-[100vh] max-sm:h-auto bg-[#ebebeb]'>
            <div className='w-[98%] max-sm:w-[98%] ml-[1%] pt-14 flex mt-10 justify-between max-sm:block'>
                <p className='text-7xl bold max-sm:text-[7rem] text-[#231f20]'>SHOP</p>
                <p className='text-[#231f20] tiny pt-14 relative max-sm:top-[2rem] mt-4 max-sm:text-[0.8rem] max-sm:pl-2 underline'>VISIT SHOP</p>
                <p className='text-7xl max-sm:text-[7rem] bold text-[#231f20] max-sm:mt-[-110px]'>NOW</p>
            </div>
            <div className='w-full mt-12 flex ml-3 max-md:h-[45vh] max-md:w-[98%] max-sm:ml-0 max-sm:block max-sm:h-auto h-[60vh]'>
                <div className='w-[24%] max-sm:w-[96%] max-sm:ml-3 max-sm:h-[25rem] h-full ima overflow-hidden bg-[#e3e3e3]'>
                    <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
                        <p className='liney'>Dice</p>
                        <p className='text-[12px] mt-1'>Configuration 14</p>
                    </div>
                    <Image src={car1} width={200} height={200} alt='' className='mt-8 max-md:mt-[-2rem] max-sm:mt-16 cale ml-10 max-sm:ml-[24%] max-md:ml-0' />
                    <div className='flex mt-8 conti ml-2'>
                        <p className='text-[10px] bold mt-8'>EUR 4110</p>
                        <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
                    </div>
                </div>
                <div className='w-[24%] max-sm:w-[96%] max-sm:ml-3 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
                    <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
                        <p className='liney'>Dice</p>
                        <p className='text-[12px] mt-1'>Configuration 14</p>
                    </div>
                    <Image src={car2} width={200} height={200} alt='' className='mt-8 max-md:mt-[-2rem] max-sm:mt-16 cale ml-10 max-sm:ml-[24%] max-md:ml-0' />
                    <div className='flex mt-8 conti ml-2'>
                        <p className='text-[10px] bold mt-8'>EUR 4110</p>
                        <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
                    </div>
                </div>
                <div className='w-[24%] max-sm:w-[96%] max-sm:ml-3 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
                    <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
                        <p className='liney'>Dice</p>
                        <p className='text-[12px] mt-1'>Configuration 14</p>
                    </div>
                    <Image src={car3} width={200} height={200} alt='' className='mt-8 max-md:mt-[-2rem] max-sm:mt-16 cale ml-10 max-sm:ml-[24%] max-md:ml-0' />
                    <div className='flex mt-8 conti ml-2'>
                        <p className='text-[10px] mt-8 bold'>EUR 4110</p>
                        <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
                    </div>
                </div>
                <div className='w-[24%] max-sm:w-[96%] max-sm:ml-3 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
                    <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
                        <p className='liney'>Dice</p>
                        <p className='text-[12px] mt-1'>Configuration 14</p>
                    </div>
                    <Image src={car4} width={200} height={200} alt='' className='mt-8 max-md:mt-[-2rem] max-sm:mt-16 cale ml-10 max-sm:ml-[24%] max-md:ml-0' />
                    <div className='flex mt-8 conti ml-2'>
                        <p className='text-[10px] mt-8 bold'>EUR 4110</p>
                        <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2