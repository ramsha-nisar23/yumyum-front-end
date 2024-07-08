import { Route, Routes } from "react-router-dom";
import LoginForm from "./screens/login/LoginForm";
import Signup from "./screens/signup/SignUp";
import NextForm from "./screens/signup/NextForm";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./screens/dashboard/Dashboard";
import TermsAndConditions from "./screens/terms&conditions/TermsAndConditions";
import MenuManagement from "./screens/menu/MenuManagement";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="signup" element={<Signup />} />
        <Route path="proceed" element={<NextForm />} />
        <Route path="sidebar" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="menu" element={<MenuManagement />} />
        </Route>
        <Route path="terms&conditions" element={<TermsAndConditions />} />
      </Routes>
    </>
  );
}

export default App;
