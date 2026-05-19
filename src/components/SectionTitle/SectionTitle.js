import React from 'react';
import './SectionTitle.scss';
import { useTranslation } from '../../LanguageContext';

const SectionTitle = ({subTitle, title, description}) => {
    const { t } = useTranslation();
    return (
        <div className='section-title'>
            {subTitle && <span>{t(subTitle)}</span>}
            {title && <h2>{t(title)}</h2>}
            {description && <p>{t(description)}</p>}
        </div>
    );
};

export default SectionTitle;