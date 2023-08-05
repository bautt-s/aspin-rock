import { BiSolidChevronRight } from 'react-icons/bi'

const institutionalVision = require('../static/institutional-vision.png')

const InstVision: React.FC = () => {
    return (
        <div className="flex flex-col px-[40px] lg:px-[80px] py-[80px]">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
                <div className="flex flex-col">
                    <h1 className='text-[40px]'>The Institutional Vision</h1>

                    <p className='max-w-[60ch] mt-[20px] mb-[25px]'>
                        At AspinRock, we collaborate with leading experts and utilize quantum computing to provide institutions
                        with unmatched investment insights and analysis across asset classes, investment strategies, and markets.
                    </p>

                    <button className='bg-black flex flex-row items-center py-[10px] w-[200px] pr-[25px]'>
                        <BiSolidChevronRight className='text-xl text-[#1DA1F2] ml-[15px]' />
                        <span className='text-white mx-auto'>Learn More</span>
                    </button>
                </div>

                <img src={institutionalVision} className='ml-auto mb-[25px]' />
            </div>

            <div className='flex flex-col mt-[60px]'>
                <h1 className='text-3xl'>Learn More</h1>

                <form className='flex flex-col mt-[40px]'>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-[60px] gap-y-[40px]'>
                        <input className='bg-white border-b border-black' placeholder='First Name *' />
                        <input className='bg-white border-b border-black' placeholder='Last Name *' />
                        <input className='bg-white border-b border-black' placeholder='Organization Type *' />
                        <input className='bg-white border-b border-black' placeholder='Organization *' />
                        <input className='bg-white border-b border-black' placeholder='Title *' />
                        <input className='bg-white border-b border-black' placeholder='Business Email *' />
                        <input className='bg-white border-b border-black' placeholder='Country *' />
                    </div>

                    <div className='flex flex-col md:flex-row md:items-center mt-[40px] gap-x-[40px]'>
                        <p className='text-xs'>
                            By submitting this form, you agree to be contacted by AspinRock. 
                            Any data collected will be processed according to AspinRock’s privacy policy. 
                            You may opt out at any time.
                        </p>

                        <button className='md:ml-auto bg-black hover:bg-[#131313] text-white px-[25px] py-[10px] transition-colors duration-300 mt-[40px] w-fit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InstVision