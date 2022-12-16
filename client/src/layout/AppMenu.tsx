import { Menubar } from "primereact/menubar";
import "../styles/AppMenu.css";
import { Link } from "react-router-dom";

const AppMenu = () => {
  const start = (
    <>
      <Link to="/">
        <img
          alt="logo"
          src="assets/images/logo.png"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
            (e.currentTarget.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          height="40"
          className="mr-2 mt-3"
        ></img>
        <h4 style={{ float: "right", color: "skyblue" }}>IPC</h4>
      </Link>
    </>
  );
  const end = (
    <>
      <a
        href="https://github.com/MohamedAmineBenAmmar/Inter-Process-Communication-IPC"
        target="_blank"
      >
        <i className="pi pi-github mr-5" style={{ fontSize: "1.5em" }}></i>
      </a>
    </>
  );

  return (
    <div>
      <div className="card">
        <Menubar model={[]} start={start} end={end} className="menubar" />
      </div>
    </div>
  );
};

export default AppMenu;
