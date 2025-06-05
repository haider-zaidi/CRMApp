import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Customers</h3>
          <p>Manage all your customer data in one place.</p>
          <p className="mt-2 text-sm text-gray-700">Easily add, update, and track customer profiles with details such as contact info, purchase history, preferences, and segmentation tags. Keep your CRM clean and up to date.</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Orders</h3>
          <p>Track orders and transactions seamlessly.</p>
          <p className="mt-2 text-sm text-gray-700">Visualize purchase patterns, order quantities, and revenue generated. Monitor order frequency and easily spot your most valuable customers based on their purchase behavior.</p>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Campaigns</h3>
          <p>Create and monitor marketing campaigns.</p>
          <p className="mt-2 text-sm text-gray-700">Design personalized email campaigns, schedule them for specific segments, and monitor open, click, and conversion rates to improve marketing effectiveness.</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Segments</h3>
          <p>Define customer segments based on dynamic conditions.</p>
          <p className="mt-2 text-sm text-gray-700">Create advanced filters like 'Total Spend > 5000' or 'Last Active in 30 days' to precisely target users. Save and reuse segments to boost campaign relevance and ROI.</p>
        </div>

        <div className="bg-red-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Stats</h3>
          <p>View analytics and performance metrics at a glance.</p>
          <p className="mt-2 text-sm text-gray-700">Analyze customer behavior, campaign performance, and sales growth. Get visual insights into your data using charts and track KPIs to guide business decisions.</p>
        </div>

        <div className="bg-indigo-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">AI Assistant</h3>
          <p>Generate smart email suggestions and automate tasks.</p>
          <p className="mt-2 text-sm text-gray-700">Leverage AI to create personalized messages for each customer based on their profile. Automate repetitive tasks like follow-ups and optimize email content in one click.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
