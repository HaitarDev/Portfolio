"use client";

import { cn } from "@/lib/utils";
import { navSetting } from "@/utils/navSetting";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";

function NavItems() {
  const router = useRouter();

  return (
    <div className="text-black">
      <ul className=" items-center gap-6 hidden lg:flex">
        {navSetting.map(({ href, label }) => (
          <>
            <li key={href}>
              {href === "/contact" ? (
                <button
                  onClick={() => router.push(href)}
                  className="px-4 py-2 border border-black rounded-md"
                >
                  {label}
                </button>
              ) : (
                <button onClick={() => router.push(href)}>{label}</button>
              )}
            </li>
            <div
              className={cn("h-7 w-[1px] bg-black rotate-12", {
                hidden: href === "/projects" || href === "/contact",
              })}
            ></div>
          </>
        ))}
      </ul>
      <div className="lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
}
export default NavItems;
