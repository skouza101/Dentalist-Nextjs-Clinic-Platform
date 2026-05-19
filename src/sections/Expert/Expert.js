import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.png';

import { useTranslation } from '../../LanguageContext';

const Expert = () => {
    const { t } = useTranslation();
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="EXPERTS IN DENTAL"
                                title="Top-notch dentistry, from Seattle's top dentists."
                                description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts"
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    {t("Top quality dental team")}
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    {t("State of the art dental services")}
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    {t("Discount on all dental treatment")}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg.src || expertImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;