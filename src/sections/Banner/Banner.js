import React from 'react';
import './Banner.scss';
import Link from 'next/link';
import icon from '../../assets/banner/icons/Calling.png';
import bannerImg from '../../assets/banner/1.png';
import doctorImg from '../../assets/banner/doctor.png';
import bannerPattern from '../../assets/banner/pattern_02.png';
import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

import { useTranslation } from '../../LanguageContext';

const Banner = () => {
    const { t } = useTranslation();

    return (
        <section className='section-bg section-common banner-section'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h1>{t('Entrust your smile to professionals')}</h1>
                                    <p>{t('Banner Description')}</p>

                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                            <Link href="/contact">{t('Book an appointment')}</Link>
                                        </div>

                                        <div className="banner-call">
                                            <div className='icon'>
                                                <img src={icon.src || icon} alt="icon" />
                                            </div>
                                            <div className='call-text'>
                                                <p>{t('Dental 24H Emergency')}</p>
                                                <h6>05 23 35 43 57</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    <div className="banner-img">
                                        <img src={bannerImg.src || bannerImg} alt="banner model" />
                                    </div>
                                    <div className='info-box'>
                                        <div className="info-img">
                                            <img src={doctorImg.src || doctorImg} alt="doctor" />
                                        </div>
                                        <div className='info-text'>
                                            <p>{t('Dr. Biyad Mohammed Chouaib')}</p>
                                            <p><small>{t('Consultant')}</small></p>
                                        </div>
                                    </div>  

                                    {/* Vector Shapes */}
                                    <div className="shapes">
                                        <img src={shapeOne.src || shapeOne} alt="shape" />
                                        <img src={shapeTwo.src || shapeTwo} alt="shape" />
                                        <img src={shapeThree.src || shapeThree} alt="shape" />
                                        <img src={shapeFour.src || shapeFour} alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Pattern Vector*/}
            <img className='banner-pattern' src={bannerPattern.src || bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;