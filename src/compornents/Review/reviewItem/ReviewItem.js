import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key} =props.product;
    const reviewItemStye = {
        borderBottom:"1px solid lightgray",
        marginLeft:"200px",
        marginBottom:"5px",
        paddingBottom:"5px"
    }
    return (
        <div style={reviewItemStye}>
            <h2 className="product-name"> {name}</h2>
            <h3>Quantity:{quantity}</h3>
            <br />
            <button onClick={()=>{props.handleRemoveItem(key)}} className="add-to-cart-btn">Remove item</button>
        </div>
    );
};

export default ReviewItem;