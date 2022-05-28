import React from 'react';

export default function BasketItem(props) {

    // define variables come from props
   const {title,amount,price,total} = props.product;

    return(
        <div className='basket--item'>
            <span className="basket--item--buttons">
                <button onClick={props.minusClicked}>-</button>
                <button onClick={props.plusClicked}>+</button>
            </span>        
            <label>{title} </label>
            <label>({amount} x </label>
            <label>{price} TL) = </label>
            <label>{total} TL</label>
        </div>
    )
}