import React from 'react';

export default function Basket(props) {

    const {customer,basketProducts,basketTotal,basketElements} = props

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