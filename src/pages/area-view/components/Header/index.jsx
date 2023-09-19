import { Printer } from "phosphor-react";
import { PencilSimple } from "phosphor-react";

import styles from "./index.scss";

export function Header() {
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
      </main>

      <div className="summary">
        <div className="infoGeral">
          <div>
            <h3></h3>
            <p></p>
            <h3>Variedade</h3>
            <p>CATUAÍ VERMELHO</p>
          </div>
          <div>
            <h3>Plantas por Talhoes</h3>
            <p>12000</p>
            <h3>Plantas por hectare</h3>
            <p>5.000,00</p>
          </div>
          <div>
            <h3>Data entrada</h3>
            <p>15/11/2022</p>
            <h3>Data carencia</h3>
            <p>15/11/2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
