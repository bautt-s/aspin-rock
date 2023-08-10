import { useDispatch } from "react-redux"
import FooterSection from "../landing-page/footer"
import NavSection from "../landing-page/navbar"
import { useEffect } from 'react'
import { changeNav } from "../../store/appSlice"
import { Link } from "react-router-dom"
import { BiSolidChevronRight } from "react-icons/bi"

const img = require('../../static/mergers-img.png')

const Page404: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
        dispatch(changeNav('404'))

        return () => {
            dispatch(changeNav(undefined))
        };
    }, [])

    return (
        <div>
            <NavSection />

            <div className="w-full h-[50px] bg-[#1DA1F2]"></div>

            <div className="flex flex-col-reverse lg:flex-row items-center px-[40px] lg:px-[80px] gap-x-[120px] justify-center py-[80px] lg:py-[100px]">
                <div className="flex flex-col mt-[40px] lg:mt-0">
                    <h1 className="text-6xl max-w-[15ch]">Oops! This page does not exist.</h1>

                    <p className="text-xl my-[25px]">It seems that you tried to go to a page that doesn't exist.</p>

                    <Link to='/' className="bg-[1DA1F2] flex flex-row items-center group w-fit">
                        <BiSolidChevronRight className="text-2xl text-[#1DA1F2]" />
                        <span className="text-xl ml-[10px] group-hover:underline">Go back</span>
                    </Link>
                </div>

                <img src={img} className="h-[200px] w-[800px] lg:h-[600px] lg:w-auto object-cover" />
            </div>

            <FooterSection />
        </div>
    )
}

export default Page404