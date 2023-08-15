import FooterSection from "@/components/footer"
import NavSection from "@/components/navbar"
import equityHero from '../static/equity-hero.png'
import equityImg from '../static/equity-img.png'

const EquityPage: React.FC = () => {
    return (
        <div className="overflow-hidden">
            <NavSection />

            <div className="w-full flex flex-col">
                <img src={equityHero.src} className="object-cover max-h-[600px]" />

                <div className="mt-[80px] flex flex-col items-center px-[40px] lg:px-[80px]">
                    <h1 className="text-6xl mb-[80px]">Private Equity</h1>

                    <div>
                        <span>THIS INDUSTRY</span>

                        <p className="font-[500] text-4xl max-w-[40ch] mt-[25px]">
                            We globally channel our investments into various sectors,
                            focusing on both mature companies and businesses poised for
                            growth
                        </p>
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row gap-x-[120px] mt-[120px] pb-[80px]">
                        <div className="grid grid-rows-3 gap-y-[45px] mt-[60px] lg:mt-0 text-center lg:text-left">
                            <div>
                                <h4 className="text-2xl font-[500]">Rigorous and Methodical Assessment</h4>

                                <p className="max-w-[43ch] font-[300] mt-[15px] mx-auto lg:mx-0">
                                    Our investment strategy hinges on a rigorous
                                    assessment process that gauges risk and pinpoints
                                    triggers for value augmentation. We exclusively partake
                                    in amicable transactions and collaborate with skilled
                                    executive teams to yield favorable outcomes.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-2xl font-[500]">Pivotal Influence</h4>

                                <p className="max-w-[43ch] font-[300] mt-[15px] mx-auto lg:mx-0">
                                    We aim to generate value by allocating
                                    resources to outstanding businesses where our
                                    financial input, strategic acumen, international
                                    connections, and operational assistance can
                                    induce significant change.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-2xl font-[500]">Enduring Resilience</h4>

                                <p className="max-w-[43ch] font-[300] mt-[15px] mx-auto lg:mx-0">
                                    When we form a partnership with a business, our aim is to build it
                                    with enduring resilience. Our robustness, derived from the
                                    extensive and diverse platform we&apos;ve developed over three and a
                                    half decades, equips our companies to navigate market
                                    fluctuations and achieve long-term success.
                                </p>
                            </div>
                        </div>

                        <img src={equityImg.src} className="h-[400px] sm:h-[200px] sm:w-[800px] lg:h-auto 
                        lg:w-[350px] xl:w-[600px] 2xl:w-auto object-cover" />
                    </div>
                </div>

                <div className="bg-black flex flex-col px-[40px] lg:px-[80px] text-white py-[80px]">
                    <p className="font-[500] text-xl lg:text-2xl max-w-[100ch] text-center mx-auto">
                        "Venturing into the realms of private equity is akin to boarding a ship destined for uncharted territories. It&apos;s a vast ocean, teeming with
                        opportunities and fraught with challenges, yet it is the brave who embark on this journey that reshape the financial world. So, seize the
                        helm, let your strategic acumen guide you, and embrace the exhilarating dance of risk and reward. For in the end, it is not about simply
                        sailing, but about mastering the storm and navigating towards unprecedented wealth creation."
                    </p>

                    <span className="font-[500] text-lg mt-[40px] mx-auto">Jordan Robinson, Founder and CEO</span>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default EquityPage