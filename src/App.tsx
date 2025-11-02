import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceArea from "./pages/ServiceArea";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Accessibility from "./pages/Accessibility";
import NotFound from "./pages/NotFound";
import MedicalCleaning from "./pages/services/MedicalCleaning";
import OfficeCleaning from "./pages/services/OfficeCleaning";
import SchoolCleaning from "./pages/services/SchoolCleaning";
import ChurchCleaning from "./pages/services/ChurchCleaning";
import GymCleaning from "./pages/services/GymCleaning";
import BankCleaning from "./pages/services/BankCleaning";
import DaycareCleaning from "./pages/services/DaycareCleaning";
import PropertyManagementCleaning from "./pages/services/PropertyManagementCleaning";
import IndustrialCleaning from "./pages/services/IndustrialCleaning";
import CarDealershipsCleaning from "./pages/services/CarDealershipsCleaning";
import OfficeDisinfecting from "./pages/services/OfficeDisinfecting";
import FloorCare from "./pages/services/FloorCare";
import WindowCleaning from "./pages/services/WindowCleaning";
import DayPorter from "./pages/services/DayPorter";
import PostConstruction from "./pages/services/PostConstruction";
import DeepCleaning from "./pages/services/DeepCleaning";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/medical" element={<MedicalCleaning />} />
          <Route path="/services/office" element={<OfficeCleaning />} />
          <Route path="/services/school" element={<SchoolCleaning />} />
          <Route path="/services/church" element={<ChurchCleaning />} />
          <Route path="/services/gym" element={<GymCleaning />} />
          <Route path="/services/bank" element={<BankCleaning />} />
          <Route path="/services/daycare" element={<DaycareCleaning />} />
          <Route path="/services/property-management" element={<PropertyManagementCleaning />} />
          <Route path="/services/industrial" element={<IndustrialCleaning />} />
          <Route path="/services/car-dealerships" element={<CarDealershipsCleaning />} />
          <Route path="/services/office-disinfecting" element={<OfficeDisinfecting />} />
          <Route path="/services/floor-care" element={<FloorCare />} />
          <Route path="/services/window-cleaning" element={<WindowCleaning />} />
          <Route path="/services/day-porter" element={<DayPorter />} />
          <Route path="/services/post-construction" element={<PostConstruction />} />
          <Route path="/services/deep-cleaning" element={<DeepCleaning />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
