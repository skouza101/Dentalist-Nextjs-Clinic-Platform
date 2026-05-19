import React from 'react';
import Link from 'next/link';
import './BlogCard.scss';
import { useTranslation } from '../../LanguageContext';

const BlogCard = ({blog}) => {
    const { t } = useTranslation();
    const {title, img, description, category,url} = blog;

    return (
        <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className="blog-card">
                <div className="blog-img">
                    <img src={img && img.src ? img.src : img} alt="blog"/>
                    <div className="date">
                        <h6>23</h6>
                        <p>Jan</p>
                    </div>
                </div>
                <div className="blog-text">
                    <span><Link href="/">{t(category)}</Link></span>
                    <h3><Link href={`/blog/${url}`}>{t(title)}</Link></h3>
                    <p>{t(description)}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;