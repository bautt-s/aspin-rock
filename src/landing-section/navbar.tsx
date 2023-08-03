const NavSection: React.FC = () => {
    return (
        <nav className="w-full flex flex-col">
            <div className="bg-[#EFEFEF] sm:h-[32px] w-full flex flex-col sm:flex-row xl:grid xl:grid-cols-3 
            px-[20px] md:px-[40px] lg:px-[80px] items-center text-xs md:text-sm gap-y-[10px] sm:gap-y-0 py-[10px] sm:py-0">
                <div className="hidden xl:flex"></div>

                <ul className="flex flex-row gap-[20px] xl:gap-[35px] mx-0 xl:mx-auto underline">
                    <li>About Us</li>
                    <li>AspinRock</li>
                    <li>Blog</li>
                </ul>

                <ul className="flex flex-row gap-[20px] xl:gap-[35px] sm:ml-auto underline">
                    <li>Individual</li>
                    <li>Institutional</li>
                    <li>Advisor</li>
                </ul>
            </div>

            <div className="bg-black w-full h-[100px] text-white justify-center flex flex-col px-[20px] 
            md:px-[40px] lg:px-[80px] text-center md:text-left">
                <span className="max-w-[23ch] mx-auto sm:max-w-none sm:mx-0 sm:text-lg">
                    You are in the AspinRock site for individual investors.
                </span>

                <p className="text-xs sm:text-sm mt-[5px] sm:mt-0">Not an individual? Change your user type above.</p>
            </div>

            <div className="bg-white w-full sm:h-[70px] flex flex-col sm:flex-row items-center 
            px-[20px] md:px-[40px] lg:px-[80px] justify-center md:justify-normal py-[10px] sm:py-0">
                <div className="bg-black py-[10px] sm:py-[15px] px-[6px] w-full sm:w-auto">
                    <span className="text-lg text-white border-white border-[1px] px-[7px] py-[10px] font-bold tracking-wide mx-auto flex w-fit sm:mx-0 sm:w-auto sm:inline">
                        AspinRock
                    </span>
                </div>

                <ul className="flex flex-row gap-[35px] md:gap-[60px] sm:ml-[35px] md:ml-[60px] underline mt-[10px] sm:mt-0">
                   <li>Who we are</li> 
                   <li>News</li> 
                   <li>Updates</li> 
                </ul>
            </div>
        </nav>
    )
}

export default NavSection