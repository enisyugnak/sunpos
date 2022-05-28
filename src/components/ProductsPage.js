import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsPage(props) {

    let liste = props.products.map(item=>{
        return <ProductCard 
                    key={item.id}
                    title={item.title}
                    price = {item.price}
                    handleClick={()=>props.handleClick(item)}>
                </ProductCard>
    })

    return (
        <div className="prod--page">{liste}</div>
    )
}