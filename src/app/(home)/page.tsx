"use client";

import { AnimatedGradientBorderTW } from "@/components/ui/backgriound-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub, BsTwitterX } from "react-icons/bs";

export default function Home() {
  const aboutWords =
    "I am Youssouf, a human first 🙌, from Morocco 🇲🇦, a mobile tribe leader at Obytes and a core team member of the Geekblabla community. I am an open-source believer and a part-time blogger. I mainly enjoy working with React and React Native and sharing my knowledge and experience with others through blog posts and talks.";

  return (
    <main className="mt-20 px-3">
      <div className=" max-w-screen-lg mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 justify-items-center">
        <div className="flex justify-between flex-col">
          <h2 className="group text-6xl font-bold flex gap-6 items-center">
            <span className="group-hover:rotate-12 transition-all">👋</span>{" "}
            Hello !
          </h2>

          <div>
            <TextGenerateEffect
              className="font-medium text-sm leading-6 indent-3  mb-5"
              words={aboutWords}
            />
            <motion.p
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 10, ease: "easeInOut" }}
            >
              Read more about me on the{" "}
              <span className="text-amber-200 hover:text-amber-300 hover:border-b-4 border-dotted border-amber-300 ">
                <Link href={"/about"}>About Page</Link>
              </span>
            </motion.p>
          </div>

          <div className="flex items-center gap-3">
            <p className="font-medium text-lg">Social media: </p>
            <div className="flex items-center gap-2">
              <FaLinkedin
                size={30}
                className="hover:text-amber-500 hover:rotate-3 transition-all"
              />
              <BsTwitterX
                size={30}
                className="hover:text-amber-500 hover:rotate-3 transition-all"
              />
              <BsGithub
                size={30}
                className="hover:text-amber-500 hover:rotate-3 transition-all"
              />
            </div>{" "}
          </div>
        </div>
        <div>
          <AnimatedGradientBorderTW>
            <Image
              className="rounded-md"
              src="/13.jpg"
              width={300}
              height={400}
              alt="me"
              priority
            />
          </AnimatedGradientBorderTW>
        </div>
      </div>
    </main>
  );
}
