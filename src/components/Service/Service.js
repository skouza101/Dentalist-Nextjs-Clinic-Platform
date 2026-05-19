import React from 'react';
import Link from 'next/link';
import ThemeIcon from '../ThemeIcon/ThemeIcon';
import './Service.scss';
import { useTranslation } from '../../LanguageContext';

const Service = ({serviceList}) => {
    const { t } = useTranslation();
    const {title,description, icon} = serviceList;
 
    return (
        <div className='col-lg-3 col-md-4 col-sm-6'>
           <div className="service-box">
                <div className="service-icon">
                    <div className='icon-area'>
                    <ThemeIcon icon={icon} />
                    </div>
                </div>
                <div className="service-text">
                    <h3><Link href="/singleservice">{t(title)}</Link></h3>
                    <p>{t(description)}</p>
                </div>
           </div>
        </div>
    );
};

export default Service;