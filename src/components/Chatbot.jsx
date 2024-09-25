import { Menu, Search, X } from 'lucide-react';
import  { useState } from 'react';
import logo from '../assets/logo.png'

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", type: "received" },
        { text: "Hi! I need some information.", type: "sent" }
    ]);
    const [inputText, setInputText] = useState("");

    const handleSendMessage = () => {
        if (inputText.trim()) {
            setMessages([...messages, { text: inputText, type: "sent" }]);
            setInputText("");
        }
    };
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
    return (
        <div className="flex flex-col h-screen w-full ">
            <header className='w-full  bg-[#fffde7]'>
                <nav className='w-full  flex justify-between items-center px-10 py-2'>
                    <div className='flex gap-5 items-center shrink-0'>
                        <img src={logo} className='h-20 w-20'></img>
                        <h1 className='text-4xl font-bold font-[poppins]'>NIA</h1>
                    </div>
                    <div className='hidden lg:block'>
                        <ul className='flex gap-3'>
                            {["Today's NIA", "Careers", "Legacy", "Newsroom", "Library"].map((items, index) => {
                                return (
                                    <li key={index} className='text-lg font-bold hover:text-[#f22a53] hover:underline underline-offset-4'>{items}</li>
                                )

                            })}

                        </ul>
                    </div>
                    <div className='hidden relative hover:border-none searchdiv  lg:flex items-center border border-black py-1'>
                        <div>

                            <input type='text' className='bg-transparent cursor-pointer  searchBar     border-black px-3 py-2' placeholder='Search' />
                            <div className='absolute w-0 top-0 left-0 origin-left bg-[#f22a53] h-full'></div>
                        </div>
                        <div className='SearchIcon p-2 border-l-[0.25px]  border-l-[#000]' ><Search /></div>
                    </div>

                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X className='x-20' /> : <Menu className='x-20' />}
                        </button>
                    </div>
                    {mobileDrawerOpen && (
                        <div className='lg:hidden fixed flex col gap-5 top-[25vh] left-1/2  z-19'>
                            <ul className='flex flex-col gap-4'>
                                {["Today's CIA", "Careers", "Legacy", "Newsroom", "Library"].map((items, index) => {
                                    return (
                                        <li key={index} className='text-lg font-bold hover:text-blue-500'>{items}</li>
                                    )

                                })}
                            </ul>
                        </div>
                    )}
                </nav>
        </header>
            {/* Chat background */}
            <div className="flex-1 overflow-y-scroll p-4 chatbox" >
                <div className="flex flex-col space-y-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`max-w-xs p-2 rounded-lg ${message.type === 'sent' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 self-start'}`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
            </div>

            {/* Input box */}
            <div className="bg-gray-200 bg-opacity-50 backdrop-blur p-4 flex items-center">
                <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-lg p-2 mr-4"
                    placeholder="Type a message..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSendMessage();
                    }}
                />
                <button
                    className="bg-blue-500 text-white p-2 rounded-lg"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
