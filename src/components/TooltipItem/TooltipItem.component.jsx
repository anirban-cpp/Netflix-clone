import React from 'react';

import { Button } from '@material-ui/core';

import './TooltipItem.styles.css';

const Item = ({title, image, description, isLarge}) => {

    console.log(isLarge);

    return (
        <div className='item'>
            <div className="item_top">
                <div className={isLarge ? `item__left__large` : `item__left`}>
                    <img src={image} alt={title}/>
                </div>
                <div className='item__right'>
                    <div className='item_title' style={{marginBottom: '10px'}}>
                        <h1>{title}</h1>
                    </div>
                    <div className='item_description'>
                        <h3>{description}</h3>
                    </div>
                </div>
            </div>
            <div className="item_bottom">
                <div className='item_buttons'>
                    <Button style={{color: 'white', width: '200px'}}>Play Now</Button>
                </div>
                <div className='item_buttons'>
                    <Button style={{color: 'white', width: '200px'}}>Watch Later</Button>
                </div>
            </div>
        </div>
    );
}

export default Item;