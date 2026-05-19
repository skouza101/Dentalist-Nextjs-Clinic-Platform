import React, { useState } from 'react';
import './Gallery.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useTranslation } from '../../LanguageContext';
import clinic7 from '../../assets/clinic/clinic_7.jpeg';

const Gallery = () => {
    const { t } = useTranslation();
    const [selectedImg, setSelectedImg] = useState(null);

    const galleryImages = [
        {
            src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80',
            alt: t('Clinic Reception'),
            category: 'interior',
            span: 'wide'
        },
        {
            src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
            alt: t('Dental Operatory'),
            category: 'equipment',
            span: 'tall'
        },
        {
            src: clinic7,
            alt: t('Waiting Room'),
            category: 'interior',
            span: 'tall'
        },
        {
            src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
            alt: t('Modern Treatment'),
            category: 'exterior',
            span: 'normal'
        },
        {
            src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
            alt: t('State-of-the-art Tech'),
            category: 'equipment',
            span: 'normal'
        },
        {
            src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
            alt: t('Consultation Room'),
            category: 'interior',
            span: 'normal'
        },
    ];

    return (
        <section className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle
                    subTitle={t("OUR CLINIC")}
                    title={t("Take a look inside our clinic")}
                    description={t("Modern facilities and state-of-the-art equipment for the best dental care experience")}
                />

                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <div
                            className={`gallery-item gallery-item-${image.span}`}
                            key={index}
                            onClick={() => setSelectedImg(image)}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <img src={image.src && image.src.src ? image.src.src : image.src} alt={image.alt} />
                            <div className="gallery-overlay">
                                <span className="gallery-label">{image.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImg && (
                <div className="gallery-lightbox" onClick={() => setSelectedImg(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setSelectedImg(null)}>&times;</button>
                        <img src={selectedImg.src && selectedImg.src.src ? selectedImg.src.src : selectedImg.src} alt={selectedImg.alt} />
                        <p className="lightbox-caption">{selectedImg.alt}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;