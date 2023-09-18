import logo1 from "../../../../assets/logo1.svg";
import logo2 from "../../../../assets/logo2.svg";
import logo3 from "../../../../assets/logo3.svg";
import styles from "../ImageGallery/index.scss";

export function ImageGallery() {
  return (
    <div className="colects">
      <div className="colect1">
        <img src={logo1} alt="" />
        <h3>COLHEITA MANUAL</h3>
        <span>DATA 20/07/2023</span>
      </div>

      <div className="colect2">
        <img src={logo2} alt="" />
        <h3>COLHEITA MECANICA</h3>
        <span>DATA 13/09/2023</span>
      </div>

      <div className="colect3">
        <img src={logo3} alt="" />
        <h3>PLANTIO DE CAFÉ</h3>
        <span>DATA 13/09/2023</span>
      </div>
    </div>
  );
}
