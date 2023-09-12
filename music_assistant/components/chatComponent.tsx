"use client"

export default function chatComponent() {
    return ( 
    <div>

        <div className="p-4 flex items-center">
        <input 
            type="text" 
            placeholder="Write your message..." 
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
        <button className="ml-2 bg-blue-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-300">Send</button>
        </div>
    </div>

);
}