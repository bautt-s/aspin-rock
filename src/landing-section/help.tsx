import { BiPlusMedical } from 'react-icons/bi'

const HelpSection: React.FC = () => {
    return (
        <div className="flex flex-col xl:flex-row px-[20px] md:px-[40px] lg:px-[80px] pt-[80px] pb-[60px] lg:pb-[120px]">
            <div className='flex flex-col'>
                <span className='text-sm set-underline'>ASPINROCK FOR ADVISORS</span>

                <h1 className='text-[40px] my-[30px]'>Helping you help your clients</h1>

                <p className='max-w-[90ch]'>
                    AspinRock for Advisors is a resource for market insights to enhance relationships with you clients and grow your business.
                    Get access to a range of tools, market commentary and other solutions to help your clients achieve their financial goals.
                </p>

                <button className="flex flex-row items-center w-fit mt-[40px]">
                    <BiPlusMedical className='text-[#1DA1F2]' />
                    <span className='ml-[15px] underline'>Learn more about what AspinRock can do </span>
                </button>
            </div>

            <ul className='flex-col px-[20px] pt-[15px] pb-[35px] shadow-[0px_0px_10px_6px_rgba(0,0,0,0.1)] h-fit xl:ml-[120px] grow mt-[80px] xl:mt-0'>
                <li className='border-b-[1px] border-black py-[10px]'>Read about The Coming Tools</li>
                <li className='border-b-[1px] border-black py-[10px]'>Learn more about Tax Evaluator</li>
                <li className='border-b-[1px] border-black py-[10px]'>Documentation on Model Evaluator</li>
                <li className='border-b-[1px] border-black py-[10px]'>Documentation on Risk Evaluator</li>
            </ul>
        </div>
    )
}

export default HelpSection