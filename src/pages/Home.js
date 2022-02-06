import Post from "../utils/Post";

const Home = () => {
    const view =`
        <div class="content-home">
            <h5>Historia de las Base de Datos</h5>
            <div class="d-flex justify-content-center">
                <a href="#/historia/" class="btn btn-primary">Go post</a>
            </div>
        </div>
        <div class="content-home">
            <h5>Características</h5>
            <div class="d-flex justify-content-center">
                <a href="#/caracteristicas/" class="btn btn-primary">Go post</a>
            </div>
        </div>
        <div class="content-home">
            <h5>Ventajas y Desventajas</h5>
            <div class="d-flex justify-content-center">
                <a href="#/ventajas-desventajas/" class="btn btn-primary">Go post</a>
            </div>
        </div>
        <div class="content-home">
            <h5>Oracle SQL VS PosgreSQL</h5>
            <div class="d-flex justify-content-center">
                <a href="#/oracle-vs-posgres/" class="btn btn-primary">Go post</a>
            </div>
        </div>
        <div class="content-home">
            <h5>SQL Server VS MySQL</h5>
            <div class="d-flex justify-content-center">
                <a href="#/mysql-vs-sqlserver/" class="btn btn-primary">Go post</a>
            </div>
        </div>
        <div class="content-home">
            <h5>Licenciamiento</h5>
            <div class="d-flex justify-content-center">
                <a href="#/licenciamiento/" class="btn btn-primary">Go post</a>
            </div>
        </div>
        <div class="content-home">
            <h5>SQL o NoSQL</h5>
            <div class="d-flex justify-content-center">
                <a href="#/sql-o-nosql/" class="btn btn-primary">Go post</a>
            </div>
        </div>
        <div class="content-home">
            <h5>Referencias</h5>
            <div class="d-flex justify-content-center">
                <a href="#/referencias/" class="btn btn-primary">Go post</a>
            </div>
        </div>
    
    `;
    return view;
};

export default Home;