import { useState } from "react";
const StackTabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const TabTitle = [
        { id: 'tab1', label: 'Blockchain Platforms' },
        { id: 'tab2', label: 'Frameworks' },
        { id: 'tab3', label: 'Programming Languages' },
        { id: 'tab4', label: 'Smart contracts' },
        { id: 'tab5', label: 'Storage' },
    ];
    const tabContent = {
        tab1: [
            { img: `${process.env.PUBLIC_URL}/images/stack-icon1.svg`, title: 'Ethereum' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon2.svg`, title: 'Polygen' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon3.svg`, title: 'Solana' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon4.svg`, title: 'Avalanche' },
        ],
        tab2: [
            { img: `${process.env.PUBLIC_URL}/images/stack-icon1.svg`, title: 'Corda' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon2.svg`, title: 'Quorum' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon3.svg`, title: 'Hyperledger Sawtooth' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon4.svg`, title: 'Stellar' },
        ],
        tab3: [
            { img: `${process.env.PUBLIC_URL}/images/stack-icon1.svg`, title: 'Java' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon2.svg`, title: 'Python' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon3.svg`, title: 'Solidity' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon4.svg`, title: 'JavaScript' },
        ],
        tab4: [
            { img: `${process.env.PUBLIC_URL}/images/stack-icon1.svg`, title: 'Ethereum' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon2.svg`, title: 'Polygen' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon3.svg`, title: 'Solana' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon4.svg`, title: 'Avalanche' },
        ],
        tab5: [
            { img: `${process.env.PUBLIC_URL}/images/stack-icon1.svg`, title: 'BitTorrent' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon2.svg`, title: 'Distributed ledger' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon3.svg`, title: 'Sia' },
            { img: `${process.env.PUBLIC_URL}/images/stack-icon4.svg`, title: 'Filecoin' },
        ],
    };
    return (
        <section className="stack-blk">
            <div className="container">
                <div className="stack-title">
                    <strong>Next-gen Technology Stack Our OTC Crypto Exchange Development</strong>
                    <p>At Opris, we use advanced technologies to create exceptional OTC cryptocurrency exchanges tailored to your <br /> needs. Our tech stack ensures a seamless and efficient experience for your crypto exchange platform.</p>
                </div>
                <div className="stack-tabs">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {TabTitle.map((tab) => (
                            <li className="nav-item" key={tab.id} role="presentation">
                                <button className={`nav-link op-btn ${activeTab === tab.id ? 'active' : ' '}`} id={`${tab.id}-tab`}
                                    data-bs-toggle="tab"
                                    type="button"
                                    role="tab" onClick={() => setActiveTab(tab.id)}>
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="tab-content">
                    {TabTitle.map((tab) => (
                        <div key={tab.id} className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ' '}`} id={tab.id}
                        role="tabpanel">
                            <div className="row">
                                {tabContent[tab.id].map((item, index) => (
                                    <div className="stack-item" key={index}>
                                        <img src={item.img} alt={item.title} />
                                        <b>{item.title}</b>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}
export default StackTabs;