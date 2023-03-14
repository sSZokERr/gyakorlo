import { Component } from 'react'
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/js/bootstrap.bundle.js'

class App extends Component{
  componentDidMount(){
    document.title = "Kapcsolat"
  }
render() {
  return <div className='body'>
          <div className='kapcsolat'>
              <label htmlFor="email">Email: </label><input type="email" /><br />
              <label htmlFor="message">Uzenet: </label><textarea name="text" id="text" placeholder='Irja ide az uzenetet'></textarea>
          </div>
          </div>
}
}

export default App;
