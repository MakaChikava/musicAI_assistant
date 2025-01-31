import ChatComponent from '@/components/chatComponent'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <head>
        <title>MusicAI Assistant</title>
      </head>
      <div className='bg-slate-50 p-3 w-[800px] rounded-md text-black shadow-xl'>
      <div className='flex gap-1.5 items-center justify-center'>
        <p className="w-2.5 h-2.5 rounded-full bg-green-500 flex"/>
        <h1 className='font-sans text-lg flex'>MusicAI Assistant</h1>
      </div>
        <ChatComponent />
      </div>
    </main>
  )
}
