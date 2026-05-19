import React, { useState, useEffect } from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';
import { useTranslation } from '../../LanguageContext';
import Skeleton from '../Skeleton/Skeleton';

const ContactForm = () => {
    const { t } = useTranslation();
    const [selectedService, setSelectedService] = useState('Teeth Whitening');
    const [selectedDepartment, setSelectedDepartment] = useState('Select Department');
    const [isLoadingSlots, setIsLoadingSlots] = useState(true);
    const [selectedSlot, setSelectedSlot] = useState('');
    const [bookingSubmitted, setBookingSubmitted] = useState(false);
    const [availableSlots, setAvailableSlots] = useState([]);

    // Simulate async slot loading on mount or service/department changes
    useEffect(() => {
        setIsLoadingSlots(true);
        setSelectedSlot('');
        
        const timer = setTimeout(() => {
            // Mock slots based on different services
            let slots = [];
            if (selectedService === t("Teeth Whitening") || selectedService === "Teeth Whitening") {
                slots = ['09:00', '10:30', '14:00', '15:30', '16:00'];
            } else if (selectedService === t("Dentures") || selectedService === "Dentures") {
                slots = ['09:30', '11:00', '14:30', '16:30'];
            } else if (selectedService === t("Implants") || selectedService === "Implants") {
                slots = ['10:00', '11:30', '15:00', '17:00'];
            } else {
                slots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
            }
            setAvailableSlots(slots);
            setIsLoadingSlots(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, [selectedService, selectedDepartment, t]);

    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!selectedSlot) {
            alert(t("Please select a booking slot first."));
            return;
        }
        setBookingSubmitted(true);
    };

    if (bookingSubmitted) {
        return (
            <div className="premium-booking-success" data-aos="fade-in">
                <div className="success-icon-wrap">
                    <div className="success-checkmark">
                        <div className="check-icon">
                            <span className="icon-line line-tip"></span>
                            <span className="icon-line line-long"></span>
                            <div className="icon-circle"></div>
                            <div className="icon-fix"></div>
                        </div>
                    </div>
                </div>
                <h3>{t("Appointment Confirmed!")}</h3>
                <p>{t("Your appointment for")} <strong>{t(selectedService)}</strong> {t("has been locked.")}</p>
                <div className="booking-details">
                    <p>🕒 {t("Selected Time:")} <strong>{selectedSlot}</strong></p>
                    <p>📍 {t("Location:")} <strong>{t("N°, Lot Garden City Villa, El Jadida")}</strong></p>
                </div>
                <button className="btn btn-primary btn-done" onClick={() => setBookingSubmitted(false)}>
                    {t("Book Another")}
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>{t("Name")}</label>
                        <input type="text" required className="form-control" placeholder={t("Enter your name...")} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>{t("E-mail Address")}</label>
                        <input type="email" required className="form-control" placeholder={t("Enter email address...")} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>{t("Service")}</label>
                        <select className="form-control animate-select" value={selectedService} onChange={handleServiceChange}>
                            <option value="Teeth Whitening">{t("Teeth Whitening")}</option>
                            <option value="Dentures">{t("Dentures")}</option>
                            <option value="Implants">{t("Implants")}</option>
                            <option value="Root Canal">{t("Root Canal")}</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>{t("Department")}</label>
                        <select className="form-control animate-select" value={selectedDepartment} onChange={handleDepartmentChange}>
                            <option value="General Dentistry">{t("General Dentistry")}</option>
                            <option value="Cosmetic Dentistry">{t("Cosmetic Dentistry")}</option>
                            <option value="Pediatric Dentistry">{t("Pediatric Dentistry")}</option>
                        </select>
                    </div>
                </div>

                {/* Simulated Premium Slot Selector with Skeletons */}
                <div className="col-lg-12">
                    <div className="form-group booking-slots-group">
                        <label>{t("Available Booking Slots")}</label>
                        {isLoadingSlots ? (
                            <div className="slots-skeleton-container d-flex flex-wrap gap-2">
                                <Skeleton width="80px" height="40px" borderRadius="10px" />
                                <Skeleton width="80px" height="40px" borderRadius="10px" />
                                <Skeleton width="80px" height="40px" borderRadius="10px" />
                                <Skeleton width="80px" height="40px" borderRadius="10px" />
                                <Skeleton width="80px" height="40px" borderRadius="10px" />
                            </div>
                        ) : (
                            <div className="slots-grid d-flex flex-wrap gap-2" data-aos="fade-up" data-aos-duration="600">
                                {availableSlots.map((slot) => (
                                    <button
                                        key={slot}
                                        type="button"
                                        className={`slot-badge ${selectedSlot === slot ? 'active' : ''}`}
                                        onClick={() => setSelectedSlot(slot)}
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">{t("Messages")}</label>
                        <textarea className="form-control" placeholder={t("Enter your messages...")} rows="3"></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" className="btn appointment-btn premium-button-ripple">{t("Book an appointment")}</button>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className='icon'>
                            <img src={icon.src || icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            <p>{t("Dental 24H Emergency")}</p>
                            <h6>05 23 35 43 57</h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;