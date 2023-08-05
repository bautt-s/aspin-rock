import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Landing from './landing-section/landing-ind';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/individual",
        element: <Landing view='individual' />,
    },
    {
        path: "/advisor",
        element: <Landing view='advisor' />,
    },
    {
        path: "/institutional",
        element: <Landing view='institutional' />,
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);