"use client";

import { FaUserCircle } from 'react-icons/fa'; 
import PostCard from './components/PostCard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [phrase, setPhrase] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const router = useRouter();
  const [trendingPosts, setTrendingPosts] = useState([]);

  // Get all posts
  useEffect(() => {
   const fetchAllPosts = async () => {
    try{
      console.log("Fetching all posts...");
      const res = await fetch("http://localhost:3000/api/post/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        setTrendingPosts(data.data);
      }

    } catch(error) {
      console.error('Error fetching posts:', error);
    }
   }
  fetchAllPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const params = new URLSearchParams({ url, phrase });
      const response = await fetch(
        `http://54.193.172.228/check?${params.toString()}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);

      const res = await fetch("http://localhost:3000/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
       })
       const data2 = await res.json();
       console.log(data2);
      // localStorage.setItem('postData', JSON.stringify(data));
      // router.push('/post?userId=' + localStorage.getItem("userId"));
    } catch (error) {
      console.error('Error during submission:', error);
    } finally {
      setIsLoading(false);
      setUrl("");
      setPhrase("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-y-auto">
      {/* Header */}
      <div className="absolute top-4 right-4 z-10">
        <FaUserCircle
          size={32}
          className="text-white cursor-pointer"
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black">
                Profile
              </li>
              <li
                className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("userId");
                  router.push('/login');
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Blue Section with Adjusted Centering */}
      <div className="flex flex-col items-center justify-start bg-[#1A2B44] text-white h-[60vh] pt-16">
        <h1 className="text-5xl font-extrabold mb-4">Uncover the Truth Instantly</h1>
        <p className="text-xl text-center max-w-2xl mb-6">
          Fact-check speeches, videos, and articles at lightning speed. Enter a YouTube or article URL, and let us do the heavy lifting.
        </p>

        <form className="flex flex-col w-full h-full items-center" onSubmit={handleSubmit}>
          <input
            className="w-3/4 md:w-1/2 h-12 p-5 border-2 border-white rounded-md text-black placeholder-gray-500 focus:outline-none"
            placeholder="Enter Youtube or article URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            required
            pattern="https?://.+"
            disabled={isLoading}
          />
          <input
            className="w-44 h-12 p-5 border-2 border-white rounded-md text-black placeholder-gray-500 focus:outline-none mt-5"
            placeholder="Enter Key Phrase."
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            type="text"
            required
            disabled={isLoading}
          />
          <div className="mt-8">
            <button
              className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-100"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : "Get Started"}
            </button>
          </div>
        </form>
      </div>

      {/* Slogan Section */}
      <div className="text-center py-16 bg-gray-50">
        <p className="text-2xl font-light italic text-gray-600">
          "Empowering users with accurate information, one fact at a time."
        </p>
      </div>

      {/* Trending Searches */}
      <p className="text-4xl text-[#000000] font-normal mt-6 text-center">
        Explore Trending Searches
      </p>

      <div className="flex flex-col space-y-24 w-full mt-8 px-20">
        {trendingPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

      {/* Footer */}
      <footer className="w-full py-8 bg-black text-white text-center mt-16">
        <p className="text-sm">© 2024 Fact Checker - Empowering users with truth</p>
      </footer>
    </div>
  );
}

function Spinner() {
  return (
    <div className="loader">
      <style jsx>{`
        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
