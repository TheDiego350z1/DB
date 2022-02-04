const OraclePosgress = () =>{
    const view = `
        <h1>Oracle vs PosgreSQL</h1>
        <br>
        <br>
        <h2>Funcionalidad</h2>
        <table class="table table-bordered border-dark">
            <thead>
                <tr>
                    <th scope="col">PostgreSQL</th>
                    <th scope="col">Oracle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Alta disponibilidad</td>
                    <td>Alta Dispinibilidad</td>
                </tr>
                <tr>
                    <td>Cuatro niveles de transacciones: Lectura no confirmada, Lectura Confirmada, Lectura repetible, serializable</td>
                    <td>Mayor transacciones por segundo</td>
                </tr>
                <tr>
                    <td>Compatible con ACID</td>
                    <td>Más funcionalidad que PostgreSQL, pero estas funciones tienen un precio superior</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Compatible co ACID</td>
                </tr>
            </tbody>
        </table>
        <br>
        <h2>Escalabilidad</h2>
        <table class="table table-bordered border-dark">
            <thead>
                <tr>
                    <th scope="col">PostgreSQL</th>
                    <th scope="col">Oracle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Más escalable debido a sus características de código abierto</td>
                    <td>Hay que gastar más en infraestructura para llevar a cabo operaciones de escalabilidad, ya que la edición Standard solo tiene cuatro sockets, mientras que la edición Enterprise ofrece más</td>
                </tr>
                <tr>
                    <td>Las bases de datos se adaptan a cualquier volumen de datos</td>
                    <td>Mantenga la integridad de los datos con registros de rehacer</td>
                </tr>
                <tr>
                    <td>Mantenga la integridad de los datos con registros de rehacer</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Fomente la integridad durante las operaciones de escalabilidad con archivos WAL, aunque estos archivos están limitados a 16 MB</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <br>
        <h2>Seguridad</h2>
        <table class="table table-bordered border-dark">
            <thead>
                <tr>
                    <th scope="col">PostgreSQL</th>
                    <th scope="col">Oracle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ofrece roles y roles heredados que permiten a los desarrolladores establecer permisos</td>
                    <td>Características de seguridad más robustas que PostgreSQL</td>
                </tr>
                <tr>
                    <td>Admite SSL nativo que ayuda a cifrar las comunicaciones del servidor</td>
                    <td>Se requieren ediciones de mayor costo para acceder a opciones de seguridad avanzadas</td>
                </tr>
                <tr>
                    <td>Proporciona controles de acceso adicionales a través de SE-PostgreSQL que se basan en la política de seguridad de SELinux</td>
                    <td>Resiliente a través de evaluaciones de seguridad, protección de datos, auditoría y monitoreo</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Proporciona excelentes soluciones de aislamiento entre bases de datos conectables y gestión de cifrado de claves independiente</td>
                </tr>
            </tbody>
        </table>
        <br>
        <h2>Apoyo</h2>
        <table class="table table-bordered border-dark">
            <thead>
                <tr>
                    <th scope="col">PostgreSQL</th>
                    <th scope="col">Oracle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Comunidad activa que ofrece soporte en línea gratuito a través de blogs, correos electrónicos, código y otros canales</td>
                    <td>Soporte costoso</td>
                </tr>
                <tr>
                    <td>No hay número de teléfono para llamar por emergencias</td>
                    <td>Las grandes corporaciones tienen que contratar consultores de Oracle o depender del soporte de Oracle, con un costo de hasta el 25 por ciento de las tarifas de licencia.</td>
                </tr>
                <tr>
                    <td>El costo de contratar desarrolladores de la comunidad PostgreSQL para soporte premium es menor que el de un especialista de Oracle comparable</td>
                    <td>El soporte de emergencia está disponible por teléfono</td>
                </tr>
                <tr>
                    <td>Los proveedores de soporte de terceros también están disponibles, como EnterpriseDB y 2nd Quadrant, que también ofrecen su propia distribución postgreSQL.</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <br>
        <h2>Compatibilidad y replicación</h2>
        <table class="table table-bordered border-dark">
            <thead>
                <tr>
                    <th scope="col">PostgreSQL</th>
                    <th scope="col">Oracle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Alta disponibilidad a través de la replicación por streaming</td>
                    <td>Alta disponibilidad a través de DataGuard</td>
                </tr>
                <tr>
                    <td>La replicación maestro-esclavo proporciona a los desarrolladores un performance impecable durante el backup, la asignación de tareas y la agrupación en clústeres.</td>
                    <td>La replicación maestro-esclavo proporciona a los desarrolladores un performance impecable durante el backup, la asignación de tareas y la agrupación en clústeres.</td>
                </tr>
                <tr>
                    <td>Compatibilidad con el marco ORM</td>
                    <td>Replicación maestro-maestro</td>
                </tr>
                <tr>
                    <td>Soporte para un grupo más grande de API que Oracle, lo que lo hace más compatible con muchas aplicaciones, complementos y entornos SQL</td>
                    <td>Compatibilidad con el marco ORM</td>
                </tr>
                <tr>
                    <td>Compatibilidad con bibliotecas JDBC, ODBC, OLEDB y .Net</td>
                    <td>Menos soporte de API que PostgreSQL</td>
                </tr>
            </tbody>
        </table>
        <br>
        <h2>Cumplimiento de SQL</h2>
        <table class="table table-bordered border-dark">
            <thead>
                <tr>
                    <th scope="col">PostgreSQL</th>
                    <th scope="col">Oracle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sintaxis SQL menos compleja, ya que PostgreSQL sigue SQL estándar</td>
                    <td>Sintaxis SQL más compleja en comparación con PostgreSQL, ya que esta base de datos sigue el oracclismo</td>
                </tr>
                <tr>
                    <td>Las extensiones de procedimiento integradas no estándar están disponibles a través de pg/SQL</td>
                    <td>Las extensiones de procedimiento integradas no estándar están disponibles a través de PL/SQL</td>
                </tr>
                <tr>
                    <td>Pg/SQL es una tecnología menos madura que la de Oracle, y es más lenta</td>
                    <td>PL/SQL es una tecnología más rápida que pg/SQL</td>
                </tr>
                <tr>
                    <td>Los desarrolladores pueden usar controladores de consultas como R y Python para escribir directamente en la base de datos</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <br>
        <h2>Alta disponibilidad</h2>
        <table class="table table-bordered border-dark">
            <thead>
                <tr>
                    <th scope="col">PostgreSQL</th>
                    <th scope="col">Oracle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>PgPool en la edición PostgreSQL Enterprise proporciona una funcionalidad similar a Oracle Real Application Clusters</td>
                    <td>Las bases de datos se pueden compartir entre un grupo de servidores a través de Oracle Real Application Clusters</td>
                </tr>
                <tr>
                    <td>Agregar nodos dinámicamente a través de opciones de escalabilidad horizontal</td>
                    <td>Cuando se produce un error, la base de datos puede ejecutarse en las bases de datos restantes para ofrecer una administración continua del flujo de trabajo</td>
                </tr>
                <tr>
                    <td>PgPool no es una característica integrada de PostgreSQL y requiere muchas herramientas de Clusterware para lograr una funcionalidad similar a la de Real Application Clusters</td>
                    <td>Real Application Cluster es una característica integrada</td>
                </tr>
            </tbody>
        </table>
        <br>
        <h2>Herramientas de migración</h2>
        <table class="table table-bordered border-dark">
            <thead>
                <tr>
                    <th scope="col">PostgreSQL</th>
                    <th scope="col">Oracle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ofrece muchas herramientas que admiten la migración desde Oracle</td>
                    <td>Database Replay y SQL Performance Analyzer en Real Application Testing le permiten analizar y probar los requisitos de migración antes del movimiento</td>
                </tr>
                <tr>
                    <td>Ora2PG migra grandes proyecto</td>
                    <td>El proceso de migración es más fácil de planificar a través de estas herramientas de preparación, reduciendo el tiempo y los recursos requeridos en comparación con PostgreSQL</td>
                </tr>
                <tr>
                    <td>Oracle_FDW mueve esquemas y datos</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Orafce garantiza la compatibilidad de funciones</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PGREPLAY es una herramienta de pruebas de estrés que puede ser hackeada para probar grandes bases de datos de pruebas de estrés</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Para migrar código, las herramientas de terceros, como AWS Schema Conversion Tool, funcionan bien</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Mover enormes bases de datos Oracle a PostgreSQL puede consumir recursos y tiempo significativos</td>
                    <td></td>
                </tr>
            </tbody>
        <br>
        <h2>Backup y Recuperación</h2>
        <table class="table table-bordered border-dark">
            <thead>
                <tr>
                    <th scope="col">PostgreSQL</th>
                    <th scope="col">Oracle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>El proceso de recuperación de datos es sencillo, ya que simplemente reemplaza directorios y subdirectorios más los archivos WAL asociados</td>
                    <td>Los procesos de recuperación de datos pueden ser demasiado complejos</td>
                </tr>
                <tr>
                    <td>Los procesos de recuperación de datos pueden ser demasiado complejos</td>
                    <td>Los procesos de recuperación de datos pueden ser demasiado complejos</td>
                </tr>
            </tbody>
        </table>
    `;
    return view;
};

export default OraclePosgress;