
import './App.css';
import SectionAllProducts from './components/SectionAllProducts';
import SectionBest from './components/SectionBest';
import SectionCategories from './components/SectionCategories';
import SectionHero from './components/SectionHero';
import SectionTestemonials from './components/SectionTestimonials';


const App = () => {
  return (
    <div className="App">
      <SectionHero />
      <SectionCategories />
      <SectionBest />
      <SectionAllProducts />
      <SectionTestemonials />
    </div>
  );
};

export default App;
