import { Swiper , SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";
const CryptoCoins = () => {
    const coins = [
        { img: `${process.env.PUBLIC_URL}/images/coin1.svg`, text: 'Bitcoin (BTC)' },
        { img: `${process.env.PUBLIC_URL}/images/coin2.svg`, text: 'Ethereum (ETH)' },
        { img: `${process.env.PUBLIC_URL}/images/coin3.svg`, text: 'Bitcoin Cash (BCH)' },
        { img: `${process.env.PUBLIC_URL}/images/coin4.svg`, text: 'Litecoin (LTC)' },
        { img: `${process.env.PUBLIC_URL}/images/coin5.svg`, text: 'Ripple (XRP)' },
        { img: `${process.env.PUBLIC_URL}/images/coin6.svg`, text: ' PrimeCoin' },
        { img: `${process.env.PUBLIC_URL}/images/coin7.svg`, text: 'NXT' },
        { img: `${process.env.PUBLIC_URL}/images/coin8.svg`, text: 'Solana (SOL)' },
        { img: `${process.env.PUBLIC_URL}/images/coin9.svg`, text: ' Feathercoin' },
    ];
    return (
        <section className="cryptoCoins-blk">
            <div className="container">
                <strong>Crypto coins used in OTC trading</strong>
                <p>Our platform allows smooth integration of these coins or any cryptocurrency as per your requirements.</p>
                <div className="desk-view">
                    <div className="row">
                        {coins.map((coin, index) => (
                            <div className="cyc-item" key={index}>
                                <img src={coin.img} alt={coin.text} />
                                <b>{coin.text}</b>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mob-view">
                   <div className="row">
                   <Swiper modules={[Autoplay]} spaceBetween={15} breakpoints={{
                    992:{slidesPerView:4},
                    550:{slidesPerView:3},
                    480:{slidesPerView:3},
                    0:{slidesPerView:1},
                   }} autoplay={{delay:3000,disableOnInteraction:false}} >
                     {coins.map((coin,index) => (
                        <SwiperSlide key={index}>
                               <div className="cyc-item" key={index}>
                                <img src={coin.img} alt={coin.text} />
                                <b>{coin.text}</b>
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
export default CryptoCoins;