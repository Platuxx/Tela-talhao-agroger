import { GlobeHemisphereWest, CurrencyDollar } from "phosphor-react";
import { LuLayoutPanelLeft } from "react-icons/lu";

export function Header() {
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
