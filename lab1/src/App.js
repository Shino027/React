import './App.css'
import Home from './Home';
import SanPhamNhieuLoai from './SanPhamXemNhieu';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from './NotFound';
import GioiThieu from './Introduce';
import ChiTiet from './Detail';
import SPTrongLoai from './ProductInCate';
import TimKiem from './Search';

var sotin=10;

function App() {
  return (
    <BrowserRouter basename='/'>
    <div className="container">
    <header></header>
    {/* <nav><Menu/></nav> */}
    <main className='d-flex'>
    <article className='col-md-9'> <Home/> 
    
    <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/gioithieu' exact element={<GioiThieu/>} />
        <Route path='/sp/:id' exact element={<ChiTiet/>} />
        <Route path='/loai/:id_loai' exact element={<SPTrongLoai/>} />
        <Route path='/timkiem/' exact element={<TimKiem/>} />
        <Route  element={<NotFound/>}/>
    </Routes>

    </article>
      <aside className='col-md-3'> <SanPhamNhieuLoai sotin={sotin} /></aside>
    </main>
    <footer><p> Nguyen Tan Phat Thinh</p></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
