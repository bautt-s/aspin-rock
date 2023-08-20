import FooterSection from "@/components/footer"
import NavSection from "@/components/navbar"
import { useRouter } from "next/router"
import { useState, useEffect } from 'react'
import { updateInterface } from "."
import { changeNav } from "@/store/appSlice"
import { useDispatch } from "react-redux"

function formatDate(date: Date) {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY',
        'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

const ArticleDetail = () => {
    const [details, setDetails] = useState<updateInterface>()
    const dispatch = useDispatch()
    const router = useRouter()

    const getDetails = async () => {
        const response = await fetch(`/api/updates?id=${router.query.id}`, {
            method: "GET"
        })

        const data = await response.json()
        setDetails(data[0])
    }

    useEffect(() => {
        if (router.query.id) getDetails()

        dispatch(changeNav('404'))

        return () => {
            dispatch(changeNav(undefined))
        };
    }, [router.query.id])

    return (
        <div className="overflow-hidden">
            <NavSection />

            <div className="flex flex-col">
                <div className="bg-[#1DA1F2] w-full h-[150px]"></div>

                {details !== undefined ?
                    <div className="flex flex-col px-[40px] md:px-[80px] lg:px-[220px] mt-[60px] pb-[120px]">
                        <h1 className="text-3xl md:text-4xl font-[100] text-center md:text-left">{details?.title}</h1>

                        <div className="flex flex-row gap-x-[60px] mt-[60px]">
                            <span className="font-[500] tracking-wide">
                                {formatDate(new Date(details?.date))}
                            </span>

                            <span className="text-gray-400 font-[300]">
                                TOPIC: 
                                <strong className="text-[#1DA1F2] font-[300]">{details?.category.toUpperCase() || ' INFORMATIVE'}</strong>
                            </span>
                        </div>

                        <img src={details?.image} className="object-cover h-[380px] mt-[15px]" />

                        <div className="max-w-full">
                            <p className="whitespace-pre-wrap mt-[40px]">
                                {details?.content}
                            </p>
                        </div>
                    </div> :
                    <div className="w-full flex justify-center items-center py-[120px]">
                        <span className="text-2xl">Loading...</span>
                    </div>
                }
            </div>

            <FooterSection />
        </div>
    )
}

export default ArticleDetail