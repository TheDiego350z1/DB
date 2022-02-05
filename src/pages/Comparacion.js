const Comparacion = () => {
    const view = `
        <h1>Comparación entre MySQL vs SQL Server</h1>
        <table class="table table-bordered border-dark">
            <tbody>
                <tr>
                    <th></th>
                    <th>servidor SQL</th>
                    <th>MySQL</th>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Licencia</td>
                    <td>Es un software propietario.</td>
                    <td>Es gratuito y de código abierto bajo licencia GPL v2, y también se distribuye como software propietario.</td>
                </tr>
                <tr>
                    <td>Desarrollador</td>
                    <td>Está desarrollado por Microsoft. <br>Dado que el servidor SQL está diseñado por Microsoft, a menudo también se lo denomina como MS SQL Server.</td>
                    <td>Está desarrollado por Oracle Corporation.</td>
                </tr>
                <tr>
                    <td>Escrito en</td>
                    <td>Está escrito en C y C ++.</td>
                    <td>También está escrito en C y C ++.</td>
                </tr>
                <tr>
                    <td>Plataformas compatibles</td>
                    <td>Admite los sistemas operativos Linux, Mac OS X, Microsoft Windows Server y Microsoft Windows. Originalmente fue desarrollado exclusivamente para Windows. Sin embargo, también está disponible en Linux y Mac OSX a través de la ventana acoplable. Pero, el servidor SQL en Linux o Mac OS X definitivamente carecerá de ciertas aracterísticas.</td>
                    <td>Compatibilidad sin problemas con los sistemas operativos Linux, Solaris, Windows, macOS y FreeBSD. Funciona prácticamente en todos los sistemas operativos populares.</td>
                </tr>
                <tr>
                    <td>Sintaxis</td>
                    <td>La sintaxis del servidor SQL es simple y fácil de usar.</td>
                    <td>Se observa que la sintaxis de MySQL es un poco compleja.</td>
                </tr>
                <tr>
                    <td>Plurilingüe</td>
                    <td>Disponible en varios idiomas</td>
                    <td>Disponible solo en idioma inglés.</td>
                </tr>
                <tr>
                    <td>Motor de almacenamiento</td>
                    <td>Motor de almacenamiento único que es su motor nativo.</td>
                    <td>Soporte de motor de almacenamiento múltiple. También tiene una opción para usar un motor de almacenamiento enchufable.</td>
                </tr>
                <tr>
                    <td>Filtración</td>
                    <td>Admite el filtrado basado en filas que filtra los registros de una base de datos por medio de la base de datos. Da la ventaja de filtrar múltiples filas sin considerar una cantidad de bases de datos. Además, los datos filtrados se guardan en una base de datos de distribución separada.</td>
                    <td>Permite filtrar las tablas, filas y usuarios de diversas formas. Sin embargo, MySQL admite el filtrado solo en base a bases de datos individuales. Por lo tanto, los desarrolladores deben filtrar las tablas de la base de datos individualmente mediante la ejecución de varias consultas.</td>
                </tr>
                <tr>
                    <td>Respaldo</td>
                    <td>En SQL Server, mientras se realiza una copia de seguridad de los datos, la base de datos no se bloquea. Esto permite a los usuarios completar el proceso de copia de seguridad y restauración de datos en menos tiempo y esfuerzo.</td>
                    <td>Se puede realizar una copia de seguridad de los datos extrayendo todos los datos como declaraciones SQL. Durante el proceso de copia de seguridad, la base de datos se bloquea. Esto evita las instancias de corrupción de datos al migrar de una versión de MySQL a otra. Sin embargo, aumenta el tiempo y los esfuerzos totales en el proceso de restauración de datos debido a la ejecución de varias sentencias SQL.</td>
                </tr>
                <tr>
                    <td>Opción para detener la ejecución de consultas</td>
                    <td>Puede truncar la ejecución de la consulta sin matar todo el proceso. Utiliza un motor transaccional para mantener la coherencia del estado.</td>
                    <td>No se puede cancelar o detener la ejecución de la consulta sin terminar todo el proceso.</td>
                </tr>
                <tr>
                    <td>Seguridad</td>
                    <td>Tanto SQL Server como MySQL se crean como colecciones binarias. Sin embargo, el servidor SQL es más seguro que MySQL. No permite que ningún proceso acceda y manipule los archivos de la base de datos en tiempo de ejecución. Los usuarios necesitan realizar funciones específicas o manipular archivos ejecutando una instancia. Esto evita que los piratas informáticos accedan o manipulen los datos directamente.</td>
                    <td>Permite a los desarrolladores manipular archivos de base de datos a través de binarios en tiempo de ejecución. También permite que otros procesos accedan y manipulen los archivos de la base de datos durante la ejecución.</td>
                </tr>
                <tr>
                    <td>Ediciones</td>
                    <td>Microsoft ofrece diferentes ediciones de SQL Server 2017: Enterprise, Standard, Web, Express y Developer Edition. Cada una de estas ediciones varía en términos de sus características y propósitos.</td>
                    <td>Dependiendo de las diferentes necesidades comerciales y técnicas, MySQL ofrece tres ediciones diferentes: MySQL Standard Edition, MySQL Enterprise Edition y MySQL Cluster CGE. También hay una edición comunitaria de MySQL que es de código abierto y gratuita.</td>
                </tr>
                <tr>
                    <td>Precios</td>
                    <td>La edición para desarrolladores y la edición rápida de SQL Server 2017 son gratuitas. La edición empresarial cuesta $ 14,256 por núcleo. Estándar: la edición por núcleo tiene un precio de $ 3,717, estándar: servidor + CAL cuesta $ 931. Para conocer el precio de la edición web, debe comunicarse con su socio de hospedaje.</td>
                    <td>La suscripción anual de la edición estándar es de 2000 USD; La edición empresarial cuesta USD 5.000 y la edición Cluster CGE cuesta $ 10.000.</td>
                </tr>
            </tbody>
        </table>
    `;
    return view;
};

export default Comparacion;