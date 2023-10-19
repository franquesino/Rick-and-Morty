
import './App.css';
import Landing from './components/Landing/Landing';
import {Routes, Route} from "react-router-dom"
import Characters from './components/characters/characters'
import CharacterDetail  from './components/characterDetail/characterDetail';


function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Landing/>}/>
        
        <Route exact path="/home" element={<Characters/>} />
        <Route path="/detail/:id" element={<CharacterDetail/>} />
      </Routes>
      
    </div>
  );
}

export default App;

