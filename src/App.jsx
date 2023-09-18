import { MenuHorizontal } from "../src/pages/area-view/components/MenuHorizontal";
import { Header } from "../src/pages/area-view/components/Header";
import { ImageGallery } from "../src/pages/area-view/components/ImageGallery";
import { IndexesByActivities } from "../src/pages/area-view/components/indexesByActivities";
import { Graphic } from "../src/pages/area-view/components/Graphic";
import { ActivityLogs } from "../src/pages/area-view/components/activityLogs";

export function App() {
  return (
    <div>
      <MenuHorizontal />
      <Header />
      <ImageGallery />
      <div className="grid">
        <IndexesByActivities />
        <Graphic />
      </div>
      <ActivityLogs />
    </div>
  );
}
