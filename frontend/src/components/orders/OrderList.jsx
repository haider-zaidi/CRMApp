import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = "https://crmapp-backend.onrender.com"; 


const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [formData, setFormData] = useState({
        customer: '',
        product: '',
        quantity: '',
        amount: ''
    });

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const userId = localStorage.getItem('userId');
            const res = await axios.get(`${apiUrl}/api/orders`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setOrders(res.data);
        } catch (err) {
            console.error('Error fetching orders:', err);
        }
    };
    // console.log(orders.customer.name)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userId = localStorage.getItem('userId');
            await axios.post(`${apiUrl}/api/orders`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setFormData({ customer: '', product: '', quantity: '', amount: '' });
            fetchOrders();
        } catch (err) {
            console.error('Error adding order:', err);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Order Details</h2>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Customer_ID"
                    className="p-2 border rounded w-full md:w-1/4"
                    value={formData.customer}
                    onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Product"
                    className="p-2 border rounded w-full md:w-1/4"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Quantity"
                    className="p-2 border rounded w-full md:w-1/4"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    className="p-2 border rounded w-full md:w-1/4"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                />
                <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
                    Add Order
                </button>
            </form>

            <h1 className="text-2xl font-bold mb-4">View Orders</h1>

            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Customer</th>
                        <th className="border p-2">Product</th>
                        <th className="border p-2">Quantity</th>
                        <th className="border p-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td className="border p-2">{order.user}</td>
                            <td className="border p-2">{order.product}</td>
                            <td className="border p-2">{order.quantity}</td>
                            <td className="border p-2">{order.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;

