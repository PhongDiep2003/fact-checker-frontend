'use client'
import Login from './login/page';
import PostCard from './components/PostCard';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const userId = localStorage.getItem("userId")
    if (!userId) {
      router.push(`/login`)
    }
  },[])
  return (
  <div className='flex flex-col h-screen bg-white py-60 overflow-y-auto'>
    <div className='flex justify-center'>
      <input className='w-2/4 h-12 p-5 border-2 border-solid border-black rounded-md' placeholder='Enter Youtube URL...' />
    </div>
    <p className='text-4xl text-[#778DA9] font-normal mt-32 text-center '>Explore trending searches</p>

    <div className='flex flex-col space-y-24 w-full mt-20 pl-72'>
      <PostCard/>
      <PostCard/>
    </div>
  </div>
  )
}