import Link from "next/link";
import HeaderLink from "./Header_Link";
import Theme_Toggler from "./Theme_Toggler";

export default async function Header() {
  
  const NavLinks = [
    { href: "/", text: "home" },
    { href: "/lin_2", text: "link2" },
    { href: "/link_3", text: "link3" },
  ];

  return (
    <header className="flex justify-between items-center p-8 px-20 text-xl">
      
      <Link href={"/"} className="link">Logo</Link>
        
      <div className="flex justify-between items-center gap-20">

        <nav className="flex gap-16">
          {
            NavLinks.map((link, i) => (
              <HeaderLink key={i} href={link.href} text={link.text} />
            ))
          }
        </nav>

        <Theme_Toggler />

      </div>

    </header>
  )
}