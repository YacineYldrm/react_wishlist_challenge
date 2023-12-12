import { useState, useContext, useEffect} from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import { WishListContext } from './components/Context/Context'

function App() {

  // get local data
  const getLocalData = () => {
		const wishArrayLocal = localStorage.getItem("wish");
		return wishArrayLocal ? JSON.parse(wishArrayLocal) : [];
	};

  // set data array state to local storage data
  const [wishArray, setWishArray ] = useState(getLocalData)
  console.log(wishArray);

  const wishContext = useContext(WishListContext);

  // update state each time state changes
  useEffect(() => {
		setWishArray(getLocalData);
	}, [wishContext]);

  return (
    <WishListContext.Provider value={{ wishArray, setWishArray }}>
    <Header/>
    <Home/>
    </WishListContext.Provider>
  )
}

export default App
