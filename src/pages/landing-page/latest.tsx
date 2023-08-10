import { BsTwitter } from 'react-icons/bs'
import { BiPlusMedical } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const tweetImg1 = require('../../static/tweet-1.png')
const tweetImg2 = require('../../static/tweet-2.png')
const tweetImg3 = require('../../static/tweet-3.png')

const LatestSection: React.FC = () => {
    return (
        <div className="px-[40px] lg:px-[80px] py-[80px] bg-white flex flex-col">
            <div>
                <h1 className="text-5xl lg:text-[55px] text-center leading-[60px] xl:text-left xl:leading-normal">
                    The Latest from <strong className='font-[400] underline'>AspinRock</strong>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[35px] mt-[60px]">
                    <div className="shadow-[0px_0px_10px_6px_rgba(0,0,0,0.1)] flex flex-col">
                        <div className='flex flex-row items-center gap-x-[10px]'>
                            <div className='bg-[#1DA1F2] p-[10px]'>
                                <BsTwitter className='text-xl' />
                            </div>

                            <span className='text-sm'>@AspinRock1 · 02 April</span>
                        </div>

                        <img src={tweetImg1} className='px-[15px] py-[60px]' />
                    </div>

                    <div className="shadow-[0px_0px_10px_6px_rgba(0,0,0,0.1)] flex flex-col">
                        <div className='flex flex-row items-center gap-x-[10px]'>
                            <div className='bg-[#1DA1F2] p-[10px]'>
                                <BsTwitter className='text-xl' />
                            </div>

                            <span className='text-sm'>@AspinRock1 · 02 May</span>
                        </div>

                        <img src={tweetImg2} className='px-[15px] py-[60px] ' />
                    </div>

                    <div className="shadow-[0px_0px_10px_6px_rgba(0,0,0,0.1)] flex flex-col">
                        <div className='flex flex-row items-center gap-x-[10px]'>
                            <div className='bg-[#1DA1F2] p-[10px]'>
                                <BsTwitter className='text-xl' />
                            </div>

                            <span className='text-sm'>@AspinRock1 · 26 April</span>
                        </div>

                        <img src={tweetImg3} className='px-[15px] py-[60px] ' />
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col xl:flex-row mt-[120px]'>
                <div>
                    <span className='text-sm'>WHAT WE DO</span>
                    <h2 className='text-[40px] my-[20px]'>AspinRock in America</h2>

                    <p className='max-w-[90ch] xl:max-w-[60ch] 2xl:max-w-[80ch]'>
                        As a financial services company, we recognize that our success is directly tied to the success and satisfaction of our stakeholders.
                        That's why we're committed to putting you at the forefront of everything we do.
                        Whether you're an investor looking to grow your wealth, a small business owner seeking
                        financing options, or simply someone looking for sound financial advice, we're here to help.
                    </p>

                    <button className='flex flex-row mt-[20px] items-center gap-x-[10px]'>
                        <BiPlusMedical className='text-[#1DA1F2]' />
                        <span>Who we serve</span>
                    </button>
                </div>

                <div className='xl:ml-auto px-[20px] py-[25px] h-fit 2xl:h-fit w-full xl:w-[40%] mt-[60px] xl:mt-0 shadow-[0px_0px_10px_6px_rgba(0,0,0,0.1)]'>
                    <span className='text-sm'>READ OUR BLOG</span>

                    <ul className='flex flex-col mt-[35px] gap-y-[20px]'>
                        <li className='flex flex-row items-center'>
                            <BiPlusMedical className='text-[#1DA1F2] mr-[10px]' />
                            <Link to='/letter-ceo'>Opening Statement</Link>
                        </li>

                        <li className='flex flex-row items-center border-y-[1px] border-black py-[15px]'>
                            <BiPlusMedical className='text-[#1DA1F2] mr-[10px]' />
                            Recent Regulatory Developments
                        </li>

                        <li className='flex flex-row items-center'>
                            <BiPlusMedical className='text-[#1DA1F2] mr-[10px]' />
                            Embracing Transparency and Accountability
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LatestSection