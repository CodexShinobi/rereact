import React from 'react'
import Card from './Components.jsx/Card'

const App = () => {
  return (
    <div className="parent">
    
     
      <Card user='Riya' age={19} img ='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww'/>
      <Card user='Siya' age={20} img='https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww'/>
      <Card user='Tiya' age={20} img='https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww'/>
      
    </div>
  )
}

export default App
