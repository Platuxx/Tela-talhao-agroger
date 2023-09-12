import { Printer } from "phosphor-react";
import { PencilSimple } from "phosphor-react";
import styles from "./index.scss";

export function FieldScreen() {
  return (
    <div>
      <main>
        <h1 className="title">TALHÃO 01</h1>
        <button className="print">
          <Printer size={25} />
        </button>

        <button className="edit">
          <PencilSimple size={20} /> Editar Talhão
        </button>

        {/* <hr className="line" /> */}
      </main>

      <div className="summary">
        <div className="info1">
          <h3>Área</h3>
          <p>2.4 ha</p>
          <h3>Espacamento</h3>
          <p>2.50 X 0.80</p>
        </div>

        <div className="info2">
          <h3>Ano do plantio</h3>
          <p>2008</p>
          <h3>Variedade</h3>
          <p>CATUAÍ VERMELHO</p>
        </div>

        <div className="info3">
          <h3>Plantas por Talhoes</h3>
          <p>12000</p>
          <h3>Plantas por hectare</h3>
          <p>5.000,00</p>
        </div>

        <div className="info4">
          <h3>Data entrada</h3>
          <p>15/11/2022</p>
          <h3>Data carencia</h3>
          <p>15/11/2022</p>
        </div>
      </div>
    </div>
  );
}
