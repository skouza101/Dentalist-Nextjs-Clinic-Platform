import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import Link from 'next/link';
import logo from '../../assets/logo.png';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';
import { useTranslation } from '../../LanguageContext';

const Footer = () => {
    const { t } = useTranslation();

    const footerMenu = [
        {
            'name' : t('About Us'),
            'link' : '/'
        },
        {
            'name' : t('Dental Services'),
            'link' : '/'
        },
        {
            'name' : t('Dentist'),
            'link' : '/'
        },
        {
            'name' : t('FAQs'),
            'link' : '/'
        }
    ];

    const footerContacts = [
        {
            'title': t('Phone Number'),
            'info': '05 23 35 43 57',
            'icon': call
        },
        {
            'title': t('Open Hour'),
            'info': t('09:00 AM - 18:00 PM'),
            'icon': time
        },
        {
            'title': t('Clinic Address'),
            'info': t('N°, Lot Garden City Villa, 6 Av. Ben Badis'),
            'icon': location
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <Link className="footer-logo logo-text" href="/">
                            <img src={logo.src || logo} alt="logo" className="logo-img" />
                            <span>{t("Dentaire Al Andalus")}</span>
                            <span className='text-primary brand-dot'></span>
                        </Link>
                        <p>{t("Clinique Dentaire Al Andalus is a top-rated local practice for cosmetic, preventative, and restorative dentistry")}</p>
 
                        <div className="social-logo">
                            <p>{t("Follow us on")}</p>
                            <ul>
                                <li><a href="/"><FaFacebookF/></a></li>
                                <li><a href="/"><FaTwitter/></a></li>
                                <li><a href="/"><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>{t("Quick Links")}</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li key={singleMenu.name}><Link href="/">{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>{t("Contact & Information")}</p>
 
                            {
                                footerContacts.map(footerContact => {
                                    return  <div className="contact-list" key={footerContact.title}>
                                                <div className="contact-icon">
                                                    <img src={footerContact.icon && footerContact.icon.src ? footerContact.icon.src : footerContact.icon} alt="call" />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{footerContact.title}</p>
                                                    <h5>{footerContact.info}</h5>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>
 
                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; {t("Clinique Dentaire Al Andalus. All Right Reserved")}</p>
                    </div>  
                    <div className='copy-links'>
                        <ul>
                            <li><Link href='/'>{t("Terms of Use")}</Link></li>
                            <li><Link href='/'>{t("Privacy Policy")}</Link></li>
                        </ul>
                    </div>                          
                </div>
            </div>
        </footer>
    );
};

export default Footer;