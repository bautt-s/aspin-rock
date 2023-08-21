const CookiesPopup: React.FC<{ popup: string, handleClose: Function }> = (props) => {
    const { popup, handleClose } = props

    return (
        <div className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[9998]'>
            <div className="w-full h-full bg-none backdrop-blur-[2px] absolute"></div>

            <div className="text-white w-fit bg-[#19191A] px-[30px] py-[40px] 
            rounded-2xl z-[9999] ml-[30px] mr-[45px] flex flex-col">
                <h3 className="font-[600] text-xl">We Collect Cookies</h3>

                <p className="max-w-[35ch] mt-[25px]">
                    By using this website you agree to the use of cookies. 
                    These cookies help us keep our website safe, give you 
                    better experience and show more relevant ads.
                </p>

                <button className="bg-white hover:bg-[#e4e4e4] transition-all duration-300 
                text-black font-[600] mt-[40px] py-[7px] rounded-lg">
                    Privacy
                </button>

                <button className="bg-[#1DA1F3] hover:bg-[#2f8bc5] transition-all duration-300 
                font-[600] mt-[15px] py-[7px] rounded-lg" onClick={() => handleClose()}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default CookiesPopup