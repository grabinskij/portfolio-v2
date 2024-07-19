import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import App from './App'
import './index.css'
import LegalNotice from "./components/LegalNotice";
import PrivacyPolicy from "./components/PrivacyPolicy";


const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/legal-notice", element: <LegalNotice />},
    {path: "/privacy-policy", element: <PrivacyPolicy/>},
]);

console.log('Debugging starts here before rendering the app');
debugger;


ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
)
