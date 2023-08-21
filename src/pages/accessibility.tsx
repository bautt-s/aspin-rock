import FooterSection from "@/components/footer"
import NavSection from "@/components/navbar"
import Head from "next/head"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { changeNav } from "@/store/appSlice"

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

const AccessibilityPage: React.FC = () => {
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
                <title>AspinRock | Accessibility</title>
            </Head>

            <NavSection />

            <div className="flex flex-col">
                <div className="h-[250px] bg-[#1DA1F2] w-full flex flex-col justify-center text-white px-[40px] lg:px-[80px]">
                    <h1 className="text-5xl md:text-6xl">A Strong Commitment To Accessibility </h1>
                </div>

                <div className="bg-white px-[40px] lg:px-[80px] pt-[40px] pb-[160px] flex flex-col">
                    <p className="max-w-[70ch]">
                        AspinRock is dedicated to enabling a greater number of individuals to achieve financial security,
                        and an essential aspect of this objective is guaranteeing the accessibility of our products and services to people of all abilities.
                        This is why we have embraced the Web Content Accessibility Guidelines (WCAG 2.1) Level AA as the benchmark we aim to fulfill for all our digital content.
                    </p>

                    <h3 className="text-4xl mt-[45px]">Let us Know</h3>
                    <p className="mt-[20px] max-w-[70ch]">
                        If you have any issues at at all using our website, or have any tips on how we 
                        can improve accessibility, contact us below - we’d love to hear from you.
                    </p>

                    <h3 className="text-4xl mt-[45px]">Send us an Email:</h3>
                    <p className="mt-[20px] max-w-[70ch]">
                        Email: accessibility@aspinrock.com
                    </p>

                    <h3 className="text-4xl mt-[45px]">Give us a Call:</h3>
                    <p className="mt-[20px] max-w-[70ch]">
                        Phone (Toll Free): +1(919)-349-0862
                    </p>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default AccessibilityPage