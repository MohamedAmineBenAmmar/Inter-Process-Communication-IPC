import { Routes, Route } from "react-router-dom";

import AppLayout from "../layout";
import Landing from "../pages/Landing";
import Communication from "../pages/Communication"

export default function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Landing />} />
        <Route path="communication" element={<Communication />} />
      </Route>
    </Routes>
  );
}