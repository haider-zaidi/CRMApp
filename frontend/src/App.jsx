// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import Layout from './components/layout/Layout';
// import Landing from './components/landing/Landing';
// import SignIn from './components/auth/SignIn';
// import Dashboard from './components/dashboard/Dashboard';
// import Customers from './components/customers/CustomerList';
// import Orders from './components/orders/OrderList';
// import Segments from './components/segments/SegmentList';
// import Campaigns from './components/campaigns/CampaignList';
// // import Stats from './components/dashboard/Stats';

// const App = () => {
//   const { userId } = useAuth();

//   return (
//     <Router>
//       <Routes>
//         {userId ? (
//           <>
//             <Route path="/" element={<Layout />}>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="customers" element={<Customers />} />
//               <Route path="orders" element={<Orders />} />
//               <Route path="segments" element={<Segments />} />
//               <Route path="campaigns" element={<Campaigns />} />
//               {/* <Route path="stats" element={<Stats />} /> */}
//             </Route>
//             <Route path="*" element={<Navigate to="/" />} />
//           </>
//         ) : (
//           <>
//             <Route path="/" element={<Landing />} />
//             <Route path="/signin" element={<SignIn />} />
//             <Route path="*" element={<Navigate to="/" />} />
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Layout from './components/layout/Layout';
import Landing from './components/landing/Landing';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import Customers from './components/customers/CustomerList';
import Orders from './components/orders/OrderList';
import Segments from './components/segments/SegmentList';
import Campaigns from './components/campaigns/CampaignList';
// import Stats from './components/dashboard/Stats';

const App = () => {
  const { token } = useAuth();

  return (
    <Router>
      <Routes>
        {token ? (
          <>
            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="customers" element={<Customers />} />
              <Route path="orders" element={<Orders />} />
              <Route path="segments" element={<Segments />} />
              <Route path="campaigns" element={<Campaigns />} />
            </Route>
            <Route path="" element={<Navigate to="/dashboard" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
