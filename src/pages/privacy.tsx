import NavSection from '@/components/navbar'
import FooterSection from '@/components/footer'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { changeNav } from '@/store/appSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

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

const PrivacyPage: React.FC = () => {
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
                <title>AspinRock | Privacy</title>
            </Head>

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