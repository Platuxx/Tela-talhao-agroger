import icon1 from "../../../assets/icon1.svg";
import icon3 from "../../../assets/icon1.svg";
import styles from "../activityLogs/index.scss";
import { PencilSimple } from "phosphor-react";
import { CaretLeft } from "phosphor-react";
import { CaretRight } from "phosphor-react";
import { FolderPlus } from "phosphor-react";

export function ActivityLogs() {
  return (
    <div>
      <div className="title1">
        <img src={icon1} alt="" />
        <h3 className="title2">Registro de atividades</h3>
        <button className="register">
          <FolderPlus size={23} />
          Registrar atividade
        </button>
      </div>
      <div className="conteudo">
        <i className="icon3">
          <img src={icon3} alt="" />
        </i>
        <input type="text" placeholder="Atividade" />
        <CaretLeft />
        <span>Maio - 2021</span>
        <CaretRight />
      </div>
    </div>
  );
}
