import icon1 from "../../../assets/icon1.svg";
import styles from "../Graphic/index.scss"

export function Graphic() {
    return (
        <div className="componentGraphic">
            <div className="header3">
                <img src={icon1} alt="" className="imgGraphic"/>
                <span className="">Gráfico</span>
                <hr className="horizontal"/>
            </div>
            
        </div>
    )
}