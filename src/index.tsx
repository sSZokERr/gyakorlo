import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home'
import Bemutatkozas from './pages/Bemutatkozas'
import Kapcsoalt from './pages/Kapcsolat'


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='bemutatkozas' element={<Bemutatkozas/>}/>
          <Route path='kapcsolat' element={<Kapcsoalt/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}



ReactDOM.render(<App />,  document.getElementById('root'))