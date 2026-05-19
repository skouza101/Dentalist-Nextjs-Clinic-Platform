import React from 'react';
import Link from 'next/link';
import './ServiceBanner.scss';
import serviceBanner from '../../assets/servicePage/1.png';

import { useTranslation } from '../../LanguageContext';

const ServiceBanner = () => {
    const { t } = useTranslation();
    return (
        <section className='service-banner-section section-common section-bg'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="service-banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h2>{t("Root Canals")}</h2>
                                    <p>{t("Root canals have gotten a bad reputation, but us dentists don’t know why! These are the types of treatments that actually make you feel better!")}</p>
                                    <div className="theme-btn">
                                        <Link href="/">{t("Book an appointment")}</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="service-banner-img" data-aos="fade-up" data-aos-duration="2000">
                                    <img src={serviceBanner.src || serviceBanner} alt="service" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBanner;