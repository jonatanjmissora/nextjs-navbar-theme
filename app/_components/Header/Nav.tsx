"use client"

import MenuSVG from "@/app/_assets/MenuSVG";
import HeaderLink from "./Header_Link";
import Theme_Toggler from "./Theme_Toggler";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CancelSVG from "@/app/_assets/CancelSVG";

const NavLinks = [
  { href: "/", text: "home" },
  { href: "/lin_2", text: "link2" },
  { href: "/link_3", text: "link3" },
];

export default function Nav() {

  const [show, setShow] = useState<boolean>(false)
  const pathname = usePathname()

  const activeClass = "border-b-[2px] border-foreground80 italic text-foreground80"

  return (
    <>
      <div className="hidden sm:flex justify-between items-center gap-20">
        <nav className="flex gap-16">
          {
            NavLinks.map((link, i) => (
              <HeaderLink key={i} href={link.href} text={link.text} />
            ))
          }

          <Theme_Toggler />

        </nav>

      </div>

      <button className="block sm:hidden" onClick={() => setShow(true)}>
        <MenuSVG className="size-8" />
      </button>

      {show &&
        <div className="flex flex-col movil-menu fixed inset-0 bg-slate-900/97 text-[var(--white)]">
          <div className="w-full flex justify-end p-6">
            <button onClick={() => setShow(false)}><CancelSVG className="size-10" /></button>
          </div>

          <div className="flex-1 flex flex-col justify-between items-end py-20">

            <ul className="w-full flex flex-col gap-8 items-end justify-center px-12" >

              {
                NavLinks.map((link, index) => (
                  <li
                    key={index}
                    style={{ '--i': index, animationDelay: `${index * 0.1}s` } as React.CSSProperties}
                  >
                    <Link
                      onClick={() => setShow(false)}
                      className={`link text-3xl ${pathname === link.href && activeClass}`}
                      href={link.href} >
                      {link.text}
                    </Link>
                  </li>
                ))
              }

            </ul>

            <ul className="flex flex-col items-end gap-4 px-12 border-t border-slate-800 pt-8 w-full">
              <li
                style={{ '--i': NavLinks.length, animationDelay: `${NavLinks.length * 0.1}s` } as React.CSSProperties}
              >
                <Theme_Toggler />
              </li>
            </ul>

          </div>
        </div>
      }
    </>
  )
}
