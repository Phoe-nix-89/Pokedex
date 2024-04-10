import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './components/pokedex/Pokedex'
import PokemonList from './PokemonList/PokemonList'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Pokedex /> */}
      {/* <PokemonList /> */}
      <div style={{display : 'flex' , justifyContent : 'center'}}>
        <h1>
          
          <Link style={{borderStyle : 'none' , textDecoration : 'none'}} to={'/'}>Pokedex</Link>


        </h1>
      </div>
      <CustomRoutes />
    </>
  )
}

export default App
