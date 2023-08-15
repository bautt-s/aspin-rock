const HeroInstitutional: React.FC = () => {
    return (
        <div className="bg-black flex flex-row">
            <div className="flex flex-col lg:w-1/2 px-[40px] lg:px-[80px] pt-[60px] pb-[120px]">
                <span className="text-[#1DA1F2] mb-[60px]">BECOME A MOVER AND SHAKER</span>

                <h1 className="text-6xl text-white">Reach New Heights</h1>

                <p className="text-white my-[35px]">
                    At AspinRock, we&apos;re harnessing the power of quantum computing and Artificial Intelligence to revolutionize the industry. 
                    By analyzing probability numbers at unprecedented speeds, we&apos;re making trades with unparalleled accuracy. 
                    Join us and be a part of the cutting-edge technology that&apos;s changing the game. 
                    Together, we&apos;re shaping the future of finance and paving the way for a more efficient and effective marketplace.
                </p>

                <button className="bg-white px-[35px] py-[15px] hover:bg-[#e4e4e4] transition-colors duration-300 w-fit font-[500]">
                    Read More
                </button>
            </div>

            <div className="grow bg-white hero-img-3 hidden lg:flex"></div>
        </div>
    )
}

export default HeroInstitutional