import logoImg from "../../../assets/logo1.svg";
import logoImg2 from "../../../assets/logo2.svg";
import logoImg3 from "../../../assets/logo3.svg";
import styles from "../Colheita/index.scss";

export function Harvest() {
  return (
    <div className="colects">
      <div className="colect1">
        <img src={logoImg} alt="" />
        <h3>COLHEITA MANUAL</h3>
        <span>DATA 20/07/2023</span>
      </div>

      <div className="colect2">
        <img src={logoImg2} alt="" />
        <h3>COLHEITA MECANICA</h3>
        <span>DATA 13/09/2023</span>
      </div>

      <div className="colect3">
        <img src={logoImg3} alt="" />
        <h3>PLANTIO DE CAFÉ</h3>
        <span>DATA 13/09/2023</span>
      </div>
    </div>
  );
}
