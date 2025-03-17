import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import {Autoplay} from 'swiper/modules';
import quote from './images/quotes.svg';
import logo from './images/rev-logo.svg';
const reviews = [
    {
        id:1,
        content:'Opris is an outstanding crypto exchange development company specializing in custom OTC exchange solutions. We stand out by offering secure, scalable, and user-friendly platforms tailored to each client’s needs, making crypto trading simple, efficient, and reliable.',
        author:'- OPRIS EXCHANGE SOFTWARE TEAM',
    },
    {
        id:2,
        content:'Opris is an outstanding crypto exchange development company specializing in custom OTC exchange solutions.',
        author:'- OPRIS SOFTWARE ASSOCIATE TEAM',
    },
    {
        id:3,
        content:'Opris is an outstanding crypto exchange development company specializing in custom OTC exchange solutions. We stand out by offering secure, scalable, and user-friendly',
        author:'- OPRIS COORDINATE SOFTWARE TEAM',
    },
];

const OprisReview = () =>{
    return(
        <section className="opris-review">
            <div className="container">
               <div className="row">
                  <div className="lft">
                        <h4>OTC Crypto Exchange Development Company</h4>
                        <p>An OTC crypto exchange development company helps build secure and high-volume platforms for private cryptocurrency trading. These companies provide solutions for institutions, high-net-worth individuals, and businesses that need safe, seamless, and discrete transactions. They focus on privacy, reliability, and high performance to ensure smooth and secure crypto trading</p>
                  </div>
                  <div className="ryt">
                     <Swiper slidesPerView={1}  autoplay={{ delay: 4000, disableOnInteraction: false }} modules={[Autoplay]}  className="mySwiper">
                         {reviews.map((review) =>(
                            <SwiperSlide key={review.id}>
                                <div className="rev-item">
                                   <div className="rev-top">
                                      <img src={quote} alt="quote" width='35' height='27'/>
                                      <img src={logo} alt="logo" width='64' height="24"/>
                                   </div>
                                   <p>{review.content}</p>
                                   <strong>{review.author}</strong>
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
export default OprisReview;