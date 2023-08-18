import { BiPlusMedical } from 'react-icons/bi'

const gridItems = [
    {
        link: '/risk-and-asset',
        title: 'Risk Management',
        subtitle: 'Protect Your Investment with Comprehensive Risk Management',
        description: "Investing comes with a certain level of risk, but you don't have to navigate those risks alone. Risk management services are designed to help individual investors identify and mitigate potential risks in their investment portfolio. These services can help you protect your investments and feel confident in your financial future.",
    },
    {
        link: '',
        title: 'Investment Advisory',
        subtitle: 'Make Informed Investment Decisions with Expert Advisory Services',
        description: 'Investing can be daunting, especially for those who are new to the market. Investment advisory services provide individual investors with guidance and information to make informed investment decisions. Advisors work with you to create an investment strategy that aligns with your goals and risk tolerance, helping you maximize returns and minimize risks.',
    },
    {
        link: '/equity',
        title: 'Private Equity',
        subtitle: 'Working for the long term',
        description: 'Private equity offers investors access to exclusive investment opportunities not available through public markets. Private equity services provide individual investors with the expertise and support needed to identify and invest in promising private companies. These services help investors understand the risks and potential rewards of private equity investments, allowing them to make informed decisions about their portfolio and tap into this exciting investment opportunity.',
    },
    {
        link: '/risk-and-asset',
        title: 'Asset Management',
        subtitle: 'Seeking stable, lower risk returns in some markets',
        description: 'Managing an investment portfolio can be time-consuming and overwhelming, especially for individual investors with multiple investments. Asset management services help simplify the process by providing professional support to optimize your portfolio. Advisors work with you to develop a customized strategy that maximizes returns while minimizing risks, helping you feel confident in your investments without the hassle of managing them on your own.',
    }
]

const FutureSection: React.FC = () => {
    return (
        <section className="bg-[#F4F1EB] flex flex-col px-[40px] lg:px-[80px] pt-[80px] pb-[100px] lg:pb-[200px]">
            <div>
                <p className="max-w-[15ch] font-[600] set-underline tracking-wider text-sm pb-[5px]">INVESTMENTS AT ASPINROCK</p>

                <h1 className="text-6xl my-[40px]">Build Your Future with Expert Investments</h1>

                <p className="text-lg max-w-[100ch] mb-[80px]">
                    Investing can be a daunting task, but it&apos;s an important part of securing a financial future. 
                    At our AspinRock, we offer expert investment services to institutions that can help companies make informed decisions about their investment portfolios.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                {gridItems.map((item, index) => 
                    <div key={index} className="bg-white px-[35px] py-[80px] border border-black shadow-xl relative">
                        <h3 className="text-3xl mb-[35px]">{item.title}</h3>
                        <span className="text-xl">{item.subtitle}</span>

                        <p className="mt-[15px]">{item.description}</p>

                        <button className="absolute bottom-0 left-0 flex flex-row items-center bg-black py-[10px] pl-[15px] pr-[35px]">
                            <BiPlusMedical className='text-[#1DA1F2]' />
                            <span className='text-white ml-[15px]'>{item.title}</span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default FutureSection