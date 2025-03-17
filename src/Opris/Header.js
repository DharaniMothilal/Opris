import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Logo from './images/logo.svg';
import hamburger from './images/hamburger.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false); 
            }
        };
    
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        }
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);
    

    return (
        <header className={`header ${isOpen ? 'menu-open' : ''}`}>
            <div className='container'>
                <div className='row'>
                    <div className='hd-logo'>
                        <Link to='home' duration={500} smooth={true}>
                            <img src={Logo} alt='logo' title='logo' />
                        </Link>
                    </div>
                    <button className='burger-menu' onClick={() => setIsOpen(!isOpen)}>
                        <img src={hamburger} alt='burger' title='hamburger' />
                    </button>
                    {isOpen && <div className='overlay' onClick={() => setIsOpen(false)}></div>}
                    <div className='menu-overlay' ref={menuRef}>
                        <button type='button' className='hide' onClick={() => setIsOpen(false)}>✕</button>
                        <div className='nav-links'>
                            <ul>
                                <li><Link to='home' smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
                                <li><Link to='services' smooth={true} duration={500} onClick={() => setIsOpen(false)}>Services</Link></li>
                                <li><Link to='services' smooth={true} duration={500} onClick={() => setIsOpen(false)}>Services</Link></li>
                                <li><Link to='products' smooth={true} duration={500} onClick={() => setIsOpen(false)}>Products</Link></li>
                                <li><Link to='insights' smooth={true} duration={500} onClick={() => setIsOpen(false)}>Insights</Link></li>
                            </ul>
                        </div>
                        <button className='blk-btn'>Get Started</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
