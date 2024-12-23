import './App.css'
import Banner from './Components/Banner/Banner'
import Contents from './Components/Contents/Contents'
import Nav from './Components/Nav/Nav'


function App() {

  return (
    <div className='bg-black'>
      <Nav />
      <Banner />
      <Contents />
    </div>
  )
}

export default App
