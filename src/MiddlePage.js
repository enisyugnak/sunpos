import React from 'react';
import Basket from './components/Basket';
import ProductItem from './components/ProductItem';
import allProductsData from "./data/products"
import customers  from "./data/customers"

export default function MiddlePage(){

    const [selectedCategoryId, setSelectedCategoryId] = React.useState(allProductsData[0] && allProductsData[0].id || "");
    const selectedCategory = getSelectedCategoryProducts();
    
    const [selectedCustomerId,setSelectedCustomerId] = React.useState(null);
    const selectedCustomer = selectedCustomerId !=null
            ? findCustomer()
            : {}

    const [basketProducts,setBasketProducts] = React.useState([])
    const [basketTotal,setBasketTotal] = React.useState(0);    

    /** BASKET to save */
    let basket = {    
        total:basketTotal,
        customer:{...selectedCustomer},
        products:[...basketProducts]
    };

    /** PRODUCT CATEGORIES */
    const categories = allProductsData.map(item=>
        <div 
            className ="cat--item"
            key={item.id}
            onClick={()=>catClicked(item.id)}>
            {item.category}
        </div>
    )
    
    /** CHOOSEN (Current) PRODUCTS LIST */
    let productElements = selectedCategory.products.map(product=>
        <ProductItem
            key={product.id}
            product={product}
            productClicked={()=>productClicked(product)}
        />
    )


    /** CUSTOMERS LIST */
    let customerElements  = customers.map(customer=>
        <div 
            className ="cat--item"
            key={customer.id}
            onClick={()=>customerClicked(customer.id)}>
            {customer.first_name}
         </div>
        )


        
    function findCustomer(){
        return customers.find(cust=> cust.id === selectedCustomerId)
    }

    /** If No Category selected get all || get category products */

    function getSelectedCategoryProducts(){
      return  selectedCategoryId != -1 ? getProducts() : getAllProducts();
    }

    function getProducts(){
        return allProductsData.find((c) => c.id === selectedCategoryId)
    }
    
    function getAllProducts(){
        return {    id:-1,
            category:"All Products",
            products: allProductsData
                .map(category=>category.products
                .map(item=>({...item,category:category.category})))
                .flat()
                .sort(compare)
        }
    }

    /** BUTTON ACTIONS */

    function plusClicked(product){
        updateBasket("INCREASE",product)
    }

    function minusClicked(product){
        product.amount === 1
                    ? updateBasket("REMOVE",product)
                    : updateBasket("DECREASE",product);
    }

    function clearClicked(){
        updateBasket("CLEAR");
    }

    function catClicked(cat_id){
        setSelectedCategoryId(cat_id);
    }

    function customerClicked(cust_id){
        setSelectedCustomerId(cust_id);
    }

    function productClicked(product){
        // add new product to basketProducts or
        // update amount of product in basketProducts

        const isExist  = basketProducts.find(item=>item.id===product.id);

        isExist 
            ? updateBasket("INCREASE",isExist) 
            : updateBasket("ADD",product)
    }
     
    function saveClicked(){
        updateBasket("SAVE");
    }

    console.log("render")
    /** OPERATIONS */

    function updateBasket(op,product){

        switch(op){

            case "ADD":

                let newObj = {...product,amount:1,total:product.price}
                setBasketProducts(prevBasketProducts=>[...prevBasketProducts,newObj]);
                setBasketTotal(prevTotal=>prevTotal+product.price);

                break;

            case "REMOVE":
                
                setBasketProducts(prevBasketProducts=>prevBasketProducts.filter(item=> item.id !== product.id));
                setBasketTotal(prevTotal=>prevTotal-product.price);

                break;

            case "INCREASE":

                product.amount = product.amount+1;
                product.total = product.price * product.amount;
                setBasketProducts(prevBasketProducts=>[...prevBasketProducts]);
                setBasketTotal(prevTotal=>prevTotal+product.price)

                break;

            case "DECREASE":

                product.amount = product.amount-1;
                product.total = product.price * product.amount;
                setBasketProducts(prevBasketProducts=>[...prevBasketProducts]);
                setBasketTotal(prevTotal=>prevTotal-product.price)                

                break;

            case "CLEAR":
                
                setBasketProducts([]);
                setBasketTotal(0);

                break;  

            case "SAVE":  
                console.log(basket);
                break;
        }
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
                {categories}
            </div>
        </div>
        <div className="row">
            <div className="col left">
                <div>{customerElements}</div>
            </div>
            <div className="col middle prod--page">
                {productElements}
            </div>
            <div className="col right">
                <Basket 
                        customer = {selectedCustomer}
                        basketTotal ={basketTotal}
                        basketProducts = {basketProducts}
                        minusClicked={minusClicked}
                        plusClicked={plusClicked}
                        clearClicked = {()=>clearClicked()}
                        saveClicked = {()=>saveClicked()}
                    />
            </div>
        </div>
        </div> 
    )
}