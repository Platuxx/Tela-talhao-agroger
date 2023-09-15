import icon1 from "../../../assets/icon1.svg";
import icon2 from "../../../assets/icon2.svg";
import styles from "../indexesByActivities/index.scss";

export function IndexesByActivities() {
  return (
    <div className="all">
      <div className="header2">
        <img src={icon1} alt="" />
        <span>Indice por atividades</span>
      </div>

      <table>
        <thead className="tableHeader">
          <tr>
            <th>Descrição</th>
            <th>Custos/ha</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="contentTable">
          <tr>
            <img src={icon2} alt="" sizes={24} />
            <span>DESBROTAR</span>
            <td className="priceTable">R$ 1.1780,83</td>
            <td className="priceTable">R$ 2.810,00</td>
          </tr>
          <tr>
            <img src={icon2} alt="" />
            <td>COLHEITA MANUAL</td>
            <td className="priceTable">R$ 1.1780,83</td>
            <td className="priceTable">R$ 2.810,00</td>
          </tr>
          <tr>
            <img src={icon2} alt="" />
            <td className="textBig1">ADUBAÇÃO DE SOLO MANUAL</td>
            <td className="priceTable">R$ 1.1780,83</td>
            <td className="priceTable">R$ 2.810,00</td>
          </tr>
          <tr>
            <img src={icon2} alt="" />
            <td className="textBig2">APLICAÇÃO DE HERBICIDA</td>
            <td className="priceTable">R$ 1.1780,83</td>
            <td className="priceTable">R$ 2.810,00</td>
          </tr>
          <tr>
            <img src={icon2} alt="" />
            <td className="textBig3">APLICAÇÃO VIA SOLO</td>
            <td className="priceTable">R$ 1.1780,83</td>
            <td className="priceTable">R$ 2.810,00</td>
          </tr>
          <tr>
            <img src={icon2} alt="" />
            <td>ANÁLISE DE SOLO</td>
            <td className="priceTable">R$ 1.1780,83</td>
            <td className="priceTable">R$ 2.810,00</td>
          </tr>
          <tr>
            <img src={icon2} alt="" />
            <td>ESPALHAR PALHA</td>
            <td className="priceTable">R$ 1.1780,83</td>
            <td className="priceTable">R$ 2.810,00</td>
          </tr>
          <tr>
            <img src={icon2} alt="" />
            <td>ESPALHAR PALHA</td>
            <td className="priceTable">R$ 1.1780,83</td>
            <td className="priceTable">R$ 2.810,00</td>
          </tr>
        </tbody>
      </table>
      {/* 
      <div className="graphic">
        <img src={icon1} alt="" />
        <h3>Gráfico</h3>
      </div> */}
    </div>
  );
}
