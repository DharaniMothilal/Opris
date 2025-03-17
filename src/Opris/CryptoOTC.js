import coin from './images/coin-crypto.png';
const CryptoOTC = () => {
    return (
        <section className="crypto-otc">
            <div className="container">
                <div className="row">
                    <div className="lft">
                        <strong>Customized Crypto OTC
                            Trading Platform
                            Development Solutions</strong>
                            <p>Looking for the cost of developing a custom over-the-counter
                            crypto exchange based on your specific needs?</p>
                            <button className='wt-btn op-btn'>Get Quote</button>
                    </div>
                    <div className="ryt">
                        <img src={coin} alt='coin'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CryptoOTC;