import { Component } from 'react'
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/js/bootstrap.bundle.js'

export default class App extends Component{
  componentDidMount(){
    document.title = "Fooldal"
  }
render() {
  return <div className='body'>
            <div className='homePage'>
              <div className='text'>
                <h1>Üdvözöljük a Petrik Webhely-gyár oldalán!</h1>
              </div>
                <h2>Válasszon a fenti menüpontok közül!</h2>
              </div>
            </div>
}
}

