const Licencias = () => {
    const view = `
        <h1>Licenciamiento</h1>
        <p>Para comprender mejor que es el licenciamiento en los motores de bases de datos, tenemos que definir ¿qué es SQL?</p>
        <p><strong>SQL</strong> (por sus siglas en ingés <strong>Structured Query Language</strong>) es un lenguaje de dominio espefífico, diseñado para administrar, y recuperar información de sistemas de festión de bases de datos reacionales. Podemos encontar distitnos tipos de licencias y versiones de motores de base de datos utilizando el lenguaje de consultas SQL, entre los cuales podemos mencionar</p>
        <h3>MySQL</h3>
        <p>Es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: <strong>Licencia pública general/Licencia comercail</strong> por Oracle Corporation y está considerada como la base de datos de código abierto más popular del mundo, y una de las más populares en general junto a Oracle y Microsoft SQL Server, todo para entornos de desarrollo web.</p>
        <h3>Microsoft SQL Server</h3>
        <p>Es un sistema de gestión de bases de datos relacional, desarrollado por la empresa <strong>Microsoft.</strong> El lenguaje de desarrollo utilizado (por línea de comandos o mediante la interfaz gráfica de Manament Studio) es Transact-SQL (TSQL), una implementación del estandar ANSY del lenguaje SQL, utilizado para manipular y recuperar datos (DML), crear tablas y definir relaciones entre ellas (DDL).</p>
        <h3>Oracle SQL</h3>
        <p>Es un sistema de gestión de base de datos de tipo objeto-relación (ORDBMS, por el acrónimo en ingles de Object-Relational Data Base Management System), desarollado por Oracle Corporation. Su dominio en el mercado de servidores empresariales había sido casi total hasta que recienetemente la competencia del Microsoft SQL Server y de la oferta de otros RDBMS con licencia libre como PostgreSQL, MySql o Firebird</p>
        <h3>PostgreSQL</h3>
        <p>También llamado <strong>Postgres,</strong> es un sistema de gestión de bases de datos relaconal orientado a objetos y de código abierto, publicado bajo la licencia PostgrSQL, similar a la BSD o la MIT. COmo muchos otro proyectos de código abierto, el desarollo de postgreSQL no es manejado por una empresa o persona, sino que es dirigido por la comunidad de desarolladores que trabajan de forma desinteresada, altruista, libre o apoyados por organizaciones comerciales. Dicha comunidad es denominada el PGDG (PostgreSQL Global Development Group). PostgreSQL no tiene un gestor de errores (bugs), haciendo muy difícil conocer el estado de corrección de los mismos.</p>
    `;
    return view;
};

export default Licencias;   