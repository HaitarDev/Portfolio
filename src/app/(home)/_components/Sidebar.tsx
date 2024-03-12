"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navSetting } from "@/utils/navSetting";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-full p-6">
        <SheetHeader></SheetHeader>
        <ul className="flex flex-col gap-3 font-bold text-3xl text-end py-8  ">
          {navSetting.map(({ href, label }) => (
            <div key={href}>
              <li>
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
            </div>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
