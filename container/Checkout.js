import React, { useEffect, useState } from 'react';
import Item from './Item';
import { useParams, Link } from "react-router-dom"

import axios from 'axios';
import { useDispatch, useSelector, } from 'react-redux';

import { selectedProduct, removeSelectedProduct, addToCart, adjustQty } from '../redux/actions/productActions';
import '../container/Styles.scss';

const Checkout = () => {
    const product = useSelector((state) => state.product);
    const { id, image, price, category, desciption, title } = product
    const { productID } = useParams();
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
        <div className='checkout'>
            <h1>Checkout page</h1>
            <div className='cart'>
                <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <table className='checkoutHeader' border="0" cellPadding="0" cellSpacing="0">
                                <tbody>
                                    <tr>
                                        <th>product</th>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Remove</th>
                                    </tr>

                                </tbody>

                            </table>
                        </tr>

                        <tr>
                            <table border="0" cellPadding="0" cellSpacing="0">
                                <tbody>

                                    {Object.keys(product).length === 0 ? (<h1>loding</h1>) : (
                                        <tr >
                                            <td>
                                                <Item />
                                            </td>
                                        </tr>
                                    )

                                    } </tbody>
                            </table>
                        </tr>
                        <tr>
                            <table align="right" border="0" cellSpacing="0" cellPadding="10" >
                                <tr align="right">
                                    <td>
                                        <h3>
                                            Total:
                                        </h3>
                                    </td>

                                </tr>
                                <tr>
                                    <table border="0" cellPadding="0" cellSpacing="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <button>
                                                        Continue Shopping
                                                    </button>
                                                </td>
                                                <td>
                                                    <button>
                                                        Checkout
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </tr>
                            </table>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Checkout