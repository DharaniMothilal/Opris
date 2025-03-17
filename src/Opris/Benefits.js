import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from 'swiper/modules';
const Benefits = () => {
    const BeData = [
        {
            id:1,
            icon: './images/be1.svg',
            title: 'Scalability',
            content: 'Our OTC exchange platform is highly scalable, thanks to its modular design. It can handle multiple altcoins, easily integrate with third-party APIs, and allows for custom features and regular updates.'
        },
        {
            id:2,
            icon: './images/be2.svg',
            title: 'Ease for Business',
            content: 'The platform simplifies business operations with features like automatic IP detection for local ads, KYC compliance, fund tracing, transaction reports, and MIS reports.',
        },
        {
            id:3,
            icon: './images/be3.svg',
            title: 'Usability',
            content: 'The platform offers a flexible, user-friendly interface with an intuitive dashboard, market and trade charts, and easy navigation, all designed by UI/UX experts for a smooth trading experience.',
        },
    ];
    const BeDataClone = [...BeData,...BeData];
    return (
        <section className="benefits-section">
            <div className="container">
                <div className="row">
                    <div className="lft">
                        <h5>Benefit of using our OTC Crypto Exchange Software</h5>
                        <p>Choosing an OTC exchange platform comes with these valuable benefits</p>
                    </div>
                    <div className="ryt">
                        <Swiper 
                        slidesPerView={3} 
                        loop={true}
                        spaceBetween={20} 
                        breakpoints={{
                            1200: { slidesPerView: 3 },
                            768: { slidesPerView: 2 },
                            550: { slidesPerView: 1.6 },
                            0: { slidesPerView: 1 },
                        }} 
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                         modules={[Autoplay, Pagination]} 
                         className="mySwiper">
                            {BeDataClone.map((be,index) => (
                                <SwiperSlide key={index}>
                                     <div className="benef-item">
                                        <img src={be.icon} alt={be.title}/>
                                        <b>{be.title}</b>
                                        <p>{be.content}</p>
                                     </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Benefits;