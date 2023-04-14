import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";


function App() {
  return (
    <div className="app">

<Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/header' element={<Header />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
