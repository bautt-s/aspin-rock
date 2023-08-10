import { useEffect } from 'react'
import NavSection from '../landing-page/navbar'
import FooterSection from '../landing-page/footer'

const PrivacyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, [])

    return (
        <div>
            <NavSection />

            <div className="h-[250px] bg-[#1DA1F2] w-full flex flex-col justify-center text-white px-[40px] lg:px-[80px]">
                    <h1 className="text-5xl md:text-6xl">Privacy - Cookies</h1>
                </div>

                <div className='bg-white px-[40px] lg:px-[80px] pb-[140px] pt-[40px]'>
                    <p>This website does not collect cookies or personal data.</p>
                </div>

            <FooterSection />
        </div>
    )
}

export default PrivacyPage