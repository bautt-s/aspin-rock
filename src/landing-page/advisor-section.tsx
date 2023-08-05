import { BiSolidChevronRight, BiPlusMedical } from 'react-icons/bi'

const moneyTalks = require('../static/money-talks.png')

const gridItems = [
    {
        title: 'Tax Evaluator',
        description: 'Use Tax Evaluator to find tax-loss harvesting opportunities and avoid capital gains to help lower your client’s tax bill.',
        cta: 'Coming Soon'
    },
    {
        title: 'Risk Calculator',
        description: 'Visualize and asses risk along with seeing how your current trajectory matches up with your goals.',
        cta: 'Coming Soon'
    },
    {
        title: 'Model Evaluator',
        description: 'Check your models and explore new ones. ',
        cta: 'Coming Soon'
    }
]

const AdvisorSection: React.FC = () => {
    return (
        <div className="flex flex-col mt-[120px]">
            <div className="bg-black flex flex-col text-white px-[40px] lg:px-[80px] py-[80px]">
                <span className="text-center md:text-left">Forever learning the Markets</span>

                <h1 className="text-3xl tracking-wide my-[30px] text-center md:text-left">Address client concerns with fresh new outlooks</h1>

                <p className="max-w-[60ch] text-center md:text-left mx-auto md:mx-0">
                    Leverage and utilize our insights to explain ongoing market dynamics and current portfolio allocation to clients.
                </p>

                <button className="flex flex-row items-center w-fit mt-[40px] mx-auto md:mx-0">
                    <BiPlusMedical className='text-[#1DA1F2]' />
                    <span className='ml-[15px]'>Learn more about what AspinRock can do </span>
                </button>
            </div>

            <div className="bg-white px-[40px] xl:px-[80px] flex flex-col xl:flex-row justify-center items-center py-[120px] gap-x-[60px]">
                <img src={moneyTalks} />

                <div className="mt-[60px] xl:mt-0 text-center xl:text-left">
                    <h1 className="font-[700] text-3xl max-w-[25ch] mb-[15px]">Influencing Tomorrow with Today’s Advisors: A Review</h1>

                    <p className="max-w-[60ch]">
                        Sit down with the movers and shakers in the advisory world on this weeks edition of “Money Talks”. Debuting August, 2023.
                    </p>
                </div>
            </div>

            <div className="bg-white flex flex-col px-[40px] lg:px-[80px] pb-[180px] mt-[30px]">
                <h2 className='text-3xl'>Advisor Center Tools</h2>
                <span>Explore our simple to use tools to help you become a advisor and enhance your clients experience.</span>

                <div className="grid grid-cols-1 lg:grid-cols-3 mt-[60px] gap-y-[60px] gap-x-[25px]">
                    {gridItems.map((item, index) =>
                        <div key={index}>
                            <h4 className='text-lg'>{item.title}</h4>
                            <p className='my-[15px] max-w-[50ch]'>{item.description}</p>

                            <div className='flex flex-row items-center'>
                                <BiSolidChevronRight className='text-[#1DA1F2] text-xl' />
                                <span>{item.cta}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='bg-black px-[40px] xl:px-[80px] text-white py-[40px]'>
                <h1 className='text-3xl'>Subscribe for the latest market insights and trends</h1>
                <p className='max-w-[60ch] mt-[15px]'>Get the latest info on markets from AspinRock.</p>

                <form className='mt-[25px]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px]'>
                        <input className='bg-black border-b' placeholder='First Name' />
                        <input className='bg-black border-b' placeholder='Last Name' />
                        <input className='bg-black border-b' placeholder='Email Address' />
                        <input className='bg-black border-b' placeholder='Company' />
                    </div>

                    <button className='bg-gray-600 hover:bg-gray-500 px-[25px] py-[10px] mt-[25px] ml-auto flex transition duration-500'>
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdvisorSection