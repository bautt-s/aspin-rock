import FooterSection from "@/components/footer"
import NavSection from "@/components/navbar"
import { useState, useEffect } from 'react'

const AdminPage: React.FC = () => {
    const [selected, setSelected] = useState<'updates' | 'articles'>('updates')
    const [pressed, setPressed] = useState<'POST' | 'DELETE' | 'PUT'>('POST')
    const [verified, setVerified] = useState<undefined | boolean>(undefined)
    const [credentials, setCredentials] = useState({
        username: null,
        password: null
    })

    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    const [inputData, setInputData] = useState({
        id: '',
        title: '',
        category: '',
        image: '',
        content: ''
    })

    const getCredentials = async () => {
        const response = await fetch(`/api/credentials`, {
            method: "GET",
        })

        const data = await response.json()
        setCredentials({ username: data.username, password: data.password })
    }

    const handleVerified = (e: React.FormEvent) => {
        e.preventDefault()
        if (input.username === credentials.username && 
            input.password === credentials.password) setVerified(true)
        else setVerified(false)
    }

    const handlePressed = (b: 'DELETE' | 'PUT') => {
        if (pressed === b) setPressed('POST')
        else setPressed(b)
    }
;

    const handleAdmin = async (e: React.FormEvent) => {
        e.preventDefault()

        const response = await fetch(`/api/${selected}`, {
            method: pressed,
            body: JSON.stringify({ id: inputData.id, data: { ...inputData, id: undefined } })
        })

        const responseData = await response.json()
        alert(responseData.msg)
    }

    useEffect(() => {
        getCredentials()
    }, [])
    
    return (
        <div>
            <NavSection />

            <div className="h-[50px] bg-[#1DA1F2]"></div>

            <div className="py-[120px] flex flex-row justify-center items-center">
                {!verified ?
                    <form className="flex flex-col" onSubmit={(e) => handleVerified(e)}>
                        <span className="mb-[10px]">User:</span>
                        <input className="bg-white border-b border-black w-fit px-[5px] py-[2px]" placeholder="Insert username"
                        onChange={(e) => setInput({ ...input, username: e.target.value })} value={input.username} />

                        <span className="mt-[60px] mb-[10px]">Password:</span>
                        <input className="bg-white border-b border-black w-fit px-[5px] py-[2px]" placeholder="Insert password"
                        type='password' onChange={(e) => setInput({ ...input, password: e.target.value })} value={input.password} />

                        <button className="bg-[#1DA1F2] hover:bg-[#4ebbff] py-[10px] text-white 
                        font-[500] mt-[40px] transition-colors duration-300">Enter</button>

                        {verified === false && <span className="text-[#ff5656] mt-[10px]">Incorrect credentials.</span>}
                    </form>
                    :
                    <form className="flex flex-col w-[500px]" onSubmit={(e) => handleAdmin(e)}>
                        <div className="flex flex-row w-full mb-[60px]">
                            <button className={`border-black border w-full border-r-0 py-[5px] ${selected === 'updates' && 'bg-black text-white'}`} 
                            onClick={() => setSelected('updates')} type='button'>
                                UPDATES
                            </button>

                            <button className={`border-black border w-full py-[5px] ${selected === 'articles' && 'bg-black text-white'}`} 
                            onClick={() => setSelected('articles')} type='button'>
                                ARTICLE
                            </button>
                        </div>

                        <span>ID:</span>
                        <div>
                            <input className={`bg-white border-b border-black w-fit px-[5px] py-[2px] ${pressed === 'POST' && 'bg-gray-100'}`} 
                            value={inputData.id} onChange={(e) => setInputData({ ...inputData, id: e.target.value })} disabled={pressed === 'POST'} />

                            <button className={`ml-[10px] px-[15px] py-[5px] text-[#1DA1F2] font-[500] border-[#1DA1F2] border
                            ${pressed === 'PUT' ? 'bg-[#1DA1F2] text-white' : 'bg-white'}`}
                            onClick={() => handlePressed('PUT')} type='button'>
                                UPDATE
                            </button>

                            <button className={`ml-[10px] px-[15px] py-[5px] text-[#ff4e4e] font-[500] border-[#ff4e4e] border
                            ${pressed === 'DELETE' ? 'bg-[#ff4e4e]  text-white' : 'bg-white'}`}
                            onClick={() => handlePressed('DELETE')} type='button'>
                                DELETE
                            </button>
                        </div>

                        <span className="mt-[60px] mb-[10px]">Title:</span>
                        <input className="bg-white border-b border-black w-fit px-[5px] py-[2px]" placeholder="Insert title" 
                        value={inputData.title} onChange={(e) => setInputData({ ...inputData, title: e.target.value })} />

                        <span className="mt-[60px] mb-[10px]">Category:</span>
                        <input className="bg-white border-b border-black w-fit px-[5px] py-[2px]" placeholder="Insert category" 
                        value={inputData.category} onChange={(e) => setInputData({ ...inputData, category: e.target.value })} />

                        <span className="mt-[60px] mb-[10px]">Image:</span>
                        <input className="bg-white border-b border-black w-fit px-[5px] py-[2px]" placeholder="Insert image URL" 
                        value={inputData.image} onChange={(e) => setInputData({ ...inputData, image: e.target.value })} />

                        <span className="mt-[60px] mb-[10px]">Content:</span>
                        <textarea className="bg-white border border-black w-full px-[5px] py-[2px] rounded h-[300px]" placeholder="What do you want to write?" 
                        value={inputData.content} onChange={(e) => setInputData({ ...inputData, content: e.target.value })}>
                        </textarea>

                        <button className="bg-[#1DA1F2] hover:bg-[#4ebbff] py-[10px] text-white 
                        font-[500] mt-[40px] transition-colors duration-300" type='submit'>Enter</button>
                    </form>
                }
            </div>

            <FooterSection />
        </div>
    )
}

export default AdminPage