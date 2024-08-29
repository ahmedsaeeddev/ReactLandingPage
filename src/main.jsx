import { StrictMode } from 'react'
import './assets/style.css'
import { createRoot } from 'react-dom/client'
import HeroSect2 from "./HeroSect2.jsx";
import HeroSect from "./HeroSect.jsx";
import Nav from "./NavBar.jsx";
import Offers from "./Offers.jsx";
import Testimonials from "./Testimonials.jsx";
import NewsLetter from './Newsletter.jsx';
import Footer from './Footer.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Nav />
      <HeroSect />
      <HeroSect2 />
      <Offers />
      <Testimonials />
      <NewsLetter />
      <Footer />
      </>
  </StrictMode>
)

