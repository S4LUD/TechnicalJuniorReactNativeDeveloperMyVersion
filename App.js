"use strict";

import AppContainer from "./AppContainer";
import { AppProvider } from "./Context";

export default function App() {
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  );
}
