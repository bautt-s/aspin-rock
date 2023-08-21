import { BiSolidChevronRight } from 'react-icons/bi'
import Link from 'next/link'

const gridItems = [
    {
        link: '/articles/d81f65af-9fa9-4075-b73b-875ca2c5cb76',
        title: 'Quantum Computing and Trading',
        date: 'May 8, 2023 | By AspinRock',
        description: "Trading has always been a fast-paced industry, and quantum computing is making it even faster. In this article, we'll explore how quantum computing is being used in trading, including its ability to analyze real-time data and execute trades with lightning-fast speed and accuracy. Join us in discovering how this game-changing technology is revolutionizing the way we trade."
    },
    {
        link: '/articles/8f89ffa4-8ba8-4545-bc18-00cd8ae40d6d',
        title: 'The Future of Finance: Get in touch with tomorrow',
        date: 'May 8, 2023 | By AspinRock',
        description: 'As quantum computing becomes more prevalent in the finance industry, this article delves into its potential impact on the market, including its ability to increase efficiency, reduce risk, and transform investment strategies. Join us in exploring how quantum computing is reshaping the future of finance.'
    },
    {
        link: '/articles/f27d1d82-f184-4670-b067-10d577e988df',
        title: 'Quantum Computing in Finance',
        date: 'May 8, 2023 | By AspinRock',
        description: 'This article explores how the finance industry is utilizing quantum computing to gain a competitive edge, analyzing complex probability numbers at unprecedented speeds to make trades with unparalleled accuracy. Learn how this cutting-edge technology is revolutionizing the market and unlocking untold opportunities for investors.'
    }
]

const InstLinks: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-[40px] lg:px-[80px] py-[80px] gap-[60px]">
            <Link href='/articles/fb4eabc8-3c5f-4814-ad20-425e744365c7' 
            className='border-b border-black pb-[45px] md:col-span-2 group'>
                <h1 className='text-[40px] group-hover:underline'>Analyze probability at unprecedented speeds</h1>

                <p className='max-w-[90ch] my-[15px]'>
                    Unlock untold opportunities in the finance market by harnessing the immense processing power of
                    quantum computing and Artificial Intelligence to analyze probability numbers at lightning-fast speeds with unparalleled accuracy.
                </p>

                <button className='flex flex-row items-center'>
                    <BiSolidChevronRight className='text-xl text-[#1DA1F2]' />
                    <span>Read more</span>
                </button>
            </Link>

            <Link href='/articles/bd15eaeb-265b-466e-8499-d296dfb2eaf9' className='bg-black flex flex-col group
            px-[25px] pt-[25px] grow pb-[120px] md:pb-0 justify-center xl:justify-normal lg:pt-0 xl:pt-[25px]'>
                <span className='tracking-wide text-[#1DA1F2] text-sm'>SOLUTION SPOTLIGHT</span>
                <h1 className='text-3xl text-white max-w-[25ch] my-[15px] group-hover:underline'>Speed Execution With AI and Quantum Computing</h1>
            </Link>

            {gridItems.map((item, index) =>
                <Link className="border-b border-black group" key={index} href={item.link}>
                    <h2 className="text-3xl mb-[20px] group-hover:underline">{item.title}</h2>
                    <span className="text-sm">{item.date}</span>

                    <p className="mt-[20px] mb-[35px]">
                        {item.description}
                    </p>
                </Link>
            )}
        </div>
    )
}

export default InstLinks