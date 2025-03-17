import portfolio from './images/portfolio.png';
const Portfolio = () =>{
    return(
        <section className="portfolio-blk">
               <strong>More than 350 Cryptocurrency Exchanges globally thrive with our portfolio</strong>
               <img src={portfolio} alt='portfolio-img'/>
        </section>
    )
}
export default Portfolio;