import FooterSection from "@/components/footer"
import NavSection from "@/components/navbar"
import Head from "next/head"

const LetterPage: React.FC = () => {
    return (
        <div>
            <Head>
                <title>AspinRock | Letter</title>
            </Head>

            <NavSection />

            <div className="flex flex-col">
                <div className="h-[250px] bg-[#1DA1F2] w-full"></div>

                <div className="bg-white px-[40px] lg:px-[80px] pt-[80px] pb-[240px] flex flex-col mx-auto">
                    <h1 className="text-5xl font-[100]">A Letter from the CEO of AspinRock</h1>

                    <div className="flex flex-row items-center text-xs gap-x-[50px] my-[60px]">
                        <span className="font-[700]">10 MAY 2023</span>
                        <span className="text-[#22A2FF] font-[300]">
                            <strong className="font-[200] text-black">TOPIC:</strong> GLOBAL T
                        </span>
                    </div>

                    <p className="text-xl max-w-[100ch]">
                        Dear Employees, Team Members, Staff and Stakeholders
                        <br /><br />
                        I am thrilled to extend my warmest greetings and introduce myself as the CEO of AspinRock, a new and dynamic financial services
                        company embarking on an exciting journey towards a prosperous future. It is with great pleasure and optimism that I welcome you to our
                        incredible team.
                        <br /><br />
                        I am thrilled to extend my warmest greetings and introduce myself as the CEO of AspinRock, a new and dynamic financial services
                        company embarking on an exciting journey towards a prosperous future. It is with great pleasure and optimism that I welcome you to our
                        incredible team.
                        <br /><br />
                        The foundation of our company is built upon a diverse group of talented individuals like yourselves, each bringing unique skills,
                        experiences, and perspectives to the table. Together, we form a powerful force capable of achieving remarkable things. As we embark on
                        this journey together, I am confident that our collective efforts will pave the way for success, and I am genuinely excited about the
                        incredible opportunities that lie ahead.
                        <br /><br />
                        In the face of the challenges that the financial services industry often presents, it is our unwavering commitment to maintain an
                        environment that promotes collaboration, teamwork, and open communication. We believe that by fostering a culture of trust, respect,
                        and inclusivity, we can empower each and every one of you to reach your full potential and make a lasting impact in our organization and
                        beyond.
                        <br /><br />
                        As we enter this new chapter, I want to assure you that your personal and professional growth is a top priority for us. We are dedicated to
                        providing you with the necessary resources, training, and support to excel in your roles and seize opportunities for advancement. At
                        AspinRock, we firmly believe that our collective success is intrinsically tied to your individual success.
                        <br /><br />
                        In the coming weeks and months, we will work closely as a team to define our strategic direction, set ambitious goals, and chart a course
                        towards achieving them. Your valuable insights, ideas, and contributions will be essential in shaping the future of AspinRock. I encourage
                        you to embrace this spirit of innovation and creativity, as we look to challenge the status quo, push boundaries, and create breakthrough
                        solutions that set us apart from our competitors.
                        <br /><br />
                        Finally, let me express my gratitude for the trust you have placed in us by joining AspinRock. Together, we have the opportunity to build
                        something extraordinary—a company that not only achieves remarkable financial success but also positively impacts the lives of our
                        clients, partners, and communities.
                        <br /><br />
                        As we embark on this journey, let us remember that greatness is not achieved overnight. It is a result of perseverance, dedication, and a
                        shared commitment to excellence. I have no doubt that we possess the qualities and capabilities necessary to make this a truly
                        exceptional year for AspinRock.
                        <br /><br />
                        Thank you for being a part of this incredible team. Here&apos;s to a year filled with growth, success, and a future we can all be proud of.
                        <br /><br />
                        Warm regards,
                        <br /><br />
                        Jordan Robinson <br />
                        CEO, AspinRock
                    </p>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default LetterPage