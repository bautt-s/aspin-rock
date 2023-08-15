import FooterSection from "@/components/footer"
import NavSection from "@/components/navbar"
import mergersHero from '../static/mergers-hero.png'
import mergersImg from '../static/mergers-img.png'

const MergersPage: React.FC = () => {
    return (
        <div className="overflow-hidden">
            <NavSection />

            <div className="w-full flex flex-col">
                <img src={mergersHero.src} className="object-cover max-h-[600px]" />

                <div className="mt-[80px] flex flex-col items-center px-[40px] lg:px-[80px]">
                    <h1 className="text-6xl mb-[80px]">Merger’s and Acquisitions (M&A’s) </h1>

                    <div>
                        <span>PROSPER FROM HERE, ON</span>

                        <p className="font-[500] text-4xl max-w-[40ch] mt-[25px]">
                            We aim to create synergistic opportunities that drive innovation,
                            unlock new market potential, and maximize value for all parties involved
                        </p>
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row gap-x-[120px] mt-[120px] pb-[80px]">
                        <div className="grid grid-rows-3 gap-y-[45px] mt-[60px] lg:mt-0 text-center lg:text-left">
                            <div>
                                <h4 className="text-2xl font-[500]">Global Reach and Extensive Network</h4>

                                <p className="max-w-[43ch] font-[300] mt-[15px] mx-auto lg:mx-0">
                                    With a strong global presence and an extensive network of key industry players, our M&A support 
                                    services transcend geographical boundaries. This broad reach allows us to connect clients with 
                                    the most suitable partners, be it mature enterprises or promising startups, anywhere in the world. 
                                    Our international network enhances deal-making capabilities and opens doors to new markets, making 
                                    us a trusted partner for cross-border transactions.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-2xl font-[500]">Expert Team of Industry Specialists</h4>

                                <p className="max-w-[43ch] font-[300] mt-[15px] mx-auto lg:mx-0">
                                    At our firm, we take pride in our exceptional team of industry specialists who bring a wealth 
                                    of experience and expertise to the table. With diverse backgrounds and a deep understanding of 
                                    various sectors, our experts provide invaluable insights, strategic guidance, and innovative solutions 
                                    throughout the M&A journey. Their proficiency enables us to identify unique opportunities and create 
                                    tailored strategies for clients, driving maximum value and competitive advantage.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-2xl font-[500]">Rigorous and Methodical Assessment</h4>

                                <p className="max-w-[43ch] font-[300] mt-[15px] mx-auto lg:mx-0">
                                    Our M&A support services are characterized by a meticulous and systematic evaluation process. 
                                    We leave no stone unturned in scrutinizing every aspect of the target companies and potential synergies, 
                                    ensuring that our clients make informed decisions based on comprehensive data and analysis. 
                                    With our rigorous approach, we mitigate risks and enhance the success potential of every transaction.
                                </p>
                            </div>
                        </div>

                        <img src={mergersImg.src} className="h-[400px] sm:h-[200px] sm:w-[800px] lg:h-auto 
                        lg:w-[350px] xl:w-[600px] 2xl:w-auto object-cover" />
                    </div>
                </div>

                <div className="bg-black flex flex-col px-[40px] lg:px-[80px] text-white py-[80px]">
                    <p className="font-[500] text-xl lg:text-2xl max-w-[100ch] text-center mx-auto">
                        "Embarking on the voyage of mergers and acquisitions is akin to exploring uncharted skies. 
                        It&apos;s a vast horizon, brimming with possibilities and complexities, but it&apos;s the daring pioneers 
                        who venture forth that redefine the corporate landscape. So, take flight, let your vision lead the way, 
                        and embrace the thrilling dance of synergy and transformation. For in the end, it&apos;s not merely soaring, 
                        but conquering turbulence and charting a course towards unparalleled prosperity."
                    </p>

                    <span className="font-[500] text-lg mt-[40px] mx-auto">Jordan Robinson, Founder and CEO</span>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default MergersPage