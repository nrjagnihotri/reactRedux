import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from "react-router-dom"

import axios from 'axios';
import { useDispatch, useSelector, } from 'react-redux';

import { selectedProduct, removeSelectedProduct, addToCart, adjustQty } from '../redux/actions/productActions';


const Cart = () => {
    const cart = useSelector((state) => state);
    const product = useSelector((state) => state.product);
    const { id, title, image, price, category, desciption } = product;
    alert("hello");
    console.log(cart);

    const { productID } = useParams();
    const history = useHistory();

    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productID}`).catch((err) => {
            console.log("ERRor", err);
        });
        dispatch(selectedProduct(response.data));
    }





    useEffect(() => {
        if (productID && productID !== "")
            fetchProductDetails();
        return () => {
            dispatch(removeSelectedProduct());

        }



    }, [productID]);

    return (
        <div className='ui grid container'>
            {Object.keys(product).length === 0 ? (<h1>loding</h1>) : (
                <div className='ui placeholder segment'>
                    <div className='ui two column stackble center aligned grid '>
                        <div className='ui vertical divider'></div>
                        <div className='vertical divider row'>
                            <div className='culumn lp' >
                                <img style={{ width: "200px" }} src={image} />
                            </div>
                        </div>
                        <div className='column rp' style={{ width: "400px" }}>
                            <h1>{title}</h1>
                            <h2 >
                                <Link to="" className='ui teal tag label'>${price}</Link>
                            </h2>
                            <h3 >
                                {category}
                            </h3>
                            <p>{desciption}</p>


                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Cart