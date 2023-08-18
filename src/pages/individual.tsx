import Landing from "@/components/landing-ind"
import Head from "next/head"
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

export default function IndividualPage() {
    return (
        <>
            <Head>
                <title>AspinRock | Home</title>
            </Head>
            <Landing />
        </>
    )
}