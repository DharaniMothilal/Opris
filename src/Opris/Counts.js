import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
const Count = ({ icon, count, text }) => {
    return (
        <div className="count-block">
            <img src={icon} alt="icon" />
            <b>{count}<i>+</i></b>
            <p>{text}</p>
        </div>
    )
}
export { Count };

const MainCount = () => {
    const blockData = [
        { icon: './Opris/ci1.svg', count: '100', text: 'Trusted clients' },
        { icon: '/images/ci2.svg', count: '40', text: 'Blockchain Experts' },
        { icon: '/images/ci3.svg', count: '150', text: 'Successful projects' },
        { icon: '/images/ci4.svg', count: '3', text: 'Years of Experience' }, 
        { icon: '/images/ci5.svg', count: '30', text: 'Nations served' }
    ];
    return (
        <section className="counts-section">
            <div className="desk-view">
                <div className="row">
                    {blockData.map((count, index) => (
                        <Count key={index} {...count} />
                    ))}
                </div>
            </div>
            <div className="mob-view">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={1.8}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        1000: { slidesPerView: 4.2 },
                        880: { slidesPerView: 3.8 },
                        650: { slidesPerView: 3.4 },
                        480: { slidesPerView: 2.3 },
                    }}
                >
                    {blockData.map((count, index) => (
                        <SwiperSlide key={index}>
                            <Count {...count} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
export default MainCount;
