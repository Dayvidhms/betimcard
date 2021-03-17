import './App.css';
import Logo from './Logo';
import Body from './Body';
import cores from './img/fundo_cores.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="b_cores" src={cores}></img>
        <Logo/>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Localização</a></li>
        </ul>

      </header>

      <Body/>
    </div>
  );
}

export default App;
