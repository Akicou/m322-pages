import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { HomePage } from "./pages/HomePage";
import { ProblemsPage } from "./pages/ProblemsPage";
import { ContactPage } from "./pages/ContactPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { AboutPage } from "./pages/AboutPage";
import { FaqPage } from "./pages/FaqPage";
import { ReferencesPage } from "./pages/ReferencesPage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/funktionen" element={<FeaturesPage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/referenzen" element={<ReferencesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}
