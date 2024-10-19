import Login from './login/page';
import PostCard from './components/PostCard';

export default function Home() {
  return (
    <div className='flex flex-col h-screen bg-white py-60 overflow-y-auto'>
      <div className='flex justify-center'>
        <input 
          className='w-2/4 h-12 p-5 border-2 border-solid border-black rounded-md text-black' 
          placeholder='Enter Youtube URL...' 
          style={{ color: 'black' }} 
        />
      </div>
      <p className='text-4xl text-[#000000] font-normal mt-32 text-center'>Explore trending searches</p>

      <div className='flex flex-col space-y-24 w-full mt-20 pl-72'>
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}