import { Link } from "react-router-dom"

const FooterSection: React.FC = () => {
    return (
        <footer className="flex flex-col">
            <div className="w-full xl:h-[500px] bg-[#161616] text-white px-[40px] lg:px-[80px] py-[40px]">
                <h2 className="text-3xl md:text-4xl text-center md:text-left">Continue to Explore</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 mt-[40px] gap-y-[60px] md:gap-y-0 md:gap-x-[60px] xl:gap-x-[240px]">
                    <div>
                        <h4 className="border-b-[1px] border-white pb-[15px]">Services</h4>

                        <ul className="flex flex-col text-sm md:gap-y-[20px] mt-[25px]">
                            <li className="hover:underline">
                                <Link to='/risk-and-asset'>Investment Management and Advisory</Link>
                            </li>
                            <li className="hover:underline">
                                <Link to='/equity'>Private Equity</Link>
                            </li>
                            <li className="hover:underline">
                                <Link to='/mergers-and-acquisitions'>Mergers and Acquisitions</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="border-b-[1px] border-white pb-[15px]">Commentary</h4>

                        <ul className="flex flex-col text-sm md:gap-y-[20px] mt-[25px]">
                            <li>Weekly commentary</li>
                            <li>Portfolio management views</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="border-b-[1px] border-white pb-[15px]">About Us</h4>

                        <ul className="flex flex-col text-sm md:gap-y-[20px] mt-[25px]">
                            <li>About AspinRock</li>
                            <li>Corporate sustainability</li>
                            <li>Investment integrity</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-black w-full xl:h-[485px] flex flex-col xl:flex-row px-[40px] lg:px-[80px] py-[60px] text-white">
                <div className="flex flex-col">
                    <div className="bg-black py-[15px] px-[6px] mx-auto xl:mx-0">
                        <span className="text-5xl text-white border-white border-[1px] px-[15px] py-[25px] font-bold tracking-wide">
                            AspinRock
                        </span>
                    </div>

                    <p className="mt-[60px] max-w-[61ch] text-center xl:text-left mx-auto xl:mx-0">
                        AspinRock is a leader in investment management, committed to helping people all over achieve financial
                        well-being through cutting-edge technology and personalized solutions.
                        As a trusted partner, we prioritize the best interests of our clients in every investment decision we make.
                        Our comprehensive approach ensures expert guidance and unparalleled service for every client.
                    </p>
                </div>

                <div className="grid grid-cols-2 text-sm xl:ml-[120px] 2xl:ml-[240px] mt-[60px] md:mx-auto md:gap-x-[240px] xl:mx-0 xl:gap-x-0">
                    <ul className="flex flex-col gap-y-[15px]">
                        <li className="text-[#1DA1F2]">CORPORATE</li>
                        <li className="hover:underline">
                            <Link to='/careers'>Careers</Link>
                        </li>
                        <li className="hover:underline">
                            <Link to='/contact-us'>Contact Us</Link>
                        </li>
                        <li className="hover:underline">
                            <Link to='/accessibility'>Accessibility</Link>
                        </li>
                    </ul>

                    <ul className="flex flex-col gap-y-[15px] ml-auto md:ml-0 xl:ml-[85px] 2xl:ml-[170px]">
                        <li className="text-[#1DA1F2]">LEGAL</li>
                        <li className="hover:underline">
                            <Link to='/terms-and-conditions'>Terms & Conditions</Link>
                        </li>
                        <li className="hover:underline">
                            <Link to='/privacy'>Privacy Policy</Link>
                        </li>
                        <li className="hover:underline">
                            <a href='https://brokercheck.finra.org/' target="_blank">FINRA BrokerCheck</a>
                            </li>
                        <li className="hover:underline">
                            <Link to='/606'>606 Disclosure</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-white w-full px-[40px] lg:px-[80px] py-[25px] text-sm flex flex-col">
                <span>© 2023 AspinRock, Inc. All rights reserved.</span>

                <span className="mt-[40px] italic">Investing involves risk, including possible loss of principal.</span>
                <div className="grid grid-cols-2 gap-x-[60px] mt-[20px] text-left md:text-justify">
                    <p>
                        AspinRock is not yet a registered investment advisory, risk management and asset management firm. AspinRock is also not yet a registered broker-dealer and member of Financial Industry Regulatory Authority (FINRA) and Securities Investor Protection Corporation (SIPC).
                        Investment advisory services are not yet offered through AspinRock. Risk management and asset management services are not yet offered through AspinRock Inc.
                        <br /><br />
                        AspinRock is committed to providing transparent and reliable financial services to our clients. Please refer to our Terms of Use and Privacy Policy for more information on how we collect and process data.
                        <br /><br />
                        AspinRock provides information and opinions on a wide range of financial topics for educational purposes only. The content on this website is not intended as legal, tax, investment, or financial advice. Clients and prospective clients should carefully consider their own financial situation and consult with their own financial professionals before making any investment decisions.
                    </p>

                    <p>
                        Past performance is not indicative of future results. Investing involves risk, including the potential loss of principal. No investment strategy can guarantee profits or protect against loss in periods of declining markets. It is important to carefully consider your investment objectives, risk tolerance, and time horizon before making investment decisions.
                        <br /><br />
                        AspinRock provides information and opinions on a wide range of financial topics for educational purposes only. The content on this website is not intended as legal, tax, investment, or financial advice. Clients and prospective clients should carefully consider their own financial situation and consult with their own financial professionals before making any investment decisions.
                        <br /><br />
                        All information provided is for educational purposes only and should not be construed as investment, legal, or tax advice. Please consult with a qualified professional before making any investment decisions.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection