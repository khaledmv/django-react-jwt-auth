import { Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import ProtectedRoute from "./ProtectedRoute";
import AboutPage from "../pages/AboutPage";

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/"  element={<ProtectedRoute> <HomePage /> </ProtectedRoute> } />
            <Route path="/about"  element={ <AboutPage /> } />
            <Route path="/login"  element={ <LoginPage /> } />
        </Routes>
    </>
  )
}
