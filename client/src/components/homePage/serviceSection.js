
// import { Button } from "@/components/ui/button";
// import { HoverEffect } from "@/components/ui/card-hover-effect";
// import { useRouter } from "next/navigation";

// export default function ServiceSection() {
//   const router=useRouter()
//   return (
//     (<div className="max-w-7xl mx-auto p-8 flex flex-col items-center">

//      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
//         Our Services
//       </h1>
//       <div className="flex flex-col">
//       <HoverEffect items={projects} />
//       <span className="flex justify-center w-full">
//       <Button variant="more" className="rounded-3xl" onClick={() => router.push('/services')}>
//         Related Services
//       </Button>
//       </span>
//       </div>

//     </div>)
//   );
// }
// export const projects = [
//   {
//     title: "AR/VR",
//     description:
//       "A technology company that builds economic infrastructure for the internet.",
//     link: "https://stripe.com",
//   },
//   {
//     title: "ERP System",
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     link: "https://netflix.com",
//   },
//   {
//     title: "Whatsapp Bot",
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     link: "https://google.com",
//   },
//   {
//     title: "Headless CMS",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     link: "https://meta.com",
//   },
//   {
//     title: "Website Development",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "https://amazon.com",
//   },
//   {
//     title: "CRM",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
// ];




"use client";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HeroHighlight } from "../ui/hero-highlight";
import { ButtonsCard } from "../ui/tailwindcss-buttons";
// Project data
export const projects = [
  {
    title: "AR/VR",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "ERP System",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Whatsapp Bot",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Headless CMS",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Website Development",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "CRM",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export default function ServiceSection() {
  const router = useRouter();

  return (

    <HeroHighlight className='h-full py-2'>
  <motion.div
    className=" inset-0 z-0  to-red-500 opacity-30"
    initial={{
      opacity: 0,
      scale: 1.1,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 1.5,
      ease: [0.4, 0.0, 0.2, 1],
    }}
  >
    <div className="max-w-7xl h-full mx-auto p-2  flex flex-col items-center gap-0 ">
      {/* Section Title */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="scroll-m-20 text-4xl font-extrabold  tracking-tight lg:text-4xl z-10"
      >
        Our Services
      </motion.h1>

      {/* Hover Effect for Projects */}
      <div className="flex flex-col z-10">
        <HoverEffect items={projects} />

        {/* Related Services Button */}
        <span className="flex justify-center w-full">
          {/* <Button
            variant="more"
            className="rounded-3xl"
            onClick={() => router.push('/services')}
          >
            Related Services
          </Button> */}
          <button onClick={() => router.push('/services')} className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Related Services
      </button>
        </span>
      </div>
    </div>
  </motion.div>
</HeroHighlight>

   
  );
}
