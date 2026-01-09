import React, { useState } from 'react'
import Navbar from './components/Navbar'

const app = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme}>
        <h2>This is Navbar</h2>
        <h2>bahut acha navbar</h2>
      </Navbar>
      
    </div>
  )
}

export default app
