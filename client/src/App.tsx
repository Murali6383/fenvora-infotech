import { Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Projects from './pages/Projects';
import Process from './pages/Process';
import Internships from './pages/Internships';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Main Pages */}
        <Route index element={<Home />} />

        <Route
          path="about"
          element={<About />}
        />

        <Route
          path="services"
          element={<Services />}
        />

        <Route
          path="solutions"
          element={<Solutions />}
        />

        <Route
          path="projects"
          element={<Projects />}
        />

        {/* Development Process */}
        <Route
          path="process"
          element={<Process />}
        />

        <Route
          path="internships"
          element={<Internships />}
        />

        <Route
          path="careers"
          element={<Careers />}
        />

        <Route
          path="contact"
          element={<Contact />}
        />

        {/* Legal Pages */}
        <Route
          path="privacy"
          element={<Legal kind="privacy" />}
        />

        <Route
          path="terms"
          element={<Legal kind="terms" />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<Legal kind="404" />}
        />
      </Route>
    </Routes>
  );
}