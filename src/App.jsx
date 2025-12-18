import { Route, Routes } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Registration from "../routes/Registration";
import Dashboard from "../routes/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
