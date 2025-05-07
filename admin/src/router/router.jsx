import { createBrowserRouter } from "react-router"; // use react-router-dom, not just "react-router"

import MainLayout from "../layouts/mainLayout";
import ProductsPage from "../pages/products/Product.Page";
import SettingPage from "../pages/Setting/Setting.Page";
import LoginPage from "../pages/auth/Login.Page";
import DashBoardPage from "../pages/overview/DashBoard.Page";

import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: '/login',
        Component: LoginPage
    },
    {
        path: '/',
        Component: MainLayout,
        children: [
        {
            index: true,
            Component: DashBoardPage
        },
        {
            path: 'product', // don't need leading slash in children
            Component: ProductsPage,
        },

        {
            path: 'settings',
            Component: SettingPage
        }
        ],
    },
]);

export default router;
