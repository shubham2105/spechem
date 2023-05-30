import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductCards from './components/ProductCards';
//import Hero from './components/Hero';



function App() {
  return (
    <>
      <Header/>
      <Carousel/>
      <div class="flex items-center justify-center">
        <div class="text-center text-black">
        <p>
                Specialty Chemicals manufactures a range of Specialty Chemicals and
                Water soluble polymers for applications in various indusrty
                segments.
            </p>
        </div>
      </div>
      <ProductCards/>
      

      <Footer/>
    </>
   
  );
}

export default App;
