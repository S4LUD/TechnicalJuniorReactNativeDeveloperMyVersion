import { useContext } from "react";
import AppLayout from "./Layouts/AppLayout";
import AppLayoutv2 from "./Layoutv2/AppLayoutv2";
import AppContext from "./Context/";

export default function AppContainer() {
  const { isVersion } = useContext(AppContext);

  return <>{isVersion === 0 ? <AppLayoutv2 /> : <AppLayout />}</>;
}
