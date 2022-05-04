
import { HashRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
function App() {
  return (
    <HashRouter>
      <Header/>
      <div>
        
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          
        </Routes>
        <Routes>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
