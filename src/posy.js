const categories = [ 
    { "id":0,
      "title" : "drinks",
      "products": [
        {"id": 1, "title": "cola"},
        {"id": 2, "title": "beer"},
        {"id": 3, "title": "juice"}]
    },
    { "id":1,
        "title" : "foods",
        "products": [
          {"id": 1,"title": "hamburger"},
          {"id": 2,"title": "pasta"}]
    },
    { "id":2,
        "title" : "fruits",
        "products": [
          {"id": 1,"title": "apple"},
          {"id": 2,"title": "peach"},
          {"id": 3,"title": "melon"},
          {"id": 4,"title": "cherry"}]
        }
]



/**
 * 
 * First approach
 * get category names into another array with setCategoryData
 * when the category clicked, find those products by id
 * from allProductsData
 */

import allProductsData from "./data/categories"

const [products,setProducts] = React.useState([...allProductsData[0].products])
const [categoryData,setCategoryData] = React.useState(
        categories.map(category=>({
        id:category.id,
        title:category.title })));

const categoryElements = categoryData.map(category=>
    <div 
        key={category.id}
        onClick={()=>catClicked(category.id)}>
        {category.title}
    </div>
)
function catClicked(id){
    let list = allProductsData.filter(category=>(category.id === id))
    setProducts([...list[0].products]);
}

/**
 * 
 * Second approach
 * set category itself as prop to the category button
 * when clicked, assign products to the list
 * 
 */

 import allProductsData from "./data/categories"

 const [products,setProducts] = React.useState([...allProductsData[0].products])

 const categoryElements = allProductsData.map(category=>
     <div 
         key={category.id}
         onClick={()=>catClicked(category)}>
         {category.title}
     </div>
 )
 
 function catClicked(cat){
     setProducts([...cat.products]);
 }