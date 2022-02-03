const Historia = () => {
    const view = `
        <h1>Historia de las Base de Datos</h1>
        <p> Desde el principio de las civilizaciones modernas de la humanidad, fue necesario llevar registro de las diferentes actividades tales como: agricultura, ganadería, entre otras, desde esos inicios se tenía la necesidad de llevar escritos sobre acontecimientos históricos, la cosecha que se generaba, el ganado que se tenía y más acontecimientos que sucedían. Si bien no era una base de datos como tal, siempre hemos tenido la necesidad de llevar un registro y eso es lo que son las bases de datos.</p>
        <h2>1959 - CODASYL</h2>
        <p>“Conference on Data Systems Languages”, era un consorcio de industrias informáticas que tenían como objetivo la regularización de un lenguaje de programación estándar que pudiera ser utilizado en multitud de ordenadores.
        Los miembros de este consorcio pertenecían a industrias e instituciones gubernamentales relacionadas con el proceso de datos, cuya principal meta era promover un análisis, diseño e implementación de los sistemas de datos más efectivos; y aunque trabajaron en varios lenguajes de programación como COBOL, nunca llegaron a establecer un estándar fijo proceso que se llevó a cabo por ANSI.
        El desarrollo del IDS desarrollado por Charles Bachman (que formaba parte de la CODASYL) supuso la creación de un nuevo tipo de sistema de base de datos conocido como modelo en red que permitió la creación de un estándar en los sistemas de bases de datos gracias a la creación de nuevos lenguajes de sistemas de información.(Historia De Las Bases De Datos., 2011)</p>
        <h2>Década de 1970</h2>
        <p>E. F. Codd propone el uso de bases de datos relacionales. En su modelo el esquema de la base de datos esta desconectado de la parte fisica del almacenamiento. Esto se volvio el principio de los sistemas de bases de datos.</p>
        <div class="d-flex justify-content-center">
            <img src="https://histinf.blogs.upv.es/files/2011/01/edgar_frank_codd.jpg" alt="Edgar F. Codd">
        </div>
        <p>Surgieron dos prototipos de sistemas relacionales, Ingres desarrollado por la UBC, y System R creado por IBM.
        Fue en esta decada donde el termino RDBMS " Relational Database Management System" fue reconocido.</p>
    `;
    return view;
};

export default Historia;