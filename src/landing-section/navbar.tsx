const NavSection: React.FC = () => {
    return (
        <nav className="w-full flex flex-col">
            <div className="bg-[#EFEFEF] h-[32px] w-full flex flex-row xl:grid xl:grid-cols-3 px-[20px] md:px-[40px] lg:px-[80px] items-center text-xs md:text-sm">
                <div className="hidden xl:flex"></div>

                <ul className="flex flex-row gap-[20px] xl:gap-[35px] mx-0 xl:mx-auto underline">
                    <li>About Us</li>
                    <li>AspinRock</li>
                    <li>Blog</li>
                </ul>

                <ul className="flex flex-row gap-[20px] xl:gap-[35px] ml-auto underline">
                    <li>Individual</li>
                    <li>Institutional</li>
                    <li>Advisor</li>
                </ul>
            </div>

            <div className="bg-black w-full h-[100px] text-white justify-center flex flex-col px-[20px] md:px-[40px] lg:px-[80px] text-center md:text-left">
                <span className="sm:text-lg">You are in the AspinRock site for individual investors.</span>
                <p className="text-sm">Not an individual? Change your user type above.</p>
            </div>

            <div className="bg-white w-full h-[70px] flex flex-row items-center px-[20px] md:px-[40px] lg:px-[80px] justify-center md:justify-normal">
                <div className="bg-black py-[15px] px-[6px]">
                    <span className="text-lg text-white border-white border-[1px] px-[7px] py-[10px] font-bold tracking-wide">
                        AspinRock
                    </span>
                </div>

                <ul className="flex flex-row gap-[35px] md:gap-[60px] ml-[35px] md:ml-[60px] underline">
                   <li>Who we are</li> 
                   <li>News</li> 
                   <li>Updates</li> 
                </ul>
            </div>
        </nav>
    )
}

export default NavSection