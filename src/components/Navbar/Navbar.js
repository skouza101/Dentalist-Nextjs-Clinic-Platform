import React from 'react';
import './Navbar.scss';
import Link from 'next/link';
import { useTranslation } from '../../LanguageContext';
import logo from './../../assets/logo.png';

const Navbar = () => {
    const { t, language, setLanguage } = useTranslation();

    const navbarItems = [
        {
            name: t('Home'),
            path: '/',
        },
        {
            name: t('About Us'),
            path: '/about',
        },
        {
            name: t('Single Service'),
            path: '/singleservice',
        },
        {
            name: t('Contact Us'),
            path: '/contact',
        }
    ];

    return (
        <div className='main-nav'>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand logo-text" href="/">
                            <img src={logo.src || logo} alt="logo" className="logo-img" />
                            <span>{t("Dentaire Al Andalus")}</span>
                            <span className='text-primary brand-dot'></span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar Link */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                               { 
                                navbarItems.map (navSingle =>
                                    <li className="nav-item" key={navSingle.name}>
                                        <Link className="nav-link" href={navSingle.path}>{navSingle.name}</Link>
                                    </li>
                                    ) 
                                }
                            </ul>
                            
                            {/* Language Selector */}
                            <div className="language-selector">
                                <select 
                                    className="form-select lang-select" 
                                    value={language} 
                                    onChange={(e) => setLanguage(e.target.value)}
                                >
                                    <option value="en">EN</option>
                                    <option value="fr">FR</option>
                                    <option value="ar">AR</option>
                                </select>
                            </div>

                            {/* Navbar Button */}
                            <div className="theme-btn">
                                <Link href="/contact">{t('Book appointment')}</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;