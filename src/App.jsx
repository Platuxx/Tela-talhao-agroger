import { Header } from "./components/Header";
import { FieldScreen } from "./components/Content/Talhão";
import { Harvest } from "./components/Content/Colheita";

export function App() {
  return (
    <div>
      <Header />
      <FieldScreen />
      <Harvest />
    </div>
  );
}
