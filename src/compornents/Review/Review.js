import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
    const [cart,setCart] = useState([])
    useEffect(() =>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)
        const cartProducts = productKeys.map(key=>{
            const product = fakeData.find(pd=>pd.key ===key)
            product.quantity = savedCart[key]
            return product;

        })
        console.log(cartProducts);
    },[])
    return (
        <div>
            <h2>this is review</h2>
        </div>
    );
};

export default Review;