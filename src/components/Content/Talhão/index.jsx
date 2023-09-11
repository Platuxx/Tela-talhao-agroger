import { Printer } from "phosphor-react";
import { PencilSimple } from "phosphor-react";
import styles from "./index.scss";

export function FieldScreen() {
  return (
    <main>
      <h1 className="title">TALHÃO 01</h1>
      <button className="print">
        <Printer size={25} />
      </button>

      <button className="edit">
        <PencilSimple size={20} /> Editar Talhão
      </button>
      {/* 
      <hr className="line" /> */}
    </main>
  );
}
