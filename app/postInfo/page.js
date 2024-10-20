"use client"
import Image from 'next/image';
import React from 'react'

const PostInfo = () => {
  return (
    <div className='h-screen'>
      {/* Grid */}
      <div className='grid grid-cols-2 h-full'>
        {/* Post Info */}
        <div className='bg-[#1A2B44] '>
            <div className='flex flex-row pt-16 pl-44 space-x-20'>
              <div className='p-10 bg-white w-20 h-20 rounded-sm flex justify-center items-center' >
                 <p className='text-5xl text-black'>1</p>
              </div>

              <div className='flex flex-col'>
                <p className='text-2xl'>Cras cursus nisl dapibus turpis aliquam, vitae aliquet velit cursus</p>
                <p className='mt-6 text-sm underline'>https://www.youtube.com/watch?v=hoycdE1G0C0</p>
                
                <button className="w-[250px] bg-black h-11 my-6 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[rgb(220,20,60)] before:to-[rgb(220,20,60)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-white font-medium"> Sources</button>

                <ul className='space-y-2'>
                  <li>www.example.com</li>
                  <li>www.example.com</li>
                  <li>www.example.com</li>
                </ul>

              </div>

            </div>

        </div>

        {/* Post Comment */}
        <div className='bg-white'>
          <div className='flex flex-col pt-16  items-center'>
            <input
              className="w-3/4 h-14 p-5 border-2 border-[#1A2B44] rounded-md text-black placeholder-gray-500 focus:outline-none mb-40 "
              placeholder="Enter comment..."
            />
            {/* Comments */}
            <div className='flex w-full flex-col items-center space-y-20 overflow-y-auto'>
              <div className='flex flex-col space-y-6 w-3/4'>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <img src={'/user.jpg'} className='object-contain w-14 h-14'/>
                    <p className='ml-10 text-black'>Username</p>

                  </div>
                  <p className='text-black'>2 days ago</p>
                </div>
                <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dolor turpis, a gravida massa aliquam suscipit. Pellentesque elit enim, volutpat non felis at, vestibulum efficitur massa.</p>
              </div>

              <div className='flex flex-col space-y-6 w-3/4'>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <img src={'/user.jpg'} className='object-contain w-14 h-14'/>
                    <p className='ml-10 text-black'>Username</p>

                  </div>
                  <p className='text-black'>2 days ago</p>
                </div>
                <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dolor turpis, a gravida massa aliquam suscipit. Pellentesque elit enim, volutpat non felis at, vestibulum efficitur massa.</p>
              </div>

              <div className='flex flex-col space-y-6 w-3/4'>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <img src={'/user.jpg'} className='object-contain w-14 h-14'/>
                    <p className='ml-10 text-black'>Username</p>

                  </div>
                  <p className='text-black'>2 days ago</p>
                </div>
                <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dolor turpis, a gravida massa aliquam suscipit. Pellentesque elit enim, volutpat non felis at, vestibulum efficitur massa.</p>
              </div>

              <div className='flex flex-col space-y-6 w-3/4'>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <img src={'/user.jpg'} className='object-contain w-14 h-14'/>
                    <p className='ml-10 text-black'>Username</p>

                  </div>
                  <p className='text-black'>2 days ago</p>
                </div>
                <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dolor turpis, a gravida massa aliquam suscipit. Pellentesque elit enim, volutpat non felis at, vestibulum efficitur massa.</p>
              </div>
              

              
            </div>
  

          </div>


        </div>
      </div>
      
    </div>
  )
}

// const styles = {
//   container: {
//     height: "100vh",
//     backgroundColor: 'red'
//   }
// }

export default PostInfo;
