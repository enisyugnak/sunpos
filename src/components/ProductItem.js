import React from 'react';

export default function ProductItem(props) {

    const {title,price,category} = props.product
    
    return (
        <div className="card-main" onClick={props.productClicked} >
            <article className='card--item'>
                <small>{category}</small>
                <h4>{title}</h4>
                <span>{price} TL</span>
            </article>
        </div>
    )
}