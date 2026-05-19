import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesData from './ServiceData';
import Service from '../../components/Service/Service';
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


import { useTranslation } from '../../LanguageContext';

const Services = () => {
    const { t } = useTranslation();
    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <SectionTitle title="Feel amazing about your oral health" subTitle="Services"/>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <p className='service-title-text'>{t("Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.")}</p>
                    </div>
                </div>

                <div className="row">
                    {
                        ServicesData.map((singleService, index) => <Service key={index} serviceList={singleService}/>)
                    }
                </div>
            </div>

            <div className="services-link text-center">
                <Link href='/'>
                    {t("View all service list")}
                    <BsFillArrowRightCircleFill/>
                </Link>
            </div>
        </section>
    );
};

export default Services;