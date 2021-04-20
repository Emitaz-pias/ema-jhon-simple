import React from 'react';

const Products = (props) => {
    const {name}=props.product
    return (
        <div>
            <h1>{name}</h1>
            <hr/>
        </div>
    );
};

export default Products;