import { FaMapMarkerAlt } from 'react-icons/fa'
import { BiSolidChevronRight, BiPlusMedical } from 'react-icons/bi'

const heroImg = require('../static/hero-img.png')

const gridItems = [
    {
        subtitle: 'INSTITUTIONAL/PROFESSIONAL CLIENTS',
        title: 'Unleashing the Power of Innovation: How AspinRock is Disrupting the Financial Industry',
        cta: 'Listen to the talk'
    },
    {
        subtitle: 'INDIVIDUALS',
        title: 'Learn how cash and liquidity strategies can help individual investors',
        cta: 'Learn More'
    },
    {
        subtitle: 'WEEKLY COMMENTARY',
        title: 'Recent bank crashes - what’s next?',
        cta: 'Read our insights'
    }
]

const HeroSection: React.FC = () => {
    return (
        <div className="w-full">
            <div className="w-full bg-[#1DA1F2] h-[48px] flex flex-row items-center px-[80px]">
                <FaMapMarkerAlt className='bg-white rounded-full p-[5px] text-4xl mr-[10px]' />
                <span>Updates on our grand opening.</span>
            </div>

            <section className='flex flex-row'>
                <div className='flex flex-col p-[80px] w-1/2'>
                    <span className='text-sm font-[600] set-underline'>SCALING</span>

                    <h1 className='text-[50px] font-[700] max-w-[22ch] leading-[55px] my-[60px]'>
                        Exploring new territory: how we’re changing finance.
                    </h1>

                    <p className='text-xl text-justify'>
                        At AspinRock, we're on a mission to revolutionize the financial services industry.
                        We believe that everyone should have access to financial services that are reliable, secure, and innovative.
                        With our cutting-edge technology and world-class team of experts, we're changing the game of finance.
                        <br /><br />
                        From our advanced trading algorithms to our personalized investment advice, we're committed to helping you achieve your financial goals.
                        Join us on this exciting journey to the moon and beyond, and let's make finance work for you.
                    </p>

                    <div className='flex flex-row items-center mt-[60px]'>
                        <BiSolidChevronRight className='text-[#1DA1F2] text-2xl' />
                        <span className='font-[500] ml-[5px]'>Read more about our vision</span>
                    </div>
                </div>

                <div className='grow w-1/2 hero-img'></div>
            </section>

            <div className='bg-[#1DA1F2] h-[240px] w-screen grid grid-cols-3 px-[20px] items-center'>
                {gridItems.map((item, index) => 
                    <div key={index} className={`flex flex-col gap-y-[25px] px-[60px] ${index === 1 && 'border-x-black border-x-[1px]'}`}>
                        <span className='text-sm set-underline-black'>{item.subtitle}</span>
                        <h3 className='text-xl max-w-[40ch] h-[55px]'>{item.title}</h3>

                        <button className='flex flex-row items-center gap-x-[15px]'>
                            <BiPlusMedical />
                            <span>{item.cta}</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeroSection