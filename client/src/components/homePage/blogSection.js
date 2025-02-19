"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// bg-[#F1F4F7]
const blogs = [
  {
    id: 3,
    title: "Artificial Intelligence: Changing the World",
    description: "Learn how AI is reshaping industries, automating tasks, and driving innovation worldwide.",
    date: "March 10, 2025",
    category: "Artificial Intelligence",
    image: "/assets/ai-cyber.jpg",
    className: "md:col-span-1",
  },
  {
    id: 1,
    title: "Apple Vision Pro: The Future of Spatial Computing",
    description: "Discover how Apple Vision Pro is revolutionizing AR/VR experiences with cutting-edge technology.",
    date: "January 21, 2025",
    category: "AR/VR Technology",
    image: "/assets/apple-vision.jpg",
    className: "md:col-span-1",
  },
  {
    id: 2,
    title: "The Future of AR/VR in Everyday Life",
    description: "Explore how Augmented and Virtual Reality are revolutionizing entertainment, education, and business.",
    date: "February 5, 2025",
    category: "AR/VR Technology",
    image: "/assets/ar-vr.jpg",
    className: "md:col-span-1",
  },
];

const FeaturedBlogs = () => {
  const router=useRouter()
  return (
   <div className="max-w-8xl mx-auto p-8 flex flex-col items-center  dark:bg-dark w-full">
   <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
        Recent Blog
      </h1>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto p-8 flex flex-col items-center">
      {blogs.map((blog) => (
        <Card key={blog.id} className="hover:shadow-0 transition border-none w-full h-full">
          <CardContent className="p-0 relative ">
            <div className="w-full h-60 lg:h-50 overflow-hidden rounded-xl cursor-pointer">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full rounded-xl h-full object-cover transition-transform duration-300 ease-in-out transform object-cover hover:scale-105"
              />
            </div>
            <div className="p-4 cursor-pointer w-full h-full">
              <p className="text-sm text-gray-500">{blog.date}</p>
              <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
              <p className="text-sm text-gray-400 mt-1">{blog.category}</p>
              <p className="text-gray-600 mt-2">
                {blog.description.length > 80 ? `${blog.description.slice(0, 80)}...` : blog.description}
              </p>

            </div>
          </CardContent>
        </Card>
      ))}
    </div>
      {/* <Button variant="more" className="rounded-3xl" onClick={() => router.push('/blog')}>
              Explore our related blog
            </Button> */}
            <button onClick={() => router.push('/blog')} className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Explore our Blog
      </button>
   </div>
  );
};

export default FeaturedBlogs;
