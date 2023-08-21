import Head from "next/head"
import FooterSection from "../components/footer"
import NavSection from "../components/navbar"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
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

const Page606: React.FC = () => {
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
                <title>AspinRock | 606 Disclosure</title>
            </Head>

            <NavSection />

            <div className="flex flex-col">
                <div className="h-[250px] bg-[#1DA1F2] w-full flex flex-col justify-center text-white px-[40px] lg:px-[80px]">
                    <h1 className="text-6xl">606 Disclosure</h1>
                </div>

                <div className="bg-white px-[40px] lg:px-[80px] pt-[40px] pb-[160px]">
                    <p className="max-w-[70ch]">
                        AspinRock currently does not offer any in-house execution services. 
                        Instead, we plan to rely on TD Ameritrade for executing trades and routing orders involving securities. 
                        If there were any changes to our business model in the future that involve routing non-directed orders in NMS securities, 
                        we would ensure compliance with the disclosure requirement of Rule 606.
                    </p>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default Page606