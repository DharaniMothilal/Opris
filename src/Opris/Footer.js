import { useState } from "react";
import twt from './images/twt-icon.svg';
import fc from './images/fc-icon.svg';
import utube from './images/u-tube.svg';
import lin from './images/lin-icon.svg';
import { Link } from "react-scroll";
import logo from './images/logo.svg';
const Footer = () => {
    const [activeLink, setActiveLink] = useState(null);
    const toggleFooter = (index) => {
        setActiveLink(activeLink === index ? null : index);
    }
    const footerLinks = [
        {
            title: 'Pages',
            links: ['Home 1', 'Home 2', 'Home 3', 'About', 'Feature', 'Blog', 'Shop', 'Contact 1', 'Contact 2', 'Contact 3'],
        },
        {
            title: 'other pages',
            links: ['Pricing 1', 'Pricing 2', 'Pricing 3', '404', 'Password', 'Checkout', 'Blog Details']
        },
        {
            title: 'Utility',
            links: ['Style Guide', 'Licencing', 'Change Log', 'Instructions']
        },
        {
            title: 'Help',
            links: ['More Templates', 'Designer Support']
        },
    ];
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="lft">
                        <strong>Empowering Dreams, One
                            Dollar at a Time</strong>
                        <a href="mailto:hello@Opris.com">hello@Opris.com</a>
                        <ul className="social-icons">
                            <li><a href="#" onClick={(e) => e.preventDefault()}><img src={twt} alt="twitter" /></a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()}><img src={fc} alt="facebook" /></a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()}><img src={utube} alt="youtube" /></a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()}><img src={lin} alt="linkedin" /></a></li>
                        </ul>
                    </div>
                    <div className="ryt">
                        {footerLinks.map((block, index) => (
                            <div className="foot-links" key={index}>
                                <p className={`${activeLink === index ? 'open':' '}`} onClick={() => toggleFooter(index)}>{block.title}</p>
                                <ul className={`${activeLink === index ? 'active' : 'footer-menu'}`}>
                                    {block.links.map((link, index) => (
                                        <li key={index}>
                                            <a href="#" onClick={(e) => e.preventDefault()}>{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ft-btm">
                    <p>
                        <Link to="home" duration={500} smooth={true}>
                            <img src={logo} alt="footer-logo" />
                        </Link>
                        © 2024 - Powered by
                    </p>
                    <ul>
                        <li>
                            <a href="#" onClick={(e) => e.preventDefault()}>Terms and conditions </a>
                            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;