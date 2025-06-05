// import React from 'react';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// const apiUrl = "https://crmapp-backend.onrender.com"

// const SignIn = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleLogin = async (credentialResponse) => {
//     try {
//       const res = await axios.post(`${apiURL}/api/auth/google`, {
//         id_token: credentialResponse.credential,
//       });

//       console.log(res);

//       const { token, user } = res.data;
//       login(token, user.name, user.picture);
//       navigate('/dashboard');
//     } catch (err) {
//       console.error('Login Error:', err);
//       alert('Login failed');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
//       <div className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl rounded-2xl p-10 w-full max-w-md border border-gray-700">
//         <h1 className="text-3xl font-bold text-white text-center mb-3">Welcome to CRMApp</h1>
//         <p className="text-gray-400 text-center mb-8">Sign in with Google to access your dashboard</p>

//         <GoogleOAuthProvider clientId="186805678325-f71i8k2gcqc4stpgo7km24h1g276kvjp.apps.googleusercontent.com">
//           <div className="flex justify-center">
//             <GoogleLogin
//               onSuccess={handleLogin}
//               onError={() => console.log('Login Failed')}
//               theme="filled_black"
//               size="large"
//               shape="pill"
//             />
//           </div>
//         </GoogleOAuthProvider>

//         <p className="mt-6 text-center text-xs text-gray-500">
//           By signing in, you agree to our <span className="underline">Terms</span> & <span className="underline">Privacy Policy</span>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignIn;


import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const apiUrl = "https://crmapp-backend.onrender.com"; 

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (credentialResponse) => {
    console.log('Credential Response from Google:', credentialResponse);

    try {
      const res = await axios.post(`${apiUrl}/api/auth/google`, {
        id_token: credentialResponse.credential,
      });

      console.log('Server Response:', res);

      const { token, user } = res.data;
      console.log('Extracted Token:', token);
      console.log('Extracted User:', user);

      login(token, user.name, user.picture);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login Error Details:', err.response?.data || err.message || err);
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl rounded-2xl p-10 w-full max-w-md border border-gray-700">
        <h1 className="text-3xl font-bold text-white text-center mb-3">Welcome to CRMApp</h1>
        <p className="text-gray-400 text-center mb-8">Sign in with Google to access your dashboard</p>

        <GoogleOAuthProvider clientId="186805678325-f71i8k2gcqc4stpgo7km24h1g276kvjp.apps.googleusercontent.com">
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleLogin}
              onError={() => console.error('Google Login Component Error')}
              theme="filled_black"
              size="large"
              shape="pill"
            />
          </div>
        </GoogleOAuthProvider>

        <p className="mt-6 text-center text-xs text-gray-500">
          By signing in, you agree to our <span className="underline">Terms</span> & <span className="underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
