import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Practice from "./pages/Practice";
import Lessons from "./pages/Lessons";
import Analytics from "./pages/Analytics";
import Garden from "./pages/Garden";
import Login from "./pages/Login";
import Arcade from "./pages/Arcade";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/login" element={<Login />} />
        <Route path="/practice/:lessonId" element={<Practice />} />
        <Route path="/arcade" element={<Arcade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;