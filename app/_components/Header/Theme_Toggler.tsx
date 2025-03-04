"use client"

import MoonSVG from '@/app/_assets/MoonSVG'
import SunSVG from '@/app/_assets/SunSVG'
import { useTheme } from 'next-themes'

const Theme_Toggler = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button onClick={handleClick}>
      {
        theme === "light"

          ? <SunSVG className="size-6 hover:rotate-180 hover:text-[var(--hover-primary)] duration-500" />
          : <MoonSVG className="size-6 hover:rotate-235 hover:text-[var(--hover-primary)] duration-500" />
      }
    </button>
  )
}

export default Theme_Toggler