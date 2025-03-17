import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import {Autoplay} from 'swiper/modules';
const OutstandingSlider = () =>{
   const sliderItem = [
       {
         id:1,
         icon:'./images/se1.svg',
         hd:'White Label Crypto OTC Trading Platform',
         para:'Opris is a globally recognized crypto OTC trading platform provider, offering top-notch White Label Crypto OTC Trading Software solutions. Our advanced software supports multiple digital coins like Bitcoin, Ethereum, Litecoin, and more.',
         buttonText:'Get a Started',
       },
       {
        id:2,
        icon:'./images/se2.svg',
        hd:'Custom Crypto OTC Trading Development',
        para:'Opris helps you build a custom OTC trading platform. We offer personalized solutions to create high-performance crypto exchange systems. Whether you need a solution from the ground up or a white-label option, we’ve got you covered.',
        buttonText:'Get a Started',
      },
   ];
   const sliderClone = [...sliderItem,...sliderItem]
   return(
    <section className="outstanding-blk">
       <div className="container">
           <strong>Opris  As A Crypto OTC Trading Platform Development <br/>
           Company Outstanding In</strong>
           <div className="row">
              <Swiper slidesPerView={2} spaceBetween={20} modules={[Autoplay]} autoplay={{delay:3000,disableOnInteraction:false}} className="mySwiper" breakpoints={{0:{slidesPerView:1},767:{slidesPerView:2}}}>
                 {sliderClone.map((ou,index) => (
                    <SwiperSlide key={index}>
                        <div className="company-item">
                        <div className="cpy-icon">
                           <img src={ou.icon} alt={ou.hd}/>
                        </div>
                        <b>{ou.hd}</b>
                        <p>{ou.para}</p>
                        <button className="blk-btn">{ou.buttonText}</button>
                    </div>
                    </SwiperSlide>
                 ))}
              </Swiper>
           </div>
       </div>
    </section>
   )
}
export default OutstandingSlider;