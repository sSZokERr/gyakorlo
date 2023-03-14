import { Component } from 'react'
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/js/bootstrap.bundle.js'
  import Profile from './img/profile.png'

class App extends Component{
  componentDidMount(){
    document.title = "Bemutatkozas"
  }
render() {
  return <div className='body'>
<div className='bemutatkozas'>
  <div className='bemutat'>
      <h1>Történet</h1>
      <p>A Petrik Webehely-gyárat 2011-ben alapították, hogy az egyre növekvő webes igényeket ki tudja elégíteni.</p>
      <p>2022-ben multinacionális céggé nőtte ki magát a kezdetben önkéntesekből álló szervezet.</p>
      <h1>Jelenlegi tagjaink</h1>
      <img src={ Profile } alt="Fotó a főnökről" className='boss'/>
      <ul>
        <li>Erdős Ildikó</li>
        <li>Jónás Viola</li>
        <li>Kató Anna</li>
        <li>Pintér Koppány</li>
        <li>Sas Gizi</li>
      </ul>
  </div>
</div>
  </div>
}
}

export default App;
