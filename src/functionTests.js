/**
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
            setBasketTotal(prevTotal=>prevTotal+product.price)                

            break;

        case "CLEAR":
            
            setBasketProducts([]);
            setBasketTotal(0);

            break;  

    }

}

 */