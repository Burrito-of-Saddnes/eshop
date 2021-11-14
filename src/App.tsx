import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';

import './scss/App.scss';

function App() {
  return (
    <div className="scroll">
      <div className="App">
        <HeaderComponent/>
        <MainComponent/>
      </div>
    </div>
  );
}

export default App;
