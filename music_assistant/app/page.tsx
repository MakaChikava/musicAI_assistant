import Image from 'next/image'
import ChatComponent from '@/components/chatComponent'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='bg-white p-3 w-[800px] rounded-md text-black'>
        <h2 className='text-2xl'>MusicAI Assistant</h2>
        <ChatComponent />
      </div>
    </main>
  )
}
