import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

import { useTranslation } from '../../LanguageContext';

const Appointment = () => {
    const { t } = useTranslation();

    const mapLink = 'https://maps.google.com/maps?q=Clinique%20Dentaire%20Al%20Andalus%2C%206%20Avenue%20Ben%20Badis%2C%20El%20Jadida%2C%20Morocco&t=&z=17&ie=UTF8&iwloc=&output=embed'

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>{t("N°, Lot Garden City Villa, 6 Av. Ben Badis")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Clinique Dentaire Al Andalus is pleasure"
                            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual"/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;