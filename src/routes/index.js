import Header from "../templates/Header";
import Home from "../pages/Home";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
import Historia from "../pages/Historia";
import Nav from "../templates/Nav";
import Caracteristicas from "../pages/Caracteristicas";
import VentajasDesventajas from "../pages/VentajasDesventajas";
import OraclePosgress from "../pages/OraclePosgress";
import Comparacion from "../pages/Comparacion";
import Licencias from "../pages/Licencias";
import SqlVsNoSql from "../pages/SqlVsNoSql";
import Referencias from "../pages/Referencias";


/**
 * Objeto routes, guarda
 * las rutas que utilizaremos
*/
const routes = {
    '/': Home,
    '/contact': 'Contact',
    '/historia': Historia,
    '/caracteristicas': Caracteristicas,
    '/ventajas-desventajas': VentajasDesventajas,
    '/oracle-vs-posgres': OraclePosgress,
    '/mysql-vs-sqlserver': Comparacion,
    '/licenciamiento': Licencias,
    '/sql-o-nosql': SqlVsNoSql,
    '/referencias': Referencias
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const rightNav = null || document.getElementById('rigthNav');
    // const rightNav = null || document.getElementById('rigth-nav');

    header.innerHTML = await Header();
    
    //Logica para obetener la ruta y renderizar las paginas
    let hash = getHash();
    let route = await resolveRoutes(hash);
    
    await Nav();
    let render = routes[route] ? routes[route] : Error404;
    
    content.innerHTML = await render();
    
};

export default router;