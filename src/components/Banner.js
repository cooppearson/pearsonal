import React from 'react';

const Banner = ({props}) => {

    const header = {
        siteName:'Pearsonal',
        tagLine:'A personal site for everything Pearson related.'
    }

    return(
        <div className="bannerContainer">
            <div className="bannerTitlesClass">
                <h1 className="bannerTitle">{header.siteName}</h1>
                <p className="bannerSubtitle">{header.tagLine}</p>
            </div>
        </div>
    )
};

export default Banner;
