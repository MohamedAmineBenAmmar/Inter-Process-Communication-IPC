import { Outlet } from "react-router-dom";
import AppMenu from "./AppMenu";


export default function AppLayout() {
  return (
    <div className="App w-auto">
      <div className="App-header">
        <AppMenu />
      </div>
      <div className="App-content">
        <Outlet />
      </div>    
    </div>
  );
}