const gridItems = [
    {
        title: '$200,000+ AUM',
        description: 'AspinRock aims to achieve $200,000+ in assets under management by June 2024, leveraging our expertise and client-centered approach.'
    },
    {
        title: '5 Industries ',
        description: "We're striving to establish a presence in 5 different industries, using our expertise and innovation to create value and drive growth in each sector."
    },
    {
        title: '60+ Client’s Across the U.S',
        description: 'Our goal is to serve 60+ clients across the US and its territories, providing tailored investment solutions and exceptional service to help them achieve their financial goals.'
    },
    {
        title: '10 Cities',
        description: 'Our goal is to establish a real estate presence in 10 cities, leveraging our expertise and market knowledge to help clients achieve their property investment goals.'
    }
]

const ProjectionsSection: React.FC = () => {
    return (
        <div className="flex flex-col p-[80px] bg-black text-white">
            <p className="max-w-[15ch] font-[600] set-underline tracking-wider text-sm pb-[5px]">OUR PROJECTIONS</p>

            <h1 className="text-[56px] mt-[25px] mb-[60px]">The year ahead: 2023-2024 projections</h1>

            <div className="grid grid-cols-2 w-fit mx-auto gap-y-[60px] gap-x-[240px]">
                {gridItems.map((item, index) =>
                    <div key={index} className="flex flex-col">
                        <h4 className="text-2xl font-[500]">{item.title}</h4>
                        <p className="text-sm max-w-[55ch] mt-[10px]">{item.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectionsSection