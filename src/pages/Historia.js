const Historia = () => {
    const view = `
        <h1>Historia de las Base de Datos</h1>
        <p> Desde el principio de las civilizaciones modernas de la humanidad, fue necesario llevar registro de las diferentes actividades tales como: agricultura, ganadería, entre otras, desde esos inicios se tenía la necesidad de llevar escritos sobre acontecimientos históricos, la cosecha que se generaba, el ganado que se tenía y más acontecimientos que sucedían. Si bien no era una base de datos como tal, siempre hemos tenido la necesidad de llevar un registro y eso es lo que son las bases de datos.</p>
        <h2>1959 - CODASYL</h2>
        <p>“Conference on Data Systems Languages”, era un consorcio de industrias informáticas que tenían como objetivo la regularización de un lenguaje de programación estándar que pudiera ser utilizado en multitud de ordenadores.
        Los miembros de este consorcio pertenecían a industrias e instituciones gubernamentales relacionadas con el proceso de datos, cuya principal meta era promover un análisis, diseño e implementación de los sistemas de datos más efectivos; y aunque trabajaron en varios lenguajes de programación como COBOL, nunca llegaron a establecer un estándar fijo proceso que se llevó a cabo por ANSI.
        El desarrollo del IDS desarrollado por Charles Bachman (que formaba parte de la CODASYL) supuso la creación de un nuevo tipo de sistema de base de datos conocido como modelo en red que permitió la creación de un estándar en los sistemas de bases de datos gracias a la creación de nuevos lenguajes de sistemas de información.(Historia De Las Bases De Datos., 2011)</p>
        <h2>Década de 1970</h2>
        <p>Por lo que respecta a la década de los setenta, Edgar Frank Codd, científico informático ingles conocido por sus aportaciones a la teoría de bases de datos relacionales, definió el modelo relacional a la par que publicó una serie de reglas para los sistemas de datos relacionales a través de su artículo “Un modelo relacional de datos para grandes bancos de datos compartidos”.</p>
        <div class="d-flex justify-content-center">
            <img src="https://histinf.blogs.upv.es/files/2011/01/edgar_frank_codd.jpg" alt="Edgar F. Codd">
        </div>
        <p>Este hecho dio paso al nacimiento de la segunda generación de los Sistemas Gestores de Bases de Datos.</p>
        <p>Como consecuencia de esto, durante la década de 1970, Lawrence J. Ellison, más conocido como Larry Ellison, a partir del trabajo de Edgar F. Codd sobre los sistemas de bases de datos relacionales, desarrolló el Relational Software System, o lo que es lo mismo, lo que actualmente se conoce como Oracle Corporation, desarrollando así un sistema de gestión de bases de datos relacional con el mismo nombre que dicha compañía.</p>
        <p>Posteriormente en la época de los ochenta también se desarrollará el SQL (Structured Query Language) o lo que es lo mismo un lenguaje de consultas o lenguaje declarativo de acceso a bases de datos relacionales que permite efectuar consultas con el fin de recuperar información de interés de una base de datos y hacer cambios sobre la base de datos de forma sencilla; además de analiza grandes cantidades de información y permitir especificar diversos tipos de operaciones frente a la misma información, a diferencia de las bases de datos de los años ochenta que se diseñaron para aplicaciones de procesamiento de transacciones.</p>
        <p>Pero cabe destacar que ORACLE es considerado como uno de los sistemas de bases de datos más completos que existen en el mundo, y aunque su dominio en el mercado de servidores empresariales ha sido casi total hasta hace relativamente poco, actualmente sufre la competencia del SQL Server de la compañía Microsoft y de la oferta de otros Sistemas Administradores de Bases de Datos Relacionales con licencia libre como es el caso de PostgreSQL, MySQL o Firebird que aparecerían posteriormente en la década de 1990.</p>

    `;
    return view;
};

export default Historia;