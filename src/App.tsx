import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { RepairPage } from "./pages/RepairPage";
import { InstallationsPage } from "./pages/InstallationsPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />

      <Route path="/en" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="repair" element={<RepairPage />} />
        <Route path="installations" element={<InstallationsPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      <Route path="/es" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="reparacion" element={<RepairPage />} />
        <Route path="instalaciones" element={<InstallationsPage />} />
        <Route path="testimonios" element={<TestimonialsPage />} />
        <Route path="galeria" element={<GalleryPage />} />
        <Route path="contacto" element={<ContactPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
