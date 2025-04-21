import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Activity from './components/Activity/Activity';
import Offer from './components/Offer/Offer';
import Contact from './components/Contact/Contact';
import Price from './components/Price/Price';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Activity />
      <Offer />
      <Price />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

export default App;