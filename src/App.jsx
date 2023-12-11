import { useState, useContext, useEffect} from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import { WishListContext } from './components/Context/Context'

function App() {

  const [wishArray, setWishArray ] = useState([])

  return (
    <WishListContext.Provider value={{ wishArray, setWishArray }}>
    <Header/>
    <Home/>
    </WishListContext.Provider>
  )
}

export default App
