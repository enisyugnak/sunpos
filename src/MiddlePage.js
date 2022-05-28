import React from 'react';
import Basket from './components/Basket';
import BasketItem from './components/BasketItem';
import ProductItem from './components/ProductItem';
import allProductsData from "./data/productscats"
import customers  from "./data/customers"

export default function MiddlePage(){

    const [products,setProducts] = React.useState([...allProductsData[0].products])
    const [basketProducts,setBasketProducts] = React.useState([])
    const [basketTotal,setBasketTotal] = React.useState(0);
    const [basketCustomer,setBasketCustomer] = React.useState(customers[0]);

    let basket = {    
        total:basketTotal,
        customer:{...basketCustomer},
        products:[...basketProducts]
    };

    /** PRODUCT CATEGORIES */
    // category bir kez oluşacağı icin const
    const categories = allProducts.map(item=>
        <div 
            className ="cat--item"
            key={item.id}
            onClick={()=>catClicked(item)}>
            {item.category}
        </div>
    )

    /** CHOOSEN PRODUCTS LIST */
    let productElements = products.map(product=>
        <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            productClicked={()=>productClicked(product)}
        />
    )

    /** BASKET LIST */
    let basketElements = basketProducts.map(product=>
        <BasketItem 
            key={product.id}
            product = {product}
            minusClicked={()=>minusClicked(product)}
            plusClicked={()=>plusClicked(product)}
        />
    )

    let customerElements  = customers.map(customer=>
        <div 
            className ="cat--item"
            key={customer.id}
            onClick={()=>customerClicked(customer)}>
            {customer.first_name}
         </div>
        )

    /** BUTTON ACTIONS */
    function plusClicked(product){
        updateBasket("increase",product)
    }

    function minusClicked(product){
        product.amount === 1 
                    ? removeFromBasket(product) 
                    : updateBasket("decrease",product);
    }

    function clearClicked(){
        clearBasket();
    }

    function catClicked(cat){
        // show products of choosen category
        setProducts([...cat.products])
    }
    function customerClicked(customer){
        setBasketCustomer(customer);
    }

    function productClicked(product){
        // add new product to basketProducts or
        // update amount of product in basketProducts
        const isExist = basketProducts.filter(item=>item.id===product.id);
        isExist.length 
                    ? updateBasket("increase",isExist[0]) 
                    : addToBasket(product);
    }
     
    function saveClicked(){
        

        console.log(basket);
    }
    /** OPERATIONS */

    function updateBasket(op,product){
        product.amount = (op==="increase") ? product.amount+1 : product.amount-1
        product.total = product.price * product.amount;
        setBasketProducts(prevBasketProducts=>[...prevBasketProducts]);
        op==="increase" 
        ? setBasketTotal(prevTotal=>prevTotal+product.price)
        : setBasketTotal(prevTotal=>prevTotal-product.price);
    }

    function addToBasket(product){
        let newObj = {...product,amount:1,total:product.price}
        setBasketProducts(prevBasketProducts=>[...prevBasketProducts,newObj]);
        setBasketTotal(prevTotal=>prevTotal+product.price);
    }

    function removeFromBasket(product){
        // silmek yerine,  silinecek id  dısında 
        // herseyi sıralayıp tekrar array yapıyoruz
        setBasketProducts(prevBasketProducts=>prevBasketProducts.filter(item=> item.id !== product.id));
        setBasketTotal(prevTotal=>prevTotal-product.price);
    }

    function clearBasket(){
        setBasketProducts([]);
        setBasketTotal(0);
    }

    function allProductsClicked(){
        setProducts(allProducts
            .map(category=>category.products
                .map(item=>({...item,category:category.category})))
                .flat()
                .sort(compare))

    }
    // sort logic of object
    function compare( a, b ) {
        const aTitle = a.title.toString().toUpperCase();
        const bTitle = b.title.toString().toUpperCase();
        return aTitle.localeCompare(bTitle);
    }

    return (
        <div>
        <div className='row'>
            <div className="col cats">
                <div className ="cat--item" onClick={allProductsClicked}>All Products</div>
                {categories}
            </div>
        </div>
        <div className="row">
            <div className="col left">
                <div>{customerElements}</div>
            </div>
            <div className="col middle prod--page">{productElements}</div>
            <div className="col right">
                <Basket 
                        customer = {basketCustomer}
                        basketTotal ={basketTotal}
                        basketProducts = {basketProducts}
                        basketElements = {basketElements}
                        clearClicked = {()=>clearClicked()}
                        saveClicked = {()=>saveClicked()}
                    />
            </div>
        </div>
        </div> 
    )
}