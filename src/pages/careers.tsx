import { BiSolidChevronRight } from 'react-icons/bi'
import FooterSection from "../components/footer"
import NavSection from "../components/navbar"
import careersImg1 from '../static/careers-1.png'
import careersImg3 from '../static/careers-3.png'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeNav } from '@/store/appSlice'
import Image from 'next/image'
import Head from 'next/head'

const CareersPage: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeNav('404'))
        
        return () => {
            dispatch(changeNav(undefined))
        };
    })

    return (
        <div>
            <Head>
                <title>AspinRock | Careers</title>
            </Head>

            <NavSection />

            <div className="flex flex-col bg-black justify-center items-center text-white px-[40px] lg:px-[80px] pt-[80px] pb-[120px]">
                <h1 className="text-5xl md:text-6xl text-center">Careers with us</h1>

                <span className="text-lg font-[700] mt-[35px]">JUMPSTART YOUR CAREER</span>
                <span className="mt-[10px]">What do you want to do? Where do you want to go?</span>
            </div>

            <div className="flex flex-col text-center justify-center items-center px-[40px] lg:px-[80px] pt-[80px] pb-[120px]">
                <h1 className="text-5xl md:text-6xl">Embrace the Path of Greatness</h1>

                <p className="text-lg max-w-[90ch] mt-[15px]">
                    Welcome to our Open Jobs page, where we recognize the power of investing in exceptional individuals like you.
                    We firmly believe that our collective success hinges upon the unwavering commitment to excellence displayed by our dedicated team.
                </p>

                <h2 className="text-3xl md:text-4xl mt-[80px]">Jobs recommended for you</h2>
                <span className="text-lg mt-[15px]">We&apos;re sorry, there are no jobs available.</span>
            </div>

            <div className="bg-[#1DA1F2] px-[40px] lg:px-[80px] flex flex-col items-center pt-[40px] pb-[80px]">
                <h1 className="text-3xl md:text-4xl text-center">Forge Your Destiny with Us</h1>

                <div className="flex flex-col lg:flex-row items-center gap-x-[45px] mt-[45px]">
                    <Image src={careersImg1.src} alt='destiny-aspin' width={450} height={300} />

                    <p className="text-lg max-w-[35ch] mt-[40px] lg:mt-0">
                        Within our ranks, we value the fortitude of
                        those who bring diverse perspectives, a
                        relentless pursuit of perfection, and an
                        unyielding passion for greatness. Together, we
                        strive to leave an indelible mark on the world
                        and enact profound transformations within our
                        industry.
                    </p>
                </div>
            </div>

            <div className="bg-white flex flex-col lg:px-[80px] pt-[80px] justify-center items-center pb-[140px] lg:pb-[240px]">
                <h1 className="text-3xl md:text-4xl text-center">Your Day-to-Day at AspinRock</h1>

                <div className="grid grid-cols-3 text-center mt-[60px]">
                    <div className="flex flex-col">
                        <span className="bg-[#7DE52B] py-[35px] px-[15px]">Work-Life Balance<br /> and Well-being</span>

                        <p className="max-w-[40ch] mx-auto mt-[25px] px-[20px]">
                            We recognize the significance of work-life balance and are committed to offering exceptional
                            benefits that promote the harmony between work and personal life for our employees.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <span className="bg-[#7DE52B] py-[35px] px-[15px]">Professional Development<br /> and Growth</span>

                        <p className="max-w-[40ch] mx-auto mt-[25px] px-[20px]">
                            We hold the belief that by embracing a range of diverse experiences and backgrounds, we can
                            foster collaboration that leads to enhanced outcomes for our employees, clients, and society at large.
                            This commitment to diversity fuels our dedication to professional development and growth.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <span className="bg-[#7DE52B] py-[35px] px-[15px]">Flourishing Culture of Diversity<br /> and Inclusion</span>

                        <p className="max-w-[40ch] mx-auto mt-[25px] px-[20px]">
                            Our unwavering commitment lies in nurturing and advancing the growth of our employees, empowering them
                            to realize their utmost potential within our flourishing culture of diversity and inclusion.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row w-full">
                <div className="lg:w-1/2 bg-[#FFCE00] flex flex-col p-[40px] lg:p-[80px]">
                    <h4 className="text-2xl font-[600]">Technology Careers</h4>

                    <p className="mt-[25px]">
                        At AspinRock, we offer exciting and rewarding technology career opportunities. Join our team and be part
                        of an innovative environment where technology drives our success. As a technology professional at
                        AspinRock, you&apos;ll have the chance to work on cutting-edge projects, collaborate with talented individuals,
                        and contribute to the development of groundbreaking solutions. Whether you specialize in software
                        development, data analytics, cybersecurity, or IT infrastructure, we provide a supportive and dynamic
                        workplace that encourages growth and learning. With a commitment to staying at the forefront of
                        technological advancements, we offer continuous training and development programs to help you expand
                        your skills and expertise. Join us and embark on a fulfilling technology career journey with AspinRock.
                    </p>
                </div>

                <div className="w-full h-[300px] lg:h-auto lg:w-auto lg:grow careers-2"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center pt-[200px] lg:pt-[400px] pb-[180px] px-[40px] lg:px-[80px] gap-x-[60px]">
                <Image src={careersImg3.src} alt='alumni-aspin' width={500} height={300} />

                <div className='text-center mt-[40px] lg:mt-0'>
                    <h3 className='text-2xl'>Alumni?</h3>

                    <p className='max-w-[43ch] text-lg my-[25px]'>
                        Become a part of our alumni community and connect with fellow members,
                        gain exclusive access to content and events, and stay connected as a valued member of our body.
                    </p>

                    <div className='flex flex-row items-center mx-auto w-fit relative'>
                        <BiSolidChevronRight className='text-xl' />
                        <span>Join us on LinkedIn</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col px-[40px] lg:px-[80px] items-center bg-[#7DE52B] py-[40px]'>
                <div>
                    <h2 className='text-xl mb-[25px] font-[500]'>Warning!</h2>

                    <p className='max-w-[115ch] text-sm'>
                        We kindly ask you to remain vigilant regarding fraudulent job postings that may appear on external websites claiming to be associated with AspinRock.
                        We want to assure you that all legitimate job opportunities at AspinRock can be found exclusively on our official careers site.
                        <br /><br />
                        Please rely on this source when seeking information about our externally recruited positions.
                        AspinRock adheres to a strict policy where we never conduct candidate interviews through chat or text messages, nor do we request any form of upfront
                        payment or deposit. We take these matters seriously and prioritize the security of our candidates. If you suspect that you have encountered such a scam,
                        we urge you to promptly contact us at informationsecurity@aspinrock.com. Please provide any pertinent details you may have so that we can investigate
                        the matter thoroughly.
                    </p>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default CareersPage