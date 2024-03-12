"use client";

import { cn } from "@/lib/utils";
import { navSetting } from "@/utils/navSetting";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import NavBtn from "./NavBtn";
import { ArrowUpRight } from "lucide-react";

import { motion } from "framer-motion";

function NavItems() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <ul className="items-center gap-4 hidden lg:flex">
        {navSetting.map(({ href, label }) => (
          <div className=" flex items-center " key={href}>
            <li>
              {href === "/contact" ? (
                <motion.button
                  className=" flex items-center gap-1 px-6 py-3 font-semibold  bg-amber-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                  onClick={() => router.push(href)}
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {label} <ArrowUpRight />
                </motion.button>
              ) : (
                <NavBtn
                  isActive={pathname === href}
                  onClick={() => router.push(href)}
                >
                  {label}
                </NavBtn>
              )}
            </li>
            <div
              className={cn("h-10 w-[1px] bg-black/70 rotate-12 ml-4", {
                hidden: href === "/projects" || href === "/contact",
              })}
            ></div>
          </div>
        ))}
      </ul>
      <div className="lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
}
export default NavItems;
