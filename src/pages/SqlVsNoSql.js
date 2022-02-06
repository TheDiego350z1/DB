const SqlVsNoSql = () => {
    const view = `
        <h1> SQL o NoSQL</h1>
        <p>Para comenzar, debemos de definir que significa Nosql, y podemos decir que se reiere a una base de datos no relacional o no SQL. Una base de datos relacinal es un formato de bases de datos muy estructurado basado en un atabla como Mysql u Oracle. Las bases de datos NoSQL están orientadas a los documentos y le permiten almacenar y recuperar datos en formatos que no sean tablas.</p>
        <h3>Diferencias</h3>
        <ul>
            <li>SQL perimite combinar de forma diferente tablas para extraer información relacionada, mientras que NoSQL no lo permite o muy limitadamente.</li>
            <li>NoSQL permite distribuir grandes cantidades de información; mientras que SQL facilita distribuir bases de datos relacionales.</li>
            <li>SQL permite gestionar los datos junto con las relaciones existentes entre ellos; en NoSQL no existe ese tipo de utilidades.</li>
            <li>NoSQL permite un escalado horizontal sin problemas - por su capacidad de distribución-; mientras que escalar SQL resulta más complicado.</li>
        </ul>
        <h3>Motores de NoSQL<h3>
        <h4>Cassandra</h4>
        <p>Base de datos creada por Apache del tipo clave-valor. Dispone de un lenguaje propio para realizar consultas CQL (Cassandra Query Language). Cassandra es una aplicación Java por lo que puede correr en cualquer plataforma que cuente con la maquina virtual de Java.</p>
        <h4>Redis</h4>
        <p>Base de datos creada por Salvatore Sanfilippo y Pieter Noordhuis y está apoyado por VMWare. Se trata de una base de datos del tipo clave-valor. Se puede imaginar como un array gigante en memoria para almacenar datos, datos que pueden ser cadenas, hashes, conjuntos de datos o listas. Tiene la ventaja de que sus operaciones son atómicas y persistentes. Sin embargo, Redis no permite realizar consultas, solo se puede insertar y obtener datos, además de las operaciones comunes sobre conjuntos (diferencia, unión e inserción). Creado en ANSI C, por lo tanto, es compatible y funciona sin problemas en sistemas Unix, Linux y sus derivados, Solaris, OS/X, sin embargo no existe soporte oficial para plataformas Windows.</p>
        <h4>MongoDB</h4>
        <p>Base de datos creada por MongoDB Inc. (anteriormente 10gen) del tipo orientada a documentos, de esquema libre, es decir, que cada entrada puede tener un esquema de datos diferente que nada tenga que ver con el resto de registros almacenados. Es bastante rápido a la hora de ejecutar sus operaciones ya que maneja datos binarios. En poco tiempo, MongoDB se ha convertido en una de las bases de datos NoSQL favoritas por los desarrolladores. Está escrito en lenguaje C++. Para el almacenamiento de la información, utiliza un sistema propio de documento conocido con el nombre BSON, que es una evolución del formato JSON pero con la peculiaridad de que puede almacenar datos representados de forma binaria. Está disponible para los sistemas operativos Windows, Linux, OS/X y Solaris.</p>
        <h4>CouchDB</h4>
        <p>Sistema creado por Apache y escrito en el lenguaje Erlang que funciona en la mayoría de sistemas POSIX (multiplataforma), incluyendo GNU/Linux y OS/X, además de sistemas Windows. Como características más importantes cabe destacar el uso de RESTful HTTP API como interfaz y JavaScript como principal lenguaje de interacción. Para el almacenamiento de los datos se utilizan archivos JSON. Permite la creación de vistas, que son el mecanismo que permite la combinación de documentos para retornar valores de varios documentos, es decir, CouchDB permite la realización de las operaciones JOIN típicas de SQL.</p>
    `;
    return view;
};

export default SqlVsNoSql;