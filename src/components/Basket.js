import React from 'react';
import BasketItem from './BasketItem';

export default function Basket(props) {

    const {customer,basketProducts,basketTotal} = props

    /** BASKET LIST */
    let basketElements = basketProducts.map(product=>
        <BasketItem 
            key={product.id}
            product = {product}
            minusClicked={()=>props.minusClicked(product)}
            plusClicked={()=>props.plusClicked(product)}
        />
    )

    return(
    <div>
        <div className='basket--title'>
            <label>{customer.first_name} - </label>    
            <label className='basket--total'>Total: {basketTotal} TL</label>    
            <button className='basket--clear' onClick={props.clearClicked} hidden={!basketProducts.length}>Clear</button>
            <button className='basket--clear' onClick={props.saveClicked} hidden={!basketProducts.length}>Save</button>
        </div>
        <div className='basket--menu'>{basketElements}</div>
    </div>

    )
}