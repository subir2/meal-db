import React from 'react';
import './Meals.css'
import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Cart from '../cart/Cart';
const Meals = () => {
    const[meals,setMeals]=useState([]);
    const[cart,setCart]=useState([]);

    useEffect(()=>{
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res=>res.json())
      .then(data=>setMeals(data.categories));
    },[]);

    const event=(meal)=>{
    
      const newCart=[...cart,meal.strCategoryDescription];
      setCart(newCart);

    }
    return (
        <div className="All">
            <div className="meals">
            {
               meals.map(meal=><Item meal={meal} event={event}></Item>)
            }
          </div>

          <div className="cart">
          <Cart new={cart}></Cart>
          </div>
           
       

        </div>
    );
};

export default Meals;