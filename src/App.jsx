import { Route, Routes } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Registration from "../routes/Registration";
import Dashboard from "../routes/Dashboard";
import Blog from "../routes/Blog";
import About from "../routes/About";
import NotFound from "../routes/NotFound";
import ProtectedRoute from "../routes/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
