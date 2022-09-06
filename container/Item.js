import React from 'react'

const Item = (product) => {
    const {
        productName,
        productImage,
        ProductPrice,
        quantity,
        documentID,

    } = product
    return (
        <table className='cartItem' border="0" cellSpacing="0" cellPadding="0">
            <tbody>
                <tr>
                    <td>
                        <img src={productImage} alt={productName} />
                    </td>
                    <td>
                        {productName}
                    </td>
                    <td>
                        <span>
                            {quantity}
                        </span>
                    </td>
                    <td>
                        ${ProductPrice}
                    </td>
                    <td align='center'>
                        <span>
                            x
                        </span>

                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Item