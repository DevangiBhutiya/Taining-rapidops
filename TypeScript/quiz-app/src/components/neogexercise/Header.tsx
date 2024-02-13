import React, { useContext } from 'react'
import { ThemeContext, ThemeContextType } from '../../context/MyContext'



interface HeaderProps{
    title: string
}
const Header = ({title}: HeaderProps) => {
// const {theme, toggleTheme} = useTheme()

const {theme,toggleTheme} = useContext(ThemeContext) as ThemeContextType
  return (
    <div>
      <header className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
      <h1>{title}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>

    </div>
  )
}

export default Header
