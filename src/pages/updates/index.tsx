import FooterSection from "@/components/footer"
import NavSection from "@/components/navbar"
import updatesHero from '@/static/upd-art-hero.png'
import { useState, useEffect } from 'react'

interface updateInterface {
    id: string,
    title: string,
    date: Date,
    content: string,
    image: string
    media: string[],
    category: string
}

const UpdatesPage: React.FC = () => {
    const [search, setSearch] = useState()
    const [updates, setUpdates] = useState([])

    const getUpdates = async () => {
        const response = await fetch(`/api/updates?title=${search}`, {
            method: "GET",
        })

        const data = await response.json()
        setUpdates(data)
    }

    useEffect(() => {
        getUpdates()
    }, [])

    return (
        <div>
            <NavSection />

            <div className="flex flex-col">
                <div className="relative">
                    <img src={updatesHero.src} />

                    <span className="font-[500] text-[52px] text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        Updates
                    </span>
                </div>

                <div className="">
                    {updates.map((item: updateInterface, index) =>
                        <div key={index} className="flex flex-col">
                            <img src={item.image} />
                            <span>{item.category.toUpperCase()}</span>

                            <h3>{item.title}</h3>

                            <span>{item.date.toDateString()}</span>
                            <span>WATCH MORE</span>
                        </div>
                    )}
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default UpdatesPage