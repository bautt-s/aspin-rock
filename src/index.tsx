import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Landing from './landing-page/landing-ind';
import DisclosuresPage from './disclosures-page/disclosures';
import Page606 from './disclosures-page/606';
import AccessibilityPage from './disclosures-page/accessibility';
import ContactPage from './disclosures-page/contact';

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
    {
        path: "/disclosures",
        element: <DisclosuresPage />
    },
    {
        path: "/606",
        element: <Page606 />
    },
    {
        path: "/accessibility",
        element: <AccessibilityPage />
    },
    {
        path: "/accessibility",
        element: <AccessibilityPage />
    },
    {
        path: "/contact-us",
        element: <ContactPage />
    }
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);