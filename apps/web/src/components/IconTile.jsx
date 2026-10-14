import React from 'react';

const IconTile = ({ icon: Icon, size = 22, className = '' }) => (
    <span className={`icon-tile ${className}`}>
        <Icon size={size} strokeWidth={1.5} />
    </span>
);

export default IconTile;
