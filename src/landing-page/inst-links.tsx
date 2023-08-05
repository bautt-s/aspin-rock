import { BiSolidChevronRight } from 'react-icons/bi'

const gridItems = [
    {
        title: 'Quantum Computing and Trading',
        date: 'May 8, 2023 | By AspinRock',
        description: "Trading has always been a fast-paced industry, and quantum computing is making it even faster. In this article, we'll explore how quantum computing is being used in trading, including its ability to analyze real-time data and execute trades with lightning-fast speed and accuracy. Join us in discovering how this game-changing technology is revolutionizing the way we trade."
    },
    {
        title: 'The Future of Finance: Get in touch with tomorrow',
        date: 'May 8, 2023 | By AspinRock',
        description: 'As quantum computing becomes more prevalent in the finance industry, this article delves into its potential impact on the market, including its ability to increase efficiency, reduce risk, and transform investment strategies. Join us in exploring how quantum computing is reshaping the future of finance.'
    },
    {
        title: 'Quantum Computing in Finance',
        date: 'May 8, 2023 | By AspinRock',
        description: 'This article explores how the finance industry is utilizing quantum computing to gain a competitive edge, analyzing complex probability numbers at unprecedented speeds to make trades with unparalleled accuracy. Learn how this cutting-edge technology is revolutionizing the market and unlocking untold opportunities for investors.'
    }
]

const InstLinks: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-[40px] lg:px-[80px] py-[80px] gap-[60px]">
            <div className='border-b border-black pb-[45px] md:col-span-2'>
                <h1 className='text-[40px]'>Analyze probability at unprecedented speeds</h1>

                <p className='max-w-[90ch] my-[15px]'>
                    Unlock untold opportunities in the finance market by harnessing the immense processing power of
                    quantum computing and Artificial Intelligence to analyze probability numbers at lightning-fast speeds with unparalleled accuracy.
                </p>

                <button className='flex flex-row items-center'>
                    <BiSolidChevronRight className='text-xl text-[#1DA1F2]' />
                    <span>Read more</span>
                </button>
            </div>

            <div className='bg-black flex flex-col px-[25px] pt-[25px] grow pb-[120px] md:pb-0 justify-center xl:justify-normal lg:pt-0 xl:pt-[25px]'>
                <span className='tracking-wide text-[#1DA1F2] text-sm'>SOLUTION SPOTLIGHT</span>
                <h1 className='text-3xl text-white max-w-[25ch] my-[15px]'>Speed Execution With AI and Quantum Computing</h1>

                <button className='flex flex-row items-center'>
                    <BiSolidChevronRight className='text-xl text-[#1DA1F2]' />
                    <span className='text-white'>Explore all of our technology</span>
                </button>
            </div>

            {gridItems.map((item, index) =>
                <div className="border-b border-black" key={index}>
                    <h2 className="text-3xl mb-[20px]">{item.title}</h2>
                    <span className="text-sm">{item.date}</span>

                    <p className="mt-[20px] mb-[35px]">
                        {item.description}
                    </p>
                </div>
            )}
        </div>
    )
}

export default InstLinks