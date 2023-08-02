const NavSection: React.FC = () => {
    return (
        <nav className="w-full flex flex-col">
            <div className="bg-[#EFEFEF] h-[32px] w-full grid grid-cols-3 px-[80px] items-center text-sm">
                <div></div>

                <ul className="flex flex-row gap-[35px] mx-auto underline">
                    <li>About Us</li>
                    <li>AspinRock</li>
                    <li>Blog</li>
                </ul>

                <ul className="flex flex-row gap-[35px] ml-auto underline">
                    <li>Individual</li>
                    <li>Institutional</li>
                    <li>Advisor</li>
                </ul>
            </div>

            <div className="bg-black w-full h-[100px] text-white justify-center flex flex-col px-[80px]">
                <span className="text-lg">You are in the AspinRock site for individual investors.</span>
                <p className="text-sm">Not an individual? Change your user type above.</p>
            </div>

            <div className="bg-white w-full h-[70px] flex flex-row items-center px-[80px]">
                <div className="bg-black py-[15px] px-[6px]">
                    <span className="text-lg text-white border-white border-[1px] px-[7px] py-[10px] font-bold tracking-wide">
                        AspinRock
                    </span>
                </div>

                <ul className="flex flex-row gap-[60px] ml-[60px] underline">
                   <li>Who we are</li> 
                   <li>News</li> 
                   <li>Updates</li> 
                </ul>
            </div>
        </nav>
    )
}

export default NavSection