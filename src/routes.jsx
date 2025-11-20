import Home from "./Pages/Home/Home"
import ShopApp from "./Pages/Shop/shop";
import About from "./Pages/AboutUs/About";
import Coaches from "./Pages/Coaches/Coaches";
import Contact from "./Pages/Contact/Contact";
import LanguagePage from "./Pages/languagePage/languagePage";
import SingleCoach from "./Pages/SingleCoach/SingleCoach";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/shop', element: <ShopApp /> },
    { path: '/about', element: <About /> },
    { path: '/coach', element: <Coaches /> },
    { path: '/contact', element: <Contact /> },
    { path: '/lan', element: <LanguagePage /> },
    { path: '/coache', element: <SingleCoach /> },
];

export default routes