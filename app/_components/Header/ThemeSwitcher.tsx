"use client"

import { useTheme } from 'next-themes'
import SunSVG from '../../_assets/SunSVG'
import MoonSVG from '../../_assets/MoonSVG'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className='flex items-center justify-end gap-2  hover:text-[var(--color-primary-hover)]' onClick={handleClick}>
      {
        theme === "light"

          ? <SunSVG className="size-6 sm:size-5 2xl:size-6" />
          : <MoonSVG className="size-6 sm:size-5 2xl:size-6" />
      }
    </div>
  )
}

export default ThemeSwitcher