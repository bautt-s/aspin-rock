import NavSection from '@/components/navbar'
import FooterSection from '@/components/footer'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeNav } from '@/store/appSlice'

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

const TermsPage: React.FC = () => {
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
                <title>AspinRock | Terms & Conditions</title>
            </Head>

            <NavSection />

            <div className="h-[250px] bg-[#1DA1F2] w-full flex flex-col justify-center text-white px-[40px] lg:px-[80px]">
                <h1 className="text-5xl md:text-6xl">Terms & Conditions</h1>
            </div>

            <div className='bg-white px-[40px] lg:px-[80px] pb-[140px] pt-[40px] flex flex-col gap-y-[40px] max-w-[94ch]'>
                <p>
                    Please carefully review these Terms and Conditions (&quot;Terms&quot;) prior to using the services outlined in
                    this document. By accessing the website found at www.aspinrock.com (&quot;Website&quot;), you acknowledge
                    that you have read and understood these Terms and agree to comply with them. If you do not agree
                    to all the terms and conditions stated in this agreement, you are not authorized to use these
                    services, and it is advised that you refrain from using this website.
                </p>

                <p>
                    AspinRock reserves the right to modify, add, remove, or make changes to these Terms at any
                    time and for any reason. It is recommended that you regularly review these Terms to stay
                    informed about any updates. Such changes will take effect immediately upon being posted. By
                    accessing our website after we have made changes to these Terms, you acknowledge that you
                    agree to the modified Terms.
                </p>

                <h4 className='font-[600]'>Disclaimer</h4>

                <p>
                    Nothing found on this Website should be considered as tax, accounting, regulatory, legal, insurance,
                    or investment advice. The information and opinions presented on this Website do not constitute a
                    solicitation or offer by AspinRock, Inc. (&quot;AspinRock&quot;) or its affiliates to buy or sell any securities,
                    futures, options, or other financial instruments. Furthermore, the offer or sale of such securities would
                    be unlawful in any jurisdiction where such solicitation, offer, purchase, or sale violates the securities
                    laws. The visitor acknowledges that any decisions made based on the information provided on this
                    Website are solely their own responsibility. By using this Website, the visitor agrees to indemnify and
                    hold AspinRock, its officers, directors, employees, affiliates, agents, licensors, and suppliers harmless
                    from any claims, losses, liability, costs, and expenses (including attorney&apos;s fees) arising from their use
                    of this Website, their violation of these Terms, or any decisions made based on the information
                    provided.
                </p>

                <p>
                    The investments and strategies discussed on the Website may not be suitable for all investors
                    and are not obligations of AspinRock or its affiliates, nor are they guaranteed by AspinRock or
                    its affiliates. AspinRock does not warrant that the contents are appropriate for use in all
                    locations or that the transactions, securities, products, instruments, or services discussed on
                    this site are available or suitable for sale or use in all jurisdictions, countries, or by all investors
                    or counterparties. By providing information on the Website, AspinRock does not imply that any
                    investment vehicle is available or suitable for any specific user. All individuals and entities
                    accessing the Website do so at their own initiative and are responsible for complying with
                    applicable local laws and regulations.
                </p>

                <p>
                    All investments carry risks and are subject to potential value decline. The value of your investment
                    may decrease based on market conditions. Fixed income investments are exposed to risks such as
                    interest rate, credit, market, and issuer risk. Currency exchange rates can also impact the value of
                    an investment, causing it to fluctuate. Alternative strategies entail higher risks compared to
                    traditional investments, may not offer tax efficiency, and often involve higher fees. They may also
                    employ leverage and speculative investment techniques, which can amplify the potential for both
                    gains and losses. BEFORE PURCHASING OR EXCHANGING SHARES OF ANY INVESTMENT FUND, it
                    is your responsibility to thoroughly review the prospectus or offering materials.
                </p>

                <p>
                    This Website serves solely for informational purposes and should not be relied upon as a forecast,
                    research, or investment advice. The information provided on this Website does not constitute a
                    recommendation, offer, or solicitation to buy or sell any securities or to adopt any investment
                    strategy. While the material on this Website is based on information deemed reliable by AspinRock
                    and efforts are made to keep it current, AspinRock does not guarantee its accuracy, currency, or
                    completeness, and it should not be considered as such. Any opinions expressed on this Website may
                    change as conditions evolve. Past performance does not guarantee future results.
                </p>

                <p>
                    The information and services provided on this Website are offered &quot;AS IS&quot; and without any
                    warranties, whether expressed or implied, by AspinRock. To the maximum extent permitted by
                    applicable law, AspinRock disclaims all warranties, including but not limited to, any warranty of non-
                    infringement of third-party rights and any implied warranties of merchantability and fitness for a
                    particular purpose. AspinRock does not warrant, either explicitly or implicitly, the accuracy or
                    completeness of the information, text, graphics, links, or other items contained on this Website.
                    Furthermore, AspinRock does not guarantee uninterrupted or error-free functioning of the Website,
                    nor does it guarantee the correction of defects or the absence of viruses or other harmful
                    components. AspinRock explicitly disclaims all liability for errors and omissions in the materials
                    presented on this Website and for the use or interpretation of the information by others.
                </p>

                <h4 className='font-[600]'>Trademarks, Copyrights and other Intellectual Property</h4>

                <p>
                    The content found on this website is owned or licensed by AspinRock and its third-party information
                    providers, and it is protected by relevant copyrights, trademarks, service marks, and/or other
                    intellectual property rights. This content is intended solely for your personal, non-commercial use.
                    Therefore, you are prohibited from copying, distributing, modifying, posting, framing, or deep linking
                    to this website, including any text, graphics, video, audio, software code, user interface design, or
                    logos. You may download materials displayed on this website for your personal use, as long as you
                    preserve all copyright and other proprietary notices included in the materials. Without written
                    permission from AspinRock, you may not distribute, modify, transmit, reuse, repost, or use the
                    content of this website for public or commercial purposes, including all text, images, audio, and video.
                    Engaging in any other purpose or modification of the materials would infringe upon AspinRock&apos;s
                    intellectual property rights.
                </p>

                <p>
                    All trademarks, service marks, trade names, and logos appearing on this website belong to
                    AspinRock and/or their respective owners. No content on this website should be interpreted as
                    granting, by implication, estoppel, or any other means, a license or right to use any trademark
                    displayed on this website without the written permission of AspinRock or the respective third party
                    that owns the trademark. Except as explicitly stated here, the use of the trademarks displayed on
                    this website is strictly prohibited.
                </p>

                <p>
                    The utilization of the images presented on this website is strictly prohibited, whether it is done by you
                    or anyone else authorized by you. Unauthorized use of these images may infringe upon copyright
                    laws, trademark laws, privacy and publicity laws, communication laws, as well as other regulations
                    and statutes. If you download any information from this website, you agree not to copy it or eliminate
                    or conceal any copyright or other notices or legends contained within that information.
                </p>

                <h4 className='font-[600]'>Links to Other Websites</h4>

                <p>
                    AspinRock may establish links between this website and one or more websites operated by third
                    parties. AspinRock does not have control over such other websites, their contents, or the
                    products/services they offer. The presence of any such links does not imply endorsement,
                    representation, or warranty by AspinRock regarding those websites, their contents, the products or
                    services offered, or the operators of those websites. Your access to and use of such linked websites
                    will be governed by the terms of use and privacy policies of those sites, and you do so at your own
                    risk. AspinRock disclaims any responsibility for the privacy policies and practices concerning
                    customer information of third-party websites hyperlinked from our website.
                </p>

                <h4 className='font-[600]'>Links to AspinRock from Other Websites</h4>

                <p>
                    You are not permitted to display hyperlinks on your websites to any website owned or operated by
                    AspinRock. If you wish to display a hyperlink to an AspinRock website on your own website, you
                    must enter into a written agreement with AspinRock that governs such display. Accessing any
                    AspinRock website does not grant you the right to use any of AspinRock&apos;s names, logos, trademarks,
                    or copyrighted material, and you agree not to do so without AspinRock&apos;s explicit written consent. To
                    request permission to display hyperlinks on your websites to AspinRock websites, please send an
                    email to webmaster@aspinrock.com.
                </p>

                <h4 className='font-[600]'>Transmissions to and From this Website</h4>

                <p>
                    Electronic communications are susceptible to interception by third parties, which means that
                    transmissions to and from this website may not be secure. It is advisable to send communications
                    containing confidential information to AspinRock by mail. AspinRock retains the freedom to utilize any
                    ideas, concepts, know-how, or techniques provided by a website user through this website for any
                    purpose. You acknowledge and agree that AspinRock has granted you limited access to specific files
                    related to the AspinRock Funds (&quot;Approved Files&quot;), and you agree not to attempt to access computer
                    files other than the Approved Files. AspinRock does not provide any warranty regarding the security
                    of the website, including the unauthorized access to information transmitted or received through the
                    website. AspinRock reserves the right to discontinue or modify the provision of this website and its
                    content, or any part or feature thereof, at any time and without notice.
                </p>

                <p>
                    We kindly request that you review our Privacy Policy, which is an integral part of this Agreement and
                    is incorporated by reference. It provides detailed information about how we collect and handle your
                    information, as well as the steps we take to ensure its privacy and security.

                </p>

                <h2 className='text-xl font-[600]'>Privacy Policy</h2>

                <h4 className='font-[600]'>E-mail and Marketing</h4>

                <p>
                    Financial professionals who successfully complete the registration process to access the AspinRock
                    Financial Professional website are simultaneously granting permission to AspinRock to send them
                    email messages for marketing and general communication purposes to the email address provided.
                    This service can be terminated at any time by responding to the email with &quot;Unsubscribe&quot; in the
                    subject line.
                </p>

                <h4 className='font-[600]'>Jurisdiction and Governing Law</h4>

                <p>
                    The information presented on this website is not intended for distribution to, or use by, any individual
                    or entity in any jurisdiction or country where such distribution or use would be in violation of the law
                    or regulations, or where it would require AspinRock or its affiliates to comply with any registration
                    requirements in that jurisdiction or country. Every investment product and service mentioned on this
                    website is intended to be offered solely to residents of the United States. This website should not be
                    regarded as a solicitation for or an offer of any investment product or service to any individual in any
                    jurisdiction where such solicitation or offering would be unlawful.
                </p>

                <p>
                    The laws of the State of North Carolina govern these Terms without regard to conflict of law
                    provisions. If you take legal action relating to these Terms, you agree to file such action only in the
                    North Carolina State Court located in North Carolina, or the United States District Court for the
                    District of North Carolina, and you consent and submit to the personal jurisdiction of those courts for
                    the purpose of litigating any action with AspinRock, its affiliates, or with any funds referenced on this
                    site.
                </p>

                <h4 className='font-[600]'>Limitation of Liability</h4>

                <p>
                    AspinRock and its affiliates, as well as their respective officers, directors, employees, or
                    agents, will not be held liable to you or anyone else for any damages of any kind. This
                    includes, but is not limited to, direct, consequential, incidental, special, or indirect damages
                    (including, but not limited to, lost profits, trading losses, or damages resulting from the use or
                    loss of use of this website), even if AspinRock has been informed of the possibility of such
                    damages or losses. This limitation applies to damages or losses arising from the use or
                    attempted use of this website or any other linked website.
                </p>

                <p>
                    If you reside in a state that does not permit the limitation or exclusion of liability for incidental
                    or consequential damages, or if you access the website solely through an arrangement with
                    your employer or plan sponsor, some or all of the aforementioned limitations and exclusions
                    may not apply to you.
                </p>

                <h4 className='font-[600]'>Broker-Dealer&apos;s Potential Conflicts</h4>

                <p>
                    As a broker-dealer, AspinRock Inc. and/or its affiliates (including any entities that qualify as
                    &quot;affiliates&quot; as defined in the Investment Company Act of 1940) may act as a principal for its own
                    account or as an agent for its customers when it comes to the sale to you or purchase by you of a
                    security that is the subject of content prepared by AspinRock. If it receives a mark-up or
                    commission or acts as an agent for another person in connection with such a transaction, AspinRock
                    may face a potential conflict of interest. You are aware of this potential conflict and acknowledge
                    that you have the option to execute securities transactions at another broker-dealer.
                </p>

                <h4 className='font-[600]'>Timeliness of Content</h4>

                <p>
                    All content on this website is provided as of the date published or indicated and may be replaced by
                    more recent market events or for other reasons. Moreover, it is your responsibility to adjust the
                    cache settings on your browser to ensure that you are accessing the most up-to-date data.
                </p>

                <h4 className='font-[600]'>Prohibited Uses</h4>

                <p>
                    Except as stated otherwise in these Terms or specifically authorized by AspinRock in writing, you
                    are not allowed to:
                </p>

                <p>
                    Use this website in any way that could potentially harm or overload any server belonging to
                    AspinRock or any network connected to such servers. It&apos;s important to note that all servers have
                    limited capacity and are shared by numerous users.<br />
                    Use this Website in any manner that would interfere with another party&apos;s use of the Website. <br />
                    Include the term &quot;AspinRock&quot;, or any trademark of AspinRock or the name of any executive
                    affiliated with AspinRock, or any variation thereof, as a meta-tag or hidden textual
                    element.<br />
                    Utilize any robot, spider, intelligent agent, or other automated or manual method to search,
                    monitor, or duplicate this website or the materials including reports, data, information, content,
                    software, products, services, or any other materials derived from or obtained through this
                    website, whether accessed through links or otherwise, without the explicit permission of
                    AspinRock. Please note that commonly available third-party web browsers may be used without
                    requiring such permission.<br />
                    Utilize this website or the materials in any way that could give the impression of being affiliated
                    with, sponsored by, or endorsed by AspinRock.
                </p>

                <h4 className='font-[600]'>
                    Unauthorized Use of Content
                </h4>

                <p>
                    You agree to defend, indemnify, and hold harmless AspinRock, its affiliates, and each of their
                    respective officers, directors, members, partners, managers, and employees from any losses,
                    damages, claims, liabilities, and costs (including reasonable attorneys&apos; fees) that arise as a result of
                    or are associated with any unauthorized or improper use of the content on this website attributable
                    to you or that occurs through the use of your ID.
                </p>

                <h4 className='font-[600]'>System Outages and Incomplete Transmissions</h4>

                <p>
                    Internet software or transmission issues can lead to the creation of inaccurate or incomplete
                    versions of information and materials that users download and view on their computers.
                    AspinRock bears no responsibility for any damages, alterations, or omissions that may arise
                    during the transmission of information and materials.
                </p>

                <h4 className='font-[600]'>Termination</h4>

                <p>
                    AspinRock may terminate your access to the Website for any reason, without prior notice.
                </p>

                <h4 className='font-[600]'>Waiver</h4>

                <p>
                    No waiver by AspinRock of any right under or term or provision of these Terms will be considered a
                    waiver of any other right, term, or provision of these Terms at the moment of such waiver, nor a
                    waiver of that or any other right, term, or provision of these Terms at any other time.
                </p>

                <h4 className='font-[600]'>Integration and Severability</h4>

                <p>
                    If any provision of these Terms is deemed unlawful, void, or for any reason unenforceable, then that
                    provision will be deemed severable from these Terms and will not affect the validity and enforceability
                    of the remaining provisions.
                </p>

                <p>
                    The preceding Terms of use represent the entire agreement between AspinRock and the user relating to the
                    subject matter herein.
                </p>

                <p>
                    AspinRock is an equal opportunity employer committed to diversity in the workplace.
                </p>

                <p>
                    Dated: May 2023.
                </p>

                <span className='mt-[60px] font-[600]'>© 2021 AspinRock, Inc. All rights reserved. </span>
            </div>

            <FooterSection />
        </div>
    )
}

export default TermsPage