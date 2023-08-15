import FooterSection from "@/components/footer"
import NavSection from "@/components/navbar"

const DisclosuresPage: React.FC = () => {
    return (
        <div>
            <NavSection />

            <div className="relative pb-[300px] pt-[100px] flex justify-center items-center">
                <div className="bg-[#1DA1F2] w-full h-[200px] absolute top-0 left-0 z-10"></div>

                <div className="flex flex-col gap-y-[35px] w-fit z-20 bg-white mt-[50px] px-[40px] md:px-[60px] lg:px-[120px] xl:px-[200px] pt-[80px] lg:pt-[40px]">
                    <h1 className="text-4xl md:text-[50px] font-[100] max-w-[25ch] text-center lg:text-left leading-[60px]">
                        Social Media Content Disclosures (United States)
                    </h1>

                    <div className="flex flex-col gap-y-[25px] max-w-[75ch]">
                        <p className="font-[200]">
                            The opinions and views expressed in our social media content are solely those of the individuals posting them and do not represent the views or
                            opinions of our AspinRock Inc.
                            Our social media content is intended to provide general information and education, and should not be considered as personalized investment
                            advice or a recommendation to buy, sell, or hold any financial products or securities.
                            Any investment decisions made based on our social media content are solely the responsibility of the individual.
                            Our finance company does not make any representations or warranties as to the accuracy, completeness, or reliability of any information
                            contained in our social media content, and any reliance on such information is at the individual's own risk.
                            Our social media content may contain forward-looking statements that are based on our current expectations, estimates, projections, and assumptions.
                            These statements are subject to risks and uncertainties, and actual results may differ materially from those expressed or implied in such statements.
                            To the fullest extent permitted by law, our finance company and its officers, directors, employees, and affiliates will not be liable for any damages
                            arising out of or in connection with the use of our social media content.
                            Any links, references, or endorsements to third-party content are not necessarily endorsed by our finance company and we are not responsible for any
                            third-party content or services.
                            Our social media content may not be reproduced, distributed, published, or otherwise used without the express written consent of our finance company.
                            We reserve the right to modify or discontinue our social media channels at any time without notice.
                        </p>

                        <p className="font-[200]">
                            <strong className="font-[700]">AspinRock Social Media Community Guidelines</strong>
                            <br />At AspinRock, we believe in building connections with our community and engaging with our audience online.
                            We welcome you to share, discuss, and discover information and ideas through our social media channels, and
                            to connect with other individuals who share similar interests.
                        </p>

                        <p className="font-[200]">
                            <strong className="font-[700]">Social networks are public for everyone to see</strong>
                            <br />AspinRocks’ social media platforms are accessible to the general public.
                            This means that any content posted can be viewed by anyone.
                            As these social media handles are public pages, anyone can participate and express their views.
                            Therefore, AspinRock cannot be held accountable for any views expressed by others, besides their own.
                        </p>

                        <p className="font-[200]">
                            <strong className="font-[700]">Protect your personal information</strong>
                            <br />Please refrain from sharing any of your personal or banking information on our online communities.
                            If you have any customer service queries or banking matters that require individual attention,
                            kindly get in touch with us via our designated contact channels. Additionally, it is important that you
                            do not reveal any of your contact numbers, email address, account numbers, PINs, social security number, or passwords.
                        </p>

                        <p className="font-[200]">
                            <strong className="font-[700]">Stay on topic</strong>
                            <br />Your comments should be related to the topics posted on our social networks. We reserve the
                            right to delete off-topic comments, and, for instance, will remove any marketing materials,
                            commercial content, and other types of “spam” (such as comments that are posted repeatedly),
                            and will ban users as appropriate.
                        </p>

                        <p className="font-[200]">
                            <strong className="font-[700]">Always make sure it’s yours</strong>
                            <br />You should only share content on the platform if you have obtained the necessary authorization from the rightful owners.
                            If you are uncertain about your permission status or the content belongs to someone else, please abstain from posting it.
                            Any copyrighted, trademarked, or intellectual property material will be identified and removed from the platform.
                        </p>

                        <p className="font-[200]">
                            <strong className="font-[700]">License to use your content for our uses</strong>
                            <br />By posting on AspinRock’s social media pages, you grant the company the right to use or reproduce your content without
                            compensating you. Additionally, any ideas or suggestions you post on our social media pages will become the property of AspinRock.
                        </p>

                        <p className="font-[200]">
                            <strong className="font-[700]">Please be kind and courteous</strong>
                            <br />We request that you avoid using any offensive language, participating in personal attacks, or making derogatory comments.
                            While we encourage open and constructive discussion, it must be conducted in a respectful and professional manner.
                        </p>

                        <p className="font-[200]">
                            <strong className="font-[700]">Removal of posts, user bans</strong>
                            <br />We hold the right to delete any comments or content that do not comply with these guidelines, as well as any other relevant
                            platform terms and conditions, regulations, or laws. Additionally, we may prohibit users who breach the rules or misuse our online communities.
                        </p>

                        <p className="font-[200]">
                            <strong className="font-[700]">Third-party websites and links</strong>
                            <br />AspinRock does not assume responsibility for, nor does it support, any third-party websites or content that may be linked to from our
                            social networking websites. It is recommended that you assess the privacy and security practices, as well as the policies, of all third-party
                            websites that you visit.
                        </p>

                        <p className="font-[200]">
                            <strong className="font-[700]">Overall Disclaimer</strong>
                            <br />AspinRock holds the authority to modify, eliminate, or restrict access to the content available on our pages.
                            We cannot be held liable for any outcomes you may encounter as a result of accessing our content.
                            The information we post is considered trustworthy at the time of its publication, but we cannot assure its completeness or accuracy at all times.
                            It is important to note that none of the content posted by AspinRock, its employees or agents, or any other user should
                            be misconstrued as financial, legal, investment, accounting, or tax advice.
                        </p>
                    </div>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default DisclosuresPage