import React from 'react';
import '../../App.css';
import HeroSection from '../../components/hero/HeroSection';
import Cards from '../../components/cards/Cards';
import Footer from '../../components/footer/Footer';
// import{HeroSection,  Footer} from '../../components'
function Home(){

    return(
        <>
        <HeroSection />
        <Cards />
        <Footer/>
        </>
    )
}

export default Home;