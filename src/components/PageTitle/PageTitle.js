import React from 'react';
import './PageTitle.scss';
import { useTranslation } from '../../LanguageContext';

const PageTitle = ({title,description}) => {
    const { t } = useTranslation();
    return (
        <div className='page-title'>
            <div className="container">
                <h2>{title ? t(title) : t("News & Articles")}</h2>
                <p>{description ? t(description) : t("Stays updated with our latest blog and news and get healthy tips & trick for oral health")}</p>
            </div>
        </div> 
    );
};

export default PageTitle;