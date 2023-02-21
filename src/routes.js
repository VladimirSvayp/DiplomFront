import { CART_ROUTE, ORDERS_ROUTE, PROFILE_ROUTE, BLOG_ROUTE, PRODUCT_ROUTE, DELIVERY_ROUTE, CONTACTS_ROUTE, CATALOG_ROUTE, MAIN_ROUTE, POST_ROUTE, ADMIN_ROUTE } from "./utils/consts";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import ProfilePage from "./pages/ProfilePage";
import BlogPage from "./pages/BlogPage";
import ProductPage from "./pages/ProductPage";
import DeliveryPage from "./pages/DeliveryPage";
import ContactsPage from "./pages/ContactsPage";
import CatalogPage from "./pages/CatalogPage";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import AdminPage from "./pages/AdminPage/AdminPage";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: AdminPage
    }
]

export const authRoutes = [
    {
        path: CART_ROUTE,
        Element: CartPage
    },
    {
        path: PROFILE_ROUTE,
        Element: ProfilePage
    },
    {
        path: ORDERS_ROUTE,
        Element: OrdersPage
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Element: MainPage
    },
    {
        path: BLOG_ROUTE,
        Element: BlogPage
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Element: ProductPage
    },
    {
        path: DELIVERY_ROUTE,
        Element: DeliveryPage
    },
    {
        path: CONTACTS_ROUTE,
        Element: ContactsPage
    },
    {
        path: CATALOG_ROUTE,
        Element: CatalogPage
    },
    {
        path: POST_ROUTE,
        Element: PostPage
    },
]