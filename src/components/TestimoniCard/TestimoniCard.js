import React from 'react';
import './TestimoniCard.scss';

const TestimoniCard = ({testimonail}) => {
    const {name, subtext, description, ratings} = testimonail;
    const firstLetter = name ? name.trim().charAt(0).toUpperCase() : '';
   
    return (
        <div className='col-lg-4 single-testimoni'>
            <div className="testimonial-card">
                <div className="testimonial-avatar">
                    {firstLetter}
                </div>
                <div className="testimonial-text">
                    <h3>{name}</h3>
                    {subtext && <span className="testimonial-subtext">{subtext}</span>}
                    <p className="testimonial-desc">{description}</p>
                </div>
                <ul className='testimonial-rating'>
                    {
                        ratings?.map ((rating, index) => <li key={index}>{rating}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default TestimoniCard;