import { Routes, Route } from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Blog from './Pages/Blog';
import FAQ from './Pages/FAQ';
import Home from './Pages/Home';
import Product from './Pages/Product';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
   <div className="App">
   <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
    </Routes>
   </div>

   
  );
}

export default App;
