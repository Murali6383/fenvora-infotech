import { Outlet } from 'react-router-dom'; import Navbar from '../components/Navbar'; import Footer from '../components/Footer'; import { useReveal } from '../hooks/useReveal';
export default function MainLayout() { useReveal(); return (<><Navbar /><main><Outlet /></main><Footer /></>); }
