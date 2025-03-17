import { useState } from "react"

const SoftwareTabs = () => {
    const [activeTabs, setActiveTab] = useState('tab1');
    const items = [
        {
            id: 'tab1',
            title: 'Commodities',
            icon: './images/s1-icon.svg',
            hd: 'Commodities',
            para: 'Commodities can be turned into cryptocurrencies and then traded on the OTC exchange platform.'
        },
        {
            id: 'tab2',
            title: 'P2p Trading',
            icon: './images/s1-icon.svg',
            hd: 'P2p Trading',
            para: 'P2p Trading can be turned into cryptocurrencies and then traded on the OTC exchange platform.'
        },
        {
            id: 'tab3',
            title: 'Liquidity',
            icon: './images/s1-icon.svg',
            hd: 'Liquidity',
            para: 'Liquidity can be turned into cryptocurrencies and then traded on the OTC exchange platform.'
        },
        {
            id: 'tab4',
            title: 'Revenue Generation',
            icon: './images/s1-icon.svg',
            hd: 'Revenue Generation',
            para: 'Revenue Generation can be turned into cryptocurrencies and then traded on the OTC exchange platform.'
        },
        {
            id: 'tab5',
            title: 'E-Commerce',
            icon: './images/s1-icon.svg',
            hd: 'E-Commerce',
            para: 'E-Commerce can be turned into cryptocurrencies and then traded on the OTC exchange platform.'
        },
    ];
    return (
        <section className="software-tabs">
            <div className="container">
                <strong>Implementing Our Crypto Exchange Software
                    for Business Growth</strong>
                <div className="row">
                    <div className="lft">
                        <ul className="nav nav-tabs">
                            {items.map((item) => (
                                <li className="nav-item" key={item.id}>
                                    <button className={`nav-link op-btn ${activeTabs === item.id ? 'active' : ''}`} onClick={() => setActiveTab(item.id)}>{item.title}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="ryt">
                        <div className="tab-content">
                            {items.map((tab) => (
                                <div className={`tab-pane fade ${activeTabs === tab.id ? 'show active' : ''}`} key={tab.id}>
                                    <div className="sft-item">
                                       <img src={tab.icon} alt={tab.title}/>
                                       <b>{tab.hd}</b>
                                       <p>{tab.para}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SoftwareTabs;