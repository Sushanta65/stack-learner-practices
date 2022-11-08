import React, {useState} from 'react';

const productList = [
    {
        id: 1211,
        productName: 'Laptop',
        price: 23000,
        stock: 15,
    },
    {
        id: 1212,
        productName: 'Television',
        price: 12000,
        stock: 10,
    },
    {
        id: 1213,
        productName: 'Mobile',
        price: 21000,
        stock: 20,
    },
    
]

const TableBody = ({id, productName, price, stock, quantity, total, increment, decrement}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td>{quantity}</td>
            <td>{total}</td>
            <td>
                <button disabled={quantity === stock} onClick={() => increment(id)}>+</button>
                <button disabled={quantity === 0} onClick={() => decrement(id)}>-</button>
            </td>
        </tr>
    )
}

const Cart = () => {
    
    const [products, setProducts] = useState(productList.map((product) => ({...product, quantity: 0, total: 0})))
    console.log(products)
    const increment = (id) => {
        const newState = products.map(item => {
            if(id === item.id && item.quantity < item.stock){
                item.quantity++,
                item.total = item.quantity * item.price
            }
            return item
        })
        setProducts(newState)
    }


    const decrement = (id) => {
        const newState = products.map(item => {
            if(id === item.id && item.quantity > 0){
                item.quantity--,
                item.total = item.quantity * item.price
            }
            return item
        })
        setProducts(newState)
    }

    const total = products.reduce((acc, cur) => acc + cur.total, 0)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => <TableBody increment={increment} decrement={decrement} {...product} key={product.id}/>)}
                </tbody>
            </table>
            {total > 0 && <h5>Total: {total} BDT</h5>}
        </div>
    );
};

export default Cart;