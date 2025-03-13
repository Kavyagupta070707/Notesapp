import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import Pastes from './components/Pastes'
import View from './components/View'
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Navbar/>
        <Pastes/>
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar/>
        <View/>
      </div>
    },
    
  ]
)
function App() {


  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
