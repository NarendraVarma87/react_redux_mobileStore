import './App.css'
import Mainpage from './Components/Mainpage'
import Navbar from './Components/Navbar'

function App() {
 
  return (
    <>
    <div style={{marginBottom : '100px'}} className='container-fluid'>
    <Navbar/>
    </div>
     <Mainpage/>
    </>
  )
}

export default App
