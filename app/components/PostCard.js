import React from 'react'
import { useRouter } from 'next/navigation';
const PostCard = ({post}) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/postInfo/?id=${post.postId}`)
  }
  
  return (
    <div className='w-full h-44 flex space-x-16'>
      {/* thumbnail */}
      <div className='w-[400px] h-full  '>
        <img className='object-contain w-full h-full' src={'/thumbnail.png'} alt={"Title"} />
      </div>

      {/* info */}
      <div className='  h-full flex flex-col justify-between'>
        <div className='space-y-1'>
          <p className='text-black text-2xl font-normal'>{post.title}</p>
          <p className='text-black font-thin text-sm'>True: {post.rating}</p>
        </div>


        <button className="w-[150px] bg-black h-11 my-3 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[rgb(220,20,60)] before:to-[rgb(220,20,60)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-white font-medium" onClick={handleClick}> View</button>

      </div>
    </div>
  )
}

export default PostCard
