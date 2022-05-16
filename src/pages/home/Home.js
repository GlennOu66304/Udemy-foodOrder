import React from 'react';
import '../../App.css';
// import HeroSection from '../HeroSection';
// import Cards from '../Cards';
// import Footer from '../Footer';
import{HeroSection,Cards,Footer} from '../../components'
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