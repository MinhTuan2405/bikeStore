import { createBrowserRouter } from "react-router"; // use react-router-dom, not just "react-router"

import MainLayout from "../layouts/mainLayout";
import ProductsPage from "../pages/products/Product.Page";
import SettingPage from "../pages/Setting/Setting.Page";
import LoginPage from "../pages/auth/Login.Page";
import DashBoardPage from "../pages/overview/DashBoard.Page";
import ManagePage from "../pages/products/manage.Page";
import StaffManagePage from "../pages/staff/StaffManage.Page";
import StaffMetricPage from "../pages/staff/StaffMetric.Page";
import SaleMetricPage from "../pages/sales/SaleMetric.Page";
import ShowroomMetricPage from "../pages/Showroom/ShowroomMetric.Page";
import ShowroomManagePage from "../pages/Showroom/ShowroomManage.Page";

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
            path: 'product',
            children: [
                {
                    path: 'overview',
                    Component: ProductsPage
                },
                {
                    path: 'manage',
                    Component: ManagePage
                }
            ]
        },
        {
            path: 'staff',
            children: [
                {
                    path: 'metric',
                    Component: StaffMetricPage
                },
                {
                    path: 'manage',
                    Component: StaffManagePage
                }
            ]
        },
        {
            path: 'sales',
            children: [
                {
                    path: 'metrics',
                    Component: SaleMetricPage
                }
            ]
        },
        {
            path: 'showroom',
            children: [
                {
                    path: "metric",
                    Component: ShowroomMetricPage
                },
                {
                    path: 'manage',
                    Component: ShowroomManagePage
                }
            ]
        },

        {
            path: 'settings',
            Component: SettingPage
        }
        ],
    },
]);

export default router;
