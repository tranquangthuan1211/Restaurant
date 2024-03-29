import Home from '../binding/cart';
import Login from '../page/Login';
import Register from '../page/Register';
import Cooking from '../binding/cartCooking'
import DetailCooking from '../binding/DetailCooking';
import Setting from '../page/Setting';
const publicRoute = [
    { path: '/', component: Home },
    {path:'/login',component:Login},
    {path:"/register",component:Register},
    {path:"/cooking",component:Cooking},
    {path:"/cooking/:id",component:DetailCooking},
    {path:"/setting",component:Setting}
];
const privateRoute = [];

export { publicRoute, privateRoute };
