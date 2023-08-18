import NavSection from '@/components/navbar'
import FooterSection from '@/components/footer'
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

const ContactPage: React.FC = () => {
    return (
        <div>
            <Head>
                <title>AspinRock | Contact</title>
            </Head>

            <NavSection />

            <div className="flex flex-col">
                <div className="h-[250px] bg-[#1DA1F2] w-full flex flex-col justify-center text-white px-[40px] lg:px-[80px]">
                    <span className='text-xs mb-[25px]'>WE’RE HERE FOR YOU</span>
                    <h1 className="text-5xl md:text-6xl">World Class Customer Service</h1>
                </div>

                <form className="bg-white px-[40px] lg:px-[80px] pt-[40px] pb-[160px]">
                    <h2 className='text-3xl'>Submit a form - a member of our team will be in touch within 24 hours</h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[60px] gap-y-[35px] mt-[45px]'>
                        <input className='bg-white border-b border-b-black' placeholder='First name *' />
                        <input className='bg-white border-b border-b-black' placeholder='Last name *' />
                        <input className='bg-white border-b border-b-black' placeholder='Organization name *' />
                        <input className='bg-white border-b border-b-black' placeholder='Organization *' />
                        <input className='bg-white border-b border-b-black' placeholder='Title *' />
                        <input className='bg-white border-b border-b-black' placeholder='Business email *' />
                        <input className='bg-white border-b border-b-black' placeholder='Country  *' />
                    </div>
                </form>
            </div>

            <FooterSection />
        </div>
    )
}

export default ContactPage