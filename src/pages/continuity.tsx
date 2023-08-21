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

const ContinuityPage: React.FC = () => {
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
                <title>AspinRock | Continuity Disclosure</title>
            </Head>

            <NavSection />

            <div className="flex flex-col">
                <div className="h-[250px] bg-[#1DA1F2] w-full flex flex-col justify-center text-white px-[40px] lg:px-[80px]">
                    <h1 className="text-6xl">Continuity Disclosure</h1>
                </div>

                <div className="bg-white px-[40px] lg:px-[80px] pt-[40px] pb-[160px]">
                    <p className="max-w-[70ch]">
                        AspinRock Inc. is committed to providing our customers with uninterrupted service. We understand that a significant business disruption (SBD) can have a major impact on our customers, and we are committed to doing everything we can to minimize the impact.
                        <br /><br />
                        Our SBD plan is designed to protect our customers' assets, continue to provide services, and communicate with our customers in the event of an SBD. Our plan is compliant with all applicable laws and regulations, including the North Carolina Continuity of Operations (COOP) Plan Act.
                        <br /><br />
                        Our SBD plan includes the following:
                        <br /><br />
                        A team of dedicated employees who will be responsible for coordinating the response to an SBD. This team will be trained on our SBD plan and will be responsible for implementing the plan in the event of an SBD.
                        A backup site where we can continue to operate in the event of a disruption to our primary site. Our backup site is located in a different geographic location than our primary site, which will help to mitigate the impact of a natural disaster or other event that could disrupt our operations.
                        A disaster recovery plan that outlines how we will restore our systems and data in the event of a disaster. Our disaster recovery plan includes detailed procedures for restoring our systems and data, as well as a list of the resources that we will need to do so.
                        A communication plan that will keep our customers informed about the status of our services during an SBD. Our communication plan includes a list of contact methods for our customers, as well as procedures for communicating with our customers during an SBD.
                        We regularly test our SBD plan to ensure that it is effective. We also update our plan as needed to reflect changes in our business.
                        <br /><br />
                        If you have any questions about our SBD plan, please contact us at [email protected]
                        <br /><br />
                        Here are some additional things to keep in mind about continuity disclosure in North Carolina:
                        <br /><br />
                        The North Carolina COOP Plan Act requires all businesses that provide essential services to have a SBD plan in place.
                        The SBD plan must be reviewed and updated annually.
                        The SBD plan must be made available to the public upon request.
                        By having a comprehensive and compliant SBD plan in place, AspinRock Inc. can help to protect its customers and its business in the event of a significant business disruption.
                    </p>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default ContinuityPage