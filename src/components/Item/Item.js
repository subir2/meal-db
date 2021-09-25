import React from 'react';
import './Item.css'

const Item = (props) => {
  //  console.log(props);
    const{strCategoryThumb,strCategory}=props.meal;

    return (
     <>

    
        <div className="item_details">
        <div>
        <img src={strCategoryThumb} alt="src" />
        </div>
        
        <div>
        <p><small> Category:{strCategory}</small></p>
        <button className="btn" onClick={()=>props.event(props.meal)}>
            Add To Cart
        </button>
       
        </div>

        </div>
    
     </>
        
    );
};

export default Item;