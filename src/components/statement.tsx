import { BiPlusMedical } from 'react-icons/bi'
import Link from 'next/link'

const StatementSection: React.FC = () => {
    return (
        <div className="w-full bg-white text-center flex flex-col items-center justify-center py-[80px] px-[40px] lg:px-[80px]">
            <h1 className='text-3xl'>The CEO&apos;s opening statement</h1>

            <p className='text-lg max-w-[60ch] my-[25px]'>
                Jordan Robinson reflects on the company&apos;s journey so far, highlighting the challenges faced and opportunities seized along the way.
                <br /><br />
                He acknowledges the current economic climate, including market volatility and shifting consumer behaviors,
                but emphasizes the company&apos;s commitment to delivering exceptional value and service to its clients.
            </p>

            <button className="flex flex-row items-center">
                <BiPlusMedical className='text-[#1DA1F2]' />
                <Link href='/letter-ceo' className='ml-[15px]'>Read more</Link>
            </button>
        </div>
    )
}

export default StatementSection