"use client"
import { useChat } from "ai/react";

export default function chatComponent() {
    // Vercel AI SDK (ai package) useChat()
    // useChat -> handles messages for us, user input, handling user submits, etc.
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat()
    // messages -> [user asks question, gpt-4 response, user asks again, gpt responds]
    console.log(messages)
    console.log(input)
    return ( 
<div>

<div className="flex-grow overflow-y-auto">
<div className="flex flex-col space-y-2 p-4">

    {/* <!-- Individual chat messages --> */}
    <div className="self-end bg-blue-500 text-white rounded-lg p-2 flex items-center">
        <p>This is a sender message</p>
    </div>
    <div className="self-start bg-gray-200 rounded-lg p-2 flex items-center">
        <p>This is a receiver message</p>
    </div>

</div>
</div>

    {/* Input section */}
        <div className="p-4 flex items-center">
            <form className="p-4 w-full flex items-center" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Write your message..." 
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    value={input}
                    onChange={handleInputChange}
                    />
                <button className="ml-2 bg-blue-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-300">Send</button>
            </form>
        </div>


</div>

);
}