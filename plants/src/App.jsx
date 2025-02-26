
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SectionAllProducts from './components/SectionAllProducts';
import SectionBest from './components/SectionBest';
import SectionCategories from './components/SectionCategories';
import SectionFooter from './components/SectionFooter';
import SectionHero from './components/SectionHero';
import SectionTestimonials from './components/SectionTestimonials';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import MainLayouts from './layouts/MainLayouts';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFountPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<MainLayouts/>} >
          <Route index element={<HomePage/>} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage/>} />
          <Route path='products/:id' element={<SingleProductPage/>} />
          <Route path='products' element={<ProductsPage/>} />

          <Route path='*' element={<NotFoundPage/>} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;