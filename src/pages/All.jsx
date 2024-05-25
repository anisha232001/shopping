import React from 'react';
import Main from '../components/main/Main';
import Newcollection from '../components/NewCollection/Newcollection';
import Offers from '../components/offers/Offers';
import Popular from './../components/popular/Popular';
import './CSS/all.css'
import Newletter from './../components/Newsletter/Newletter';
import Shopcategory from './Shopcategory';

function All(props) {
    return (
        <div className='all'>
            <Main/>
            <Popular/>
            <Offers/>
            <Newcollection/>
            <Newletter/>
        </div>
    );
}

export default All;