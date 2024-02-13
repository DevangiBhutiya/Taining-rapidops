import React, { createContext, useContext, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark' // string literal type

export type ThemeContextType = {
  theme: Theme,
  toggleTheme: () => void,
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
// console.log(ThemeContext)
// export const useTheme = () => {
//   const context = useContext(ThemeContext)
//   console.log(context)
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider')
//   }
//   return context
// }

export const MyContext: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState < Theme > ("light")
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}