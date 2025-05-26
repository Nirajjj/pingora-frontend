import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthForm from "./pages/AuthForm";
import Layout from "./layout/Layout";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route index path="/" element={<HomePage />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<AuthForm type="login" />} />
            <Route path="/signup" element={<AuthForm type="signup" />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
