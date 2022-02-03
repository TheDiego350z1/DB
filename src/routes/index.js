import Header from "../templates/Header";
import Home from "../pages/Home";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
import Historia from "../pages/Historia";
import Nav from "../templates/Nav";


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
    const rightNav = null || document.getElementById('rigthNav');
    // const rightNav = null || document.getElementById('rigth-nav');
    console.log(rightNav);

    header.innerHTML = await Header();
    
    //Logica para obetener la ruta y renderizar las paginas
    let hash = getHash();
    let route = await resolveRoutes(hash);
    
    await Nav();
    let render = routes[route] ? routes[route] : Error404;
    
    content.innerHTML = await render();
    
};

export default router;