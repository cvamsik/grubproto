import React from 'react';
import './menu-item-style.css'


const MenuItem =({title,imageurl})=>(
    <div className="menu-item" style={{ backgroundImage: `url(${imageurl})`}}>
        <div className="content">
            <h1 className='title' >{title} </h1>
            
            <span className='subtitle'>ORDER NOW</span>
        </div>
    </div>
);

export default MenuItem;