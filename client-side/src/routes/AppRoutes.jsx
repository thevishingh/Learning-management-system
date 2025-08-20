import { Routes, Route } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
// import UserLayout from "@/layouts/UserLayout";
// import TutorLayout from "@/layouts/TutorLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";

// Public pages
import Home from "@/public/pages/Home";
import About from "@/public/pages/About";
import Contact from "@/public/pages/Contact";
import Courses from "@/public/pages/Courses";
import Careers from "@/public/pages/Career";
import Login from "@/public/pages/Login";
import Register from "@/public/pages/Register";
import ComingSoonPage from "@/public/pages/ComingSoonPage";

// User/Tutor Dashboard Pages
// import UserDashboard from "@/dashboard/user/UserDashboard";
// import TutorDashboard from "@/dashboard/tutor/TutorDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Layout */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<ComingSoonPage />} />
      </Route>

    
     
    </Routes>
  );
};

export default AppRoutes;
