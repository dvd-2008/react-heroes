import { NavLink, Outlet } from "react-router-dom";
import { data } from "../data";

const HeroesB = () => {

    const { heroesB } = data;

    const estiloPrendido={
        color:'red',
        textDecoration:'none'
    }

    const estiloApagado={
        textDecoration:'none'
    }

    return (
        <main>
            <p className="lead fs-2 text-danger">Total de Heroes para elejir : {heroesB.length}</p>
            <section className="row">
                <div className="col col-6">
                    <div className="border border-2 border-dark shadow p-2">
                        {
                            heroesB.map((hero) => (
                                <div key={hero.id}>
                                    <p className="lead fs-4 text-dark">
                                        <NavLink to={`/heroes-lista/${hero.id}`}
                                            style={({isActive})=>(isActive?estiloPrendido:estiloApagado)}
                                        >
                                            {hero.nombre}
                                        </NavLink>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="col col-5">
                    <div className="border border-2 border-dark shadow p-2">
                        <Outlet />
                    </div>
                </div>
            </section>

        </main>
    )
}
export default HeroesB;