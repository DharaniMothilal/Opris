import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
const TabCarousel = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const Tabs = [
        {
            id: "tab1",
            title: 'Trading Mechanisms',
            img: './images/oc-lap.png',
            hd: 'Trading Mechanisms',
            para: 'The platform must support advanced trading mechanisms such as limit orders and stop orders. Since OTC trading typically involves larger transactions, the system should be capable of executing these trades discreetly, ensuring minimal impact on market prices.',
            buttonText: 'View Demo'
        },
        {
            id: "tab2",
            title: 'Multi-Cryptocurrency Wallet',
            img: './images/oc-lap.png',
            hd: 'Multi-Cryptocurrency Wallet',
            para: 'The platform must support advanced trading mechanisms such as limit orders and stop orders',
            buttonText: 'View Demo'
        },
        {
            id: "tab3",
            title: 'Multi-Layer Security',
            img: './images/oc-lap.png',
            hd: 'Multi-Layer Security',
            para: 'The platform must support advanced trading mechanisms such as limit orders and stop orders',
            buttonText: 'View Demo'
        },
        {
            id: "tab4",
            title: 'Instant Buy/Sell',
            img: './images/oc-lap.png',
            hd: 'Instant Buy/Sell',
            para: 'The platform must support advanced trading mechanisms such as limit orders and stop orders',
            buttonText: 'View Demo'
        },
    ];
    return (
        <section className="features-tab">
            <div className="container">
                <h3>Top Features of OTC Crypto Exchange Platform</h3>
                <ul className="nav nav-tabs">
                    {Tabs.map((tab) => (
                        <li className="nav-item" key={tab.id}>
                            <button className={`nav-link op-btn ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>
                                {tab.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="row">
                <div className="tab-content">
                    {Tabs.map((tab) => (
                        <div key={tab.id} className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ' '}`}>
                            <Swiper slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Pagination, Autoplay]} className="mySwiper">
                                <SwiperSlide>
                                    <div className="tab-in">
                                        <img src={tab.img} alt={tab.title} />
                                        <div className="ryt">
                                            <strong>{tab.hd}</strong>
                                            <p>{tab.para}</p>
                                            <button className="blk-btn">{tab.buttonText}</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tab-in">
                                        <img src={tab.img} alt={tab.title} />
                                        <div className="ryt">
                                            <strong>{tab.hd}</strong>
                                            <p>{tab.para}</p>
                                            <button className="blk-btn">{tab.buttonText}</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tab-in">
                                        <img src={tab.img} alt={tab.title} />
                                        <div className="ryt">
                                            <strong>{tab.hd}</strong>
                                            <p>{tab.para}</p>
                                            <button className="blk-btn">{tab.buttonText}</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tab-in">
                                        <img src={tab.img} alt={tab.title} />
                                        <div className="ryt">
                                            <strong>{tab.hd}</strong>
                                            <p>{tab.para}</p>
                                            <button className="blk-btn">{tab.buttonText}</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tab-in">
                                        <img src={tab.img} alt={tab.title} />
                                        <div className="ryt">
                                            <strong>{tab.hd}</strong>
                                            <p>{tab.para}</p>
                                            <button className="blk-btn">{tab.buttonText}</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tab-in">
                                        <img src={tab.img} alt={tab.title} />
                                        <div className="ryt">
                                            <strong>{tab.hd}</strong>
                                            <p>{tab.para}</p>
                                            <button className="blk-btn">{tab.buttonText}</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tab-in">
                                        <img src={tab.img} alt={tab.title} />
                                        <div className="ryt">
                                            <strong>{tab.hd}</strong>
                                            <p>{tab.para}</p>
                                            <button className="blk-btn">{tab.buttonText}</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tab-in">
                                        <img src={tab.img} alt={tab.title} />
                                        <div className="ryt">
                                            <strong>{tab.hd}</strong>
                                            <p>{tab.para}</p>
                                            <button className="blk-btn">{tab.buttonText}</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default TabCarousel;