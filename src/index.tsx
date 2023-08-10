import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import { store } from './store/store'
import { Provider } from 'react-redux'

import Landing from './pages/landing-page/landing-ind';
import DisclosuresPage from './pages/disclosures-page/disclosures';
import Page606 from './pages/disclosures-page/606';
import AccessibilityPage from './pages/disclosures-page/accessibility';
import ContactPage from './pages/disclosures-page/contact';
import PrivacyPage from './pages/disclosures-page/privacy';
import TermsPage from './pages/disclosures-page/terms-conditions';
import CareersPage from './pages/other-pages/careers';
import LetterPage from './pages/other-pages/letter';
import RiskAssetPage from './pages/other-pages/risk-asset';
import CorporatePage from './pages/other-pages/corporate';
import EquityPage from './pages/other-pages/equity';
import MergersPage from './pages/other-pages/m-and-a';
import Page404 from './pages/other-pages/404';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '*',
        element: <Page404 />
    },
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/individual",
        element: <Landing />,
    },
    {
        path: "/advisor",
        element: <Landing />,
    },
    {
        path: "/institutional",
        element: <Landing />,
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
    },
    {
        path: "/privacy",
        element: <PrivacyPage />
    },
    {
        path: "/terms-and-conditions",
        element: <TermsPage />
    },
    {
        path: "/careers",
        element: <CareersPage />
    },
    {
        path: "/letter-ceo",
        element: <LetterPage />
    },
    {
        path: "/risk-and-asset",
        element: <RiskAssetPage />
    },
    {
        path: "/corporate",
        element: <CorporatePage />
    },
    {
        path: "/equity",
        element: <EquityPage />
    },
    {
        path: "/mergers-and-acquisitions",
        element: <MergersPage />
    }
])

root.render(
    <React.StrictMode>
        <Provider store={store}> 
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);