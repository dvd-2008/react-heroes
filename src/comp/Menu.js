import { Link, Route, Routes } from "react-router-dom";

import Home from "./Home";
import ProductosB from "../comp-bodega/ProductosB";
import ProductoB from "../comp-bodega/ProductoB";
import HeroesB from "../comp-heroes/heroesB";
import HeroeB from "../comp-heroes/HeroeB";


const Menu = () => {

    return (
        <header className="container">

            <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                        
                          


                            <li className="nav-item">
                                <Link className="nav-link active" to="/heroes-lista">Heroes</Link>
                            </li>




                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mas Acciones
                                </a>
                            
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        {/* rutas */}
        <Routes>
      

            <Route path="productos-bodega" element={<ProductosB/>}>
                <Route path=":id" element={<ProductoB/>}/>
            </Route>
            <Route path="heroes-lista" element={<HeroesB/>}>
                <Route path=":id"  element={<HeroeB/>}    />
            </Route>
         

            <Route path="/" element={<Home/>} />
            <Route path="*" element={<p className="alert alert-danger mt-2 lead fs-2">Pagina no encontrada</p>}/>
        </Routes>

        </header>
    )
}

export default Menu;