import React from 'react';

const Cart = (props) => {
    let name;
    

    return (
        <>
        <div>
            <h1>Order Meal Items :{props.new.length} </h1>
        </div>
        <div>
{
      props.new.map(meal1=><p>{meal1}</p>)
}
        </div>

        </>
    );
};

export default Cart;