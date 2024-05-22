import { useParams } from "react-router-dom";
import { data } from "../data";

const HeroeB=()=>{

    const {id}=useParams();
    const {heroesB}=data;

    const heroe =heroesB.find((p)=>p.id===Number(id));
    return(
        <div>
           <p className="lead fs-4">vida S/. {heroe.hp}</p>
           <div className="card">
            <div className="card-header bg-dark text-white">
                {heroe.nombre}
            </div>
            <div className="card-body">
                <img src={heroe.imagen} alt="imagen" className="img-fluid" style={{'width':'50%'}}/>
            </div>
            <div className="card-footer bg-dark text-white">
                Descripcion: {heroe.descripcion}
            </div>
           </div>     
        </div>
    )
}
export default HeroeB;