import Header from "./Header";
import Banner from './Banner';
import MainCount from "./Counts";
import Exchange from "./WhatOtc";
import TabCarousel from "./Tabs";
import OprisReview from "./Review";
import Benefits from "./Benefits";
import ProcessCount from "./ProcessCount";
import CryptoCoins from "./CryptoCoins";
import SoftwareTabs from "./SoftwareTabs";
import OutstandingSlider from "./OutstandingSlider";
import Portfolio from "./Portfolio";
import CryptoOTC from "./CryptoOTC";
import StackTabs from "./StackTabs";
import ExchangePlatform from "./WhyShould";
import Accordian from "./Faq";
import Footer from "./Footer";
const App = () =>{
    return(
        <>
          <Header/>
          <main className="main-content">
              <Banner/>
              <MainCount/>
              <Exchange/>
              <TabCarousel/>
              <OprisReview/>
              <Benefits/>
              <ProcessCount/>
              <CryptoCoins/>
              <SoftwareTabs/>
              <OutstandingSlider/>
              <Portfolio/>
              <CryptoOTC/>
              <StackTabs/>
              <ExchangePlatform/>
              <Accordian/>
          </main>
          <Footer/>
        </>
    )
}
export default App;