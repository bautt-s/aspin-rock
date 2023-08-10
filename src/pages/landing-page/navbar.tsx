import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeView } from '../../store/appSlice'
import type { RootState } from '../../store/store'

const NavSection: React.FC = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const view = useSelector((state: RootState) => state.app.view)
    const navState = useSelector((state: RootState) => state.app.navState)

    const handleChange = (payload: 'individual' | 'advisor' | 'institutional') => {
        dispatch(changeView(payload))
        navigate(`/${payload}`)
    }

    return (
        <nav className="w-full flex flex-col">
            <div className="bg-[#EFEFEF] sm:h-[32px] w-full flex flex-col sm:flex-row xl:grid xl:grid-cols-3 
            px-[20px] md:px-[40px] lg:px-[80px] items-center text-xs md:text-sm gap-y-[10px] sm:gap-y-0 py-[10px] sm:py-0">
                <div className="hidden xl:flex"></div>

                <ul className="flex flex-row gap-[20px] xl:gap-[35px] mx-0 xl:mx-auto underline">
                    <li>
                        <Link to='/corporate'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/'>AspinRock</Link>
                    </li>
                    <li>Blog</li>
                </ul>

                <ul className="flex flex-row gap-[20px] xl:gap-[35px] sm:ml-auto underline">
                    <li className="cursor-pointer">
                        <button onClick={() => handleChange('individual')}>Individual</button>
                    </li>
                    <li className="cursor-pointer">
                        <button onClick={() => handleChange('advisor')}>Advisor</button>
                    </li>
                    <li className="cursor-pointer">
                        <button onClick={() => handleChange('institutional')}>Institutional</button>
                    </li>
                </ul>
            </div>

            {(view !== 'institutional' && location.pathname !== '/disclosures' && location.pathname !== '/equity' 
            && location.pathname !== '/mergers-and-acquisitions' && navState !== '404') &&
                <div className="bg-black w-full h-[100px] text-white justify-center flex flex-col px-[20px] 
                md:px-[40px] lg:px-[80px] text-center md:text-left">
                    {(navState === 'corporate')
                        ? <div>
                            <span className="max-w-[23ch] mx-auto sm:max-w-none sm:mx-0 sm:text-lg">
                                You are in AspinRock Corporate
                            </span>

                            <p className="text-xs sm:text-sm mt-[5px] sm:mt-0">Welcome!</p>
                        </div>

                        : <div>
                            <span className="max-w-[23ch] mx-auto sm:max-w-none sm:mx-0 sm:text-lg">
                                {view === 'individual' ? 'You are in the AspinRock site for individual investors.'
                                    : 'You are in the AspinRock site for advisors.'}
                            </span>

                            <p className="text-xs sm:text-sm mt-[5px] sm:mt-0">Not an {view}? Change your user type above.</p>
                        </div>
                    }
                </div>
            }

            <div className="bg-white w-full sm:h-[70px] flex flex-col sm:flex-row items-center 
            px-[20px] md:px-[40px] lg:px-[80px] justify-center md:justify-normal py-[10px] sm:py-0">
                <Link to={`/${view}`} className="bg-black py-[10px] sm:py-[15px] px-[6px] w-full sm:inline
                sm:w-auto flex justify-center text-center sm:text-left sm:justify-normal">
                    <span className="text-lg text-white border-white border-[1px] px-[7px] py-[10px] font-bold 
                    tracking-wide mx-auto sm:mx-0 sm:w-auto sm:inline sm:text-left w-full">
                        AspinRock
                    </span>
                </Link>

                <ul className="flex flex-row gap-[35px] md:gap-[60px] sm:ml-[35px] md:ml-[60px] mt-[10px] sm:mt-0">
                    <li>Who we are</li>
                    <li>News</li>
                    <li>Updates</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavSection