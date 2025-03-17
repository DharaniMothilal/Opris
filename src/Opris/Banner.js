import Lap from './images/lap-main.png';
const Banner = () =>{
    return(
        <section className="main-banner" id='home'>
            <div className="container">
               <div className="row">
                   <div className="lft">
                      <h1>OTC Crypto Exchange Development</h1>
                      <p>Build a top-tier OTC crypto trading platform with the industry’s best tools and expertise. Our solutions ensure smooth, secure, and profitable trading of unlisted securities through a broker-dealer network. Let us help you turn your vision into a million-dollar success.</p>
                      <button className='blk-btn'>Get a Demo</button>
                   </div>
                   <div className="rgt">
                      <img src={Lap} alt='lap' title='lap'/>
                   </div>
               </div>
            </div>
        </section>
    )
}
export default Banner;