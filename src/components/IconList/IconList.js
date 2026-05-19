import React from 'react';
import './IconList.scss';
import ThemeIcon from '../ThemeIcon/ThemeIcon';
import { useTranslation } from '../../LanguageContext';

const IconList = ({icon, title, description}) => {
    const { t } = useTranslation();
    return (
        <div className="col-lg-6 col-md-6">
            <div className="icon-list">
                <div className="icon-area">
                    <ThemeIcon icon={icon} />
                </div>
                <div className="icon-list-text">
                    <h3>{t(title)}</h3>
                    <p>{t(description)}</p>
                </div>
            </div>
        </div>
    );
};

export default IconList;