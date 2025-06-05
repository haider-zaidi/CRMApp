import React, { useEffect, useState } from 'react';
import axios from 'axios';
const apiUrl = "https://crmapp-backend.onrender.com"; 

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const fetchCustomers = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/customers`, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      });
      setCustomers(res.data);
    } catch (err) {
      console.error('Error fetching customers:', err);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleAddCustomer = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${apiUrl}/api/customers`,
        { name, email, phone },
        {   headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        } }
      );
      setCustomers([...customers, res.data]);
      setName('');
      setEmail('');
      setPhone('');
    } catch (err) {
      console.error('Error adding customer:', err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Details</h1>

      {/* Add Customer Form */}
      <form onSubmit={handleAddCustomer} className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4"
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Customer
        </button>
      </form>

      <h1 className="text-2xl font-bold mb-4">View Customers</h1>

      {/* Customers Table */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td className="border p-2">{customer.name}</td>
              <td className="border p-2">{customer.email}</td>
              <td className="border p-2">{customer.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;

