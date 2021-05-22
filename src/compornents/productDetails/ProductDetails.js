import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {
    const { productKey}=useParams();
    const product = fakeData.find(pd=>pd.key===productKey);
    return (
        <div>
            <h1>YOur product details here</h1> 
            <Products showAddToCart={false} product={product}></Products>
        </div>
    );
};

export default ProductDetails;