import React, { createContext, useState } from 'react'

export const ThemeDataContext=createContext()
const [theme, setTheme] = useState('light')
const themeContext = (props) => {
  return (
    <div>
      <ThemeDataContext.Provider value={[theme,setTheme]}>
        {props.children}
      </ThemeDataContext.Provider>
      
    </div>
  )
}

export default themeContext
