import FooterSection from "@/components/footer"
import NavSection from "@/components/navbar"
import Head from "next/head"
import { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'

interface updateInterface {
    id: string,
    title: string,
    date: string,
    content: string,
    image: string
    media: string[],
    category: string
}

const UpdatesPage: React.FC = () => {
    const [search, setSearch] = useState('')
    const [updates, setUpdates] = useState<updateInterface[] | undefined>(undefined)

    const getUpdates = async () => {
        const response = await fetch(`/api/updates?title=${search}`, {
            method: "GET"
        })

        const data = await response.json()
        setUpdates(data)
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        getUpdates()
    }

    useEffect(() => {
        getUpdates()
    }, [])

    return (
        <div>
            <Head>
                <title>AspinRock | Updates</title>
            </Head>

            <NavSection />

            <div className="flex flex-col pb-[120px]">
                <div className="relative">
                    <img src='upd-art-hero.png' />

                    <span className="font-[500] text-[52px] text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        Updates
                    </span>
                </div>

                {updates ?
                    <div className="lg:px-[220px] mt-[40px]">
                        {updates &&
                            <form className="gap-x-[15px] pr-[15px] flex flex-row items-center mx-auto
                    w-full border border-gray-300" onSubmit={handleSearch}>
                                <input placeholder="Search" className="py-[10px] pl-[15px] w-full"
                                    value={search} onChange={(e) => setSearch(e.target.value)} />

                                <button className="ml-auto group">
                                    <FiSearch className='text-[#A95228] text-lg group-hover:scale-110 transition-all duration-300' />
                                </button>
                            </form>
                        }

                        {updates &&
                            <div className="flex flex-row items-center gap-x-[25px] mt-[40px]">
                                <img src={updates[0]?.image} className="w-auto h-[300px] object-cover" />

                                <div className="flex flex-col gap-y-[15px]">
                                    <span>{updates[0]?.category.toUpperCase() || 'INFORMATIVE'}</span>
                                    <h3 className="font-[500]">{updates[0]?.title.length > 80 ? updates[0]?.title.slice(0, 80) + '...' : updates[0]?.title}</h3>

                                    <span className="text-[#A3AAAE]">
                                        {new Date(updates[0]?.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </span>

                                    <p>{updates[0]?.content.slice(0, 140) + '...'}</p>
                                </div>
                            </div>
                        }

                        {updates &&
                            <div className="grid grid-cols-3 gap-x-[25px] gap-y-[50px] mt-[40px]">
                                {updates.slice(1).map((item: updateInterface, index) =>
                                    <div key={index} className="flex flex-col gap-y-[15px] group cursor-pointer">
                                        <img src={item.image} className="h-[150px] object-cover" />
                                        <span>{item.category.toUpperCase() || 'INFORMATIVE'}</span>

                                        <h3 className="font-[500]">{item.title.length > 80 ? item.title.slice(0, 80) + '...' : item.title}</h3>

                                        <span className="text-[#A3AAAE]">
                                            {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </span>

                                        <span className="text-[#A95228] underline underline-offset-4 decoration-[2px] group-hover:underline-offset-[6px]">
                                            WATCH MORE
                                        </span>
                                    </div>
                                )}
                            </div>
                        }
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

export default UpdatesPage