import { useDispatch } from "react-redux"
import FooterSection from "../components/footer"
import NavSection from "../components/navbar"
import { useEffect } from 'react'
import { changeNav } from "../store/appSlice"
import Link from "next/link"
import { BiSolidChevronRight } from "react-icons/bi"
import Image from "next/image"
import Head from "next/head"

const Page404: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeNav('404'))

        return () => {
            dispatch(changeNav(undefined))
        };
    })

    return (
        <div>
            <Head>
                <title>AspinRock | Not Found</title>
            </Head>

            <NavSection />

            <div className="w-full h-[50px] bg-[#1DA1F2]"></div>

            <div className="flex flex-col-reverse lg:flex-row items-center px-[40px] lg:px-[80px] gap-x-[120px] justify-center py-[80px] lg:py-[100px]">
                <div className="flex flex-col mt-[40px] lg:mt-0">
                    <h1 className="text-6xl max-w-[15ch]">Oops! This page does not exist.</h1>

                    <p className="text-xl my-[25px]">It seems that you tried to go to a page that doesn&apos;t exist.</p>

                    <Link href='/' className="bg-[1DA1F2] flex flex-row items-center group w-fit">
                        <BiSolidChevronRight className="text-2xl text-[#1DA1F2]" />
                        <span className="text-xl ml-[10px] group-hover:underline">Go back</span>
                    </Link>
                </div>

                <Image src='/mergers-img.png' alt='404-image' width={300} height={600}
                className="h-[200px] w-[800px] lg:h-[600px] lg:w-auto object-cover" />
            </div>

            <FooterSection />
        </div>
    )
}

export default Page404