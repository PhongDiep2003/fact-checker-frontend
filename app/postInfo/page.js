"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const PostInfo = () => {
  const [content, setContent] = useState("");
  const searchParams = useSearchParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const id = searchParams.get("id");
        const res = await fetch(`http://localhost:3000/api/post/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          const data = await res.json();
          setPost(data.data);
        }
      } catch (error) {
        console.log("Error in Fetching Comments: ", error.message);
      }
    };
    fetchPost();
  }, []);

  const handleEnterComment = async (event) => {
    if (event.key === "Enter") {
      createComment();
    }
  };

  const createComment = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const postId = searchParams.get("id");
        const res = await fetch("http://localhost:3000/api/postComment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postId, userId, content }),
        });
        if (res.ok) {
          await res.json();
          console.log("Comment Submitted Successfully");
        }
      } else {
        alert("Please login to comment");
      }
    } catch (error) {
      console.log("Error in Submitting Comment: ", error.message);
    } finally {
      setContent("");
    }
  };
  return (
    post && (
      <div className="h-screen">
        {/* Grid */}
        <div className="grid grid-cols-2 h-full">
          {/* Post Info */}
          <div className="bg-[#1A2B44] ">
            {post?.claims.map((claim, index) => (
              <div className="flex flex-row pt-16 pl-44 space-x-20" key={index}>
                <div className="p-10 bg-white w-20 h-20 rounded-sm flex justify-center items-center">
                  <p className="text-5xl text-black">{index + 1}</p>
                </div>

                <div className="flex flex-col">
                  <p className="text-2xl">{claim?.claim}</p>

                  <button className="w-[250px] bg-black h-11 my-6 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[rgb(220,20,60)] before:to-[rgb(220,20,60)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-white font-medium">
                    {" "}
                    Sources
                  </button>

                  <ul className="space-y-2">
                    {claim?.sources.map((source, index) => (
                      <li key={index.toString()}>
                        <a href={source} target="_blank">
                          {source}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Post Comment */}
          <div className="bg-white">
            <div className="flex flex-col pt-16  items-center">
              <input
                className="w-3/4 h-14 p-5 border-2 border-[#1A2B44] rounded-md text-black placeholder-gray-500 focus:outline-none mb-40 "
                placeholder="Enter comment..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={handleEnterComment}
              />
              {/* Comments */}
              <div className="flex w-full flex-col items-center space-y-20 overflow-y-auto">
                {post?.comments.map((comment, index) => {
                  const today = new Date();
                  const commentDate = new Date(comment?.createdAt);
                  const diffDay = (today - commentDate) / (1000 * 60 * 60 * 24);

                  return (
                    <div className="flex flex-col space-y-6 w-3/4" key={index}>
                      <div className="flex justify-between">
                        <div className="flex">
                          <img
                            src={"/user.jpg"}
                            className="object-contain w-14 h-14"
                          />
                          <p className="ml-10 text-black">
                            {comment?.username}
                          </p>
                        </div>
                        <p className="text-black">
                          {diffDay < 1
                            ? "Less than one day"
                            : `${Math.floor(diffDay)} days ago`}
                        </p>
                      </div>
                      <p className="text-black">{comment?.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PostInfo;
