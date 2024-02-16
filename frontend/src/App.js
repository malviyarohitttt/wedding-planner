import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import User from "./UserDashboard/User/User.jsx";
import Events from "./UserDashboard/MyEvents/Events.jsx";
import Guests from "./UserDashboard/Guests/Guests.jsx";
import AdminLayout from "./AdminDashboard/AdminLayout/AdminLayout.jsx";
import Admin from "./AdminDashboard/Admin/Admin.jsx";
import Clients from "./AdminDashboard/Clients/Clients.jsx";
import ManageEvents from "./AdminDashboard/ManageEvents/ManageEvents.jsx";
import UserLayout from './UserDashboard/UserLayout/UserLayout.jsx' 



// Layout component for admin page

function App() {
  return (
    <>
      <Routes>
        
        {/* Index Routings */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Routings */}
        <Route path="/user" element={<UserLayout><User /></UserLayout>} />
        <Route path="/user/myevents" element={<UserLayout><Events /></UserLayout>} />
        <Route path="/user/guests" element={<UserLayout><Guests /></UserLayout>} />


        Admin Routings
        <Route path="/admin" element={<AdminLayout><Admin /></AdminLayout>} />
        <Route path="/admin/clients" element={<AdminLayout><Clients /></AdminLayout>}/>
        <Route path="/admin/manageEvents" element={<AdminLayout><ManageEvents /></AdminLayout>}/>

      </Routes>
    </>
  );
}

export default App;
