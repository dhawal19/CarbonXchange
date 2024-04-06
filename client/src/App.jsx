import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Home from './components/Home';
import BuyCredit from './components/BuyCredit';
import Ethereum from './components/Ethereum';
function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#061c07] from-0% via-black via-50% to-[#061c07] to-95%' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/buy' element={<BuyCredit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
