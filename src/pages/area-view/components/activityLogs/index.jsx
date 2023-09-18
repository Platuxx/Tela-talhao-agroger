import icon1 from "../../../../../src/assets/icon1.svg";
import icon3 from "../../../../../src/assets/icon3.svg";
import { PencilSimple } from "phosphor-react";
import { CaretLeft } from "phosphor-react";
import { CaretRight } from "phosphor-react";
import { FolderPlus } from "phosphor-react";
import styles from "./index.scss";

export function ActivityLogs() {
  return (
    <div className="componente">
      <div className="title1">
        <img src={icon1} alt="" />
        <h3 className="title2">Registro de atividades</h3>
        <button className="register">
          <FolderPlus size={23} />
          Registrar atividade
        </button>
      </div>
      <hr className="lineLogs" />
      <div className="conteudo">
        <input type="text" placeholder="Atividade" />
        <CaretLeft className="iconSla" />
        <span>Maio - 2021</span>
        <CaretRight className="iconSla" />
      </div>
    </div>
  );
}
