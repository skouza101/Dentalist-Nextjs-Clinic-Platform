import React from 'react';
import './Testimonial.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import { useTranslation } from '../../LanguageContext';

const Testimonial = () => {
    const { t } = useTranslation();

    const testimonails = [
        {
            'name': 'Hiba Aassab',
            'subtext': '2 reviews • 3 months ago',
            'description' : 'Proud to recommend Clinique dentaire Al Andalus! Professional, reliable, and very welcoming',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'name': 'Hamza ahabchi',
            'subtext': '1 review • Edited a month ago',
            'description' : 'Smooth and professional wisdom tooth removal with no side effects very satisfied',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'name': 'ilyas',
            'subtext': '7 reviews • 6 months ago',
            'description' : 'A very good experience. The doctor is very professional, attentive, and takes the time to explain each step of the treatment. Excellent work, I will definitely return.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        }
    ]

    // slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <section className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <SectionTitle
                            subTitle={t("TESTIMONIAL")}
                            title={t("What people have said about us")}
                        />
                    </div>
                    <div className="col-lg-5">
                        <div className="rating-summary">
                            <div className="rating-score">5.0</div>
                            <div className="rating-details">
                                <div className="rating-stars">
                                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                </div>
                                <p className="rating-label">{t("All reviews rated 5 stars on Google Maps")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Slider {...settings} className="testimoni-slider">
                    {
                        testimonails.map((testimonail, index) => <TestimoniCard key={index} testimonail={testimonail} />)
                    }
                </Slider>

            </div>
        </section>
    );
};

export default Testimonial;