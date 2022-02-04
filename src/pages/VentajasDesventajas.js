const VentajasDesventajas = () => {
    const view = `
        <h1>Ventajas y Desventajas</h1>
        <h2>Ventajas</h2>
        <h3>Control sobre la redundancia de datos</h3>
        <p>Los sistemas de ficheros almacenan varias copias de los mismos datos en ficheros distintos. Esto hace que se desperdicie espacio de almacenamieto, además de provoar la falta de consistencia de datos.</p>
        <p>En los sistemas de bases de datos todos estos ficheros están intefrados, por lo que no se necesitan almacenar varias copias de los mismos datos. Sin embargo, en una base de datos no se puede eliminar la dedundancia completamente, ya que en ocasiones es necesaria para moldear las relaciones entre los datos.</P>
        <h3>Consistenacia de datos</h3>
        <p>Eliminando o controlando las redundancia de datos se redce en gran medida el riesgo que haya inconsistencias. Si un dato está almacenado una sola vez, cualquer actualización se debe realizar sólo una vez, y está disponible para todos los usuarios inmediatamente. Si un dato está duplucado y el sistema conoce esta redundancia, el propio sistema puede encargarse de garantizar que todas las copias se mantienen consistentes.</p>
        <h3>Compartir datos</h3>
        <p>En los sistemas de ficheros, los ficheros pertenecen a las personas o a los departamentos que los utilizan. Pero en los sistemas de bases de datos, la base de datos pertenecen la empresa y puede ser compartida por todos los usuarios que estén autorizados.</p>
        <h3>Mejora en la integridad de datos</h3>
        <p>La inegridad de la base de datos se refiere a la validez y la consistencia de los datos almacenados. Normalmente, la integridad se expresa mediante restricciones o reglas que no se pueden violar. Estas restricciones se pueden aplicar tanto a los datos, como a sus relaciones, y en el SGBD quien se debe encargar de mantenerlas.</p>
        <h3>Mejora en la accesibilidad a los datos</h3>
        <p>Muchos SGBD proporcionan lenguajes de consltas o generadores de informes que permiten al usuario hacer cualquier tipo de consulta sobre los datos, sin que sea necesario que un programador escriba una aplicación que realice tal tarea.</p>
        <h3>Mejora en el mantenimiento</h3>
        <p>En los sistemas de ficheros las descripciones de los daos se encuentran inmersas en los programas de aplicación que los manejan.</p>
        <p>Esto hace que los programas sean dependientes de los datos, de modo que un cambio en su estructura, o un cambio en el modo en que se almacena en disco, requiere cambios importantes en los programas cuyos datos se ven afectados</p>
        <p>Sin embargo, los SGbD separan las descripciones de los datos de las aplicaciones. Esto es lo que se conoce como independencia de datos, gracias a la cual se simplifica el mantenimiento de las aplicaciones que acceden a la base de datos.</p>
        <h2>Desventajas</h2>
        <h3>Complejidas</h3>
        <p>Los SGBD son un conjunto de programas que pueden llegar a ser complejos con una gran funcionalidas Es preciso comprender muy bien esta funcionalidadpara poder realizar un buen uso de ellos</p>
        <h3>Coste del equipamiento adicional</h3>
        <p>Tanto el SGBD, como la propia base de datos,pueden hacer que sea necesario adquirir más espacio de almacenamiento. Además, para alcanzar las prestaciones deseadas, es posible que sea necesario adquirir una máquina más grande o una máquina que se dedique solamente alSGBD. Todo esto hará que la implantación de un sistema de bases de datos sea más cara.</p>
        <h3>Vulnerable a los fallos</h3>
        <p>El hecho de que todo esté centralizado en el SGBD hace que el sistema sea más vulnerable ante los fallos que puedan prodcrise. Es por ello que deben tenerse copias de seguridad (Backup).
    `;
    return view;
};

export default VentajasDesventajas;