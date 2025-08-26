import {ComponentType, lazy} from 'react';
import AboutUs from '../pages/AboutUs';
import Pricing from '../pages/Pricing';
import ContactUs from '../pages/ContactUs';
import Sitemap from '../pages/SiteMap';
import ServicesPage from '../pages/Services';
import ServicesTemplate from '../pages/ServicesTemplate';

const HomePage = lazy(() => import('../pages/Home'));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('../pages/TermsPage'));
const HowItWorksPage = lazy(() => import('../pages/HowItWorks'));

export interface PageProps {
  Pagetitle?: string;
  PageContent?: string;
  PageImage?: string;
}
// Route config type
interface RouteConfig {
  name: string;
  path: string;
  component: ComponentType<PageProps>;
  pageTitle?: string;
  PageImage?: string;
}

export const routes: RouteConfig[] = [
    {
        name: "HomePage1",
        pageTitle: "Pest Control",
        path: "/",
        component: HomePage
    }, 
    {
        name: "HowItWorks",
        pageTitle: "How it Works",
        path: "/how-it-works",
        component: HowItWorksPage
    },
    {
        name: "AboutUs",
        pageTitle: "About Us",
        path: "/about-us",
        component: AboutUs
    },
    {
        name: "Pricing",
        pageTitle: "Pricing",
        path: "/pricing",
        component: Pricing
    },
    {
        name: "ContactUs",
        pageTitle: "Contact Us",
        path: "/contact-us",
        component: ContactUs
    },
    {
        name: "ServicesPage",
        pageTitle: "Our Services",
        path: "/services",
        component: ServicesPage
    },
    {
        name: "Termite",
        pageTitle: "Termite Control",
        path: "/termite-control",
        PageImage: '/images/kitchen.jpg',
        component: ServicesTemplate
    },
    {
        name: "BeeControl",
        pageTitle: "Bee Control",
        path: "/bees",
        PageImage: '/images/sidebar.webp',
        component: ServicesTemplate
    },
    {
        name: "CritterControl",
        pageTitle: "Critter Control",
        path: "/critter",
        PageImage: '/images/sidebar.webp',
        component: ServicesTemplate
    },
    {
        name: "BedBugControl",
        pageTitle: "Bed Bug Control",
        path: "/bed-bug",
        PageImage: '/images/bedroom.jpg',
        component: ServicesTemplate
    },
    {
        name: "FleasControl",
        pageTitle: "Flea Control",
        path: "/flea",
        PageImage: '/images/fleas.jpg',
        component: ServicesTemplate
    },

    {
        name: "SiteMap",
        pageTitle: "Contact Us",
        path: "/sitemap",
        component: Sitemap
    },
    {
        name: "PrivacyPolicyPage",
        pageTitle: "",
        path: "/privacy",
        component: PrivacyPolicyPage
    },
    {
        name: "TermsPage",
        pageTitle: "",
        path: "/terms",
        component: TermsPage
    },
]
