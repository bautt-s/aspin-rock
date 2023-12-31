import { BiPlusMedical } from 'react-icons/bi'
import Link from 'next/link' 
import { useRouter } from 'next/router'

const LatestSection: React.FC = () => {
    const router = useRouter()

    const handlePortfolio = () => {
        router.push('/corporate#who')
    }

    return (
        <div className="px-[40px] lg:px-[80px] py-[80px] bg-white flex flex-col">
            <div className='w-full flex flex-col xl:flex-row'>
                <div>
                    <span className='text-sm'>WHAT WE DO</span>
                    <h2 className='text-[40px] my-[20px]'>AspinRock in America</h2>

                    <p className='max-w-[90ch] xl:max-w-[60ch] 2xl:max-w-[80ch]'>
                        As a financial services company, we recognize that our success is directly tied to the success and satisfaction of our stakeholders.
                        That&apos;s why we&apos;re committed to putting you at the forefront of everything we do.
                        Whether you&apos;re an investor looking to grow your wealth, a small business owner seeking
                        financing options, or simply someone looking for sound financial advice, we&apos;re here to help.
                    </p>

                    <button className='flex flex-row mt-[20px] items-center gap-x-[10px]'>
                        <BiPlusMedical className='text-[#1DA1F2]' />
                        <span className='hover:underline' onClick={handlePortfolio}>Who we serve</span>
                    </button>
                </div>

                <div className='xl:ml-auto px-[20px] py-[25px] h-fit 2xl:h-fit w-full xl:w-[40%] mt-[60px] xl:mt-0 shadow-[0px_0px_10px_6px_rgba(0,0,0,0.1)]'>
                    <span className='text-sm'>READ OUR BLOG</span>

                    <div className='flex flex-col mt-[35px] gap-y-[20px]'>
                        <Link href='/articles/2ea87f9b-3b85-4a0e-9d6b-7b9d09df23f2' 
                        className='flex flex-row items-center'>
                            <BiPlusMedical className='text-[#1DA1F2] mr-[10px]' />
                            Recent Bank Crashes - what&apos;s next?
                        </Link>

                        <Link href='/articles/4efbd0cf-0261-4a06-b632-91ed23f9f95f' 
                        className='flex flex-row items-center border-y-[1px] border-black py-[15px]'>
                            <BiPlusMedical className='text-[#1DA1F2] mr-[10px]' />
                            Learn how cash and liquidity strategies can help individual investors
                        </Link>

                        <Link href='/articles/bd15eaeb-265b-466e-8499-d296dfb2eaf9' 
                        className='flex flex-row items-center'>
                            <BiPlusMedical className='text-[#1DA1F2] mr-[10px]' />
                            Quantum Computing Revolutionizing the Finance Industry
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestSection