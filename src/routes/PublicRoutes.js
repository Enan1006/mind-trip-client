import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Login/Signup';

const PublicRoutes = [
    { path: '/', name: "Home", Component: Home },
    { path: '/login', name: "Login", Component: Login },
    { path: '/login', name: "Signup", Component: Signup }
]

export default PublicRoutes;