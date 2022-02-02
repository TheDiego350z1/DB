import Header from "../templates/Header";
import Home from "../pages/Home";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
import Historia from "../pages/Historia";

/**
 * Objeto routes, guarda
 * las rutas que utilizaremos
*/
const routes = {
    '/': Home,
    '/contact': 'Contact',
    '/historia': Historia
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);

    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();

};

export default router;