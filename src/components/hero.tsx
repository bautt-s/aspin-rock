import { FaMapMarkerAlt } from 'react-icons/fa'
import { BiSolidChevronRight, BiPlusMedical } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Link from 'next/link'

const gridItemsIndividual = [
    {
        link: '/articles/7ad5b077-d8e0-4844-9110-a324495e6e88',
        subtitle: 'INSTITUTIONAL/PROFESSIONAL CLIENTS',
        title: 'Unleashing the Power of Innovation: How AspinRock is Disrupting the Financial Industry',
        cta: 'Listen to the talk'
    },
    {
        link: '/articles/4efbd0cf-0261-4a06-b632-91ed23f9f95f',
        subtitle: 'INDIVIDUALS',
        title: 'Learn how cash and liquidity strategies can help individual investors',
        cta: 'Learn More'
    },
    {
        link: '/articles/2ea87f9b-3b85-4a0e-9d6b-7b9d09df23f2',
        subtitle: 'WEEKLY COMMENTARY',
        title: 'Recent bank crashes - what’s next?',
        cta: 'Read our insights'
    }
]

const gridItemsAdvisor = [
    {
        link: '/articles/83c9ab83-45db-498e-90c6-68dad27cb85c',
        subtitle: 'THE RISE OF REMOTE WORK',
        title: 'Navigating the Changing Landscape of Work-Life Balance.',
        cta: 'Read the latest on remote work'
    },
    {
        link: '/articles/9ab01e3b-b94b-4d32-aa02-da047850824f',
        subtitle: 'DIGITAL TRANSFORMATION OF BANKING',
        title: 'Exploring the Benefits and Considerations.',
        cta: 'Learn more about the changes'
    },
    {
        link: '/articles/e30de59b-97fa-41a6-b1ef-f88ef26d1145',
        subtitle: 'THE POWER OF LONG-TERM INVESTING',
        title: 'Building Wealth and Securing Financial Futures.',
        cta: 'Explore the outlook'
    }
]

const HeroSection: React.FC = () => {
    const view = useSelector((state: RootState) => state.app.view)

    return (
        <div className="w-full">
            <div className="w-full bg-[#1DA1F2] h-[48px] flex flex-row items-center px-[20px] md:px-[40px] lg:px-[80px] justify-center md:justify-normal">
                <FaMapMarkerAlt className='bg-white rounded-full p-[5px] text-4xl mr-[10px]' />
                <Link href='/updates/d50ba5d2-b3ae-47c7-a98c-0374b3742f71' className='hover:underline'>
                    Updates on our grand opening.
                </Link>
            </div>

            <section className='flex flex-row'>
                <div className={`flex flex-col px-[40px] lg:px-[80px] w-full lg:w-1/2 ${view === 'advisor' ? `py-[120px]` : 'py-[40px]'}`}>
                    <span className='text-sm font-[600] set-underline'>{view === 'individual' ? 'SCALING' : '2023 INVESTMENT TOOLS'}</span>

                    <h1 className='text-[50px] font-[700] max-w-[22ch] leading-[55px] my-[60px]'>
                        {view === 'individual'
                            ? 'Exploring new territory: how we’re changing finance.'
                            : 'Interest rate hikes: what this means for Advisors.'
                        }
                    </h1>

                    {view === 'individual' && <p className='text-xl text-left md:text-justify'>
                        At AspinRock, we&apos;re on a mission to revolutionize the financial services industry.
                        We believe that everyone should have access to financial services that are reliable, secure, and innovative.
                        With our cutting-edge technology and world-class team of experts, we&apos;re changing the game of finance.
                        <br /><br />
                        From our advanced trading algorithms to our personalized investment advice, we&apos;re committed to helping you achieve your financial goals.
                        Join us on this exciting journey to the moon and beyond, and let&apos;s make finance work for you.
                    </p>}

                    {view === 'advisor' && <p className='text-xl text-left md:text-justify'>
                        Rapidly rising interest rates could mean an advisory shift for advisors and their clients.
                        Check out the article below to see what this means for you.
                    </p>}

                    <Link className='flex flex-row items-center mt-[60px] group' 
                    href={view === 'individual' ? '/articles/b5577a68-3c5b-4f36-a2a5-30fa1a202d4a' : '/articles/8f89ffa4-8ba8-4545-bc18-00cd8ae40d6d'}>
                        <BiSolidChevronRight className='text-[#1DA1F2] text-2xl' />
                        <span className='font-[500] ml-[5px] group-hover:underline'>
                            {view === 'individual'
                                ? 'Read more about our vision'
                                : 'Read more about our ideas'
                            }
                        </span>
                    </Link>
                </div>

                <div className={`hidden lg:flex grow w-1/2 ${view === 'individual' ? 'hero-img' : 'hero-img-2'}`}></div>
            </section>

            {view === 'individual' ?
                <div className='bg-[#1DA1F2] lg:h-[300px] xl:h-[240px] w-screen grid lg:grid-cols-3 
                py-[40px] lg:py-0 lg:px-[20px] lg:items-center gap-y-[40px] lg:gap-y-0'>
                    {gridItemsIndividual.map((item, index) =>
                        <Link href={item.link} key={index} className={`flex flex-col gap-y-[25px] mx-[60px] lg:mx-auto xl:mx-0 xl:px-[60px] group
                        ${index === 1 && 'border-x-black xl:border-x-[1px] border-y-black border-y-[1px] lg:border-y-0 py-[15px] lg:py-0'}`}>
                            <span className='text-sm set-underline-black'>{item.subtitle}</span>
                            <h3 className='text-xl lg:text-base xl:text-lg 2xl:text-xl max-w-[40ch] lg:max-w-[30ch] xl:max-w-[40ch] lg:h-[65px] xl:h-[55px]'>
                                {item.title}
                            </h3>

                            <button className='flex flex-row items-center gap-x-[15px] xl:mt-[25px] 2xl:mt-0'>
                                <BiPlusMedical />
                                <span className='group-hover:underline'>{item.cta}</span>
                            </button>
                        </Link>
                    )}
                </div>
                : <div className='bg-[#1DA1F2] lg:h-[300px] xl:h-[240px] w-screen grid lg:grid-cols-3 
                py-[40px] lg:py-0 lg:px-[20px] lg:items-center gap-y-[40px] lg:gap-y-0'>
                    {gridItemsAdvisor.map((item, index) =>
                        <Link href={item.link} key={index} className={`flex flex-col gap-y-[25px] mx-[60px] lg:mx-auto xl:mx-0 xl:px-[60px] group
                        ${index === 1 && 'border-x-black xl:border-x-[1px] border-y-black border-y-[1px] lg:border-y-0 py-[15px] lg:py-0'}`}>
                            <span className='text-sm set-underline-black'>{item.subtitle}</span>
                            <h3 className='text-xl lg:text-base xl:text-lg 2xl:text-xl max-w-[40ch] lg:max-w-[30ch] xl:max-w-[40ch] lg:h-[65px] xl:h-[55px]'>
                                {item.title}
                            </h3>

                            <button className='flex flex-row items-center gap-x-[15px] xl:mt-[25px] 2xl:mt-0'>
                                <BiPlusMedical />
                                <span className='group-hover:underline'>{item.cta}</span>
                            </button>
                        </Link>
                    )}
                </div>
            }
        </div>
    )
}

export default HeroSection