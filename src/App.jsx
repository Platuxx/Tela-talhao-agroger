import { Header } from "./components/Header";
import { FieldScreen } from "./components/Content/Talhão";
import { Harvest } from "./components/Content/Colheita";
import { IndexesByActivities } from "./components/Content/indexesByActivities";
import { ActivityLogs } from "./components/Content/activityLogs";

export function App() {
  return (
    <div>
      <Header />
      <FieldScreen />
      <Harvest />
      <IndexesByActivities />
      <ActivityLogs />
    </div>
  );
}
