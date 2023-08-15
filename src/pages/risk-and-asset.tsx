import FooterSection from "@/components/footer"
import NavSection from "@/components/navbar"
import imageRA from '../static/risk-asset.png'
import imageRA2 from '../static/risk-asset-2.png'
import Head from "next/head"

const RiskAssetPage: React.FC = () => {
    return (
        <div>
            <Head>
                <title>AspinRock | Risks & Assets</title>
            </Head>

            <NavSection />

            <div className="flex flex-col">
                <img src={imageRA.src} className="w-full h-[400px] xl:h-[800px] object-cover object-top" />

                <div className="flex flex-col px-[40px] lg:px-[80px] mx-auto mt-[40px] pb-[80px]">
                    <div className="flex flex-col mx-auto">
                        <h1 className="text-6xl leading-[70px] max-w-[22ch]">Risk and Asset Management and Advisory</h1>

                        <span className="my-[25px]">THIS INDUSTRY</span>

                        <p className="font-[500] text-3xl max-w-[48ch] leading-[50px]">
                            We cast our investment net across the globe, targeting a range
                            of sectors. Our focus spans from mature enterprises to budding
                            businesses on the cusp of expansion.
                        </p>
                    </div>

                    <div className="flex flex-row items-center mt-[45px] gap-x-[100px]">
                        <div className="flex flex-col gap-y-[45px]">
                            <div>
                                <h3 className="font-[500]">Rigorous and Methodical Assessment</h3>

                                <p className="mt-[15px] max-w-[65ch]">
                                    Our investment approach is firmly anchored on a meticulous appraisal process
                                    that measures risk and identifies catalysts for value amplification. We engage
                                    solely in congenial transactions and partner with competent executive brigades
                                    to foster desirable results. It&apos;s more than just investing; it&apos;s about creating a
                                    symphony of strategy and execution, and a concert of collaboration and
                                    success.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-[500]">Sparking Evolution: Driving Monumental Change with Strategic Investments</h3>

                                <p className="mt-[15px] max-w-[65ch]">
                                    Our goal is to create wealth by directing resources towards
                                    exceptional businesses. In these enterprises, our financial
                                    engagement, strategic insight, international linkages, and
                                    operational aid can initiate a profound metamorphosis. It&apos;s less about
                                    funding infusion, more about sparking evolution and driving
                                    monumental change.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-[500]">Sculpting Endurance: Forging Resilient Enterprises for Lasting Prosperity</h3>

                                <p className="mt-[15px] max-w-[65ch]">
                                    As we establish alliances with enterprises, our mission is to
                                    construct them with a foundation of enduring fortitude. Our vigor,
                                    born out of the rich and multifaceted platform we&apos;ve cultivated for
                                    over thirty-five years, fortifies our businesses. This enables them
                                    to adeptly steer through market ebbs and flows, crafting a path
                                    to lasting prosperity. Our partnerships aren&apos;t merely about
                                    creating entities; they&apos;re about sculpting resilient masterpieces
                                    that stand the test of time and turbulence.
                                </p>
                            </div>
                        </div>

                        <img src={imageRA2.src} className="hidden xl:flex w-auto h-[500px] object-cover" />
                    </div>
                </div>

                <div className="bg-black flex flex-col p-[40px] lg:p-[80px] text-white">
                    <p className="text-2xl max-w-[105ch]">
                    &quot;Investment management and advisory is a symphony, blending various instruments of financial assets into a harmonious portfolio. It&apos;s a
                        dance with risk and reward, where strategic foresight leads the way, and the market noise fades into the background. Embrace this
                        rhythm, be patient in your endeavors, and persistently fine-tune your financial orchestra. Remember, the maestro of this symphony is
                        not one who merely plays the notes, but who understands the music and brings it to life for their clients&apos; prosperity&quot;
                    </p>

                    <span className="text-lg mt-[40px]">Jordan Robinson, Founder and CEO</span>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default RiskAssetPage