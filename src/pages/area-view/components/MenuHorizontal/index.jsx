import { GlobeHemisphereWest, CurrencyDollar } from "phosphor-react";
import { LuLayoutPanelLeft } from "react-icons/lu";
import styles from "./index.scss";

export function MenuHorizontal() {
  return (
    <header>
      <button>
        <GlobeHemisphereWest size={25} />
        Mapa
      </button>
      <button>
        <LuLayoutPanelLeft size={20} />
        Painel de Controle
      </button>
      <button>
        <CurrencyDollar size={20} />
        Custos
      </button>
    </header>
  );
}
