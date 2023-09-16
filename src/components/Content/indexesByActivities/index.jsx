import icon1 from "../../../assets/icon1.svg";
import icon2 from "../../../assets/icon2.svg";
import styles from "../indexesByActivities/index.scss";

export function IndexesByActivities() {
  return (
    <div className="all">
      <div className="header2">
        <div>
          <img src={icon1} alt="" />
        </div>
        <span>Indice por atividades</span>
      </div>

      <div className="table">
          <table>
            <thead className="tableHeader">
              <tr>
                <th className="titleHeader1">Descrição</th>
                <th className="titleHeader2">Custos/ha</th>
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
                <span>COLHEITA MANUAL</span>
                <td className="priceTable">R$ 1.1780,83</td>
                <td className="priceTable">R$ 2.810,00</td>
              </tr>
              <tr>
                <img src={icon2} alt="" />
                <span className="textBig1">ADUBAÇÃO DE SOLO MANUAL</span>
                <td className="priceTable">R$ 1.1780,83</td>
                <td className="priceTable">R$ 2.810,00</td>
              </tr>
              <tr>
                <img src={icon2} alt="" />
                <span className="textBig2">APLICAÇÃO DE HERBICIDA</span>
                <td className="priceTable">R$ 1.1780,83</td>
                <td className="priceTable">R$ 2.810,00</td>
              </tr>
              <tr>
                <img src={icon2} alt="" />
                <span className="textBig3">APLICAÇÃO VIA SOLO</span>
                <td className="priceTable">R$ 1.1780,83</td>
                <td className="priceTable">R$ 2.810,00</td>
              </tr>
              <tr>
                <img src={icon2} alt="" />
                <span>ANÁLISE DE SOLO</span>
                <td className="priceTable">R$ 1.1780,83</td>
                <td className="priceTable">R$ 2.810,00</td>
              </tr>
              <tr>
                <img src={icon2} alt="" />
                <span>ESPALHAR PALHA</span>
                <td className="priceTable">R$ 1.1780,83</td>
                <td className="priceTable">R$ 2.810,00</td>
              </tr>
              <tr>
                <img src={icon2} alt="" />
                <span>ESPALHAR PALHA</span>
                <td className="priceTable">R$ 1.1780,83</td>
                <td className="priceTable">R$ 2.810,00</td>
              </tr>
            </tbody>
          </table>
      </div>
      {/* 
      <div className="graphic">
        <img src={icon1} alt="" />
        <h3>Gráfico</h3>
      </div> */}
    </div>
  );
}
