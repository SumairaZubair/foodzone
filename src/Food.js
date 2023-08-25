import React from 'react';
import { foodlist } from './components/List';
import './components/food.css';

const Food = () => {
    const itemsPerRow = 3; // Number of items per row

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        }
        return description;
    };

    const rows = [];
    for (let i = 0; i < foodlist.length; i += itemsPerRow) {
        rows.push(foodlist.slice(i, i + itemsPerRow));
    }

    return (
        <div className='Main'>
            {/* <img src={require('./Assest/bg.png')}/> */}
            {rows.map((row, rowIndex) => (
                <div className='row' key={rowIndex}>
                    {row.map((item, itemIndex) => (
                        <div className='card' key={itemIndex}>
                            <div className='content'>
                            <div className='img-container'>
                                <img src={item.imageUrl} className='img' alt="Food Item" />
                            </div>
                            <div className='details'>
                                <div>{item.createdAt}</div>
                                <div>{item.name}</div>
                                <div className='des'>{truncateDescription(item.description,50)}</div>
                                <div>{item.price}</div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Food;
