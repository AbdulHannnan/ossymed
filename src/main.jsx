
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import CardsSection from './components/CardsSection.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import BlogSection from './components/BlogSection.jsx'
import CareerComponent from './components/CareerComponent.jsx'
import DegreeComponent from './components/DegreeComponent.jsx'
import Footer from './components/Footer.jsx'
import Copyright  from './components/Copyright.jsx'


createRoot(document.getElementById('root')).render(
<div>
    <Nav />

    <Hero/>
    <h2 className="text-3xl text-green-600 font-bold mb-6 text-center w-full pt-3">Degree and Training Programs</h2>
   <div className='lg:px-28 py-2 sm:px-1'><CardsSection/></div> 
   <FeaturesSection/>
    <div className='bg-[#FDF8F3]'><BlogSection/></div>
    <CareerComponent/>
    <DegreeComponent/>
    <Footer/>
    <Copyright/>
 
    </div>
)
