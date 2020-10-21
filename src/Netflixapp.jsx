import React from 'react';
import NetflixCard from './NetflixCard';
import Data from './Data';

const cdata = Data.map(value => <NetflixCard imgsrc={value.imgsrc} platform={value.platform} showname={value.showname} linksrc={value.linksrc} />)

const Netflixapp = () => {
    return (
        <>
            <h3 className="text-center mt-4 text-secondary">My Top Favourite Netflix Shows</h3>
            <div className="row text-center mb-5">
                {cdata}
            </div>
        </>
    )
}

export default Netflixapp;