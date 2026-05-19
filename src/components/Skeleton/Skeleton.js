import React from 'react';
import './Skeleton.scss';

const Skeleton = ({ width, height, borderRadius, className = '' }) => {
    const style = {
        width: width || '100%',
        height: height || '20px',
        borderRadius: borderRadius || '8px',
    };

    return (
        <div 
            className={`premium-skeleton-shimmer ${className}`} 
            style={style}
        />
    );
};

export default Skeleton;
