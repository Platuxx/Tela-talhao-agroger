import icon1 from "../../../assets/icon1.svg"
import icon2 from "../../../assets/icon2.svg"
import styles from "../indexesByActivities/index.scss"

export function IndexesByActivities() {
    return (
        <div>
            <header>
                <img src={icon1} alt="" />
                <h3>Indice por atividades</h3>
            </header>

            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Custos/ha</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>DESBROTAR</td>
                        <td>R$ 1.1780,83</td>
                        <td>R$ 2.810,00</td>
                    </tr>
                    <tr>
                        <td>COLHEITA MANUAL</td>
                        <td>R$ 1.1780,83</td>
                        <td>R$ 2.810,00</td>
                    </tr>
                    <tr>
                        <td>ADUBAÇÃO DE SOLO MANUAL</td>
                        <td>R$ 1.1780,83</td>
                        <td>R$ 2.810,00</td>
                    </tr>
                    <tr>
                        <td>APLICAÇÃO DE HERBICIDA</td>
                        <td>R$ 1.1780,83</td>
                        <td>R$ 2.810,00</td>
                    </tr>
                    <tr>
                        <td>APLICAÇÃO VIA SOLO</td>
                        <td>R$ 1.1780,83</td>
                        <td>R$ 2.810,00</td>
                    </tr>
                    <tr>
                        <td>ANÁLISE DE SOLO</td>
                        <td>R$ 1.1780,83</td>
                        <td>R$ 2.810,00</td>
                    </tr>
                    <tr>
                        <td>ESPALHAR PALHA</td>
                        <td>R$ 1.1780,83</td>
                        <td>R$ 2.810,00</td>
                    </tr>
                    <tr>
                        <td>ESPALHAR PALHA</td>
                        <td>R$ 1.1780,83</td>
                        <td>R$ 2.810,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}