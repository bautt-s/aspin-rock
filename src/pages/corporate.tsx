import { useDispatch } from 'react-redux'
import NavSection from '@/components/navbar'
import { useEffect } from 'react'
import { changeNav } from '@/store/appSlice'
import FooterSection from '@/components/footer'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BiSolidChevronRight } from 'react-icons/bi'
import Image from 'next/image'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }: { locale: any }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'footer',
            ])),
        },
    }
}

const CorporatePage: React.FC = () => {
    const dispatch = useDispatch()

    const handleScroll = () => {
        document.getElementById('mission')?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        dispatch(changeNav('corporate'))

        return () => {
            dispatch(changeNav(undefined))
        };
    })

    return (
        <div className='overflow-hidden'>
            <Head>
                <title>AspinRock | Corporate</title>
            </Head>

            <NavSection />

            <div className='w-full'>
                <div className='flex flex-col'>
                    <div className="w-full bg-[#1DA1F2] h-[48px] flex flex-row items-center px-[20px] md:px-[40px] lg:px-[80px] justify-center md:justify-normal">
                        <FaMapMarkerAlt className='bg-white rounded-full p-[5px] text-4xl mr-[10px]' />
                        <span>Updates on our grand opening.</span>
                    </div>

                    <div className='flex flex-col-reverse lg:flex-row bg-black px-[40px] lg:px-[80px] lg:items-center py-[80px] lg:gap-x-[60px] 2xl:gap-x-0'>
                        <div className='flex flex-col text-white'>
                            <h1 className='text-4xl xl:text-[56px] max-w-[15ch] xl:leading-[60px] 
                            mt-[25px] xl:max-w-none lg:mt-0 2xl:leading-[60px]'>
                                More on AspinRock in America
                            </h1>

                            <p className='max-w-[75ch] mt-[35px] mb-[40px]'>
                                Come change the world with us!
                            </p>

                            <button className='flex flex-row items-center bg-white w-fit py-[15px] px-[35px] relative'>
                                <BiSolidChevronRight className='text-[#1DA1F2] text-2xl absolute left-[15px]' />
                                <span className='font-[500] ml-[5px] text-black' onClick={handleScroll}>Explore our purpose</span>
                            </button>
                        </div>

                        <Image src='/hero-corporate.png' alt='corporate-hero' height={400} width={550}  
                        className='lg:ml-auto md:h-[300px] lg:h-[500px] lg:w-[400px] xl:w-auto xl:h-auto object-cover object-center' />

                        
                    </div>

                    <div className='pt-[40px] px-[40px] lg:px-[80px] pb-[240px]' id='mission'>
                        <p className='text-xl border-b-[2px] border-black pb-[20px] pr-[180px] w-fit mb-[45px]'>
                            We’re here to change the world for the better.
                            <br />Join us on our mission.
                        </p>

                        <span className='text-[32px]'>We’re on a mission to change the world for the better through...</span>

                        <div className='flex flex-col mt-[45px] gap-y-[80px] xl:gap-y-[25px]'>
                            <div className='flex flex-col xl:flex-row xl:items-center gap-x-[120px]'>
                            <Image src='/corporate-1.png' alt='corporate-image' width={700} height={400}
                                className='w-[600px] 2xl:w-[700px] h-[400px] object-cover' />
                                

                                <div className='flex flex-col mt-[35px] xl:mt-0'>
                                    <h3 className='text-[40px]'>Financial safety:</h3>

                                    <p className='max-w-[70ch]'>
                                        We aim to support millions of people in investing their money to build savings that
                                        will have long-term advantages for them in the future. As it is becoming progressively
                                        harder to save for retirement and other goals, we are looking for solutions to help
                                        more individuals invest for their future needs.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col xl:flex-row xl:items-center gap-x-[120px]'>
                                <Image src='/corporate-2.png' alt='corporate-image' width={700} height={400}
                                className='w-[600px] 2xl:w-[700px] h-[400px] object-cover' />

                                <div className='flex flex-col mt-[35px] xl:mt-0'>
                                    <h3 className='text-[40px]'>Investments for all:</h3>

                                    <p className='max-w-[70ch] mb-[25px] mt-[15px]'>
                                        We bring people of all backgrounds together in investing. 
                                    </p>

                                    <button className='flex flex-row items-center'>
                                        <BiSolidChevronRight className='text-xl text-[#1DA1F2]' />
                                        <span className='ml-[5px]'>TRADEWISE - coming 2027</span>
                                    </button>
                                </div>
                            </div>

                            <div className='flex flex-col xl:flex-row xl:items-center gap-x-[120px]'>
                                <Image src='/corporate-3.png' alt='corporate-image' width={700} height={400}
                                className='w-[600px] 2xl:w-[700px] h-[400px] object-cover' />

                                <div className='flex flex-col mt-[35px] xl:mt-0'>
                                    <h3 className='text-[40px]'>Sustainability:</h3>

                                    <p className='max-w-[70ch] mt-[15px] mb-[25px]'>
                                        We advance sustainable investing because our conviction is it delivers better outcomes 
                                        for our investors. As the world moves towards a net zero economy, how can we help 
                                        investors prepare for the transition?
                                    </p>

                                    <button className='flex flex-row items-center'>
                                        <BiSolidChevronRight className='text-xl text-[#1DA1F2]' />
                                        <span className='ml-[5px]'>Our commitment to sustainability</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col mt-[120px] md:mt-[240px] border-t border-black pt-[40px] md:pt-[80px] pb-[40px]'>
                            <h2 className='text-[32px]'>Who we serve</h2>

                            <div className='flex flex-col md:flex-row mt-[40px] md:mt-[60px] lg:px-[40px] gap-x-[45px] gap-y-[25px]'>
                                <div className='flex flex-col'>
                                    <span className='text-xl'>Institutions</span>

                                    <p className='max-w-[30ch]'>Helping institutions.</p>
                                </div>

                                <div className='flex flex-col md:ml-auto'>
                                    <span className='text-xl'>Financial advisors</span>

                                    <p className='max-w-[30ch]'>Allowing advisors to help more people achieve financial freedom.</p>
                                </div>

                                <div className='flex flex-col md:ml-auto'>
                                    <span className='text-xl'>Governments</span>

                                    <p className='max-w-[30ch]'>Financing new growth to serve every economy. </p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#1DA1F2] px-[80px] py-[60px]'>
                            <h1 className='text-[40px] mb-[40px]'>Values we stand for</h1>

                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-[15px] gap-y-[15px]'>
                                <div className='bg-white px-[20px] pt-[20px] pb-[80px]'>
                                    <span className='text-xs'>BEING A GOOD STEWARD</span>

                                    <h4 className='text-2xl mt-[10px] lg:max-w-[25ch]'>
                                        Standing up for those who can’t stand up for themselves.
                                    </h4>
                                </div>

                                <div className='bg-white px-[20px] pt-[20px] pb-[80px]'>
                                    <span className='text-xs'>SUSTAINABILITY FOR OUR WORLD</span>

                                    <h4 className='text-2xl mt-[10px] lg:max-w-[25ch]'>
                                        Empowering net-zero carbon emissions in 2023
                                    </h4>
                                </div>

                                <div className='bg-white px-[20px] pt-[20px] pb-[80px]'>
                                    <span className='text-xs'>INCLUSION</span>

                                    <h4 className='text-2xl mt-[10px] lg:max-w-[25ch]'>
                                        Fostering an environment where everyone feels like they belong. 
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default CorporatePage