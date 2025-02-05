"use client"
import { useState } from "react"
import { useChat } from "ai/react";

export default function Chatbot() {
    const [isToogleBot, setToogleBot] = useState(false);
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    const toogleChatBot = () => {
        setToogleBot(!isToogleBot);
    };

    return (
        <>
            {/* Button untuk membuka/tutup chatbot */}
            <button
                className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 cursor-pointer border-gray-200 p-0 normal-case leading-5"
                type="button"
                onClick={toogleChatBot}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-white">
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                </svg>
            </button>

            {isToogleBot && (
                <aside
                    className="z-50 fixed bottom-0 right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px] shadow-lg transition-all duration-300 ease-linear"
                >
                    {/* Header Chatbot */}
                    <section className="flex justify-between">
                        <div className="flex flex-col space-y-1.5 pb-6">
                            <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
                            <p className="text-sm text-gray-500">Powered by Jatrip AI</p>
                        </div>
                        <button className="w-10 h-10" type="button" onClick={toogleChatBot}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                                    fill="red"></path>
                            </svg>
                        </button>
                    </section>

                    {/* Chat Messages */}
                    <div className="h-[474px] overflow-y-auto pr-4">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex gap-3 my-4 text-gray-600 text-sm flex-1 ${message.role === "user" ? "justify-end" : ""}`}>
                                {message.role !== "user" && (
                                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                                        <div className="rounded-full bg-gray-100 border p-1">
                                            <svg stroke="none" fill="black" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="20" width="20">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                                            </svg>
                                        </div>
                                    </span>
                                )}
                                <p className="leading-relaxed bg-slate-300 p-2 rounded-md text-wrap w-10/12">
                                    <span className="block font-bold text-gray-700">
                                        {message.role === "user" ? "You" : "AI"}
                                    </span>
                                    {message.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Input Chat */}
                    <div className="flex items-center pt-2">
                        <form className="flex items-center justify-center w-full space-x-2" onSubmit={handleSubmit}>
                            <input
                                className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                placeholder="Type your message..."
                                value={input}
                                onChange={handleInputChange}
                                required
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-white bg-black hover:bg-gray-800 h-10 px-4 py-2"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </aside>
            )}
        </>
    );
}
